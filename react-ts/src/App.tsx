import Forecast from "./components/Forecast.tsx";
import Current from "./components/Current.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {

  return (
      <div className="min-h-screen bg-cyan-950">
          <NavBar/>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 pb-10 absolute top-1/4 w-full bg-cyan-950">
              <div className="bg-cyan-600 p-5 rounded-lg">
                  <Current city="Gliwice"/>
                  <Forecast city="Gliwice"/>
              </div>
              <div className="bg-cyan-600 p-5 rounded-lg">
                  <Current city="Hamburg"/>
                  <Forecast city="Hamburg"/>
              </div>
          </div>
      </div>
  );
}

export default App;
