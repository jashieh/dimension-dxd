import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import ChannelForm from './channel_form';

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = dispatch => ({
    otherForm: (
        <button onClick={() => dispatch(openModal('channel'))}>
        +
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);
    