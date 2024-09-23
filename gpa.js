// function that checks if gpa is valid
function is_gpa_valid(gpa) {
    if (gpa > 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
}
// some example data
console.log(is_gpa_valid(-3))
console.log(is_gpa_valid(4.1))
console.log(is_gpa_valid(2.5))
console.log(is_gpa_valid(4))
