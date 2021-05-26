// 工蜂行动
import HR from './role.harvester'
// 核心工蜂行动
import UR from './role.upgrader'
// 建造工蜂行动
import BR from './role.builder'

module.exports = {
  HR, UR, BR,
  init () {
    $.OD.census()
    let creepName = ''
    for (const name in Memory.creeps) {
      const creep = Game.creeps[name];
      if (!creep) {
        delete Memory.creeps[name] // 删除亡者记忆
        // 查探缺失人口
        $.OD.census()
      } else {
        creepName += ` ${name}`
        this.brain(creep)
      }
    }
    console.log(creepName)
  },
  // 大脑🧠
  brain: function (creep) {
    // console.log(Game.room.find(FIND_TOMBSTONES))
    const hostiles = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 10);
    const life = creep.ticksToLive
    if (life <= 50) { // 自检 
      if (life == 50 || life == 30 || life == 10) creep.say('💀要死了，要死了！');
      else if (life == 1) creep.say('💀');
      this.backSpawn(creep);
    }
    else if (hostiles.length > 0) { // 警戒
      creep.say('OMG!😨敌人');
      this.backSpawn(creep);
    }
    else {
      // 安全
      this.doWork(creep);
    }
  },
  // 回巢
  backSpawn: function (creep) {
    creep.moveTo(Game.spawns[$.KC.spawns[0]], this.opts(creep));
  },
  // 添加工蜂
  add: function (type) {
    let creepAlias = $u.getInfo($.dictionaries.creep.trait, 'name', type, 'alias')
    let createCreep = Game.spawns[$.KC.spawns[0]].spawnCreep($.KC.HPart, `${type}${Game.time}`, { memory: { role: type, state: 1 } })
    if (createCreep < 0) {
      let info = $u.getInfo($.dictionaries.spawn.createInfo, 'value', createCreep, 'description')
      console.log(`${info}`)
      // $.KC.spawns[0].say(info);
    } else {
      console.log(`新${creepAlias}诞生了,赐名:${type}${Game.time}`)
    }
  },
  // moveTo 的 opt参数模块
  opts: (creep) => {
    return {
      visualizePathStyle: $u.getInfo($.dictionaries.creep.trait, 'name', creep.memory.role, 'moveLine'),
      reusePath: 40,
      serializeMemory: true
    }
  },
  // 行动
  doWork: function (creep) {
    console.log('工蜂行动')
    if (creep.memory.role === 'Harvester') this.HR.run(creep)
    if (creep.memory.role === 'Upgrader') this.UR.run(creep)
    if (creep.memory.role === 'Builder') this.BR.run(creep)
  }
}
