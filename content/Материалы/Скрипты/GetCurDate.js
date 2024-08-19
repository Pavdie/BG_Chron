function GetCurDate(fc_date){
const calendarAPI = Calendarium.getAPI("Календарь Хаптоса");
const currentDate = calendarAPI.getCurrentDate();
		return currentDate;
}
module.exports = GetCurDate;