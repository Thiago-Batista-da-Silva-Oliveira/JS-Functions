
const debounce = (cb, d) => {
  let timer;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
        cb(...args)
    }, d)
  }
}

const handleChange = debounce((e) => {
    console.log(e.target.value)
}, 1000)