#include<iostream>
using namespace std;

int main(){
    int a, b;
    cin >> a >> b;

    int count = 0;
    //int count2 = 0;

    while(b >= a){
        a = a*3;
        b = b*2;

        count ++;
    }

    cout << count;
}