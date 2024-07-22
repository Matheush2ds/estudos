/*
 * Fazer um programa que imprima a média aritmética dos números 8,9 e 7. A média dos
números 4, 5 e 6. A soma das duas médias. A média das médias.
 */

public class MediaAritmetica {
    public static void main(String[] args) {

        float medAritmetica1, medAritmetica2 = 0;

        medAritmetica1 = (8 + 9 + 7) / 3;
        medAritmetica2 = (4 + 5 + 6) / 3;
        float somaMedia =  (medAritmetica1 + medAritmetica2) / 2;

        System.out.println("A média Aritmetica 1 é de: " + medAritmetica1);
        System.out.println("A média Aritmetica 1 é de: " + medAritmetica2);
        System.out.println("A soma das médias é " + somaMedia);

        
    }
    
}
