const precolivros = [25, 15, 30, 50, 45, 20];
const nomelivros = [ "JS", "PHP", "Python", "Java", "C#", "HTML"];
i = 0;
mb = 0;

function menorValor(precolivros, i){
    for ( let i = 0; i < precolivros.length; i++){
        if ( precolivros[i] > precolivros [mb]){
            mb = i;
        }
    }
    }

for(i = 0; i < precolivros.length, i++){
    let menor = menorValor(precolivros, i);
    let livroAtual = precolivros[i];
    let livroMenorPreco = precolivros[mb];
   
    precolivros[i] = livroMenorPreco
    precolivros[mb] = livroAtual 
   }
   console.log(precolivros);