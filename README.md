# Weather App — Project Overview

This repository contains a simple modular weather application that fetches live weather data from a public API and displays it dynamically on the page. The project follows a clean separation between API logic, data processing, and UI rendering.

A live demo is available at:  
**https://matheusesilva.github.io/weather-app/**

## Features

### API Integration
- Functions make requests to a weather API using a user-provided location.
- Raw JSON responses are processed and transformed into a clean, minimal data object containing only the fields required by the UI.
- Includes error handling to ensure invalid or unknown locations do not break the app.

### Data Processing
- Extracts and returns only the necessary values:
  - Location name
  - Temperature
  - Weather description
  - Humidity
  - Wind speed
  - Optional icon information
- Data-processing functions are isolated from UI code to keep the project modular.

### User Input
- A form allows users to:
  - Type any location
  - Submit a request
  - Trigger a fresh API call and data update
- Form submission was initially used for console outputs during development before integrating the UI rendering layer.

### Displaying Weather Information
- Weather data is rendered directly on the webpage through modular DOM-handling code.
- Supports optional weather icons.  
  - Uses `import()` for dynamic icon loading to improve bundling efficiency when using Webpack.

### Styling
- Fully customizable UI styling using CSS.
- Layout and color scheme tailored for clarity and readability.

### Deployment
- Fully deployed using GitHub Pages.
- Accessible at:  
  https://matheusesilva.github.io/weather-app/

## Notes
- Project structured with Webpack bundling, enabling modular architecture and dynamic imports.
- Designed with clear separation between:
  - API fetch functions
  - Data formatter module
  - UI rendering module

## License
MIT License.
