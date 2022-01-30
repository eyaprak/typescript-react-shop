import { useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
//Context
import { DrawerContext } from '../../Context/DrawerContext';
//Styles
import { Wrapper } from './Drawer.styles';
//Components
import Cart from '../Cart/Cart';

const DrawerComponent = () => {
  const { drawer, setDrawer } = useContext(DrawerContext);
  return (
    <Wrapper>
      <Drawer
        anchor='right'
        open={drawer}
        onClose={() => {
          if (setDrawer) {
            setDrawer(false);
          }
        }}
      >
        <Cart />
      </Drawer>
    </Wrapper>
  );
};

export default DrawerComponent;
