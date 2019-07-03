## About

- [demo fimanami.info](https://fimanami.info)

- В проекте настроен manifest для PWA

## Установка

- работать в vscode
- установить расширение eslint в vscode
- установить расширение prettier в vscode

> npm ci

## Подключено

- router
- redux
- saga
- redux
- loader
- redux-thunk
- redux-form https://redux-form.com/8.0.4/docs/gettingstarted.md/
- immutable
- connected-react-router - для хранения роутов в redux
- четкая библиотека classNames

## Для разработки

- подключил redux tools для расширения
- настроил es-lint/prettier and precommit

## Нюансы

Подключен фонт Amiri для арабского текста и Roboto для остального. И так как у Amiri нет поддержки кириллицы то этот фонт я подключаю для всего вот так: "Amiri", "Roboto", "Helvetica", "Arial", sans-serif !default;
В результате кирилические символы проигнорируют этот шрифт

## Если вам нужен build в подкаталог домена

Что касаеться роутов то я выложил у себя на сайте в директорию domen.com/ar
и соответсвенно добавил в **history** basename={'/ar'}> а если не в connected-react-router то <BrowserRouter basename={'/ar'}> И index.jsx и **<Redirect to='/'/>** в switcher in App.js
a так же в **package.json** "homepage": "https://domen.com/ar",
- [A React' Material Theme by Creative-Tim](https://demos.creative-tim.com/material-kit-react/) интегрированная в create-react-app (не наоборот), убраны лишние файлы

## Ducks используется как концепция для Redux

Обычно в разных файлах redux всего приложения: **action** отдельно, **reducer** в сторонке отдельно
**action creators** отдельно. И чтоб не дробить так на части используем [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
Ducks позволяет нам:

- Константы, sagas и reducerы храним в одном месте - и получаеться полноценный виджет, который содержит все необходимое
- И появляется возможность поместить такой виджет в отдельную библиотеку и использовать в различных проектах

## Для новичков

Могу предложить пройти [курс от learnjavascript по React](https://coursehunters.net/course/prodvinutyy-kurs-po-react-js) - от части этот проект и настраивался так как выполнял автор курса, но в процессе возникли сложности в настройке основопологающих частей проекта таких как **Store Router** Возникли конфликты версий пакетов (так как курс не самый новый) тем не менее данный курс отлично отображает концептуальные подходы при разработке React приложений

## Что можно удалить

> если хочешь удалить на главной анимацию то удаляй эти пакеты

    - "react-three-fiber": "2.0.1",
    - "three": "0.103.0"
