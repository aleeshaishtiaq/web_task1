# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





 Overview

This project is built using React with a structured component-based architecture, dynamic routing, API integration, and Firebase Firestore connectivity. After installing Node.js, the project can be initialized using:

npx create-react-app project-name


Required dependencies are installed using:

npm install


The development server runs with:

npm start


which launches the application at:

http://localhost:3000/


All source code is placed inside the src/ folder, while static files such as images are stored in the public/ directory. The application follows a clean folder structure containing separate components, pages, styles, and data files—making the project easy to scale and maintain.

 Project Structure
src/
 ├── components/
 ├── pages/
 ├── data/
 ├── styles/
 ├── App.js
 └── index.js
public/
 ├── images/
 └── index.html

 Routing & Pages

The project uses React Router to connect multiple pages without page reloads.

Home Page

Includes:

Hero Section

About Section

Header

Footer

Trends Page

Displays trending fashion items using reusable components with a consistent layout (Header & Footer).

Gallery Page

Shows image-based content arranged in a clean, responsive structure.

Navigation

The header contains links to all pages, allowing seamless transitions across routes.

 Interactive Page — Features

The Interactive Page is the most advanced part of the project, including:

Embedded YouTube Video

Displayed inside a responsive wrapper.

 Dynamic Dress Collection

Data loaded from a local JSON file

Images served from public/images

Fully dynamic rendering

Clean card-based layout

 Search Functionality

Users can instantly filter dresses through a live search bar.

 Favorites System (localStorage)

Users can save favorite items

Data persists even after page reload

Demonstrates React state + localStorage integration

 Firebase Firestore Integration (Appointment Form)

The project includes a functional appointment booking form connected to Firebase.

Setup:
npm install firebase

Features:

Sends user details (name, email/WhatsApp, message) to Firestore

Includes:

Form validation

Loading indicator

Success & error messages

Demonstrates React ↔ Firebase real-time database communication

Public API Integration

A free public API from JSONPlaceholder is used as required:

https://jsonplaceholder.typicode.com/posts?_limit=5


The page:

Fetches live posts using useEffect

Displays loading states

Renders real API content (title + body)

This demonstrates asynchronous API calls and real-time UI updates.

 Production Build

To generate an optimized build for deployment:

npm run build


This creates a production-ready version inside the build/ folder.

<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/6fac6b01-7170-43a0-a9c1-194eac1cb21b" />
<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/b4047d41-e011-464d-93fa-89eeaad2d372" />
<img width="975" height="550" alt="image" src="https://github.com/user-attachments/assets/34c49a95-a43d-41d9-a23c-1d578f71ebb3" />
<img width="975" height="549" alt="image" src="https://github.com/user-attachments/assets/c7686c83-6033-4bf7-bea4-c8ca8a6cd74f" />
<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/ee5606ec-d5aa-41c9-8774-397f979282c9" />
<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/576edbcf-9774-4267-8329-cd374be32d19" />
<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/9366fabe-0f6c-4d08-b778-34874be72578" />
<img width="975" height="549" alt="image" src="https://github.com/user-attachments/assets/611bb757-a310-4dfb-b9a5-2a9c03231347" />
<img width="975" height="549" alt="image" src="https://github.com/user-attachments/assets/03a6edb0-4ffb-4729-b030-1d22bf45af31" />









