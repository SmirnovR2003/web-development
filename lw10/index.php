<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>lw10</title>
    <link href="css/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto+Condensed&display=swap" rel="stylesheet">
    <script src="src/popup.js"></script>
</head>
<body>

    <div class="popup close-form"></div>
	<?php include 'src/Form.php'; ?>
    <header class="header">
        <div class="header__logo">
            <h1 class="header__logo-text">Don`t <span class="logo__pink-color">do</span> it</h1>
        </div>
        <nav class="header__nav">
            <p class="header__text">Что будет на курсе?</p>
            <p class="header__text">Вопросы</p>
            <p class="header__text">Автор</p>
        </nav>
        <button type="button" class="header__button button open-form" >
            <p class="button__text">Записаться на курс</p>
        </button>
    </header>
    <div class="introduction">
        <div class="introduction__info ">
            <div class="introduction__logo">
                Не <span class="logo__pink-color">делай</span> это
            </div>
            <div class="introduction__text">
                Онлайн-курс для творческих людей, о том, как <br>
                управлять своим временем 
            </div>
            <button class="introduction__button button">
                <p class="button__text open-form">Записаться на курс</p>
            </button>
        </div>
        <div>
            <img class="introduction__image" src="images/blog.png" alt="">
        </div>
    </div>
    <div class="description-info">
        <div class="description-info__container">
            <div class="description-info__item">
                <img class="description-info__image" src="images/Time.png" alt="time">
                <p class="description-info__text">
                    Для тех, у кого слишком много<br>           
                    идей и слишком мало времени
                </p>
            </div>
            <div class="description-info__item">
                <img class="description-info__image" src="images/notebook.png" alt="notebook">
                <p class="description-info__text">
                    Метод «списка не дел», который 
                    позволит успевать и реализовывать
                </p>
            </div>
            <div class="description-info__item">
                <img class="description-info__image" src="images/target.png" alt="target">
                <p class="description-info__text">
                    Курс научит творческих людей 
                    сосредотачиваться
                </p>
            </div>
        </div>
    </div>
    <div class="description-deadline">
        <div class="description-deadline__Finances">
            <img src="images/Finances.png" alt="">
        </div>
        <div class="description-deadline__info">
            <div class="description-deadline__title">
                Ты не успеешь
            </div>
            <div class="description-deadline__text">
                Всех творческих людей объединяет одна проблема - отсутствие времени на 
                реализацию идей. Как прибавить суткам часы, рассмотрим в нашем курсе.
            </div>
        </div>
    </div>
    <div class="description-deadline_reverse">
        <div class="description-deadline__Mind-Blowing">
            <img src="images/Mind Blowing.png" alt="">
        </div>
        <div class="description-deadline__info_reverse">
            <div class="description-deadline__title">
                Опять дедлайн
            </div>
            <div class="description-deadline__text">
                В мире, где столько всего интересного, когда же успевать жить?
            </div>
        </div>
    </div>
    <div class="you-can">
        <div class="you-can__logo">
            На курсе ты <span class="logo__pink-color">сможешь</span>
        </div>
        <div>
            <div class="you-can__container">
                <div class="you-can__info">
                    <img class="you-can__image1" src="images/hand1.png" alt="">
                    <div class="you-can__text1">
                        Понять, что нужно делать, а что 
                        делать не стоит.
                    </div>
                </div>
                <div class="you-can__info">
                    <img class="you-can__image2" src="images/hand2.png" alt="">
                    <div class="you-can__text2">
                        Перестать себя искусственно 
                        ограничивать.
                    </div>
                </div>
                <div class="you-can__info">
                    <img class="you-can__image3" src="images/hand3.png" alt="">
                    <div class="you-can__text3">
                        Определить сильные стороны 
                        и начать использовать слабые.
                    </div>
                </div>
            </div>
            <div class="you-can__container">
                <div class="you-can__info">
                    <img class="you-can__image4" src="images/hand4.png" alt="">
                    <div class="you-can__text4">
                        Научиться достигать любой цели 
                        в 3 понятных шага.
                    </div>
                </div>
                <div class="you-can__info">
                    <img class="you-can__image5" src="images/hand5.png" alt="">
                    <div class="you-can__text5">
                        Сотрудничать эффективно 
                        и с правильными людьми.
                    </div>
                </div>
                <div class="you-can__info">
                    <img class="you-can__image6" src="images/hand6.png" alt="">
                    <div class="you-can__text6">                   
                        Оптимизировать общение с 
                        клиентами и проведение совещаний.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
        <img class="footer__logo" src="images/Don`t do it.png" alt="">
    </footer>
</body>
</html>