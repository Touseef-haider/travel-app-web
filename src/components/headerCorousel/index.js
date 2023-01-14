import * as S from "./styled";
import { Carousel } from "react-carousel-minimal";

const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};
const HeaderCourosel = ({ data }) => {
  return (
    <S.Wrapper>
      <div>
        <Carousel
          data={data || []}
          time={2000}
          width="100%"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={false}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={false}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            margin: "20px auto",
          }}
        />
      </div>
    </S.Wrapper>
  );
};

export default HeaderCourosel;
