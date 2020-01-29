// Add an area method to Rectangle's prototype.

// Create a Square class that satisfies the following:

// It is a subclass of Rectangle.

// It contains a constructor and no other methods.

// It can use the Rectangle class' area method to print the area of a Square object.


Rectangle.prototype.area = function () {
    return (this.w * this.h);
}
class Square extends Rectangle {
        constructor(w) {
        super(w, w);
    }
}

class Rectangle { constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}