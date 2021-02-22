module.exports = {
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  extends: [
    'airbnb-typescript/base',
  ],
  rules:{
    '@typescript-eslint/no-namespace':'off',
    'no-inner-declarations':'off',
    'no-underscore-dangle':'off',
    'import/prefer-default-export':'off',
    '@typescript-eslint/no-redeclare':'off',
    'implicit-arrow-linebreak':'off',
    "max-classes-per-file": ["error", 5],
    "no-mixed-operators": 'off',
    'padded-blocks':'off',
    'spaced-comment':'off',
    'arrow-parens': ["error", "as-needed"],
    '@typescript-eslint/lines-between-class-members':'off',
    
  },
  "noInlineConfig": true
};
