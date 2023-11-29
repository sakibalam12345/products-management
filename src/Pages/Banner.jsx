import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20">
             <Carousel>
                <div className="h-[700px]">
                    <img src="https://i.ibb.co/7gQDmB6/istockphoto-1254062265-612x612.jpg" />
                    <Link><p className="legend"><button>Join as HR/Admin</button></p></Link>
                    
                </div>
                <div className="h-[700px]">
                    <img src="https://i.ibb.co/7rDsmF0/Rob-Long-employee-satisfaction-vs-happiness.jpg" />
                  <Link><p className="legend"><button>Join as an Employee</button></p></Link>  
                </div>
               
            </Carousel>
        </div>
    );
};

export default Banner;