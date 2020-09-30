# Bowman's NG Demo
### This project was created over two days.  I did not want to be unfair and take any longer to complete your tasks.

## ISSUES
- I had to use y girlfirends PC as mine was destroyed in the fires.
- The AG-GRID does not support drag and drop with sorting enabled at the same time, so I had to disable drag and drop.  It's very easy to reactivate by simply changing:   rowDrag from false to true in the my-table.component.ts file
- Also, I did not complete writing the selected(checked) rows to local storage due to self inflicted time constraints.
- Pagination was almost working (buttons showing) but because I used the community edition of Ag-Grid, I could not use the Server Side Row Model; which allows for pagination.  I have used it before with Django, it works great.  In fact the AG-Grid will handle 100,000 rows with ease in the Client Side Model; pagination is a breeze.
- I did not complete the favorties page (filtering on just favorites).
- I did not complete your toggle either (again due to time).



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

