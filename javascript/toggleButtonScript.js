let toggleBtn = document.querySelector('input')

toggleBtn.addEventListener("click", () =>{
    var rootColor = document.documentElement.style;
    if (toggleBtn.value == 0) {
    rootColor.setProperty('--color-bg-body', 'hsl(0, 0%, 100%)',);
    rootColor.setProperty('--color-letters', 'hsl(230, 17%, 14%)');
    rootColor.setProperty('--color-square-bg', 'hsl(225, 100%, 98%)');
    rootColor.setProperty('--color-standardBox', 'hsl(227, 47%, 96%)');
    rootColor.setProperty('--color-hover', 'hsl(217, 10%, 84%)');
    toggleBtn.value = 1
    } else{
    toggleBtn.value = 0
    rootColor.setProperty('--color-bg-body', 'hsl(230, 17%, 14%)');
    rootColor.setProperty('--color-letters', 'hsl(0, 0%, 100%)');
    rootColor.setProperty('--color-square-bg', 'hsl(232, 19%, 15%)');
    rootColor.setProperty('--color-standardBox', 'hsl(228, 28%, 20%)');
    rootColor.setProperty('--color-hover', 'hsl(228, 30%, 25%)');}   
})
