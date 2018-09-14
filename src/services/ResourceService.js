export default {
  InitChartData() {
    // todo=> 添加获取资源的逻辑

    let tempChartOption = {
      OptionItems: [{
        name: "小视频",
        value: 100
      },
      {
        name: "段子",
        value: 150
      },
      {
        name: "推送文章",
        value: 120
      }
      ]
    }

    return tempChartOption;
  }
}
