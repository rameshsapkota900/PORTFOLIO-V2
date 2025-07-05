import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  // Ensure the icon path is correct by prepending the public directory path
  const iconPath = `/${TechStackIcon}`;

  return (
    <div className="group p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-2 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <img
          src={iconPath}
          alt={`${Language} icon`}
          className="relative h-12 w-12 md:h-14 md:w-14 transform transition-transform duration-300"
          onError={(e) => {
            console.error(`Failed to load icon: ${iconPath}`);
            e.target.src = '/vite.svg'; // Fallback to Vite icon if the image fails to load
          }}
        />
      </div>
      <span className="text-slate-300 font-semibold text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300 text-center">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;