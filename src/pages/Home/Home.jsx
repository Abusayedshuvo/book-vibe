import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Banner></Banner>
      <Books data={data}></Books>
    </>
  );
};

export default Home;
