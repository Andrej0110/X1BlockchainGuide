const MenuButtons = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-6">
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("x1")}
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === "x1"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-blue-600"
          }`}
        >
          X1
        </button>

        <button
          onClick={() => setActiveTab("main")}
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === "main"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-blue-600"
          }`}
        >
          Main Guide
        </button>

        <button
          onClick={() => setActiveTab("wsl")}
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === "wsl"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-blue-600"
          }`}
        >
          Ubuntu (PuTTY)
        </button>

        <button
          onClick={() => setActiveTab("rent")}
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === "rent"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-blue-600"
          }`}
        >
          Rent Server
        </button>

        <button
          onClick={() => setActiveTab("service")}
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === "service"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-blue-600"
          }`}
        >
          1:1 Coaching
        </button>
      </div>
    </div>
  );
};

export default MenuButtons;
