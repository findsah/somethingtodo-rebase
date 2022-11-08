import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./pages/frontEnd/footer/footer";
import Header from "./pages/frontEnd/header/Header";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
