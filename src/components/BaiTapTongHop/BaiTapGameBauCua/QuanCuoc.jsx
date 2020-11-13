import React from 'react';
import { useDispatch } from 'react-redux';
import { datCuoc } from '../../../redux/actions/baiTapBauCua.action';
import { useSpring, animated } from 'react-spring';

function QuanCuoc(props) {
  const { quanCuoc } = props;
  const dispatch = useDispatch();
  const [propsAnimIncrease, setIncrease] = useSpring(() => ({
    scale: 1.25,
    from: { scale: 1 },
    reset: true,
  }));
  const [propsAnimDecrease, setDecrease] = useSpring(() => ({
    scale: 1.25,
    from: { scale: 1 },
    reset: true,
  }));
  return (
    <div className="col-4 mt-3">
      <img style={{ width: '85%' }} src={quanCuoc.img} alt="bau" />
      <div
        className="bg-success text-center py-3 mt-3"
        style={{ borderRadius: '5px', width: '85%' }}
      >
        <animated.button
          style={{
            transform: propsAnimIncrease.scale.interpolate(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            setIncrease({ scale: 1 });
            setIncrease({ scale: 1.25 });
            dispatch(datCuoc(quanCuoc.ma, true));
          }}
          className="btn btn-danger mr-2"
        >
          <i className="fa fa-plus"></i>
        </animated.button>
        <span style={{ fontSize: '25px' }}>{quanCuoc.point}</span>
        <animated.button
          style={{
            transform: propsAnimDecrease.scale.interpolate(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            setDecrease({ scale: 1 });
            setDecrease({ scale: 1.25 });
            dispatch(datCuoc(quanCuoc.ma, false));
          }}
          className="btn btn-danger ml-2"
        >
          -
        </animated.button>
      </div>
    </div>
  );
}

export default QuanCuoc;
