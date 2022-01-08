
export function roll (max) {
  return Math.ceil(Math.random()*max);
}

export function tripleRoll (stat=0) {
  let d6 = roll(6);
  let d10a = roll(10);
  let d10b = roll(10);
  let result = 'weak';
  let match = false;
  if ( (d6 + stat) > d10a && (d6 + stat) > d10b) { 
    result = 'strong'; 
  }
  else if ( (d6 + stat) <= d10a && (d6 + stat) <= d10b) { 
    result = 'miss'; 
  }

  if (d10a === d10b) { 
    match = true;
  }


  return {
    stat, d6, d10a, d10b, result, match
  }

}



