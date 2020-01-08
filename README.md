# <a href="https://dimension-dxd.herokuapp.com/#/" target="_blank">Dimension</a>

## Background 
Dimension x Dimension is an all-in-one voice, video and text chatting application inspired by Discord. Built on the React-Rails stack, Dimension allows you to create private servers and channels to host private live chats with your friends.

## Technologies Used
* **Ruby on Rails:** Rails was used to manage the application's backend interface.
* **React/Redux:** React and Redux libraries were used to facilitate frontend development.
* **PostgreSQL:** PostgreSQL was used as the primary database for the project. 
* **Heroku:** Heroku was used to host the web application online.
* **AWS S3:** Amazon Webservice S3 was used for cloud image storage to allow users to upload custom profile pictures.
* **Websockets:** Websockets protocol built into Rail's ActionCable was used to send live messages.
* **WebRTC:** Rail's implementation of webRTC was used to enable video/voice chat between users by estabilishing a peer-to-peer online connection.

## Key Features
* **User Authentification** <br/>
User are able to create accounts and keep their information and messages behind a secure authentification system. A demo user account is also pre-created for anyone who wants to quickly preview the site without having to create their own account.

* **Servers/Channels** <br/>
Users can create servers to which they can invite their friends using the unique invite link generated for each server. This custom URL can simply be copied into the browser and the server will automatically be joined if the user is logged in. The settings of the server can be modified, but only by the administrator, which is assigned to the user who created the server. Custom text channels can then be created within these servers.


* **Live Messenger** <br/>
Each channel contains a live message chat, meaning any other users on the server will instantly see messages sent in the channel without having to refresh their browsers.

```ruby
class ChatChannel < ApplicationCable::Channel
  # subscribe to chat when user enters channel
  def subscribed
    stream_for 'chat_channel'
  end

  # invoke speak to broadcast message when message is sent from frontend
  def speak(data)
    message = Message.create(body: data['body'], author_id: data['author_id'], 
      channel_id: data['channel_id'])
    socket = { id: message.id, body: message.body, author_id: message.author_id, 
      channel_id: message.channel_id }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
end

```

```javascript
// Send message across the ActionCable Subscription when user hits submit
sendMessage(e) {
  App.cable.subscriptions.subscriptions[0].speak({ body: this.state.body, 
  author_id: this.props.currentUser.id, channel_id: this.props.channel.id});
}

```

* **Video/Voice Chat** <br/>
Within each server, there is also one video and voice chat channel. When users join this channel, they can click the "join call" button to join a call with any other users currently on the server. This feature currently only works when the users are connected to the same wifi network, since the voice call is only hosted through a STUN server, which will not allow for video data to be passed through due to network security. However, a TURN cloud server will be hosted in the future to allow for calls across the internet.


```javascript
call(data){
  let pc;
  
  // Check if user is already connected to the call
  if(this.pcPeers[data.from]){
    pc = this.pcPeers[data.from];
  } else {
    pc = this.createPC(data.from, false);
  }
  
  // Check if PC is a valid candidate to be added to the ICE (Interactive Connectivity Establishment)
  if (data.candidate){
    let candidate = JSON.parse(data.candidate)
    pc.addIceCandidate(new RTCIceCandidate(candidate))
  }
  
  // Check if SDP (Session Description Protoco), which is used to construct offers/answers for
  // describing (media and non-media) streams, is appropriate for recipients of a session description 
  // to participate in the session.
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
```

* **Chatbot** <br/>
An chatbot that will respond to user's messages with an intelligent response is implemented within each channel. The chatbot is hosted through Brainshop's chatbot API, and uses natural langauge processing and a neural network to learn the user's responses and evolve its messages over time. The chatbot can be toggled off and on by typing /chatbot in the messsenger.
