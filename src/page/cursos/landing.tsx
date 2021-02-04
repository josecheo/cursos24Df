import React, { useState } from 'react';
import './landing.scss'
import 'antd/dist/antd.css';
import { Input, Typography, Button, Checkbox } from 'antd';

import { UserOutlined, PhoneOutlined, MailOutlined, SendOutlined, RocketOutlined, EnvironmentOutlined } from '@ant-design/icons';
const LandingPage: React.FC = () => {
  const [loadings, setLoadings] = useState(false)
  const { Title } = Typography;

  const onChange = (e: { target: { checked: any; }; }) => {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <div className='wrapp'>
      <div className='wrapp__container-lef'>
      </div>
      <div className='wrapp__container-rigth'>
        <div className='wrapp__container-rigth-card'>
          <Title>Inscribete ahora!</Title>
          <Title style={{ color: 'gray' }} level={5}>Dejanos tus datos, estaremos llamandote en unos minutos para facilitarle mas información sobre nuestros cursos</Title>
          <br />
          <Input style={{ borderRadius: '10px' }} size="large" placeholder="Nombre" prefix={<UserOutlined />} />
          <br />
          <Input style={{ borderRadius: '10px' }} size="large" placeholder="Telefono " prefix={<PhoneOutlined />} />
          <br />
          <Input style={{ borderRadius: '10px' }} size="large" placeholder="Ciudad " prefix={<EnvironmentOutlined />} />
          <br />
          <Input style={{ borderRadius: '10px' }} size="large" placeholder="Correo " prefix={<MailOutlined />} />
          <br />
          <Input style={{ borderRadius: '10px' }} size="large" placeholder="Codigo de promoción " prefix={<RocketOutlined />} />
          <br />
          <Checkbox style={{ color: 'gray' }} onChange={(e) => onChange(e)}>Quiero recibir mas información relacionada con los cursos y servcios de 24d.pe</Checkbox>
          <br />
          <Button
            style={{ width: '100%' }}
            size='large'
            type="primary"
            icon={<SendOutlined />}
            loading={loadings}
            disabled={true}
            onClick={() => setLoadings(!loadings)}
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
