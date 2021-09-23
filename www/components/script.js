window.onload = function(){
  jogoInicio();
  document.querySelector("#direita").addEventListener("click", function(){
     right();
     setTimeout(parar, 500);
  });

   document.querySelector("#esquerda").addEventListener("click", function(){
     left();
     setTimeout(parar, 500);
  });

   document.querySelector("#subir").addEventListener("click", function(){
     sobe();
     setTimeout(parar, 500);
  });

   document.querySelector("#descer").addEventListener("click", function(){
     desce();
     setTimeout(parar, 500);
  });
}

var personagemObj;

var obstaculos;


function jogoInicio(){
  jogoArea.start();
  personagemObj = new componentes("blue", 10, 120, 30, 30);
  obstaculos = new componentes('pink', 120, 80, 10, 100);

}

let jogoArea = {
   canvas : document.createElement("canvas"),
   start: function(){
     this.canvas.height = 300,
     this.context = this.canvas.getContext("2d");
     document.body.insertBefore(this.canvas, document.body.childNodes[0]);
     this.frame = 0;
     this.intervalo = setInterval(jogoAtualizar, 20);
   },
   limpa: function(){
     this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
   },
   stop: function(){
     clearInterval(this.interval);
   }
}

function componentes(cor, x, y, altura, largura){
      this.altura = altura,
      this.largura = largura,
      this.x = x,
      this.y = y,
      this.veloX = 0,
      this.veloY = 0,
      this.atualizar = function(){
      contexto = jogoArea.context;
      contexto.fillStyle = cor,
      contexto.fillRect(this.x, this.y, this.altura, this.largura);
      },
      this.posicaoNova = function(){
        this.x += this.veloX;
        this.y += this.veloY; 
      },
      this.colisao = function(obj){
        let esq = this.x;
        let dir = this.x + this.largura;
        let sup = this.y;
        let inf = this.y + this.altura;
        
        let objEsq = obj.x;
        let objDir = obj.x + obj.altura;
        let objSup = obj.y;
        let objInf = obj.y + obj.largura;

        let batida = true;

        if(
          (inf < objSup) || (sup > objInf) ||
          (dir < objEsq) || (esq > objDir)
          ){
          batida = false;

          }
          return batida;
      }
}

function jogoAtualizar(){
  let x,y;
  if(i = 0; i<obstaculos.length; i++){
    if(personagemObj.bater(obstaculos)){
      areaJogo.parar();
      return;
  }
  if(personagemObj.colisao(obstaculos)){
    jogoArea.stop();
  }else{
  jogoArea.limpa();
  obstaculos.x += 1;
  obstaculos.atualizar();
  personagemObj.posicaoNova();
  personagemObj.atualizar();
  }

}

function sobe(){
  personagemObj.veloY -= 1;
}

function desce(){
  personagemObj.veloY += 1;
}

function right(){
  personagemObj.veloX += 1;
}

function left(){
  personagemObj.veloX -= 1;
}
function parar(){
  personagemObj.veloX = 0;
  personagemObj.veloY = 0;
}

function contIntervalo(n){
  if((areaJogo.frame/ n) % 1 == 0){
    return true
  }else{
    return false
  }
}