import React, {PropTypes} from 'react';
import {connect} from 'dva';
import {Row, Col} from 'antd';
import ProfileStat from '../../components/Users/ProfileStat';
import styles from './index.css';
function Profile({ location, dispatch, username, datalist, orgs}) {
    // dispatch({
    //   type: 'users/query',
    //   payload: username,
    // });
    // function renderOrgs(orgs) {
    //   return orgs.map(org=> {
    //       return (
    //           <img src={org.avatar_url} alt="avatar_url" key ={org.avatar_url}/>
    //       )
    //   });
    // }
        // const {user, org} = this.props.userInfo;
    if (datalist) {
      return (
        <div>
          <Row>
              <img src={datalist.avatar_url} alt={datalist.avatar_url} className={styles.img}/>
              <h2>{datalist.name}</h2>
              <h5>{datalist.login}</h5>
          </Row>
          <Row>
              <Row>
                  <Col span={8}>
                      <ProfileStat value={datalist.followers} label="followers"/>
                  </Col>
                  <Col span={8}>
                      <ProfileStat value={datalist.public_repos} label="repos"/>
                  </Col>
                  <Col span={8}>
                      <ProfileStat value={datalist.following} label="following"/>
                  </Col>
              </Row>
          </Row>
        </div>
      );
    } else {
      return (<div></div>);
    }
}

Profile.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  username: PropTypes.string
};

function mapStateToProps(state) {
  const {datalist, orgs} = state.users;
  return { datalist, orgs};
}

export default connect(mapStateToProps)(Profile);