function InitPieOption(optionInfo) {
  if (!optionInfo || !optionInfo.OptionItems || optionInfo.OptionItems.length === 0) {
    return;
  }

  let nameList = [];
  optionInfo.OptionItems.forEach(_ => {
    nameList.push(_.name);
  })
  return {
    title: {
      // text: '某站点用户访问来源',
      // subtext: '纯属虚构',
      // x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: nameList
    },
    series: [{
      name: '资源占比',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: optionInfo.OptionItems,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
};

export default { InitPieOption }
