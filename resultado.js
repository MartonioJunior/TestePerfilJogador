function getElement(id) {
	return document.getElementById(id)
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function receiveResults() {
	var pointData = getUrlVars()
	var ePoints = pointData["e"]
	var kPoints = pointData["k"]
	var sPoints = pointData["s"]
	var aPoints = pointData["a"]

	/* Choosing Game Logic*/
	if (ePoints > 5) {
		selectGame(1)
	} else if (sPoints > 2) {
		selectGame(2)
	}
}

function selectGame(id) {
	setNomeJogo(id)
	setImagemJogo(id)
	setResumoJogo(id)
	setMotivoJogo(id)
}

function setNomeJogo(id) {
	var nome = ""
	switch(id) {
		case 1:
			nome = "Teste A"
			break;
		case 2:
			nome = "Caso B"
			break;
		default:
			break;
	}
	getElement("nomeJogo").innerHTML = nome
}

function setImagemJogo(id) {
	var imagem = ""
	switch(id) {
		case 1:
			imagem = "image-jogo-a.png"
			break;
		case 2:
			imagem = "image-jogo-b.png"
			break;
		default:
			break;
	}
	getElement("imagemJogo").src = imagem
}

function setResumoJogo(id) {
	var resumo = ""
	switch(id) {
		case 1:
			resumo = "Resumo de um jogo bacana"
			break;
		case 2:
			resumo = "Descrição sobre um jogo ruim"
			break;
		default:
			break;
	}
	getElement("resumoJogo").innerHTML = resumo
}

function setMotivoJogo(id) {
	var motivo = ""
	switch(id) {
		case 1:
			motivo = "Porque sim, Zequinha"
			break;
		case 2:
			motivo = "Você deve amar"
			break;
		default:
			break;
	}
	getElement("motivoJogo").innerHTML = motivo
}