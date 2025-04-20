#include <iostream>
using namespace std;

int BinarySearch(int arr[], int size, int key){
    int start = 0;
    int end = size-1;

    int mid = (start+end)/2;

    while( start <= end ){

        if( arr[mid] == key ){
            return mid;
        }

        // Right   (start=mid+1)
        if( key > arr[mid] ){

            start = mid+1;

        }

        else {
            
            end = mid-1;

        }

        mid = (start+end)/2;

    }
    return -1;
}

int main() {

    int even[7] = {2,5,7,9,11,13,55};
    int index = BinarySearch(even,7,13);
    cout << "Index of 13 is " << index << endl;

return 0;
}
