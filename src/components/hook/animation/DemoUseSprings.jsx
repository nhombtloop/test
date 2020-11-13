import React from 'react';
import { useSprings, animated } from 'react-spring';

export default function DemoUseSprings() {
  const animatedProps = [
    { opacity: 0.2, color: 'red', num: 10, content: 'react.js' },
    { opacity: 0.4, color: 'green', num: 30, content: 'vue.js' },
    { opacity: 0.7, color: 'blue', num: 50, content: 'angular' },
    { opacity: 0.9, color: 'purple', num: 70, content: 'css' },
    { opacity: 1, color: 'violet', num: 90, content: 'node.js' },
  ];
  const animatedArr = useSprings(
    animatedProps.length - 1,
    animatedProps.map((props) => ({
      opacity: props.opacity,
      color: props.color,
      num: props.num,
      content: props.content,
      from: { opacity: 0, color: 'black', num: 0 },
      config: { duration: 3000 },
    }))
  );
  return (
    <div>
      {animatedArr.map((prop, index) => (
        <div>
          <animated.span key={index} style={prop}>
            {prop.content}
          </animated.span>{' '}
          <animated.span key={index} style={prop}>
            {prop.num}
          </animated.span>
        </div>
      ))}
    </div>
  );
}
