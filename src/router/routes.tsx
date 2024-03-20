import { lazy } from 'react';
const Tesouro = lazy(() => import('../tesouro'));
const Previsao = lazy(() => import('../previsao'));
const Dashboard = lazy(() => import('../dashboard'));
const Nexus = lazy(() => import('../dashboard/'));
const Transacoes = lazy(() => import('../transacoes'));
const Patrimonio = lazy(() => import('../patrimonio'));
const Cadastros = lazy(() => import('../cadastros'));
const Compras = lazy(() => import('../compras'));
const Acao = lazy(() => import('../acao'));
const Proventos = lazy(() => import('../proventos'));
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
        path: '/cadastros',
        element: <Cadastros />
    },
    {
        path: '/compras/',
        element: <Compras />
    }
];

export { routes };