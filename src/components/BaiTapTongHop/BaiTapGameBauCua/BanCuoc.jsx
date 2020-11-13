import React from 'react';
import { useSelector } from 'react-redux';
import QuanCuoc from './QuanCuoc';

function BanCuoc() {
  const danhSachCuoc = useSelector(
    (state) => state.baiTapGameBauCua.danhSachCuoc
  );
  const renderQuanCuoc = () => {
    return danhSachCuoc.map((item, index) => (
      <QuanCuoc quanCuoc={item} key={index} />
    ));
  };
  return (
    <div className="mt-3">
      <div className="row">{renderQuanCuoc()}</div>
    </div>
  );
}

export default BanCuoc;
