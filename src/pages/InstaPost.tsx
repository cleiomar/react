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

  function formatData(data) {

    var date = new Date(data);

    // Extraia os componentes da data e hora
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adicione 1 ao mês, pois os meses são baseados em zero
    var day = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}


  const options = [
    { value: '1', label: 'Feed' },
    { value: '2', label: 'Stories' },
    { value: '3', label: 'Reels' },
  ];


  const [date2, setDate2] = useState<any>('2022-07-05 12:00');

  useEffect(() => {
    const changeElementsWithClass = () => {
      const elements = document.querySelectorAll('.react-input-emoji--input');
      elements.forEach((element) => {
        element.style.height = '250px';
      });
      
    };

    changeElementsWithClass();
  }, []);


  useEffect(() => {
    const changeElementsWithClass = () => {
      const elements = document.querySelectorAll('.rti--container');
      elements.forEach((element) => {
        element.style.height = '150px';
        element.style.overflowY = 'scroll';
      });
    };

    changeElementsWithClass();

   
  }, []);

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/posts');
        setTableData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados dos usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  const [text, setText] = useState("");
  function onChangeText(value) {
    setText(value);
  }

  const [action, setAction] = useState();
  function onChangeAction(value) {
    setAction(value);
  }

  const [datatime, setDatatime] = useState();
  function onChangeDatatime(value) {
    setDatatime(value);
  }

  const [mentions, setMentions] = useState([]);

  const [localization, setLocalization] = useState();
  function onChangeLocalization(value) {
    setLocalization(value);
  }
  

  const fetchApiPost = async () => {
    try {
        const dados = new FormData();

        dados.append('text', text);
        dados.append('action', action);
        dados.append('datatime', datatime);
        dados.append('mentions', mentions);
        dados.append('localization', localization);

        const url = 'http://localhost:3000/api/autopost';

        const options: RequestInit = {
            method: 'POST',
            body: dados,
        };

        const response = await fetch(url, options);

        if (response.ok) {
            const responseData = await response.json();
        } else {
            throw new Error('Erro na solicitação POST');
        }
    } catch (error) {
        console.error('Erro ao enviar a solicitação POST:', error);
        throw error;
    }
};


function converterArrayParaFormato(array) {
  const meuArray = JSON.parse(array);
  return meuArray.join(', ');
}
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
                  onChange={onChangeText}
                  borderRadius={5}
                  placeholder="Type a message"
                />
              </div>
              <div className="mb-5 p-2 mt-3">
                <label htmlFor="iconRight">Action</label>
                <Select defaultValue={options[0]} 
                  onChange={(e) => onChangeAction(e.value)}
                  options={options} isSearchable={false} />
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
                  onChange={(date2) => onChangeDatatime(date2)}
                />
              </div>
              <div className='ml-2 pr-2'>
                <label htmlFor="iconRight">Usernames</label>
                <TagsInput
                  value={mentions}
                  onChange={setMentions}
                  name="hashtags" />
              </div>
              <div className="mb-5 pr-2">
                <div className='mt-5 ml-2'>
                  <label htmlFor="iconRight">Localization</label>
                  <div className="flex">
                    <input id="iconRight" type="text" onChange={(e) => onChangeLocalization(e.target.value)} placeholder="Notification" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                      <IconMapPin className="text-white-dark" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 lg:grid-cols-3 ml-2 mt-14 ">
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={fetchApiPost}>Save Post</button>
                <button type="button" className="btn btn-outline-primary btn-sm">Post Now</button>
                <button type="button" className="btn btn-outline-primary btn-sm">Schedule</button>
              </div>
            </div>

          </div>
          <div className="panel">
            <div className='h-71'>
            <div className="table-responsive mb-5 ml-2 h-71">
              <table className='table-hover'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Preview</th>
                    <th><div className='w-300'>Text</div></th>
                    <th><div className='w-300'>Mentions</div></th>
                    <th><center className='w-150'>Scheduler</center></th>
                    <th><center className='w-150'>Localization</center></th>
                    <th><center className='w-150'>Status</center></th>
                    <th><center className='w-150'>Action</center></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, index) => {
                    return (
                      <tr key={data.id}>
                        <td>
                          <div className="whitespace-nowrap">{index}</div>
                        </td>
                        <td><img className="w-20 h-12 rounded-md overflow-hidden object-cover " src={data.preview}/></td>
                        <td>{data.text}</td>
                        <td>{converterArrayParaFormato('["qweweqw", "qweqweqe", "sdasdasd", "sdasdasd4", "qweqweqe4"]')}</td>
                        <td><center className='w-150'>{formatData(data.schedule_time)}</center></td>
                        <td><center className='w-150'>{data.localization}</center></td>
                        <td><center className='w-150'>
                          <span
                            className={`badge whitespace-nowrap ${data.status === 1
                              ? 'bg-success'
                              : data.status === 2
                                ? 'bg-secondary'
                                : data.status === 3
                                  ? 'bg-success'
                                  : data.status === 4
                                    ? 'bg-danger'
                                    : 'bg-primary'
                              }`}
                          >{(data.status === 1) ? 'Programmed':
                          (data.status === 2) ? 'Posted':
                          (data.status === 3) ? 'Canceled':
                          (data.status === 4) ? 'Error':''}
                          </span></center>
                        </td>
                        <td><center className='w-150'>{(data.type === 1) ? 'Feed':
                        (data.type === 2) ? 'Stories':
                        (data.type === 3) ? 'Reels':''}</center></td>
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
