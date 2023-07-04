import { useParams } from "react-router-dom";
import { useGetAnimeByIdQuery } from "../services/anime";
import DetailsReveal from "../utils/DetailsReveal";
import { motion as m } from "framer-motion";

interface AnimeData {
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  title_english: string;
  year: string;
  genres: { name: string }[];
  synopsis: string;
  trailer: {
    embed_url: string;
  };
}

const AnimeDetails = () => {
  const { id } = useParams();
  const { data, isError } = useGetAnimeByIdQuery<AnimeData>({ id: Number(id) });

  if (isError) {
    return (
      <p className="text-center text-red-500 text-xl">
        Error occurred while fetching data.
      </p>
    );
  }

  const anime = data?.[0];

  return (
    <article className="container mt-16">
      <section className="px-96 gap-8 flex">
        <m.img
          animate={{
            x: 0,
            opacity: 1,
          }}
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="rounded-2xl w-[350px] h-[525px] object-cover"
          src={anime?.images.jpg.large_image_url}
        />
        <figure className="mt-4">
          <DetailsReveal>
            <h1 className="font-semibold text-xl">{anime?.title_english}</h1> //
            Access the title_english property on the anime object
            <div className="mt-1 text-purple text-base flex gap-2">
              <h5>{anime?.year} &#183;</h5>
              <h5>Japan &#183;</h5>
              <h5>{anime?.genres.map((genre) => genre.name).join(", ")}</h5> //
              Access the genres property on the anime object
            </div>
            <p className="mt-4 text-[15px]">{anime?.synopsis}</p> // Access the
            synopsis property on the anime object
          </DetailsReveal>
        </figure>
      </section>
      <div className="mt-8 flex justify-center">
        <DetailsReveal>
          <iframe
            width="800"
            height="450"
            src={anime?.trailer.embed_url}
          ></iframe>
        </DetailsReveal>
      </div>
    </article>
  );
};

export default AnimeDetails;
