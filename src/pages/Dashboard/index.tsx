import { useEffect, useState } from "react";
import Image from "next/image";
import Plot from "react-plotly.js";

import { toast } from "react-toastify";

import {
  StockProps,
  Result,
  TickerProps,
  newStocksProps,
} from "types/dashboard";
import Loading from "components/Loading";

import { date } from "./date";
import * as S from "./styles";

const Dashboard = () => {
  const [stocks, setStocks] = useState<StockProps>();
  const [loading, setLoading] = useState<boolean>(false);

  const newStocks: newStocksProps[] = [
    {
      ticker: "AAPL",
      name: "Apple",
      brand: "/assets/icons/apple-brands.svg",
    },
    {
      ticker: "GOGL",
      name: "Google",
      brand: "/assets/icons/google-brands.svg",
    },
    {
      ticker: "AMAZ",
      name: "Amazon",
      brand: "/assets/icons/amazon-brands.svg",
    },
    {
      ticker: "TSLA",
      name: "Tesla",
      brand: "/assets/icons/tesla-brands.svg",
    },
  ];

  const TICKERNAME: TickerProps | any = {
    AAPL: "Apple",
    GOGL: "Google",
    AMAZ: "Amazon",
    TSLA: "Tesla",
  };

  const findBrandTicker = newStocks.find(
    (item) => item.ticker === stocks?.ticker && item.brand
  );

  const getStockByTicker = (ticker: string) => {
    setLoading(true);

    fetch(
      `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2022-05-01/2022-06-30?adjusted=true&sort=asc&limit=120&apiKey=${process.env.NEXT_PUBLIC_URL_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          setStocks(data);
        }
        toast(data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "error",
        });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getStockByTicker("AAPL");
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <S.Container>
          <S.Title>
            <S.Span>
              <Image
                src="/assets/images/btg-pactual-logo.svg"
                alt="btg pactual"
                width={90}
                height={35}
              />
              Ações
            </S.Span>
          </S.Title>
          <S.BoxBrand style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex" }}>
              {findBrandTicker && (
                <S.Logo>
                  <Image
                    src={findBrandTicker.brand}
                    alt={stocks?.ticker}
                    width={24}
                    height={24}
                  />
                </S.Logo>
              )}

              <S.ContainerTitle>
                <S.Ticker>{stocks?.ticker}</S.Ticker>
                {stocks && (
                  <S.TickerName>{TICKERNAME[stocks.ticker]}</S.TickerName>
                )}
              </S.ContainerTitle>
            </div>
            <S.Download>
              <Image
                src="/assets/icons/download-solid.svg"
                alt="Download"
                width={24}
                height={24}
              />
            </S.Download>
          </S.BoxBrand>

          <Plot
            data={[
              {
                x: date,
                close: stocks?.results?.map((item: Result) => item.c),
                high: stocks?.results?.map((item: Result) => item.h),
                low: stocks?.results?.map((item: Result) => item.l),
                open: stocks?.results?.map((item: Result) => item.o),

                increasing: { line: { color: "#ff8c46" } },
                decreasing: { line: { color: "gray" } },

                type: "candlestick",
                xaxis: "x",
                yaxis: "y",
              },
            ]}
            layout={{
              dragmode: "zoom",
              showlegend: false,
              xaxis: {
                rangeslider: {
                  visible: false,
                },
                rangeselector: {
                  x: 0,
                  y: 1.4,
                  xanchor: "left",
                  font: { size: 12 },
                  buttons: [
                    {
                      step: "day",
                      stepmode: "backward",
                      count: 1,
                      label: "dia",
                    },
                    {
                      step: "day",
                      stepmode: "backward",
                      count: 7,
                      label: "semana",
                    },
                    {
                      step: "month",
                      stepmode: "backward",
                      count: 1,
                      label: "mês",
                    },
                  ],
                },
              },
              yaxis: {
                autorange: true,
              },
            }}
            config={{ responsive: true }}
          />

          <S.SearchStocks>Melhores</S.SearchStocks>

          <S.ContainerBox>
            {newStocks.map(
              (item) =>
                item.ticker !== stocks?.ticker && (
                  <S.Box
                    key={item.ticker}
                    onClick={() => getStockByTicker(item.ticker)}
                  >
                    <S.BoxBrand>
                      <S.Logo>
                        <Image
                          src={item.brand}
                          alt={item.name}
                          width={24}
                          height={24}
                        />
                      </S.Logo>

                      <S.Wrapper>
                        <S.Ticker>{item.ticker}</S.Ticker>
                        <S.StockName>{item.name}</S.StockName>
                      </S.Wrapper>
                    </S.BoxBrand>

                    <S.BoxIcon>
                      <Image
                        src="/assets/icons/circle-plus-solid.svg"
                        alt="Ver mais"
                        width={18}
                        height={18}
                      />
                    </S.BoxIcon>
                  </S.Box>
                )
            )}
          </S.ContainerBox>
        </S.Container>
      )}
    </>
  );
};

export default Dashboard;
