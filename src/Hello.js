import React, { useState } from 'react'
import Form from './Form'

export default function Hello(props) {

    const [array, setArray] = useState([1,2,3,4,5])

    const addItem = () => {
        setArray([...array, 6])

    }


//     Introduction to React
// 1. Introduction to React
//    - What is React and why use it?
//    - Installation and setup (Node.js, npm, create-react-app)
//    - Understanding the project structure

// 2. JSX and Components
//    - Introduction to JSX
//    - Creating functional components
//    - Props and passing data to components

// 3. State and Lifecycle
//    - Introduction to state and `useState` hook
//    - Handling events
//    - Component lifecycle methods and `useEffect` hook

// 4. Basic Project
//    - Build a simple static website (e.g., a personal portfolio)


// Advanced Concepts
// 5. Advanced Components
//    - Class components vs functional components
//    - Props drilling and state management in nested components

// 6. Forms and User Input
//    - Controlled vs uncontrolled components
//    - Handling form submissions
//    - Form validation

// 7. Component Styling
//    - CSS in React
//    - CSS Modules
//    - Styled-components

// 8. Intermediate Project
//    - Build a dynamic to-do list application with add/edit/delete features


// State Management
// 9. Context API
//    - Context API overview
//    - Creating and using context

// 10. State Management Libraries
//     - Introduction to Redux
//     - Redux Toolkit setup and basics
//     - Connecting Redux to React components

// 11. Asynchronous Actions
//     - Handling async actions in Redux (Thunk or Sagas)
//     - Fetching data from an API

// 12. Advanced Project
//     - Build a blog application with user authentication (login/signup), CRUD operations, and state management


// Routing and Performance
// 13. React Router
//     - Setting up React Router
//     - Navigating between pages
//     - Route parameters and nested routes

// 14. Performance Optimization
//     - Code splitting
//     - React.memo, useMemo, and useCallback hooks
//     - Lazy loading components

// 15. Testing in React
//     - Introduction to testing (Jest, React Testing Library)
//     - Writing unit tests for components
//     - Integration testing

// 16. Complex Project
//     - Build an e-commerce application with routing, state management, and performance optimizations


// Advanced Topics and Best Practices
// 17. Custom Hooks
//     - Creating and using custom hooks

// 18. React and TypeScript
//     - Introduction to TypeScript
//     - Using TypeScript with React

// 19. Deployment and CI/CD
//     - Preparing the application for production
//     - Deploying the application to a platform like Vercel or Netlify
//     - Setting up CI/CD pipelines

// 20. Final Project
//     - Group project where each fresher collaborates to build a full-stack application using React for the front end and a simple backend (Node.js/Express or Firebase)


// Code Review and Best Practices
// 21. Code Review Sessions
//     - Conduct code reviews
//     - Best practices in writing clean and maintainable code
//     - Refactoring code

// 22. Project Presentations
//     - Each group presents their final project
//     - Discuss challenges faced and solutions implemented


  return (
    <>
    <Form name="krishna" />
    <h2>{props.age}</h2>
    <button onClick={addItem}>addItem</button>
    <h1>{array}</h1>
    </>
  )
}
