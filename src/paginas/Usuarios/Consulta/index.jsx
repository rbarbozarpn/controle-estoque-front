import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Select, Space, Card, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CustomHeader from '../../Header';

const { Option } = Select;
const { Content } = Layout;

const ConsultaFuncionarios = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        nome: '',
        cargo: '',
        status: '',
    });

    useEffect(() => {
        fetchData();
    }, [filters]);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Simulação de API (substituir pelos dados reais)
            const simulatedResponse = [
                {
                    id: 1,
                    nome: 'João Silva',
                    cargo: 'Gerente',
                    email: 'joao.silva@example.com',
                    telefone: '(11) 98765-4321',
                    status: 'Ativo',
                    dataAdmissao: '2023-01-15',
                    observacoes: 'Funcionário com bom desempenho.',
                },
                {
                    id: 2,
                    nome: 'Maria Oliveira',
                    cargo: 'Analista',
                    email: 'maria.oliveira@example.com',
                    telefone: '(11) 91234-5678',
                    status: 'Inativo',
                    dataAdmissao: '2022-05-20',
                    observacoes: 'Deixou a empresa em dezembro de 2024.',
                },
            ];
            setData(simulatedResponse); // Use dados reais aqui
        } catch (error) {
            console.error('Erro ao buscar funcionários:', error);
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
                <h3>Detalhes do Funcionário</h3>
                <p>
                    <strong>Nome:</strong> {record.nome} &nbsp;|&nbsp; &nbsp;
                    <strong>Cargo:</strong> {record.cargo} &nbsp;|&nbsp; &nbsp;
                    <strong>Email:</strong> {record.email} &nbsp;|&nbsp; &nbsp;
                    <strong>Telefone:</strong> {record.telefone} &nbsp;|&nbsp; &nbsp;
                    <strong>Data de Admissão:</strong> {record.dataAdmissao} &nbsp;|&nbsp; &nbsp;
                    <strong>Observações:</strong> {record.observacoes}
                </p>
            </div>
        );
    };

    const columns = [
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome',
        },
        {
            title: 'Cargo',
            dataIndex: 'cargo',
            key: 'cargo',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Telefone',
            dataIndex: 'telefone',
            key: 'telefone',
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
                    <Card title="Consulta de Funcionários" bordered={false}>
                        <Space style={{ marginBottom: 16 }}>
                            <Input
                                placeholder="Nome"
                                value={filters.nome}
                                onChange={(e) => handleSearch('nome', e.target.value)}
                                style={{ width: 200 }}
                            />
                            <Input
                                placeholder="Matrícula"
                                value={filters.matricula}
                                onChange={(e) => handleSearch('matricula', e.target.value)}
                                style={{ width: 200 }}
                            />
                            <Select
                                placeholder="Cargo"
                                value={filters.cargo}
                                onChange={(value) => handleSearch('cargo', value)}
                                style={{ width: 200 }}
                            >
                                <Option value="">Todos</Option>
                                <Option value="Gerente">Gerente</Option>
                                <Option value="Analista">Analista</Option>
                                <Option value="Assistente">Assistente</Option>
                            </Select>
                            <Select
                                placeholder="Status"
                                value={filters.status}
                                onChange={(value) => handleSearch('status', value)}
                                style={{ width: 200 }}
                            >
                                <Option value="">Todos</Option>
                                <Option value="Ativo">Ativo</Option>
                                <Option value="Inativo">Inativo</Option>
                            </Select>
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

export default ConsultaFuncionarios;
