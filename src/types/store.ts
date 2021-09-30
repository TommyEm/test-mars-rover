import { Dispatch, ReducerAction } from 'react';
import { reducer } from '../store/reducer';
import { RoverDirection, RoverPosition } from '../types/rover';


export interface IAppState {
	commands: string;
	rover: {
		direction: RoverDirection;
		position: RoverPosition;
	},
}

export interface IAppContext {
	state: IAppState;
	dispatch: Dispatch<ReducerAction<typeof reducer>>;
}

export interface IAction {
	type: string;
	payload: any;
}
