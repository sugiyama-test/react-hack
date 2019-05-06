import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const style = {margintop: -5};

export default class Message extends React.Component {
  render() {
    return (
      <div className="">
      <List>
        <ListItem disabled="true">
          <div className='user'>
            <Avatar className="userImg" src={this.props.message.profile_image} />
            <div style={{marginBottom: -5}}>@{this.props.message.user_name}</div>
          </div>
          <div className="">
            <Chip style={styles.chip} >
              {this.props.message.text}
            </Chip>
          </div>
        </ListItem>
      </List>
      </div>
    );
  }
}