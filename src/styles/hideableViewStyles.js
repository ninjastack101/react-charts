import { css } from 'styled-components';

export const hideableViewStyles = css`
  right: 9999px;
  bottom: 9999px;
  position: ${({ hidden }) => hidden ? 'absolute' : 'initial'};
`;

export default hideableViewStyles;
