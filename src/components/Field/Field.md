### Standard

```jsx
import { Alert, Input, Label } from 'spartan-ui'
initialState = { value: '', error: false, success: false }
const handleChange = e => {
  setState({ value: e.target.value })
}
const handleBlur = e => {
  const correct = state.value.toLowerCase() === 'babylon'

  setState({ error: !correct, success: correct })
}
;<>
  <Field name="name" error={state.error} info required>
    {({ ids, inputProps, labelProps }) => (
      <>
        <Label {...labelProps}>Where was Clearchus executed?</Label>
        <p id={ids.info}>Correct capitalisation isn't required.</p>
        <Input {...inputProps} onChange={handleChange} onBlur={handleBlur} />
        <Alert id={ids.error}>
          {state.error && (
            <p>
              <a
                href="https://en.wikipedia.org/wiki/Clearchus_of_Sparta"
                target="_blank"
                rel="noopener noreferrer"
              >
                That is incorrect.
              </a>
            </p>
          )}
        </Alert>
        <Alert>{state.success && <p>Correct!</p>}</Alert>
      </>
    )}
  </Field>
</>
```

### Option List

```jsx
import { InputOption, Label } from 'spartan-ui'
const options = [
  { value: 'shield', label: 'Aspis' },
  { value: 'spear', label: 'Dory' },
  { value: 'sword', label: 'Xiphos' },
  { value: 'knife', label: 'Kopis' },
]
;<Field optionList name="marketing">
  {({ inputProps, labelProps }) => (
    <>
      <Label {...labelProps}>Select your equipment</Label>
      {options.map(option => (
        <Label key={option.value} style={{ display: 'block' }}>
          <InputOption {...inputProps} value={option.value} /> {option.label}
        </Label>
      ))}
    </>
  )}
</Field>
```
