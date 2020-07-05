const popupList = document.querySelector('.slider-wrapper');
const title = document.querySelector('.popup-name');
const popup = document.querySelector('.popup-wrapper');

popupList.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);


function openPopup(e) {
    e.preventDefault();
    if (e.target.nodeName != 'A') return;

    title.textContent = e.target.dataset.name;
    popup.style.display = 'block';
}

function closePopup(e) {
    if(e.target.dataset.pupap != 'close') return;

    title.textContent = "";
    popup.style.display = 'none';
}