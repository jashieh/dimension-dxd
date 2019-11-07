import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: "login",
    // user: { email: "", password: "", username: "" }
});

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);