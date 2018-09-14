function InitBarOption(optionInfo) {
  if (!optionInfo.OptionItems || !optionInfo.OptionTimeStamp) {
    return null;
  }
  let legendArray = [];
  let seriesArray = [];
  for (var optionItem of optionInfo.OptionItems) {
    legendArray.push(optionItem.Name);
    seriesArray.push({
      name: optionItem.Name,
      type: 'bar',
      data: optionItem.Value
    })
  }

  if (legendArray.length === 0 || seriesArray.length === 0) {
    return null;
  }
  let timeStampArray = optionInfo.OptionTimeStamp;
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {},
    grid: {
      top: '20%',
      left: '1%',
      right: '4%',
      bottom: '1%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: timeStampArray
    }],
    yAxis: [{
      type: 'value'
    }],
    series: seriesArray
  };
}

export default { InitBarOption };
