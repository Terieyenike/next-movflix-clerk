import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col bg-gray-50'>
      <Header />
      <main className='mx-auto w-4/5 max-w-7xl py-8'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
