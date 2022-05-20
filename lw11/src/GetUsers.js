const button = document.getElementById("btn");
const url = "/src/view_survey.php";

button.addEventListener("click", () => {
    async function doFetch() {
        const response = await fetch(url);

        json = await response.json()

        // формирую html
        const data = document.querySelector('.data');

        if (json.length === 0) {
            const notFound = document.createElement('p');
            notFound.innerHTML = 'Сохранённых пользователей нет';
            notFound.classList.add('text')
            data.appendChild(notFound);
            return
        } 

        for (let i = 0; i < json.length; i++) {

            const div = document.createElement('div');
            data.appendChild(div);
            div.classList.add('data__user');

            const img = document.createElement('img');
            img.src  = '../images/icon.png'
            img.alt = 'icon'
            div.appendChild(img)
            img.classList.add('icon');

            const firstName = document.createElement('p');
            firstName.innerHTML = json[i]["firstName"];
            firstName.classList.add('text')
            div.appendChild(firstName);

            const email = document.createElement('p');
            email.innerHTML = json[i]["email"];
            email.classList.add('text')
            div.appendChild(email);

            const profession = document.createElement('p');
            profession.innerHTML = json[i]["activity"];
            profession.classList.add('text')
            div.appendChild(profession);

            const activity = document.createElement('p');
            activity.innerHTML = json[i]["agreement"];
            activity.classList.add('text')
            div.appendChild(activity);
         }
    }
    doFetch();
})      