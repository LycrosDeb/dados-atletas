class Atleta{
    constructor(nome,idade,peso,altura,notas){
      this.nome=nome
      this.idade=idade
      this.peso=peso
      this.altura=altura
      this.notas=notas
    }
    calculaCategoria(){
          if(this.idade>=9 && this.idade<=11){
        return "Infantil"
      }else if(this.idade>=12 && this.idade<=13){
      return "Juvenil"
      }else if(this.idade>=14 && this.idade<=15){
      return "Intermediário"
      }else if(this.idade>=16 && this.idade<=30){
      return "Adulto"
      }else{
       return "Sem categoria" 
      }
    }
  calculaIMC(){
    let imc = Number.parseInt(this.peso,10) / (Number.parseInt(this.altura,10) * Number.parseInt(this.altura,10))
    return "IMC: "+imc  
  }
  calculaMediaValida(){
    let media=this.notas.reduce(function(total,atual){return total+atual},0)/this.notas.length
    return media
  }
  obtemNomeAtleta(){
    return "Nome: "+this.nome  
  }
  obtemIdadeAtleta(){
    return "Idade: "+this.idade 
  }
  obtemPesoAtleta(){
    return "Peso: "+this.peso
  }
  obtemAlturaAtleta(){
    return "Altura: "+this.altura
  }
  obtemNotasAtleta(){
    return "Notas: "+this.notas 
  }
  obtemCategoria(){
     return this.calculaCategoria()
  }
  obtemIMC(){
    return this.calculaIMC()
  }
  obtemMediaValida(){
    return this.calculaMediaValida()
  }
  }
  let nome="Cesar Abascal"
  let idade=12
  let peso=10
  let altura=20
  let notas=[10, 9.34, 8.42, 10, 7.88]
  let atleta=new Atleta(nome,idade,peso,altura,notas)
  console.log(atleta.obtemNomeAtleta())
  console.log(atleta.obtemIdadeAtleta())
  console.log(atleta.obtemPesoAtleta())
  console.log(atleta.obtemAlturaAtleta())
  console.log(atleta.obtemNotasAtleta())
  console.log(atleta.obtemCategoria())
  console.log(atleta.obtemIMC())
  console.log(atleta.obtemMediaValida())