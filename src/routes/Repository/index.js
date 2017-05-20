import React ,{PropTypes}from 'react';
import { connect } from 'dva';
import { Row, Col, Input} from 'antd';
import styles from './Index.css';
import Page from './page';
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
                  <Col span={24}>
                    <Row>
                      <h3>搜索结果</h3>
                    </Row>
                    <Row>
                      <Input type="text" placeholder="输入一个过滤参数" onChange={this.handleChange.bind(this)}/>
                    </Row>
                 </Col>
                </Row>
               </div>
               <Row type="flex" justify="center">
                  <Col span={24} >
                  {this.state.msg}
                  <Page message = {this.props.params.query} pageIndex = "1"  count ="1" keyword = {this.state.msg}></Page>
                  </Col>
               </Row>
           </div>
        )
    }
}
// Repositories.propTypes = {
//   params: PropTypes.object,
// };
function mapStateToProps(state) {
  return { 
    "key":state.repository
   };
}
export default connect(mapStateToProps)(index);
