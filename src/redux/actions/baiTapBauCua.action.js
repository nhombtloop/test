import { dat_cuoc, xoc_dia, choi_lai } from '../types/type';

export const datCuoc = (ma, tangGiam) => ({
  type: dat_cuoc,
  ma: ma,
  tang: tangGiam,
});

export const xocDia = () => ({
  type: xoc_dia,
});

export const choiLai = () => ({
  type: choi_lai,
});
