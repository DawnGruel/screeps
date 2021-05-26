module.exports = {
  // 查看工蜂
  lookAllHarvester: function (type) {
    let list = [];
    // console.log(`当前人数: ${$u.length(Game.creeps)}`)
    // for (let name in Game.creeps) {
    //   showInfo && console.log(`
    //   ${name}:
    //   ${JSON.stringify(Game.creeps[name])}
    //   `)
    // }
    if (type) list = _.filter(Game.creeps, (c) => c.memory.role === 'Harvester')
    return $u.length(list)
  },
  /** @param {Creep} creep **/
  run: function (creep) {
    if(creep.memory.role !== 'Harvester') return;

    if (creep.store.getFreeCapacity() > 0) {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[1], $.role.opts(creep));
      }
    }
    else {
      if (creep.transfer(Game.spawns[$.KC.spawns[0]], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        $.role.backSpawn(creep)
      }
    }
  },
};