# @angular-bulma/directives

![npm](https://img.shields.io/npm/v/@angular-bulma/directives)

[![Angular-Bulma Testing Directives](https://github.com/quinnjr/angular-bulma/actions/workflows/testing-directives.yml/badge.svg?branch=main)](https://github.com/quinnjr/angular-bulma/actions/workflows/testing-directives.yml)[![CodeQL](https://github.com/quinnjr/angular-bulma/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/quinnjr/angular-bulma/actions/workflows/codeql.yml)

## Available Directives

### Color Helpers

- `is-{color}` statements
- `has-text-{color}` statements
- `has-background-{color}` statements

### Flexbox

All Bulma flexbox classes are supported.

### Other Helpers

`is-clearfix`, `is-pulled-left`, `is-pulled-right`, `is-overlay`, `is-clipped`, `is-radiusless`, `is-shadowless`, `is-unselectable`, `is-clickable`, `is-relative`, `is-active`

### Spacing

All margin and padding spacing classes are supported.

### Typography

- Sizing
- Responsive sizing
- Alignment
- Responsive alignment
- Text transformations
- Text weight
- Font families

### Visibility

- Show
- Show responsive
- Hide
- `is-invisible`, `is-hidden`, `is-sr-only`

## Installation Instructions

`@angular-bulma/directives` does not come with the `bulma` styles compiled with the project to allow for use of other styles like those defined in [`bulmaswatch`](https://jenil.github.io/bulmaswatch/).

`bulma` must be added to your `styles.scss` file:

```scss
@import '~bulma';
```

Then import the library module or per-component module into your application:

```typescript
import { BulmaDirectivesModule } from '@angular-bulma/directives';

@NgModule({
  imports: [
    ...
    BulmaDirectivesModule
    ...
  ],
  ...
})
export class AppModule {  }
```
