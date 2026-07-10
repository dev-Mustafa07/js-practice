let marks = 95;

console.log("============================")
console.log("   Marks Assessment System   ")
console.log("============================")

if (marks > 90 && marks <= 100){
    console.log("Excellent")
} else if (marks > 80) {
    console.log("Very Good")
} else if (marks > 70) {
    console.log("Good")
} else if (marks > 60) {
    console.log("Pass")
}
else if (marks > 50) {
    console.log("Fail")
}else{
    console.log("Please Enter Valid Numbers")
}