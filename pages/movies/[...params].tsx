import Seo from '../../components/Seo';
import { useRouter } from 'next/router';

interface MoveieData {
  id: number;
  title: string;
}

export default function Detail({ params }: any) {
  const router = useRouter();
  console.log(params);
  console.log(router);
  const [title, id] = params;
  console.log(title);
  console.log(id);
  return (
    <div>
      <Seo title={'title'} />
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
