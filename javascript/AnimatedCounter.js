const counters = document.querySelectorAll('h3');
const speed = 52;

counters.forEach(item => {
    const updateCounter = () => {
        const limit = +item.getAttribute("data-target");
        let counter = +item.innerText

        const inc = limit / speed;

        if ( counter < limit ) {
            item.innerText = parseInt(counter + inc)
            console.log(counter + inc);
            setTimeout( updateCounter , 1);
        } else{
            item.innerText = limit

            if (parseInt(limit) == 5200 || parseInt(limit) == 11000) {
                limit == 5200 ? item.innerText = '52K' : item.innerText = '11K' 
            }
        }
    }

    updateCounter()
})