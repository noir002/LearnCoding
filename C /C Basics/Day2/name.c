#include<stdio.h>
int main()
{
    
  char name[50],stream[50];
  printf("Enter your name: ");
  scanf("%s", name);
  printf("Your name is %spal\n",name);


  printf(" Enter exam you are preparing for: ");
  scanf("%s", stream); 
  printf("You are a %s aspirant", stream);

  return 0;


}
