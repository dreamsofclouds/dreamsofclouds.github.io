function calculateWorkingHours() {
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    
    //separate the input HH:MM into an Array of elements separated by ":"
    var startHour = parseInt(start.split(':')[0]);
    var startMinute = parseInt(start.split(':')[1]);

    var endHour = parseInt(end.split(':')[0]);
    var endMinute = parseInt(end.split(':')[1]);

    var totalMinutes = ((endHour * 60) + endMinute) - ((startHour * 60) + startMinute) - 45;
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;

    document.getElementById("result").innerHTML = hours + " hours and " + minutes + " minutes";
}

