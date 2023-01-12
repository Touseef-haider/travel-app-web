import Carousel from "react-multi-carousel";
import * as S from "./styled";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
};

export default function Corousel({ images, deviceType }) {
  return (
    <S.Corousel>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={1000}
        deviceType={deviceType}
        centerMode={false}
        rewind={true}
        rewindWithAnimation={true}
      >
        {images.map((im) => (
          <>
            <img
              style={{ borderRadius: "50%" }}
              src={im.image}
              alt="img"
              width={100}
              height={100}
            />
            <h5 style={{ marginLeft: "20px" }}>{im.title}</h5>
          </>
        ))}
      </Carousel>
    </S.Corousel>
  );
}
