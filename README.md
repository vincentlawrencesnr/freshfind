# FreshFind

A modern React-based local market discovery platform designed to help users discover fresh-produce markets, explore available produce, check market opening status, find nearby markets, and get directions.

## Live Demo

https://freshfind-alpha.vercel.app

## GitHub Repository

https://github.com/vincentlawrencesnr/freshfind

## About the Project

FreshFind is a frontend web application built around the idea of making local fresh-produce markets easier to discover and explore.

Users can browse local markets, filter markets by area, opening day, and available produce, check whether a market is currently open, use browser geolocation to find markets based on distance, and open individual markets in Google Maps.

The project was built with a focus on responsive design, reusable React components, accessibility, client-side routing, and practical browser APIs.

## Features

* Responsive navigation with mobile menu
* Hero section and quick market discovery
* Featured markets
* Seasonal produce picks
* Market directory
* Market filtering by:

  * Area
  * Opening day
  * Produce
* Market sorting by name and area
* Real-time market opening status
* Real-time clock
* Browser geolocation
* Distance calculation from the user's location
* Google Maps directions
* Individual market detail pages
* Produce guide
* Contact page
* About page
* Chatbot
* Cross-page chatbot launcher
* Visitor counter
* Dummy login and signup
* Bookmarks
* Responsive footer
* Custom FreshFind favicon
* Accessible navigation and interactive controls

## Technologies Used

* React
* JavaScript
* HTML5
* CSS3
* React Router
* Bootstrap Icons
* Vite
* Browser Geolocation API
* Local Storage
* Google Maps links
* JSON-based local data

## Project Structure

```text
src/
├── components/
├── data/
├── pages/
├── utils/
├── App.jsx
├── main.jsx
└── ...

public/
├── images/
└── favicon.svg
```

## Market Data

Market information is currently stored locally in JSON data.

Each market contains information such as:

* Market name
* Area
* Address
* Description
* Image
* Coordinates
* Opening schedule
* Available produce

This structure allows the application to calculate market status, distance, filtering, sorting, and map links from the same data source.

## Geolocation

FreshFind uses the browser's Geolocation API to request the user's current position.

When permission is granted, the application calculates the distance between the user and each market and displays the distance in the market directory.

Location access is optional. Users can continue browsing the market directory without granting location permission.

## Market Status

Market opening status is calculated from the market's configured weekly schedule and the current browser date and time.

Markets can display statuses such as:

* Open now
* Closed
* Opening soon
* Closed today

## Google Maps

Each market contains latitude and longitude coordinates.

FreshFind uses these coordinates to generate Google Maps links, allowing users to open a market location directly in Google Maps.

## Authentication

FreshFind currently uses a dummy client-side authentication flow for demonstration purposes.

Login information is stored in the browser's local storage and is not connected to a production authentication service or database.

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
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

Open the local development URL provided by Vite.

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Future Improvements

Possible future improvements include:

* Real backend API
* Real user authentication
* Database-backed market data
* Market owner accounts
* Admin dashboard
* User reviews and ratings
* Real market submissions
* Push notifications
* Advanced map integration
* Production chatbot integration
* Real visitor analytics

## Project Purpose

FreshFind was developed as a practical frontend application to demonstrate modern React development, component-based architecture, responsive UI design, browser APIs, client-side routing, local data handling, and user-focused functionality.

## Author

**Vincent Eke**

Software Engineer

---

Built with React and a focus on creating practical, accessible, and user-friendly web experiences.
