import React, {PropTypes} from 'react';
import {Row, Col, Icon} from 'antd';
import styles from '../../routes/Users/index.css';

export default class ProfileStat extends React.Component{

    render(){
        const {name,full_name,created_at,updated_at,pushed_at,watchers,forks} = this.props;
        return (
            <div>
            	<Row>
	            	<Col span={20} className={styles.fontLeft}>
		                <p style={{color: 'blue'}}>{name}</p>
		                <p>{full_name}</p>
		                <p>创建时间：{created_at}</p>
		                <p>更新时间：{updated_at}</p>
		                <p>上次更新：{pushed_at}</p>
		                <p></p>
	                </Col>
	                <Col span={4}>
	                	<span><Icon type="star" />watchers {watchers}</span> <span>forks {forks}</span>
	                </Col>
                </Row>
            </div>
        )
    }
}