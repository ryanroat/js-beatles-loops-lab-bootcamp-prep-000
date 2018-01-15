function theBeatlesPlay(musicians,instruments) {
  let band = [];
  
  let members = musicians.length;
  
  for (let i = 0; i < members; i++) {
    band[i] = `${musicians[i]} play ${instruments[i]}`;
  }
  return band;
}