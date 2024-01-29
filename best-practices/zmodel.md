## В проекте используется Zenstack

Все модели создаются через zmodel в папке prisma/zenstack.

Файл prisma/zenstack/schema.zmodel хранит только плагины и импорты всех моделей.

Все остальные модели должны быть описаны в prisma/zenstack/models.

[Ссылка на документацию по Zenstack](https://zenstack.dev/)

<b>npm run db:generate</b> перегенерирует schema.prisma на основе всех подключенных zmodel

Теперь мы можем [валидировать модели](https://zenstack.dev/blog/todo-saas). Об этом нужно всегда думать при создании.
