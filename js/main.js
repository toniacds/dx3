function operador(){
    var X = parseInt(prompt("Eixo X:"))
    var Y = parseInt(prompt("Eixo Y: "))
    const texto = document.querySelector("p");


    if ((X >= 0 && X <= 432)  && (Y >= 0 && Y <= 468) ) {
    alert("A bola caiu dentro da quadra !! 😁")
    } else {
    alert("A bola caiu fora da quadra 😥")
   }
}


function operador2(){
            var A = parseInt(prompt("Quanto Alice colocou? (1 ou 0) "))
            var B = parseInt(prompt("Quanto Beto colocou? (1 ou 0)"))
            var C = parseInt(prompt("Quanto Clara colocou? (1 ou 0)"))
            const texto = document.querySelector ("h1");
        
            if(A == 1 && B == 0 && C == 0){
               alert("Alice ganhou!😁😀")
            }
            else if(A == 0 && B == 1 && C == 0){
                alert("Beto ganhou!😀😁")
            }
            else if(A == 0 &&  B == 0 && C == 1){
                alert("Clara ganhou!😀😁")
            }
            else if(A == 0 &&  B == 1 && C == 1){
                    alert("Clara ganhou!😀😁")
                }
            else if(A == 1 &&  B == 0 && C == 1){
                        alert("Beto ganhou!😀😁")
                    }
                else if(A == 1 &&  B == 1 && C == 0){
                            alert("Clara ganhou!😀😁")
                        }
            else if(A == 0 && B == 0 && C == 0){
                alert("Deu empate😐")
            }
            else if(A == 1 && B == 1 && C == 1) {
                alert("Deu empate😐")
            }
            else{
                alert("Erro🙁")
        }
        
        }


function operador3(){
      var num1 = parseInt(prompt("Digite a primeira pontuação"));
      var num2 = parseInt(prompt("Digite a segunda pontuação"));
      var num3 = parseInt(prompt("Digite a terceira pontuação"));
      const texto = document.querySelector("h1");

    if (num1 > num2 && num1 < num3){
    alert("A segunda maior pontuação é do número 1")
    }

    else if (num2 > num1 && num2 < num3){
    alert("A segunda maior pontuação é do número 2")
    }

    else if (num3 > num2 && num3 < num1){
    alert("A segunda maior pontuação é do número 3")

     }
}

