### Standard

```jsx
import { Button } from '../Button'
const menuItems = [
  'Aphrodite',
  'Apollo',
  'Ares',
  'Artemis',
  'Athena',
  'Demeter',
  'Dionysus',
  'Hephaestus',
  'Hera',
  'Hermes',
  'Hestia',
  'Poseidon',
  'Zeus',
]
;<div style={{ minHeight: '15rem' }}>
  <Dropdown id="dropdown-1" style={{ position: 'relative' }}>
    {({ open, buttonProps, menuProps, menuItemProps }) => (
      <>
        <Button {...buttonProps}>Olympians {open ? '∧' : '∨'}</Button>
        <nav
          {...menuProps}
          style={{
            position: 'absolute',
            display: open ? 'flex' : 'none',
            flexDirection: 'column',
            border: '1px solid #6d6d6d',
            marginTop: '0.5rem',
            padding: '0.5rem',
            width: '10rem',
            maxHeight: '12rem',
            overflow: 'auto',
            bottom: '-0.5rem',
            transform: 'translateY(100%)',
          }}
        >
          {menuItems.map(item => (
            <a
              {...menuItemProps}
              href={`https://en.wikipedia.org/wiki/${item}`}
              key={item}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item}
            </a>
          ))}
        </nav>
      </>
    )}
  </Dropdown>
</div>
```
