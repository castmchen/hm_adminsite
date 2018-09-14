export class MenuList {
  constructor(language) {
    this.menus = [];
    this.initMenuList(language);
  }
    initMenuList = function(language) {
      if (language === 'CN') {
        let menuUser = new MenuModel('人员管理');
        menuUser.menuItems.push(new MenuItem('Preminum', '管理员'));
        menuUser.menuItems.push(new MenuItem('User', '用户'));
        this.menus.push(menuUser);

        let menuResource = new MenuModel('资源管理');
        menuResource.menuItems.push(new MenuItem('Video', '小视频'));
        menuResource.menuItems.push(new MenuItem('Joke', '段子'));
        menuResource.menuItems.push(new MenuItem('Posts', '推送文章'));
        this.menus.push(menuResource);

        let menuTask = new MenuModel();
        menuTask.groupName = '任务管理';
        menuTask.menuItems.push(new MenuItem('CompelateTask', '完成Task'));
        menuTask.menuItems.push(new MenuItem('RunningTask', '执行中Task'));
        menuTask.menuItems.push(new MenuItem('PrepearTask', '待执行Task'));
        menuTask.menuItems.push(new MenuItem('ErrorTask', '异常Task'));
        this.menus.push(menuTask);

        let menuRobot = new MenuModel('Robot管理');
        menuRobot.menuItems.push(new MenuItem('Dating', '小约们'));
        menuRobot.menuItems.push(new MenuItem('Fishing', '小钓们'));
        this.menus.push(menuRobot);
      }
    }
}

class MenuModel {
  constructor(groupName) {
    this.menuItems = [];
    this.groupName = this.groupName;
  }
}

class MenuItem {
  constructor(routerName, displayName, iconName) {
    this.routerName = routerName;
    this.displayName = displayName;
    this.iconName = iconName;
  }
}

const menuArray = [{
  Preminum: "管理员",
  User: "用户"
},
{
  Video: "小视频",
  Joke: "段子",
  Posts: "推送文章"
},
{
  CompelateTask: "完成Task",
  RunningTask: "执行中Task",
  PrepearTask: "待执行Task",
  ErrorTask: "异常Task"
},
{
  Dating: "小约们",
  Fishing: "小钓们"
}
]

export default menuArray;
