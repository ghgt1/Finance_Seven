import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ScrollRestoration } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
  }

  main, header, footer {
    max-width:768px;
    padding:0 20px;
    box-sizing: border-box;
    margin:0 auto;
  }

  footer {
    position: fixed;
    left: 0;
    right: 0;
  }

  main {
    margin:30px auto 150px
  }
`;

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
