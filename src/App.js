import './App.css';
import Layout from './components/Layout'
import HeaderImg from './images/header-icon.png'

function App() {
  return (
    <Layout>
      <div className="App">
        <section className="home-header">
          <div className="header-title">
            <div className="header-img">
              <img src={HeaderImg} alt="Header Icon"/>
            </div>
            <h1>Welcome to my Site!</h1>
            <p className="header-text">
              Hello, I'm Franco and I build websites 
            </p>
            <i class="fas fa-laptop-code"></i>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
