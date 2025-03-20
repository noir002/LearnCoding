#include <iostream>
#include <unordered_set>

using namespace std;

// Function to compute sum of digits
int sum_of_digits(long long n) {
    int sum = 0;
    while (n > 0) {
        sum += (n % 10);
        n /= 10;
    }
    return sum;
}

// Precompute all possible sum-of-digits values for n and n+1
unordered_set<int> possible_sums[1001];

void precompute() {
    for (long long n = 1; n <= 1e12; ++n) {  // Large n to cover cases like 10^111 - 1
        int s1 = sum_of_digits(n);
        int s2 = sum_of_digits(n + 1);
        if (s1 <= 1000 && s2 <= 1000) {
            possible_sums[s1].insert(s2);
        }
    }
}

void solve() {
    int x, y;
    cin >> x >> y;
    if (possible_sums[x].count(y)) {
        cout << "YES\n";
    } else {
        cout << "NO\n";
    }
}

int main() {
    precompute();  // Precompute all valid transitions
    
    int t;
    cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}
