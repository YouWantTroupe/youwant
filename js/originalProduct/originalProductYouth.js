var open1 = document.getElementById("open1");
var popup1 = document.getElementById("popup1");
var close1 = document.getElementById("close1");

open1.addEventListener('click', function(){
    popup1.style.display = 'flex';
})

close1.addEventListener('click', function(){
    popup1.style.display = 'none';
})

var open2 = document.getElementById("open2");
var popup2 = document.getElementById("popup2");
var close2 = document.getElementById("close2");

open2.addEventListener('click', function(){
    popup2.style.display = 'flex';
})

close2.addEventListener('click', function(){
    popup2.style.display = 'none';
})

var open3 = document.getElementById("open3");
var popup3 = document.getElementById("popup3");
var close3 = document.getElementById("close3");

open3.addEventListener('click', function(){
    popup3.style.display = 'flex';
})

close3.addEventListener('click', function(){
    popup3.style.display = 'none';
})



// 看大圖 1

$(document).ready(function(){

	var swiper1 = new Swiper('.swiper-container1', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox1 = document.getElementById("fullBox1");
	var leftArrow1 = document.getElementById("leftArrow1");
	var rightArrow1 = document.getElementById("rightArrow1");
	var swiperContainer1 = document.getElementById('swiperContainer1');
	var bg11 = document.getElementById("bg11");
	var bg12 = document.getElementById("bg12");
	var bg13 = document.getElementById("bg13");
	var bg14 = document.getElementById("bg14");
	var bg15 = document.getElementById("bg15");
	var bg16 = document.getElementById("bg16");
	var bg17 = document.getElementById("bg17");
	var bg18 = document.getElementById("bg18");
	var bg19 = document.getElementById("bg19");
	

	fullBox1.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'hidden');
	})

	swiperContainer1.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow1.addEventListener('click', function(event){
			swiper1.slidePrev()
			event.stopPropagation();

	})

	rightArrow1.addEventListener('click', function(event){
			swiper1.slideNext()
			event.stopPropagation();
	})

	bg11.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(1);
	})

	bg12.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(2);
	})

	bg13.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(3);
	})

	bg14.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(4);
	})
	
	bg15.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(5);
	})

	bg16.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(6);
	})

	bg17.addEventListener('click', function(){
		$(fullBox1).css('visibility', 'visible');
		swiper1.slideTo(7);
})

	bg18.addEventListener('click', function(){
		$(fullBox1).css('visibility', 'visible');
		swiper1.slideTo(8);
	})

	bg19.addEventListener('click', function(){
		$(fullBox1).css('visibility', 'visible');
		swiper1.slideTo(9);
	})

})




// 看大圖 2

$(document).ready(function(){

	var swiper2 = new Swiper('.swiper-container2', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox2 = document.getElementById("fullBox2");
	var leftArrow2 = document.getElementById("leftArrow2");
	var rightArrow2 = document.getElementById("rightArrow2");
	var swiperContainer2 = document.getElementById('swiperContainer2');
	var bg21 = document.getElementById("bg21");
	var bg22 = document.getElementById("bg22");
	var bg23 = document.getElementById("bg23");
	var bg24 = document.getElementById("bg24");
	var bg25 = document.getElementById("bg25");
	var bg26 = document.getElementById("bg26");
	var bg27 = document.getElementById("bg27");
	var bg28 = document.getElementById("bg28");
	var bg29 = document.getElementById("bg29");
	

	fullBox2.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'hidden');
	})

	swiperContainer2.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow2.addEventListener('click', function(event){
			swiper2.slidePrev()
			event.stopPropagation();

	})

	rightArrow2.addEventListener('click', function(event){
			swiper2.slideNext()
			event.stopPropagation();
	})

	bg21.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(1);
	})

	bg22.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(2);
	})

	bg23.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(3);
	})

	bg24.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(4);
	})
	
	bg25.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(5);
	})

	bg26.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(6);
	})

	bg27.addEventListener('click', function(){
		$(fullBox2).css('visibility', 'visible');
		swiper2.slideTo(7);
})

	bg28.addEventListener('click', function(){
		$(fullBox2).css('visibility', 'visible');
		swiper2.slideTo(8);
	})

	bg29.addEventListener('click', function(){
		$(fullBox2).css('visibility', 'visible');
		swiper2.slideTo(9);
	})

})



// 看大圖 3

$(document).ready(function(){

	var swiper3 = new Swiper('.swiper-container3', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox3 = document.getElementById("fullBox3");
	var leftArrow3 = document.getElementById("leftArrow3");
	var rightArrow3 = document.getElementById("rightArrow3");
	var swiperContainer3 = document.getElementById('swiperContainer3');
	var bg31 = document.getElementById("bg31");
	var bg32 = document.getElementById("bg32");
	var bg33 = document.getElementById("bg33");
	var bg34 = document.getElementById("bg34");
	var bg35 = document.getElementById("bg35");
	var bg36 = document.getElementById("bg36");
	var bg37 = document.getElementById("bg37");
	var bg38 = document.getElementById("bg38");
	var bg39 = document.getElementById("bg39");

	var bg40 = document.getElementById("bg40");
	var bg41 = document.getElementById("bg41");
	var bg42 = document.getElementById("bg42");
	var bg43 = document.getElementById("bg43");
	var bg44 = document.getElementById("bg44");
	var bg45 = document.getElementById("bg45");
	var bg46 = document.getElementById("bg46");
	var bg47 = document.getElementById("bg47");
	var bg48 = document.getElementById("bg48");
	

	fullBox3.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'hidden');
	})

	swiperContainer3.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow3.addEventListener('click', function(event){
			swiper3.slidePrev()
			event.stopPropagation();

	})

	rightArrow3.addEventListener('click', function(event){
			swiper3.slideNext()
			event.stopPropagation();
	})

	bg31.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(1);
	})

	bg32.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(2);
	})

	bg33.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(3);
	})

	bg34.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(4);
	})
	
	bg35.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(5);
	})

	bg36.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(6);
	})

	bg37.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(7);
	})

	bg38.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(8);
	})

	bg39.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(9);
	})



	bg40.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(10);
	})

	bg41.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(11);
	})

	bg42.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(12);
	})

	bg43.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(13);
	})

	bg44.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(14);
	})

	bg45.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(15);
	})

	bg46.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(16);
	})

	bg47.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(17);
	})

	bg48.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(18);
	})


})


