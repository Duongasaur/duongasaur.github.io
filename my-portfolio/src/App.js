import './App.css';
import { GummyBear } from './bear';
import { Embed } from './sandbox';

const DEMOS = [
  {
    title: 'Odds Animation Fluctuation',
    link: 'https://codesandbox.io/embed/2gdgg2?view=editor+preview&module=%2Fsrc%2Fbet%2FoddsDisplay.tsx&hidenavigation=2',
  },
  {
    title: 'Team Backgrounds Betting Event Cards',
    link: 'https://codesandbox.io/embed/fmpldv?view=editor+preview&module=%2Fsrc%2Foutcomes.tsx&hidenavigation=2',
  }
]

function App() {
  return (
    <div className="App">
      {/* <GummyBear /> */}
      <header className="App-header">
        <h1>Daniel Duong <b>|</b> <span>Software Developer</span></h1>
      </header>
      <a
          className="App-link"
          href="https://www.linkedin.com/in/dan-devs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin Profile
        </a>

        <section>
        {DEMOS.map((demo, index) => (
          <Embed key={index} title={demo.title} source={demo.link} />
          ))}
        </section>
    </div>
  );
}

export default App;
