export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else if (document.documentElement.clientWidth < 1024 && to.hash) {
    if (document.querySelector(to.hash)) {
      const position = {};
      position.selector = to.hash;
      position.offset = {
        x: 0,
        y: 10,
      };
      position.behavior = "smooth";
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(position);
        }, 20);
      });
    }
  }
  return { x: 0, y: 0 };
}
