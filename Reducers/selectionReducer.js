export default (state = null, action) => {

	switch(action.type) {

		case 'select_library':
			const temp = {
				...action,
			};
			console.log("temp!", temp);
			return temp; //temp.payload;

		default:
			return state;
	}
};