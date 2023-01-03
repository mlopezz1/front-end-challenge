import SkipForwardBase from '$/assets/icons/skip-forward-fill.svg';
import { Button as ButtonBase } from '$/styles/themes/button';
import styled from 'styled-components';

export const Button = styled.button`
  ${ButtonBase}
`;

export const PrevIcon = styled(SkipForwardBase)`
  transform: rotate(-180deg);
`;
