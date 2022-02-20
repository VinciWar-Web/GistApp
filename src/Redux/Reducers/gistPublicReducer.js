import { types } from '../../Types/types';

const initialState = {
    GistAllPublic: [],
	gistDetailed: {},
	SpinnerActive: false
};
export const getAllGistPublicReducer = (state = initialState, action) => {
	switch (action.type) {

		case types.getAllGistPublic:
			return {
				...state,
				GistAllPublic: [...action.payload],
			};

		case types.gistPublicDetailed:
			return {
				...state,
				gistDetailed: {
					...action.payload,
				},
			};

		case types.SpinnerLoading:
			return {
				...state,
				SpinnerActive: action.payload,
			};

		default:
			return state;
	}
};
