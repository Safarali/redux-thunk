import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import moxios from 'moxios';
import { fetchUserProfile } from '../../actions/index';

beforeEach(() => {
    moxios.install();
});

afterEach(() => {
    moxios.uninstall();
})

// test("it should dispatch setUserProfile with server data on success", (done) => {
//     const mockStore = configureStore([thunk]);
//     const store = mockStore({});

//     store.dispatch(fetchUserProfile());

//     moxios.wait(() => {
//         let request = moxios.requests.mostRecent();

//         request
//             .respondWith({
//                 status: 200,
//                 response: {
//                     name: "Emma"
//                 }
//             })
//             .then(function() {
//                 const actualActions = store.getActions();
//                 expect(actualActions).toEqual([
//                     {
//                         type: "SET_USER_PROFILE",
//                         payload: {
//                             name: "Emma"
//                         }
//                     }
//                 ]);
//                 done();
//             })
//     });
// });


test("it should dispatch setUserProfile with server data on success", (done) => {
    const mockStore = configureStore([thunk]);
    const store = mockStore({});

    store.dispatch(fetchUserProfile());

    moxios.wait(async () => {
        let request = moxios.requests.mostRecent();

        const response = await request
            .respondWith({
                status: 200,
                response: {
                    name: "Emma"
                }
            })
        const actualActions = store.getActions();
        expect(actualActions).toEqual([
            {
                type: "SET_USER_PROFILE",
                payload: {
                    name: "Emma"
                }
            }
        ]);
        done();
    });
});