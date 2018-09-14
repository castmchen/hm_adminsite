function InitLineOption(optionInfo) {
  if (!optionInfo.OptionItems || !optionInfo.OptionTimeStamp) {
    return null;
  }
  let legendArray = [];
  let seriesArray = [];
  for (var optionItem of optionInfo.OptionItems) {
    legendArray.push(optionItem.Name);
    seriesArray.push({
      name: optionItem.Name,
      type: 'line',
      // stack: '总量',
      data: optionItem.Value
    })
  }

  if (legendArray.length === 0 || seriesArray.length === 0) {
    return null;
  }
  let timeStampArray = optionInfo.OptionTimeStamp;
  return {
    title: {
      // text: '折线图堆叠'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: legendArray
    },
    grid: {
      top: '20%',
      left: '1%',
      right: '4%',
      bottom: '1%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: timeStampArray
    },
    yAxis: {
      type: 'value'
    },
    series: seriesArray
  };
}

export default { InitLineOption }
