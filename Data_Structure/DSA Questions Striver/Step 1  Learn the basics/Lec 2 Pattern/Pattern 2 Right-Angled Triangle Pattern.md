![[Pasted image 20250131000352.png]]

```
Input Format: N = 3
Result:

* 
* * 
* * *

Input Format: N = 6
Result:

* 
* * 
* * *
* * * *
* * * * *
* * * * * *
```

```
//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;

// } Driver Code Ends
class Solution {
  public:
    void printTriangle(int n) {
        // code here
        for(int i=0;i<n;i++){
            for(int j=0;j<=i;j++){
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
        ob.printTriangle(n);
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends
```