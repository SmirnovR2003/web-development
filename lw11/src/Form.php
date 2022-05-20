<div class="main__questionnaire">
    <div class="form__error">
        <p class="error__message">Упс.. Произошла ошибка!</p>
	</div>
    <div class="questionnaire-content">
        <img src="images/space.png" alt="Астронафт">
        <form onsubmit="return false;"  method="post" class="form">
            <p class="form__headline">Записаться на курс</p>
            <input class="form__name form-window" type="text" placeholder="Ваше имя"  name="first_name"><br>
            <input class="form__email form-window" type="text" placeholder="Email" name="email"><br>
            <select class="form__activity form-window" name="activity" id="">
                <option>Деятельность</option>
                <option value="Programmer">Программист</option>
                <option value="Designer">Дизайнер</option>
                <option value="Marketer">Маркетолог</option>
            </select>
            <br>
            <div class="form__checkbox_border">
                <input class="form__checkbox" type="checkbox" name="agreement">
                <label class="form__checkbox-text" for="checkbox">Согласен получать информационные материалы о старте курса</label><br> 
            </div>
            <input class="form__button" type="submit" value="Записаться на курс">
        </form>
    </div>
    <img class="questionnaire__close close-form" src="images/Vector.png" alt="Закрыть">
</div>