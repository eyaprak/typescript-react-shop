//React Router Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Components
import HomePage from './Screens/HomePage';
import SingleProductPage from './Screens/SingleProductPage';
import Appbar from './Components/Appbar/Appbar';
import { ToastContainer } from 'react-toastify';
import { Container } from '@material-ui/core';
import Drawer from './Components/Drawer/Drawer';
import Footer from './Components/Footer/Footer';
import CheckoutPage from './Screens/CheckoutPage';

function App() {
  return (
    <>
      <Router>
        <Appbar />
        <Drawer />
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='product/:id' element={<SingleProductPage />} />
            <Route path='checkout' element={<CheckoutPage />} />
          </Routes>
        </Container>
      </Router>
      {/*<Footer />*/}
      <ToastContainer />
    </>
  );
}

export default App;
