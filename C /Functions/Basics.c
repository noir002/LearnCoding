#include<stdio.h>
int calculate(int a,int b,int c);

int main(){
    
    int a,b,c;
    printf("Enter a: " );
    scanf(" %d", &a);
    
    printf("Enter b:  " );
    scanf(" %d", &b);
   
    printf("Enter c:  ");
    scanf(" %d", &c);

    int s= calculate( a , b ,c);
    printf("Answer = %d", s);




}

int calculate(int p,int q, int r){
      return p+(q*r);

}
