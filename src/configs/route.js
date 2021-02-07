import { UnitForm, UnitList, ItemList, ItemForm, Error, StockList, StockForm } from "../pages";
import { CoroselComponent } from "../components";

const routes = [
    {
        path: '/units',
        component: <UnitList />,
        exact: true
    },
    {
        path: '/unit/add',
        component: <UnitForm />,
        exact: true
    },
    {
        path: '/unit/:id/edit',
        component: <UnitForm />,
        exact: true
    },
    {
        path: '/items',
        component: <ItemList />,
        exact: true
    },
    {
        path: '/item/add',
        component: <ItemForm />,
        exact: true
    },
    {
        path: '/item/:id/edit',
        component: <ItemForm />,
        exact: true
    },
    {
        path: '/stocks',
        component: <StockList />,
        exact: true
    },
    {
        path: '/stock/add',
        component: <StockForm />,
        exact: true
    },
    {
        path: '/stock/:id/edit',
        component: <StockForm />,
        exact: true
    },
    {
        path: '/',
        component: <CoroselComponent />,
        exact: true
    },
    {
        path: '*',
        component: <Error />,
        exact: false
    },
]

export default routes