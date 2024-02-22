import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getallsessions } from "../feature/SessionSlice";
import { Link } from 'react-router-dom';
function YogaSessionCard() {
  const [sessions, setSessions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallsessions())
      .then((result) => {
        setSessions(result.payload);
      })
      .catch((error) => {
        console.error("Error fetching yoga classes:", error);
      });
  }, [dispatch]);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sessions.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sessions.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-7 ml-5">
      
      <div className="flex items-center mb-4">
        <button onClick={scrollLeft} className="btn btn-primary mr-2">
          Scroll Left
        </button>
        <button onClick={scrollRight} className="btn btn-primary">
          Scroll Right
        </button>
      </div>
      <div className="flex overflow-x-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
          {sessions.map((e) => (
          
              <div key={e.id} >
                <div className="card p-4 w-96 bg-base-100 shadow-xl" >
                <Link to={`/session/${e.id}`}>
                  <figure  >
                    <img  src={e.images[0].file} alt="Yoga session" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{e.title}</h2>
                    {/* <h1 className="card-title" ></h1> */}
                    <h1> Level - {e.level}</h1>
                    <h1> Cost: {e.period_currency_fee.fee} INR</h1>
                    <h1>Start time: {e.start_time}</h1>
                    <h1>Days{e.repeat_value}</h1>
                    
                    <h1>Duration: {e.duration}min</h1>
                    {/* <div dangerouslySetInnerHTML={{ __html: e.description }} /> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: e.description, }} /> */}
                    <div className="card-actions justify-end">
                    <Link to={`/session/${e.id}`}>
        <button className="btn btn-primary">Get your Session</button>
      </Link>        
                    </div>
                  </div></Link>
                  </div>
                </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default YogaSessionCard;
