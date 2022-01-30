import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
/*import Link from '@material-ui/core/Link';*/
import { Link } from 'react-router-dom';

type AppProps = {
  name: string;
};

const BreadCrumbs: React.FC<AppProps> = ({ name }) => {
  return (
    <Breadcrumbs
      aria-label='breadcrumb'
      style={{ marginTop: '30px', marginBottom: '30px' }}
    >
      <Link
        color='inherit'
        to='/'
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        Home Page
      </Link>
      <Typography color='textPrimary'>{name}</Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
