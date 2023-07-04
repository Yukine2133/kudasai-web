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
    <article className=" container   mt-16  ">
      <section className="px-96 gap-8 flex">
        <img
          className="rounded-2xl w-[350px] h-[525px] object-cover"
          src={data?.images.jpg.large_image_url}
        />
        <figure className="mt-4 ">
          <h1 className="font-semibold text-xl">{data?.title_english}</h1>
          <div className="mt-1 text-purple text-base flex gap-2 ">
            <h5>{data?.year} &#183;</h5>
            <h5>Japan &#183;</h5>
            <h5>{data?.genres.map((genre) => genre.name).join(", ")}</h5>
          </div>
          <p className="mt-4  text-[15px]">{data?.synopsis}</p>
        </figure>
      </section>
      <div className="mt-8 flex justify-center">
        <iframe width="800" height="450" src={data?.trailer.embed_url}></iframe>
      </div>
    </article>
  );
};

export default AnimeDetails;
