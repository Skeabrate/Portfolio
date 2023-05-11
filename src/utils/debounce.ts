export function debounce(func: () => void, delay = 300) {
  let timer: ReturnType<typeof setTimeout>;

  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}
