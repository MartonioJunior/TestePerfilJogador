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

function getBiggerArea(e,k,s,a) {
	if (k > e && k > s && k > a) {
		return "k"
	} else if (e > k && e > s && e > a) {
		return "e"
	} else if (s > e && s > k && s > a) {
		return "s"
	} else if (a > e && a > k && a > s) {
		return "a"
	}
	return "none"
}

function receiveResults() {
	var pointData = getUrlVars()
	var ePoints = pointData["e"]
	var kPoints = pointData["k"]
	var sPoints = pointData["s"]
	var aPoints = pointData["a"]

	var biggest = getBiggerArea(ePoints,kPoints,sPoints,aPoints)
	var options = [];
	if (biggest == "a") {
		options = [1,11,12];
	} else if (biggest == "k") {
		options = [2,8,10];
	} else if (biggest == "s") {
		options = [3,6,9];
	} else if (biggest == "e") {
		options = [4,5,7];
	} else if (biggest == "none") {
		options = [1,2,3,4,5,6,7,8,9,10,11,12];
	}
	var rand = options[Math.floor(Math.random() * options.length)];
	selectGame(rand);
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
			nome = "K2"
			break;
		case 2:
			nome = "Munchkin"
			break;
		case 3:
			nome = "Dobble"
			break;
		case 4:
			nome = "Zombiecide"
			break;
		case 5:
			nome = "Scotland Yard"
			break;
		case 6:
			nome = "Codenames"
			break;
		case 7:
			nome = "Leonardo da Vinci"
			break;
		case 8:
			nome = "Coup"
			break;
		case 9:
			nome = "Wink"
			break;
		case 10:
			nome = "Game of Thrones - The Boardgame"
			break;
		case 11:
			nome = "Lord of the Rings (2000)"
			break;
		case 12:
			nome = "Power Grid"
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
			imagem = "K2.png"
			break;
		case 2:
			imagem = "Munchkin.png"
			break;
		case 3:
			imagem = "Dobble.png"
			break;
		case 4:
			imagem = "Zombiecide.png"
			break;
		case 5:
			imagem = "Scotland Yard.png"
			break;
		case 6:
			imagem = "Codenames.png"
			break;
		case 7:
			imagem = "Leonardo da Vinci.png"
			break;
		case 8:
			imagem = "Coup.png"
			break;
		case 9:
			imagem = "Wink.png"
			break;
		case 10:
			imagem = "Game of Thrones - The Boardgame.png"
			break;
		case 11:
			imagem = "Lord of the Rings (2000).png"
			break;
		case 12:
			imagem = "Power Grid.png"
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
			resumo = "Já pensou em escalar a segunda montanha mais alta da terra? Em K2 você é um alpinista tentando alcançar o cume - ou pelo menos chegar o mais alto possível - dessa montanha! Aquele que chegar o mais alto, vence!"
			break;
		case 2:
			resumo = "Você estaria disposto a atrapalhar sem piedade os outros jogadores para garantir a vitória? Se a sua resposta for SIM, bem vindo ao MUNCHKIN, o jogo de cartas com a temática de um RPG cômico onde quem vence nem sempre é o melhor jogador!"
			break;
		case 3:
			resumo = "Um jogo de velocidade e percepção, onde você disputa com seus amigos para ver quem de vocês tem a melhor coordenação visual e motora! É um party game, então não precisa se estressar jogando, ok? ;)"
			break;
		case 4:
			resumo = "O apocalipse zumbi começou,e  você está bem no meio dele com um bando de malucos! Você se considera capaz de vencer todos os estágios e dificuldades desse jogo INSANO de sobrevivência e sair vivo? Então bem vindo a Zombicide!"
			break;
		case 5:
			resumo = "Mais uma vez a Scotland Yard pede a sua ajuda, senhor Sherlock Holmes para solucionar um misterioso e complexo caso. Explore o cenário, reúna pistas, entenda a história e solucione o mistério o mais rápido o possível!"
			break;
		case 6:
			resumo = "Neste jogo de interpretação de pistas, você é um espião que recebe dicas para encontrar os espiões do time inimigo que estão infiltrados. Tente interpretar as pistas dadas pelo seu “chefe” e encontre todos os espiões antes que o time inimigo o faça!"
			break;
		case 7:
			resumo = "Seja o protagonista da corrida do conhecimento da renascença, guiando seus trabalhadores para construir as mais incríveis inovações tecnológicas do mundo! Somente o melhor jogador poderá rivalizar com o grande Leonardo!"
			break;
		case 8:
			resumo = "Blefe. Trapaceie. Engane. Vença! Quando a nobreza, a burguesia e o governo disputam poderes em COUP, sempre vencerá aquele que souber melhor como manipular seus adversários!"
			break;
		case 9:
			resumo = "Em Wink, seu objetivo é transmitir uma mensagem através de piscadelas para um outro jogador sem que nenhum outro jogador da mesa perceba. É um jogo divertido de jogar entre amigos, e ainda mais divertido de jogar com desconhecidos!"
			break;
		case 10:
			resumo = "Assuma o controle de umas das casas de Westeros em um jogo de guerra e política e tende destroçar seus oponentes em ambos os campos, para conquistar seu objetivo ou conquistar o Trono de Ferro!"
			break;
		case 11:
			resumo = "Neste jogo, você toma o papel de um Hobbit e atravessa a terra média fazendo o mesmo percurso dos personagens da franquia original de filmes O Senhor dos Anéis até chegar à terra de mordor para destruir o Um Anel, e derrotar Sauron. "
			break;
		case 12:
			resumo = "Neste jogo de estratégia, geração e administração de recursos o jogador exerce a função de um dono de usinas de energia, que deve suprir as cidades para receber a maior quantidade de dinheiro possível."
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
			motivo = "O objetivo em K2 é dividido em estágios, então desafiar a si mesmo e ver até onde você consegue fazer os seus alpinistas suportarem nessa escalada insana em 18 rodadas é um grande desafio a ser superado!"
			break;
		case 2:
			motivo = "Munchkin é um jogo onde a principal mecânica do jogo - e é o que torna o jogo tão popular - é o fato de que os jogadores possuem enorme liberdade para ferrar com os planos dos outros jogadores, um prato cheio para todo Killer..."
			break;
		case 3:
			motivo = "Sendo um party game, o mais habitual é que o jogo seja leve e divertido de se jogar com os amigos, e Dobble oferece exatamente isso. É um jogo perfeito para acompanhar aquela roda de conversa aleatória regada a refri e pizza - só não vai sujar o jogo! ;P"
			break;
		case 4:
			motivo = "Zombicide oferece diversos cenário montáveis com regras diferentes e campanhas originais para o jogador explorar e tentar sair vitorioso. Vencer em todos os cenários e explorar as muitas histórias é um objetivo e tanto para qualquer Explorer."
			break;
		case 5:
			motivo = "Scotland Yard traz 120 casos originais, com histórias únicas inspiradas nas obras de Sir Arthur Conan Doyle para serem devidamente exploradas até o seu final e desafiarem o raciocínio dos jogadores."
			break;
		case 6:
			motivo = "Codenames se assemelha a um jogo de Mímica, onde você recebe uma pista na forma de uma palavra única dita pelo único jogador do seu time que sabe onde estão os espiões e deve interpretar essa dica para achá-lo. Um jogo bem divertido e um party game femotivonal para todas as idades!"
			break;
		case 7:
			motivo = "Leonardo da Vinci é um jogo de estratégia denso, baseado em rodadas e alocação de trabalhadores, que, ao mesmo tempo, aborda uma estética tão incrível que a sensação de jogar é similar à de ver as criações do mestre Leonardo de perto. Um jogo fenomenal para todo Explorer que tem interesse nas grandes invenções!"
			break;
		case 8:
			motivo = "Em coup, cada jogador exerce a função de um nobre que quer eliminar os outros jogadores da partida. E para isso, deve enganar seus adversários, forçando-os a cometer erros. Coup é um jogo killer, e a carta Assassino que vem no jogo já deixa isso bem claro."
			break;
		case 9:
			motivo = "Embora tecnicamente não seja considerado um party game, Wink é um jogo simples, cujo propósito é realmente causar uma interação entre os jogadores que vão ter que prestar muita atenção uns nos outros para terem chances de ganhar."
			break;
		case 10:
			motivo = "É um jogo de guerra, que envolve blefe, estratégia e eliminação de jogadores. Sendo assim, pode ser facilmente categorizado como um jogo bastante Killer. Visto a temática do jogo, não é nem um pouco impressionante que realmente o seja."
			break;
		case 11:
			motivo = "Lord of The Rings (2000) é um jogo cooperativo cujo objetivo é difícil de ser alcançado e só pode ser realmente conquistado com a participação conjunta de todos os jogadores. Assim, torna-se um jogo muito interessante para o tipo Achiever."
			break;
		case 12:
			motivo = "Em Power Grid, embora o objetivo seja apenas um, o método como ele é buscado varia de jogador para jogador. Alcançar os objetivos menores dentro do jogo torna tudo um pouco mais interessante para quem é um Achiever!"
		default:
			break;
	}
	getElement("motivoJogo").innerHTML = motivo
}