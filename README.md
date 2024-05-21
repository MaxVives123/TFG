## 3D Historical Visualizations with React and Cesium

## Overview

This project leverages modern web technologies to create interactive 3D visualizations of historical models. Using React for the frontend framework, Cesium for 3D geospatial data visualization, CesiumJS, and CesiumION for managing 3D assets, this project brings historical sites to life. The 3D models are sourced from the EHEM project (https://ehemproject.eu), and annotations on the photos are created via Annotorious, contributed by the University of Barcelona History of Art teachers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/3d-historical-visualizations.git
   cd 3d-historical-visualizations
   ```

2. **Install dependencies:**

   Using npm:

   ```sh
   npm install
   ```

   Or using yarn:

   ```sh
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your CesiumION access token:

   ```sh
   REACT_APP_CESIUM_ION_TOKEN=your_cesium_ion_access_token
   ```

4. **Start the development server:**

   Using npm:

   ```sh
   npm start
   ```

   Or using yarn:

   ```sh
   yarn start
   ```

   Open your browser and navigate to `http://localhost:3000`.

## Usage

Upon running the development server, you will see the 3D visualizations of historical models rendered on the screen. You can interact with the models using standard mouse or touch controls to zoom, pan, and rotate.

### Features

- **3D Model Viewing:** View detailed 3D models of historical sites.
- **Photo Annotations:** View annotated photos contributed by the University of Barcelona History of Art teachers.
- **Interactive Interface:** Navigate through models with intuitive controls.

## Project Structure

```sh
3d-historical-visualizations/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CesiumViewer.jsx
│   │   ├── AnnotationViewer.jsx
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

- **public/**: Static files including the main HTML file.
- **src/**: Source code for the React application.
  - **assets/**: Static assets such as images and model files.
  - **components/**: Reusable React components.
  - **App.js**: Main application component.
  - **index.js**: Entry point for the React application.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

Please make sure to update tests as appropriate and adhere to the coding standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- **EHEM Project**: For providing the 3D models. [EHEM Project](https://ehemproject.eu)
- **Cesium**: For the 3D geospatial visualization platform. [Cesium](https://cesium.com)
- **Annotorious**: For the annotation tool. [Annotorious](https://annotorious.com)
- **University of Barcelona History of Art Teachers**: For creating the photo annotations.

## Contact

For any inquiries, please contact [your-email@example.com].

---

We hope this project helps you in visualizing historical sites in a new and interactive way! Happy exploring!
