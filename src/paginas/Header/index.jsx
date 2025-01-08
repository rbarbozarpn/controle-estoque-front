import React from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    LogoutOutlined,
    FormOutlined,
    ShoppingOutlined,
    TeamOutlined,
    SearchOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class CustomHeader extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        // Define os itens do menu de dropdown
        const menuItems = [
            {
                key: '1',
                label: 'Sair',
                icon: <LogoutOutlined />,
            },
        ];

        // Define os itens do menu lateral
        const siderMenuItems = [
            {
                key: 'sub1',
                icon: <FormOutlined />,
                label: 'Cadastro',
                children: [
                    {
                        key: '4',
                        icon: <ShoppingOutlined />,
                        label: 'Produtos',
                    },
                    {
                        key: '5',
                        icon: <TeamOutlined />,
                        label: 'Usuários',
                    },
                ],
            },
            {
                key: 'sub2',
                icon: <SearchOutlined />,
                label: 'Consulta',
                children: [
                    {
                        key: '6',
                        icon: <ShoppingOutlined />,
                        label: 'Produtos',
                    },
                    {
                        key: '7',
                        icon: <TeamOutlined />,
                        label: 'Usuários',
                    },
                ],
            },
            {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Option 3',
            },
        ];

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ marginTop: '60px' }}
                        items={siderMenuItems} // Usa `items` para definir o menu
                    />
                </Sider>
                <Layout
                    className="site-layout"
                    style={{ marginLeft: this.state.collapsed ? 80 : 200 }}
                >
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {React.createElement(
                            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: this.toggle,
                            }
                        )}
                        <div style={{ marginRight: '20px' }}>
                            <Dropdown
                                menu={{ items: menuItems }} // Usa `menu` e `items` no Dropdown
                                placement="bottomRight"
                            >
                                <Avatar size="large" icon={<UserOutlined />} />
                            </Dropdown>
                        </div>
                    </Header>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default CustomHeader;
