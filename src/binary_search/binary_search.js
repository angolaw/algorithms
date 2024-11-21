var n = 100000;
function binarySearch(searchedItem, values) {
    var lowerBoundary = 0;
    var upperBoundary = values.length - 1;
    var tries = 0;
    while (lowerBoundary <= upperBoundary) {
        var middle = Math.floor((lowerBoundary + upperBoundary) / 2);
        var pick = values[middle];
        if (pick === searchedItem)
            return { pick: pick, tries: tries };
        if (pick > searchedItem) {
            upperBoundary = middle - 1;
            tries++;
        }
        else {
            lowerBoundary = middle + 1;
            tries++;
        }
    }
}
var output = binarySearch(32, Array.from(Array(n).keys()));
console.log(output);
