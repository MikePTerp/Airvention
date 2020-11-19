import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import HomeScreen from './components/screens/HomeScreen'
import AboutScreen from './components/screens/AboutScreen'
import LearnMoreScreen from './components/screens/LearnMoreScreen'
import YourSituationScreen from './components/screens/YourSituationScreen'


function App() {
  return (
    <Router>
      
    <Navbar />
    <main>
      <Container>
        <Switch>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/about' component={AboutScreen} />
      <Route path='/learnmore' component={LearnMoreScreen} />
      <Route path='/yoursituation' component={YourSituationScreen} />
      </Switch>
    </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
