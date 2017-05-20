import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { Form, Input, Button} from 'antd';
import styles from './Userform.css';

const UserSearch = ({
  // keyword,
  searchlabel,
  placeholder,
  onSearch,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    },
  }) => {
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      onSearch(getFieldsValue());
    });
  }
  return (
    <div className={styles.normal}>
      <div className={styles.search}>
        <Form inline onSubmit={handleSubmit}>
          <Form.Item label={searchlabel} labelCol={{span: 8}} wrapperCol={{span: 16}} hasFeedback className={styles.antFormItem}>
            {getFieldDecorator('keyword', {
              initialValue: '',
            })(
              <Input type="text"  placeholder={placeholder} className={styles.inputstyle}/>
            )}
          </Form.Item>
          <Button style={{ marginRight: '10px' }} type="primary" htmlType="submit">GO</Button>
        </Form>
      </div>
    </div>
  );
};

UserSearch.propTypes = {
  form: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
  keyword: PropTypes.string,
};

export default Form.create()(UserSearch);
