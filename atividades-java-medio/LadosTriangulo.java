/*
 Implemente um programa em Java que leia as medidas dos lados de um triângulo e
escreva se ele é equilátero, isósceles ou escaleno. Sendo que:
 Triângulo Equilátero: possui os 3 lados iguais.
 Triângulo Isósceles: possui 2 lados iguais.
 Triângulo Escaleno: possui 3 lados diferentes
 */

 import java.util.Scanner;

public class LadosTriangulo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite a medida do lado A: ");
        double ladoA = scanner.nextDouble();

        System.out.println("Digite a medida do lado B: ");
        double ladoB = scanner.nextDouble();

        System.out.println("Digite a medida do lado C: ");
        double ladoC = scanner.nextDouble();

        if (isTrianguloValido(ladoA, ladoB, ladoC)) {
            if (ladoA == ladoB && ladoB == ladoC) {
                System.out.println("Triângulo equilátero");
            } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
                System.out.println("Triângulo isósceles");
            } else {
                System.out.println("Triângulo escaleno");
            }
        } else {
            System.out.println("As medidas não formam um triângulo válido.");
        }
        
        scanner.close();
    }

    private static boolean isTrianguloValido(double ladoA, double ladoB, double ladoC) {
        return (ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA);
    }
}