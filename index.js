function theBeatlesPlay(musicians,instruments) {
  let band = [];
  
  let members = musicians.length;
  
  for (let i = 0; i < members; i++) {
    band[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return band;
}

function johnLennonFacts(facts) {
  let l = facts.length;
  let i = 0;
  while (l > 0) {
    facts[i] = facts[i] + '!!!';
    i++;
    l--;
    return facts;
  }
}