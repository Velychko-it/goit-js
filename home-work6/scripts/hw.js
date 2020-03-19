import users from "./users.js";
'use strict'
// ++++++++++++++++++++++++завдача1+++++++++++++++++++++
const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));
// ++++++++++++++++++++++++завдача1+++++++++++++++++++++




// ++++++++++++++++++++++++++задача2++++++++++++++++++++++++
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === "blue");
};

console.log(getUsersWithEyeColor(users, "blue"));
// ++++++++++++++++++++++++++задача2++++++++++++++++++++++++




// ++++++++++++++++++++++++++задача3++++++++++++++++++++++++
const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender);
};

console.log(getUsersWithGender(users, "male"));
// ++++++++++++++++++++++++++задача3++++++++++++++++++++++++





// ++++++++++++++++++++++++++задача4++++++++++++++++++++++++
const getInactiveUsers = users => {
  return users.filter(user => user.isActive);
};

console.log(getInactiveUsers(users));
// ++++++++++++++++++++++++++задача4++++++++++++++++++++++++





// +++++++++++++++++++++++++++++задача5++++++++++++++++++++++++++
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
// +++++++++++++++++++++++++++++задача5++++++++++++++++++++++++++




// +++++++++++++++++++++++++++++задача6++++++++++++++++++++++++++
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));
// +++++++++++++++++++++++++++++задача6++++++++++++++++++++++++++




// +++++++++++++++++++++++++++++задача7++++++++++++++++++++++++++
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
// / +++++++++++++++++++++++++++++задача7++++++++++++++++++++++++++




// / +++++++++++++++++++++++++++++задача8++++++++++++++++++++++++++
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user["friends"].includes(friendName))
    .map(user => user.name);
};
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
// / +++++++++++++++++++++++++++++задача8+++++++++++++++++++++++++



//  +++++++++++++++++++++++++++++задача9+++++++++++++++++++++++++
const getNamesSortedByFriendsCount = users => {
  const sortFriendsCount =(a,b) =>a.friends.length - b.friends.length;
  return users.sort(sortFriendsCount)
  };
 
  
  console.log(getNamesSortedByFriendsCount(users));
// / +++++++++++++++++++++++++++++задача9+++++++++++++++++++++++++






// / +++++++++++++++++++++++++++++задача10+++++++++++++++++++++++++
const getSortedUniqueSkills = users => {
    
  let skillsNotUnique = users
  .reduce((acc, {skills}) => [...acc, ...skills], []);

  skillsNotUnique = skillsNotUnique.sort();

  return [...new Set(skillsNotUnique)];
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


// / +++++++++++++++++++++++++++++задача10+++++++++++++++++++++++++