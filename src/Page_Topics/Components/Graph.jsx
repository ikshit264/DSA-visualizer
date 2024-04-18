import React, { useEffect, useState } from 'react';

const Graph = ({ length, color }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      style={{ height: `${length*3}px`, backgroundColor: `${color}`, width: `${width* 0.05 }px`, marginTop:`${600 - length}px` }}>
    </div>
  );
};

export default Graph;
