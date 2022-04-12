import Seo from '../../components/Seo';
import axios from 'axios';
import Link from 'next/link';

export default function Detail({ movieDetail }: any) {
  return (
    <div className="container">
      <Seo title={movieDetail?.original_title} />
      <Link href={movieDetail?.homepage}>
        <a className="homePage">
          <h2>{movieDetail?.title}</h2>
        </a>
      </Link>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`}
        alt="img"
        className="mainImg"
      />
      <div className="tagListBox">
        <span className="tage">Tage</span>
        <div className="tagList" id="tagList">
          {movieDetail?.genres.map(
            ({ name: name }: { name: any }, index: any) => (
              <div className="tageItem" key={index}>
                {name}
              </div>
            ),
          )}
        </div>
      </div>
      <div className="movieDatas">
        <div className="movieData">
          <div>
            {`Country of origin : ${movieDetail?.production_countries[0].iso_3166_1}`}
          </div>
          <div>{`Companies : ${movieDetail?.production_countries[0].name}`}</div>
          <div>{`Movie Release : ${movieDetail?.release_date}`}</div>
          <div>{`Run Time : ${movieDetail?.runtime}m`}</div>
          <div>{`Spoken Language : ${movieDetail?.spoken_languages.map(
            (v: { english_name: any }) => v.english_name,
          )}`}</div>
          <div>{`Vote Average : ${movieDetail?.vote_average}`}</div>
          <div>{`Audience : ${movieDetail?.popularity}`}</div>
        </div>
      </div>
      <h2>Summary</h2>
      <div className="overview">
        <span>{movieDetail?.overview}</span>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }
        .mainImg {
          width: 400px;
          border-radius: 16px;
          margin-bottom: 30px;
        }
        .mainImg:hover {
          transform: scale(1.05);
          transition: 0.3s;
        }
        .tagListBox {
          width: 400px;
          display: flex;
          flex-direction: row;
          margin-bottom: 20px;
          align-items: center;
          justify-content: start;
        }
        .tagListBox .tage {
          font-size: 16px;
          font-weight: 600;
          background: #737373;
          color: #fff;
          padding: 8px;
          border-radius: 16px;
          margin-right: 10px;
        }
        .tagListBox .tagList {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          overflow: scroll;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none;
          border-left: 2px solid #ddd;
          padding-left: 10px;
        }
        .tagListBox .tagList::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
        .tagListBox .tageItem {
          font-size: 12px;
          padding: 8px;
          border-radius: 16px;
          margin-right: 10px;
          border: 1px solid #ddd;
          white-space: nowrap;
        }

        .movieDatas {
          width: 400px;
          display: flex;
          flex-wrap: nowrap;
          background: #737373;
          padding: 0 20px;
          box-sizing: border-box;
          margin: 20px 0;
          border-radius: 16px;
        }
        .movieDatas .movieData {
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 10px 0;
        }
        .movieDatas .movieData div {
          color: #fff;
          width: 90%;
          margin: 10px 0;
          padding-bottom: 7px;
          border-bottom: 1px solid #fff;
          font-size: 14px;
        }

        .homePage {
          margin: 20px 0;
          width: 100%;
          text-align: center;
        }
        .homePage:hover {
          transform: scale(1.1);
          color: gray;
          transition: 0.3s;
        }
        .overview {
          width: 400px;
          line-height: 22px;
          border: solid 2px #737373;
          padding: 20px 30px;
          border-radius: 18px;
          word-break: normal;
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
