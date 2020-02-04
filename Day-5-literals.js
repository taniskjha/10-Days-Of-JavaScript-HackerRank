// Solution
function sides(literals, ...expressions) {
    const [a, p] = expressions;
return [
        ((p - Math.sqrt((Math.pow(p, 2) - (16 * a)))) / 4),
        ((p + Math.sqrt((Math.pow(p, 2) - (16 * a)))) / 4)
    ];
}
// Given
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;