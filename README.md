# FreshFind

FreshFind is a modern React-based local market discovery platform that helps users discover fresh-produce markets, explore available produce, check market opening status, find nearby markets, and get directions.

## Live Demo

https://freshfind-alpha.vercel.app

## GitHub Repository

https://github.com/vincentlawrencesnr/freshfind

---

## About the Project

FreshFind was built to make discovering local fresh-produce markets easier and more convenient.

Users can browse markets, filter and sort the market directory, explore available produce, check whether a market is currently open, use their browser location to calculate distances to markets, and open market locations in Google Maps.

The project was developed with a focus on:

* Reusable React components
* Responsive web design
* Client-side routing
* Accessibility
* Browser APIs
* Local data management
* Practical user interactions
* Clean and maintainable frontend architecture

---

## Features

### Market Discovery

* Hero section with market discovery call-to-action
* Featured markets
* Seasonal produce picks
* Market directory
* Individual market detail pages

### Market Directory

Users can filter markets by:

* Area
* Opening day
* Available produce

Markets can also be sorted by:

* Name
* Area

The directory displays the number of markets matching the current filters.

### Market Status

FreshFind calculates market status from the configured weekly schedule and the current date and time.

The interface can display statuses such as:

* Open now
* Closed
* Opening soon
* Closed today

### Real-Time Clock

FreshFind uses the browser's current date and time to provide time-sensitive market information.

### Geolocation

Users can optionally allow browser location access.

When permission is granted, FreshFind:

1. Gets the user's current coordinates.
2. Compares them with each market's coordinates.
3. Calculates the distance to each market.
4. Displays the distance in the market directory.
5. Sorts the results by distance.

Location access is optional, and users can continue using the application without granting permission.

### Google Maps

Each market contains latitude and longitude coordinates.

FreshFind uses these coordinates to generate Google Maps links so users can open a market location directly in Google Maps.

### Produce Guide

Users can explore available produce and discover markets associated with different produce items.

### Bookmarks

Users can bookmark markets for easier access later.

Bookmarks are handled on the client side using browser storage.

### Authentication Demo

FreshFind includes a dummy login and signup experience for demonstration purposes.

The authentication system is intentionally client-side and is not connected to a production authentication service or database.

### Chatbot

FreshFind includes a chatbot interface for interacting with the application.

The project also includes a cross-page chatbot launcher so users can access the chatbot from different parts of the application.

### Contact and About Pages

The application includes dedicated pages explaining the project and providing a contact interface.

### Responsive Navigation

The navigation system includes:

* Desktop navigation
* Mobile hamburger menu
* Active route indicators
* Login/logout state
* Market discovery CTA

### Accessibility

The application includes accessibility-focused features such as:

* Semantic HTML
* Descriptive labels
* Accessible form controls
* `aria-label` attributes where appropriate
* Keyboard-focus states
* Meaningful image `alt` text
* Accessible navigation controls

### Scroll Restoration

FreshFind includes a `ScrollToTop` component that resets the page position when users navigate between routes.

### Responsive Footer

The application includes a responsive footer with supporting navigation and project information.

### Custom Favicon

FreshFind includes a custom favicon for browser tabs and bookmarks.

---

## Technologies Used

* React
* JavaScript
* HTML5
* CSS3
* React Router
* Vite
* Bootstrap Icons
* Browser Geolocation API
* Local Storage
* Google Maps links
* JSON-based local data

---

## Project Structure

```text
freshfind/
├── public/
│   ├── images/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

The project follows a component-based React architecture.

Reusable interface elements are organized inside `components`, page-level views are organized inside `pages`, local application data is stored inside `data`, and reusable application logic is placed inside `utils`.

---

## Market Data

Market information is currently stored locally in JSON.

Each market can contain:

```text
Market name
Area
Address
Description
Image
Coordinates
Opening schedule
Available produce
```

This allows multiple features to use the same data source.

For example, the market coordinates are used for both:

* Distance calculations
* Google Maps links

The schedule is used for market opening-status calculations.

The produce data is used by the market filtering system and produce guide.

---

## Geolocation

FreshFind uses the browser's Geolocation API to request the user's current position.

When permission is granted, the application calculates the distance between the user's location and each market.

The user can then see how far each market is from their current position.

Location permission is not required to use the rest of the application.

---

## Market Status Logic

Market status is calculated from the current browser date and time and the market's weekly schedule.

The application checks the current day and compares the current time with the configured opening and closing times.

This allows the interface to provide time-sensitive market information without requiring a backend service.

---

## Client-Side Storage

FreshFind uses browser `localStorage` for selected client-side features, including demonstration authentication and bookmarks.

This is suitable for demonstrating frontend functionality but should not be considered production-grade authentication or persistent user storage.

---

## Routing

FreshFind uses React Router for client-side navigation.

Routes allow users to navigate between:

* Home
* Markets
* Individual market pages
* Produce Guide
* About
* Contact
* Chatbot
* Authentication
* Bookmarks

The project also includes a Vercel rewrite configuration so direct navigation and page refreshes work correctly with the React Router application.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/vincentlawrencesnr/freshfind.git
```

Move into the project directory:

```bash
cd freshfind
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite.

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

FreshFind is deployed using Vercel.

The production application is available at:

https://freshfind-alpha.vercel.app

The GitHub repository is connected to Vercel so new commits can trigger a new deployment.

---

## Future Improvements

Possible future improvements include:

* Real backend API
* Production authentication
* Database-backed market information
* Market owner accounts
* Admin dashboard
* User reviews and ratings
* Real market submissions
* Advanced map integration
* Production chatbot integration
* Real analytics
* Push notifications

---

## Project Purpose

FreshFind was developed as a practical React application demonstrating modern frontend development concepts.

The project combines component-based architecture, responsive design, client-side routing, browser APIs, local data management, accessibility, and interactive user experiences into a single application.

It was also designed as a practical portfolio project rather than simply a collection of isolated React exercises.

---

## Author

**Vincent Eke**

Software Engineer

FreshFind was built with React and a focus on creating practical, accessible, and user-friendly web experiences.
