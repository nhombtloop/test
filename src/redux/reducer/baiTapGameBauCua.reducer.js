import { choi_lai, dat_cuoc, xoc_dia } from '../types/type';

const initialState = {
  danhSachCuoc: [
    { ma: 'bau', img: './img/BaiTapGameBauCua/bau.png', point: 0 },
    { ma: 'cua', img: './img/BaiTapGameBauCua/cua.png', point: 0 },
    { ma: 'tom', img: './img/BaiTapGameBauCua/tom.png', point: 0 },
    { ma: 'ca', img: './img/BaiTapGameBauCua/ca.png', point: 0 },
    { ma: 'nai', img: './img/BaiTapGameBauCua/nai.png', point: 0 },
    { ma: 'ga', img: './img/BaiTapGameBauCua/ga.png', point: 0 },
  ],
  diemCuoc: 1000,
  danhSachXucSac: [
    { ma: 'bau', img: './img/BaiTapGameBauCua/bau.png' },
    { ma: 'cua', img: './img/BaiTapGameBauCua/cua.png' },
    { ma: 'tom', img: './img/BaiTapGameBauCua/tom.png' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case dat_cuoc: {
      const newDanhSachCuoc = [...state.danhSachCuoc];
      const indexQuanCuoc = newDanhSachCuoc.findIndex(
        (item) => item.ma === action.ma
      );
      if (indexQuanCuoc !== -1) {
        if (action.tang) {
          if (state.diemCuoc !== 0) {
            newDanhSachCuoc[indexQuanCuoc].point += 100;
            state.diemCuoc -= 100;
          }
        } else {
          if (newDanhSachCuoc[indexQuanCuoc].point > 0) {
            newDanhSachCuoc[indexQuanCuoc].point -= 100;
            state.diemCuoc += 100;
          }
        }
      }
      return { ...state, danhSachCuoc: newDanhSachCuoc };
    }
    case xoc_dia: {
      const newXucXacArr = [];
      for (let i = 0; i < 3; i++) {
        const newXucXac = state.danhSachCuoc[Math.floor(Math.random() * 4)];
        newXucXacArr.push(newXucXac);
      }
      state.danhSachXucSac = newXucXacArr;
      // cong diem
      state.danhSachXucSac.forEach((xucSac) => {
        const index = state.danhSachCuoc.findIndex(
          (quanCuoc) => quanCuoc.ma === xucSac.ma
        );
        if (index !== -1) {
          state.diemCuoc += state.danhSachCuoc[index].point;
        }
      });
      // hoan tien
      state.danhSachCuoc.forEach((xucSac) => {
        const index = state.danhSachXucSac.findIndex(
          (qc) => qc.ma === xucSac.ma
        );
        if (index !== -1) {
          state.diemCuoc += xucSac.point;
        }
      });
      // reset ban cuoc
      state.danhSachCuoc = state.danhSachCuoc.map((xucSac) => ({
        ...xucSac,
        point: 0,
      }));
      return { ...state };
    }
    case choi_lai: {
      state.danhSachCuoc = state.danhSachCuoc.map((xucSac) => ({
        ...xucSac,
        point: 0,
      }));
      state.diemCuoc = 1000;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
