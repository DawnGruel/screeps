// 嗅觉探测器
module.exports = {
  // 人口探测
  census: function () {
    // 获取人口类型队列
    const trait = $.dictionaries.creep.trait;
    // 通过权杖掌控工蜂进化树
    for (const item in trait) {
      const type = trait[item].name;
      const prohibit = $.KC.prohibit
      if(prohibit.length && prohibit.find(item => item == type)) {
        // console.log(`母巢当前禁止生产 ${type}`)
        continue;
      };
      const list = _.filter(Game.creeps, (c) => c.memory.role === type);
      const current_num = list.length
      // 通过权杖获取人口上限
      const target_num = $.KC.population[type][1]
      $.CC.familyPlanning.morePeople(current_num, target_num, type)
      // console.log(`当前${type}数量: ${current_num}/${target_num}`)
    }
  },
  // sources: () => {
  //   const sources = Game.RoomObject
  //   // console.log(sources[0])
    
  //   $u.print(sources)
  // },
  // 核心探查
  gameGcl: () => {
    let gGcl = Game.gcl
    console.log(`
    核心探查：
    level(当前等级):${gGcl.level}
    progress(升级进度): ${gGcl.progress}/${gGcl.progressTotal}`)
  }
}