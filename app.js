
    let alarms = [];
    setInterval(clock,1000);
    function clock() {
        const date = new Date();
        // document.getElementById("time").innerText = date;
        document.getElementById("hour").innerText = date.getHours();
        document.getElementById("min").innerText = date.getMinutes();
        document.getElementById('sec').innerText = date.getSeconds();
        if(date.getHours()<=12) {
            document.getElementById('zone').innerText = 'AM'
        } else {
            document.getElementById('zone').innerText = 'PM'
        } 
    }

    function RunClock() {
        // for(let i=0;i<alarms.length;i++) {
            const date = new Date();
            let timeString = `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
            let alramId = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            if(alarms.includes(timeString)) {
                alert(`"Alarm active : " ${alramId}`);
            }
        // }
    }

    setInterval(RunClock,1000);

    function setAlarm() {
        let hour = document.getElementById("setHour").value;
        let minutes = document.getElementById("setMinutes").value;
        let sec = document.getElementById("setSeconds").value;
        let alarmTime = hour+"-"+minutes+"-"+sec;
        let alramId = `${hour}-${minutes}-${sec}`
        alarms.push(alarmTime);
        document.getElementById("setHour").value = null;
        document.getElementById("setMinutes").value = null;
        document.getElementById("setSeconds").value = null;
        console.log(alarms);
        
        var divtest= document.createElement("div");        
        divtest.innerHTML = `<div id="${alramId}" class="alarmList"><div class="floatLeft">${hour} : ${minutes} : ${sec}  </div> <button class="floatRight" onClick="deleteAlarm('${hour}-${minutes}-${sec}')">Delete</button></div>`              
        document.getElementById("alarms").appendChild(divtest) 
    }

    function deleteAlarm(time) {
        let index = alarms.indexOf(time);
        alarms.splice(index,1);
        document.getElementById(time).remove();
    }