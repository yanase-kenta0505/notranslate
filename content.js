// Array.prototype.forEach.call(document.getElementsByTagName('pre'), x => x.classList.add('notranslate'))

Array.prototype.forEach.call(document.querySelectorAll('pre, code'), x => x.classList.add('notranslate'))

setTimeout(() => {
  Array.prototype.forEach.call(document.querySelectorAll('pre, code'), x => x.classList.add('notranslate'))
  console.log('notranslate')
}, 1000)