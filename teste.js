var explorerPoints = 0, killerPoints = 0, socializerPoints = 0, adventurerPoints = 0, pointsLeft = 5;

function getElement(id) {
	return document.getElementById(id)
}

function addExplorerPoint() {
	if (pointsLeft > 0) {
		pointsLeft -= 1
		explorerPoints += 1
	}
	updateDisplay()
}

function removeExplorerPoint() {
	if (explorerPoints > 0) {
		pointsLeft += 1
		explorerPoints -= 1
	}
	updateDisplay()
}

function addKillerPoint() {
	if (pointsLeft > 0) {
		pointsLeft -= 1
		killerPoints += 1
	}
	updateDisplay()
}

function removeKillerPoint() {
	if (killerPoints > 0) {
		pointsLeft += 1
		killerPoints -= 1
	}
	updateDisplay()
}

function addSocializerPoint() {
	if (pointsLeft > 0) {
		pointsLeft -= 1
		socializerPoints += 1
	}
	updateDisplay()
}

function removeSocializerPoint() {
	if (socializerPoints > 0) {
		pointsLeft += 1
		socializerPoints -= 1
	}
	updateDisplay()
}

function addAdventurerPoint() {
	if (pointsLeft > 0) {
		pointsLeft -= 1
		adventurerPoints += 1
	}
	updateDisplay()
}

function removeAdventurerPoint() {
	if (adventurerPoints > 0) {
		pointsLeft += 1
		adventurerPoints -= 1
	}
	updateDisplay()
}

function updateDisplay() {
	getElement("ePoint").innerHTML = explorerPoints
	getElement("kPoint").innerHTML = killerPoints
	getElement("sPoint").innerHTML = socializerPoints
	getElement("aPoint").innerHTML = adventurerPoints
	getElement("lPoint").innerHTML = pointsLeft+" pts restantes"
}

function sendResult() {
	if (pointsLeft > 0) {
		window.alert("Ainda sobraram pontos para usar!");
	} else {
		window.location.replace("resultado.html?e="+explorerPoints+"&k="+killerPoints+"&s="+socializerPoints+"&a="+adventurerPoints);
	}
}