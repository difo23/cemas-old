export const updateRatings = (row, ratings) => {
	const studentPosition = row - 1;
	let studentRatings = ratings[studentPosition];

	// Multiple by 1 for string to number fast parse
	studentRatings.cf = Math.round(
		(1 * studentRatings.ago_sept_oct +
			1 * studentRatings.nov_dic_ene +
			1 * studentRatings.feb_mar +
			1 * studentRatings.abr_may_jun) /
			4
	);

	console.log('Update Ratings : ', ratings);
	return ratings;
};
