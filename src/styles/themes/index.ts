const theme = {
  color: {
    white: '#ffffff',
    black: '#111111',
    grayscale900: '#22223D',
    grayscale700: '#525068',
    grayscale600: '#6B677D',
    grayscale500: '#837E92',
    grayscale300: '#B2ADBB',
    grayscale200: '#C9CDDB',
    grayscale100: '#E0DDE4',
    grayscale50: '#F7F6F8',

    malibu900: '#5478E6',
    malibu800: '#6093EC',
    malibu700: '#6DAAF2',
    malibu600: '#7ABEF9',
    malibu500: '#88CFFB',
    malibu400: '#A0DAF9',
    malibu300: '#B7E4F9',
    malibu200: '#CCEDF9',
    malibu100: '#E1F4FB',
    malibu50: '#F5FBFD',

    transparent: 'rgba(0,0,0,0)',
  },
  weight: {
    bold: 700,
    medium: 500,
    regular: 400,
  },
  zIndex: {
    negative: -1,
    default: 0,
    first: 1,
    second: 2,
  },
};

export type Theme = typeof theme;

export default theme;
