import React, { memo } from 'react';

function Child(props) {
  console.log('re render');
  return <div>{props.like}</div>;
}

export default memo(Child);
