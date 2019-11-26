import { ranSaga} from 'redux-saga';

export async function recordSaga (saga, initalAction) {
    const dispatched = [];

    await ranSaga(
        {
            dispath: (action) => dispatched.push(action);
        },
        saga,
        initalAction
    ).done;

    return dispatched;
}