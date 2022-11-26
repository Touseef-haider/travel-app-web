import AuthLayout from "../../layouts/authLayout";
import * as S from "./styled";
import { useQuery } from "react-query";
import apiService from "../../services/apiService";

const Home = () => {
  const { data } = useQuery("getAlbums", () => apiService.getAlbums());
  const { data: stories } = useQuery("getStories", () =>
    apiService.getStories()
  );

  console.log(stories);
  const getImage = (data) => {
    const str = `data:image/png;base64,${btoa(
      String.fromCharCode(...new Uint8Array(data))
    )}`;
    return str;
  };

  // function toBase64(arr) {
  //   //arr = new Uint8Array(arr) if it's an ArrayBuffer
  //   const image = `data:image/png;base64,`;
  //   return (
  //     image +
  //     btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""))
  //   );
  // }
  return (
    <AuthLayout showFooter>
      <S.Home>
        <div className="grid">
          <div className="album-section">
            <h1>Album</h1>
            {data?.map((album) => (
              <div className="album" key={album?.title}>
                <label htmlFor="h1" className="label">
                  title:
                </label>
                <h1>{album?.title}</h1>
                <label htmlFor="p" className="label">
                  description:
                </label>
                <p>{album?.description}</p>
                <label htmlFor="p" className="label">
                  Category Name:
                </label>
                <p>{album?.category}</p>
                {album?.album?.map((el) => (
                  <img
                    width={123}
                    src={getImage(el?.image?.data)}
                    alt="album"
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="story-section">
            <h1>Story</h1>

            {stories?.map(({ story }) => (
              <div className="story" key={story}>
                <label htmlFor="h1" className="label">
                  story:
                </label>
                <p>{story}</p>
              </div>
            ))}
          </div>
        </div>
      </S.Home>
    </AuthLayout>
  );
};

export default Home;
