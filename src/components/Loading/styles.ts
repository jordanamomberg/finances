import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  position: absolute;
  z-index: 1;

  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(4px) contrast(0.7);
  background-color: rgba(0, 0, 0, 0.1);
`;
