import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const walletAddress = useAddress()

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={`h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
      <header className="text-center">
      <ConnectWallet
        theme={darkMode ? "dark" : "light"} 
      />
        <h1 className="text-4xl font-bold mt-2 mb-6">
          EmpeerDen Blockchain Webinar 02
        </h1>
        <p className="text-lg mb-8">
          Welcome to the hands-on session on integrating Wallet Connect!
        </p>
        <button
          onClick={toggleDarkMode}
          className="px-6 py-2 mb-6 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
      <section>
        {walletAddress? `Your Address is ${walletAddress}`: `Please connect wallet`}
      </section>
    </div>
  );
};

export default App;
