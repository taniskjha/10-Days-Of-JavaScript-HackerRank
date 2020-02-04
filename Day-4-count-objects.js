// It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and . The function must return a count of all such objects in array that satisfy o.x == o.y .


function getCount(objects) {
    let counts = 0; 
 
    // iterate over array of objects
    objects.map((item) => {
        if (item.x === item.y) {
            counts++;
        }
        return item;
    });
    return counts;
}