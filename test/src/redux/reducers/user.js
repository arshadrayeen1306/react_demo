import { GET_ALL,GET_US} from "../actions/ActionType";

const initialState = {
    contactAll: [],
    contactUS: [],

};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                contactAll: action.contactAll,
            };
        case GET_US:
            return {
                ...state,
                contactUS: action.contactAll,
            };

        default:
            return state;

    }
}
export default reducer;