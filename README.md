# Aero Airdrops

Aero Airdrops helps you find top cryptocurrency exchanges and estimate potential airdrop rewards from promising DEX exchanges by calculating points, tokens, and potential USD values.

This project is a React application built with TypeScript and styled with Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your computer:
*   [Node.js](https://nodejs.org/) (version 18.x or newer recommended)
*   [npm](https://www.npmjs.com/) (which is included with Node.js)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### 1. Set Up the Project

First, place all the project files into a new directory on your local machine. The structure should look like this:

```
/aero-airdrops
├── components/
├── data/
├── App.tsx
├── constants.ts
├── index.html
├── index.tsx
├── metadata.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── types.ts
└── vite.config.ts
```

### 2. Install Dependencies

Navigate to the root directory of the project in your terminal and run the following command to install the necessary packages:

```bash
npm install
```

This command reads the `package.json` file and installs all the required libraries (like React, Vite, and TypeScript) into a `node_modules` folder.

### 3. Run the Application

Once the installation is complete, you can start the local development server by running:

```bash
npm run dev
```

Your terminal will display a message indicating that the server is running, usually with a local URL:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your web browser and navigate to the local URL (e.g., **http://localhost:5173**). You should now see the Aero Airdrops application running. The development server supports Hot Module Replacement (HMR), so any changes you make to the source code will be reflected in the browser instantly.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run preview`: Serves the production build locally to preview it.
