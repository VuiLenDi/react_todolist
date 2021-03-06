import { call, put, takeEvery } from 'redux-saga/effects'

const wait5second = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                {
                    users: [
                        {
                            id: 1,
                            name: "Tran Minh"
                        },
                        {
                            id: 2,
                            name: "Le Hong Ngoc"
                        }
                    ],
                    msg: 'Success'
                }
            );
        }, 1000);
    });
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
    try {
        const user = yield call(wait5second);

        yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga