import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import { sessionfindbyid } from '../feature/SessionSlice'; // Import your action creator
import { useState } from 'react';

function SessionDetailpage() {
  const { Id } = useParams();
  const dispatch = useDispatch();
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
  
      try {
         dispatch(sessionfindbyid(Id)).then((result) => {
          setSessions(result.payload);
        })
        .catch((error) => {
          console.error("Error fetching yoga classes:", error);
        });
    
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    
  }, [dispatch, Id]); // Include dispatch and Id in the dependency array
  console.log(sessions)
  // Access the session data from the Redux store if needed
  // const session = useSelector(selectSessionById(Id));

  return (
    <div>
     {
  sessions.length > 0 && (
    <div key={sessions[0].id} className="hero min-h-screen" style={{ backgroundImage: `url(${sessions[0].images[0].file})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{sessions[0].title}</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
     
    </div>
  )
}

<div className='card-body w-1/2'>
  {sessions.length > 0 && sessions[0] && sessions[0].description && (
    <div dangerouslySetInnerHTML={{ __html: sessions[0].description }} />
  )}
</div>

  
    </div>
  );
}

export default SessionDetailpage;
