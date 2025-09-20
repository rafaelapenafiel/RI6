export default class Mensagens {
  public boasVindas(): string {
    return "Bem-vindo à Calculadora CLI!";
  }

  public instrucoes(): string {
    return "Digite: numero1 numero2 Operacao (ex: 10 5 Somar)\n" +
           "Operações: Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar, Bhaskara, Sair";
  }
}