import {Action, Reducer} from 'redux';


export interface ILoginFormState {
    isLoading: boolean,
    valid: boolean | undefined
}

export interface ISucceedLoginFormAction {
    type: 'LOGINFORM_SUCCEED',
    payload: ISucceedPayload
}

export interface IFailedLoginFormAction {
    type: 'LOGINFORM_FAILED'
}

export interface ISubmitLoginFormAction {
    type: 'LOGINFORM_SUBMIT',
    payload: {
        email: string,
        password: string
    }
}

export interface ISucceedPayload {
    email: string,
}

export const actionCreators = {
    succeed: (email: string) => ({
        type: 'LOGINFORM_SUCCEED',
        payload: {
            email,
        }
    }) as ISucceedLoginFormAction,

    failed: () => ({ type: 'LOGINFORM_FAILED' } as IFailedLoginFormAction),

    submit: (email: string, password: string) => ({
        type: 'LOGINFORM_SUBMIT',
        payload: {
            email,
            password
        }
    }) as ISubmitLoginFormAction
};

const initialState: ILoginFormState = {
    isLoading: false,
    valid: true
}

export const reducer: Reducer<ILoginFormState> =
    (state: ILoginFormState = initialState, action: Action): ILoginFormState => {
    switch (action.type) {
        case 'LOGINFORM_SUBMIT':
            return {
                ...state,
                isLoading: true
            }

        case 'LOGINFORM_SUCCEED':
            console.log('access given');
            return {
                ...state,
                valid: true,
                isLoading: false
            };

        case 'LOGINFORM_FAILED':
            console.log('access not given');
            return {
                ...state,
                valid: false,
                isLoading: false
            }

        default:
            return state;
    }
}