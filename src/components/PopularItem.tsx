import { useGetAnimeQuery } from "../services/anime";
import { Link } from "react-router-dom";
import TextReveal from "../utils/TextReveal";
import AnimeReveal from "../utils/AnimeReveal";

const PopularItem = () => {
  const { data, isError } = useGetAnimeQuery({
    page: 2,
    filter: "bypopularity",
    limit: 4,
  });

  if (isError) {
    return (
      <p className="text-center text-red-500 text-xl">
        Error occurred while fetching data.
      </p>
    );
  }
  return (
    <article className="px-10 mt-16 xl:px-20">
      <section className="grid grid-cols-2 ">
        <TextReveal>
          <h3 className="text-xl transform translate-x-12 md:translate-x-32 lg:translate-x-8 xl:translate-x-36">
            Popular
          </h3>
        </TextReveal>

        <div className="justify-end flex">
          <TextReveal>
            <Link to="/anime/all/popular">
              <button className="rounded-full uppercase border-2 border-red py-1 px-4 transform -translate-y-3 -translate-x-14 md:-translate-x-32 lg:-translate-x-8 xl:-translate-x-36 hover:bg-red transition-colors ">
                All
              </button>
            </Link>
          </TextReveal>
        </div>
      </section>
      <section className="flex justify-center items-center gap-4 flex-wrap">
        {data &&
          data.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <figure>
                <AnimeReveal>
                  <img
                    className="h-[400px] w-[300px] object-cover gap-4 rounded-2xl "
                    src={anime.images.jpg.large_image_url}
                  />
                  <h5 className="text-sm mt-2 font-medium">
                    {anime.title_english && anime.title_english.length > 20
                      ? anime.title_english.substring(0, 20) + "..."
                      : anime.title_english}
                  </h5>
                  <div className="flex">
                    <h6 className="text-sm font-light">
                      {anime.episodes} episodes
                    </h6>
                  </div>
                </AnimeReveal>
              </figure>
            </Link>
          ))}
      </section>
    </article>
  );
};

export default PopularItem;
