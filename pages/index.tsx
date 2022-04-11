import Seo from '../components/Seo';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Movies {
  results: any;
  data: any;
}

interface MovieDatasParams {
  id: number;
  title: string;
}

const Home = ({ data, results }: Movies) => {
  console.log(results);
  const res: any = results.results;
  const router = useRouter();
  const movieDatas = ({ id, title }: MovieDatasParams) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div>
      <h1>API Test Page</h1>
      <div>{data}</div>
      <div className="container">
        <Seo title="Home" />
        {res?.map((movie: any) => (
          <div
            onClick={() =>
              movieDatas({ id: movie.id, title: movie.original_title })
            }
            className="movie"
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={'Movie Img'}
            />
            <h4>
              <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                <a>{movie.original_title}</a>
              </Link>
            </h4>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }

        .movie {
          cursor: pointer;
        }

        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        }

        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }

        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data: string = 'alllow';
  const results = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      data,
      results,
    },
  };
};

export default Home;

//`https://api.themoviedb.org/3/movie/550?api_key=872224b0244bbc45f490e0e7af1de83c`
