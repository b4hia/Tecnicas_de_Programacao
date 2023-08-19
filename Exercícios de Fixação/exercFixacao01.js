// //Crie objetos que representem personagens da Marvel(vingadores) e para o vilão Thanos.
// //precisa ter: nome, codinome, arma, velocidade, força, resistência
// //dados precisam estar em um Array e serem comparados, no final deve ser imrprimido a comparação entre dois personagens e quem venceria na luta

function Personagem(nome, codinome, arma, velocidade, força, resistencia) {
    //função com o modelo dos personagens
    return {
    nome: nome,
    codinome: codinome,
    arma: arma,
    velocidade: velocidade,
    força: força,
    resistência: resistencia,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma do personagem: " + this.arma + "\n"
        + "Nível de Força: " + this.força + "\n"
        + "Nível de Velocidade: " + this.velocidade + "\n"
        + "Nível de Resistência: " + this.resistência
    },
    batalhar: function(valorPersonagem2) {
        //função que vai análisar e comparar os valores
        const valor1 = this.velocidade + this.força + this.resistência; //recebe valor do persoangem do índice
        const valor2 = valorPersonagem2.velocidade + valorPersonagem2.força + valorPersonagem2.resistência; //recebe valor do personagem percerrido pelo "for"
        if(valor1 > valor2) {
         return `${this.codinome} vence ${valorPersonagem2.codinome} \n`
        }
        else if(valor1 < valor2) {
         return `${this.codinome} perde para ${valorPersonagem2.codinome}\n`
        }
        else {
         return`${this.codinome} empata com ${valorPersonagem2.codinome}\n`
        }
     }
  };
}
const capitaoAmerica = Personagem('Steve Rogers','Capitão América','Escudo Americano',80,75,80);
const Thor = Personagem('Thor Odinson','Thor','Mjolnir',85,85,80);
const HomemdeFerro = Personagem('Tonny Stark','Homem de Ferro','Armadura Mark LXXXV',90,70,80);
const Hulk = Personagem('Bruce Banna','Hulk','Socos',85,90,100);
const ViúvaNegra = Personagem('Natasha Alianovna Romanova','Viúva Negra','Cinto de Utilidades',80,65,65);
const GaviãoArqueiro = Personagem('Clint Barton','Gavião Arqueiro','Arco',75,70,65);
const HomemAranha = Personagem('Petter PArker','Homem Aranha','Teia',85,75,75);
const PanteraNegra = Personagem("T'Chala",'Pantera Negra','Traje do Pantera Negra',80,75,80);
const Falcão = Personagem('Samuel Thomas','Falcão','Traje do Falcão',85,70,70);
const CapitãMarvel = Personagem('Carol Denvers','Capitã Marvel','Energia',90,85,95);
const Thanos = Personagem('Thanos de Titã','Thanos','Manopla',80,100,100);
//criação dos objetos dentro do modelo de personagem
const personagens = [capitaoAmerica,HomemdeFerro,Thor,HomemAranha,ViúvaNegra,GaviãoArqueiro,Hulk,CapitãMarvel,Falcão,PanteraNegra,Thanos]
//inserindo objetos dentro do array
for (let i = 0; i < personagens.length; i++) {
    for (let j = 0; j < personagens.length; j++) {
        if (i !== j) {
            const resultado = personagens[i].batalhar(personagens[j])
            console.log(resultado);
            
        }        
    }
    
}
