
<div class="sign-up">
    <img src="images/space.webp" alt="Астронафт">
    <form action="src/AddNewUserPHP.php" method="post">
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
