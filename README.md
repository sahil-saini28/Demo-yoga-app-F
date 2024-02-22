## Yoga Booking App Frontend

This repository contains the frontend code for the Yoga Booking App. The frontend is built using React, Redux, Tailwind CSS, and React Router DOM.

## Getting Started

To get started with the frontend development server, follow these steps:

1. **Clone the repository:**

   `git clone https://github.com/sahil-saini28/Demo-yoga-app.git`

2. **Install dependencies:**

   'npm install`

3. **Start the development server:**

   `npm run dev`

   The development server will start running on port `5173` by default. You can modify the port in the `vite.config.js` file if needed.

## Technologies Used

- React
- Redux
- Tailwind CSS
- React Router DOM
- Vite

## Project Structure

The project structure is as follows:

yoga-booking-app-frontend/
├── public/
│ ├── vite.svg
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Modal.jsx
│ │ ├── Search.jsx
│ │ ├── SessionDetailpage.jsx
│ │ ├── YogasessionCard.jsx
│ │ ├── Footer.jsx
│ │ └── pages/
│ │ ├── Singin.jsx
│ │ ├── Singup.jsx
│ │ └── ...
│ ├── Redux/
│ │ └── store.js
│ ├── Feature/
│ │ ├── Sessionslice.js
│ │ └── ...
│ ├── App.jsx
│ ├── Main.js
│ └── ...
├── package.json
└── vite.config.js

## Usage

Once the development server is running, you can access the application by opening a web browser and navigating to `http://localhost:5173`. The application allows users to view yoga classes, book sessions, and manage their bookings.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
