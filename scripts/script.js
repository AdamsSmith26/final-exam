// burger menu
document.getElementById("burger").addEventListener("click", function(){
    document.getElementsByClassName("mynav")[0].classList.toggle("open");
    document.getElementsByClassName("nav-btn")[0].classList.toggle("myopacity");
});

window.addEventListener('DOMContentLoaded', () => { 

    const count = new CountUp( 
      'num1', 
      0, 
      8.9, 
      1, 
      3 
    );
    count.start() 

    const count1 = new CountUp( 
      'num2', 
      0, 
      65, 
      0, 
      3 
    );
    count1.start() 

    const count2 = new CountUp( 
      'num3', 
      0, 
      87, 
      0, 
      3 
    );
    count2.start() 
  })

  function startTimer(duration, display) {
    var timer = duration, hourses, minutes, seconds;
    setInterval(function () {
        hourses = parseInt(timer / 3600), 10
        minutes = parseInt(timer % 3600 / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hourses = hourses < 10 ? "0" + hourses : hourses;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hourses + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var myTime = 5*3600 + 60 * 45 + 47,
        display = document.querySelector('#time');
    startTimer(myTime, display);
};

var card = document.getElementById('card-left');
    window.addEventListener('scroll', async function () {
        if (window.scrollY  > 200) {
            card.classList.add("animate__slideInLeft");
        } else {
            card.classList.remove("animate__slideInLeft");
        }
    });

var card1 = document.getElementById('card-center');
    window.addEventListener('scroll', async function () {
        if (window.scrollY  > 200) {
            card1.classList.add("animate__zoomIn");
        } else {
            card1.classList.remove("animate__zoomIn");
        }
    });

var card2 = document.getElementById('card-right');
    window.addEventListener('scroll', async function () {
        if (window.scrollY  > 200) {
            card2.classList.add("animate__slideInRight");
        } else {
            card2.classList.remove("animate__slideInRight");
        }
    });