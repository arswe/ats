import Stats from './../pages/dashboard/Stats';
import Cli from './components/Cli';
import Cloud from './components/Cloud';
import Showcase from './components/Showcase';


const Home = () => {
  return (
    <>
      <Showcase />
      <Stats />
      <Cli />
      <Cloud />
    </>
  );
};

export default Home;
