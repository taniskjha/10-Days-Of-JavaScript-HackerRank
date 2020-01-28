function reverseString(s) {
    if (typeof s !== "string") {
        console.log("s.split is not a function");
    }
 
    if (typeof s === "string") {
        s = s.split('').reverse().join('');
    }
 
    console.log(s);
}

