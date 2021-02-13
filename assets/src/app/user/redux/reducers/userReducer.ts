import { GET_ALL_USERS } from "../actions/userAction";

const INITIAL_STATE = {
	users: [1,2]
};

export default (state = INITIAL_STATE, action: { type: string; payload: any; }) => {
	switch (action.type) {
		case GET_ALL_USERS:
			return {...state, usuarios: action.payload}
		default: return state
	}
};
