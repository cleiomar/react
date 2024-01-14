import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

interface BoxBuscaAtivoProps {
    acao: string;
    categoriaNome: string;
    categoria: number;
}

const BoxBuscaAtivo = ({ acao, categoria, categoriaNome }: BoxBuscaAtivoProps) => {
    const [selectedOptionAcao, setSelectedOptionAcao] = useState(null);
    const [options, setOptions] = useState([]);
    const [searching, setSearching] = useState(false);

    const buscarAtivo = async (ativo: string, categoria: number) => {
        try {
            const data = await fetch(`http://localhost:3000/buscaativo/${ativo}/${categoria}`);
            const response = await data.json();
            const dados = response.map((item) => ({
                value: item.lista_ativos_id,
                codigo: item.ativo_codigo,
                logo: item.logo,
                label: item.nome
            }));
            setOptions(dados);
        } catch (error) {
            console.error("Erro ao buscar ativo:", error);
        } finally {
            setSearching(false); // Desativar estado de busca
        }
    };

    const SelectChangeAcao = (selectedOptionAcao) => {
        setSelectedOptionAcao({ value: selectedOptionAcao?.value, label: selectedOptionAcao?.label });
    };

    const InputChangeAcao = (ativo) => {
        if (ativo.length > 1) {
            setSearching(true); // Ativar estado de busca
            buscarAtivo(ativo, categoria);
        }
        else {
            setSearching(false); // Ativar estado de busca
            setOptions([])
            setSelectedOptionAcao({ value: '', label: 'Digite aqui e digite a  ' + categoriaNome })
        }
    };

    const customOptionLabel = ({ label, codigo, logo }) => (
        <Link to={'/acoes/' + codigo.toLowerCase()}><div className="flex"><img src={logo} height={'40px'} width={'40px'} /><div><div className='ml-5'><b>{label}</b></div><div className='ml-5 ft-micro'>{codigo}</div></div></div></Link>
    );
    const customOptionLabel2 = ({ label, codigo, logo }) => (
        <Link to={'/acoes/' + codigo.toLowerCase()}><div className="flex"><img src={logo} height={'40px'} width={'40px'} /><div><div className='ml-5'><b>{label}</b></div><div className='ml-5 ft-micro'>{codigo}</div></div></div></Link>
    );

    const formatOptionLabel = (option, { context }) => {
        return context === 'menu' ? customOptionLabel(option) : option.label;
    };


    return (
        <Select
            className='text-sm sm:mr-5 xl:mr-5 float-right sm:w-full w-400 h-40'
            name="buscarAcao"
            placeholder={'Digite aqui e digite a  ' + categoriaNome}
            value={selectedOptionAcao}
            onChange={SelectChangeAcao}
            onInputChange={InputChangeAcao}
            noOptionsMessage={() => 'Nenhuma ' + categoriaNome + ' encontrada'}
            options={options}
            getOptionLabel={option => option.codigo}
            getOptionValue={option => option.label}
            isSearchable={true}
            formatOptionLabel={formatOptionLabel}
            isLoading={searching}
            components={{
                DropdownIndicator: null,
            }}
        />
    );
};

export default BoxBuscaAtivo;
