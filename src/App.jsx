import HeaderLayout from './componets/HeaderLayout'
import {Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <HeaderLayout />
      <Outlet />
    </>
  );
}

export default App
