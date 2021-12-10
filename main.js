function change()
{

    const body = document.querySelector('body');
    body.classList.toggle('light');
    body.style.transition = `0.3s linear`;
}

const deg = 6; 

const hr = document.getElementById('hours');
const mn = document.getElementById('minutes');
const sc = document.getElementById('seconds');



setInterval(() => {
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let msec = day.getMilliseconds();
    

    
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})

