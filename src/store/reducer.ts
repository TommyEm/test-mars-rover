import { IAction, IAppState } from "../types/store";
import * as actions from '../store/actionTypes';


export function reducer(state: IAppState, action: IAction) {
	let newState = { ...state };

	switch (action.type) {
		case actions.UPDATE_ROVER_DIRECTION:
			newState.rover.direction = action.payload;
			break;

		case actions.UPDATE_ROVER_POSITION:
			newState.rover.position = action.payload;
			break;

		case actions.UPDATE_COMMANDS:
			console.log('REDUCER', action.payload);
			newState.commands = action.payload;
			break;

		default:
			throw new Error();
	}

	return newState;
}