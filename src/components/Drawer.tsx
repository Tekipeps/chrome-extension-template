import React, { useState } from "react";

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`xt-fixed xt-top-[10%] xt-right-0 xt-w-72 xt-h-96 xt-bg-white xt-shadow-lg xt-transition-transform xt-duration-300 xt-ease-in-out xt-transform ${isOpen ? "xt-translate-x-0" : "xt-translate-x-full"} xt-z-[999999999px]`}
    >
      <button
        onClick={toggleDrawer}
        className="xt-absolute xt--left-8 xt-top-1/2 xt--translate-y-1/2 xt-bg-white xt-p-2 xt-rounded-l-md xt-shadow-md"
      >
        {isOpen ? ">" : "<"}
      </button>
      {isOpen && (
        <div className="xt-p-4">
          <h2 className="xt-text-xl xt-font-bold xt-mb-4">Chrome Extension</h2>
          <p className="xt-text-gray-600">
            This is just a starter template for a Chrome extension. You can
            customize it to suit your needs.
          </p>
        </div>
      )}
    </div>
  );
};

export default Drawer;
