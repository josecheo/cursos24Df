import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './administrador.scss';
import { Layout, Menu } from 'antd';

import {
  UserOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import ListAlumnos from './lista-alumnos';



const { Sider, } = Layout;


const Adminsitrador: React.FC = () => {
  const [module, setModule] = useState(0)

  return (
    <Layout>
      <Sider width={300} className="site-layout-background">
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100vh', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<BarChartOutlined />} onClick={() => setModule(0)}>
            Listado de alumnos
          </Menu.Item>
          <Menu.Item key="2" onClick={() => setModule(1)} icon={<UserOutlined />}>
            Gestion de Cursos
          </Menu.Item>
        </Menu>
      </Sider>
      {console.log("module", module)}
      {module === 0 && (
        <ListAlumnos />
      )}

    </Layout >


  );

}

export default Adminsitrador
