import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';
import ChannelForm from './channel_form';

const mapStateToProps = (state) => ({
    // server: state.entities
    sasdasda: state
});

const mapDispatchToProps = dispatch => ({
    createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel)),
    otherForm: (
        <button onClick={() => dispatch(openModal('channel'))}>
        +
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);
    