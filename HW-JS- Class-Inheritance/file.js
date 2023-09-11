class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log("User logged in");
  }

  logout() {
    console.log("User logged out");
  }

  changeName(newName) {
    if (newName) {
      this.name = newName;
      console.log("Name changed successfully");
    } else {
      console.log("Invalid name");
    }
  }

  changePassword(newPassword) {
    if (newPassword) {
      console.log("Password changed successfully");
    } else {
      console.log("Invalid password");
    }
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.users = [];
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
      console.log("User added successfully");
    } else {
      console.log("Invalid user");
    }
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log("User removed successfully");
    } else {
      console.log("User not found");
    }
  }

  changeUserRole(user, newRole) {
    if (user instanceof User && (newRole === "admin" || newRole === "user")) {
      user.role = newRole;
      console.log("User role changed successfully");
    } else {
      console.log("Invalid user or role");
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
    console.log("All users removed successfully");
  }
}

const user1 = new User("Petro", "admin");
console.log(user1.getName());
console.log(user1.getRole());
user1.login();
user1.logout();
user1.changeName("Ivan");
user1.changePassword("newPassword");

const admin1 = new Admin("Admin");
admin1.addUser(user1);
console.log(admin1.getAllUsers());
admin1.changeUserRole(user1, "user");
admin1.removeUser(user1);
admin1.removeAllUsers();
