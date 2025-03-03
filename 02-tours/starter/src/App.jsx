import React from "react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) =>{
   const newTours = tours.filter((tour) => tour.id !== id);
   setTours(newTours)
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log("error");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0){
    return(
      <>
      <main> 
        <div className="title">
          <h2>no tours left</h2>
          <button type="button" onClick={()=>fetchData()} className="btn">Refresh</button>
        </div>
      </main>
      </>
    )
  }
  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
};
export default App;
