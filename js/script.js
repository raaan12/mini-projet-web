const content = document.querySelector(".content");
const slider = document.querySelector(".slider");
const sliderImage = Array.from(document.querySelectorAll(".slider-image"));
const btnChevron = document.querySelectorAll(".btn-chevron");
let i = 0;

let reset = (container, clase) => {
    container.forEach(item => item.classList.remove(clase));
}

let createInfo = text => {
    const sliderInfo = document.createElement("p");
    sliderInfo.className = "slider-info";
    sliderInfo.textContent = text;
    content.appendChild(sliderInfo);
};

let createIndicators = () => {
    const container = document.createElement("div");
    container.className = "indicator";
    content.appendChild(container)
    sliderImage.forEach(image => {
        let indicator = document.createElement("p");
        indicator.textContent = sliderImage.indexOf(image) + 1;
        container.appendChild(indicator);
    })
}

let Image = (index) => {
    const indicators = document.querySelectorAll('.indicator p');
    const sliderInfo = document.querySelector('.slider-info');
    sliderImage[index].classList.add('slider-image-active');
    reset(indicators, 'indicator-active');

    indicators[i].classList.add('indicator-active');
    
    if (content.hasElement(".slider-info")) return sliderInfo.textContent = sliderImage[index].dataset.info;
    createInfo(sliderImage[index].dataset.info);   
}

let setPosition = (index) => {
    let width = sliderImage[index].getBoundingClientRect().width;
    slider.style.transform = `translateX(-${width * index}px)`;
}

let moveImage = () => {
    if (i === sliderImage.length) {
        i = 0; // Si el contador ya llego al ultimo item, lo manda al primer item.
    } else if (i == -1) {
        i = sliderImage.length - 1; // Si llego al primero lo manda hasta el ultimo.
    }
    reset(sliderImage, 'slider-image-active');
    setPosition(i);
    Image(i);
};

btnChevron.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.action == "right") {
            i++;
            return moveImage();
        }
        i--;
        return moveImage();
    })
})

createIndicators();
Image(i);

