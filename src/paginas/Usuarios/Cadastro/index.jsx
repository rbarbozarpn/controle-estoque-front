import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    DatePicker,
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

const CadastroFuncionarios = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('Dados do Funcionário:', values);
        // Aqui você pode fazer a requisição para salvar os dados na API
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <CustomHeader>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#f0f2f5' }}>
                <Card title="Cadastro de Funcionários" bordered={false}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        initialValues={{ status: 'ativo' }}
                    >
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Nome Completo"
                                    name="nome"
                                    rules={[{ required: true, message: 'Por favor, insira o nome completo!' }]}
                                >
                                    <Input placeholder="Digite o nome completo" />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="CPF"
                                    name="cpf"
                                    rules={[{ required: true, message: 'Por favor, insira o CPF!' }]}
                                >
                                    <Input placeholder="Digite o CPF" />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="RG"
                                    name="rg"
                                    rules={[{ required: true, message: 'Por favor, insira o RG!' }]}
                                >
                                    <Input placeholder="Digite o RG" />
                                </Form.Item>
                            </Col>
                        </Row>
    
                        <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item
                                    label="Data de Nascimento"
                                    name="dataNascimento"
                                    rules={[{ required: true, message: 'Por favor, selecione a data de nascimento!' }]}
                                >
                                    <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Telefone"
                                    name="telefone"
                                    rules={[{ required: true, message: 'Por favor, insira o telefone!' }]}
                                >
                                    <Input placeholder="Digite o telefone" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Endereço Completo"
                                    name="endereco"
                                    rules={[{ required: true, message: 'Por favor, insira o endereço!' }]}
                                >
                                    <Input placeholder="Digite o endereço completo" />
                                </Form.Item>
                            </Col>
                        </Row>
    
                        <Row gutter={16}>
                            <Col span={4}>
                                <Form.Item
                                    label="Cargo"
                                    name="cargo"
                                    rules={[{ required: true, message: 'Por favor, insira o cargo!' }]}
                                >
                                    <Input placeholder="Digite o cargo" />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    label="Departamento"
                                    name="departamento"
                                >
                                    <Select placeholder="Selecione o departamento">
                                        <Option value="financeiro">Financeiro</Option>
                                        <Option value="rh">Recursos Humanos</Option>
                                        <Option value="ti">Tecnologia da Informação</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    label="Data de Admissão"
                                    name="dataAdmissao"
                                    rules={[{ required: true, message: 'Por favor, selecione a data de admissão!' }]}
                                >
                                    <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    label="Salário"
                                    name="salario"
                                    rules={[{ required: true, message: 'Por favor, insira o salário!' }]}
                                >
                                    <InputNumber
                                        placeholder="Digite o salário"
                                        style={{ width: '100%' }}
                                        formatter={(value) => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        parser={(value) => value.replace(/R\$\s?|(,*)/g, '')}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    label="E-mail Corporativo"
                                    name="email"
                                    rules={[{ required: true, message: 'Por favor, insira o e-mail!' }]}
                                >
                                    <Input placeholder="Digite o e-mail corporativo" />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    label="Status"
                                    name="status"
                                >
                                    <Select>
                                        <Option value="ativo">Ativo</Option>
                                        <Option value="inativo">Inativo</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
    
                        <Row gutter={16}>
                            
                            
                            
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

export default CadastroFuncionarios;
