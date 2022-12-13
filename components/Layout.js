import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='border-b border-gray-100'>
        <Header />
      </div>
      <main className='max-w-7xl mx-auto w-4/5 my-5'>{children}</main>
      <div className='border-t border-gray-100'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
