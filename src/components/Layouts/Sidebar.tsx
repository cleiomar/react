import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import { IRootState } from '../../store';
import { useEffect } from 'react';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMenuTransaction from '../Icon/Menu/IconMenuTransaction';
import IconMenuPatrimonio from '../Icon/Menu/IconMenuPatrimonio';
import IconMenuMetas from '../Icon/Menu/IconMenuMetas';
import IconMenuPrevisao from '../Icon/Menu/IconMenuPrevisao';
import IconMenuAutoDirect from '../Icon/Menu/IconMenuAutoDirect';
import IconMenuTesouro from '../Icon/Menu/IconMenuTesouro';


const Sidebar = () => {
    const userid = 1;
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-3 py-3">
                        <NavLink to="/" className="main-logo flex items-center shrink-0">
                            <img className="w-10 ml-[0px] flex-none mt-1" src="/assets/images/nexus.svg" alt="logo" />
                            <span className="text-3xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">nexus</span>
                        </NavLink>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-3 py-0 ml--10">

                            <li className="nav-item">
                                <NavLink to="/dashboard" className="group">
                                    <div className="flex items-center">
                                        <IconMenuDashboard className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('dashboard')}</span>
                                    </div>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <Link to={"/transacoes"} state={{ userid: userid }} className="group">
                                    <div className="flex items-center">
                                        <IconMenuTransaction
                                            opValor="0.5"
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Transações</span>
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/patrimonio"} state={{ userid: userid }} className="group">
                                    <div className="flex items-center">
                                        <IconMenuPatrimonio className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Patrimônio</span>
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/metas"} state={{ userid: userid }} className="group">
                                    <div className="flex items-center">
                                        <IconMenuMetas
                                            opValor="0.5"
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Metas</span>
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/previsao" className="group">
                                    <div className="flex items-center">
                                        <IconMenuPrevisao
                                            opValor="0.5" className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Previsão</span>
                                    </div>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/tesouro" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTesouro opValor="0.5" className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Tesouro</span>
                                    </div>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/Instagram" className="group">
                                    <div className="flex items-center">
                                        <IconMenuAutoDirect opValor="0.5" className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('auto_direct')}</span>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
