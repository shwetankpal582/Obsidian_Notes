![[Pasted image 20250130235913.png]]

```
Example 1:
Input: N = 3
Output: 
* * *
* * *
* * *

Example 2:
Input: N = 6
Output:

* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
```

**Code**

```
//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;

// } Driver Code Ends
class Solution {
  public:
    void printSquare(int n) {
        // code here
        // int n;
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                cout<<"* ";
            }
            cout<<endl;
        }
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;

        Solution ob;
        ob.printSquare(n);
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends
```