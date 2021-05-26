const { find } = require("lodash");

module.exports = {
  // 获取数量
  length: (obj) => Object.getOwnPropertyNames(obj).length,
  print: (obj) => console.log(JSON.stringify(obj, null, 4)),
  // 获取信息
  getInfo: (arr, target, val, getMsg) => {
    const infoItem = arr.find(item => item[target] === val);
    if(infoItem != -1) return infoItem[getMsg];
    else return '';
  }
}