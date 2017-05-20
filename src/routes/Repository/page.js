import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Button} from 'antd';
import Items from "../../components/Repository/items";
import styles from './Index.css';

class page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message: this.props.message,
            indexPage:1,
            count:20
        }
    }
    componentWillMount() {
      var message = this.state.message;
      var indexPage = this.state.indexPage;
      var count = this.state.count;
      this.props.dispatch({
          type: 'repository/queryrepos',
          payload: {message, indexPage, count},
      });
        // this.props.dispatch(SearchMsg(this.state.message,this.state.indexPage,this.state.count));
    }
    // componentWillUpdate(nextProps) {
    //     if (nextProps.username != this.props.username) {
    //         this.props.dispatch(SearchMsg(nextProps.message,nextProps.indexPage,nextProps.count));
    //     }
    // }
    handleClick(){
        var obj = {};
        obj.message = this.state.message;
        obj.indexPage = this.state.indexPage>1?this.state.indexPage-1:1;
        obj.count = this.state.count;
        this.setState(Object.assign({},this.state,obj));
        var message = this.state.message;
        var indexPage = obj.indexPage;
        var count = this.state.count;
        this.props.dispatch({
          type: 'repository/queryrepos',
          payload: {message, indexPage, count},
        });
    }
    handleOnClcik(){
        var obj = {};
        obj.message = this.state.message;
        obj.indexPage = this.state.indexPage+1;
        obj.count = this.state.count;
        this.setState(Object.assign({},this.state,obj));
        var message = this.state.message;
        var indexPage = obj.indexPage;
        var count = this.state.count;
        this.props.dispatch({
          type: 'repository/queryrepos',
          payload: {message, indexPage, count},
        });
    }

    getItems(){
       let repos = this.props.repo.items;
        let that=this;
        if(repos){
            if(this.props.keyword){
                var items = repos.filter(function(info) {
                    return info.name.toLowerCase().indexOf(that.props.keyword.toLowerCase()) > -1;
                }).map(info=> {
                    return <Items name = {info.name} full_name ={info.full_name}  created_at = {info.created_at} updated_at = {info.updated_at} pushed_at = {info.pushed_at} watchers = {info.watchers} forks = {info.forks} description = {info.description} key ={info.id}></Items>
                })
            return items
            }else{
                return repos.map(info=> {
                    return <Items name = {info.name} full_name ={info.full_name}  created_at = {info.created_at} updated_at = {info.updated_at} pushed_at = {info.pushed_at} watchers = {info.watchers} forks = {info.forks} description = {info.description} key ={info.id}></Items>
                })
            }
        }

    }
    render(){
      if (this.props.repo) {
        var totalPage = parseInt(this.props.repo.total_count/20);
        return (
          <div>
            <Row type="flex" justify="center">
              <Col span={24}>
                <br/>
                 <Button className={styles.fl} type="primary" onClick ={this.handleClick.bind(this)}>上一页</Button>
                <p className={styles.center}>命中记录数：<span className={styles.font}>{this.props.repo.total_count}</span> 条数据，共<span className={styles.font}>{totalPage}</span> 页，当前是第<span className={styles.font}>{this.state.indexPage}</span> 页，每页显示<span className={styles.font}>{this.state.count}</span> 条记录</p>
                 <Button  className={styles.fr} type="primary" onClick ={this.handleOnClcik.bind(this)}>下一页</Button>
              </Col>
            </Row>
            <div>{this.getItems()}</div>
          </div>
        );
      } else {
        return (<div></div>);
      }
    }
}
function mapStateToProps(state) {
  const {repo} = state.repository;
  return { repo };
}
export default connect(mapStateToProps)(page);