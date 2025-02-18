
import Tour from './Tour'

const Tours = ({tours , removeTour} ) => {
  return (
    <section>
      <div className="title"></div>
      <h2 style={{ textAlign: "center" }}>our Tours</h2>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;