import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Items from '../../components/Users/items';
import { Input, Row } from 'antd';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    const { username } = this.props;
    this.props.dispatch({
      type: 'users/query',
      username,
    });
    this.props.dispatch({
      type: 'users/queryrepos',
      username,
    });
  }
  getItems() {
    const reposs = this.props.repos;
    const that = this;
    if (this.props.repos[0]) {
      if (this.props.keyword) {
        const items = reposs.filter((info) => {
          return info.name.toLowerCase().indexOf(that.props.keyword.toLowerCase()) > -1;
        }).map((info) => {
          return <Items name={info.name} full_name={info.full_name} created_at={info.created_at} updated_at={info.updated_at} pushed_at={info.pushed_at} watchers={info.watchers} forks={info.forks} key={info.id} />;
        });
        return items;
      } else {
        return reposs.map((info) => {
          return <Items name={info.name} full_name={info.full_name} created_at={info.created_at} updated_at={info.updated_at} pushed_at={info.pushed_at} watchers={info.watchers} forks={info.forks} key={info.id} />;
        });
      }
    }
  }
  render() {
    if (this.props.repos) {
      return (
        <div>
          <Row>
            <Row>
              {this.getItems()}
            </Row>
          </Row>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
function mapStateToProps(state) {
  const { repos } = state.users;
  return { repos };
}

export default connect(mapStateToProps)(Search);
