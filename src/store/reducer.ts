import produce from 'immer';
import { IAction, IAppState } from "../types/store";
import { initialState } from "./Store";
import * as actions from '../store/actionTypes';


export const reducer = produce((draft: IAppState, action: IAction) => {
	switch (action.type) {
		case actions.UPDATE_ROVER_DIRECTION:
			draft.rover.direction = action.payload;
			break;

		case actions.UPDATE_ROVER_POSITION:
			draft.rover.position = action.payload;
			break;

		case actions.UPDATE_COMMANDS:
			draft.commands = action.payload;
			break;

		case actions.RESET:
			draft.commands = '';
			draft.rover = { ...initialState.rover };
			break;
	}
});
