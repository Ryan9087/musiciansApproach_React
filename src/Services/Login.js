const siteUsers = [
    {
        username: 'Ryan',
        password: '1234'
    },
    {
        username: 'Jon',
        password: '2345'
    }
];

class Loginservice {
  static login(username, password) {
    let loggedInUser = null;
    loggedInUser = siteUsers.find((user) => {
        return user.username === username && user.password === password;
    });
    return loggedInUser;
  }
}

export default Loginservice;