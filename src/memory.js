module.exports = {
  init: function () {
    // RawMemory.setActiveSegments([0, 1]);
    // let DawnGruelOpt = {
    // }

    // RawMemory.segments[1] = Game.time;
    // console.log(RawMemory.segments[1]);
    this.worldGoRound()
  },
  frame: {
    name: 'time',
    debris: 1
  },
  // 世界运转
  worldGoRound () {
    RawMemory.segments[1] = `{value:${Game.time}, type: ${typeof Game.time}, debris: 1}`;
  },
  // 记忆残片映射
  debrisMap: function () {
    const obj = RawMemory.segments[0]
    let debrisMap = ''
    // JSON.parse(RawMemory.segments[0])
    if (obj && obj.length) {
      debrisMap = JSON.parse(RawMemory.segments[0])
    } else {
      RawMemory.segments[0] = JSON.stringify([{ name: 'time', debris: 1 }])
      return this.debrisMap()
    }
    //  name ? obj.find(debris => debris.name == name) : obj

    // $u.print(debrisMap)
    return debrisMap
  },
  // debris_name 记忆碎片名称
  // debris_value 记忆碎片值
  set: function (debris_name, debris_value, newValue = false) {
    const debrisMap = this.debrisMap()
    const choose = debrisMap.find(debris => debris.name === debris_name)
    if (!choose && !newValue) console.log(`❌ 警告，${debris_name}不存在，添加新碎片请添加第三个参数newValue为true`)
    else if (newValue) {
      const debris = debrisMap.length + 1
      debrisMap.push({ name: debris_name, type: typeof debris_value, debris })
      RawMemory.segments[debris] = JSON.stringify(debris_value)
    } else {
      RawMemory.segments[choose.debris] = JSON.stringify(debris_value)
    }
    // console.log(debrisMap)
  },
  get: function (debris_name) {
    const debrisMap = this.debrisMap()
    const chooseDebris = debrisMap.find(debris => debris.name === debris_name)
    if (!chooseDebris) console.log(`❌ 我想不起来您说的是什么，该记忆已丢失！`)
    return format(chooseDebris);
  },
  del: function (debris_name) {

  },
  format (item) {
    let segments = RawMemory.segments[item.debris]
    switch (debris.type) {
      case 'number':
        return Number(segments)
      case 'object':
        return JSON.parse(segments);
      case 'boolean':
        return Boolean(segments)
      default:
        return segments
    }
  }
}