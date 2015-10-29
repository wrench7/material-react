/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const ReactDom = require('react-dom');

import Mui from 'material-ui';
const StyleUtils = require('material-ui/lib/utils/styles');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
let {
  Styles,
  List,
  ListItem,
  ContentSend,
  ContentDrafts,
  ContentInbox,
  ActionGrade,
  Avatar,
  ListDivider,
  rightIconMenu,
} = Mui;
let DesktopGutter = Styles.Spacing.desktopGutter;

const ListCard = React.createClass({
  
  render() {
    return (
      <div className="col-xs-12" style={{backgroundColor: '#ccc'}}>
        <List subheader="Today" style={{backgroundColor: '#ccc', marginBottom: 12}}>
          <ListItem
            leftAvatar={<Avatar src="/images/cat.gif" />}
            rightIconButton={rightIconMenu}
            primaryText="Brendan Lim"
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>Brunch this weekend?</span><br/>
                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
              </p>
            }
            secondaryTextLines={2}
            style={{backgroundColor: '#fff'}} />
          <ListDivider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="/images/cat.gif" />}
            rightIconButton={rightIconMenu}
            primaryText="me, Scott, Jennifer"
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>Summer BBQ</span><br/>
                Wish I could come, but I&apos;m out of town this weekend.
              </p>
            }
            secondaryTextLines={2}
            style={{backgroundColor: '#fff'}} />
          <ListDivider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="/images/cat.gif" />}
            rightIconButton={rightIconMenu}
            primaryText="Grace Ng"
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>Oui oui</span><br/>
                Do you have any Paris recs? Have you ever been?
              </p>
            }
            secondaryTextLines={2}
            style={{backgroundColor: '#fff'}} />
          <ListDivider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="/images/cat.gif" />}
            rightIconButton={rightIconMenu}
            primaryText="Kerem Suer"
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>Birthday gift</span><br/>
                Do you have any ideas what we can get Heidi for her birthday? How about a pony?
              </p>
            }
            secondaryTextLines={2}
            style={{backgroundColor: '#fff'}} />
          <ListDivider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="/images/cat.gif" />}
            rightIconButton={rightIconMenu}
            primaryText="Raquel Parrado"
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>Recipe to try</span><br/>
                We should eat this: grated squash. Corn and tomatillo tacos.
              </p>
            }
            secondaryTextLines={2}
            style={{backgroundColor: '#fff'}} />
        </List>
      </div>
    );
  },

});

module.exports = ListCard;
