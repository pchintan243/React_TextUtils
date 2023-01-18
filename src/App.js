import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* If you are not give any props and you set defualt props in Navbar.js file it will take default value */}
      <Navbar title="TextUtils" about="About" />

      {/* For default props */}
      {/* <Navbar /> */}

      <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" />
    </>
  );
}

export default App;
