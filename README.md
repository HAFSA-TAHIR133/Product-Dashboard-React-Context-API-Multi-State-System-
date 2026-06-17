##  Project Name: Smart Product Dashboard (React Context API Multi-State System)

# Introduction

Smart Product Dashboard is a React-based learning project built to understand and implement Context API for global state management in a real-world style application.

The project demonstrates how multiple contexts can work together in a single application to manage different features such as authentication, theme switching, product management, and activity tracking.

It simulates a mini dashboard where users can view products, add new products, track how many items have been added, and switch between light and dark themes.

This project focuses on building scalable React architecture using separated contexts instead of prop drilling.

## Features
-  User Authentication Context (login-based rendering)
-  Light/Dark Theme Toggle using Theme Context
-  Product Management (Add & Display Products)
-  Activity Counter (Tracks number of products added)
-  Add New Products via form page
-  Global state sharing across multiple pages
-  al-time UI updates using Context API
-  
  ## Key Concepts Learned
- React Context API (multiple contexts)
- useState & global state sharing
- useContext custom hooks
- Component re-render behavior
- State lifting & separation of concerns
- Navigation between pages (React Router integration)
- Form handling in React
  
## Project Structure
src/
│
├── contexts/
│   ├── authContext.jsx
│   ├── themeContext.jsx
│   ├── productContext.jsx
│   ├── activityContext.jsx
    ├── newProductCountContext.jsx
    ├── composeProvider.jsx
│
├── pages/
│   ├── home.jsx
│   ├── anaytics.jsx
    ├── setting.jsx
│
├── components/
│   ├── navbar.jsx
    ├── newProduct.jsx
│
├── App.jsx

## How It Works
- User logs in → AuthContext controls access
- Home page displays product list from ProductContext
- User adds product → updates global product state
- ActivityContext tracks how many products are added
- ThemeContext controls UI appearance across all pages
- NewProduct page allows dynamic product creation
- All updates reflect instantly across the app
  
  ## Learning Outcome

By building this project, I understand:

- How large React apps manage shared state
- Why Context API is used instead of prop drilling
- How multiple contexts interact in a single app
- How real-world dashboards structure global state

## Screenshots
- Home Page

<img width="1920" height="1098" alt="image" src="https://github.com/user-attachments/assets/d830f5aa-59a6-49c6-a045-7bf17b4b3ade" />

- Analytics Page

<img width="1920" height="827" alt="image" src="https://github.com/user-attachments/assets/36a03895-f4f7-4096-99ab-fb0031f992f0" />

-Setting Page

<img width="1920" height="827" alt="image" src="https://github.com/user-attachments/assets/1bb5ea12-63e4-4f5c-8bb1-cd83ac889fd4" />

# After Adding New Product

- Home Page (New Added Item also display)

<img width="1920" height="1394" alt="image" src="https://github.com/user-attachments/assets/613ec59c-7028-4a0f-9be2-3f7de57d0d8b" />

- Analytics Page (Update the cart and product count)

<img width="1920" height="827" alt="image" src="https://github.com/user-attachments/assets/ebaeb388-5702-4d5d-bae9-32996c86f0a7" />


  ## Future Improvements
- Add remove/update product functionality
- Add cart system (like e-commerce apps)
- Persist data using localStorage
- Replace Context API with Redux Toolkit (advanced step)
- Add backend integration (Node.js / Firebase)


# Author
Hafsa Tahir
