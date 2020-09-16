import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 490"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="135" cy="145" r="130" />
      <rect x="0" y="295" rx="6" ry="6" width="280" height="24" />
      <rect x="0" y="335" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="441" rx="6" ry="6" width="90" height="30" />
      <rect x="130" y="435" rx="20" ry="20" width="150" height="44" />
    </ContentLoader>
  )
}

export default LoadingBlock;
