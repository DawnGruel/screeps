// 民法典
module.exports = {
  // 计划生育
  familyPlanning: {
    // 刺激生育
    morePeople: (current_num, target_num, type) => {
      //检测人口是否低于标准线
      if (current_num < target_num) {
        //  执行政令：补充人口，刺激生育 添加农名
        const item = $u.getInfo($.dictionaries.creep.trait, 'name', type, 'order')
        if(item) $.role.add(type)
      }
    }
  }
}
