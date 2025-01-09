import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space, Card, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CustomHeader from '../../Header';

const { Content } = Layout;

const ConsultaLocais = () => {
    const [data, setData] = useState([
        {
            id: 1,
            codigoLocal: 'LOC001',
            zona: 'Zona A',
            corredor: 'Corredor 1',
            prateleira: 'Prateleira 2',
            posicao: 'Posição 5',
            status: 'Ativo',
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        codigoLocal: '',
        zona: '',
        status: '',
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
                    codigoLocal: 'LOC001',
                    zona: 'Zona A',
                    corredor: 'Corredor 1',
                    prateleira: 'Prateleira 2',
                    posicao: 'Posição 5',
                    status: 'Ativo',
                },
                {
                    id: 2,
                    codigoLocal: 'LOC002',
                    zona: 'Zona B',
                    corredor: 'Corredor 3',
                    prateleira: 'Prateleira 1',
                    posicao: 'Posição 8',
                    status: 'Inativo',
                },
            ];
            setData(simulatedResponse); // Use dados reais se necessário
        } catch (error) {
            console.error('Erro ao buscar locais:', error);
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
                <h3>Detalhes do Local</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Código do Local:</strong> {record.codigoLocal}</p>
                        <p><strong>Zona:</strong> {record.zona}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Corredor:</strong> {record.corredor}</p>
                        <p><strong>Prateleira:</strong> {record.prateleira}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Posição:</strong> {record.posicao}</p>
                        <p><strong>Status:</strong> {record.status}</p>
                    </div>
                </div>
            </div>
        );
    };

    const columns = [
        {
            title: 'Código do Local',
            dataIndex: 'codigoLocal',
            key: 'codigoLocal',
        },
        {
            title: 'Zona',
            dataIndex: 'zona',
            key: 'zona',
        },
        {
            title: 'Corredor',
            dataIndex: 'corredor',
            key: 'corredor',
        },
        {
            title: 'Prateleira',
            dataIndex: 'prateleira',
            key: 'prateleira',
        },
        {
            title: 'Posição',
            dataIndex: 'posicao',
            key: 'posicao',
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
                    <Card title="Consulta de Locais" bordered={false}>
                        <Space style={{ marginBottom: 16 }}>
                            <Input
                                placeholder="Código do Local"
                                value={filters.codigoLocal}
                                onChange={(e) => handleSearch('codigoLocal', e.target.value)}
                                style={{ width: 200 }}
                            />
                            <Input
                                placeholder="Zona"
                                value={filters.zona}
                                onChange={(e) => handleSearch('zona', e.target.value)}
                                style={{ width: 200 }}
                            />
                            <Input
                                placeholder="Status"
                                value={filters.status}
                                onChange={(e) => handleSearch('status', e.target.value)}
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

export default ConsultaLocais;
