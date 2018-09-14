export default class UserModel {
  constructor(userDomain) {
    this.username = userDomain.username;
    // this.password = userDomain.password;
    this.emailaddress = userDomain.emailaddress;
    this.sex = userDomain.sex;
    this.age = userDomain.age;
  }
}
