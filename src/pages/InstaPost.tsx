import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import CodeHighlight from '../components/Highlight';
import { setPageTitle } from '../store/themeConfigSlice';
import InputEmoji from "react-input-emoji";
import Flatpickr from "react-flatpickr";
import Tippy from '@tippyjs/react';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import Dropdown from '../components/Dropdown';
import IconMenuInstaUsers from '../components/Icon/Menu/IconMenuInstaUsers';
import IconCode from '../components/Icon/IconCode';
import IconTrashLines from '../components/Icon/IconTrashLines';
import IconXCircle from '../components/Icon/IconXCircle';
import IconPencil from '../components/Icon/IconPencil';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import IconCircleCheck from '../components/Icon/IconCircleCheck';
import IconSettings from '../components/Icon/IconSettings';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import IconBell from '../components/Icon/IconBell';
import IconCaretDown from '../components/Icon/IconCaretDown';

const Tabs = () => {

  const [tabs, setTabs] = useState<string[]>([]);
  const toggleCode = (name: string) => {
    if (tabs.includes(name)) {
      setTabs((value) => value.filter((d) => d !== name));
    } else {
      setTabs([...tabs, name]);
    }
  };

  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  /*const dispatch2 = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Date & Range Picker'));
  });*/
  const [codeArr, setCodeArr] = useState<string[]>([]);

  const toggleCode2 = (name: string) => {
    if (codeArr.includes(name)) {
      setCodeArr((value) => value.filter((d) => d !== name));
    } else {
      setCodeArr([...codeArr, name]);
    }
  };

  const [inputStart, setInputStart] = useState<any>(20);
  const [inputEnd, setInputEnd] = useState<any>(40);
  const [slider2, setSlider2] = useState<any>([500, 4000]);
  const [percent2, setPercent2] = useState<any>([5, 40]);

  const [disabled, setDisabled] = useState<any>(false);
  const [skippingValue, setSkippingValue] = useState<any>(40);
  const [skippingValue1, setSkippingValue1] = useState<any>(40);

  const changeValue = () => {
    setDisabled(!disabled);
  };

  const slider1Update = (range: any) => {
    setInputStart(range[0]);
    setInputEnd(range[1]);
  };

  const onSide = (render: any, handle: any, value: any, un: any, percent: any) => {
    setSlider2(value);
    setPercent2(percent);
  };

  const [date1, setDate1] = useState<any>('2022-07-05');
  const [date2, setDate2] = useState<any>('2022-07-05 12:00');
  const [date3, setDate3] = useState<any>('2022-07-05 to 2022-07-10');
  const [date4, setDate4] = useState<any>('13:45');
  const [range1, setRange1] = useState<any>('0');
  const [range2, setRange2] = useState<any>('0');
  const [range3, setRange3] = useState<any>('0');
  const [range4, setRange4] = useState<any>('0');
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];


  const tableData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@yahoo.com',
      date: '10/08/2020',
      sale: 120,
      status: 'Complete',
      register: '5 min ago',
      progress: '40%',
      position: 'Developer',
      office: 'London',
    },
    {
      id: 2,
      name: 'Shaun Park',
      email: 'shaunpark@gmail.com',
      date: '11/08/2020',
      sale: 400,
      status: 'Pending',
      register: '11 min ago',
      progress: '23%',
      position: 'Designer',
      office: 'New York',
    },
    {
      id: 3,
      name: 'Alma Clarke',
      email: 'alma@gmail.com',
      date: '12/02/2020',
      sale: 310,
      status: 'In Progress',
      register: '1 hour ago',
      progress: '80%',
      position: 'Accountant',
      office: 'Amazon',
    },
    {
      id: 4,
      name: 'Vincent Carpenter',
      email: 'vincent@gmail.com',
      date: '13/08/2020',
      sale: 100,
      status: 'Canceled',
      register: '1 day ago',
      progress: '60%',
      position: 'Data Scientist',
      office: 'Canada',
    },
    {
      id: 3,
      name: 'Alma Clarke',
      email: 'alma@gmail.com',
      date: '12/02/2020',
      sale: 310,
      status: 'In Progress',
      register: '1 hour ago',
      progress: '80%',
      position: 'Accountant',
      office: 'Amazon',
    },
    {
      id: 4,
      name: 'Vincent Carpenter',
      email: 'vincent@gmail.com',
      date: '13/08/2020',
      sale: 100,
      status: 'Canceled',
      register: '1 day ago',
      progress: '60%',
      position: 'Data Scientist',
      office: 'Canada',
    },
    {
      id: 3,
      name: 'Alma Clarke',
      email: 'alma@gmail.com',
      date: '12/02/2020',
      sale: 310,
      status: 'In Progress',
      register: '1 hour ago',
      progress: '80%',
      position: 'Accountant',
      office: 'Amazon',
    },
    {
      id: 4,
      name: 'Vincent Carpenter',
      email: 'vincent@gmail.com',
      date: '13/08/2020',
      sale: 100,
      status: 'Canceled',
      register: '1 day ago',
      progress: '60%',
      position: 'Data Scientist',
      office: 'Canada',
    },
    {
      id: 3,
      name: 'Alma Clarke',
      email: 'alma@gmail.com',
      date: '12/02/2020',
      sale: 310,
      status: 'In Progress',
      register: '1 hour ago',
      progress: '80%',
      position: 'Accountant',
      office: 'Amazon',
    },
    {
      id: 4,
      name: 'Vincent Carpenter',
      email: 'vincent@gmail.com',
      date: '13/08/2020',
      sale: 100,
      status: 'Canceled',
      register: '1 day ago',
      progress: '60%',
      position: 'Data Scientist',
      office: 'Canada',
    },
    {
      id: 3,
      name: 'Alma Clarke',
      email: 'alma@gmail.com',
      date: '12/02/2020',
      sale: 310,
      status: 'In Progress',
      register: '1 hour ago',
      progress: '80%',
      position: 'Accountant',
      office: 'Amazon',
    },
    {
      id: 4,
      name: 'Vincent Carpenter',
      email: 'vincent@gmail.com',
      date: '13/08/2020',
      sale: 100,
      status: 'Canceled',
      register: '1 day ago',
      progress: '60%',
      position: 'Data Scientist',
      office: 'Canada',
    },
    {
      id: 3,
      name: 'Alma Clarke',
      email: 'alma@gmail.com',
      date: '12/02/2020',
      sale: 310,
      status: 'In Progress',
      register: '1 hour ago',
      progress: '80%',
      position: 'Accountant',
      office: 'Amazon',
    },
    {
      id: 4,
      name: 'Vincent Carpenter',
      email: 'vincent@gmail.com',
      date: '13/08/2020',
      sale: 100,
      status: 'Canceled',
      register: '1 day ago',
      progress: '60%',
      position: 'Data Scientist',
      office: 'Canada',
    },
  ];

  return (
    <div>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link to="/components/tabs" className="text-primary hover:underline">
            Components
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Tabs</span>
        </li>
      </ul>
      <div className="space-y-8 pt-5">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Simple Tabs */}
          <div className="panel" id="simple">
            <div className="mb-5">
              <Tab.Group>
                <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${selected ? 'text-secondary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                      >
                        Feed
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${selected ? 'text-secondary !outline-none before:!w-full' : ''}
                                                before:inline-block' relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                      >
                        Story
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${selected ? 'text-secondary !outline-none before:!w-full' : ''}
                                                before:inline-block' relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                      >
                        Reels
                      </button>
                    )}
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="panel" id="simple">
                      <div className="mt-3 p-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]" role="tablist" aria-orientation="horizontal"><b>Preview</b></div>
                      <div className="mt-3 p-3 flex flex-wrap border-b justify-start border-white-light dark:border-[#191e3a]" role="tablist" aria-orientation="horizontal"><img className="w-20 h-20 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                        <div className='p-3'>Username</div></div>

                        <Swiper
                          modules={[Navigation, Pagination]}
                          navigation={{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }}
                          pagination={{ clickable: true }}
                          className="swiper max-w-3xl mx-auto mb-5"
                          id="slider1"
                          dir={themeConfig.rtlClass}
                          key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                        >
                          <div className="swiper-wrapper">
                            {items.map((item, i) => {
                              return (
                                <SwiperSlide key={i}>
                                  <img src={`/assets/images/${item}`} className="w-full max-h-80 object-cover" alt="itemImage" />
                                </SwiperSlide>
                              );
                            })}
                          </div>
                          <button className="swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
                            <IconCaretDown className="w-5 h-5 rtl:-rotate-90 rotate-90" />
                          </button>
                          <button className="swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
                            <IconCaretDown className="w-5 h-5 rtl:rotate-90 -rotate-90" />
                          </button>
                        </Swiper>
                      </div>
                    <div className="active pt-5">
                      <InputEmoji
                        value={text}
                        onChange={setText}
                        cleanOnEnter
                        borderRadius={5}
                        onEnter={handleOnEnter}
                        placeholder="Type a message"
                      />
                    </div>
                    <div className="mb-5">
                      <Flatpickr
                        data-enable-time
                        options={{
                          enableTime: true,
                          dateFormat: 'Y-m-d H:i',
                        }}
                        value={date2}
                        className="form-input ml-2 mt-2"
                        onChange={(date2) => setDate2(date2)}
                      />
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    
                    
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="pt-5">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>Disabled</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>

          </div>
           
          <div className="panel p-14">
            <div className="table-responsive mb-5 ml-2">
                      <table className='table-hover'>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Sale</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((data) => {
                            return (
                              <tr key={data.id}>
                                <td>
                                  <div className="whitespace-nowrap">{data.name}</div>
                                </td>
                                <td>{data.date}</td>
                                <td>{data.sale}</td>
                                <td>
                                  <span
                                    className={`badge whitespace-nowrap ${data.status === 'completed'
                                      ? 'bg-primary   '
                                      : data.status === 'Pending'
                                        ? 'bg-secondary'
                                        : data.status === 'In Progress'
                                          ? 'bg-success'
                                          : data.status === 'Canceled'
                                            ? 'bg-danger'
                                            : 'bg-primary'
                                      }`}
                                  >
                                    {data.status}
                                  </span>
                                </td>
                                <td className="text-center">
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
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default Tabs;
