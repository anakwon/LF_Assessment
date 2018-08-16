var carouselImages = document.querySelectorAll(".carousel-slide");
var current = 0;
var totalSlides = carouselImages.length;
var leftMovement = 0;
var setTimeout;

function autoplay(){
	setInterval (function (){
		$("#right-arrow").click()}, 3000);
	}



function startCarousel(){
    pagination();
}


function slideLeft(){
    current--; 
    leftMovement <= -100 ? leftMovement += 100 : leftMovement = -200;
    $("#main-carousel").css("left", `${leftMovement}%`)
    $("#pagination ul li").removeClass('active');
    $(`#pagination ul li:nth-child(${current + 1})`).addClass('active');
}

function slideRight(){
    current++;
    leftMovement > -200 ? leftMovement -= 100 : leftMovement = 0;
    $("#main-carousel").css("left", `${leftMovement}%`)
    $("#pagination ul li").removeClass('active');
    $(`#pagination ul li:nth-child(${current + 1})`).addClass('active');
}

var leftArrow = document.querySelector("#left-arrow");
var rightArrow = document.querySelector("#right-arrow");

leftArrow.addEventListener("click", function(){
    if (current === 0) {
        current = carouselImages.length;
    }

    slideLeft();
})

rightArrow.addEventListener("click", function(){
    if (current === carouselImages.length - 1) {
        current = -1;
    }
    slideRight();
});


function pagination(){
    $('#pagination ul li').removeClass('active');
    $('#pagination ul li:first-child').addClass('active');
}


//for each slides
$.each ($('.carousel-slide'), function(){

    //create a pagination
    var li = document.createElement('li');
    $('#pagination ul').append(li);

});

startCarousel();
autoplay();