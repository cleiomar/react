import { Link } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, Fragment, useState } from 'react';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import sortBy from 'lodash/sortBy';
import Dropdown from '../components/Dropdown';
import IconPlus from '../components/Icon/IconPlus';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../components/Icon/IconX';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Tabs = () => {


  const [userList, setUserList] = useState([]);

  const getUserList = async () => {
    try {
      const data = await fetch('http://localhost:3000/api/users');
      const response = await data.json();
      setUserList(response);
    } catch (error) {
      console.error('Erro ao obter a lista de usuários:', error);
    }
  }

  useEffect(() => {
    getUserList();
  }, []);

  const [modal4, setModal4] = useState(false);
  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(sortBy(userList, 'Name'));
  const [recordsData, setRecordsData] = useState(initialRecords);

  useEffect(() => {
    setInitialRecords(sortBy(userList, 'Name'));
  }, [userList]);

  const [search, setSearch] = useState('');
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: 'Name',
    direction: 'asc',
  });

  const [options, setOptions] = useState([]);
  const fetchApiOption = async () => {
    const data = await fetch('http://localhost:3000/api/plans')
    const response = await data.json()
    setOptions(response)
}

useEffect(() => {
  fetchApiOption();
}, []);

function capitalizeFirstLetter(name: string): string {
  const words = name.split(' ');
  const capitalizedWords = words.map((word) => {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
}


useEffect(() => {
  setPage(1);
}, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecordsData([...initialRecords.slice(from, to)]);
  }, [page, pageSize, initialRecords]);

  useEffect(() => {
    setInitialRecords(() => {
      return userList.filter((item) => {
        return (
          item.Name.toLowerCase().includes(search.toLowerCase()) ||
          item.Plan.toLowerCase().includes(search.toLowerCase()) ||
          item.Login.toLowerCase().includes(search.toLowerCase()) ||
          item.NextBilling.toLowerCase().includes(search.toLowerCase()) ||
          item.Email.toLowerCase().includes(search.toLowerCase()) ||
          item.Status.toLowerCase().includes(search.toLowerCase()) ||
          item.Phone.toLowerCase().includes(search.toLowerCase())
        );
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    const data = sortBy(initialRecords, sortStatus.columnAccessor);
    setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortStatus]);

  const formatDate = (date: string | number | Date) => {
    if (date) {
      const dt = new Date(date);
      const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
      const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
      return day + '/' + month + '/' + dt.getFullYear();
    }
    return '';
  };

  const showAlert = async (data: string) => {

    Swal.fire({
      icon: 'success',
      title: 'Feito!',
      text: data,
      padding: '2em',
      customClass: 'sweet-alerts',
      timer: 3000,
      showConfirmButton: false
    });
  }

  function AddNew() {
    const form = document.getElementById('instaUserNewUser') as HTMLFormElement;

    const formData = new FormData(form);

    const url = 'http://localhost:3000/api/new_user';

    const options: RequestInit = {
      method: 'POST',
      body: formData,
    };

    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro na solicitação POST');
        }
      })
      .then((data) => {
        console.log('Resposta do servidor:', data);
        showAlert(data.message)
        getUserList();
      })
      .catch((error) => {
        console.error('Erro ao enviar a solicitação POST:', error);
      });
  }


  const dispatch = useDispatch();
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
  const [date1, setDate1] = useState<any>('2022-07-05');


  return (
    <div>
      <ul className="flex space-x-2 rtl:space-x-reverse mb-5">
        <li>
          <Link to="/components/tabs" className="text-primary hover:underline">
            Accounts
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Instagram</span>
        </li>
      </ul>



      <div className="panel">

        <div className="grid 1xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-4 grid-cols-1 gap-6 mb-10">

          <center>
            <div className="grid 1xl:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 w-200 mt-1">
              <button type="button" onClick={() => setModal4(true)} className="btn btn-outline-secondary btn-sm"><IconPlus />Add New User</button>
              <div className="mt-2">
                <div className="ltr:ml-auto rtl:mr-auto">
                  <input type="text" className="form-input w-100p" placeholder="Search User..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              </div>
            </div>
          </center>
          <div className="panel p-2.5 rounded-md flex items-center group">
            <div className="w-20 h-[84px] -m-2.5 ltr:mr-4 rtl:ml-4 ltr:rounded-l-md rtl:rounded-r-md transition-all duration-700 group-hover:scale-110 bg-success"></div>
            <div>
              <h5 className="ft sm:text-base">Active</h5>
              <span className="text-lg text-white-dark">1547</span>
            </div>
          </div>

          <div className="panel p-2.5 rounded-md flex items-center group">
            <div className="w-20 h-[84px] -m-2.5 ltr:mr-4 rtl:ml-4 ltr:rounded-l-md rtl:rounded-r-md transition-all duration-700 group-hover:scale-110 bg-danger"></div>
            <div>
              <h5 className="ft sm:text-base">Inactive</h5>
              <span className="text-lg text-white-dark">254</span>
            </div>
          </div>

          <div className="panel p-2.5 rounded-md flex items-center group">
            <div className="w-20 h-[84px] -m-2.5 ltr:mr-4 rtl:ml-4 ltr:rounded-l-md rtl:rounded-r-md transition-all duration-700 group-hover:scale-110 bg-secondary"></div>
            <div>
              <h5 className="ft sm:text-base">Balance</h5>
              <span className="text-lg text-white-dark">R$ 350.00</span>
            </div>
          </div>

        </div>
        <div className="datatables">
          <DataTable
            className="whitespace-nowrap table-hover"
            records={recordsData}
            columns={[
              {
                accessor: 'Name',
                title: 'Name',
                sortable: true,
                render: ({ Name, id }) => (
                  <div className="flex items-center w-max">
                    <img className="w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover" src={`/assets/images/profile-${id}.jpeg`} alt="" />
                    <div>{capitalizeFirstLetter(Name)}</div>
                  </div>
                ),
              },
              { accessor: 'Plan', title: 'Plan', sortable: true },
              { accessor: 'Login', title: 'Profile', sortable: true },
              { accessor: 'age', title: 'Age', sortable: true },
              {
                accessor: 'NextBilling',
                title: 'Next Billing',
                sortable: true,
                render: ({ NextBilling }) => <div>{formatDate(NextBilling)}</div>,
              },
              { accessor: 'Email', title: 'Email', sortable: true },
              { accessor: 'Phone', title: 'Phone No.', sortable: true },
              {
                accessor: 'Status',
                title: 'Status',
                sortable: true,
                render: ({ Status }) => (
                  Status === '1' ? (
                    <span className={`badge bg-success`}>Active</span>
                  ) : 
                    Status === '2' ? (
                      <span className={`badge bg-danger`}>Blocked</span>
                    ) : <span className={`badge bg-dark`}>Canceled</span>
                ),
              },
              {
                accessor: 'Action',
                title: 'Action',
                titleClassName: '!text-center',
                render: () => (
                  <div className="flex items-center w-max mx-auto">
                    <div className="dropdown">
                      <Dropdown
                        offset={[0, 5]}
                        placement={'bottom-end'}
                        button={
                          <svg xmlns="http://www.w3.org/2000/svg" className='grey-css ml-4' fill="currentColor" viewBox="0 0 50 50" width="15px" height="15px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" /></svg>
                        }
                      >
                        <ul>
                          <li>
                            <button type="button">Canceled</button>
                          </li>
                          <li>
                            <button type="button">Pending</button>
                          </li>
                          <li>
                            <button type="button">Completed</button>
                          </li>
                          <li>
                            <button type="button">Delete</button>
                          </li>
                        </ul>
                      </Dropdown>
                    </div>
                  </div>
                ),
              },
            ]}
            totalRecords={initialRecords.length}
            recordsPerPage={pageSize}
            page={page}
            onPageChange={(p) => setPage(p)}
            recordsPerPageOptions={PAGE_SIZES}
            onRecordsPerPageChange={setPageSize}
            sortStatus={sortStatus}
            onSortStatusChange={setSortStatus}
            minHeight={200}
            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
          />
        </div>
      </div>
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
        </div>
        <div className="mb-5">
          <Transition appear show={modal4} as={Fragment}>
            <Dialog as="div" open={modal4} onClose={() => setModal4(false)}>
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
              <div className="fixed inset-0 z-[999] bg-[black]/60 px-4">
                <div className="flex min-h-screen items-start justify-center px-4">
                  <Dialog.Panel className="panel my-8 w-full overflow-hidden overflow-auto w-800 rounded-lg border-0 p-0 text-black dark:text-white-dark">
                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                      <h5 className="text-lg font-bold">New User</h5>
                      <button type="button" onClick={() => setModal4(false)} className="text-white-dark hover:text-dark">
                        <IconX />
                      </button>
                    </div>
                    <form id='instaUserNewUser' action='http://localhost:3000/api/dados' method="POST">
                      <div className="grid 1xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 p-5 h-25">

                        <div className='panel'>
                          <label htmlFor="Name">Full Name</label>
                          <input name="full_name" type="text" placeholder="Full Name" defaultValue="" className="form-input mb-5" />

                          <label htmlFor="Email">Email</label>
                          <input name="email" type="text" placeholder="Email" defaultValue="" className="form-input mb-5" />

                          <label htmlFor="Phone">Phone</label>
                          <input name="phone" type="text" placeholder="Phone" defaultValue="" className="form-input mb-5" />

                          <label htmlFor="birth date">birth date</label>
                          <Flatpickr name="birth_date" value={date1} options={{ dateFormat: 'd/m/Y', position: isRtl ? 'auto right' : 'auto left' }} className="form-input" onChange={(date) => setDate1(date)} />

                        </div>
                        <div className='panel'>
                          <label htmlFor="fullname">Plan</label>
                          <Select name="plan" className="mb-5" defaultValue={options[0]} options={options} isSearchable={false} />

                          <label htmlFor="Username">Username</label>
                          <input name="username" type="text" placeholder="Username" defaultValue="" className="form-input mb-5" />

                          <label htmlFor="Password">Password</label>
                          <input name="password" type="password" placeholder="Password" defaultValue="" className="form-input mb-5" />


                          <div className="mt-8 flex items-center justify-end">
                            <button onClick={() => setModal4(false)} type="button" className="btn btn-outline-primary">
                              Cancel
                            </button>
                            <button type="button" onClick={() => { setModal4(false); AddNew(); }} className="btn btn-outline-success ltr:ml-4 rtl:mr-4">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Dialog.Panel>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div></div>
    </div >
  );
};

export default Tabs;