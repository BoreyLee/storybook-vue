module.exports = {
  testMatch: ["**/__tests__/**/*.[jt]s?(x)"],
  moduleFileExtensions: [
    "js",
    "json",
    // 告诉 Jest 处理 `*.vue` 文件
    "vue",
  ],
  transform: {
    // 用 `vue-jest` 处理 `*.vue` 文件
    "^.+\\.vue$": "<rootDir>/node_modules/vue-jest",
    // 用 `babel-jest` 处理 js
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  snapshotSerializers: ["jest-serializer-vue"],
};
