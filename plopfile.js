module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "create a custom component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name",
        default: "MyComponent",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/{{name}}/__tests__/index.test.js",
        templateFile: "templates/component/__tests__/index.test.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/src/index.vue",
        templateFile: "templates/component/src/index.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/stories/index.stories.js",
        templateFile: "templates/component/stories/index.stories.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/index.js",
        templateFile: "templates/component/index.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/LICENSE",
        templateFile: "templates/component/LICENSE",
      },
      {
        type: "add",
        path: "packages/{{name}}/package.json",
        templateFile: "templates/component/package.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/README.md",
        templateFile: "templates/component/README.hbs",
      },
    ],
  });
};
