import './App.css';
import Layout from './components/Layout'
import HeaderImg from './images/header-icon.png'

function App() {
  return (
    <Layout>
      <div className="App">
        <section className="home-header">
          <div className="header-title">
            <img src={HeaderImg} alt="Header Icon"/>
            <h1>Welcome to my Site!</h1>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
