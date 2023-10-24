import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InputEmoji from "react-input-emoji";
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import Dropdown from '../components/Dropdown';
import Select from 'react-select';
import { TagsInput } from "react-tag-input-component";
import IconMapPin from '../components/Icon/IconMapPin';
import axios from 'axios';

const Tabs = () => {

  const options = [
    { value: '1', label: 'Feed' },
    { value: '2', label: 'Stories' },
    { value: '3', label: 'Reels' },
  ];

  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  const [selected, setSelected] = useState(["cleiomar"]);
  let newItems = ["item1", "item2", "item3"];

  const addNewItems = () => {
    // Mapeia os novos itens e adiciona-os à array 'selected'
    const updatedSelected = [...selected, ...newItems];
    setSelected(updatedSelected);
    //console.log(updatedSelected);
  };



  const [date2, setDate2] = useState<any>('2022-07-05 12:00');
  //const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Função para alterar elementos com a mesma classe
    const changeElementsWithClass = () => {
      const elements = document.querySelectorAll('.react-input-emoji--input'); // Substitua 'sua-classe' pela classe que deseja selecionar
      elements.forEach((element) => {
        element.style.height = '250px'; // Exemplo de estilo a ser aplicado
      });
      
    };

    // Chame a função quando o componente for montado
    changeElementsWithClass();
  }, []);


  useEffect(() => {
    // Função para alterar elementos com a mesma classe
    const changeElementsWithClass = () => {
      const elements = document.querySelectorAll('.rti--container'); // Substitua 'sua-classe' pela classe que deseja selecionar
      elements.forEach((element) => {
        element.style.height = '150px'; // Exemplo de estilo a ser aplicado
        element.style.overflowY = 'scroll'; // Exemplo de estilo a ser aplicado
      });
    };

    // Chame a função quando o componente for montado
    changeElementsWithClass();

   
  }, []);

  useEffect(() => {
    // Função para buscar os dados dos usuários
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setTableData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados dos usuários:', error);
      }
    };

    // Chamada da função ao montar o componente
    fetchUsers();
  }, []);

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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            <div className="panel" id="simple">

              <div className="mt-3 p-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]" role="tablist" aria-orientation="horizontal"><b>Preview</b></div>
              <div className="mt-3 p-3 flex flex-wrap border-b justify-start border-white-light dark:border-[#191e3a]" role="tablist" aria-orientation="horizontal"><img className="w-20 h-20 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                <div className='p-6'>Username</div>
              </div>
              <div className="panel h-50" id="simple"></div>
              
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-2 ml-2 mt-14 ">
                <button type="button" className="btn btn-outline-primary btn-sm">Prev</button>
                <button type="button" className="btn btn-outline-primary btn-sm">Next</button>
              </div>
            </div>



            <div className="panel" id="simple">

              <div className="mt-3 p-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]" role="tablist" aria-orientation="horizontal"><b>Options</b>
              </div>


              <div className="active pt-5">
                <label className='ml-2' htmlFor="iconRight">Text</label>
                <InputEmoji
                  value={text}
                  onChange={setText}
                  cleanOnEnter
                  borderRadius={5}
                  onEnter={handleOnEnter}
                  placeholder="Type a message"
                />
              </div>
              <div className="mb-5 p-2 mt-3">
                <label htmlFor="iconRight">Action</label>
                <Select defaultValue={options[0]} options={options} isSearchable={false} />
              </div>
              <div className="mb-5 p-2 mt-3">
                <label htmlFor="iconRight">Data & Time</label>
                <Flatpickr
                  data-enable-time
                  options={{
                    enableTime: true,
                    dateFormat: 'Y-m-d H:i',
                  }}
                  value={date2}
                  className="form-input"
                  onChange={(date2) => setDate2(date2)}
                />
              </div>
              <div className='ml-2 pr-2'>
                <label htmlFor="iconRight">Usernames</label>
                <TagsInput
                  value={selected}
                  onChange={setSelected}
                  name="hashtags" />
              </div>
              <div className="mb-5 pr-2">
                <div className='mt-5 ml-2'>
                  <label htmlFor="iconRight">Localization</label>
                  <div className="flex">
                    <input id="iconRight" type="text" placeholder="Notification" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                      <IconMapPin className="text-white-dark" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 lg:grid-cols-3 ml-2 mt-14 ">
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={addNewItems}>Save Post</button>
                <button type="button" className="btn btn-outline-primary btn-sm">Post Now</button>
                <button type="button" className="btn btn-outline-primary btn-sm">Schedule</button>
              </div>
            </div>

          </div>
          <div className="panel p-14">
            <div className='h-70'>
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

            
            <div className='flex justify-center pt-10'>
                <ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto">
                  <li>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Prev
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      1
                    </button>
                  </li>
                  <li>
                    <button type="button"
                    className="btn btn-outline-primary btn-sm">
                      2
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      3
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </div>

          </div>


        </div>
      </div>
    </div >
  );
};

export default Tabs;
