import { SVG1,SVG2,SVG3 } from "../shared/icons/Tinyiconlogos";
import { useEffect, useState } from "react";


const svgs = [SVG1, SVG2, SVG3];

const getRandomPosition = (max) => Math.floor(Math.random() * max);

const RandomSVGs = ({mousePosition,logoCount}) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newPositions = Array.from({ length: logoCount ? logoCount : 20 }, () => ({
        top: getRandomPosition(window.innerHeight - 100),
        left: getRandomPosition(window.innerWidth - 100),
        SVG: svgs[Math.floor(Math.random() * svgs.length)],
      }));
      setPositions(newPositions);
    }
  }, [logoCount]);

  return (
    <div className="logo-icons" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {positions.map((pos, index) => {
        const SVG = pos.SVG;
        return (
            <SVG key={index}  style={{ position: 'absolute', top: `${pos.top}px`, left: `${pos.left}px`,transform: `translate(${mousePosition.x / (index+2)}px, ${mousePosition.y / (index+2)}px)`, }} />
        );
      })}
    </div>
  );
};

export default RandomSVGs;