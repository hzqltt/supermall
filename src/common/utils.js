/**
 * 防抖函数
 * @param func  需要多次执行的函数
 * @param delay 等待时间
 * @returns {function(...[*]=)}
 */
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
