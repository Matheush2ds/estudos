/*
 * Escrever um algoritmo que lê:
- a porcentagem do IPI a ser acrescido no valor das peças
- o código da peça 1, valor unitário da peça 1, quantidade de peças 1
- o código da peça 2, valor unitário da peça 2, quantidade de peças 2
O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.
Fórmula : (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)

 */

import java.util.Scanner;

public class CalculoPecas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Qual o valor do IPI a ser acrescido?: ");
        double ipi = scanner.nextDouble();

        System.out.print("Código da peça 1: ");
        int CodigoPeca1= scanner.nextInt();

        System.out.print("Valor unitário da peça 1: ");
        double ValorUnitarioPeca1 = scanner.nextDouble();

        System.out.print("Quantidade da peça 1: ");
        int QuantidadePeca1 = scanner.nextInt();

        //-----peça 2 -----

        System.out.print("Código da peça 2: ");
        int CodigoPeca2= scanner.nextInt();

        System.out.print("Valor unitário da peça 2: ");
        double ValorUnitarioPeca2 = scanner.nextDouble();

        System.out.print("Quantidade da peça 2: ");
        int QuantidadePeca2 = scanner.nextInt();

        //----- Calculo -----

        double ValorTotalPeca1 = ValorUnitarioPeca1 * QuantidadePeca1;
        double ValorTotalPeca2 = ValorUnitarioPeca2 * QuantidadePeca2;
        double ValorTotal = (ValorTotalPeca1 + ValorTotalPeca2) * (ipi/100 + 1);

        System.out.print("Total a ser pago: R$ " + ValorTotal);

        scanner.close();

    }
}
