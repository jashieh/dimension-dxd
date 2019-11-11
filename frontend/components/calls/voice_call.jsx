import React from 'react';
import { broadcastData, JOIN_CALL, LEAVE_CALL, EXCHANGE, ice } from '../../util/calls_api_util';

class VoiceCall extends React.Component {
    constructor(props){
        super(props);
        this.pcPeers = {};
        this.userId = Math.floor(Math.random() * 10000);
        this.joinCall = this.joinCall.bind(this);
        this.leaveCall = this.leaveCall.bind(this);
    }
    
    componentDidMount(){
        this.remoteVideoContainer = 
        document.getElementById("remote-video-container")
        navigator.mediaDevices.getUserMedia({audio: true, video: true})
        .then(stream => {
            this.localStream = stream;
            document.getElementById("local-video").srcObject = stream;
        }).catch(error => { console.log(error)});
    }

    join(data){
        this.createPC(data.from, true)
    }

    joinCall(e){
        App.cable.subscriptions.create(
            { channel: "CallChannel" },
            { 
              connected: () => {
                broadcastData({ type: JOIN_CALL, from: this.userId});
              },
              received: data => {
                console.log("RECEIVED: ", data);
                if (data.from === this.userId) return;
                switch(data.type){
                  case JOIN_CALL:
                    return this.join(data);
                  case EXCHANGE:
                    if (data.to !== this.userId) return;
                    return this.exchange(data);
                  case LEAVE_CALL:
                    return this.removeUser(data);
                  default:
                    return;
                }
              }
        });
    }

    createPC(userId, offerBool){
        const pc = new RTCPeerConnection(ice);
        this.pcPeers[userId] = pc;
        this.localStream.getTracks()
            .forEach(track => pc.addTrack(track, this.localStream));
        if (offerBool) {
          pc.createOffer().then(offer => {
            pc.setLocalDescription(offer).then(() => {
             setTimeout( () => {
              broadcastData({
                type: EXCHANGE,
                from: this.userId,
                to: userId,
                sdp: JSON.stringify(pc.localDescription),
              });
             }, 0);
            });
          });
         }
        pc.onicecandidate = (e) => {
            broadcastData({
                type: EXCHANGE,
                from: this.userId,
                to: userId,
                sdp: JSON.stringify(e.candidate)
            })
        };
        pc.ontrack = (e) => {
            const remoteVid = document.createElement("video");
            remoteVid.id = `remoteVideoContainer+${userId}`;
            remoteVid.autoplay = "autoplay";
            remoteVid.srcObject = e.streams[0];
            this.remoteVideoContainer.appendChild(remoteVid);
        }; 
        pc.oniceconnectionstatechange = (e) => {
            if (pc.iceConnectionState === 'disconnected'){
                broadcastData({ type: LEAVE_CALL, from: userId });
            }
        };
        return pc;   
    }

    exchange(data){
        let pc;
        if(this.pcPeers[data.from]){
          pc = this.pcPeers[data.from];
        } else{
          pc = this.createPC(data.from, false);
        }
        if (data.candidate){
          let candidate = JSON.parse(data.candidate)
          pc.addIceCandidate(new RTCIceCandidate(candidate))
        }
        if(data.sdp){
          const sdp = JSON.parse(data.sdp);
          if(sdp && !sdp.candidate){
             pc.setRemoteDescription(sdp).then( () =>{
             if (sdp.type === 'offer'){
                pc.createAnswer().then(answer => {
                   pc.setLocalDescription(answer)
                   .then( () => {
                      broadcastData({
                         type: EXCHANGE,
                         from: this.userId,
                         to: data.from,
                         sdp: JSON.stringify(pc.localDescription)
                      });
                   });
                });
             }
             });
          }
        } 
    }
    
    leaveCall(e){
        const pcKeys = Object.keys(this.pcPeers);
        for (let i = 0; i < pcKeys.length; i++) {
           this.pcPeers[pcKeys[i]].close();
        }
        this.pcPeers = {};   
        this.localStream.getTracks()
         .forEach(function (track) { track.stop(); })
        
        this.localStream.srcObject = null;
        App.cable.subscriptions.subscriptions = [];
        this.remoteVideoContainer.innerHTML = "";
        broadcastData({ type: LEAVE_CALL, from: this.userId });    
    }

    removeUser(data){
        let video = document.getElementById(`remoteVideoContainer+${data.from}`);
        video && video.remove();
        let peers = this.pcPeers
        delete peers[data.from]    
    }

    render(){
        return(
            <div className="VideoCall">
            <div id="remote-video-container"></div>
            <video id="local-video" autoPlay></video>
            <button onClick={this.joinCall}>Join Call</button>
            <button onClick={this.leaveCall}>Leave Call</button>
            </div>
        )
    }
}

export default VoiceCall;