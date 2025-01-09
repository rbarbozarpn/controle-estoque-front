import React from 'react';
import { Form, Input, Button, Space, Card, Layout, Row, Col } from 'antd';
import CustomHeader from '../../Header';

const { Content } = Layout;

const CadastroLocais = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('Dados do Local:', values);
        // Aqui você pode fazer a requisição para salvar os dados na API
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <CustomHeader>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#f0f2f5' }}>
                    <Card title="Cadastro de Locais de Armazenamento" bordered={false}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                        >
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Form.Item
                                        label="Código do Local"
                                        name="codigo_local"
                                        rules={[{ required: true, message: 'Por favor, insira o código do local!' }]}
                                    >
                                        <Input placeholder="Digite o código do local" />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Zona"
                                        name="zona"
                                        rules={[{ required: true, message: 'Por favor, insira a zona!' }]}
                                    >
                                        <Input placeholder="Digite a zona" />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Corredor"
                                        name="corredor"
                                        rules={[{ required: true, message: 'Por favor, insira o corredor!' }]}
                                    >
                                        <Input placeholder="Digite o corredor" />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Prateleira"
                                        name="prateleira"
                                        rules={[{ required: true, message: 'Por favor, insira a prateleira!' }]}
                                    >
                                        <Input placeholder="Digite a prateleira" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={6}>
                                    <Form.Item
                                        label="Posição"
                                        name="posicao"
                                        rules={[{ required: true, message: 'Por favor, insira a posição!' }]}
                                    >
                                        <Input placeholder="Digite a posição" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item>
                                <Space style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button type="default" onClick={() => form.resetFields()}>
                                        Limpar
                                    </Button>
                                    <Button type="primary" htmlType="submit">
                                        Salvar
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>
                </Content>
            </CustomHeader>
        </Layout>
    );
};

export default CadastroLocais;
