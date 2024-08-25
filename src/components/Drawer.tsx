import React, { useState } from "react";

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-[10%] right-0 w-72 h-96 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"} z-[999999999px]`}
    >
      <button
        onClick={toggleDrawer}
        className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white p-2 rounded-l-md shadow-md"
      >
        {isOpen ? ">" : "<"}
      </button>
      {isOpen && (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Chrome Extension</h2>
          <p className="text-gray-600">
            This is just a starter template for a Chrome extension. You can
            customize it to suit your needs.
          </p>
        </div>
      )}
    </div>
  );
};

export default Drawer;
