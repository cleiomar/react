import PerfectScrollbar from 'react-perfect-scrollbar';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import Dropdown from '../components/Dropdown';
import { setPageTitle } from '../store/themeConfigSlice';
import IconNotes from '../components/Icon/IconNotes';
import IconNotesEdit from '../components/Icon/IconNotesEdit';
import IconStar from '../components/Icon/IconStar';
import IconSquareRotated from '../components/Icon/IconSquareRotated';
import IconPlus from '../components/Icon/IconPlus';
import IconMenu from '../components/Icon/IconMenu';
import IconUser from '../components/Icon/IconUser';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import IconPencil from '../components/Icon/IconPencil';
import IconTrashLines from '../components/Icon/IconTrashLines';
import IconEye from '../components/Icon/IconEye';
import IconX from '../components/Icon/IconX';
import { formatDataTimeBR } from '../data/funcoes';
import IconCaretDown from '../components/Icon/IconCaretDown';
import IconCaretsDown from '../components/Icon/IconCaretsDown';
import IconArrowDown2 from '../components/Icon/IconArrowDown2';
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import Select from 'react-select';
import IconSearch from '../components/Icon/IconSearch';
import IconChecks from '../components/Icon/IconChecks';
import IconLido from '../components/Icon/IconLido';

const Comunicados = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('COMUNICADOS'));
    });


    const [notesList, setNoteList] = useState([]);

    const defaultParams = { id: null, title: '', description: '', tag: '', empresa: '', thumb: '' };
    const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));
    const [addContactModal, setAddContactModal] = useState<any>(false);
    const [isDeleteNoteModal, setIsDeleteNoteModal] = useState<any>(false);
    const [isShowNoteMenu, setIsShowNoteMenu] = useState<any>(false);
    const [isViewNoteModal, setIsViewNoteModal] = useState<any>(false);
    const [filterdNotesList, setFilterdNotesList] = useState<any>([]);
    const [selectedTab, setSelectedTab] = useState<any>('all');
    const [deletedNote, setDeletedNote] = useState<any>(null);
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [totalComunicados, setTotalComunicados] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [categoria, setCategoria] = useState('');
    const [favorito, setFavorito] = useState('');

    useEffect(() => {
        fetchGetComunicados(currentPage, search, categoria, favorito)
    }, [currentPage, search])

    // Funções para manipular a mudança de página
    const goToStart = () => setCurrentPage(1);
    const goToEnd = () => setCurrentPage(totalPages);
    const goBack = () => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
    const goForward = () => setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev));

    // Calcular os números das páginas para os botões do meio
    const middlePages = (): number[] => {
        if (currentPage <= 3) {
            return [1, 2, 3];
        } else if (currentPage >= totalPages - 2) {
            return [totalPages - 2, totalPages - 1, totalPages];
        } else {
            return [currentPage - 1, currentPage, currentPage + 1];
        }
    };
    const searchNotes = () => {
        if (selectedTab !== 'fav') {
            if (selectedTab !== 'all' || selectedTab === 'delete') {
                setFilterdNotesList(notesList.filter((d) => d.tag === selectedTab));
            } else {
                setFilterdNotesList(notesList);
            }
        } else {
            setFilterdNotesList(notesList.filter((d) => d.isFav));
        }
    };

    async function fetchUpdateFav(id: number, fav: boolean) {
        try {
            const response = await fetch('http://localhost:3000/update_fav', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id, fav: fav }), // Converte os dados para o formato JSON
            });

            if (!response.ok) {
                throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error('Erro na requisição PUT:', error);
            throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
        }
    }

    async function fetchDeleteComunicados(id: number) {
        try {
            const response = await fetch('http://localhost:3000/delete_comunicados', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }), // Converte os dados para o formato JSON
            });

            if (!response.ok) {
                throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error('Erro na requisição PUT:', error);
            throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
        }
    }


    const fetchGetComunicados = async (page: number, codigo: any, categoria: any, favorito: any) => {
        setModal(true)
        try {
            const response = await fetch('http://localhost:3000/get_comunicados_b3', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ page: page, codigo: codigo, categoria: categoria, favorito: favorito }), // Converte os dados para o formato JSON
            });
            const data = await response.json();
            setTotalPages(Math.round((data.total_ativos / 12) + 1));
            setTotalComunicados(data.total_ativos)
            const dados = await Promise.all(data.data.map(async (item) => {
                let tag;
                if (item.ativo_categoria === 1) {
                    tag = 'Ação';
                }
                else if (item.ativo_categoria === 2) {
                    tag = 'FII';
                }
                return {
                    id: item.documentos_b3_id,
                    empresa: item.ativo_nome,
                    thumb: item.logo,
                    title: item.category,
                    urlSearch: item.urlSearch,
                    urlDownload: item.urlDownload,
                    description: item.subject == null ? '' : item.subject,
                    date: formatDataTimeBR(item.deliveryDateTime),
                    isFav: item.favourite == 1 ? true : false,
                    tag: tag,
                };
            }));
            setNoteList(dados);
            setTimeout(() => {
                setModal(false);
            }, 200);
            if (!response.ok) {
                throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error('Erro na requisição PUT:', error);
            throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
        }
    }


    useEffect(() => {
        dispatch(setPageTitle('COMUNICADOS'));
    }, []);


    const saveNote = () => {
        if (!params.title) {
            showMessage('Title is required.', 'error');
            return false;
        }
        if (params.id) {
            //update task
            let note: any = notesList.find((d: any) => d.id === params.id);
            note.title = params.title;
            note.empresa = params.empresa;
            note.urlSearch = params.urlSearch;
            note.urlDownload = params.urlDownload;
            note.description = params.description;
            note.tag = params.tag;
        } else {
            //add note
            let maxNoteId = notesList.reduce((max: any, character: any) => (character.id > max ? character.id : max), notesList[0].id);
            if (!maxNoteId) {
                maxNoteId = 0;
            }
            let dt = new Date();
            let note = {
                id: maxNoteId + 1,
                title: params.title,
                empresa: params.empresa,
                urlSearch: params.urlSearch,
                urlDownload: params.urlDownload,
                thumb: 'profile-21.jpeg',
                description: params.description,
                date: dt.getDate() + '/' + Number(dt.getMonth()) + 1 + '/' + dt.getFullYear(),
                isFav: false,
                tag: params.tag,
            };

            notesList.splice(0, 0, note);
            searchNotes();
        }
        showMessage('Note has been saved successfully.');
        setAddContactModal(false);
        searchNotes();
    };

    const tabChanged = (type: string) => {
        setSelectedTab(type);
        setIsShowNoteMenu(false);
        searchNotes();
    };

    const setFav = (note: any) => {
        console.log(note.id)
        let list = filterdNotesList;
        let item = list.find((d: any) => d.id === note.id);
        item.isFav = !item.isFav;
        fetchUpdateFav(note.id, item.isFav)

        setFilterdNotesList([...list]);
        if (selectedTab !== 'all' || selectedTab === 'delete') {
            searchNotes();
        }
    };

    const setTag = (note: any, name: string = '') => {
        let list = filterdNotesList;
        let item = filterdNotesList.find((d: any) => d.id === note.id);
        item.tag = name;
        setFilterdNotesList([...list]);
        if (selectedTab !== 'all' || selectedTab === 'delete') {
            searchNotes();
        }
    };

    const changeValue = (e: any) => {
        const { value, id } = e.target;
        setParams({ ...params, [id]: value });
    };

    const deleteNoteConfirm = (note: any) => {
        setDeletedNote(note);
        setIsDeleteNoteModal(true);
    };

    const viewNote = (note: any) => {
        setParams(note);
        setIsViewNoteModal(true);
    };

    const editNote = (note: any = null) => {
        setIsShowNoteMenu(false);
        const json = JSON.parse(JSON.stringify(defaultParams));
        setParams(json);
        if (note) {
            let json1 = JSON.parse(JSON.stringify(note));
            setParams(json1);
        }
        setAddContactModal(true);
    };

    const deleteNote = () => {
        setNoteList(notesList.filter((d: any) => d.id !== deletedNote.id));
        searchNotes();
        fetchDeleteComunicados(deletedNote.id);
        showMessage('Note has been deleted successfully.');
        setIsDeleteNoteModal(false);
    };

    const showMessage = (msg = '', type = 'success') => {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };


    useEffect(() => {
        searchNotes();
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [selectedTab, notesList]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    return (
        <div>
            <div>
                <Transition appear show={modal} as={Fragment}>
                    <Dialog as="div" open={modal} onClose={() => setModal(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0" />
                        </Transition.Child>
                        <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                            <div className="flex items-center justify-center min-h-screen px-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel as="div" className="border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                        <center><span className="animate-[spin_3s_linear_infinite] border-8 border-r-warning border-l-primary border-t-danger border-b-success rounded-full w-24 h-24 inline-block align-middle m-auto mb-10"></span></center>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
            <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                <div className={`bg-black/60 z-10 w-full h-full rounded-md absolute hidden ${isShowNoteMenu ? '!block xl:!hidden' : ''}`} onClick={() => setIsShowNoteMenu(!isShowNoteMenu)}></div>
                <div
                    className={`panel
                    p-4
                    flex-none
                    w-[240px]
                    absolute
                    xl:relative
                    z-10
                    space-y-4
                    h-full
                    xl:h-auto
                    hidden
                    xl:block
                    ltr:lg:rounded-r-md ltr:rounded-r-none
                    rtl:lg:rounded-l-md rtl:rounded-l-none
                    overflow-hidden ${isShowNoteMenu ? '!block h-full ltr:left-0 rtl:right-0' : 'hidden shadow'}`}
                >
                    <div className="flex flex-col h-full pb-16">
                        <div className="flex text-center items-center">
                            <div className="shrink-0">
                                <IconNotes />
                            </div>
                            <h3 className="text-lg font-semibold ltr:ml-3 rtl:mr-3">COMUNICADOS</h3>
                        </div>

                        <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b] my-4"></div>
                        <PerfectScrollbar className="relative ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5 h-full grow">
                            <div className="space-y-1">
                                <div className=' mb-6'>
                                    {/* <label htmlFor="iconRight">Buscar</label> */}
                                    <div className="flex">
                                        <input id="iconRight" onChange={(e) => {
                                            if (e.target.value.length >= 3) {
                                                setSearch(e.target.value)
                                            }
                                            else if (e.target.value == '') {
                                                setSearch('')
                                            }
                                        }}
                                            type="text" placeholder="Buscar" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                                        <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                            <IconSearch className="text-white-dark" />
                                        </div>
                                    </div>
                                </div>
                                <div className='pb-2'>
                                    <button
                                        type="button"
                                        className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'all' && 'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32] '
                                            }`}
                                        onClick={() => {
                                            setCurrentPage(1);
                                            setCategoria('')
                                            setFavorito('')
                                            tabChanged('FII')
                                            fetchGetComunicados(1, search, '', '')
                                            tabChanged('all')
                                        }}
                                    >
                                        <div className="flex items-center">
                                            <IconNotesEdit className="shrink-0" />
                                            <div className="ltr:ml-3 rtl:mr-3">TODOS</div>
                                        </div>
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'fav' && 'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]'
                                        }`}
                                    onClick={() => {
                                        setCurrentPage(1);
                                        setCategoria('')
                                        tabChanged('FII')
                                        setFavorito(1)
                                        fetchGetComunicados(1, search, '', 1)
                                        tabChanged('fav')
                                    }}
                                >
                                    <div className="flex items-center">
                                        <IconStar className="shrink-0" />
                                        <div className="ltr:ml-3 rtl:mr-3">FAVORITOS</div>
                                    </div>
                                </button>
                                <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b]"></div>
                                <div className="px-1 py-3 text-white-dark">Tags</div>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-warning ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${selectedTab === 'FIAgro' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                                        }`}
                                    onClick={() => tabChanged('FIAgro')}
                                >
                                    <IconSquareRotated className="fill-warning shrink-0" />
                                    <div className="ltr:ml-3 rtl:mr-3">FIAgro</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium fill-fii ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${selectedTab === 'FII' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                                        }`}
                                    onClick={() => {
                                        setCurrentPage(1);
                                        setCategoria(2)
                                        setFavorito('')
                                        tabChanged('FII')
                                        fetchGetComunicados(1, search, 2, '')
                                    }}
                                >
                                    <IconSquareRotated className="fill-fii shrink-0" />
                                    <div className="ltr:ml-3 rtl:mr-3">Fundos Imobiliários</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-info ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${selectedTab === 'BDR' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                                        }`}
                                    onClick={() => tabChanged('BDR')}
                                >
                                    <IconSquareRotated className="fill-info shrink-0" />
                                    <div className="ltr:ml-3 rtl:mr-3">BDR's</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-danger ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${selectedTab === 'Ação' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                                        }`}
                                    onClick={() => {
                                        setCurrentPage(1);
                                        setCategoria(1)
                                        setFavorito('')
                                        tabChanged('Ação')
                                        fetchGetComunicados(1, search, 1, '');
                                    }}
                                >
                                    <IconSquareRotated className="fill-danger shrink-0" />
                                    <div className="ltr:ml-3 rtl:mr-3">Ações</div>
                                </button>
                            </div>
                        </PerfectScrollbar>
                    </div>
                    <div className="ltr:left-0 rtl:right-0 absolute bottom-0 p-4 w-full">
                        <button className="btn btn-primary w-full" type="button" onClick={() => editNote()}>
                            <IconPlus className="w-5 h-5 ltr:mr-2 rtl:ml-2 shrink-0" />
                            Add New Note
                        </button>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="panel flex-1 overflow-auto h-full">
                        <div className="pb-5">
                            <button type="button" className="xl:hidden hover:text-primary" onClick={() => setIsShowNoteMenu(!isShowNoteMenu)}>
                                <IconMenu />
                            </button>
                        </div>
                        {filterdNotesList.length ? (
                            <div className="sm:min-h-[300px] min-h-[400px]">
                                <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                                    {filterdNotesList.map((note: any, index: any) => {
                                        return (
                                            <div
                                                className={`panel ${note.tag === 'Ação'
                                                    ? 'bg-danger-light shadow-danger'
                                                    : note.tag === 'FII'
                                                        ? 'bg-fii shadow-fii'
                                                        : note.tag === 'BDR'
                                                            ? 'bg-info-light shadow-info'
                                                            : note.tag === 'FIAgro'
                                                                ? 'bg-warning-light shadow-warning'
                                                                : 'dark:shadow-dark'
                                                    }`}
                                                key={note.id}
                                                style={{ paddingBottom: '80px' }}
                                            >
                                                <div className="min-h-[142px]">
                                                    <div className="flex justify-between">
                                                        <div className="flex items-center w-max">
                                                            <div className="flex-none">
                                                                {note.thumb && (
                                                                    <div className="p-0.5 bg-gray-300 dark:bg-gray-700 rounded-full">
                                                                        <img className="h-8 w-8 rounded-full object-cover" alt="img" src={`${note.thumb}`} />
                                                                    </div>
                                                                )}

                                                                {!note.thumb && note.empresa && (
                                                                    <div className="grid place-content-center h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 text-sm font-semibold">
                                                                        {note.empresa.charAt(0) + '' + note.empresa.charAt(note.empresa.indexOf('') + 1)}
                                                                    </div>
                                                                )}
                                                                {!note.thumb && !note.empresa && (
                                                                    <div className="bg-gray-300 dark:bg-gray-700 rounded-full p-2">
                                                                        <IconEmpresa className="w-4.5 h-4.5" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="ltr:ml-2 rtl:mr-2">
                                                                <div className="font-semibold">{note.empresa}</div>
                                                                <div className="text-sx text-white-dark">{note.date}</div>
                                                            </div>
                                                        </div>
                                                        <div className='w-full' style={{top:'0px',position:'absolute'}}>
                                                        <div style={{float: 'right', fontSize:'10px', paddingLeft:'5px',paddingRight:'5px', marginTop:'7px',  rotate:'50deg'}}><img src='./src/assets/images/lido.png' height={50} width={50}/></div>
                                                        </div>
                                                        <div className="dropdown">
                                                            <Dropdown
                                                                offset={[0, 5]}
                                                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                                                btnClassName="text-primary"
                                                                button={<IconHorizontalDots className="rotate-90 opacity-70 hover:opacity-100" />}
                                                            >
                                                                <ul className="text-sm font-medium" style={{minWidth:'200px'}}>
                                                                    {/* <li>
                                                                    <button type="button" onClick={() => editNote(note)}>
                                                                        <IconPencil className="w-4 h-4 ltr:mr-3 rtl:ml-3 shrink-0" />
                                                                        Edit
                                                                    </button>
                                                                </li> */}
                                                                    <li>
                                                                        <button type="button" onClick={() => deleteNoteConfirm(note)}>
                                                                            <IconTrashLines className="w-4.5 h-4.5 ltr:mr-3 rtl:ml-3 shrink-0" />
                                                                            Delete
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button type="button" onClick={() => viewNote(note)}>
                                                                            <IconEye className="w-4.5 h-4.5 ltr:mr-3 rtl:ml-3 shrink-0" />
                                                                            View
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button type="button" onClick={() => viewNote(note)}>
                                                                            <IconChecks className="w-4.5 h-4.5 ltr:mr-3 rtl:ml-3 shrink-0" />
                                                                            Marcar como Lido
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold mt-4">{note.title}</h4>
                                                        <p className="text-white-dark mt-2">{(note.description.length > 100) ? note.description.substring(0, 100) + ' . . .' : note.description}</p>
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-5 left-0 w-full px-5">
                                                    <div className="flex items-center justify-between mt-2">
                                                        <div className="dropdown fdfdf">
                                                        <span>
                                                                        <IconSquareRotated
                                                                            className={
                                                                                note.tag === 'FIAgro'
                                                                                    ? 'fill-warning'
                                                                                    : note.tag === 'FII'
                                                                                        ? 'fill-fii'
                                                                                        : note.tag === 'BDR'
                                                                                            ? 'fill-info'
                                                                                            : note.tag === 'Ação'
                                                                                                ? 'fill-danger'
                                                                                                : ''
                                                                            }
                                                                        />
                                                                    </span>
                                                                
                                                                
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className='flex justify-between gap-6 mr-8 mt-1'>
                                                                <Tippy className='ml-1' trigger="mouseenter focus" content="Visualizar Arquivo">
                                                                    <button type="button" className="text-primary" onClick={() => window.open(note.urlSearch, '_blank')}>
                                                                        <IconEye width='35' height='35' />
                                                                    </button>
                                                                </Tippy>
                                                                <Tippy className='ml-1' trigger="mouseenter focus" content="Fazer Download do Arquivo">
                                                                    <button type="button" className="text-primary" onClick={() => window.open(note.urlDownload, '_self')}>
                                                                        <IconArrowDown2 width='25' height='25' />
                                                                    </button>
                                                                </Tippy>
                                                            </div>
                                                            <Tippy className='ml-1' trigger="mouseenter focus" content="Deletar comunicado">
                                                                <button type="button" className="text-danger" onClick={() => deleteNoteConfirm(note)}>
                                                                    <IconTrashLines />
                                                                </button>
                                                            </Tippy>
                                                            <Tippy className='ml-1' trigger="mouseenter focus" content="Adicionar aos favoritos">
                                                                <button type="button" className="text-warning group ltr:ml-2 rtl:mr-2" onClick={() => {
                                                                    setCurrentPage(1);
                                                                    setTimeout(() => {
                                                                        fetchGetComunicados(1, search, categoria, favorito);
                                                                    }, 1000);
                                                                    setFav(note)
                                                                }}>
                                                                    <IconStar className={`w-4.5 h-4.5 group-hover:fill-warning ${note.isFav && 'fill-warning'}`} />
                                                                </button>
                                                            </Tippy>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center items-center sm:min-h-[300px] min-h-[400px] font-semibold text-lg h-full">No data available</div>
                        )}

                        <Transition appear show={addContactModal} as={Fragment}>
                            <Dialog as="div" open={addContactModal} onClose={() => setAddContactModal(false)} className="relative z-[51]">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-[black]/60" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center px-4 py-8">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                                <button
                                                    type="button"
                                                    onClick={() => setAddContactModal(false)}
                                                    className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                                >
                                                    <IconX />
                                                </button>
                                                <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                                    {params.id ? 'Edit Note' : 'Add Note'}
                                                </div>
                                                <div className="p-5">
                                                    <form>
                                                        <div className="mb-5">
                                                            <label htmlFor="title">Title</label>
                                                            <input id="title" type="text" placeholder="Enter Title" className="form-input" value={params.title} onChange={(e) => changeValue(e)} />
                                                        </div>
                                                        <div className="mb-5">
                                                            <label htmlFor="name">Empresa Name</label>
                                                            <select id="empresa" className="form-select" value={params.empresa} onChange={(e) => changeValue(e)}>
                                                                <option value="">Select Empresa</option>
                                                                <option value="Max Smith">Max Smith</option>
                                                                <option value="John Doe">John Doe</option>
                                                                <option value="Kia Jain">Kia Jain</option>
                                                                <option value="Karena Courtliff">Karena Courtliff</option>
                                                                <option value="Vladamir Koschek">Vladamir Koschek</option>
                                                                <option value="Robert Garcia">Robert Garcia</option>
                                                                <option value="Marie Hamilton">Marie Hamilton</option>
                                                                <option value="Megan Meyers">Megan Meyers</option>
                                                                <option value="Angela Hull">Angela Hull</option>
                                                                <option value="Karen Wolf">Karen Wolf</option>
                                                                <option value="Jasmine Barnes">Jasmine Barnes</option>
                                                                <option value="Thomas Cox">Thomas Cox</option>
                                                                <option value="Marcus Jones">Marcus Jones</option>
                                                                <option value="Matthew Gray">Matthew Gray</option>
                                                                <option value="Chad Davis">Chad Davis</option>
                                                                <option value="Linda Drake">Linda Drake</option>
                                                                <option value="Kathleen Flores">Kathleen Flores</option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-5">
                                                            <label htmlFor="tag">Tag</label>
                                                            <select id="tag" className="form-select" value={params.tag} onChange={(e) => changeValue(e)}>
                                                                <option value="">None</option>
                                                                <option value="FIAgro">FIAgro</option>
                                                                <option value="FII">FII</option>
                                                                <option value="BDR">BDR</option>
                                                                <option value="Ação">Ação</option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-5">
                                                            <label htmlFor="desc">Description</label>
                                                            <textarea
                                                                id="description"
                                                                rows={3}
                                                                className="form-textarea resize-none min-h-[130px]"
                                                                placeholder="Enter Description"
                                                                value={params.description}
                                                                onChange={(e) => changeValue(e)}
                                                            ></textarea>
                                                        </div>
                                                        <div className="flex justify-end items-center mt-8">
                                                            <button type="button" className="btn btn-outline-danger gap-2" onClick={() => setAddContactModal(false)}>
                                                                Cancel
                                                            </button>
                                                            <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={saveNote}>
                                                                {params.id ? 'Update Note' : 'Add Note'}
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>

                        <Transition appear show={isDeleteNoteModal} as={Fragment}>
                            <Dialog as="div" open={isDeleteNoteModal} onClose={() => setIsDeleteNoteModal(false)} className="relative z-[51]">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-[black]/60" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center px-4 py-8">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsDeleteNoteModal(false)}
                                                    className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                                >
                                                    <IconX />
                                                </button>
                                                <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Delete Notes</div>
                                                <div className="p-5 text-center">
                                                    <div className="text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto">
                                                        <IconTrashLines className="w-7 h-7 mx-auto" />
                                                    </div>
                                                    <div className="sm:w-3/4 mx-auto mt-5">Are you sure you want to delete Notes?</div>

                                                    <div className="flex justify-center items-center mt-8">
                                                        <button type="button" className="btn btn-outline-danger" onClick={() => setIsDeleteNoteModal(false)}>
                                                            Cancel
                                                        </button>
                                                        <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={deleteNote}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>

                        <Transition appear show={isViewNoteModal} as={Fragment}>
                            <Dialog as="div" open={isViewNoteModal} onClose={() => setIsViewNoteModal(false)} className="relative z-[51]">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-[black]/60" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center px-4 py-8">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsViewNoteModal(false)}
                                                    className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                                >
                                                    <IconX />
                                                </button>
                                                <div className="flex items-center flex-wrap gap-2 text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                                    <div className="ltr:mr-3 rtl:ml-3">{params.title}</div>
                                                    {params.tag && (
                                                        <button
                                                            type="button"
                                                            className={`badge badge-outline-primary rounded-3xl capitalize ltr:mr-3 rtl:ml-3 ${(params.tag === 'FIAgro' && 'shadow-primary',
                                                                params.tag === 'FII' && 'shadow-warning',
                                                                params.tag === 'BDR' && 'shadow-info',
                                                                params.tag === 'Ação' && 'shadow-danger')
                                                                }`}
                                                        >
                                                            {params.tag}
                                                        </button>
                                                    )}
                                                    {params.isFav && (
                                                        <button type="button" className="text-warning">
                                                            <IconStar className="fill-warning" />
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="p-5">
                                                    <div className="text-base">{params.description}</div>

                                                    <div className="ltr:text-right rtl:text-left mt-8">
                                                        <button type="button" className="btn btn-outline-danger" onClick={() => setIsViewNoteModal(false)}>
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                        <div className="flex items-center justify-between my-10">

                        </div>
                        <div className="mb-5">
                            <div className="flex justify-center flex-col w-full">
                                <ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
                                    <li>
                                        <button
                                            type="button"
                                            onClick={goToStart} disabled={currentPage === 1}
                                            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                                        >
                                            <IconCaretsDown className="rotate-90 rtl:-rotate-90" />
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            onClick={goBack} disabled={currentPage === 1}
                                            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                                        >
                                            <IconCaretDown className="w-5 h-5 rotate-90 rtl:-rotate-90" />
                                        </button>
                                    </li>

                                    {middlePages().map(page => {
                                        let cor: any;
                                        if (currentPage === page) {
                                            cor = 'bg-primary';
                                        }
                                        else {
                                            cor = 'bg-white-light';
                                        }
                                        return (


                                            <li
                                            key={page}>
                                                <button
                                                    type="button"
                                                    onClick={() => setCurrentPage(page)}
                                                    className={`flex justify-center font-semibold px-3.5 py-2 rounded-full transition ` + cor + ` text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary`}
                                                    disabled={currentPage === page}
                                                >
                                                    {page}
                                                </button>
                                            </li>
                                        )
                                    })}

                                    <li>
                                        <button
                                            type="button"
                                            onClick={goForward} disabled={currentPage === totalPages}
                                            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                                        >
                                            <IconCaretDown className="w-5 h-5 -rotate-90 rtl:rotate-90" />
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            onClick={goToEnd} disabled={currentPage === totalPages}
                                            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                                        >
                                            <IconCaretsDown className="-rotate-90 rtl:rotate-90" />
                                        </button>
                                    </li>
                                </ul>
                                <center><div><b>{totalComunicados}</b> Registros</div></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comunicados;