module.exports = {
  // 生产信息
  createInfo: [
    {
      parameter: OK,
      value: 0,
      description: '收到指令，我王'
    },
    {
      parameter: ERR_NOT_OWNER,
      value: -1,
      description: '你不是该母巢 (spawn) 的所有者'
    },
    {
      parameter: ERR_NAME_EXISTS,
      value: -3,
      description: '重名creep无法降生！'
    },
    {
      parameter: ERR_BUSY,
      value: -4,
      description: '母巢已在孵化！'
    },
    {
      parameter: ERR_NOT_ENOUGH_ENERGY,
      value: -6,
      description: '母巢资源不足以孵化新的creep'
    },
    {
      parameter: ERR_INVALID_ARGS,
      value: -10,
      description: '无法完成该生理结构催化'
    },
    {
      parameter: ERR_RCL_NOT_ENOUGH,
      value: -14,
      description: '核心等级过低，母巢无法使用'
    }
  ]
}