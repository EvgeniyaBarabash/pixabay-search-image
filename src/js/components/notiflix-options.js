import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  messageMaxLength: 110,
  position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '10px',
  opacity: 1,
  timeout: 2000,
  fontSize: '14px',
  cssAnimationDuration: 450,
  cssAnimationStyle: 'from-top', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
  useIcon: true,
  clickToClose: true,

  success: {
    background: '#bfe5df',
    textColor: '#333',
  },

  failure: {
    background: '#e5bfc5',
    textColor: '#333',
  },
});

Notiflix.Loading.init({
  backgroundColor: 'rgba(0,0,0,0.2)',
  cssAnimationDuration: 450,
  svgSize: '80px',
  svgColor: '#7d8e70',
  messageFontSize: '16px',
  messageMaxLength: 34,
  messageColor: '#7d8e70',
});