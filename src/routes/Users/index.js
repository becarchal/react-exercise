import React ,{PropTypes}from 'react';
import { connect } from 'dva';
import { Row, Col, Input} from 'antd';
import styles from './index.css';
import Search from './Search';
import Profile from './Profile';
class index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg :""
        }
    }
    handleChange(event){
        let msg = event.target.value;
        this.setState({
            msg:msg
        })
    }
    render(){

        return (
           <div>
              <div className={styles.normal}>
                <Row>
                  <Col span={11}><Profile username={this.props.params.username}/></Col>
                  <Col span={13}>
                    <Row>
                      <Col span={24}>
                        <Row>
                          <h3>仓库列表</h3>
                        </Row>
                        <Row>
                          <Input type="text" placeholder="输入一个过滤参数" onChange={this.handleChange.bind(this)}/>
                        </Row>
                      </Col>
                    </Row>
                    <Row type="flex" justify="center">
                      <Col span={24} >
                        {this.state.msg}
                        <Search username = {this.props.params.username} keyword = {this.state.msg}></Search>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div> 
           </div>
        );
    }
}

function mapStateToProps(state) {
  return { 
    "key":state.users
   };
}
export default connect(mapStateToProps)(index);

