import React from 'react';

function ImageBackground({ ...props }) {
  return (
    <div
      className="h-full md:pt-6 pt-4 md:bg-desktop-background bg-mobile-background bg-no-repeat bg-cover font-roboto"
      {...props}
    >
      {props.children}
    </div>
  );
}

export default ImageBackground;
