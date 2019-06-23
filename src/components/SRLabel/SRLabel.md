### Standard

Utility component for adding greater context to a block of text for screen reader users.

```jsx
import { SRLabel } from 'spartan-ui'
;<>
  <p>
    Gorgo was a Queen of Sparta.{' '}
    <SRLabel
      as="a"
      href="https://en.wikipedia.org/wiki/Gorgo,_Queen_of_Sparta"
      target="_blank"
      rel="noopener noreferrer"
      label="Learn more about Gorgo"
    >
      Learn more
    </SRLabel>
    .
  </p>
</>
```
