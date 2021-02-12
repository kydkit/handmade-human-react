import Jumbotron from '../components/Jumbotron';
import Project from '../components/Projects';

const Home = () => {
  return (
    <div className="home tc">
      <Jumbotron />
      <Project />
    </div>
  );
}

export default Home;