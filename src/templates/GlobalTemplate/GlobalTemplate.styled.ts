import styled from 'styled-components';
import { FlexColumn } from 'styles/Mixins';

export const StyledContainer = styled.div`
  ${FlexColumn};
  position: relative;
  max-width: 900px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`;