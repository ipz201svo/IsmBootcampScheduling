import { call, put, takeEvery } from 'redux-saga/effects';
import { sha256 } from 'js-sha256';
//import {Action} from "redux";
import {actionCreators, ISubmitLoginFormAction} from "./LoginFormReducer";

/*function* watchSubmit() {
    yield takeEvery('LOGINFORM_SUBMIT', sagaWorker);
}*/

//const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

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
                    mutation($em: String!) {
                        login(loginFields: {email: $em}) {
                        id
                        email
                        password
                        salt
                        }
                    }
                        `,
                    variables: {
                        em: `${action.payload.email}`,
                    }
                }
            )
        }).then(res => res.json());

        console.log(result);

        let thingToHash = action.payload.password + result.data.login.salt;
        let hashResult = sha256(thingToHash);

        console.log(hashResult);

        if (result.data.login !== null && hashResult === result.data.login.password)
            yield put(actionCreators.succeed(result.data.login.email));
        else
            yield put(actionCreators.failed());
        
        
        //if (result.data.login === null)
        //    yield put(actionCreators.failed());
        //else
        //    yield put(actionCreators.succeed(result.data.login.email));
        /*yield delay(2000);*/
        console.log('finish fetching');

    } catch {
        yield put(actionCreators.failed());
    }

}

export default function* loginFormSaga() {
    yield takeEvery('LOGINFORM_SUBMIT', sagaWorker);
}