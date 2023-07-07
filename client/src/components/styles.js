import Color from 'color';


export const colorButton = "red";
export const colorButtonStart = "yellowgreen";

export const lightColor = (color, num) => Color(color).darken(num || 0.2).string();
export const lightColorStart = Color(colorButtonStart).darken(0.2).string();
