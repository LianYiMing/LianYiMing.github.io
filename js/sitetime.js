function siteTime() {
	var seconds = 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;
	var today = new Date();
	var startYear = "{% site.siteYear %}";
	var startMonth = "{% site.siteMonth %}";
	var startDate = "{% site.siteDate %}";
	var startHour = "{% site.siteHour %}";
	var startMinute = "{% site.siteMinute %}";
	var startSecond = "{% site.siteSecond %}";
	var todayYear = today.getFullYear();
	var todayMonth = today.getMonth() + 1;
	var todayDate = today.getDate();
	var todayHour = today.getHours();
	var todayMinute = today.getMinutes();
	var todaySecond = today.getSeconds();
	var t1 = Date.UTC(startYear, startMonth, startDate, startHour, startMinute, startSecond);
	var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
	var diff = t2 - t1;
	var diffYears = Math.floor(diff / years);
	var diffDays = Math.floor((diff / days) - diffYears * 365);
	var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
	var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) /
		minutes);
	var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -
		diffMinutes * minutes) / seconds);
	if (startYear == todayYear) {
		document.getElementById("sitetime").innerHTML = "窝の小站已在各种风雨中苟活 " + diffDays + " 天 " + diffHours +
			" 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";
	} else {

		document.getElementById("sitetime").innerHTML = "窝の小站已在各种风雨中苟活 " + diffYears + " 年 " + diffDays +
			" 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";
	}
}
setInterval(siteTime, 1000);
