import React, { PropTypes } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout'

function IndexPage(props) {
  return (
    <MainLayout location={props.location}>
     <div className={styles.normal}>
      {props.children}
     </div>
    </MainLayout>
  );
}
IndexPage.propTypes = {
	IndexPage: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect()(IndexPage);
