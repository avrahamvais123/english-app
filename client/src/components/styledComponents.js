import styled, { css } from 'styled-components';




export const Box = styled.div`
  direction: ${prop => prop.direction};
  position: ${prop => prop.position};
  width: ${prop => prop.w || '100%'};
  height: ${prop => prop.h || '100%'};
  max-width: ${prop => prop.max_w};
  min-width: ${prop => prop.min_w};
  max-height: ${prop => prop.max_h};
  min-height: ${prop => prop.min_h};
  background: ${prop => prop.bg};
  color: ${prop => prop.color};
  border: ${prop => prop.b};
  border-radius: ${prop => prop.radius};
  margin: ${prop => prop.m};
  margin-bottom: ${prop => prop.mb};
  padding: ${prop => prop.p};
  display: ${prop => prop.display};
  gap: ${prop => prop.gap};
  background-color: ${prop => prop.bg};
  color: ${prop => prop.color};
  font-size: ${prop => prop.fs};
  font-weight: ${prop => prop.weight};
  text-align: ${prop => prop.ta || 'center'};
  grid-row: ${prop => prop.$gridRow};
  transition: ${prop => prop.transition || '.7s'};
  cursor: ${prop => prop.cursor};
  z-index: ${prop => prop.z};

  &:hover{
    background-color: ${prop => prop.bg_hover};
  }
  &:active{
    background-color: ${prop => prop.bg_active};
  }
`;

export const BoxStyles = css`
  direction: ${prop => prop.direction};
  position: ${prop => prop.position};
  width: ${prop => prop.w || '100%'};
  height: ${prop => prop.h || '100%'};
  max-width: ${prop => prop.max_w};
  min-width: ${prop => prop.min_w};
  max-height: ${prop => prop.max_h};
  min-height: ${prop => prop.min_h};
  background: ${prop => prop.bg};
  color: ${prop => prop.color};
  border: ${prop => prop.b};
  border-radius: ${prop => prop.radius};
  margin: ${prop => prop.m};
  padding: ${prop => prop.p};
  display: ${prop => prop.display};
  gap: ${prop => prop.gap};
  background-color: ${prop => prop.bg};
  color: ${prop => prop.color};
  font-size: ${prop => prop.fs};
  font-weight: ${prop => prop.weight};
  text-align: ${prop => prop.ta || 'center'};
  grid-row: ${prop => prop.$gridRow};
  transition: ${prop => prop.transition || '.7s'};
  cursor: ${prop => prop.cursor};
  z-index: ${prop => prop.z};

  &:hover{
    background-color: ${prop => prop.bg_hover};
  }
  &:active{
    background-color: ${prop => prop.bg_active};
  }
`;


export const Grid = styled(Box)`
  display: grid;
  grid-template-rows: ${prop => prop.rows};
  grid-template-columns: ${prop => prop.columns};
  place-items: ${prop => (prop.align || prop.justify) ? "" : (prop.place || 'center')};
  align-items: ${prop => prop.align};
  justify-content: ${prop => prop.justify};
`
export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${prop => prop.dir};
  align-items: ${prop => prop.align || 'center'};
  justify-content: ${prop => prop.justify || 'center'};
`
export const Text = styled(Flex)`
  line-height: ${prop => prop.l_heigth};
`;
export const Badge = styled(Flex)`
  position: ${prop => prop.position || 'absolute'};
  top: ${prop => prop.top || '0%'};
  left: ${prop => prop.left || '0%'};
  transform: translate(${prop => prop.translate || '-50%, -50%'});
`;
export const Modal = styled(Box)`
  position: absolute;
  top: ${prop => prop.top || '50%'};
  left: ${prop => prop.left || '50%'};
  transform: translate(-50%, -50%);
  display: ${prop => prop.display || 'flex'};
  flex-direction: ${prop => prop.dir};
  grid-template-rows: ${prop => prop.rows};
  grid-template-columns: ${prop => prop.columns};
  place-items: ${prop => prop.place || 'center'};
  align-items: ${prop => prop.align};
  justify-content: ${prop => prop.justify};
`;

