#include<stdio.h>

void table(int n1);



int main(){
    int n1;
    printf("Enter number :");
    scanf("%d",&n1);

    table(n1 );
    
   


}

void table( int num1 ){

    int i;
    for ( int i = 1; i <= 10; i++) {
        printf("%d X %d = %d\n", i,num1,i*num1);

    }
}

