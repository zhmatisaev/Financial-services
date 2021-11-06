// import "./App.css";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Practice from "./components/Practice";
import Services from "./components/Services";
// import "./components/Header/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Practice />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
