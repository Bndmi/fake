"use strict";

const FAKE_INDICATOR_SPIED_ON_CLASS_NAME = 'fake_indicator____spied_on';
const ARTICLE_SPIED_ON_CLASS_NAME = 'article____spied_on';

const QUIZ_BUTTON_CLICK = 'quiz-button-click';

document.addEventListener('DOMContentLoaded', function(){
    initializeFakeIndicators()
    initializeFakeQuizzes()
    initializeGames()
});

const initializeFakeIndicators = () => {
    
    const fakeIndicatorHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        e.target.classList.add(FAKE_INDICATOR_SPIED_ON_CLASS_NAME)
    }

    Array.from(document.getElementsByClassName('fake_indicator')).forEach(fakeIndocatorForm => {
        fakeIndocatorForm.addEventListener('submit', fakeIndicatorHandler)
    })

}

const initializeFakeQuizzes = () => {
    
    const fakeQuizHandler = e => {
        e.stopPropagation();
        e.currentTarget.classList.add(ARTICLE_SPIED_ON_CLASS_NAME)
    }

    Array.from(document.getElementsByClassName('fake_quiz__button')).forEach(button => {
        button.addEventListener('click', e => {
            const syntheticSubmitEvent = new Event(QUIZ_BUTTON_CLICK, {bubbles: true});
            e.target.dispatchEvent(syntheticSubmitEvent)
        })
    })

    Array.from(document.getElementsByClassName('article')).forEach(article => {
        article.addEventListener(QUIZ_BUTTON_CLICK, fakeQuizHandler)
    })
}

const initializeGames = () => {

    Array.from(document.getElementsByClassName('game__cover_setting_img')).forEach(cover => {
        cover.addEventListener('click', e => {
            document.getElementById(e.target.dataset.gameid).getElementsByClassName('game__result_cover')[0].style = `background-image: url('${e.target.src}');`
        })
    })

    Array.from(document.getElementsByClassName('game__name_options_element')).forEach(option => {
        option.addEventListener('click', e => {
            document.getElementById(e.target.dataset.gameid).getElementsByClassName('game__result_name')[0].innerHTML = e.target.innerHTML
        })
    })

}