import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bodier from './Page/Bodier';
import ParagraphWithIcons from './Page/ParagraphWithIcons';
import Footer from './Page/Footer';
import Header from './Page/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Bodier/>
      <ParagraphWithIcons/>
      <Footer />

    </div>
  );
}

export default App;
