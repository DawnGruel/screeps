const { cloneDeep } = require("lodash");

module.exports = {
  run: function (creep) {
    // 查看建筑工地
    const constructionSite = creep.build(creep.room.find(FIND_CONSTRUCTION_SITES)[0]);
    // console.log('123456' ,constructionSite)
    // console.log(creep.name, 'creep.store.energy < creep.carryCapacity', creep.store.energy < creep.carryCapacity, upgradeController !== 0)
    if (creep.store.energy < creep.carryCapacity && constructionSite !== 0) {
      // console.log('upgradeController', upgradeController)
      const sources = creep.room.find(FIND_SOURCES)
      if (creep.harvest(sources[1]) === ERR_NOT_IN_RANGE) creep.moveTo(sources[1], $.role.opts(creep))
    } else {
      console.log(creep.name, 2)
      // creep.say('🚧建造中...');
      if (constructionSite == ERR_NOT_IN_RANGE) creep.moveTo(constructionSite, $.role.opts(creep))
    }
  }
};