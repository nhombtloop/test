import React from 'react';
import XucSac from './XucSac';
import { useSelector, useDispatch } from 'react-redux';
import { xocDia } from '../../../redux/actions/baiTapBauCua.action';

function DanhSachXucSac() {
  const danhSachXucSac = useSelector(
    (state) => state.baiTapGameBauCua.danhSachXucSac
  );
  const dispatch = useDispatch();
  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <div
        className="bg-white"
        style={{ width: 400, height: 400, borderRadius: 200, paddingLeft: 30 }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{ marginLeft: 105 }}>
            <XucSac xucSac={danhSachXucSac[0]} />
          </div>
        </div>
        <div className="row" style={{ marginTop: 0 }}>
          <div className="col-4 text-right">
            <XucSac xucSac={danhSachXucSac[1]} />
          </div>
          <div className="col-4 text-right">
            <XucSac xucSac={danhSachXucSac[2]} />
          </div>
        </div>
      </div>

      <img
        onClick={() => dispatch(xocDia())}
        style={{ width: '30%', marginTop: '2rem', cursor: 'pointer' }}
        src="./img/BaiTapGameBauCua/soc.png"
        alt="soc"
      />
    </div>
  );
}

export default DanhSachXucSac;
