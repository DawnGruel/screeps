/*
 * @Description: 
 * @Author: 曦粥
 * @Email: 247328581@qq.com
 * @Date: 2021-05-26 20:17:38
 * @LastEditTime: 2021-05-26 20:19:10
 * @LastEditors: 曦粥
 */
// 告诉 rollup 他要打包什么
export default {
  // 源代码的入口是哪个文件
  input: 'src/main.js',
  // 构建产物配置
  output: {
      // 输出到哪个文件
      file: 'dist/main.js',
      format: 'cjs',
      sourcemap: true
  }
};