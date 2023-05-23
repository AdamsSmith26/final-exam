// burger menu
document.getElementById("burger").addEventListener("click", function () {
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
    var myTime = 5 * 3600 + 60 * 45 + 47,
        display = document.querySelector('#time');
    startTimer(myTime, display);
};

var card = document.getElementById('card-left');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 300) {
        card.classList.add("animate__zoomInLeft");
    } else {
        card.classList.remove("animate__zoomInLeft");
    }
});

var card1 = document.getElementById('card-center');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 300) {
        card1.classList.add("animate__zoomIn");
    } else {
        card1.classList.remove("animate__zoomIn");
    }
});

var card2 = document.getElementById('card-right');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 300) {
        card2.classList.add("animate__zoomInRight");
    } else {
        card2.classList.remove("animate__zoomInRight");
    }
});


var photo1 = document.getElementById('photo1');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 1200) {
        photo1.classList.add("animate__fadeInUp");
    } else {
        photo1.classList.remove("animate__fadeInUp");
    }
});

var photo2 = document.getElementById('photo2');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 1200) {
        photo2.classList.add("animate__fadeInDown");
    } else {
        photo2.classList.remove("animate__fadeInDown");
    }
});

var photo3 = document.getElementById('photo3');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 2800) {
        photo3.classList.add("animate__fadeInTopLeft");
    } else {
        photo3.classList.remove("animate__fadeInTopLeft");
    }
});

var photo4 = document.getElementById('photo4');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 2800) {
        photo4.classList.add("animate__fadeInDown");
    } else {
        photo4.classList.remove("animate__fadeInDown");
    }
});

var img1 = document.getElementById('img1');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 2000) {
        img1.classList.add("animate__fadeIn");
    } else {
        img1.classList.remove("animate__fadeIn");
    }
});

var img2 = document.getElementById('img2');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 2000) {
        img2.classList.add("animate__fadeIn");
    } else {
        img2.classList.remove("animate__fadeIn");
    }
});

var img3 = document.getElementById('img3');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 2000) {
        img3.classList.add("animate__fadeIn");
    } else {
        img3.classList.remove("animate__fadeIn");
    }
});

var img4 = document.getElementById('img4');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 2000) {
        img4.classList.add("animate__fadeIn");
    } else {
        img4.classList.remove("animate__fadeIn");
    }
});

var img5 = document.getElementById('img5');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 2000) {
        img5.classList.add("animate__fadeIn");
    } else {
        img5.classList.remove("animate__fadeIn");
    }
});

var footer = document.getElementById('footer');
window.addEventListener('scroll', async function () {
    if (window.scrollY > 3600) {
        footer.classList.add("animate__fadeInUp");
    } else {
        footer.classList.remove("animate__fadeInUp");
    }
});



