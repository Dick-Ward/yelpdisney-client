import React from 'react'
import {connect} from 'react-redux'
import Options from '../../services/data'
import {Input, Popup, Dropdown, Label, Grid} from 'semantic-ui-react'
import YouTube from 'react-youtube'
import LoginSignup from '../global/LoginSignup'
import * as actions from "../../actions"
import "../../style/splash.css"


class Splash extends React.Component {
  state = {
    query: '',
    park: '',
    loginSelected: false
  }

  handleFilterChange = (e, {value}) =>{
    this.setState({ park: value });
  }

  handleLogout = () =>{
    alert("You have successfully logged out.")
    this.props.logout()
  }

  handleSearchChange = e =>{
    this.setState({ query: e.target.value})
  }

  handleSubmit = e =>{
    e.preventDefault()
    let query = this.state.query === '' ? "all" : this.state.query
    let park = this.state.park
    this.props.resetRestaurants()
    this.props.applyParkFilter(park)
    this.props.searchRestaurants(query)
    this.props.clearAllFilters()
    this.props.history.push('/restaurants')
  }

  logInToggle = () =>{
    this.setState({loginSelected: !this.state.loginSelected})
  }

onReady(event) {
  event.target.mute();
}
isChrome(){
  if (window.chrome !== null &&
  typeof window.chrome !== "undefined" &&
  window.navigator.vendor === "Google Inc." &&
  typeof window.opr == "undefined"&&
  window.navigator.userAgent.indexOf("Edge") > -1 === false &&
  window.navigator.userAgent.match("CriOS") == null){
    return true
  }
  else{
    return false
  }
}

warnBrowser(){
  if (this. isChrome()){
    return <div className="BrowserWarn">It looks like you're using Google Chrome, which won't load review animations correctly.  If you want to read more about the Chrome bug I found, you can check out my blog post on <a href="https://medium.com/@TheDickWard/animated-ratings-using-svg-text-clip-paths-and-why-they-dont-work-in-chrome-107676891b7e">SVG Clip Paths and why they don't work in Chrome</a>.  As soon as the change is pushed live, you'll stop seeing this message. In the meantime, you can get the full functionality of this site with <a href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a></div>

  }
  else if (!(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)){
    return <div className="BrowserWarn">It looks like you're not using <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>, which means this site won't load review animations correctly.  If you want to read more about what that means and why, you can check out my blog post on <a href="https://medium.com/@TheDickWard/animated-ratings-using-svg-text-clip-paths-and-why-they-dont-work-in-chrome-107676891b7e">SVG Clip Paths and why they don't work in Chrome</a>.</div>
  }
}
onEnd(event) {
  event.target.playVideo();
}

  render(){

    const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      rel: 0,
      showinfo: 0,
      loop: 1,
      modestbranding: 1,
      iv_load_policy: 3
    }
  }



    return(
        <div className="splash" style={{backgroundColor: "#666"}}>
        <div className="videoBackground">
          <YouTube
          videoId="d7FFFENv6i4"
          opts={videoOptions}
          className="iframe"
          onReady={this.onReady}
          onEnd={this.onEnd}
          />
        </div>
        {this.warnBrowser()}

        <div className="splashBar">
          <Grid>
            <Grid.Column width={5}>
              <div style={{visibility: "hidden"}} className="logo">Yelp Disney</div>
            </Grid.Column>
            <Grid.Column  width={9}>
            <div className="navElementWrapper">
            <div className="splashLogin">
              {this.props.user ?
                <div><Popup
           trigger={<span className="splashLoginText" > Welcome {this.props.user.username}!  </span>}
           content={<span className="navbarLoginText" onClick={this.handleLogout}>Log Out</span>}
           on='click'
           position='top right'
         /></div>
              :
              <LoginSignup logInToggle={this.logInToggle} loginSelected={this.state.loginSelected}/>}
            </div>
            </div>
          </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid>
        </div>


          <div className="splashTitle">Yelp Disney</div>

          <div className="splashSearch">
            <form  onSubmit={this.handleSubmit}>
              <Input  size="large" style={{width: "100%"}} type='text' placeholder='Prime Time Cafe,   Tiffins,   Indian,   pizza...'
                onChange={this.handleSearchChange}
                value={this.state.query}
                labelPosition="left"
              action>
                <Label basic>Find</Label>
                <input />
                <Dropdown style={{width: "40%"}} selection placeholder={'All Parks'}
                  options={Options.parkOptions}
                  onChange={this.handleFilterChange}/>
                <Input type="submit" icon={{name:"search", size: "large"}} value="" attached="left" style={{backgroundColor: "white"}} />
              </Input>
            </form>

          </div>
          </div>

    )
  }
}

function mapStateToProps(state){
  return(
    {
      user: state.auth.user
    }
  )
}


export default connect(mapStateToProps, actions)(Splash)
