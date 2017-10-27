var Jogo = {
  countCubos: "",
  t: 1,
  direcaoX: 0,
  direcaoY: 1,
  z: 1,
  n: [],
  tamanho: 2,
  cubo: Math.floor(Math.random() * 638 + 1),
  tela: function () {
    'use strict';
    for (var a = 1; a < 639; a++) {
      this.countCubos  += "<div class='cubos' id="+ a +">&nbsp;</div>";
    }
    return this.countCubos;
  },
    principal: function (y, x) {
        while (this.t <= 3600) {
            setTimeout(function() {
                if(x < 1) {
                  x = 29;
                }
                if(y < 1) {
                  y = 22;
                }
                if(x > 29) {
                  x = 1;
                }
                if(y > 22) {
                  y = 1;
                }
                Jogo.cobrinha(((29 * y) + (x - 28)) -1);
                Jogo.crescimento();
                y = y + Jogo.direcaoY;
                x = x + Jogo.direcaoX;
             }, (this.t * 600));
             this.t++;
         }
    },
    crescimento: function () {
        var per = document.getElementById(this.cubo).style;
        if (this.cubo === this.n[0]) {
           this.tamanho++;
           this.cubo = Math.floor(Math.random() * 638 + 1);
        }
        per.backgroundColor = "#000";
        return per;
    },
    cobrinha: function (l, c) {
        if(this.z <= this.tamanho) {
            this.n.unshift(l);

        }
        for (var x = 0; x < this.tamanho; x++) {
            if(x === 0) {
                document.getElementById(this.n[this.tamanho]).style.backgroundColor = "#EEEEEE";
            }
            document.getElementById(this.n[x]).style.backgroundColor = "#2F2F4F";
        }
        this.z++;
        if(this.z > this.tamanho) {
            for (var i = this.tamanho; i <= 0; i--) {
                this.n[i] = this.n[i + 1];
            }
            //document.getElementById(this.n[this.z - 5]).style.backgroundColor = "#EEE";
            if(this.z === (this.tamanho + 1)) {
                this.z = 0;
            }
        }
    },
    comecar: function () {
      document.getElementById("comecar").style.display = "none";
      Jogo.principal(1, 14);
    }
};
document.addEventListener('keydown', function (seta) {
    var evento = seta.keyCode;
    switch(evento) {
        case 37:
            Jogo.direcaoX = -1;
            Jogo.direcaoY = 0;
            break;
        case 65:
            Jogo.direcaoX = -1;
            Jogo.direcaoY = 0;
            break;
        case 38:
            Jogo.direcaoY = -1;
            Jogo.direcaoX = 0;
            break;
        case 87:
            Jogo.direcaoY = -1;
            Jogo.direcaoX = 0;
            break;
        case 39:
            Jogo.direcaoX = 1;
            Jogo.direcaoY = 0;
            break;
        case 68:
            Jogo.direcaoX = 1;
            Jogo.direcaoY = 0;
            break;
        case 40:
            Jogo.direcaoY = 1;
            Jogo.direcaoX = 0;
            break;
        case 88:
            Jogo.direcaoY = 1;
            Jogo.direcaoX = 0;
            break;
   }
 }, false);
