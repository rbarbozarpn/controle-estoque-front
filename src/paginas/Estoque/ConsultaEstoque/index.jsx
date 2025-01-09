import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space, Card, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CustomHeader from '../../Header';

const { Content } = Layout;

const ConsultaEstoque = () => {
    const [data, setData] = useState([
        {
            id: 1,
            codigoItem: 'ITEM001',
            nomeItem: 'Produto A',
            codigoLocal: 'LOC001',
            zona: 'Zona A',
            corredor: 'Corredor 1',
            prateleira: 'Prateleira 2',
            posicao: 'Posição 5',
            quantidade: 100,
            unidade: 'kg',
            status: 'Ativo',
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        codigoItem: '',
        nomeItem: '',
        codigoLocal: '',
    });

    useEffect(() => {
        fetchData();
    }, [filters]);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Simulação de API (remova ou ajuste ao usar dados reais)
            const simulatedResponse = [
                {
                    id: 1,
                    codigoItem: 'ITEM001',
                    nomeItem: 'Produto A',
                    codigoLocal: 'LOC001',
                    zona: 'Zona A',
                    corredor: 'Corredor 1',
                    prateleira: 'Prateleira 2',
                    posicao: 'Posição 5',
                    quantidade: 100,
                    unidade: 'kg',
                    status: 'Ativo',
                },
                {
                    id: 2,
                    codigoItem: 'ITEM002',
                    nomeItem: 'Produto B',
                    codigoLocal: 'LOC002',
                    zona: 'Zona B',
                    corredor: 'Corredor 3',
                    prateleira: 'Prateleira 1',
                    posicao: 'Posição 8',
                    quantidade: 50,
                    unidade: 'unidade',
                    status: 'Inativo',
                },
            ];
            setData(simulatedResponse); // Use dados reais se necessário
        } catch (error) {
            console.error('Erro ao buscar dados de estoque:', error);
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
                <h3>Detalhes do Estoque</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Código do Item:</strong> {record.codigoItem}</p>
                        <p><strong>Nome do Item:</strong> {record.nomeItem}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Código do Local:</strong> {record.codigoLocal}</p>
                        <p><strong>Zona:</strong> {record.zona}</p>
                        <p><strong>Corredor:</strong> {record.corredor}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Prateleira:</strong> {record.prateleira}</p>
                        <p><strong>Posição:</strong> {record.posicao}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Quantidade:</strong> {record.quantidade}</p>
                        <p><strong>Unidade:</strong> {record.unidade}</p>
                        <p><strong>Status:</strong> {record.status}</p>
                    </div>
                </div>
            </div>
        );
    };

    const columns = [
        {
            title: 'Código do Item',
            dataIndex: 'codigoItem',
            key: 'codigoItem',
        },
        {
            title: 'Nome do Item',
            dataIndex: 'nomeItem',
            key: 'nomeItem',
        },
        {
            title: 'Código do Local',
            dataIndex: 'codigoLocal',
            key: 'codigoLocal',
        },
        {
            title: 'Quantidade',
            dataIndex: 'quantidade',
            key: 'quantidade',
        },
        {
            title: 'Unidade',
            dataIndex: 'unidade',
            key: 'unidade',
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
                    <Card title="Consulta de Estoque" bordered={false}>
                        <Space style={{ marginBottom: 16 }}>
                            <Input
                                placeholder="Código do Item"
                                value={filters.codigoItem}
                                onChange={(e) => handleSearch('codigoItem', e.target.value)}
                                style={{ width: 200 }}
                            />
                            <Input
                                placeholder="Nome do Item"
                                value={filters.nomeItem}
                                onChange={(e) => handleSearch('nomeItem', e.target.value)}
                                style={{ width: 200 }}
                            />
                            <Input
                                placeholder="Código do Local"
                                value={filters.codigoLocal}
                                onChange={(e) => handleSearch('codigoLocal', e.target.value)}
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

export default ConsultaEstoque;
