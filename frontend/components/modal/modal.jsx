import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ChannelFormContainer from '../channels/channel_form_container'

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.modal) {
      this.modalDiv.focus();
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
        component = <ChannelFormContainer serverId={this.props.serverId}/>
        break;
      case 'leave':
        // component
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