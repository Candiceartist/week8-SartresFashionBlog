import logo from './logo.svg';
import './App.css';
import blog from './models/blog';
import PageTitle from './components/PageTitle';
import SubTitle from './components/SubTitle';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <div className="App">
      <PageTitle className="pagetitle"/>
      <SubTitle className="subtitle" />
      <NavBar className="navbar"/>
      <Blog className="blogBox" blogger={blog}/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
