let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  //Takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
  let newFrend = userObj.data['friends'].push(friend);
  return userObj.data['friends'];
}

console.log(addFriend(user, 'Pete'));
