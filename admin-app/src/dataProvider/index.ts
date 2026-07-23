import fakeDataProvider from 'ra-data-fakerest';

const data = {
    products: [
        { id: 1, name: 'Product 1', description: 'Test product', price: 100 },
        { id: 2, name: 'Product 2', description: 'Another product', price: 200 },
    ],
};

const dataProviderFactory = () => fakeDataProvider(data);

export default dataProviderFactory;