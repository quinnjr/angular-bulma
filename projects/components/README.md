# @angular-bulma/components

![npm](https://img.shields.io/npm/v/@angular-bulma/components)

[![Angular-Bulma Testing](https://github.com/quinnjr/angular-bulma/actions/workflows/testing.yml/badge.svg)](https://github.com/quinnjr/angular-bulma/actions/workflows/testing.yml) [![CodeQL](https://github.com/quinnjr/angular-bulma/actions/workflows/codeql.yml/badge.svg)](https://github.com/quinnjr/angular-bulma/actions/workflows/codeql.yml)

## Current Components

- Breadcrumb
- Dropdown
- Menu
- Message
- Navbar

## Future Components

- Alert
- Carousel
- Modal
- Pagination
- Panel
- Tabs

## Installation Instructions

`@angular-bulma/components` does not come with the `bulma` styles compiled with the project to allow for use of other styles like those defined in [`bulmaswatch`](https://jenil.github.io/bulmaswatch/).

`bulma` must be added to your `styles.scss` file:

```scss
@import '~bulma';
```

Then import the library module or per-component module into your application:

```typescript
import { BulmaComponentModule } from '@angular-bulma/components';

@NgModule({
  imports: [
    ...
    BulmaComponentsModule
    ...
  ],
  ...
})
export class AppModule {  }
```
