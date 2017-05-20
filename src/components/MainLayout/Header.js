import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/users">
        <Link to="/users">用户搜索</Link>
      </Menu.Item>
      <Menu.Item key="/repository">
        <Link to="/repository">仓库搜索</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;