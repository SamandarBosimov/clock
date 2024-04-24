function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minuts = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM"

    if(hour == 0){
        hour = 12
    }
    if(hour > 12){
      hour = hour - 12 
      session = "PM" 
    }
        hour = (hour < 10) ? "0" + hour : hour;
        minuts = (minuts < 10) ? "0" + minuts : minuts;
        second = (second < 10) ? "0" + second : second;

        var time = hour + ":" + minuts + ":" + second + " " + session;
        document.getElementById("MyClockDisplay").innerText = time;
        document.getElementById("MyClockDisplay").textContent = time;
 
        setTimeout(showTime, 1000);
}

showTime();