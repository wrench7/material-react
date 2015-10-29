/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const ReactDom = require('react-dom');

import Mui from 'material-ui';
const RaisedButton = Mui.RaisedButton;
const Dialog = Mui.Dialog;
const StyleUtils = require('material-ui/lib/utils/styles');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
let {
  Styles,
  Card,
  CardHeader,
  Avatar,
} = Mui;
let DesktopGutter = Styles.Spacing.desktopGutter;

const UserCard = require('./cards/userCard');
const ListCard = require('./cards/listCard');

const MainContent = React.createClass({

  getStyles() {
    return {
      paddingTop: DesktopGutter,
      paddingRight: DesktopGutter,
    };
  },
  
  render() {
    return (
      <div className="row">
        <UserCard />
        <UserCard />
        <UserCard />
        <ListCard />
      </div>
    );
  },

});

module.exports = MainContent;
