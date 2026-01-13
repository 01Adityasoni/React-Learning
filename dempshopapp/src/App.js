import './App.css';
import Items from './Components/Items';
import ItemDate from './Components/ItemDate'; 

function App() {
  const response = [
    {
      itemName: "Paneer",
      mfgDate: 20,
      mfgMonth: "Mar",
      mfgYear: 2021
    },
    {
      itemName: "tofu",
      mfgDate: 21,
      mfgMonth: "Apr",
      mfgYear: 2022
    },
    {
      itemName: "curd",
      mfgDate: 23,
      mfgMonth: "May",
      mfgYear: 2024
    },
  ]

  return (
  <>
  <Items name = {response[0].itemName} />
  <ItemDate day = {response[0].mfgDate} month = {response[0].mfgMonth} year = {response[0].mfgYear} />

  <Items name = {response[1].itemName}  />
  <ItemDate day = {response[1].mfgDate} month = {response[1].mfgMonth} year = {response[1].mfgYear} />
  
  <Items name = {response[2].itemName}  />
  <ItemDate day = {response[2].mfgDate} month = {response[2].mfgMonth} year = {response[2].mfgYear} />
    <div className="App">
     Hello World
    </div>
  </>
  
  );
}

export default App;
