import { Admin, Resource } from 'react-admin';
import dataProviderFactory from './dataProvider';
import products from './products';

const App = () => {
    return (
        <Admin
            title="Posters Galore Admin"
            dataProvider={dataProviderFactory('')}
        >
            <Resource name="products" {...products} />
        </Admin>
    );
};

export default App;