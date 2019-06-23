### Standard

```jsx
import { Select } from 'spartan-ui'
const options = [
  { label: 'Eurysthenes', value: 'Eurysthenes' },
  { label: 'Aegis I', value: 'Aegis' },
  { label: 'Echestratus', value: 'Echestratus' },
  { label: 'Labotas', value: 'Labotas' },
  { label: 'Agesilaus I', value: 'Agesilaus' },
  { label: 'Archelaus', value: 'Archelaus' },
  { label: 'Teleclus', value: 'Teleclus' },
  { label: 'Alcamenes', value: 'Alcamenes' },
  { label: 'Polydorus', value: 'Polydorus' },
  { label: 'Eurycrates', value: 'Eurycrates' },
]
;<>
  <Select name="king" options={options} aria-label="Select king" />
</>
```
