/*
 * Informar um saldo e imprimir o saldo com reajuste de 1%
 */

import java.util.Scanner;

public class ReajusteSaldo {
    public static void main(String[] args) {

        Scanner scanner = new Scanner (System.in);

        System.out.println("Informe seu salário: ");
        double salario = scanner.nextDouble();

        double ReajusteSaldo = salario * 1.01;

        System.out.printf("Saldo original: %.2f\n", salario);
        System.out.printf("Saldo com reajuste de 1%%: %.2f\n", ReajusteSaldo);

    }
    
}
