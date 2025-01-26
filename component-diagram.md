# COMPONENT DIAGRAM & STATE AND PROPS

## Component Diagram

```
App                                  // Main wrapper for the entire app
 ├── Navigation                      // Navbar for site-wide navigation
 ├── Routes                           // Manages routing between pages
 │   ├── Homepage (/)                 // Landing page with welcome message
 │   ├── CompanyList (/companies)      // Displays list of companies
 │   │   ├── CompanyCard               // Displays a single company
 │   ├── CompanyDetail (/companies/:handle) // Shows jobs for a specific company
 │   │   ├── JobCard                   // Reused from JobList to show jobs
 │   ├── JobList (/jobs)               // Displays all jobs
 │   │   ├── JobCard                   // Displays a single job
 │   ├── LoginForm (/login)            // User login form
 │   ├── SignupForm (/signup)          // User signup form
 │   ├── Profile (/profile)            // User profile editing
 │   ├── NotFound (*)                  // 404 page for invalid routes
```

## State and Props

- ### App 

    (Main Wrapper)

    **Description:** Top level component for the application; manages authentication state; controls which components are rendered based on authentication; and wraps everything inside `React Router`.

    **State:**

    - currentUser --> Stores logged-in user's information.
    - token --> Stores the authentication token.
    - isLoading --> Tracks if user data is still loading.

    **Props:**  

    (passed down) - Functions for: login, signup, and logout.

- ### Navbar

    (Navigation)

    **Description:** Contains navigation links (Home, Companies, Jobs, Profile, Login/Signup/Logout) and shows different links based on whether the user is logged in.

    ❌ **No state**.

    **Props:**  

    - currentUser --> Determines what is displayed.
    - logout --> Allows user to log out.

- ### Routes

    **Description:** Navigation between different pages.

    ❌ **No state**.

    **Props:** 

    - currentUser --> to pass user data to various pages.
    - login, signup, and logout functions. 

- ### Homepage

    **Description:** 

    - If user is loggedout, shows a welcome message.
    - If user is logged in, shows a personalized greeting.

    ❌ **No state**.

    **Props:**  

    - currentUser --> logged-in or logged-out.

- ### CompanyList

    **Description:** Retrieves and displays the list of all the companies

    **State:**

    - companies --> Stores company list.
    - searchTerm --> Stores company search bar input data.

    ❌ **No props:**  

- ### CompanyCard

    (Reusable)

    **Description:** Used inside *CompanyList*, displays a company name and description.

    ❌ **No state:**

    **Props:**  
    
    - name
    - handle
    - description
    - logoUrl

- ### CompanyDetail

    **Description:** Fetches info on a specific company and shows all jobs offered by the company.

    **State:**

    - company --> Stores company data
    - jobs -- Stores list of jobs at the company.

    **Props:**  
    
    - handle --> from the route parameter.

- ### Joblist

    **Description:** Retrieves and displays the list of all the jobs.

    **State:**

    - jobs --> Stores all job listings.
    - searchTerm --> Stores job search bar input data.

    ❌ **No props:**  

- ### JobCard

    (Reusable)

    **Description:** Shows a single job 

    ❌ **No state:**

    **Props:**  
    - title
    - salary
    - equity
    - companyName
    - hasApplied --> Tracks if the user already applied.

- ### LoginForm

    **Description:** Calls the login function from App.

    **State:**
    - formData --> Stores username and password data.
    - errors --> Stores validation errors.

    **Props:**  
    
    - login function to authenticate user.

- ### SignupForm

    **Description:** Registration form for new users. Calls the signup function from App. 

    **State:**    
    
    - formData --> Stores user data.
    - errors --> Stores validation errors.

    **Props:**  

    - signup function to register user.

- ### Profile

    **Description:** Main function to edit user profile. Calls updateProfile function from App.

    **State:**

    - formData --> Stores user edited and non-edited data.
    - errors --> Stores validation errors.

    **Props:**  

    - currentUser
    - updateProfile function.

- ### NofFound

    **Description:**  Displays a 404 error page when a route doesn't exist.

    ❌ **No state:**

    ❌ **No props:**  

