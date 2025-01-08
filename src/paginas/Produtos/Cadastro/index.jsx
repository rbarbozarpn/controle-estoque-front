import React from 'react';
import { Layout, Form, Input, Button, Select, InputNumber, Upload, Switch, Row, Col, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import CustomHeader from '../../Header';

const { Content } = Layout;
const { Option } = Select;

const ProdutoCadastro = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <CustomHeader>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#f0f2f5', minHeight: 'calc(100vh - 64px)' }}>
                <Card title="Cadastro de Produtos" bordered={false}>
                    <Form
                        name="produto_cadastro"
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <h2>Dados Básicos</h2>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Nome do Produto"
                                    name="nomeProduto"
                                    rules={[{ required: true, message: 'Por favor, insira o nome do produto!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Código ou SKU"
                                    name="codigoSKU"
                                    rules={[{ required: true, message: 'Por favor, insira o código ou SKU!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Categoria"
                                    name="categoria"
                                    rules={[{ required: true, message: 'Por favor, selecione a categoria!' }]}
                                >
                                    <Select placeholder="Selecione uma categoria">
                                        <Option value="categoria1">Categoria 1</Option>
                                        <Option value="categoria2">Categoria 2</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Marca"
                                    name="marca"
                                    rules={[{ required: true, message: 'Por favor, insira a marca!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            label="Descrição"
                            name="descricao"
                        >
                            <Input.TextArea />
                        </Form.Item>

                        <h2>Detalhes Específicos</h2>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Unidade de Medida"
                                    name="unidadeMedida"
                                    rules={[{ required: true, message: 'Por favor, insira a unidade de medida!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Preço de Custo"
                                    name="precoCusto"
                                    rules={[{ required: true, message: 'Por favor, insira o preço de custo!' }]}
                                >
                                    <InputNumber min={0} style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Preço de Venda"
                                    name="precoVenda"
                                    rules={[{ required: true, message: 'Por favor, insira o preço de venda!' }]}
                                >
                                    <InputNumber min={0} style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Quantidade em Estoque"
                                    name="quantidadeEstoque"
                                    rules={[{ required: true, message: 'Por favor, insira a quantidade em estoque!' }]}
                                >
                                    <InputNumber min={0} style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Estoque Mínimo"
                                    name="estoqueMinimo"
                                    rules={[{ required: true, message: 'Por favor, insira o estoque mínimo!' }]}
                                >
                                    <InputNumber min={0} style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <h2>Impostos e Fiscal</h2>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item
                                    label="NCM (Código Fiscal)"
                                    name="ncm"
                                    rules={[{ required: true, message: 'Por favor, insira o NCM!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="CFOP"
                                    name="cfop"
                                    rules={[{ required: true, message: 'Por favor, insira o CFOP!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="CST/CSOSN"
                                    name="cstCsosn"
                                    rules={[{ required: true, message: 'Por favor, insira o CST/CSOSN!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={8}>

                                <h2>Imagens</h2>
                                <Form.Item
                                    label="Upload de Imagem do Produto"
                                    name="imagemProduto"
                                >
                                    <Upload name="imagem" listType="picture" maxCount={1}>
                                        <Button icon={<UploadOutlined />}>Upload</Button>
                                    </Upload>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <h2>Outros</h2>
                                <Form.Item
                                    label="Status"
                                    name="status"
                                    valuePropName="checked"
                                >
                                    <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" />
                                    
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            label="Observações adicionais"
                            name="observacoes"
                        >
                            <Input.TextArea />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Cadastrar Produto
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Content>
            </CustomHeader>
        </Layout>
    );
};

export default ProdutoCadastro;