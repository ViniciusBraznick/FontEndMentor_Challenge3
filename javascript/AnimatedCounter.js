const counters = document.querySelectorAll('h3');
const speed = 52;

counters.forEach(item => {
    const updateCounter = () => {
        const limit = +item.getAttribute("data-target");
        let counter = +item.innerText

        const inc = limit / speed;

        if ( counter < limit ) {
            item.innerText = parseInt(counter + inc)
            setTimeout( updateCounter , 1);
        } else{
            item.innerText = limit

            if (limit > 10000) item.innerText = limit.toString().slice(0, 2) + "K";
        }
    }

    updateCounter()
})