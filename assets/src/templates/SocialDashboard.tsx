import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import Navbar from '../components/theme/Navbar';

interface SocialDashboardInterface {
  children: FunctionComponent
}

const SocialDashboard = ( props: SocialDashboardInterface ) => {
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div >
      <Navbar handleClick={handleDrawer} full={true}></Navbar>
      { props.children }
    </div>
  )
}

export default SocialDashboard
