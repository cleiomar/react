import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import Dropdown from '../components/Dropdown';
import axios from 'axios';
import InstaSearch from '../components/General/InstaSearch';

const Tabs = () => {

  const [tableData, setTableData] = useState([]);

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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
          <div className="grid 1xl:grid-cols-4 lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-5 pb-5 ">
            <InstaSearch />
          </div>
          <div className="panel p-14">
            <div className='h-70 overflow-auto'>
              <div className="table-responsive mb-5 ml-2">
                <table className='table-hover'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Sale</th>
                      <th>Billing</th>
                      <th>Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data) => {
                      return (

                        <tr key={data.ID}>
                          <td>
                            <div className="whitespace-nowrap">{data.Login}</div>
                          </td>
                          <td>{data.ID}</td>
                          <td>{data.sale}</td>
                          <td>{data.Billing}</td>
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
