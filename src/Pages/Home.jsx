import Aboutsection from "./Aboutsection";
import Banner from "./Banner";
import Pakagesection from "./Pakagesection";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>abc || Home</title>
        
      </Helmet>

            <Banner></Banner>
           <Aboutsection></Aboutsection>
           <Pakagesection></Pakagesection>
        </div>
    );
};

export default Home;