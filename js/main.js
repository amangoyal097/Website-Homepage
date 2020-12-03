const button = document.querySelector('.logobutton');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const navitems = document.querySelectorAll('.nav-links a');
const cards = document.querySelectorAll('.qcard');
function ScrollAppeartext() {
	for(i = 0 ; i < cards.length ; i++) {
		var position = cards[i].getBoundingClientRect().top;
		var screenpos = (5 * window.innerHeight) / 6;
		if(position < screenpos) {
			if(window.matchMedia)
			cards[i].style.animation = `flip 1s ease-in-out forwards`;
			if(window.innerWidth > 1024)
				cards[i].style.animationDelay = `${i/5}s`;
		}
	}
	var heading = document.querySelectorAll('.features-heading');
	var hr = document.querySelectorAll('.heading-line');
	for(i = 0 ; i < heading.length ; i++) {
		var posh = heading[i].getBoundingClientRect().top;
		var poshr = hr[i].getBoundingClientRect().top;
		if(posh < screenpos) {
			heading[i].style.animation = "slidein 0.5s ease-in forwards";
		}
		if(posh < screenpos) {
			hr[i].style.animation = "slidein 0.5s ease-in forwards 0.1s";
		}
	}
	var pics = document.querySelectorAll('.productimg');
	for(i = 0 ; i < pics.length ; i++) {
		posp = pics[i].getBoundingClientRect().top;
		if(posp < screenpos)
			pics[i].style.animation = "fadeup 0.5s ease-in forwards";
			if(window.innerWidth > 1024)
				pics[i].style.animationDelay = `${i/5}s`;
	}
	var clients = document.querySelectorAll('#clients .col-md-3');
	for(i = 0 ; i < clients.length ; i++) {
		var position = clients[i].getBoundingClientRect().top;
		if(position < screenpos) {
			if(window.matchMedia)
			clients[i].style.animation = `xflip 1s ease-in-out forwards`;
			if(window.innerWidth >= 768)
				clients[i].style.animationDelay = `${i/10}s`;
		}
	}

}
window.addEventListener('load',ScrollAppeartext);
window.addEventListener('scroll',ScrollAppeartext);
button.addEventListener('click',function() {
	button.classList.toggle('toggle');
	navlinks.classList.toggle('navslide');
	for(i = 0 ; i < links.length; i++) {
		if(links[i].style.animation)
			links[i].style.animation ='';
		else {
			links[i].style.animation = `effect 0.8s ease-in-out forwards ${i/20}s`;
		}
	}

});
var bodyId = document.getElementsByTagName("body")[0].id;
for(i = 0 ; i < navitems.length ; i++) {
	if(bodyId == i) {
		links[i].style.background = "#ff847c";
		navitems[i].style.color = "white";
	}
}
document.querySelector('.contactbutton').addEventListener('click',function(){
	window.scrollTo(0, document.getElementById('footer').offsetTop)
});
