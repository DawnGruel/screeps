// import { errorMapper } from './modules/errorMapper'
// 意识体
import index from './index'
// 工具
import utils from './utils'

// console.log(123)
global.$ = index;
global.$u = utils;
// $u.print(Boolean('false'))
// 获取升级信息
// console.log()
$u.print($)
module.exports.loop = function() {
  

  // 工蜂行动
  $.memory.init()
  $.role.init()
  // $.OD.gameGcl()
} 
// loop()