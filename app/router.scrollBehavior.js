export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else if (to.hash) {
    const position = {};
    position.selector = to.hash;
    if (document.querySelector(to.hash)) {
      return position;
    }
    return false;
  }
}
