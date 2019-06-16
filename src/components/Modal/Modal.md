### Standard

```jsx
import { getTitle, getParagraph } from 'demo/data'
import { Button } from '../Button'
const heading = getTitle()
const body = getParagraph()
initialState = { open: false }
const handleClose = () => {
  setState({ open: false })
}
;<div>
  <Button onClick={() => setState({ open: true })}>Open modal</Button>
  <div
    style={{
      display: state.open ? 'flex' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Modal
      id="modal-1"
      open={state.open}
      style={{ backgroundColor: '#fff', padding: '1rem', maxWidth: '35rem' }}
      onClose={handleClose}
    >
      {headingProps => (
        <div>
          <h3 {...headingProps}>{heading}</h3>
          <p>{body}</p>
          <Button onClick={handleClose} aria-label="Close">
            ×
          </Button>
        </div>
      )}
    </Modal>
  </div>
</div>
```

### Alert Dialog

```jsx
import { getTitle, getParagraph } from 'demo/data'
import { Button } from '../Button'
const heading = getTitle()
const body = getParagraph()
initialState = { open: false }
const handleClose = () => {
  setState({ open: false })
}
;<div>
  <Button onClick={() => setState({ open: true })}>Open modal</Button>
  <div
    style={{
      display: state.open ? 'flex' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Modal
      id="modal-1"
      open={state.open}
      style={{ backgroundColor: '#fff', padding: '1rem', maxWidth: '35rem' }}
      onClose={handleClose}
      alert
    >
      {headingProps => (
        <div>
          <h3 {...headingProps}>{heading}</h3>
          <p>{body}</p>
          <Button onClick={handleClose}>Decline</Button>
          <Button onClick={handleClose}>Accept</Button>
        </div>
      )}
    </Modal>
  </div>
</div>
```
