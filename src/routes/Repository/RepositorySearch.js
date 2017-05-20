import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { Form, Input, Button} from 'antd';
import styles from '../../components/Common/Userform.css';
import Repositoryform from '../../components/Common/Userform';

function UserSearch(props) {
  const repositorySearchProps = {
    searchlabel: 'GitHub repositories:',
    placeholder: 'Please enter a GitHub Record...',
    onSearch(fieldsValue) {
      props.dispatch(routerRedux.push({
        pathname: `/repository/${fieldsValue.keyword}`,
      }));
    },
  };
  return (
    <div>
      <Repositoryform {...repositorySearchProps}/>
    </div>
  );
}

UserSearch.propTypes = {

};

export default connect()(UserSearch);
