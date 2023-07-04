import { useParams } from "react-router-dom";
import { useGetAnimeByIdQuery } from "../services/anime";
import DetailsReveal from "../utils/DetailsReveal";
import { motion as m } from "framer-motion";
const AnimeDetails = () => {
  const { id } = useParams();
  const { data, isError } = useGetAnimeByIdQuery({ id: Number(id) });

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
          src={data?.images.jpg.large_image_url}
        />
        <figure className="mt-4 ">
          <DetailsReveal>
            <h1 className="font-semibold text-xl">{data?.title_english}</h1>
          </DetailsReveal>
          <div className="mt-1 text-purple text-base flex gap-2 ">
            <DetailsReveal>
              <h5>{data?.year} &#183;</h5>
            </DetailsReveal>
            <DetailsReveal>
              <h5>Japan &#183;</h5>
            </DetailsReveal>
            <DetailsReveal>
              <h5>{data?.genres.map((genre) => genre.name).join(", ")}</h5>
            </DetailsReveal>
          </div>
          <DetailsReveal>
            <p className="mt-4  text-[15px]">{data?.synopsis}</p>
          </DetailsReveal>
        </figure>
      </section>
      <div className="mt-8 flex justify-center">
        <DetailsReveal>
          <iframe
            width="800"
            height="450"
            src={data?.trailer.embed_url}
          ></iframe>
        </DetailsReveal>
      </div>
    </article>
  );
};

export default AnimeDetails;
