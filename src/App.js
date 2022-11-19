import FooterSection from "./pages/front-end/footer/FooterSection";
import Header from "./pages/front-end/header/Header";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <Header />
      <MainRoutes />
      <FooterSection />
    </>
  );
};

export default App;
