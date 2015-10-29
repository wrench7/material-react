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
  CardText,
  Avatar,
} = Mui;
let DesktopGutter = Styles.Spacing.desktopGutter;

const UserCard = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    // let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
    //   accent1Color: Colors.deepOrange500,
    // });
    
    // this.setState({muiTheme: newMuiTheme});
  },

  getStyles() {
    return {
      marginBottom: DesktopGutter,
    };
  },
  
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <Card style={this.getStyles()}>
          <CardHeader
            title="User"
            subtitle="Job title"
            avatar={<Avatar>U</Avatar>}
            actAsExpander={true}
            showExpandableButton={true} />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  },
  
  openLeftNav() {
    this.refs.leftNav.toggle();
    containerStyle.paddingLeft = 0;
  },

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  },

});

module.exports = UserCard;
