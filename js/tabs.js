const targetLink = document.querySelectorAll('.tab-menu a');
const tabContent = document.querySelectorAll('#tab-content > div');

for(let i = 0; i < targetLink.length; i++){
  targetLink[i].addEventListener('click', (e) => {
    e.preventDefault();
    
    let orgTarget = e.target.getAttribute('href');
    let tabTarget = orgTarget.replace('#', '');
    
    for(let j = 0; j < tabContent.length; j++){
      tabContent[j].style.display = 'none';
    }
    document.getElementById(tabTarget).style.display = 'block';

    for(let x = 0; x < targetLink.length; x++){
      targetLink[x].classList.remove('active');
      e.target.classList.add('active');
    }
  });
}

document.getElementById('tabs-1').style.display = 'block';
