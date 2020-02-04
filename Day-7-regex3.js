// Solution


function regexVar() {
    // [0-9] accept only number
    // + must be the same of 1 or more of [0-9]
    // /g globally match
    // m multiline match
    const re = new RegExp(/[0-9]+/gm);
    
    return re;
}