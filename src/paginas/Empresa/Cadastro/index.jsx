import React from 'react';
import { Form, Input, Button, Card, Space, Select, Layout, Row, Col } from 'antd';
import { SaveOutlined, ClearOutlined, RollbackOutlined } from '@ant-design/icons';
import CustomHeader from '../../Header';

const { Content } = Layout;
const { Option } = Select;

const CadastroEmpresas = () => {
    const [form] = Form.useForm();

    const handleSave = (values) => {
        console.log('Dados da empresa:', values);
        // Adicione a lógica para salvar os dados via API aqui
    };

    const handleClear = () => {
        form.resetFields();
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <CustomHeader>
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#f0f2f5',
                    minHeight: 'calc(100vh - 64px)',
                }}
            >
                <Card title="Cadastro de Empresas" bordered={false}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSave}
                    >
                        {/* Informações Gerais */}
                        <h3>Informações Gerais</h3>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Nome da Empresa"
                                    name="nomeEmpresa"
                                    rules={[{ required: true, message: 'Por favor, insira o nome da empresa' }]}
                                >
                                    <Input placeholder="Ex.: Empresa Exemplo LTDA" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Razão Social"
                                    name="razaoSocial"
                                    rules={[{ required: true, message: 'Por favor, insira a razão social' }]}
                                >
                                    <Input placeholder="Ex.: Empresa Exemplo LTDA" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item
                                    label="CNPJ"
                                    name="cnpj"
                                    rules={[{ required: true, message: 'Por favor, insira o CNPJ' }]}
                                >
                                    <Input placeholder="Ex.: 00.000.000/0000-00" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Inscrição Estadual"
                                    name="inscricaoEstadual"
                                >
                                    <Input placeholder="Ex.: 123456789" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Inscrição Municipal"
                                    name="inscricaoMunicipal"
                                >
                                    <Input placeholder="Ex.: 987654321" />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Contato */}
                        <h3>Contato</h3>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item
                                    label="Telefone"
                                    name="telefone"
                                    rules={[{ required: true, message: 'Por favor, insira o telefone' }]}
                                >
                                    <Input placeholder="Ex.: (11) 1234-5678" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="E-mail"
                                    name="email"
                                    rules={[
                                        { type: 'email', message: 'Insira um e-mail válido' },
                                        { required: true, message: 'Por favor, insira o e-mail' },
                                    ]}
                                >
                                    <Input placeholder="Ex.: contato@empresa.com" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Celular"
                                    name="celular"
                                >
                                    <Input placeholder="Ex.: (11) 98765-4321" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Nome do Responsável"
                                    name="responsavel"
                                >
                                    <Input placeholder="Ex.: João da Silva" />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Endereço */}
                        <h3>Endereço</h3>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item
                                    label="CEP"
                                    name="cep"
                                    rules={[{ required: true, message: 'Por favor, insira o CEP' }]}
                                >
                                    <Input placeholder="Ex.: 12345-678" />
                                </Form.Item>
                            </Col>
                            <Col span={16}>
                                <Form.Item
                                    label="Logradouro"
                                    name="logradouro"
                                    rules={[{ required: true, message: 'Por favor, insira o logradouro' }]}
                                >
                                    <Input placeholder="Ex.: Rua Exemplo" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={4}>
                                <Form.Item
                                    label="Número"
                                    name="numero"
                                    rules={[{ required: true, message: 'Por favor, insira o número' }]}
                                >
                                    <Input placeholder="Ex.: 123" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Complemento"
                                    name="complemento"
                                >
                                    <Input placeholder="Ex.: Sala 5" />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Bairro"
                                    name="bairro"
                                    rules={[{ required: true, message: 'Por favor, insira o bairro' }]}
                                >
                                    <Input placeholder="Ex.: Centro" />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Cidade"
                                    name="cidade"
                                    rules={[{ required: true, message: 'Por favor, insira a cidade' }]}
                                >
                                    <Input placeholder="Ex.: São Paulo" />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Estado"
                                    name="estado"
                                    rules={[{ required: true, message: 'Por favor, insira o estado' }]}
                                >
                                    <Select placeholder="Selecione">
                                        <Option value="SP">São Paulo</Option>
                                        <Option value="RJ">Rio de Janeiro</Option>
                                        <Option value="MG">Minas Gerais</Option>
                                        {/* Adicione os outros estados aqui */}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Outras Informações */}
                        <h3>Outras Informações</h3>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Tipo de Empresa"
                                    name="tipoEmpresa"
                                    rules={[{ required: true, message: 'Por favor, selecione o tipo de empresa' }]}
                                >
                                    <Select placeholder="Selecione">
                                        <Option value="mei">MEI</Option>
                                        <Option value="epp">EPP</Option>
                                        <Option value="me">ME</Option>
                                        <Option value="ltda">LTDA</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Observações"
                                    name="observacoes"
                                >
                                    <Input.TextArea rows={4} placeholder="Insira observações adicionais" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Space style={{ marginTop: '16px' }}>
                            <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                                Salvar
                            </Button>
                            <Button onClick={handleClear} icon={<ClearOutlined />}>
                                Limpar
                            </Button>
                            <Button icon={<RollbackOutlined />}>
                                Voltar
                            </Button>
                        </Space>
                    </Form>
                </Card>
            </Content>
            </CustomHeader>
        </Layout>
    );
};

export default CadastroEmpresas;
