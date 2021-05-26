'use strict';

// 意识体
const index = require('index');
// 工具
const utils = require('utils');
global.$ = index;
global.$u = utils;
// $u.print(Boolean('false'))
// 获取升级信息

module.exports.loop = function () {
  // 工蜂行动
  $.memory.init();
  $.role.init();
  // $.OD.gameGcl()
};
//# sourceMappingURL=main.js.map
