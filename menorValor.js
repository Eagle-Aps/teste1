const precolivros = [25, 32, 30, 50, 45, 20];
const nomelivros = [ "JS", "PHP", "Python", "Java", "C#", "HTML"];


for( i = 0; i <= precolivros.length; i++){
    let c = i;
    while ( c > 0 && precolivros[c] < precolivros[c-1] ){
        let itemAnalise = precolivros[c];
        let itemAnterior = precolivros[c-1];

        let nomeAnalise = nomelivros[c];
        let nomeAnterior = nomelivros[c-1];

        precolivros[c] = itemAnterior;
        nomelivros[c] = nomeAnterior;
        precolivros[c-1] = itemAnalise;
        nomelivros[c-1] = nomeAnalise;
        
        c--
}
}
console.log(precolivros);
console.log(nomelivros);