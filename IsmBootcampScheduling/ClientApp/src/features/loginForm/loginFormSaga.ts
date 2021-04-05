import { call, put, takeEvery} from 'redux-saga/effects';
import {Action} from "redux";
import {actionCreators} from "./LoginFormSlice";

function* watchSubmit() {
    yield takeEvery('LOGINFORM_SUBMIT', fetchUser);
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* fetchUser(action: Action) {
    try {
        console.log('start fetching')
        yield delay(2000);
        console.log('finish fetching');
        yield put(actionCreators.succeed());
    } catch {
        yield put(actionCreators.failed());
    }

}

export default function* loginFormSaga() {
    yield takeEvery('LOGINFORM_SUBMIT', fetchUser);
}