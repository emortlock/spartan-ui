### Standard

```jsx
import { getTitle } from 'demo/data'
import { Alert } from 'spartan-ui'
const alert = getTitle()
;<>
  <Alert>{alert}</Alert>
</>
```

### Dismissable

```jsx
import { Alert, Button } from 'spartan-ui'
import { getTitle } from 'demo/data'
const alert = getTitle()
initialState = { open: true }
;<>
  <Alert minor style={{ display: state.open ? 'block' : 'none' }}>
    {alert}{' '}
    <Button onClick={() => setState({ open: false })} aria-label="Close">
      ×
    </Button>
  </Alert>
</>
```
