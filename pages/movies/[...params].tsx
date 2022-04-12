import Seo from '../../components/Seo';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

export default function Detail({ movieDetail }: any) {
  const router = useRouter();
  console.log(movieDetail);
  return (
    <div className="container">
      <Seo title={movieDetail.original_title} />
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
        alt=""
      />
      <Link href={movieDetail.homepage}>
        <a className="homePage">
          <h2>{movieDetail.title}</h2>
        </a>
      </Link>
      <div>
        <span>{movieDetail.overview}</span>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background: red;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }
        .homePage {
          margin: 20px 0;
          width: 100%;
          text-align: center;
        }
        .homePage:hover {
          transform: scale(1.1);
          color: #fff;
          transition: 0.3s;
        }
        img {
          width: 400px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }: any) {
  const movieDetail = await (
    await axios.get(`http://localhost:3000/api/movies/${params[1]}`)
  ).data;

  return {
    props: {
      movieDetail,
    },
  };
}
