import accordionData from "./component/data";
import Accordion from "./component/accordion/accordion";

const App = () => {
  console.log(accordionData)
  return (
    <div>
      <Accordion data={accordionData} />
    </div>
  );
}

export default App;