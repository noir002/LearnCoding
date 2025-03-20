#include <iostream>
#include <string>

using namespace std;

string replaceLastUS(string s) {
    if (s.length() >= 2 && s.substr(s.length() - 2) == "us") {
        return s.substr(0, s.length() - 2) + "i";
    }
    return s; 
}

int main() {
    int n;
    cin >> n; 

    string word;
    for (int i = 0; i < n; i++) {
        cin >> word;
        cout << replaceLastUS(word) << endl; 
    }

    return 0;
}
