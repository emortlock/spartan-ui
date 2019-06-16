### Standard

```jsx
import BreadcrumbItem from './BreadcrumbItem'
;<Breadcrumb>
  <BreadcrumbItem
    as="a"
    href="https://en.wikipedia.org/wiki/Ancient_Greece"
    target="_blank"
    rel="noopener noreferrer"
  >
    Greece
  </BreadcrumbItem>
  <span role="presentation"> / </span>
  <BreadcrumbItem
    as="a"
    href="https://en.wikipedia.org/wiki/Malian_Gulf"
    rel="noopener noreferrer"
  >
    Maliac Gulf
  </BreadcrumbItem>
  <span role="presentation"> / </span>
  <BreadcrumbItem active>Thermopylae</BreadcrumbItem>
</Breadcrumb>
```
