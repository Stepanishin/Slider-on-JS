const slider = [
    {
        city: 'Rostov-on-Don LCD admiral',
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        imageSrc: './img/image1.jpg',
    },

    {
        city: 'Sochi Thieves',
        apartmentArea: '105 m2',
        repairTime: '4 months',
        imageSrc: './img/image2.jpg',
    },

    {
        city: 'Rostov-on-Don Patriotic',
        apartmentArea: '93 m2',
        repairTime: '3 months',
        imageSrc: './img/image3.jpg',
    },
]

const textCity = document.querySelector('.textCity');
const textApartmentArea = document.querySelector('.textApartmentArea');
const textRepairTime = document.querySelector('.textRepairTime');
const img = document.querySelector('.imageSlider');

const setSlider = (index) => {
    textCity.innerText = slider[index].city
    textApartmentArea.innerText = slider[index].apartmentArea
    textRepairTime.innerText = slider[index].repairTime
    img.style.backgroundImage = `url(${slider[index].imageSrc})`
}

////////////////////////////////////////////////////////////////

const prev = document.querySelector('.Completed_projects_arrow-left')
const next = document.querySelector('.Completed_projects_arrow-right')
let currentIndex = 0

const dot0 = document.querySelector('.dot0');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');

const item0 = document.querySelector('.item0');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');


////////////////////////////////////////////////////////////////


function changeDots() {
    if (currentIndex === 0) {
        dot0.classList.add("currentDot");
        dot1.classList.remove("currentDot");
        dot2.classList.remove("currentDot");
    } else if (currentIndex === 1) {
        dot0.classList.remove("currentDot");
        dot1.classList.add("currentDot");
        dot2.classList.remove("currentDot");
    } else if (currentIndex === 2) {
        dot0.classList.remove("currentDot");
        dot1.classList.remove("currentDot");
        dot2.classList.add("currentDot");
    }
}

function changeItems() {
    if (currentIndex === 0) {
        item0.classList.add("currentItem");
        item1.classList.remove("currentItem");
        item2.classList.remove("currentItem");
    } else if (currentIndex === 1) {
        item0.classList.remove("currentItem");
        item1.classList.add("currentItem");
        item2.classList.remove("currentItem");
    } else if (currentIndex === 2) {
        item0.classList.remove("currentItem");
        item1.classList.remove("currentItem");
        item2.classList.add("currentItem");
    }
}

////////////////////////////////////////////////////////////////

prev.addEventListener('click', () => {
    if (currentIndex == 0) {
        setSlider(2);
        currentIndex = 2;
    } else {
        setSlider(currentIndex - 1);
        currentIndex -= 1;
    }
    changeDots();
    changeItems()
})
next.addEventListener('click', () => {
    if (currentIndex == 2) {
        setSlider(0);
        currentIndex = 0;
    } else {
        setSlider(currentIndex + 1);
        currentIndex += 1;
    }
    changeDots();
    changeItems()
})

////////////////////////////////////////////////////////////////

dot0.addEventListener('click', () => {
    setSlider(0);
    currentIndex = 0;
    changeDots();
    changeItems()
})

dot1.addEventListener('click', () => {
    setSlider(1);
    currentIndex = 1;
    changeDots();
    changeItems()
})

dot2.addEventListener('click', () => {
    setSlider(2);
    currentIndex = 2;
    changeDots();
    changeItems()
})


////////////////////////////////////////////////////////////////

item0.addEventListener('click', () => {
    setSlider(0);
    currentIndex = 0;
    changeDots();
    changeItems()
})

item1.addEventListener('click', () => {
    setSlider(1);
    currentIndex = 1;
    changeDots();
    changeItems()
})

item2.addEventListener('click', () => {
    setSlider(2);
    currentIndex = 2;
    changeDots();
    changeItems()
})