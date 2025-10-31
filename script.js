function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    })
    .then(response => response.json())
    .then(users => {
      const filteredUsers = users.filter(user =>
        user.address.city.startsWith('S')
      );

      const summarizedUsers = filteredUsers.map(user => ({
        id: user.id,
        name: user.name,
        city: user.address.city,
        companyName: user.company.name
      }));

      summarizedUsers.forEach(user => {
        console.log(
          `User ID ${user.id}: ${user.name} lives in ${user.city} and works at ${user.companyName}`
        );
      });
    })
    .catch(error => {
      console.error('An error occurred:', error.message);
    });
}

getUsers();

function testIfCatchWorks() {
  fetch('https://jsonplaceholder.typicode.co')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('An error occurred:', error.message);
    });
}

testIfCatchWorks();