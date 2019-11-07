import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: "signup",
    // user: { email: "", password: "", username: "" }
});

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);