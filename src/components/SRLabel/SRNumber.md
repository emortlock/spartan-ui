### Standard

Similar to the `SRLabel`, but instead provides a default `aria-label` when number string as `children` with punctuation to improve how the screen reader will announce the figure. Individual digits will be spoken for things like card numbers rather than as a single figure in the quadrillions.

```jsx
import { SRNumber } from 'spartan-ui'
;<>
  <p>
    Card Number: <SRNumber>4444 3333 2222 1111</SRNumber>
  </p>
  <p>
    Phone Number:{' '}
    <SRNumber as="a" href="tel:+447911123456">
      +44 7911 123456
    </SRNumber>
  </p>
</>
```
