import { errorMapper } from './modules/errorMapper'
// import index from './index'
// 意识体
console.log('进入')
// const index = 
// 工具
// const utils = 
global.$ = require('./index');
global.$u = require('./utils');
// $u.print(Boolean('false'))
// 获取升级信息

export const loop = errorMapper(() => {
  // 工蜂行动
  $.memory.init()
  $.role.init()
  // $.OD.gameGcl()
})