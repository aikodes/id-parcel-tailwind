import Alpine from 'alpinejs';
import scrollLock from './utils/scroll-lock';

console.log('Hello world! 🙌');

window.Alpine = Alpine;

// document.addEventListener('alpine:init', () => {
// Alpine.store('slideout', false)

Alpine.store('slideOut', {
  on: false,

  lock() {
    scrollLock.enable();
  },
  unlock() {
    scrollLock.disable();
  },

  toggle() {
    this.on = !this.on;
  },
});

// })

Alpine.start();

console.log('👋🏼 안녕하세요!');
const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;

const langArr = userLocale.split('-');
const langX = `${langArr[0]}`;

console.log(userLocale);
console.log(langArr);
console.log(langX);
