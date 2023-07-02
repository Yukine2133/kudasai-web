import { useGetAnimeQuery } from "./services/anime";

function App() {
  const { data, isLoading, isError } = useGetAnimeQuery({
    page: 1,
    filter: "bypopularity",
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching data.</p>;
  }

  if (!data) {
    return null; // or render a loading state
  }

  return (
    <>
      {data &&
        data.map((anime) => (
          <img
            key={anime.mal_id}
            src={anime.images.large_image_url}
            alt="Anime"
          />
        ))}
    </>
  );
}

export default App;
