import Beginnerlessons from "../components/Beginnerlessons";

const siteUsers = [
  {
        username: 'Ryan', 
        password: '1234',
        message:  'logged in',
        userlevel: "beginner",
        badge: "assets/images/beginnerBadge.png"   
    },
    {
        username: 'Jon',
        password: '2345',
        message:  'logged in',
        userlevel: "intermediate",
        badge: "assets/images/intermediateBadge.png" 
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