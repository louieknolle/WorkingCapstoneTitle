import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header className="bg-gray-200 text-emerald-600 p-8 m-auto flex flex-row justify-between w-screen">
        <h3 className="text-3xl">Trailpanion</h3>
        <nav className="flex flex-row justify-between text-lg">
          {/* <div className="px-2">Home</div> */}
          <div className="px-2">My Inventory</div>
          <div className="px-2">Packing List</div>
          <div className="flex flex-row">
            <p className="px-2">Sign In</p>
            <p className="px-2">Sign Up</p>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
