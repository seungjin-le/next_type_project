const Home = ({ textData }: { textData: string }) => {
  return (
    <div>
      <h1>API Test Page</h1>
      <div>{textData}</div>
    </div>
  );
};

const getServerSideProps = () => {
  return 'testData';
};

export default Home;
