import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { Form, Input, Button} from 'antd';
import Userform from '../../components/Common/Userform';

function UserSearch(props) {
  const userSearchProps = {
    searchlabel: 'GitHub user:',
    placeholder: 'Please enter a GitHub user...',
    onSearch(fieldsValue) {
      props.dispatch(routerRedux.push({
        pathname: `/users/${fieldsValue.keyword}`,
      }));
    },
  };
  return (
    <div>
      <Userform {...userSearchProps}/>
    </div>
  );
}

UserSearch.propTypes = {

};

export default connect()(UserSearch);
