import { nodeResolve } from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
import resolve from "@rollup/plugin-node-resolve";
import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs"; //引入commojs
import replace from "rollup-plugin-replace";
import typescript from 'rollup-plugin-typescript2';
import ElementPlus from "unplugin-element-plus/rollup";
// rollup.config.mjs
export default {
  input: ["./src/index.ts"],
  // external: ["clipboard"],
  output: {
    name: "slider",
    file: "./dist/slider.js",
    format: "iife",
  },
  plugins: [
    vue({
      // 把单文件组件中的样式，插入到html中的style标签
      css: true,
      // 把组件转换成 render 函数
      compileTemplate: true,
    }),
    typescript({
      // removeComments: true,
      // // 使用声明生成路径配置
      // useTsconfigDeclarationDir: true,
      // // 覆盖 tsconfig.json 的配置项
      // tsconfigOverride: {
      //     // include: ['src/components/*/*'],
      // },
    }),
    css(),
    nodeResolve(),

    ElementPlus(),
    // Components({
    //   resolvers: [
    //     // AntDesignVueResolver(),
    //     ElementPlusResolver(),
    //     // VantResolver(),
    //   ],
    // }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.VUE_ENV": JSON.stringify("browser"),
    }),
    commonjs(),
    resolve(),
  ],
};
