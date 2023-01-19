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

export default function Corousel({ data, deviceType }) {
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
        {data?.map((im) => (
          <>
            <div
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid",
              }}
            >
              <img style={{ width: "70%", height: "70%" }} src={im?.image} />
            </div>
            <h5 style={{ marginLeft: "10px" }}>{im?.name}</h5>
          </>
        ))}
      </Carousel>
    </S.Corousel>
  );
}
