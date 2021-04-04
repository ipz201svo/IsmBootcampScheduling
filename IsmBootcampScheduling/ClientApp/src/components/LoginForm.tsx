import * as React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {ApplicationState} from '../store';



/*type loginFormProps =
    LoginFormStore.LoginFormState
    & typeof LoginFormStore.actionCreators
    & RouteComponentProps<{}>;*/

export const LoginForm: React.FC = (/*props: loginFormProps*/) => {

    return (
        /*<div className="row align-self-center">
            <div className="col"/>
            <div className="col">*/
                <div className="card position-absolute top-50 start-50 translate-middle">
                    <h1 className="m-3">Sign into your account</h1>
                    <div className="card-body">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="emailInput"
                                   placeholder="name@example.com"/>
                            <label htmlFor="emailInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>
                            <label htmlFor="passwordInput">Password</label>
                        </div>
                        <button type="button" className="btn btn-primary mb-3">Sign in</button>
                        <p className="text-start">Forgot password? <a href="#" className="link-primary">Restore
                            password</a></p>
                    </div>
                </div>
            /*</div>
            <div className="col"/>
        </div>*/
    );
}

/*export default connect(
    (state: ApplicationState) => state.LoginForm, // Selects which state properties are merged into the component's props
    LoginFormStore.actionCreators // Selects which action creators are merged into the component's props
)(LoginForm as any);*/
