import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import ChildAni from './ChildAni';

function DemoReactSpring() {
  const [state, toggle] = useState(true);
  const [num1, setNum] = useState(1);
  const propsAnimateNum = useSpring({
    num: 100,
    color: [0, 178, 238],
    fontSize: 50,
    from: { num: 0, color: [78, 238, 148], fontSize: 10 },
    config: { duration: 2000 },
  });
  const propsAnimateNumber = useSpring({
    x: state ? 10 : 0,
    from: { x: 0 },
    config: { duration: 3000 },
  });
  return (
    <div>
      <h1>{num1}</h1>
      <button className="btn btn-success" onClick={() => toggle(!state)}>
        change state
      </button>
      <button
        className="btn btn-success"
        onClick={() => setNum((prev) => prev + 1)}
      >
        change num
      </button>
      <animated.h1
        style={{
          color: propsAnimateNum.color.interpolate(
            (r, g, b) => `rgb(${r},${g},${b})`
          ),
          fontSize: propsAnimateNum.fontSize,
        }}
      >
        {propsAnimateNum.num}
      </animated.h1>
      <ChildAni state={state} />
    </div>
  );
}

export default DemoReactSpring;
