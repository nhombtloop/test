import React, { memo } from 'react';
import { animated, useSpring } from 'react-spring';

function ChildAni(props) {
  console.log('rerender');
  console.log(props.state);
  const propsAniDiv = useSpring({
    width: '100%',
    height: '100%',
    fontSize: '10px',
    from: { width: '100%', height: '100%', fontSize: '10px' },
    to: async (next, cancel) => {
      await next({ width: '100%', height: '100%', fontSize: '50px' });
      await next({ width: '50%', height: '50%', fontSize: '10px' });
      await next({ width: '100%', height: '100%', fontSize: '10px' });
    },
    config: { duration: 2000 },
  });
  return (
    <div>
      <animated.div style={propsAniDiv}>
        <span>animated text</span>
      </animated.div>
    </div>
  );
}

export default memo(ChildAni);
