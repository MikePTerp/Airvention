import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Pages
import Homepage from './components/pages/hompage/homepage.component'
// About and sub pages
import About from './components/pages/about/about.component'
import History  from './components/pages/about/history/history.component'
import Team  from './components/pages/about/team/team.component'
import Vision  from './components/pages/about/vision/vision.component'
// Learn more and sub pages
import LearMore from './components/pages/learnmore/learn-more.component'
import Bacteria from './components/pages/learnmore/bacteria/bacteria.component'
import Mold from './components/pages/learnmore/mold/mold.component'
import WhatIsUvc from './components/pages/learnmore/what-is-uvc/what-is-uvc.component'
// Your situation and sub pages
import YourSituation from './components/pages/your-situation/your-situation.component'
import FoodCompany from './components/pages/your-situation/food-company/food-company.component'
import Healthcare from './components/pages/your-situation/healthcare/healthcare.component'
import Office from './components/pages/your-situation/office/office.component'
//Components
import Footer from './components/Footer'
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
       {/* About and sub pages */}
      <Route path='/om-os' component={About} />
      <Route path='/vores-historie' component={History} />
      <Route path='/vores-hold' component={Team} />
      <Route path='/vores-vision' component={Vision} />
       {/* Learn more and sub pages */}
      <Route path='/laer-mere' component={LearMore} />
      <Route path='/bakterier' component={Bacteria} />
      <Route path='/skimmel' component={Mold} />
      <Route path='/hvad-er-uvc' component={WhatIsUvc} />
      {/* Your situation and sub pages */}
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
