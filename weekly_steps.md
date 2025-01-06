# Weekly Steps for HR App Development

## Week 1

### Step 1: Initial Setup

- Create a Vite project.
- Connect the project to GitHub.
- Set up the basic layout with fonts, colors, and base CSS.

### Step 2: Organize and Build Components

- Organize the `src` folder:
  - Create `EmployeeCard` and `EmployeeList` components inside a `components` folder.
- Set up essential CSS:
  - Add simple styling for `EmployeeCard` and `EmployeeList`.
- Build and integrate components:
  - Use multiple `EmployeeCard` components inside `EmployeeList` to simulate an employee directory.
  - Import `EmployeeList` into the main `App` component and render it.

### Step 3: Add Props and State

- Add props to `EmployeeCard`:
  - Pass `name`, `role`, `department`, and additional fields (e.g., `startDate` and `location`).
- Add state to `EmployeeCard`:
  - Use state to manage the role, initializing it with the `role` prop.
- Add a role-change button labeled "Promote."

### Step 4: Add Role Change Functionality

- Define a `clickHandler` function:
  - If the role is "Team Leader," change it back to the original role (e.g., "Developer").
  - If the role is not "Team Leader," set it to "Team Leader."
- Connect the `clickHandler` function to the button’s `onClick` event.

### Step 5: Finalize and Push

- Update the README:
  - Include an overview of the app, core features, and a quick usage guide.
- Push the work to GitHub.

## Week 2

### Step 1: Create Employee Data

- Create an array containing data for ten employees.
- Include fields like `name`, `role`, `department`, `startDate`, and `location`.

### Step 2: Display Employees List and Add Login

- Import the employee array into `EmployeesList`.
- Map over the array to display details for each employee.
- Add fake login functionality:
  - Show a "Log In" button and a message by default.
  - Display the employee list after logging in.
  - Toggle button text between "Log In" and "Log Out."

### Step 3: Add Promotion Functionality

- Modify "Team Lead" functionality:
  - Display a star icon (⭐) when an employee is promoted to "Team Lead."
  - Use conditional rendering for the button text:
    - Show "Promote to Team Lead" or "Demote from Team Lead" as needed.

### Step 4: Display Years Worked and Add Reminders

- Calculate and display `yearsWorked` based on `startDate`.
- Add reminders:
  - **Anniversary Reminder:** Display a celebration icon for milestones (5, 10, 15 years, etc.).
  - **Probation Reminder:** Display a notification icon for employees with less than 6 months of service.

## Week 3

### Step 1: Code Cleanup and Styling

- Destructure props for cleaner code.
- Create a reusable `Button` component.
- Use conditional rendering to visually differentiate employees by department.
- Add a custom favicon.
- Add secondary button styling using a `role="secondary"` prop.

### Step 2: Add Edit Functionality

- Add an "Edit" button to the employee card.
- Use conditional rendering to toggle between "Edit" and "Save" buttons.
- Allow editing of `role`, `department`, and `location`.
- Ensure styling updates immediately when editing the department.

### Step 3: Finalize and Push

- Update the README with new changes.
- Clean and comment the code.
- Push the updates to GitHub.

## Week 4

### Step 1: Set Up Routing

- Install `react-router-dom`.
- Create pages: `Root`, `Login`, `ErrorPage`, `List`, and `Form`.
- Set up routes and test them using paths:
  - `/login`
  - `/employees`
  - `/new`
  - `/something` (for `ErrorPage`).

### Step 2: Add Navigation and Form

- Modify the header to include navigation links:
  - "Employees" -> `/employees`
  - "Add New" -> `/new`
- Create a form:
  - Add inputs matching the employee data structure.
  - Use `useState` (or optionally `useRef`) to manage form data.
  - Log form data to the console on submission.

### Step 3: Add Login Functionality

- Create a `Login` component with username and password fields.
- Allow login only with correct credentials.
- Display the `Root` component after successful login.

## Week 5: API Integration

### Step 1: Create a Mock Backend

- Install `json-server`.
- Create a `db.json` file and move the employee data into it.

### Step 2: Fetch and Display Data

- Fetch the employee list dynamically from `http://localhost:3001/persons`.

### Step 3: Add New Employees

- Enable POST requests to add new employees to the list.

### Step 4: Update Employee Data

- Modify the edit functionality to save changes to `db.json`.

### Step 5: Add Detailed View

- Add a "See More" button to navigate to a detailed view page.
- Show basic details on the card and full details on the detailed view page.
- Add a "Back to List" button to return.

## Week 6

### Step 1: Implement Custom Hooks

- Create a `useAxios` custom hook:
  - Handle HTTP requests (`GET`, `POST`, `PATCH`, `DELETE`).
  - Replace direct Axios usage in components with the new hook.
- Create a `useEmployeeStatus` custom hook:
  - Move the logic for managing employee status (e.g., promotion/demotion) into the hook.
  - Update the `EmployeeCard` component to use the new hook.

### Step 2: Improve Styling

- Implement CSS Modules:
  - Convert existing CSS files into scoped CSS Modules for better modularity.
  - Update component imports to use the CSS Module files.
- Use CSS variables:
  - Define global CSS variables in `:root` (e.g., colors, font sizes).
  - Replace hardcoded values in the CSS with variables for consistency and easier theming.

### Step 3: Enhance File Structure

- Refactor the file structure:
  - Organize components, hooks, styles, and pages into clear folders.
  - Ensure each folder contains related files (e.g., CSS Modules for components in the same folder).

### Step 4: Enrich Employee Data

- Update the form and detailed view to handle all the data fields.
- Make design consistent in details page

### Step 5: Final Testing and Documentation

- Test all new changes thoroughly:
  - Check for functionality, styling issues, and performance.
  - Ensure that all features (e.g., API integration, routing, and editing) are working smoothly.
- Update the project README:
  - Document the new custom hooks, CSS Modules, and data enhancements.
- Push the finalized code to GitHub:
  - Verify that the latest version is properly deployed and well-documented.