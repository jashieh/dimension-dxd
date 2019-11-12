import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ChannelFormContainer from '../channels/channel_form_container';
import AddServerOptions from '../servers/add_server_options';
import InviteModal from '../servers/invite_modal';
import LeaveServerModal from '../servers/leave_server_modal';
import ServerSettings from '../servers/server_settings';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.modal) {
      // this.modalDiv.focus();
    }
  }

  handleKeyDown (e, cB) {
    if(e.key === "Escape") {
      cB();
    }
  };

  render() {
    const { modal, closeModal } = this.props;
    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case 'channel':
        component = <ChannelFormContainer serverId={this.props.server.id}/>
        break;
      // case 'server':
      //   component = <AddServerOptions 
      //     createServer={this.props.createServer} 
      //     joinServer={this.props.joinServer}
      //     toggleModal={this.toggleModal} 
      //     className="modal"/>
      //   break;
      case 'invite': 
        component = <InviteModal server={this.props.server}/>
        break;
      case 'leave':
        component = <LeaveServerModal {...this.props} />
        break;
      case 'serverSettings':
        component = <ServerSettings server={this.props.server}/> 
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" 
        onClick={closeModal} 
        onKeyDown={(e) => this.handleKeyDown(e,closeModal)} 
        tabIndex="0"
        ref={(modalDiv) => (this.modalDiv = modalDiv)}
      >
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);