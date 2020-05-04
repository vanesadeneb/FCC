function countOnline(usersObj) {
  let count = 0;
  for(let user in usersObj){
    if(usersObj[user]['online'] === true){
      count++
    }
  }
  return count;
}
