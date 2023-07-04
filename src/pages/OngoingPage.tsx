import { useState } from "react";
import { useGetAnimeQuery } from "../services/anime";
import { Link } from "react-router-dom";

const OngoingPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetAnimeQuery({
    page: page,
    filter: "airing",
    limit: 20,
  });

  const handlePrev = () => {
    if (page >= 1) {
      setPage((prev) => prev - 1);
    } else {
      setPage(1);
    }
  };
  const handleNext = () => {
    if (page >= 1) {
      setPage((prev) => prev + 1);
    } else {
      setPage(1);
    }
  };
  return (
    <article className="mt-16">
      <section className="flex justify-center items-center gap-4 flex-wrap">
        {data &&
          data.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <figure>
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
              </figure>
            </Link>
          ))}
      </section>
      <section className="mt-8 flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          className="border border-red px-3 py-2 rounded-full"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="border border-red px-3 py-2 rounded-full"
        >
          Next
        </button>
      </section>
    </article>
  );
};

export default OngoingPage;
