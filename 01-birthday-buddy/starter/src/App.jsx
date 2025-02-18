import  {useState} from 'react'
import List from './List'
import data from './data'
const App = () => {
  const [people , setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>birthdays today</h3>
        <List people={people}/>
      </section>
      <button className='btn' type='button' onClick={() => setPeople([])} > Click me</button>
    </main>
  );
};
export default App;
