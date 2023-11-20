import { lazy } from 'react';
const Dashboard = lazy(() => import('../dashboard'));
const Nexus = lazy(() => import('../dashboard/'));
const Transacoes = lazy(() => import('../transacoes'));
const Patrimonio = lazy(() => import('../patrimonio'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/nexus',
        element: <Nexus />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/transacoes',
        element: <Transacoes />
    },
    {
        path: '/patrimonio',
        element: <Patrimonio />
    },
];

export { routes };