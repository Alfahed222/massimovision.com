function toggleMenu(){
  document.getElementById('nav').classList.toggle('open');
}

function filterProjects(type){
  const buttons = document.querySelectorAll('.filters button');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if(type === 'all' || card.dataset.type.includes(type)){
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
