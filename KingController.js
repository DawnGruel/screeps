
module.exports = {
  // 虫巢队列
  spawns: ['Dawn'],
  // 静止生产队列
  prohibit: [], // Builder
  // 人口控制
  population: {
    // 工蜂人口上限值
    Harvester: [1, 2],
    // 筑巢蜂人口上限值
    Upgrader: [3, 4],
    // 建造者
    Builder: [2, 2]
  },
  // 基本工蜂组件
  HPart: [WORK, CARRY, MOVE]
}
