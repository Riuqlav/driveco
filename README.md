

# 🚗⚡️ DriveCo Charge Box Locator 🌍

Welcome to DRIVECO Charge Box Locator, a user-friendly UI list component that seamlessly integrates with users' geolocation to help them find nearby charge boxes for electric vehicles.

Check out the live demo [HERE](https://riuqlav.github.io/driveco/) and experience the DriveCo Charge Box Locator in action!


## Table of Contents

- [Features](#features-)
- [Screenshots](#screenshots-)
- [Demo](#demo-)
- [Technologies Used](#technologies-used-)
- [Getting Started](#getting-started-)
- [Data Schema and API](#data-schema-and-api)
- [Architecture](#architecture)
- [Contributing](#how-to-contribute-)
- [License](#license-)
- [Acknowledgements](#acknowledgements-)
- [Contact](#contact-)

## Features 🌟

- **Geolocation Integration 🌍**: Utilizes the user's geolocation to find nearby charge boxes, providing a personalized experience.
- **Charge Box API Integration 🔌**: Showcases the distance between the user and each available charge box in our database, helping users find the nearest charging options.
- **Detailed Information 📋**: View essential details such as charge box name, distance, and availability status for informed decision-making.
- **Interactive Map Modal 🗺️**: Option to view charge box locations and the user's location on an interactive Leaflet map modal for better visualization.
- **Expandable Rows 🔽**: Expand rows for more detailed information with the downward arrow button, providing easy access to additional details.


## Screenshots 📸

![Screenshot 1](https://github.com/Riuqlav/driveco/blob/main/src/assets/screenshot1.png?raw=true)
![Screenshot 2](https://github.com/Riuqlav/driveco/blob/main/src/assets/screenshot2.png?raw=true)

## DEMO 🌐
Check out the live demo [HERE](https://riuqlav.github.io/driveco/) and experience the DriveCo Charge Box Locator in action!

## Technologies Used 💻

- React
- TypeScript
- Tailwind CSS
- Leaflet
- Bootstrap
- Vite

## Getting Started 🚀

1. **Clone the repository:**

```bash
git clone https://github.com/Riuqlav/driveco.git
```

2. **Install dependencies:**

```bash
cd driveco
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open your browser and navigate to:**

```
http://localhost:5173
```

5. **Explore and enjoy finding nearby charge boxes for your electric vehicle!**

## Data Schema and API

The project utilizes a charge box API to fetch the available charge boxes and their details. The data schema for the charge box information is as follows:

```json
{
  "chargeboxes": [
    {
      "identifier": "ssd:charge-box:646b7dd3-671d-3dc6-a958-b2",
      "name": "Lemoine 10",
      "type": "Kino Urban",
      "location": {
        "latitude": 48.848595,
        "longitude": 2.336816
      },
      "address": "10 Rue Lemoine",
      "city": "Paris",
      "zipcode": "75004",
      "status": "free"
    },
    ...
  ]
}
```

The API endpoint used in the project is: https://run.mocky.io/v3/5dee5791-8e27-4736-a745-bcc3a61aaa59

## Architecture

The project follows a component-based architecture using React. The main components include:

- `BoxList`: Renders the list of charge boxes and handles the loading of additional items.
- `BoxItem`: Represents an individual charge box item in the list, including the expandable row functionality.
- `MapModal`: Displays an interactive Leaflet map modal showcasing the charge box and user's location.
- `distanceCalculator.tsx`: Calculates the distance between the user and the charge box using the geolib library.

## How to Contribute 🤝

Contributions are welcome! Here's how you can contribute to the project:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

Please ensure that your code follows the project's coding standards and includes appropriate tests.

## License 📝

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements 🙏

- Thanks to the team at DRIVECO for providing me with the opportunity to showcase my skills through this project.

## Contact 📧

For any questions, suggestions, or feedback, feel free to reach out to me at [vincentsouzadev@gmail.com](mailto:vincentsouzadev@gmail.com).
