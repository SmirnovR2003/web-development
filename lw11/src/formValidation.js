const popup = document.querySelector('.form'), 
    elementForm = document.querySelector('.questionnaire-content'),
    elementError = document.querySelector('.form__error'),
    elementEmail = document.querySelector('.form__email'), 
    elementName = document.querySelector('.form__name'),
    elementActivity = document.querySelector('.form__activity'),
    elementAgreement = document.querySelector('.form__checkbox'),
    elementAgreementArea = document.querySelector('.form__checkbox_border');

popup.addEventListener('submit', (event) => {
    elementName.classList.remove('input_error');
    elementEmail.classList.remove('input_error');
    elementActivity.classList.remove('input_error');
    let valid = true;

    if (elementName.value.replace(/[а-я, А-Я, a-z, A-Z]/g, '') != '' || elementName.value.length == 0) {
        elementName.classList.add('input_error');
        valid = false;
    }       
            
    if (elementEmail.value.replace(/[^@]/g, '').length != 1 || elementEmail.value.length < 3) {
        elementEmail.classList.add('input_error');
        valid = false;
    }

    if (elementActivity.value == 'Деятельность') {
        elementActivity.classList.add('input_error');
        valid = false;
    }

    if (!(elementAgreement.checked)) {
        elementAgreementArea.classList.add('input_error');   
        valid = false; 
    }

    goFetch();

    async function goFetch () {
        if (valid) {
            const user = {
                "email": elementEmail.value, 
                "firstName": elementName.value,
                "activity": elementActivity.value
            };
        
   
            const response = await fetch('src/AddNewUser.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(user)
            })

            json = await response.json()
            console.log(json);

            if ((response.ok) && (json.status == 200)) {
                popupOff();
            } else {
                elementForm.classList.add('form__hidden');
                elementError.classList.add('form__error-on');
                elementAgreementArea.classList.add('form__hidden');
            }
        }
    };
});

