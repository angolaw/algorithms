const n = 100000


function binarySearch(searchedItem: number, values: number[]){
    var lowerBoundary = 0
    var upperBoundary = values.length - 1
    var tries = 0
    while (searchedItem <= upperBoundary){
        var middle = (lowerBoundary + upperBoundary) / 2
        var pick  = values[middle]

        if (pick === searchedItem) return {pick, tries}
        if (pick > searchedItem){
            upperBoundary = middle -1
            tries++
        }
        else {
            lowerBoundary = middle + 1
            tries++
        } 
    }
}
const output = binarySearch(32, Array.from(Array(n).keys()))
console.log(output)