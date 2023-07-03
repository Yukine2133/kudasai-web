import { useParams } from "react-router-dom";
import { useGetAnimeByIdQuery } from "../services/anime";
const AnimeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetAnimeByIdQuery({ id: Number(id) });

  if (isLoading) {
    return <p className="text-center text-xl ">Loading...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 text-xl">
        Error occurred while fetching data.
      </p>
    );
  }

  return (
    <article>
      {data && (
        <>
          <h1>{data.title_english}</h1>
          <img src={data.images.jpg.large_image_url} />
        </>
      )}
    </article>
  );
};

export default AnimeDetails;
