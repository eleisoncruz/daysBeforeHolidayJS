// This module will display the date of selected holiday then print 
// the number of days before that holiday

// Declaring necessary variables for date format
  var dateObj = new Date();
  var month = dateObj.getMonth();
  var monthName = ["January", "February", "March", "April",
   "May", "June", "July", "August", "September", "October", "November", "December"];
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();
  var fullYear = monthName[month] + "/" + day + "/" + year;

function holidaySelected() {
  // Fetch the child node of the element "holiday" w/c is the select tag
var userSelect = document.getElementById("holidays").value;
  if (userSelect == "holy_week") {
    var daysBeforeHoliday = (365 - 273) - day;
    document.getElementById("dateArea").innerHTML = "Holy Week will start on " + monthName[3] + " " + "2, " + year;
    document.getElementById("message").innerHTML = "<strong>"+daysBeforeHoliday+"</strong>" + " days before Holy-Week.";
  } else if (userSelect == "independence") {
    var daysBeforeHoliday = (365 - 202) - day;
    document.getElementById("dateArea").innerHTML = "Independence day will be on " + monthName[5] + " " + "12, " + year;
    document.getElementById("message").innerHTML = "<strong>"+daysBeforeHoliday+"</strong>" + " days before Independence Day.";
  } else if (userSelect == "christmas") {
    var daysBeforeHoliday = (365 - 6) - day;
    document.getElementById("dateArea").innerHTML = "Christmas day will be on " + monthName[11] + " " + "25, " + year;
    document.getElementById("message").innerHTML = "<strong>"+daysBeforeHoliday+"</strong>" + " days before Christmas Day.";
  } else if (userSelect == "new_year") {
    var daysBeforeHoliday = (365 + 1) - day;
    document.getElementById("dateArea").innerHTML = "New Year's day will be on " + monthName[0] + " " + "1, " + (year + 1);
    document.getElementById("message").innerHTML = "<strong>"+daysBeforeHoliday+"</strong>" + " days before New Year's day.";
  }
}

window.onload = function() {
  // Initialize elements and attributes
  var btnSubmit = document.createElement("input");
  btnSubmit.setAttribute("id", "submit");
  btnSubmit.setAttribute("type", "button");
  btnSubmit.setAttribute("value", "Submit");
  // Actual placement of submit button
  document.getElementById("theButton").appendChild(btnSubmit);
  // Setting the command in the created button for font changing
  btnSubmit.onclick = function() {
    holidaySelected();
  }
}