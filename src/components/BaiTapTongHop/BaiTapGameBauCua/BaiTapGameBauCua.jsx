import React from 'react';
import './BaiTapGameBauCua.css';
import BanCuoc from './BanCuoc';
import DanhSachXucSac from './DanhSachXucSac';
import DiemCuoc from './DiemCuoc';

function BaiTapGameBauCua() {
  return (
    <div id="BaiTapGameBauCua" className="container-fluid">
      <DiemCuoc />
      <div className="row">
        <div className="col-7">
          <BanCuoc />
        </div>
        <div className="col-5">
          <DanhSachXucSac />
        </div>
      </div>
    </div>
  );
}

export default BaiTapGameBauCua;
