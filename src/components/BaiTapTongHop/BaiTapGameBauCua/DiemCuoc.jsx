import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { choiLai } from '../../../redux/actions/baiTapBauCua.action';

function DiemCuoc() {
  const diemCuoc = useSelector((state) => state.baiTapGameBauCua.diemCuoc);
  const dispatch = useDispatch();
  return (
    <div className="text-center" style={{ marginTop: 0 }}>
      <h3 className="display-4 text-success">Game bầu cua Cyberlearn</h3>
      <div className="mt-3">
        <span
          className="text-white p-3"
          style={{
            backgroundColor: 'red',
            borderRadius: '5%',
            fontSize: '25px',
          }}
        >
          Tiền thưởng: <span className="text-warning">{diemCuoc}$</span>
        </span>
      </div>
      <div className="mt-5">
        <span
          className="text-white p-3"
          style={{
            backgroundColor: 'green',
            borderRadius: '5%',
            fontSize: '18px',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(choiLai())}
        >
          Chơi lại
        </span>
      </div>
    </div>
  );
}

export default DiemCuoc;
