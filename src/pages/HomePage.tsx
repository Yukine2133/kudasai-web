import OngoingItem from "../components/OngoingItem";
import PopularItem from "../components/PopularItem";

const HomePage = () => {
  return (
    <main className="mt-10">
      <PopularItem />
      <OngoingItem />
    </main>
  );
};

export default HomePage;
