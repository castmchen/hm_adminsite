export default {
  initChartData(type, timestamp) {
    // todo=> 获取具体的数据

    let tempDatingData = { Name: "小约们", Value: [80, 100, 120, 44, 200, 130, 300] };
    let tempFishingData = { Name: "小钓们", Value: [10, 20, 30, 40, 50, 60, 700] };

    var optionInfo = [];
    switch (type) {
      case "weeks":
        optionInfo.push(tempDatingData);
        optionInfo.push(tempFishingData);
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
