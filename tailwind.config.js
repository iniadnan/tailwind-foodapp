module.exports = {
  purge: {
    enabled: true,
    content: ['./html/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    borderRadius: {
      '4px': '4px',
      '5px': '5px',
      '8px': '8px',
      '12px': '12px',
      '16px': '16px',
      '24px': '24px',
      '28px': '28px',
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      popular: '5px 5px 35px -10px rgba(0, 0, 0, 0.15)',
      nav: '0px -5px 35px -10px rgba(0, 0, 0, 0.15)',
    },
    extend: {
      height: {
        '2px': '2px',
        '8px': '8px',
        '14px': '14px',
        '31px': '31px',
        '36px': '36px',
        '39px': '39px',
        '40px': '40px',
        '52px': '52px',
        '60px': '60px',
        '75px': '75px',
        '86px': '86px',
        '92px': '92px',
        '164px': '164px',
        '441px': '441px',
      },
      width: {
        '8px': '8px',
        '14px': '14px',
        '24px': '24px',
        '31px': '31px',
        '36px': '36px',
        '39px': '39px',
        '140px': '140px',
        '173px': '173px',
        '274px': '274px',
        '38.5pc': '38.5%',
        '640px': '640px'
      },
      padding: {
        '2px': '2px',
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '26px': '26px',
        '28px': '28px',
        '32px': '32px',
        '36px': '36px',
        '48px': '48px',
        '58px': '58px',
        '70px': '70px',
        '96px': '96px',
        '108px': '108px',
        '144px': '144px',
      },
      margin: {
        '2px': '2px',
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '26px': '26px',
        '28px': '28px',
        '32px': '32px',
        '36px': '36px',
        '48px': '48px',
        '58px': '58px',
        '70px': '70px',
        '96px': '96px',
        '144px': '144px',
      },
      fontSize: {
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '40px': '40px',
      },
      lineHeight: {
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '21px': '21px',
        '22px': '22px',
        '24px': '24px',
        '25px': '25px',
        '28px': '28px',
        '30px': '30px',
        '34px': '34px',
        '40px': '40px',
        '42px': '42px',
        '48px': '48px',
        '60px': '60px',
      },
      colors: {
        'color-white-25': 'rgba(255, 255, 255, 0.25)',
        'color-black-25': 'rgba(0, 0, 0, 0.25)',
        'color-130f26': '#130F26',
        'color-707070': '#707070',
        'color-838383': '#838383',
        'color-909090': '#909090',
        'color-f9c032': '#F9C032',
        'color-7d7d7d': '#7d7d7d',
        'color-fb9300': '#FB9300',
        'color-fffaf2': '#FFFAF2',
        'color-f8f8f8': '#F8F8F8',
        'color-919191': '#919191',
        'color-fb9300-50': 'rgba(251, 147, 0, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
