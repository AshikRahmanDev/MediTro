document.getElementById('btn-container').addEventListener('click',function(event){
    const allBtn=document.getElementsByClassName('nav-btn');
    for(const btn of allBtn){
        btn.style.color='#1E69CB';
    }
    const btnText=event.target;
    btnText.style.color='tomato'
})