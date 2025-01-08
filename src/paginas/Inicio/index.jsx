import React from 'react';
import { Layout, Typography, Button } from 'antd';
import 'antd/dist/reset.css';
import CustomHeader from '../Header';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Inicio = () => {
    return (
        <CustomHeader >
            <Layout className="layout">
                
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content" style={{ marginTop: '50px' }}>
                            <Title>Bem-vindo ao Controle de Estoque</Title>
                            <Paragraph>
                                Esta é a página inicial do seu sistema de controle de estoque. Utilize o menu para navegar pelas diferentes seções.
                            </Paragraph>
                            <Button type="primary" size="large">Começar</Button>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Controle de Estoque ©2025 By Rafael Barboza</Footer>
                
            </Layout>
        </CustomHeader>
    );
};

export default Inicio;