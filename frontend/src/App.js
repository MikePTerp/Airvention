import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Pages
import Homepage from './pages/hompage/homepage.component'
// About and sub pages
import About from './pages/about/about.component'
import Contact  from './pages/about/contact/contact.component'
import Vision  from './pages/about/vision/vision.component'
// Learn more and sub pages
import LearMore from './pages/learnmore/learn-more.component'
import Bacteria from './pages/learnmore/bacteria/bacteria.component'
import Mold from './pages/learnmore/mold/mold.component'
import ArticleDirectory from './pages/learnmore/articles/articles-directory.components'
import Articles from './pages/learnmore/articles/articles/article.component'
// Your situation and sub pages
import YourSituation from './pages/your-situation/your-situation.component'
import FoodCompany from './pages/your-situation/food-company/food-company.component'
import Healthcare from './pages/your-situation/healthcare/healthcare.component'
import Office from './pages/your-situation/office/office.component'
// Products and sub pages
import Products from './pages/products/products.component'
import UvcProducts  from './pages/products/uvc-products/uvc-products.component'
import IonizationProducts  from './pages/products/ionization-products/ionization-products.component'
import MobileProducts  from './pages/products/mobile-products/mobile-products'
import PathAwayProducts  from './pages/products/path-away-products/path-away-products'
import ProductFotos  from './pages/products/product-fotos/product-foto.component'

//Components
import Footer from './components/footer/footer.component'
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
      <Route path='/kontakt' component={Contact} />
      <Route path='/vores-vision' component={Vision} />
       {/* Learn more and sub pages */}
      <Route path='/laer-mere' component={LearMore} />
      <Route path='/bakterier' component={Bacteria} />
      <Route path='/skimmel' component={Mold} />
      <Route path='/artikler' component={ArticleDirectory} />
      {/* Your situation and sub pages */}
      <Route path='/din-situation' component={YourSituation} />
      <Route path='/foedevarevirksomhed' component={FoodCompany} />
      <Route path='/sundhedssektor' component={Healthcare} />
      <Route path='/kontor' component={Office} />
      {/* Products and sub pages */}
      <Route path='/produkter' component={Products} exact />
      <Route path='/uvc-produkter' component={UvcProducts} exact />
      <Route path='/uvc-produkter/:product' component={ProductFotos} />
      <Route path='/ioniserings-produkter' component={IonizationProducts} />
      <Route path='/mobile-produkter' component={MobileProducts} />
      <Route path='/path-away-produkter' component={PathAwayProducts} />
      {/* Articels */}
      <Route path='/:articel_name' component={Articles} />
      </Switch>
    <Footer />
    </Router>
  );
   }
}

export default App;
