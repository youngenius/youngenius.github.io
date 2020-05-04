// By: h01000110 (hi)
// github.com/h01000110

var max = document.getElementsByClassName("btn")[1];
var min = document.getElementsByClassName("btn")[2];

function maximize () {
	var post = document.getElementsByClassName("content")[0];
	var cont = document.getElementsByClassName("post_content")[0];
	var wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;
	var hei = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
	if (wid > 900) {
		widf = wid * 0.9;
		heif = hei * 0.9;
		post.style.width = widf + "px";
		post.style.height = heif + "px";

		if (wid < 1400) {
			cont.style.width = "99%";
			cont.style.height = "99%";
		} else {
			cont.style.width = "99.4%";
			cont.style.height ="99.4%";
		}
	}
}

function minimize () {
	var post = document.getElementsByClassName("content")[0];
	var cont = document.getElementsByClassName("post_content")[0];
	var wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;

	if ( wid > 900 ) {
		post.style.width = "800px";
		cont.style.width = "98.5%";
		cont.style.height = "600px";
	}
}

max.addEventListener('click', maximize, false);
min.addEventListener('click', minimize, false);
