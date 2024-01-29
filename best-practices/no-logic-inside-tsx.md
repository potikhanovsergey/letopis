## Лучше не писать логику внутри разметки TSX

<p style="color:red">Плохо</p>

### `Example.tsx`

```js
import React from "react";

export const Example: FC<Props> = (props) => {
  return <Button color={props.error ? "red" : undefined}>Кнопка</Button>;
};
```

<p style="color:green">Хорошо</p>

### `Example.tsx`

```js
import React from "react";

export const Example: FC<Props> = (props) =>
  сonst color = props.error ? "red" : undefined;

  return <Button color={color}>Кнопка</Button>;
};
```
