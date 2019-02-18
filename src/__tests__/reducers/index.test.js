import reducer from '../../reducers';
import { SET_USER_PROFILE } from '../../actions/types';

test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
});

test("should handle SET_USER_PROFILE", () => {
    const state = reducer({}, {
        type: SET_USER_PROFILE,
        payload: {
            description: "software engineer from SF"
        }
    });

    expect(state).toEqual({
        description: "software engineer from SF",
        isLoading: false
    });
});