import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    InputNumber,
    Space,
    Card,
    Layout,
    Row,
    Col
} from 'antd';
import CustomHeader from '../../Header';

const { Content } = Layout;
const { Option } = Select;

const CadastroEnderecamento = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('Dados do Endereçamento:', values);
        // Aqui você pode fazer a requisição para salvar os dados na API
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <CustomHeader>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#f0f2f5' }}>
                    <Card title="Cadastro de Endereçamento de Estoque" bordered={false}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                            initialValues={{ status_endereco: 'ativo' }}
                        >
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Form.Item
                                        label="Código do Endereço"
                                        name="codigo_endereco"
                                        rules={[{ required: true, message: 'Por favor, insira o código do endereço!' }]}
                                    >
                                        <Input placeholder="Digite o código do endereço" />
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
                                <Col span={6}>
                                    <Form.Item
                                        label="Capacidade"
                                        name="capacidade"
                                        rules={[{ required: true, message: 'Por favor, insira a capacidade!' }]}
                                    >
                                        <InputNumber
                                            placeholder="Digite a capacidade"
                                            style={{ width: '100%' }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Tipo de Armazenamento"
                                        name="tipo_armazenamento"
                                    >
                                        <Select placeholder="Selecione o tipo de armazenamento">
                                            <Option value="unidades">Unidades</Option>
                                            <Option value="pallets">Pallets</Option>
                                            <Option value="caixas">Caixas</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Status do Endereço"
                                        name="status_endereco"
                                    >
                                        <Select>
                                            <Option value="ativo">Ativo</Option>
                                            <Option value="inativo">Inativo</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={6}>
                                    <Form.Item
                                        label="Produto(s) Associado(s)"
                                        name="produtos_associados"
                                    >
                                        <Input placeholder="Associe os produtos aqui" />
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

export default CadastroEnderecamento;
