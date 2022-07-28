import Header from './Views/Components/Header';
import './App.css';
import CurrentPage from './Views/Pages/currentPage';
import "./Assests/Stlyes/globals.css";
function App() {

  return (
    <div className="h-[100vh] bg-black">
      <Header/>
     <CurrentPage/>
    </div>
  );
}

export default App;
