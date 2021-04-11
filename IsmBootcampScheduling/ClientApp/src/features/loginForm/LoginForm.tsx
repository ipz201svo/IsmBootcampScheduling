import * as React from 'react';
import {connect, useDispatch} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {ApplicationState} from '../../store';
import {useState} from "react";
import * as LoginFormStore from './LoginFormReducer';


type loginFormProps =
    LoginFormStore.ILoginFormState
    & typeof LoginFormStore.actionCreators
    & RouteComponentProps<{}>;

export const LoginForm: (props: loginFormProps) => JSX.Element = (props: loginFormProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*const dispatch = useDispatch()*/

    const onEmailChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value);
    const onPasswordChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value);
    const onSubmitClick = () => props.submit(email, password);

    const invalidStyle = !props.valid ? 'is-invalid' : '';

    return (
        <div className="card position-absolute top-50 start-50 translate-middle">
            <h1 className="m-3">Sign into your account</h1>
            <div className="card-body">
                <div className="has-validation">
                    <div className="form-floating mb-3">
                        <input type="email" className={`form-control ${invalidStyle}`} id="emailInput"
                               placeholder="name@example.com" onChange={onEmailChanged} required={true}/>
                        <label htmlFor="emailInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className={`form-control ${invalidStyle}`} id="passwordInput"
                               placeholder="Password"
                               required={true} onChange={onPasswordChanged}/>
                        <label htmlFor="passwordInput">Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3" onClick={onSubmitClick}>Sign in</button>
                </div>
                <p className="text-start">Forgot password? <a href="#" className="link-primary">Restore
                    password</a></p>
                {props.isLoading && <p className="fst-italic">Loading...</p>}
            </div>
        </div>
    );
}

export default connect(
    (state: ApplicationState) => state.loginForm, // Selects which state properties are merged into the component's props
    LoginFormStore.actionCreators // Selects which action creators are merged into the component's props
)(LoginForm as any);
