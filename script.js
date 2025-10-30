// 1. Setup and Asynchronous Function
async function fetchUsersAndSummarize() {
  // 2. Fetch and Promise Chaining
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      // Chain 1: Response Check
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    })
    .then(response => {
      // Chain 2: Data Parsing
      return response.json();
    })
    .then(users => {
      // 3. Data Processing and Method Chaining

      // Filter: users whose city starts with 'C'
      const filteredUsers = users.filter(user =>
        user.address.city.startsWith('C')
      );

      // Map: transform to smaller object
      const summarizedUsers = filteredUsers.map(user => ({
        id: user.id,
        name: user.name,
        companyName: user.company.name
      }));

      // Display: log each user summary
      summarizedUsers.forEach(user => {
        console.log(`User ID ${user.id}: ${user.name} works at ${user.companyName}`);
      });
    })
    .catch(error => {
      // Error Handling
      console.error('An error occurred:', error.message);
    });
}

// 4. Execution and Scope

// Call the function for successful run
fetchUsersAndSummarize();

// Function to demonstrate error handling
function testError() {
  fetch('https://jsonplaceholder.typicode.com/u5ers') // Intentionally invalid endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => {
      console.error('An error occurred:', error.message);
    });
}

// Call testError to demonstrate failure handling
testError();