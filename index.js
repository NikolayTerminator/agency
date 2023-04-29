const popupButton = document.querySelector(".popup-menu__button")
const popupWrapper = document.querySelector(".popup-menu")
const popupMenu = document.querySelector(".popup-menu__list")

popupButton.addEventListener("click", handleMenu)

function handleMenu() {
    popupMenu.classList.toggle("hide-popup")
}

document.addEventListener("click", hidePopup)

function hidePopup(el) {
    let torgetInside = popupWrapper.contains(el.target)
    if(!torgetInside) {
        popupMenu.classList.add("hide-popup")
    }
    else {
        return;
    }
}