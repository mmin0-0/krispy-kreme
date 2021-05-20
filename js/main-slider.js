const sliderWrap = document.querySelector('.main-slider'),
sliderContainer = document.querySelector('.main-slider-container'),
slide = document.querySelectorAll('.slide'),
slideCount = slide.length,
prevBtn = document.querySelector('#prev'),
nextBtn = document.querySelector('#next'),
pager = document.querySelector('.pager');

let currentIndex = 0;
let slideHeight = 0;
let timer;
let pagerHTML = '';

for(let i = 0; i < slideCount; i++){
  if(slideHeight < slide[i].offsetHeight){
    slideHeight = slide[i].offsetHeight;
  }
}
sliderWrap.style.height = slideHeight + 'px';
sliderContainer.style.height = slideHeight + 'px';


for(let i = 0; i < slideCount; i++){
  slide[i].style.left = i * 100 + '%';

  pagerHTML += '<span data-index="' + i + '"></span>';
  pager.innerHTML = pagerHTML;
}
const pagerBtn = document.querySelectorAll('.pager span');

function goToSlide(idx){
  sliderContainer.classList.add('animated');
  sliderContainer.style.left = -100 * idx + '%';
  currentIndex = idx;

  for(let j = 0; j < pagerBtn.length; j++){
    pagerBtn[j].classList.remove('active');
  }
  pagerBtn[idx].classList.add('active');
}
goToSlide(0);

prevBtn.addEventListener('click', function(e){
  e.preventDefault();

  if(currentIndex == 0){
    goToSlide(slideCount - 1);
  }else{
    goToSlide(currentIndex - 1);
  }
});

nextBtn.addEventListener('click', function(e){
  e.preventDefault();

  if(currentIndex == slideCount - 1){
    goToSlide(0);
  }else{
    goToSlide(currentIndex + 1);
  }
});

function startAutoSlide(){
  timer = setInterval(function(){
    let nextIdx = (currentIndex + 1) % slideCount;
    goToSlide(nextIdx);
  }, 4000);
}
startAutoSlide();

function stopAutoSlide(){
  clearInterval(timer);
}

sliderWrap.addEventListener('mouseenter', stopAutoSlide);
sliderWrap.addEventListener('mouseleave', startAutoSlide);

for(let i = 0; i < pagerBtn.length; i++){
  pagerBtn[i].addEventListener('click', function(e){
    let pagerNum = e.target.getAttribute('data-index');
    goToSlide(pagerNum);
  });
}