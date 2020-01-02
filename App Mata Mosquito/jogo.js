
/*********** INICIO APP *************/

/************ Definindo Altura e Largura da Tela **********/


 var altura = 0
 var largura = 0
 var vidas = 1
 var tempo = 15

 var criaMosquitoTempo = 1500

var nivel = window.location.search  //recupera o nível de dificuldade (apenas parâmetro)
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	var criaMosquitoTempo = 1500
}else if (nivel === 'dificil') {
	var criaMosquitoTempo = 1000
}else if (nivel === 'chucknorris') {
	var criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
   
   altura = window.innerHeight  //obter a altura da página
   largura = window.innerWidth	//obter a largura da página

   console.log(largura,altura)
}
  
 ajustaTamanhoPalcoJogo() 	

var cronometro = setInterval(function(){

	tempo -= 1

	if (tempo < 0) {
		

		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
		
	}else{

		document.getElementById('cronometro').innerHTML = tempo

	}
	
			
},1000)

  function posicaoRandomica() {

  	//removendo o mosquito anterior (caso exista)

  	if (document.getElementById('mosquito')) {

  		document.getElementById('mosquito').remove()

		// Redirecionando para Game Over caso perca as 3 vidas

  		if (vidas > 3) {

  			window.location.href = 'fim_de_jogo.html'

  		}else{

  		document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

  		++vidas
  	}

  		}

  	

   var positionX = Math.floor(Math.random() * largura) - 90  /* Gerar posição randomica do elemento HTML na Tela */
   var positionY = Math.floor(Math.random() * altura) - 90  /* Gerar posição randomica do elemento HTML na Tela */


   positionX = positionX < 0 ? 0 : positionX
   positionY = positionY < 0 ? 0 : positionY

   console.log(positionX , positionY)	

   //criar o elemento html
 
  var mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosquito.png'
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() 
  mosquito.style.left = positionX + 'px'
  mosquito.style.top = positionY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito' 
  mosquito.onclick = function() {
  	this.remove()  // o elemento this faz menção ao proprio elemento que esta executando.
  }


  document.body.appendChild(mosquito) // adicionando um filho ao Body.

  

  }  

  function tamanhoAleatorio() {

  	var classe = Math.floor(Math.random() * 3)

  	switch(classe) {
  		case 0:
  			return 'mosquito1'
  		case 1:
  			return 'mosquito2'
  		case 2:
  			return 'mosquito3'		
  	}
  }

  
  function ladoAleatorio() {

  		var classe = Math.floor(Math.random() * 2)

  	switch(classe) {
  		case 0:
  			return 'ladoA'
  		case 1:
  			return 'ladoB'
  			
  	}

  }
 