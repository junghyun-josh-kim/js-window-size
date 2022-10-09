let windowScreen = document.getElementById('window-screen');

function outerHandler() {
  widthOuter = window.outerWidth;
  heightOuter = window.outerHeight;
  console.log(widthOuter, heightOuter);
}

windowScreen.addEventListener(window.onvolumechange, outerHandler);
