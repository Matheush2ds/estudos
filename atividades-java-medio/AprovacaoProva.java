/*
 * Considere uma disciplina que adota o seguinte critério de aprovação: os alunos fazem
duas provas (P1 e P2) iniciais; se a média nessas duas provas for maior ou igual a 5.0, e se
nenhuma das duas notas for inferior a 3.0, o aluno passa direto. Caso contrário, o aluno 
faz uma terceira prova (P3) e a média é calculada considerando-se essa terceira nota e a
maior das notas entre P1 e P2. Neste caso, o aluno é aprovado se a média final for maior
ou igual a 5.0. Escreva um programa em Java que leia inicialmente as duas notas de um
aluno, fornecidas pelo usuário via teclado. Se as notas não forem suficientes para o aluno
passar direto, o programa deve ler a nota da terceira prova, também fornecida via o
teclado. Como saída, o programa deve imprimir a média final do aluno, seguida da
mensagem "Aprovado" ou "Reprovado", conforme o critério descrito acima
 */

import java.util.Scanner;

 public class AprovacaoProva {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);

        System.out.print("Nota prova 1: ");
        double p1 = scan.nextDouble();

        System.out.print("Nota prova 2: ");
        double p2 = scan.nextDouble();

        double mediaInicial = (p1 + p2) / 2;

        if (mediaInicial >= 5 && p1 >= 3.0 && p2 >= 3.0) {
            System.out.println("Aprovado com média: " + mediaInicial);
            
        } else {
            System.out.print("Nota da prova 3: ");
            double p3 = scan.nextDouble(); 

            double maiorNota = Math.max(p1, p2);
            double mediaFinal = (maiorNota + p3) / 2;

            if (mediaFinal >= 5) {
                System.out.println("Aprovado com média " + mediaFinal);

            } else {
                System.out.println("Reprovado");
            }
        }
        scan.close();
    }
}