import { useGetAnimeQuery } from "../services/anime";
import { Link } from "react-router-dom";
import TextReveal from "../utils/TextReveal";
import AnimeReveal from "../utils/AnimeReveal";

const OngoingItem = () => {
  const { data } = useGetAnimeQuery({
    page: 1,
    filter: "airing",
    limit: 4,
  });

  return (
    <article className="px-10 mt-20 xl:px-20">
      <section className="grid grid-cols-2 ">
        <TextReveal>
          <h3 className="text-xl transform translate-x-12 md:translate-x-32 lg:translate-x-8 xl:translate-x-36">
            Ongoing
          </h3>
        </TextReveal>

        <div className="justify-end flex">
          <Link to="/anime/all/ongoing">
            <TextReveal>
              <button className="rounded-full uppercase border-2 border-red py-1 px-4 transform -translate-y-3 -translate-x-14 md:-translate-x-32 lg:-translate-x-8 xl:-translate-x-36 hover:bg-red transition-colors ">
                All
              </button>
            </TextReveal>
          </Link>
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

export default OngoingItem;
