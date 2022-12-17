window['FLS'] = true

import * as mtrFunctions from './files/functions.js'

mtrFunctions.isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
// mtrFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// mtrFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
mtrFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// mtrFunctions.fullVHfix();

// mtrFunctions.spollers();
mtrFunctions.tabs();

// mtrFunctions.showMore();

// import './libs/popup.js'

// import './libs/parallax-mouse.js'
// import './libs/parallax.js'

//! Работа с формами
import * as mtrForms from './files/forms/forms.js'

/* Работа с полями формы */
// mtrForms.formFieldsInit({ viewPass: false });

/* Oтправка формы */
// mtrForms.formSubmit();

/* Модуль формы "колличество" */
// mtrForms.formQuantity();

/* Модуль звездного рейтинга */
// mtrForms.formRating();

/* Модуль работы с select. */
// import './libs/select.js'

import './libs/fullpage.js'

/* Модуль работы с ползунком */
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
// import "./files/tippy.js";

// Работа со слайдером (Swiper)
import "./files/sliders.js";

// Функции работы скроллом
import * as mtrScroll from './files/scroll/scroll.js'

// Плавная навигация по странице
// mtrScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

/* Динамический адаптив */
// import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

//! Подключаем файлы со своим кодом
import './files/script.js'
