import { Layout, type LayoutProps } from 'react-admin';

import CustomAppBar from './CustomAppBar';
import CustomMenu from './CustomMenu';
import CustomSidebar from './CustomSidebar';

const AdminLayout = (props: LayoutProps) => {
    return (
        <Layout
            {...props}
            appBar={CustomAppBar}
            menu={CustomMenu}
            sidebar={CustomSidebar}
        />
    );
};

export default AdminLayout;
