import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';

const arrContent = [
  { content: 'react.js' },
  { content: 'vue.js' },
  { content: 'angular' },
  { content: 'jquery' },
];
export default function DemoUseTrail() {
  const [toggle, setToggle] = useState(true);
  const animatedProp = useTrail(arrContent.length, {
    opacity: toggle ? 1 : 0,
    height: toggle ? 80 : 0,
    from: { opacity: 0, height: 0 },
    config: { duration: 1000 },
  });
  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>setState</button>
      {animatedProp.map((prop, index) => (
        <animated.h1 style={prop}>{arrContent[index].content}</animated.h1>
  
      ))}
    </div>
  );
}
