export default {
  initChartData(type, timestamp) {
    // todo=> 获取具体的数据

    let tempCompelateTaskData = { Name: "完成任务", Value: [80, 100, 120, 44, 200, 130, 300] };
    let tempRunningTaskData = { Name: "执行中任务", Value: [10, 20, 30, 40, 50, 60, 700] };
    let tempPrepareTaskData = { Name: "待执行任务", Value: [20, 100, 30, 90, 40, 80, 60] };
    let tempErrorTaskTaskData = { Name: "异常任务", Value: [50, 100, 90, 84, 54, 33, 44] };

    var optionInfo = [];
    switch (type) {
      case "weeks":
        optionInfo.push(tempCompelateTaskData);
        optionInfo.push(tempRunningTaskData);
        optionInfo.push(tempPrepareTaskData);
        optionInfo.push(tempErrorTaskTaskData);
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
