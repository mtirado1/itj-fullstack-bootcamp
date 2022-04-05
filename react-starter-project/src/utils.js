
function formatDate(date) {
	if (date === null || date === "") {
		return "No date";
	}
	const dateObject = new Date(date);
	return dateObject.toLocaleDateString("en-US");
}

export default formatDate;
