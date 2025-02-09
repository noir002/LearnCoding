#include<iostream>
using namespace std;

int main(){
    int x;
    cin>>x;

    if(x % 2 != 0 || x == 2){
        cout << "No" << endl;
    }
    else{
        cout << "Yes" << endl;
    }
}
