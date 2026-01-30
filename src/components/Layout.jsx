import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorGlow from './CursorGlow';

const Layout = () => {
  return (
    <div className="min-h-screen bg-midnight flex flex-col">
      <CursorGlow />
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
