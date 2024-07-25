/*
 * Crie um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário,
calcule a quantidade de salários mínimos esse usuário ganha e imprima o resultado.
(1SM=R$788,00)
 */

 import java.util.Scanner;

 public class CalcSalarioMinimo {
     public static void main(String[] args) {
 
         Scanner scanner = new Scanner(System.in);
 
         System.out.print("Valor do salário mínimo: ");
         double salarioMinimo = scanner.nextDouble();
 
         System.out.print("Quantos R$ o usuário recebe?: ");
         double salarioUsuario = scanner.nextDouble();
 
         double quantidadeSalariosMinimos = salarioUsuario / salarioMinimo;
 
         System.out.printf("O usuário recebe: %.2f salários mínimos\n", quantidadeSalariosMinimos);
         
         scanner.close();
     }
 }
 
