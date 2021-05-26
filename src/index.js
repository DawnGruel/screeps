// 嗅觉探测器
const OD = require('./olfactoryDetector')
// 民法典
const CC = require('./law-code-civil')
// 国王权杖
const KC = require('./KingController')
// 字典库
const dictionaries = require('./dictionaries.index')
// 基础行动
const role = require('./role.creep')
// 记忆库
const memory = require('./memory')

module.exports = { OD, KC, CC, role, dictionaries, memory }