import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "dist",
  entry: ["src/index.ts"], // 输入文件
  format: ["esm", "cjs"], // 输出模块格式
  sourcemap: true,        // 生成 source map
  dts: true,              // 生成类型定义文件
  clean: true,            // 构建前清理输出目录
  minify: true,           // 压缩输出
});
