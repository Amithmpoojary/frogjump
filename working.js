let BLUE = "./img/l1.jpg";
let GREEN = "./img/r1.jpg";
let EMPTY = "./img/t1.jpg";
let arr = [];
let size=null

function selectLevel(id) {
	clean();
	createFrog(id);
	createWood(id);
	document.getElementsByClassName('model')[0].classList.add('notshow')
}

function clean() {
	arr = [];
	var frog = document.getElementsByClassName("frogimage")[0];
	while (frog.firstChild) frog.removeChild(frog.firstChild);
	var wood = document.getElementsByClassName("woodimage")[0];
	while (wood.firstChild) wood.removeChild(wood.firstChild);
}
function createFrog(level) {
	
	size=level
	for (var n = 0; n < level; n++) {
		if (n == Math.floor(level / 2)) continue;
		arr.push("f" + (n + 1).toString());
	}
	len = level;
	level = Math.floor(level / 2);
	var i = 0;
	for (; i < level; i++) {
		var newElement = document.createElement("img");
		var id = "f" + (i + 1).toString();
		newElement.src = BLUE;
		newElement.id = id;
		newElement.classList.add("frog");
		newElement.onclick = (e) => {
			myClick(e);
		};
		document.getElementsByClassName("frogimage")[0].appendChild(newElement);
	}
	var newElement = document.createElement("img");
	var id = "f" + (i + 1).toString();
	newElement.src = EMPTY;
	newElement.id = id;
	newElement.classList.add("frog");
	newElement.addEventListener("click", (e) => {
		myClick(e);
	});
	document.getElementsByClassName("frogimage")[0].appendChild(newElement);

	for (i = i + 1; i < len; i++) {
		var newElement = document.createElement("img");
		var id = "f" + (i + 1).toString();
		newElement.src = GREEN;
		newElement.id = id;
		newElement.classList.add("frog");
		newElement.addEventListener("click", (e) => {
			myClick(e);
		});
		document.getElementsByClassName("frogimage")[0].appendChild(newElement);
	}
}
function createWood(level) {
	len = level;
	level = Math.floor(level / 2);
	var i = 0;
	for (; i < level; i++) {
		var newElement = document.createElement("img");
		newElement.src = "./img/wl.jpg";
		newElement.classList.add("wood");
		document.getElementsByClassName("woodimage")[0].appendChild(newElement);
	}
	var newElement = document.createElement("img");
	newElement.src = "./img/wl.jpg";
	newElement.classList.add("wood");
	document.getElementsByClassName("woodimage")[0].appendChild(newElement);

	for (i = i + 1; i < len; i++) {
		var newElement = document.createElement("img");
		newElement.src = "./img/wr.jpg";
		newElement.classList.add("wood");
		document.getElementsByClassName("woodimage")[0].appendChild(newElement);
	}
}
function myClick(e) {
	var id = e.srcElement.id;
	var number = parseInt(id.slice(-1));
	if (document.getElementById(id).src.slice(-6) === "l1.jpg") {
		onejump = "f" + (number + 1).toString();
		twojump = "f" + (number + 2).toString();
		if (
			number + 1 <= len &&
			document.getElementById(onejump).src.slice(-6) === "t1.jpg"
		) {
			document.getElementById(id).src = EMPTY;
			document.getElementById(onejump).src = BLUE;
		} else if (
			number + 2 <= len &&
			document.getElementById(twojump).src.slice(-6) === "t1.jpg"
		) {
			document.getElementById(id).src = EMPTY;
			document.getElementById(twojump).src = BLUE;
		} else {
			return;
		}
	} else if (
		document.getElementById(id.toString()).src.slice(-6) === "r1.jpg"
	) {
		onejump = "f" + (number - 1).toString();
		twojump = "f" + (number - 2).toString();
		if (
			number - 1 > 0 &&
			document.getElementById(onejump).src.slice(-6) === "t1.jpg"
		) {
			document.getElementById(id).src = EMPTY;
			document.getElementById(onejump).src = GREEN;
		} else if (
			number - 2 > 0 &&
			document.getElementById(twojump).src.slice(-6) === "t1.jpg"
		) {
			document.getElementById(id).src = EMPTY;
			document.getElementById(twojump).src = GREEN;
		} else {
			return;
		}
	}
	if (didUserWin()) {
		document.getElementsByClassName('model')[0].classList.remove('notshow');
	}
}
function closepop(){
	document.getElementsByClassName('model')[0].classList.add('notshow')
}
function didUserWin() {
	if (arr.every(checkWin)) {
		return true;
	}
	return false;
}
function checkWin(id) {
	if (arr.slice(0, Math.floor(size / 2)).includes(id)) {
		return document.getElementById(id).src.slice(-6) === "r1.jpg";
	}
	if (arr.slice(Math.floor(size / 2)).includes(id)) {
		return document.getElementById(id).src.slice(-6) === "l1.jpg";
	}
	return true;
}


