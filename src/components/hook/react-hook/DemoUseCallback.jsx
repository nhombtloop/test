import React, { useState, useCallback, useMemo } from 'react';
import Child from './Child';

function DemoUseCallback() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(10);
  const handleSetCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleSetLike = () => {
    setLike((prevCount) => prevCount - 1);
  };
  const renderCount = useCallback(() => {
    return <h1> render like in childComponent {like}</h1>;
  }, [like]);
  return (
    <div>
      <button className="btn btn-success" onClick={handleSetCount}>
        +
      </button>
      <button className="btn btn-success" onClick={handleSetLike}>
        -
      </button>
      <p className="text-success">{count}</p>
      <Child renderCount={renderCount} />
    </div>
  );
}

export default DemoUseCallback;
