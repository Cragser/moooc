export const GET_ALL_USERS = 'GET_ALL_USERS';
export const getAll = () => (dispatch: Function) => {
	dispatch({ type: GET_ALL_USERS, payload: [1,2,3] });
}