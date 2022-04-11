import Seo from '../../components/Seo';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Detail({ params }: any) {
  const router = useRouter();
  const [title, id] = params;
  return (
    <div>
      <Seo title={title} />
      <h2>{title}</h2>
      <h2>{id}</h2>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }: any) {
  const movieDetail = await (await axios.get('')).data;
  return {
    props: {
      params,
    },
  };
}
