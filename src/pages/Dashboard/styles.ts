import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 760px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Span = styled.span`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 125%;
  color: #195ab4;
  width: 100%;
  background: white;
  box-shadow: rgb(0 0 0 / 16%) 0px 9px 27px;
  padding: 16px;

  position: fixed;
  top: 0;
  left: 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  margin-left: 16px;
`;

export const Ticker = styled.h6`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #4a4a4a;
`;

export const TickerName = styled.h2`
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #4a4a4a;
`;

export const Download = styled.div`
  cursor: pointer;
`;

export const SearchStocks = styled.p`
  background: none;
  border: none;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  color: #195ab4;

  margin-top: 48px;
`;

export const ContainerBox = styled.div`
  margin-top: 16px;
  gap: 16px;

  display: flex;
  flex-direction: column;

  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Box = styled.button`
  background: #ffffff;
  border: none;
  box-shadow: rgb(0 0 0 / 15%) 0px 9px 27px;

  font-family: "Montserrat", sans-serif;
  cursor: pointer;

  padding: 24px;
  border-radius: 8px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  transition: 0.3s;

  max-width: 550px;

  &:hover {
    opacity: 0.5;
  }
`;

export const BoxBrand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  background: black;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 16px;
`;

export const StockName = styled.h3`
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #4a4a4a;
`;

export const BoxIcon = styled.div``;
