"# PT-W15-coding-assignment" 

### * This app has been created, designed and manipulated with the help of AI. *

# Instructions:
This week you’ll make your app dynamic with state! We’ll implement the ability to create, delete and update the data.

## Task 1: Move your test data into state
Time to make a state variable!
You can leave your test data wherever it is, and create the state with the test data as the initial value.
Maybe something like this:
const [list, setList] = useState(TEST_DATA)
You’ll need to update the rest of the app to use the state instead of the test data. You’ll probably need to pass things down through props for it all to be hooked up properly.

## Task 2: Implement the create ability
Add the ability to create new items in your app. 
For now the new items won’t be dynamic, because we haven’t learned how to build React forms yet. Just have it always add an item with the same data.
Make sure you’re setting the state to a copy of the array with the new item added.

## Task 3: Implement the delete ability
Add the ability to delete items in your app.
Make sure you’re setting the state to a copy of the array with the item deleted.

## Task 4: Implement the update ability
Add the ability to update items in your app.
For now pick something simple to update, like a boolean value. Maybe toggle whether the item is starred, completed, hearted, etc. The user could use a button or buttons to make the update. We can do a full edit when we learn how to build React forms with inputs and things.
Make sure you’re setting the state to a copy of the array with an updated copy of the object.

## Task 5: Test
Make sure your app is working correctly by making changes to your test data. Create items, delete items, change properties on items, and make sure that the app is displaying exactly what the test data says it should.
At this point, your project must meets these new requirements:
A user can create new items (the new items will all have the same data)
A user can delete items
A user can update at least one property on the items
As well as the requirements from last week:
It has at least 3 React components
It’s displaying the test data
It’s using at least 1 prop

The app does NOT need to connect to an API. So when the page is refreshed, all the changes will be lost. That’s not a problem, we’ll learn how to save to a backend soon.


# Recipe Manager App

This is a basic **React CRUD application** that allows users to manage a collection of recipes. It was built as part of a multi-week assignment to practice core React concepts such as components, props, state, and dynamic UI rendering.

---

## Features

View a list of recipes  
Add a new recipe (placeholder content for now)  
Delete an existing recipe  
Toggle a "favorite" status on a recipe

---

## Technologies Used

- React (with Vite for bundling)
- TypeScript
- Bootstrap 5 (for layout and styling)
- JSX / TSX
- Local component state (no backend or API)

---

## Component Structure

src/
├── components/
│ ├── Header.tsx # Displays a styled Bootstrap header
│ ├── RecipeList.tsx # Displays list of RecipeCard components
│ └── RecipeCard.tsx # Displays individual recipe data and buttons
├── data/
│ └── testData.ts # Initial mock recipe data
├── App.tsx # Main app logic and state
├── main.tsx # React DOM rendering


---

## How to Run the App

1. **Install dependencies** (if not already done):

   npm install
Run the development server:
npm run dev
Open your browser to http://localhost:5173

Notes
All recipe changes are stored in local state only. They will reset on page refresh.

Bootstrap is loaded from a CDN via the index.html file.

This version uses placeholder content for new recipes. Forms and full data entry will be added in future assignments.

Assignment Requirements (All check)
 App uses at least 3 React components

 Displays initial test data using props

 A user can:

 Add new recipes (with static data)

 Delete recipes

 Update a recipe (toggle "favorite")

 No red errors or warnings in console

 No backend/API required