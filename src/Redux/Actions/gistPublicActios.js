import { types } from '../../Types/types';

export const getAllGistPublic = () => {
	return async (dispatch) => {
		try {
			const resp = await fetch(`https://api.github.com/gists/public`);
			const body = await resp.json();

			if (resp.status === 200) {
				dispatch(loadGistPublict(body));
			}

		} catch {
			// console.log("error");
		}
	};
};

export const gistDetailed = (id, gist) => ({
	type: types.gistPublicDetailed,
	payload: {
		id,
		...gist,
	},
});


/******************************************************************************************* */

const loadGistPublict = (gist) => ({
	type: types.getAllGistPublic,
	payload: gist,
});

export const spinnerLoading = (spinner) => ({
	type: types.SpinnerLoading,
	payload: spinner,
});
