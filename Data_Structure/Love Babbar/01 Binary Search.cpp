#include <iostream>
using namespace std;

    int BinarySearch(int arr, int size, int key){
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
        }
    }

    int main() {
    
    return 0;
}