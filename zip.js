// function that checks if zip code is a minnesota zip code
function isMinnesotaZip(code) {
    // all Minnesota zip codes are between 5501 and 56763
    if (code >= 55001 && code <= 56763) {
        return true // returns true if minnesota zip
    } else {
        return false // returns false if not minnesota zip
    }
}

// data examples
console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(55001))
console.log(isMinnesotaZip(56763))
console.log(isMinnesotaZip(12345))
console.log(isMinnesotaZip(-1)) // returns false

