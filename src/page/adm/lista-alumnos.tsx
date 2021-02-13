import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './administrador.scss';
import { Layout, Select, Table } from 'antd';
import Title from 'antd/lib/typography/Title';

const { Content, } = Layout;
const columns = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'Telefono',
    dataIndex: 'telefono',
    key: 'telefono',
  },
  {
    title: 'Ciudad',
    dataIndex: 'ciudad',
    key: 'ciudad',
  },
  {
    title: 'Correo',
    dataIndex: 'correo',
    key: 'correo',
  },
  {
    title: 'Codigo Promoción',
    dataIndex: 'codigo_promocion',
    key: 'codigo_promocion',
  },
  {
    title: 'Curso',
    dataIndex: 'curso',
    key: 'curso',
  },
];

const ListAlumnos: React.FC = () => {
  const { Option } = Select;
  const [listaCursos] = useState([{
    value: 'Curso de Linux',
    name: 'Curso de Linux'
  }])
  const [data, setData] = useState([])
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://nodecursos24d.herokuapp.com/customers',
    headers: {
      'Content-Type': 'application/json'
    }
  };


  useEffect(() => {
    axios(config)
      .then(function (response: { data: any; }) {
        const data = response.data.map((item: any) => {
          return {
            nombre: item.nombre,
            telefono: item.telefono,
            ciudad: item.ciudad,
            correo: item.correo,
            codigo_promocion: item.codigo_promocion,
            curso: item.idcurso
          }
        })
        setData(data)

      })
      .catch(function (error: any) {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Title>Listados de Alumnos</Title>
        <div>
          <Select defaultValue="Filtrar por cursos" style={{ width: 400 }} onChange={() => { }}>
            {listaCursos.map((item: any) => {
              return (
                <Option value={item.value}>{item.name}</Option>
              )
            })}
          </Select>
        </div>
      </div>
      <div style={{ marginTop: '29px' }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </Content>

  );

}

export default ListAlumnos
