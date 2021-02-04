import React, { useEffect, useState } from 'react';
import './landing.scss'
import 'antd/dist/antd.css';
import { Input, Typography, Button, Checkbox } from 'antd';

import { UserOutlined, PhoneOutlined, MailOutlined, SendOutlined, RocketOutlined, EnvironmentOutlined } from '@ant-design/icons';

const initialForm = {
  nombre: '',
  telefono: '',
  ciudad: '',
  correo: '',
  codigo_promocion: '',
  idcurso: 1
}
const LandingPage: React.FC = () => {
  const [loadings, setLoadings] = useState(false)
  const { Title } = Typography;
  const [isDisable, setIsDisable] = useState(true)
  const [form, setForm] = useState(initialForm)

  const onChange = (e: any) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

  }

  const handleSubmit = () => {
    setLoadings(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(form);

    var requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/customers", requestOptions)
      .then(response => response.text())
      .then(() => {
        setLoadings(false)
        setForm(initialForm)
      })
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    if (form.nombre !== '' && form.telefono !== '' && form.ciudad !== '' && form.correo !== '') {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }, [form])

  return (
    <div className='wrapp'>
      {console.log('form', form)}
      <div className='wrapp__container-lef'>
      </div>
      <div className='wrapp__container-rigth'>
        <div className='wrapp__container-rigth-card'>
          <Title>Inscribete ahora!</Title>
          <Title style={{ color: 'gray' }} level={5}>Dejanos tus datos, estaremos llamandote en unos minutos para facilitarle mas información sobre nuestros cursos</Title>
          <br />
          <Input value={form.nombre}
            onChange={(e) => onChange(e)}
            style={{ borderRadius: '10px' }}
            size="large" placeholder="Nombre"
            name='nombre' prefix={<UserOutlined />} />
          <br />
          <Input value={form.telefono}
            onChange={(e) => onChange(e)}
            style={{ borderRadius: '10px' }}
            size="large" placeholder="Telefono" name='telefono' prefix={<PhoneOutlined />}
          />
          <br />
          <Input value={form.ciudad}
            onChange={(e) => onChange(e)}
            style={{ borderRadius: '10px' }}
            size="large" placeholder="Ciudad"
            name='ciudad' prefix={<EnvironmentOutlined />}
          />
          <br />
          <Input value={form.correo}
            onChange={(e) => onChange(e)}
            style={{ borderRadius: '10px' }}
            size="large" placeholder="Correo "
            name='correo' prefix={<MailOutlined />}
          />
          <br />
          <Input value={form.codigo_promocion}
            onChange={(e) => onChange(e)}
            style={{ borderRadius: '10px' }}
            size="large" placeholder="Codigo de promoción "
            name='codigo_promocion' prefix={<RocketOutlined />}
          />
          <br />
          <Checkbox style={{ color: 'gray' }} onChange={(e) => onChange(e)}>Quiero recibir mas información relacionada con los cursos y servcios de 24d.pe</Checkbox>
          <br />
          <Button
            style={{ width: '100%' }}
            size='large'
            type="primary"
            icon={<SendOutlined />}
            loading={loadings}
            disabled={isDisable}
            onClick={() => handleSubmit()}
          >
            Enviar
        </Button>
          <br />
        </div>
      </div>
    </div >
  );
}

export default LandingPage
