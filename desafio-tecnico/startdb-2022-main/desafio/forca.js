class Forca {
  constructor(palavraEscolhida) {
    this.palavraEscolhida = palavraEscolhida.toLowerCase();
    this.acertos = 0;
    this.arrayPalavra = this.palavraEscolhida.split("");
    this.totalVidas = 6;
    this.displayPalavra = ["_", "_", "_", "_", "_", "_", "_"];
    this.adivinhadas = [];
  }

  chutar(letra) {
    const lowerLetra = letra.toLowerCase();
    if(this.umaLetra(lowerLetra)){
      // Ver se a letra digitada já foi adivinhada anteriormente:
      for(const adivinhada of this.adivinhadas){
        if(lowerLetra === adivinhada){
          return null;
        }
      }
      this.adivinhadas.push(lowerLetra);

      let storageAcertos = this.acertos;
      for(let i = 0; i < this.arrayPalavra.length; i++) {
        if (lowerLetra === this.arrayPalavra[i]){
          this.displayPalavra[i] = lowerLetra;
          this.acertos++;
        }
        if (i === this.arrayPalavra.length - 1 && this.acertos != storageAcertos){
          return;  
        }    
      }
      return this.totalVidas--;
    }
    else{
      return null;
    }
  }

  umaLetra(str) {// Vê se o input é de apenas uma letra.
    return str.length === 1;
  }

  buscarEstado() { 
    if(this.acertos === this.palavraEscolhida.length) {
      return "ganhou";
    }
    else if(this.totalVidas === 0) {
      return "perdeu";
    }
    else {
      return "aguardando chute";
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.adivinhadas, // Deve conter todas as letras chutadas
      vidas: this.totalVidas, // Quantidade de vidas restantes
      palavra: this.displayPalavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
