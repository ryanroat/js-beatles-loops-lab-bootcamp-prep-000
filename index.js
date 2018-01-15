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
  while (l > 0) {
    let i = l // -1;
    facts[i] = facts[i] + '!!!';
    l--;
    return facts;
  }
}