const users = [
  { firstName: `John`, lastName: `Doe`, points: 120 },
  { firstName: `Sarah`, lastName: `Miller`, points: 90 },
  { firstName: `Ava`, lastName: `Chen`, points: 145 },
  { firstName: `Liam`, lastName: `Patel`, points: 75 }
];

// Use map to create the new array
const updatedUsers = users.map((user) => {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    membershipStatus: user.points > 100 ? `Premium` : `Standard`
  };
});

console.log(updatedUsers);