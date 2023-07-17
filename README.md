# Contracts - CLS
Nextjs app that allows to Create List and Show contracts based on templates (categories)

#### How it works
1. Create category to create a contract template, it will define which fields will be available in contract.
2. Create contract based on category.
3. View all contracts on home page.
4. Click 'Details' to get full information about contract.


## First, run the development server, tests
```bash
npm i
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Run unit tests

```
npm run jest
```

#### Run e2e tests
```
npm run cypress
```




## Possible improvements
- Javascript -> Typescript
- Add ability to edit contracts
- Form validation
- Loading 'Skeletons' during fetching data
- Responsive
- Accessibility
- Check if content fits areas, without overlapping
- Extra indication for contracts that expire soon
- Refactor fetching
- Use store management (ex: Redux) to avoid extra fetching
- Add ability to sort contracts on homepage (by expiration date, status, etc.)
- Add more tests
