//React Router Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Components
import HomePage from './Screens/HomePage';
import SingleProduct from './Screens/SingleProduct';
import Appbar from './Components/Appbar/Appbar';
import { ToastContainer } from 'react-toastify';
import { Container } from '@material-ui/core';
import Drawer from './Components/Drawer/Drawer';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function App() {
  const theme = {
    colors: {
      primaryColor: '#714aff',
      textColor: '#252b3a',
      btnHoverColor: '#4f1fff',
    },
  };
  return (
    <>
      <Router>
        <Appbar />
        <Drawer />
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='product/:id' element={<SingleProduct />} />
          </Routes>
        </Container>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
