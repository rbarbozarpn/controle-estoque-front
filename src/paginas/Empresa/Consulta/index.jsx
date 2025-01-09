import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space, Card, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CustomHeader from '../../Header';

const { Content } = Layout;

const ConsultaEmpresas = () => {
    const [data, setData] = useState([
        {
            id: 1,
            nomeEmpresa: 'Empresa Exemplo 1',
            razaoSocial: 'Razão Social 1',
            cnpj: '00.000.000/0001-01',
            telefone: '(11) 1234-5678',
            email: 'contato@empresa1.com',
            cidade: 'São Paulo',
            estado: 'SP',
            status: 'Ativo',
        },
        {
            id: 2,
            nomeEmpresa: 'Empresa Exemplo 2',
            razaoSocial: 'Razão Social 2',
            cnpj: '00.000.000/0002-02',
            telefone: '(21) 9876-5432',
            email: 'contato@empresa2.com',
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            status: 'Inativo',
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        nomeEmpresa: '',
        cnpj: '',
        cidade: '',
    });

    useEffect(() => {
        fetchData();
    }, [filters]);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Simulação de API (ajuste ao usar dados reais)
            const simulatedResponse = data.filter((item) =>
                Object.keys(filters).every((key) =>
                    filters[key] === '' ? true : item[key].toLowerCase().includes(filters[key].toLowerCase())
                )
            );
            setData(simulatedResponse);
        } catch (error) {
            console.error('Erro ao buscar dados de empresas:', error);
        }
        setLoading(false);
    };

    const handleSearch = (key, value) => {
        setFilters({
            ...filters,
            [key]: value,
        });
    };

    const expandedRowRender = (record) => {
        return (
            <div style={{ padding: '16px' }}>
                <h3>Detalhes da Empresa</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Nome da Empresa:</strong> {record.nomeEmpresa}</p>
                        <p><strong>Razão Social:</strong> {record.razaoSocial}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>CNPJ:</strong> {record.cnpj}</p>
                        <p><strong>Telefone:</strong> {record.telefone}</p>
                        <p><strong>E-mail:</strong> {record.email}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Cidade:</strong> {record.cidade}</p>
                        <p><strong>Estado:</strong> {record.estado}</p>
                        <p><strong>Status:</strong> {record.status}</p>
                    </div>
                </div>
            </div>
        );
    };

    const columns = [
        {
            title: 'Nome da Empresa',
            dataIndex: 'nomeEmpresa',
            key: 'nomeEmpresa',
        },
        {
            title: 'Razão Social',
            dataIndex: 'razaoSocial',
            key: 'razaoSocial',
        },
        {
            title: 'CNPJ',
            dataIndex: 'cnpj',
            key: 'cnpj',
        },
        {
            title: 'Cidade',
            dataIndex: 'cidade',
            key: 'cidade',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Ações',
            key: 'acoes',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary">Editar</Button>
                    <Button type="danger">Excluir</Button>
                </Space>
            ),
        },
    ];

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
                <Card title="Consulta de Empresas" bordered={false}>
                    <Space style={{ marginBottom: 16 }}>
                        <Input
                            placeholder="Nome da Empresa"
                            value={filters.nomeEmpresa}
                            onChange={(e) => handleSearch('nomeEmpresa', e.target.value)}
                            style={{ width: 200 }}
                        />
                        <Input
                            placeholder="CNPJ"
                            value={filters.cnpj}
                            onChange={(e) => handleSearch('cnpj', e.target.value)}
                            style={{ width: 200 }}
                        />
                        <Input
                            placeholder="Cidade"
                            value={filters.cidade}
                            onChange={(e) => handleSearch('cidade', e.target.value)}
                            style={{ width: 200 }}
                        />
                        <Button
                            type="primary"
                            icon={<SearchOutlined />}
                            onClick={fetchData}
                        >
                            Buscar
                        </Button>
                    </Space>
                    <Table
                        columns={columns}
                        dataSource={data}
                        loading={loading}
                        rowKey="id"
                        expandable={{ expandedRowRender }}
                    />
                </Card>
            </Content>
            </CustomHeader>
        </Layout>
    );
};

export default ConsultaEmpresas;
