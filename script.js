function updateclock(){
    let now=new Date();
    let hour=String(now.getHours()).padStart(2,'0');
    let minute= String(now.getMinutes()).padStart(2,'0');
    let second= String(now.getSeconds()).padStart(2,'0');
    let millisecond= String(now.getMilliseconds()).padStart(2,'0');
    document.getElementById("clock").innerText=`${hour}:${minute}:${second}:${millisecond}`;
   }
    setInterval(updateclock, 50);