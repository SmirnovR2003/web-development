const formOnElement = document.querySelectorAll('.open-form'),
    formOffElement = document.querySelectorAll('.close-form'),
    form = document.querySelector('.main__questionnaire'),
    bgform = document.querySelector('.popup');

formOnElement.forEach(function(el) 
    {
        el.addEventListener('click', () => {
            const id = requestAnimationFrame(openPopup);
            cancelAnimationFrame(id);
            return requestAnimationFrame(openPopup);
        })
    });

formOffElement.forEach(function(el) 
{
    el.addEventListener('click', () => {
        const id = requestAnimationFrame(closePopup);
        cancelAnimationFrame(id);
        return requestAnimationFrame(closePopup);
    })
});

document.onkeydown = 
    function (key) {
        if (key.code == "Escape") {
            closePopup();
        }
    };

function openPopup() {
    form.classList.add('popup_form-on');
    bgform.classList.add('popup_bg-on');
    form.classList.remove('popup_form-off');
    bgform.classList.remove('popup_bg-off');
}

function closePopup() {
    form.classList.add('popup_form-off');
    bgform.classList.add('popup_bg-off');
    form.classList.remove('popup_form-on');
    bgform.classList.remove('popup_bg-on');
}