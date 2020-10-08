const btnToggle = document.querySelector('input')
btnToggle.addEventListener('click', ()=>{
    if(btnToggle.name == 'light'){
        document.documentElement.setAttribute('theme', 'light')
        btnToggle.name = 'dark'
    } else{
        document.documentElement.setAttribute('theme', 'dark') 
        btnToggle.name = 'light'
    }
})