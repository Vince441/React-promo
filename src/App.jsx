import Wilders from "./components/Wilders";
import "./App.css";

const wildersList = [
  {
    name: "Alexandre",
  },
  {
    name: "Vincent",
  },
  {
    name: "Mamady", },
  {
    name: "Irwin",
  },
  {
    name: "Lukasz",
  },
];

function App() {
  return (
    <div>
      
      {wildersList.map((student) => {
        return <Wilders name={student.name} />;
      })}
    </div>
  );
}

export default App;
