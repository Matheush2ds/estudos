import java.util.Scanner;

public class AntecessorSucessor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Escreva um número inteiro: ");
        int numero = scanner.nextInt();

        int numeroAntecessor = numero - 1;
        int numeroSucessor = numero + 1;

        System.out.println("O número Antecessor de " + numero + " é: " + numeroAntecessor);
        System.out.println("O número Sucessor de " + numero + " é: " + numeroSucessor);
    }
}