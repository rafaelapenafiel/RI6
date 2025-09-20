import * as readline from 'readline';
import Mensagens from './mensagens';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';

let mensagens = new Mensagens()

let iniciar = () => {
    console.log(mensagens.boasVindas());
    console.log(mensagens.instrucoes());

    let leitor = readline.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    
    leitor.question (`Quais são seus números e a operação desejada?\n`, (valor) => {
        let instrucoes = valor.split(' ')
        let numero1 = Number(instrucoes[0])
        let numero2 = Number(instrucoes[1])
        let operacao = instrucoes[2]

        if(instrucoes.length == 1){
            operacao = instrucoes[0]
        }
        console.log(`Estas foram as instruções: ${instrucoes}\n`)

        switch (operacao) {
            case 'Somar':
              let calculo = new Soma()
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
              break;
            case 'Subtrair': 
              calculo = new Subtracao()
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)} \n`)
              break;
            case 'Multiplicar':
              calculo = new Multiplicacao()
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)} \n`)
              break;
            case 'Dividir':
              calculo =  new Divisao()
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)} \n`)
              break;
            case 'Potenciar':
              calculo = new Potenciacao()
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)} \n`)
              break;
            case 'Radiciar':
              calculo = new Radiciacao()
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)} \n`)
              break;
            case 'Bhaskara':
              let a = numero1, b = numero2, c = Number(instrucoes[2]);
              let bh = new Bhaskara();
              console.log(`O resultado da operação é: ${bh.calcular(a, b, c)} \n`)
              break;
            case 'Sair':
              console.log(`Encerrando`);
              leitor.close();
              return;
            default:
              console.log(`Operação inválida`);
        }
        leitor.close();
    });
}
iniciar();