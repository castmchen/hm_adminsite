import UserModel from '../model/UserModel';

export default {
  getAdminList() {
    // todo=> 添加获取admin信息的逻辑

    let adminList = [{
      uername: 'qiang.c.chen',
      emailaddress: 'qiang.c.chen@accentrue.com',
      sex: 'male',
      age: 29
    }]

    var result = [];
    adminList.forEach(_ => {
      result.push(new UserModel(_));
    });
    return result;
  },
  getUserList() {
    // todo=> 添加获取user信息的逻辑

    let userList = [{
      uername: 'qiang.c.chen',
      emailaddress: 'qiang.c.chen@accentrue.com',
      sex: 'male',
      age: 29
    }]

    var result = [];
    userList.forEach(_ => {
      result.push(new UserModel(_));
    });
    return result;
  },
  userLogin(userObj) {
    // todo=> 添加用户登陆后台验证的逻辑

    let invalidUserFlag = false;
    if (userObj.username === 'qiang.c.chen' && userObj.password === '1qaz2wsxER') {
      return !invalidUserFlag;
    }
    return invalidUserFlag;
  },
  userRegister(userObj) {
    // todo=> 添加用户注册后台添加数据的逻辑

    return true;
  },
  initChartData(type, timestamp) {
    // todo=> 获取具体的数据

    let tempAdminData = { Name: "管理员", Value: [80, 100, 120, 44, 200, 130, 300] };
    let tempUserData = { Name: "用户", Value: [300, 130, 44, 80, 200, 193, 30] };
    var optionInfo = [];
    switch (type) {
      case "weeks":
        optionInfo.push(tempAdminData);
        optionInfo.push(tempUserData);
        break;
      case "months":
        break;
      case "years":
        break;
      default:
        break;
    }
    return optionInfo;
  }
}
