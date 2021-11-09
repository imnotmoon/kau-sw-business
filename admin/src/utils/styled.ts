import styled from '@emotion/styled';

export const COLORS = {
  BORDER: 'rgba(255, 255, 255, 0.28)',
  BACKGROUND: 'rgba(255, 255, 255, 0.18)',
  FOG : 'rgba(255, 255, 255, 0.3)',
  LIGHTBLUE: 'rgba(85, 129, 179, 0.8)',
};

export const WDiv = styled.div`
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  background-color: rgba(225, 225, 225, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export const BDiv = styled.div`
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
