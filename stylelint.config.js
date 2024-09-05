module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'function-no-unknown': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin'
        ]
      }
    ],
    'no-empty-source': null,
    'string-quotes': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    // 'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports'
        },
        {
          type: 'at-rule',
          name: 'media'
        },
        'rules'
      ],
      { severity: 'warning' }
    ]
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      extends: ['stylelint-config-recommended', 'stylelint-config-html'],
      rules: {
        'keyframes-name-pattern': null,
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global']
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
          }
        ],
        'order/properties-order': [
          // 规则顺序
          'position',
          'content',
          'top',
          'right',
          'bottom',
          'left',
          'float',
          'display',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'margin-collapse',
          'margin-top-collapse',
          'margin-right-collapse',
          'margin-bottom-collapse',
          'margin-left-collapse',
          'border',
          'border-radius',
          'outline',
          'outline-offset',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'width',
          'height',
          'max-width',
          'max-height',
          'min-width',
          'min-height',
          'clip',
          'font',
          'font-family',
          'font-size',
          'font-smoothing',
          'osx-font-smoothing',
          'font-style',
          'font-weight',
          'line-height',
          'letter-spacing',
          'word-spacing',
          'text-align',
          'text-decoration',
          'text-indent',
          'text-overflow',
          'text-rendering',
          'text-size-adjust',
          'text-shadow',
          'text-transform',
          'word-break',
          'word-wrap',
          'white-space',
          'vertical-align',
          'list-style',
          'list-style-type',
          'list-style-position',
          'list-style-image',
          'pointer-events',
          'opacity',
          'filter',
          'visibility',
          'size',
          'transform',
          'background',
          'background-color',
          'color',
          'clear',
          'cursor',
          'overflow',
          'overflow-x',
          'overflow-y',
          'z-index'
        ]
      }
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue']
    }
  ]
}
