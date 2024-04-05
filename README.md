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
- **Google Maps Integration 🗺️**: Provides integration with Google Maps to navigate directly to the charge box location for easier access.

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

The project utilizes two APIs to fetch the available charge boxes and their details, as well as additional parameters. The data schema for the charge box information is as follows:

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

The data schema for the additional parameters is as follows:

```json
{
  "chargebox_type": {
    "kino_pro": {
      "icon": "https://i.imgur.com/t61BNVn.png",
      "picture": "https://i.imgur.com/t61BNVn.png",
      "name": "Kino Pro 2x50kw"
    },
    "kino_one": {
      "icon": "https://i.imgur.com/qMp35ge.png",
      "picture": "https://i.imgur.com/qMp35ge.png",
      "name": "Kino One 2x22kw"
    },
    "kino_urban": {
      "icon": "https://i.imgur.com/IZzH5Bl.png",
      "picture": "https://i.imgur.com/IZzH5Bl.png",
      "name": "Kino Urban 2x7kw"
    }
  },
  "translations": {
    "fr": {
      "chargebox.status.free": "Disponible",
      "chargebox.status.in_use": "Occupée",
      "chargebox.status.booked": "Réservée",
      "chargebox.status.offline": "Indisponible",
      "cta.navigate_gmap": "S'y rendre (Google Maps)",
      "cta.booking": "Réserver une session"
    },
    "en": {
      "chargebox.status.free": "Available",
      "chargebox.status.in_use": "Busy",
      "chargebox.status.booked": "Booked",
      "chargebox.status.offline": "Unavailable",
      "cta.navigate_gmap": "Getting there (Google Maps)",
      "cta.booking": "Book a session"
    }
  }
}
```

The API endpoints used in the project are:

- Charge Boxes: https://run.mocky.io/v3/5dee5791-8e27-4736-a745-bcc3a61aaa59
- Parameters: https://run.mocky.io/v3/5a699583-9dc5-46a1-8888-52feb04a3dab

## Architecture

The project follows a component-based architecture using React. The main components and their responsibilities are as follows:

1. `api.tsx`: This component holds the API fetching functions, including error handling.
2. `ChargeBoxList.tsx`: This component uses the API fetching functions to populate the list of charge boxes.
3. `ChargeBoxItem.tsx`: This component represents an individual charge box item in the list and handles the expandable row functionality.
4. `ChargeBoxItemDetails.tsx`: This component displays the detailed information for a single charge box item.
5. `ChargeBoxStatus.tsx`: This component handles the display of the charge box status.
6. `LocationModal.tsx`: This component displays the interactive Leaflet map modal, showcasing the charge box and the user's location.
7. `distanceCalculator.tsx`: This component holds the logic for calculating the distance between the user and the charge box using the geolib library.

The separation of concerns ensures a modular and maintainable codebase. The data comes from the API and is fetched by the `api.tsx` component, which also handles the error handling. The other components use the data fetched by `api.tsx` to populate the list and display the charge box information. The `LocationModal.tsx` component is responsible for the interactive map, while the `distanceCalculator.tsx` component handles the distance calculation logic.

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
