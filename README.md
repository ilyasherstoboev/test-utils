# Практическое повторение примеров из Vue Test Utils

## Описание

Этот репозиторий содержит примеры тестирования с сайта https://test-utils.vuejs.org/.

## Установка

Перед началом работы установите зависимости:

```sh
npm install
```

### Запуск тестов

```sh
npm run test
```

### Структура проекта

```sh
.
├── src/
│   ├── components/ # Каталог с Vue-компонентами
│   │   ├── TheApp.vue
│   │   ├── TheNav.vue
│   │   ├── ...
│   │   ├── __tests__ # Тесты для компонентов
│   │   │   ├── TheApp.spec.ts
│   │   │   ├── TheNav.spec.ts
│   │   │   ├── ...
│   ├── App.vue
├── package.json
├── vitest.config.ts
```
