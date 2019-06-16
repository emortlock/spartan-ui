### Standard

```jsx
<Button>Button</Button>
```

```jsx
<Button as="a" href="#">
  Custom Element
</Button>
```

```jsx
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
initialState = { isActive: false }
;<Button
  active={state.isActive}
  onClick={() => setState({ isActive: !state.isActive })}
>
  {state.isActive ? 'Active' : 'Inactive'}
</Button>
```
