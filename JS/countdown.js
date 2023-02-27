function setTimer(elem_id, date) {
    // set the date we're counting down to
        var countDownDate = new Date(date).getTime();
        
        //update the tag with id "countdown" every 1 second
        setInterval(function () {
           // find the amount of "seconds" between now and target
          var current_date = new Date().getTime();
          var seconds_left = (countDownDate - current_date) / 1000;
          // do some time calculations
          var days = parseInt(seconds_left / 86400);
          var seconds_left = seconds_left % 86400;
          var hours = parseInt(seconds_left / 3600);
          var seconds_left = seconds_left % 3600;
          var minutes = parseInt(seconds_left / 60);
          var seconds = parseInt(seconds_left % 60);
          // format countdown string + set tag value
          document.getElementById(elem_id).innerHTML = days + " D : " + hours + " H : " + minutes + " M : " + seconds + " S";
        }, 1000);

       }
    setTimer("countdown1","April 13, 2023");
    setTimer("countdown2","May 15, 2023");
    setTimer("countdown3","June 03, 2023");