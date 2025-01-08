import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Select, Space, Card, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CustomHeader from '../../Header';

const { Option } = Select;
const { Content } = Layout;

const ConsultaProdutos = () => {
    const [data, setData] = useState([
        {
            id: 1,
            nome: 'Produto de Exemplo',
            codigo: 'SKU12345',
            categoria: 'Categoria 1',
            marca: 'Marca Exemplo',
            descricao: 'Descrição do produto de exemplo',
            unidade: 'kg',
            precoCusto: 10.0,
            precoVenda: 20.0,
            quantidadeEstoque: 100,
            estoqueMinimo: 10,
            ncm: '12345678',
            cfop: '5101',
            cstCsosn: '00',
            imagem: 'link_da_imagem',
            status: 'Ativo',
            observacoes: 'Observação adicional sobre o produto',
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        nome: '',
        categoria: '',
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
                    nome: 'Produto de Exemplo',
                    codigo: 'SKU12345',
                    categoria: 'Categoria 1',
                    marca: 'Marca Exemplo',
                    descricao: 'Descrição do produto de exemplo',
                    unidade: 'kg',
                    precoCusto: 10.0,
                    precoVenda: 20.0,
                    quantidadeEstoque: 100,
                    estoqueMinimo: 10,
                    ncm: '12345678',
                    cfop: '5101',
                    cstCsosn: '00',
                    imagem: 'link_da_imagem',
                    status: 'Ativo',
                    observacoes: 'Observação adicional sobre o produto',
                },
            ];
            setData(simulatedResponse); // Use dados reais se necessário
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
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
                <h3>Detalhes do Produto</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Código:</strong> {record.codigo}</p>
                        <p><strong>Categoria:</strong> {record.categoria}</p>
                        <p><strong>Marca:</strong> {record.marca}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Descrição:</strong> {record.descricao}</p>
                        <p><strong>Unidade de Medida:</strong> {record.unidade}</p>
                        <p><strong>Preço de Custo:</strong> R$ {record.precoCusto.toFixed(2)}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Preço de Venda:</strong> R$ {record.precoVenda.toFixed(2)}</p>
                        <p><strong>Quantidade em Estoque:</strong> {record.quantidadeEstoque}</p>
                        <p><strong>Estoque Mínimo:</strong> {record.estoqueMinimo}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>NCM:</strong> {record.ncm}</p>
                        <p><strong>CFOP:</strong> {record.cfop}</p>
                        <p><strong>CST/CSOSN:</strong> {record.cstCsosn}</p>
                    </div>
                    <div style={{ flex: '1 1 30%' }}>
                        <p><strong>Status:</strong> {record.status}</p>
                        <p><strong>Observações:</strong> {record.observacoes}</p>
                    </div>
                </div>
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
            title: 'Código',
            dataIndex: 'codigo',
            key: 'codigo',
        },
        {
            title: 'Categoria',
            dataIndex: 'categoria',
            key: 'categoria',
        },
        {
            title: 'Marca',
            dataIndex: 'marca',
            key: 'marca',
        },
        {
            title: 'Preço de Custo',
            dataIndex: 'precoCusto',
            key: 'precoCusto',
            render: (text) => `R$ ${text.toFixed(2)}`,
        },
        {
            title: 'Preço de Venda',
            dataIndex: 'precoVenda',
            key: 'precoVenda',
            render: (text) => `R$ ${text.toFixed(2)}`,
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
                <Card title="Consulta de Produtos" bordered={false}>
                    <Space style={{ marginBottom: 16 }}>
                        <Input
                            placeholder="Nome"
                            value={filters.nome}
                            onChange={(e) => handleSearch('nome', e.target.value)}
                            style={{ width: 200 }}
                        />
                        <Select
                            placeholder="Categoria"
                            value={filters.categoria}
                            onChange={(value) => handleSearch('categoria', value)}
                            style={{ width: 200 }}
                        >
                            <Option value="">Todas</Option>
                            <Option value="categoria1">Categoria 1</Option>
                            <Option value="categoria2">Categoria 2</Option>
                        </Select>
                        <Select
                            placeholder="Status"
                            value={filters.status}
                            onChange={(value) => handleSearch('status', value)}
                            style={{ width: 200 }}
                        >
                            <Option value="">Todos</Option>
                            <Option value="ativo">Ativo</Option>
                            <Option value="inativo">Inativo</Option>
                        </Select>
                        <Button
                            type="primary"
                            icon={<SearchOutlined />}
                            onClick={fetchData} // Chama a função de busca
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

export default ConsultaProdutos;
