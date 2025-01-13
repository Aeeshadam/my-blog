export const debounce = (func: (arg: string) => void, delay: number) => {
  let timer: NodeJS.Timeout;
  return (arg: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(arg), delay);
  };
};
