let array = [1,4,6,11,11,17,17,18,29]
let result = -1

function binarySearch(arr, start, end, ele) {
    while(start <= end) {
        let mid = parseInt(start + (end - start)/2)
        if(arr[mid] === ele) {
            result = mid
            return binarySearch(arr, mid + 1, end, ele)
        }
        else if(arr[mid] > ele) return binarySearch(arr, start, mid - 1, ele)
        else return binarySearch(arr, mid+1, end, ele)
    }

    return result
}

let idx = binarySearch(array, 0, array.length, 17)
console.log("Element is present at ", idx)