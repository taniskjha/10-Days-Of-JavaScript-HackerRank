function getGrade(score) {
    let grade;
    

    if ( score <= 30 && score >= 25) {
            return 'A'
    }

   else if (score <= 25 && score >= 20) {
    return 'B'
   }

   else if (score <= 20 && score >= 15) {
    return 'C'
}

else if (score <= 15 && score >= 10) {
    return 'D'
}

else if (score <= 10 && score >= 5) {
    return 'E'
}

else if (score <= 5 && score >= 0) {
    return 'F'
} }


