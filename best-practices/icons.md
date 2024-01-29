## Иконки

Внутри проекта используются иконки из библиотеки [Tabler Icons](https://tabler-icons.io/)

Для удобства был создан компонент IconBase, который устанавливает дефолтные значения для иконок.

<p style="color:red">Плохо</p>

### `components/Example.tsx`

```js
import React from "react";
import { IconHome } from "@tabler/icons-react";

export const Example: FC = () => {
  return <IconHome size="1rem" />;
};
```

<p style="color:green">Хорошо</p>

### `components/Example.tsx`

```js
import React from "react";
import { IconHome } from "@tabler/icons-react";

import { IconBase } from "components/Icon";

export const Example: FC = () => {
  return <IconBase Icon={IconHome} />;
};
```

Таким образом мы не путаемся в дефолтных пропах иконок. Если нужно использовать кастомные значения, их можно дописать к IconBase:

<p style="color:green">Хорошо</p>

### `components/Example.tsx`

```js
import React from "react";
import { IconHome } from "@tabler/icons-react";

import { IconBase } from "components/Icon";

export const Example: FC = () => {
  return <IconBase Icon={IconHome} size="4rem" />;
};
```
