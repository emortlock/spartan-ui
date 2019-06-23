### Standard

```jsx
import { Button } from 'spartan-ui'
;<>
  <Button>Button</Button>
</>
```

```jsx
<Button as="a" href="#">
  Custom Element
</Button>
```

```jsx
import { Button } from 'spartan-ui'
initialState = { submitted: false }
;<form
  onSubmit={e => {
    setState({ submitted: true })
    e.preventDefault()
  }}
>
  <Button type="submit">Form Submit</Button>
  <p>
    Form has {!state.submitted && 'not'} been submitted{state.submitted && '!'}
  </p>
</form>
```

### Toggle

```jsx
import { Button } from 'spartan-ui'
initialState = { isActive: false }
;<Button
  active={state.isActive}
  onClick={() => setState({ isActive: !state.isActive })}
>
  {state.isActive ? 'Active' : 'Inactive'}
</Button>
```
