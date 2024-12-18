# **HR App Development: Final Checklist**

Make sure your app meets all the requirements below. This checklist is the basis for your evaluation, so double-check everything, test your app thoroughly, and deploy it properly.

---

## **General Functionality (30%)**
- [ ] The app shows a list of employee data. (6%)
- [ ] Users can edit employee details and save changes. (6%)
- [ ] Users can add new employees using a form. (6%)
- [ ] Users can promote or demote employees, and the UI updates correctly. (6%)
- [ ] Promotions are shown with a visual indicator. (3%)
- [ ] Buttons for "Promote to Team Lead" and "Demote from Team Lead" toggle properly. (3%)

---

## **Components and Code Quality (20%)**
- [ ] The `EmployeeCard` and `EmployeeList` components are reusable and well-structured. (5%)
- [ ] A reusable `Button` component is used where buttons are needed, with styling based on props. (5%)
- [ ] Code is clean, commented where necessary, and easy to follow. (5%)
- [ ] The file structure is well-organized into clear folders: (5%)
  - `/components`
  - `/hooks`
  - `/pages`
  - `/styles`

---

## **API Integration and Data Handling (20%)**
- [ ] The app fetches employee data dynamically from a backend. (7%)
- [ ] New employees are saved to the backend via POST requests. (7%)
- [ ] Edited employee details are updated and saved with PATCH requests. (6%)

---

## **Styling and User Interface (10%)**
- [ ] CSS Modules are used for styling components to ensure clean, scoped styles. (5%)
- [ ] Global theming uses CSS variables defined in `:root` (e.g., for colors and fonts). (5%)

---

## **Routing and Navigation (10%)**
- [ ] Routes are set up for:
  - `/login` (login page) (2%)
  - `/employees` (employee list) (2%)
  - `/new` (form for adding a new employee) (2%)
  - Invalid routes show an error page (e.g., `/something`). (2%)
- [ ] The navigation bar includes working links to:
  - `Employees` (1%)
  - `Add New` (1%)

---

## **Custom Features and Advanced Concepts (5%)**
- [ ] At least one custom hook is implemented to simplify reusable logic (e.g., API calls or employee status). (3%)
- [ ] Reminders are included: (2%)
  - **Anniversary Reminder**: Highlights milestones (5, 10, 15 years, etc.).
  - **Probation Reminder**: Flags employees with less than 6 months of service.

---

## **Detailed View (5%)**
- [ ] A detailed view is available for each employee:
  - [ ] A "See More" button opens the detailed view. (2%)
  - [ ] Basic details are shown on the card, and full details are shown in the detailed view. (2%)
  - [ ] A "Back to List" button navigates back to the employee list. (1%)

---

## **Deployment (5%)**
- [ ] The app is deployed and accessible via a public URL. (5%)

---

## **Error-Free Functionality (5%)**
- [ ] All pages and routes work without any errors or warnings in the console. (5%)

---

## **Checklist Summary**
This checklist breaks the project into sections, each contributing to the final grade. Ensure that:
- **General Functionality**: 30%
- **Components and Code Quality**: 20%
- **API Integration and Data Handling**: 20%
- **Styling and User Interface**: 10%
- **Routing and Navigation**: 10%
- **Custom Features and Advanced Concepts**: 5%
- **Detailed View**: 5%
- **Deployment**: 5%
- **Error-Free Functionality**: 5%

### **Total: 100%**

Check every requirement, test thoroughly, deploy your app, and ensure everything works as expected.
