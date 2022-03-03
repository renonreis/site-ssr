module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('create-component', {
    description: 'Create folder and files pattern for a component',
    prompts: [
      {
        type: 'input',
        name: 'component',
        message: 'Type a name for the component [E.g., NameOfComponent]',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'components/{{pascalCase component}}/{{pascalCase component}}.spec.js',
        templateFile: 'plop-templates/test.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase component}}/{{pascalCase component}}.vue',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase component}}/index.js',
        templateFile: 'plop-templates/index.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase component}}/{{pascalCase component}}.scss',
        templateFile: 'plop-templates/style.hbs',
      },
    ], // array of actions
  });
};
