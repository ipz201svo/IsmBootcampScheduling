import {call, put, takeEvery} from 'redux-saga/effects';
import {Action} from "redux";
import {actionCreators, ISubmitLoginFormAction} from "./LoginFormReducer";

/*function* watchSubmit() {
    yield takeEvery('LOGINFORM_SUBMIT', sagaWorker);
}*/

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const url = '/graphql';

function* sagaWorker(action: ISubmitLoginFormAction) {
    try {
        console.log('start fetching');
        let result;
        result = yield fetch(url, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    query: `
                    mutation($em: String!, $pas: String!) {
                        login(loginFields: {email: $em, password: $pas}) {
                        id
                        email
                        password
                        }
                    }
                        `,
                    variables: {
                        em: `${action.payload.email}`,
                        pas: `${action.payload.password}`
                    }
                }
            )
        }).then(res => res.json());

        console.log(result);
        if (result.data.login === null)
            yield put(actionCreators.failed());
        else
            yield put(actionCreators.succeed(result.data.login.email, result.data.login.password));
        /*yield delay(2000);*/
        console.log('finish fetching');

    } catch {
        yield put(actionCreators.failed());
    }

}

export default function* loginFormSaga() {
    yield takeEvery('LOGINFORM_SUBMIT', sagaWorker);
}