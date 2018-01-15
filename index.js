function theBeatlesPlay(musicians,instruments) {
  let band = [];
  
  let members = musicians.length;
  
  for (let i = 0; i < members; i++) {
    band[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return band;
}