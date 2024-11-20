# Wallet Connect React App

## Overview
This React application integrates a Wallet Connect button using the Thirdweb SDK. Follow the instructions below to set it up locally.

## Prerequisites
- **Node.js** (v14+)
- **Yarn** installed globally

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
```bash
yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
```

### 4. Add the Wallet Connect Button

#### **`src/components/WalletConnect.tsx`**
```javascript,
import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const WalletConnect = () => {
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const address = useAddress();

  return (
    <div className="flex flex-col items-center justify-center">
      {address ? (
        <div className="text-center">
          <p className="mb-4">Connected Wallet: {address}</p>
          <button
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={disconnectWallet}
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={connectWithMetamask}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
```

#### **`src/App.tsx`**
```javascript
import React from "react";
import WalletConnect from "./components/WalletConnect";
import "./index.css";

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">EmpeerDen Blockchain Webinar 02</h1>
      <WalletConnect />
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