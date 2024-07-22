/*
 * . Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
mostre-a expressa em dias. Leve em consideração o ano com 365 dias e o mês com 30.
(Ex: 3 anos, 2 meses e 15 dias = 1170 dias.)

 */

import java.util.Scanner;

public class IdadeDiasMesesAno {
    public static void main(String[] args) {

        Scanner scanner = new Scanner (System.in);

        System.out.println("Digite Quantos anos você tem: ");
        int ano = scanner.nextInt();

        System.out.println("Digite os meses: ");
        int meses = scanner.nextInt();

        System.out.println("Digite os Dias: ");
        int dia = scanner.nextInt();

        scanner.close();

        int DiasAno = ano * 365;
        int DiasMeses = meses * 30;

        int TotalDias = DiasAno + DiasMeses + dia;

        System.out.println("A quantidade é " + TotalDias + " dias " );
    }
}