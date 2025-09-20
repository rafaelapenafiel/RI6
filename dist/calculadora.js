"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const mensagens_1 = __importDefault(require("./mensagens"));
const soma_1 = __importDefault(require("./soma"));
const subtracao_1 = __importDefault(require("./subtracao"));
const multiplicacao_1 = __importDefault(require("./multiplicacao"));
const divisao_1 = __importDefault(require("./divisao"));
const potenciacao_1 = __importDefault(require("./potenciacao"));
const radiciacao_1 = __importDefault(require("./radiciacao"));
const bhaskara_1 = __importDefault(require("./bhaskara"));
let mensagens = new mensagens_1.default();
let iniciar = () => {
    console.log(mensagens.boasVindas());
    console.log(mensagens.instrucoes());
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
        let instrucoes = valor.split(' ');
        let numero1 = Number(instrucoes[0]);
        let numero2 = Number(instrucoes[1]);
        let operacao = instrucoes[2];
        if (instrucoes.length == 1) {
            operacao = instrucoes[0];
        }
        console.log(`Estas foram as instruções: ${instrucoes}\n`);
        switch (operacao) {
            case 'Somar':
                let calculo = new soma_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
                break;
            case 'Subtrair':
                calculo = new subtracao_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)} \n`);
                break;
            case 'Multiplicar':
                calculo = new multiplicacao_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)} \n`);
                break;
            case 'Dividir':
                calculo = new divisao_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)} \n`);
                break;
            case 'Potenciar':
                calculo = new potenciacao_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)} \n`);
                break;
            case 'Radiciar':
                calculo = new radiciacao_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)} \n`);
                break;
            case 'Bhaskara':
                let a = numero1, b = numero2, c = Number(instrucoes[2]);
                let bh = new bhaskara_1.default();
                console.log(`O resultado da operação é: ${bh.calcular(a, b, c)} \n`);
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
};
iniciar();
