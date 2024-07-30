# Next.js App Demo

synergetics can be embedded in server-side rendered Next.js apps using [@synergetics/embed-react](../embed-react):

```javascript
import { Widget } from '@synergetics/embed-react'

export default function MyPage() {
  return <Widget id="<form-id>" style={{ width: '50%' }} className="my-form" />
}
```

## Run demo locally

1. Run `yarn build` in repository root to build all packages
2. Then run `yarn start` here to run this demo in browser: http://localhost:9090

## Run demo in CodeSandbox

See [embed-demo repository](https://github.com/synergetics/embed-demo#react-nextjs) for standalone examples deployable to [CodeSandbox](https://codesandbox.io/).
