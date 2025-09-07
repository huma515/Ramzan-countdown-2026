// function updateCountdown(){
// var ramzanDate = moment("2026-02-17 00:00:00")
// var now = moment()
// var diff =moment.duration(ramzanDate.diff(now))

// document.getElementById("Countdown").innerHTML=
// diff.months() +"Months" +
// diff.days() +"Dyas" +
// diff.hours() +"Hours" +
// diff.minutes() +"Minutes" +
// diff.seconds() +"Seconds" 

// }


// setInterval(updateCountdown, 1000);
// updateCountdown()
function updateCountdown() {
  // Ramzan date (17 Feb 2026)
  var ramzanDate = moment("2026-02-17 00:00:00");
  var now = moment();

  var diff = moment.duration(ramzanDate.diff(now));

  // Values ko divs me set karna
  document.getElementById("months").innerHTML = diff.months();
  document.getElementById("days").innerHTML = diff.days();
  document.getElementById("hours").innerHTML = diff.hours();
  document.getElementById("minutes").innerHTML = diff.minutes();
  document.getElementById("seconds").innerHTML = diff.seconds();
}

// Har second update hoga
setInterval(updateCountdown, 1000);
updateCountdown();
