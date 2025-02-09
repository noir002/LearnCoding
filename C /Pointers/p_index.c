#include<stdio.h>
int main(){

    int tgpa = 10;
    int *gpa2 = &tgpa;
    int result = * gpa2;

    printf("%d", result );
}