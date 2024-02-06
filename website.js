function toggleSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

const toggle_btn=document.querySelector('#checkbox')
toggle_btn.addEventListener('change',()=>{
    if(toggle_btn.checked){
        document.body.classList.add('darkmode')
    }else{
        document.body.classList.remove('darkmode')
    }
})
 var head = document.querySelector('.head');
 if (sectionId) {
     head.classList.add('fixed');
 } else {
     head.classList.remove('fixed');
 }