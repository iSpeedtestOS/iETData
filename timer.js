var events = [
	{
		"name": "October event",
		"evDate": "Oct 30, 2023 17:00:00 GMT-07:00",
		"notificationID": "oct23",
		"tagline": "Scary fast.",
		"kind": "event"
	}
];

//var eventDatee = new Date("Oct 5, 2021 6:00:00 GMT-07:00").getTime();
var eventDate = new Date("Sep 12, 2023 10:00:00 GMT-07:00").getTime();

var eventname = "September Event";

var name = "<br><br>Time until  <br>" + eventname;
var nameover = "<br><br>No Event <br> announced yet.";
var eventover = "Upcoming: <br> WWDC. <br>Check back soon.";
eventover = "Check back soon.";

var notification = "oct2021";
var tagline = "Unleashed.";

const lang = navigator.language;
if (lang.includes("de")) {
	name = "<br><br>Zeit bis <br>" + eventname;
	nameover = "<br><br>Noch kein  Event <br> angekündigt.";
	eventover = "Bald: <br> WWDC. <br>Komm bald wieder.";
	eventover = "Komm bald wieder.";
}
if (lang.includes("zh")) {
	name = "<br><br>直到 <br>" + eventname;
	nameover = "<br><br>尚未宣布任何活动";
	eventover = "不久： <br> WWDC. <br>稍后检查。";
	eventover = "稍后检查。";
}

var timerBox = document.getElementById('timer');
var eventNameBox = document.getElementById('eventname');



  //var jsonurl = "https://events-delivery.apple.com/1008imtjaxavpdfovkroykttfnkscxylrrmg/js_files/event/url.json";



function rechne() {

	var left = eventDate - new Date().getTime();


    if (left > 0) {

        var d = Math.floor(left / (1000 * 60 * 60 * 24)), h = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), m = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60)), s = Math.floor((left % (1000 * 60)) / (1000));

    
        var day = " day,<br>", days = " days,<br>", hour = " hour,<br> ", hours = " hours,<br> ", min = " minute<br>", mins = " minutes<br>", sec = " second", secs = " seconds", and = "and ", daysleft, hoursleft, minutesleft, secondsleft, timeleft;
        
        if (lang.includes("de")) {
        	day = " Tag,<br>";
        	days = " Tage,<br>";
        	hour = " Stunde,<br> ";
        	hours = " Stunden,<br> ";
        	min = " Minute<br>";
        	mins = " Minuten<br>";
        	sec = " Sekunde";
        	secs = " Sekunden";
        	and = "und ";
        }
        
        if (lang.includes("zh")) {
        	day = "天,<br>";
        	days = "天,<br>";
        	hour = "小时,<br> ";
        	hours = "小时,<br> ";
        	min = "分钟<br>";
        	mins = "分钟<br>";
        	sec = "秒";
        	secs = "秒";
        	and = "和 ";
        }

   
        if (d === 0) {
            daysleft = "";
        } else {
            if (d === 1) {
                daysleft = d + day;
            } else {
                daysleft = d + days;
            }
        }

        if (h === 0) {
            if (d === 0) {
                hoursleft = "";
            } else {
                hoursleft = h + hours;
            }
        } else {
            if (h === 1) {
                hoursleft = h + hour;
            } else {
                hoursleft = h + hours;
            }
        }

        if (m === 0) {
            if (d === 0 && h === 0) {
                minutesleft = "";
            } else {
                minutesleft = m + mins;
            }
        } else {
            if (m === 1) {
                minutesleft = m + min;
            } else {
                minutesleft = m + mins;
            }
        }

        if (s === 0) {
            if (d === 0 && h === 0 && m === 0) {
                secondsleft = "";
            } else {
                secondsleft = and + s + secs;
            }
        } else {
            if (s === 1) {
                if (m === 0 && h === 0 && d === 0) {
                    secondsleft = s + sec;
                } else {
                    secondsleft = and + s + sec;
                }
            } else {
                if (m === 0 && h === 0 && d === 0) {
                    secondsleft = s + secs;
                } else {
                    secondsleft = and + s + secs;
                }
            }
        }


        if (d === 0 && h === 0 && m === 0 && s === 0) {
            timeleft = eventover;
            name = nameover;
        } else {
            timeleft = daysleft + hoursleft + minutesleft + secondsleft;
        }

        timerBox.innerHTML = timeleft;
    
   
    }
    
    
    
    if (left < 0) {
        timerBox.innerHTML = eventover;
        eventNameBox.innerHTML = nameover;
        name = nameover;
    }
    
    eventNameBox.innerHTML = name;

}





rechne();

var TimerFunction = setInterval(function () {
	
	rechne();
	
}, 500);




  
  if (jsonurl) {
      setTimeout(function() {
  	var script = document.createElement('script');
       script.setAttribute('type', 'text/javascript');
       script.setAttribute('src', '/video.js');
       document.body.appendChild(script);
      },3000);
  }
