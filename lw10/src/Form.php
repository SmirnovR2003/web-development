<div class="main__questionnaire">
    <div class="questionnaire-content">
        <img src="images/space.png" alt="Астронафт">
        <form action="src/AddNewUser.php" method="post">
            <p class="form__headline">Записаться на курс</p>
            <input class="form__name form-window" type="text" placeholder="Ваше имя"  name="first_name"><br>
            <input class="form__email form-window" type="email" placeholder="Email" name="email"><br>
            <select class="form__activity form-window" name="activity" id="">
                <option>Деятельность</option>
                <option value="Programmer">Программист</option>
                <option value="Designer">Дизайнер</option>
                <option value="Marketer">Маркетолог</option>
            </select>
            <br>
            <input class="form__checkbox" type="checkbox" name="agreement">
            <label class="form__checkbox-text" for="checkbox">Согласен получать информационные материалы о старте курса</label><br>
            <input class="form__button" type="submit" value="Записаться на курс">
        </form>
    </div>
    <img class="questionnaire__close close-form" src="images/Vector.png" alt="Закрыть">
</div>