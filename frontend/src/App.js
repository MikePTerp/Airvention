import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Pages
import Homepage from './components/pages/hompage/homepage.component'
import About from './components/pages/about/about.component'
import LearMore from './components/pages/learnmore/learn-more.component'
import YourSituation from './components/pages/your-situation/your-situation.component'
import FoodCompany from './components/pages/your-situation/food-company/food-company.component'
import Healthcare from './components/pages/your-situation/healthcare/healthcare.component'
import Office from './components/pages/your-situation/office/office.component'
//Components
import Footer from './components/footerTwo'
import Toolbar from './components/toolbar/toolbar.component'
import SideDrawer from './components/side-drawer/side-drawer.component'
import Backdrop from './components/backdrop/backdrop.component'
import { Component } from 'react'


class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () =>{
    this.setState(prevState => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
      
    })
    }

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }
  
  render() {
  let backDrop

  if(this.state.sideDrawerOpen){
    backDrop = <Backdrop click={this.backDropClickHandler}/>
  } 

   return (
    <Router>
    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
    <SideDrawer show={this.state.sideDrawerOpen}/>
    {backDrop}
        <Switch>
      <Route path='/' component={Homepage} exact />
      <Route path='/about' component={About} />
      <Route path='/learnmore' component={LearMore} />
      <Route path='/yoursituation' component={YourSituation} />
      <Route path='/foodcompany' component={FoodCompany} />
      <Route path='/healthcare' component={Healthcare} />
      <Route path='/office' component={Office} />
      </Switch>
    <Footer />
    </Router>
  );
   }
}

export default App;
