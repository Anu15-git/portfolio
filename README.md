# Anu J Chandran – Frontend Developer Portfolio

This is my personal portfolio website built using React.js, showcasing my skills, experience, and projects as a Frontend Developer.  
The portfolio is designed with a modern UI, smooth navigation, and responsive layout.

---

## About Me

I am a Frontend Developer with hands-on experience in Vue.js, Nuxt.js, and React.js.  
I enjoy building clean, responsive, and user-friendly web interfaces and continuously improving my frontend skills through real-world projects.

---

## Features

- Fixed navigation bar across all pages
- Modern hero section with profile image
- About page with clean two-column layout
- Skills page with visually structured design
- Experience page with professional card layout
- Contact page with working mail integration
- Fully responsive (desktop & mobile friendly)
- Clean and readable code structure

---
##  How It Works

1. The application starts from **`index.js`**, where the React app is mounted to the DOM.
2. The app is wrapped with **`BrowserRouter`** to enable routing.
3. **`App.js`** defines all the routes and renders the Navbar globally.
4. Each page (About, Skills, Experience, Contact, etc.) is implemented as a **separate React component**.
5. When a user clicks a navigation link:
   - The URL changes
   - React Router loads the corresponding component
   - The page updates **without reloading** the browser
6. The Navbar remains fixed at the top for smooth navigation.
7. CSS handles layout, responsiveness, spacing, and hover effects.

---

## Project Structure

src/
├── components/
│ ├── Navbar.js 
│ ├── Header.js 
│ ├── About.js 
│ ├── Skills.js 
│ ├── Experience.js 
│ ├── Projects.js 
│ └── Contact.js 
│
├── App.js 
├── App.css 
├── index.js 
└── index.html 


## Getting Started

### 1. Clone the repository

git clone https://github.com/Anu15-git/portfolio.git

### 2. Install dependencies

npm install


### 3. Run the app

npm start

## Author

Name: Anu J Chandran
GitHub: https://github.com/Anu15-git
LinkedIn: www.linkedin.com/in/anu-chandran-155415209