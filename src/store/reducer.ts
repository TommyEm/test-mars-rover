import { IAction, IAppState } from "../types/store";
import { initialState } from "./Store";
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
			newState.commands = action.payload;
			break;

		case actions.RESET_COMMANDS:
			newState = { ...initialState };
			console.log(newState);

			break;

		default:
			throw new Error();
	}

	return newState;
}