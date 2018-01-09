module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/self-closing-comp': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
  },
};
