import { Link, useNavigate } from 'react-router-dom';
import React, { KeyboardEvent, ChangeEvent } from 'react';
import { useEffect, Fragment, useState } from 'react';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import { removeCurrency, removeTrailingZeros, formatCurrency, formatCurrency2, formatDate, capitalizeLetters, difference } from '../../data/funcoes';
import globalVars from '../../data/global'
import 'flatpickr/dist/flatpickr.css';
import Nouislider from '@x1mrdonut1x/nouislider-react';
import 'nouislider/distribute/nouislider.css';
import IconMinus from '../Icon/IconMinus';
import IconPlus from '../Icon/IconPlus';
import IconArrowDown from '../Icon/Menu/IconArrowDown';
import IconArrowUp from '../Icon/Menu/IconArrowUp';
import IconSquare from '../Icon/Menu/IconSquare';


interface MetasProps {
    categoria: number;
    categoria_id: string;
    limit: number;
    percentual: number;
    percentualInicial: number;
    onDataReceived: (categoria: number) => void;
    dataFromParent: any;
}

const Metas = ({ categoria, categoria_id, percentual, onDataReceived, dataFromParent, percentualInicial, limit }: MetasProps) => {

    //const [value, setValue] = useState<any>(0);
    const [value, setValue] = useState<any>(percentualInicial);


    const [skippingValue, setSkippingValue] = useState<any>(0);
    const [porcentagemDisponivel, setPorcentagemDisponivel] = useState<any>(100);
    const [start, setStart] = useState<any>(0);
    const [disabled, setDisabled] = useState<any>(false);

    const sendDataToParent = (value, categoria_id) => {
        onDataReceived(value, categoria_id);
    };


    useEffect(() => {
        sendDataToParent(value, categoria_id);
    }, [value]);
    return (
        <>
            <div className="panel w-full">
                <div>
                    <div className='ft-total text-center pb-8'>{capitalizeLetters(categoria)}</div>
                    <div className="mb-5">
                        <div className="relative">
                            <div className="flex">
                                <button
                                    type="button"
                                    className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
                                    onClick={() => setValue(value > 0 ? value - 1 : 0)}
                                >
                                    <IconMinus className="w-5 h-5" />
                                </button>
                                <input
                                    type="number"
                                    placeholder="55"
                                    className="form-input rounded-none mpl-2 text-center form-input-sm p-0"
                                    min={0}
                                    max={100}
                                    readOnly
                                    value={value}
                                    onWheel={() => setValue(value > 0 ? value - 1 : 0)}
                                />
                                <button
                                    type="button"
                                    className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
                                    onClick={() => setValue(value < 100 && (value + 1) <= (value + dataFromParent) ? value + 1 : value)}
                                >
                                    <IconPlus />
                                </button>
                            </div>
                        </div>
                    </div>
                    <center>
                        <div className='text-small pt-2'><b>Atual:</b> {percentual + '%'}
                        {(difference(percentual,value) >= limit)?
                        <IconArrowUp width='20' className='float-right mr-5 mt-1' />
                        :(difference(percentual,value) <= (-1 * limit))?<IconArrowDown width='20' className='float-right mr-5 mt-1' />:<IconSquare width='20' className='float-right mr-5 mt-1' />}</div>
                        <div className='text-small pt-2'><b>Limite:</b> {value + '%'}</div></center>
                </div>
            </div>
        </>
    )
}
export default Metas;