// code for functions for area of square,circle and a rectangle 

#include<stdio.h>

void circle(int r);
void square(int s);
void rectangle(int l,int b);


int main(){
    int r;
    scanf("%d",&r);
    circle(r);

    int s;
    scanf("%d",&s);
    square(s);

    int l,b;
    scanf("%d",&l);
    scanf("%d",&b);
    rectangle(l,b);


}

void circle(int a){
      printf("Area of circle :%f", 3.14*a*a);
}

void square(int s){
    printf("Area of square :%d", s*s);
}

void rectangle(int l, int b){
    printf("Area of rectangle :%d", 2*(l+b));
}

