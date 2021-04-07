const toggle_btn = document.querySelector('input');

toggle_btn.addEventListener("click", () =>{
    localStorage.getItem("theme") != 'dark' ? setTheme("dark") : setTheme("light")
})

const setTheme = (theme) => {
    localStorage.setItem('theme', theme); 
    document.body.setAttribute("data-theme", localStorage.getItem("theme"));
    localStorage.getItem("theme") != 'dark' ? toggle_btn.classList.add("checked") : toggle_btn.classList.remove("checked")
}

const current_theme = localStorage.getItem("theme");
current_theme && setTheme(current_theme);