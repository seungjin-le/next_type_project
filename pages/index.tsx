import { GetServerSideProps } from 'next';
import { any } from 'prop-types';

const Home = ({ data, results }: { data: any; results: any }) => {
  console.log(results);
  return (
    <div>
      <h1>API Test Page</h1>
      <div>{data}</div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data: string = 'alllow';
  const results = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=872224b0244bbc45f490e0e7af1de83c`,
    )
  ).json();
  return {
    props: {
      data,
      results,
    },
  };
};

export default Home;
