import Seo from '../../components/Seo';
import { useRouter } from 'next/router';

interface MoveieData {
  id: number;
  title: string;
}

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

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
