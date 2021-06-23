function FeaturesList() {
  const listItens = document.querySelectorAll('#features-list ul li');
  const sections = document.querySelectorAll('#feature-section section');
  
  listItens.forEach( (li, index) => {
    li.addEventListener('click', (e) => {
      activeSection(index)
    })
  })
  
  function activeSection(index) {
    sections.forEach( section => section.classList.remove('active') );
  
    sections[index].classList.add('active');
  }
}

export default FeaturesList;