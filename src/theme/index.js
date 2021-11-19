const colors = {
  backgorund: {
    ligth: {
      color: '#FFFFFF',
      contrastColor: '#000000',
      solarizedColor: '#ececec',
    },
  },
  primary: '#0070f3',
  button: {
    main: {
      color: '#4d5f63',
      contrastColor: '#FFFFFF',
    },
    emphasis: {
      color: '#f9af40',
      contrastColor: '#FFFFFF',
    },
    helper: {
      color: '#5e8487',
      contrastColor: '#FFFFFF',
    },
  },
};
export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  ultrawide: 2543,
};
export default {
  colors,
  breakpoints,
  borderRadius: '50px',
  fontFamily: '\'Roboto \', sans-serif',
  transition: '200ms ease-in-out',

};
