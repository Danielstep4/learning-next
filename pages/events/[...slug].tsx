import { useRouter } from "next/router";

const SingleEventWithQuery: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return <div>Single Event With Query</div>;
};

export default SingleEventWithQuery;
