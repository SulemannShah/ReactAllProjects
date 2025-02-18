import { FaQuoteRight, FaGreaterThan, FaLessThan } from "react-icons/fa";
import people from "./data";
import { useState } from "react";
import React from "react";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number ;
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;

      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;

      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.lenght);
   if (randomNumber === index){
    randomNumber = index + 1;
   }
   setIndex(checkNumber(randomNumber))
    
  }

  return (
    <>
      <main>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <button className="prev-btn" onClick={prevPerson}>
            <FaLessThan />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaGreaterThan />
          </button>
        </article>
        <button type="button" className="btn " onClick={randomPerson}> Click it</button>
      </main>
    </>
  );
};
export default App;

// import { FaQuoteRight, FaGreaterThan, FaLessThan } from "react-icons/fa";
// import people from "./data"; // Make sure this data file exists and contains an array
// import { useState } from "react";
// import React from "react";

// const App = () => {
//   const [index, setIndex] = useState(0);

//   // Ensure people is not empty and index is within bounds
//   const currentPerson = people[index] || {}; // Fallback to an empty object if index is out of bounds
//   const { name, job, image, text } = currentPerson;

//   const nextPerson = () => {
//     setIndex((currentIndex) => {
//       const newIndex = currentIndex + 1;
//       if (newIndex > people.length - 1) {
//         return 0; // Loop back to the first person
//       }
//       return newIndex;
//     });
//   };

//   const prevPerson = () => {
//     setIndex((currentIndex) => {
//       const newIndex = currentIndex - 1;
//       if (newIndex < 0) {
//         return people.length - 1; // Loop to the last person
//       }
//       return newIndex;
//     });
//   };

//   return (
//     <main>
//       <article className="review">
//         <div className="img-container">
//           <img src={image} alt={name} className="person-img" />
//           <span className="quote-icon">
//             <FaQuoteRight />
//           </span>
//         </div>
//         <h4 className="author">{name || "No name"}</h4>
//         <p className="job">{job || "No job"}</p>
//         <p className="info">{text || "No text available"}</p>
//         <button className="prev-btn" onClick={prevPerson}>
//           <FaLessThan />
//         </button>
//         <button className="next-btn" onClick={nextPerson}>
//           <FaGreaterThan />
//         </button>
//       </article>
//     </main>
//   );
// };

// export default App;
