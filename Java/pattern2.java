import java.util.*;

public class pattern2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char c = '*';
        // Triangle
        for (int i = 1; i <= 4; i++) {             
            for (int j = 1; j <= i; j++) {         
                System.out.print("* ");
            }
            System.out.println();
        }

        // Reverse triangle
        for(int i = 1; i <=5 ; i++){
            for(int j = 1; j<= 6-i; j++){
                System.out.print(c+" ");
            }
            System.out.println();
        }

        // Pyramid

        int r = sc.nextInt();
        for(int i = 1; i <= r; i++){
            for(int j = 1; j<=r-i; j++){
                System.out.print("  ");
            }

            for(int k = 1; k<= 2*i - 1;k++){
                System.out.print("* ");
            }

            System.out.println();
        }
        


    }
}
