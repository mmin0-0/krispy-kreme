const btt = document.querySelector('#back-to-top');
const docElem =  document.documentElement;

let offset;
let docHeight;
let scrollPos;

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
offset = docHeight / 3;

window.addEventListener('scroll', () => {
  scrollPos = docElem.scrollTop;
  btt.classList = (scrollPos > offset) ? 'visible':'';
});

btt.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToTop();
});

function scrollToTop(){
  let scrollInterval = setInterval(() => {
    if(scrollPos != 0){
      window.scrollBy(0, -50);
    }else{
      clearInterval(scrollInterval);
    }
  }, 15);
}