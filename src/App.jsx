import Generation from "./components/Generation";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import Section1 from "./components/Section1";
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

function App() {
  return (
    <div className="bg-primary relative overflow-clip">
      <Loader/>
      <Header/>
      <Section1/>
      <ImageGallery/>
      <Generation/>
    </div>
  );
}

export default App;
