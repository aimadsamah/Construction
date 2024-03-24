import Accueil from "./components/Accueil";
import Aucun from "./components/Aucun";
import BackgroundImage from "./components/BackgroundImage";
import Construction from "./components/Construction";
import Derniers from "./components/Derniers";
import Footer from "./components/Footer";
import Pourquoi from "./components/Pourquoi";
import Presentation from "./components/Presentation";

function App() {
  return (
    <div>
      <Accueil />
      <BackgroundImage />
      <Presentation />
      <Aucun />
      <Derniers />
      <Pourquoi />
      <Construction />
      <Footer />
    </div>
  );
}

export default App;
