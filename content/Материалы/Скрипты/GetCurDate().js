function GetCurDate(tp){
	const calendarAPI = Calendarium.getAPI("calendar-name");
		return calendarAPI.getCurrentDate();
}
module.exports = GetCurDate;