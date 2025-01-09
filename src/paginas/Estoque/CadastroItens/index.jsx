import React from 'react';
import { Form, Select, Button, Space, Card, Layout, Row, Col } from 'antd';
import CustomHeader from '../../Header';

const { Content } = Layout;
const { Option } = Select;

const AssociarItens = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('Associação de Item:', values);
        // Aqui você pode fazer a requisição para associar o item ao local
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <CustomHeader>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#f0f2f5' }}>
                    <Card title="Cadastro de Itens aos Locais" bordered={false}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                        >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Selecione o Item"
                                        name="item"
                                        rules={[{ required: true, message: 'Por favor, selecione o item!' }]}
                                    >
                                        <Select placeholder="Selecione um item">
                                            <Option value="item1">Item 1</Option>
                                            <Option value="item2">Item 2</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Selecione o Local"
                                        name="local"
                                        rules={[{ required: true, message: 'Por favor, selecione o local!' }]}
                                    >
                                        <Select placeholder="Selecione um local">
                                            <Option value="local1">Local 1</Option>
                                            <Option value="local2">Local 2</Option>
                                        </Select>
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

export default AssociarItens;
