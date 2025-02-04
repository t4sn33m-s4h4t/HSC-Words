import CardCom from './components/CardCom';

const Home = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="px-2 md:px-20 lg:px-40 py-20 text-center">
      <h1 className="text-3xl md:text-4xl  font-bold text-gray-800 mb-12">
        Learn Vocabulary <span className="text-blue-600">Letterwise</span>
      </h1>
      <div className="w-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-2 md:gap-10">
        {letters.map((lt) => (
          <CardCom key={lt} letter={lt.toUpperCase()} path={`/words/${lt}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;
