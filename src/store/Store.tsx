import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { IAppContext, IAppState } from '../types/store';
import * as constants from '../constants';



export const initialState: IAppState = {
	commands: '',
	rover: {
		direction: constants.ROVER_DEFAULT_DIRECTION,
		position: constants.ROVER_DEFAULT_POSITION,
	},
};


export const AppContext = createContext<IAppContext>({
	state: initialState,
	dispatch: () => {},
});

interface IStore {
	children: React.ReactNode;
}

export const Store = ({ children }: IStore) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
