// import * as React from 'react';
// import { Box, Chip, useMediaQuery } from '@mui/material';
// import type { Theme } from '@mui/material';
// import {
//     CreateButton,
//     ExportButton,
//     FilterButton,
//     FilterForm,
//     FilterContext,
//     ListBase,
//     NumberInput,
//     Pagination,
//     ReferenceInput,
//     SearchInput,
//     SelectInput,
//     SortButton,
//     Title,
//     TopToolbar,
//     useTranslate,
//     useDefaultTitle,
//     useListContext,
// } from 'react-admin';

// import ImageList from './GridList';
// import Aside from './Aside';

// const ProductList = () => {
//     const isSmall = useMediaQuery('(max-width:900px)');
//     return (
//         <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
//             <ProductTitle />
//             <FilterContext.Provider value={productFilters}>
//                 <ListActions isSmall={isSmall} />
//                 {isSmall && (
//                     <Box
//                         sx={{
//                             m: 1,
//                         }}
//                     >
//                         <FilterForm />
//                     </Box>
//                 )}
//             </FilterContext.Provider>
//             <Box
//                 sx={{
//                     display: 'flex',
//                 }}
//             >
//                 <Aside />
//                 <Box
//                     sx={{
//                         width: isSmall ? 'auto' : 'calc(100% - 16em)',
//                     }}
//                 >
//                     <ImageList />
//                     <Pagination rowsPerPageOptions={[12, 24, 48, 72]} />
//                 </Box>
//             </Box>
//         </ListBase>
//     );
// };

// const ProductTitle = () => {
//     const appTitle = useDefaultTitle();
//     const { defaultTitle } = useListContext();

//     return (
//         <>
//             <title>{`${appTitle} - ${defaultTitle}`}</title>
//             <Title defaultTitle={defaultTitle} />
//         </>
//     );
// };

// const QuickFilter = ({ label }: any) => {
//     const translate = useTranslate();
//     return <Chip sx={{ mb: 1 }} label={translate(label as string)} />;
// };

// export const productFilters = [
//     <SearchInput source="q" alwaysOn />,
//     <ReferenceInput
//         source="category_id"
//         reference="categories"
//         sort={{ field: 'id', order: 'ASC' }}
//     >
//         <SelectInput source="name" />
//     </ReferenceInput>,
//     <NumberInput source="width_gte" />,
//     <NumberInput source="width_lte" />,
//     <NumberInput source="height_gte" />,
//     <NumberInput source="height_lte" />,
//     <QuickFilter
//         label="resources.products.fields.stock_lte"
//         source="stock_lte"
//         defaultValue={10}
//     />,
// ];

// const ListActions = ({ isSmall }: any) => (
//     <TopToolbar>
//         {isSmall && <FilterButton />}
//         <SortButton fields={['reference', 'sales', 'stock']} />
//         <CreateButton />
//         <ExportButton />
//     </TopToolbar>
// );

// export default ProductList;


import * as React from 'react';
import { Box } from '@mui/material';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
} from 'react-admin';

const ProductList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="description" />
                <NumberField source="price" />
            </Datagrid>
        </List>
    );
};

export default ProductList;