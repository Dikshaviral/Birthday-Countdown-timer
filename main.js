const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('min');
const s = document.getElementById('sec');
const year = new Date().getFullYear();

const time = new Date();
time.setFullYear(year , 8, 16);

function update()
{
    const curent = new Date();
    const diff = time - curent;
    const day = Math.floor(diff/1000/60/60/24);
    const hrs = Math.floor((diff/1000/60/60)%24);
    const mi = Math.floor((diff/1000/60)%60);
    const secs = Math.floor((diff/1000)%60);

    console.log(day);

    d.innerText = day;
    h.innerText = hrs<10?'0'+hrs:hrs;
    m.innerText = mi<10?'0'+mi:mi;
    s.innerText = secs<10?'0'+secs:secs;

}

setInterval(update, 1000);