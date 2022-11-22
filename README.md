# extra-workflow
## Install
```sh
npm install --save extra-workflow
# or
yarn add extra-workflow
```

## Usage
```ts
const fetchJSON = new Workflow(function* (url: string) {
  const json = yield* call(
    signal => fetch(url, { signal }).then(res => res.json())
  )

  return json
})

const store = new MemoryDataStore()

const result1 = await workflow.call({ store }, 'http://example.com')
const result2 = await workflow.call({ store }, 'http://example.com')

assert(result1 === result2)
```

## API
```ts
interface IRecord<DataType> {
  type: 'result' | 'error'
  value: DataType
}

interface IDataStore<DataType> {
  get(index: number): Awaitable<IRecord<DataType> | Falsy>
  set(index: number, record: IRecord<DataType>): Awaitable<void>
}
```

### Workflow
```ts
class Workflow<DataType, Args extends DataType[], Return> {
  constructor(fn: (...args: Args) => Generator<Call<DataType>, Return, DataType>)

  call(
    context: {
      store: IDataStore<DataType>
      signal?: AbortSignal
    }
  , ...args: Args
  ): Promise<Return>
}
```

### call
```ts
function call<DataType, Return extends DataType = DataType>(
  fn: (signal?: AbortSignal) => Awaitable<Result>
): Call<DataType, Result>
```

### MemoryDataStore
```ts
class MemoryDataStore<DataType> implements IDataStore<DataType>
```
