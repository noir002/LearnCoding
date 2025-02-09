#include <stdio.h>

int main() {
    // Declaring and initializing a 2D array
    int matrix[3][3] = {10, 9, 8,4, 5, 6,7, 3, 2};

    // Printing the 2D array
    printf("2D Array:\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        //("\n");
    }

    return 0;
}
