
import './Landing.css';
import Rows from "./Rows"

const LandingPage = () => {


  return (
    <div className="landing-page">
      <div className='headers'>
        Movie Search App
      </div>

      <Rows />
    </div>
  );
};

export default LandingPage;
