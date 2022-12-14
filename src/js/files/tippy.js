// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from './functions.js'
import { mtrModules } from './modules.js'
import tippy from 'tippy.js'

// Подключение cтилей из node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
mtrModules.tippy = tippy('[data-tippy-content]', {})
