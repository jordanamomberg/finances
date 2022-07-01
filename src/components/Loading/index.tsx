import Image from "next/image";
import * as S from "./styles";

const Loading = () => {
  return (
    <S.Container>
      <Image
        src="/assets/icons/loader.svg"
        alt="Loading"
        width={90}
        height={90}
      />
    </S.Container>
  );
};

export default Loading;
