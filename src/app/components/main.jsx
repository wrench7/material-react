/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const ReactDom = require('react-dom');

import Mui from 'material-ui';
const RaisedButton = Mui.RaisedButton;
const Dialog = Mui.Dialog;
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const AppBar = Mui.AppBar;
const MenuItem = Mui.MenuItem;
const LeftNav = Mui.LeftNav;
const Styles = Mui.Styles;
const MainContent = require('./mainContent');
let DesktopGutter = Styles.Spacing.desktopGutter;

import 'flexboxgrid/css/flexboxgrid.css';

const Main = React.createClass({
  
  getInitialState: function() {
    return { leftNavisOpen: true };
  },

  render() {

    let 
      appTitle = "Uno",

      leftNavStyles = {
        top: 64,
      },

      menuItems = [
        { route: 'get-started', text: 'Get Started' },
        { route: 'customization', text: 'Customization' },
        { route: 'components', text: 'Components' },
        { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
        {
          type: MenuItem.Types.LINK,
          payload: 'https://github.com/callemall/material-ui',
          text: 'GitHub',
        },
        {
          text: 'Disabled',
          disabled: true,
        },
        {
          type: MenuItem.Types.LINK,
          payload: 'https://www.google.com',
          text: 'Disabled Link',
          disabled: true,
        },
      ];

    console.log(this.state.leftNavisOpen);

    let result = this.state.leftNavisOpen ? 256 + DesktopGutter : DesktopGutter;

    return (
      <div>
        <AppBar 
          title={appTitle}
          onLeftIconButtonTouchTap={this.openLeftNav} />

        <LeftNav 
          ref="leftNav" 
          menuItems={menuItems}
          style={leftNavStyles}
          onNavOpen={this.leftNavOpen}
          onNavClose={this.leftNavClose}
          />

        <div style={{marginLeft: result, marginTop: DesktopGutter, marginRight: DesktopGutter}}>
          <MainContent />
        </div>
      </div>
    );
  },
  
  openLeftNav() {
    this.refs.leftNav.toggle();
    this.state.leftNavisOpen = ! this.state.leftNavisOpen;
  },

  leftNavOpen() {
    this.state.leftNavisOpen = true;
    console.log('open')
  },

  leftNavClose() {
    this.state.leftNavisOpen = false;
    console.log('close')
  },

});

module.exports = Main;
