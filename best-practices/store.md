## Zustand store

Для стейт-менеджмента в проекте используется Zustand и вспомогательная библиотека @udecode/zustood

Пример создания стора:

### `store.ts`

```js
import { createStore } from "@udecode/zustood";

interface State {
  count: number;
}

export const store = createStore("global") < State > { count: 0 };
```

Пример использования стора

### `components/Example.tsx`

```js
import React from "react";
import { store } from "./store";

export const Example: FC<Props> = (props) => {
  const counter = store.use.count();

  const increment = useCallback(() => {
    store.set.count(counter + 1);
  }, [counter]);

  return (
    <div>
      <Title>{counter}</Title>
      <Button onClick={increment}>Увеличить</Button>
    </div>
  );
};
```
