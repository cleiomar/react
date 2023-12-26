import { lazy } from 'react';
const Tesouro = lazy(() => import('../tesouro'));
const Previsao = lazy(() => import('../previsao'));
const Dashboard = lazy(() => import('../dashboard'));
const Nexus = lazy(() => import('../dashboard/'));
const Transacoes = lazy(() => import('../transacoes'));
const Patrimonio = lazy(() => import('../patrimonio'));
const Metas = lazy(() => import('../metas'));
const Acoes = lazy(() => import('../acoes'));
const Acao = lazy(() => import('../acao'));
const Error = lazy(() => import('../components/Error'));

const routes = [
    // dashboard
    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    },
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
    {
        path: '/metas',
        element: <Metas />
    },
    {
        path: '/previsao',
        element: <Previsao />
    },
    {
        path: '/tesouro',
        element: <Tesouro />
    },
    {
        path: '/acoes/',
        element: <Acoes />
    },
    {
        path: '/acoes   /:acao',
        element: <Acao />
    },
];

export { routes };