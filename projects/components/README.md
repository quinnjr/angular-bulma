# @angular-bulma/components

## Current Components

- Breadcrumb
- Navbar

## Future Components

- Dropdown
- Menu
- Message
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
