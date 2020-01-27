function getLetter(s) {
    
    if (s.charAt(0) == 'a' || s.charAt(0) == 'e' || s.charAt(0) == 'i' ||  s.charAt(0) == 'o' || s.charAt(0) == 'u' ) {
            return 'A'
    }
  
    else if (s.charAt(0) == 'b' || s.charAt(0) == 'c' || s.charAt(0) == 'd' ||  s.charAt(0) == 'f' || s.charAt(0) == 'g' ) {
            return 'B'
    }
  
    else if (s.charAt(0) == 'h' || s.charAt(0) == 'j' || s.charAt(0) == 'k' ||  s.charAt(0) == 'l' || s.charAt(0) == 'm' ) {
            return 'C'
    }
  
  else if (s.charAt(0) == 'n' || s.charAt(0) == 'p' || s.charAt(0) == 'q' ||  s.charAt(0) == 'r' || s.charAt(0) == 's'|| s.charAt(0) == 't' || s.charAt(0) == 'v' || s.charAt(0) == 'w' ||  s.charAt(0) == 'x' || s.charAt(0) == 'y'  || s.charAt(0) == 'z' ) {
            return 'D'
    }
  
  
  
  } getLetter('ad')