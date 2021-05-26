
const moveLineDefault = {
  fill: 'transparent',
  lineStyle: 'dashed',
  strokeWidth: .15,
  opacity: .1
}

module.exports = {
  // 工蜂特征进化树
  trait: [
    {
      alias: '工蜂', // 特征别名
      name: 'Harvester', // 特征类型
      order: 'HR', //意念控制器
      moveLine: {
        ...moveLineDefault,
        stroke: '#fff',
      }
    },
    {
      alias: '核心工蜂',
      name: 'Upgrader',
      order: 'UR',
      moveLine: {
        ...moveLineDefault,
        stroke: '#ff0000',
      }
    }, {
      alias: '建造工蜂',
      name: 'Builder',
      order: 'BR',
      moveLine: {
        ...moveLineDefault,
        stroke: '#00ff00',
      }
    }
  ]
}
