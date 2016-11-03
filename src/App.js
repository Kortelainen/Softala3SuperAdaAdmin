import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import logo from '../images/superda.png';
import './styles/App.css';


class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Etusivu} />
          <Route path='/hallinta' component={Hallinta}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='/pisteet' component={Pisteet} />
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Title = () => (
  <h1>Hello from Title Component</h1>
)

const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)

const NamedComponents = (props) => (
	<div>
    {props.title}<br />
    {props.subTitle}
	</div>
)

const Nav = () => (
  <div className="App">
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    </div>

  <div className="topnav">
  <ul>
    <li><IndexLink activeClassName='active' to='/'>Etusivu</IndexLink>&nbsp;</li>
    <li><IndexLink activeClassName='active' to='/hallinta'>Hallinta</IndexLink>&nbsp;</li>
    <li><IndexLink activeClassName='active' to='/pisteet'>Pisteet</IndexLink>&nbsp;</li>
    <li><IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink></li>
    </ul>
  </div>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Etusivu = () => <h1>Tervetuloa SuperAda-tapahtuman Admin-sivulle!</h1>

const Hallinta = (props) => <div>
  <br />
  <Link to='/address'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'>Instagram Feed</Link>
  <h1>Täällä pääset arvostelemaan joukkueita</h1>
  {props.children}
</div>

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

const Pisteet = (props) => (
  <div>
    <h3>Eiköhän pisteytetä joukkueet?</h3>
    
  </div>
)

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App
