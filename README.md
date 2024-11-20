# Wallet Connect React App

## Overview
This React application integrates a Wallet Connect button using the Thirdweb SDK. Follow the instructions below to set it up locally.

## Prerequisites
- **Node.js** (v14+)
- **Yarn** installed globally
- **React** basic knowledge

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Th3Un1qu3M4n/EmpeerDen-Wallet-Connect.git
cd wallet-connect-app
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Install Thirdweb SDK
Install the packages
```bash
npm i @thirdweb-dev/react @thirdweb-dev/sdk ethers@^5
```
Install the vite plugins
```bash
yarn add @vitejs/plugin-react vite-plugin-node-polyfills -D
```
In the **`vite.config.js file`**, add the following configuration:
```javascript
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
});
s
```

### 4. Wrap the ThirdWeb Provider

#### **`src/main.tsx`**
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThirdwebProvider } from '@thirdweb-dev/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThirdwebProvider activeChain="ethereum">
      <App />
    </ThirdwebProvider>
  </StrictMode>,
)
```

#### **`src/App.tsx`**
```javascript
import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const App = () => {

  const walletAddress = useAddress() // Hook to get the address
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <ConnectWallet
        theme={darkMode ? "dark" : "light"} // adjust color based on theme
      />
      <h1 className="text-4xl font-bold mb-6">EmpeerDen Blockchain Webinar 02</h1>
    </div>
  );
};

export default App;
```
### 4. Start the Development Server
```bash
yarn run dev
```
Open http://localhost:5173 in your browser


### More Details
[Getting Started with ThirdWeb React SDK](https://portal.thirdweb.com/react/v4/getting-started)