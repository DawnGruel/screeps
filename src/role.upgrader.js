module.exports = {
  run: function (creep) {
    if(creep.memory.role !== 'Upgrader') return;

    const controller = creep.room.controller
    const upgradeController = creep.upgradeController(controller)
    if (creep.store.energy < creep.carryCapacity && upgradeController !== OK) {
      const sources = creep.room.find(FIND_SOURCES)
      if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) creep.moveTo(sources[0], $.role.opts(creep))
    } else {
      creep.say('🚀升级核心中...');
      if (upgradeController == ERR_NOT_IN_RANGE) creep.moveTo(controller, $.role.opts(creep))
    }
  }
};
