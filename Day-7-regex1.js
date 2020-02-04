
function regexVar() {
    // \b validate as a word
    // (a|e|i|o|u) validate vowels
    // [a-z] validate lowercase letters
    // {2,} validate minimal length of 2 plus the first letter
    // \1 validate the first letter is the same at the end
    // \b end word validation
    let re = new RegExp(/\b(a|e|i|o|u)[a-z]{2,}\1\b/);
    
    return re;  
}