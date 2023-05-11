const popupButton = document.querySelector('.popup-menu__button');
const popupWrapper = document.querySelector('.popup-menu');
const popupMenu = document.querySelector('.popup-menu__list');

// клик по кнопке
popupButton.addEventListener('click', handleMenu);

// показывает и скрывает поп ап
function handleMenu(){
    popupMenu.classList.toggle('hide-popup');  
}

// ф-ция при кликеs на любое место
document.addEventListener('click', hidePopup);
function hidePopup(el){
    // проверка есть ли внутри того, по чему кликнули поп-ап меню или кнопка 
let targetInside = popupWrapper.contains(el.target);

// если нет, то прячем меню

if(!targetInside) {
    popupMenu.classList.add('hide-popup');
} 
else{
    return;
}
} 