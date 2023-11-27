import { Link, useNavigate } from 'react-router-dom';
import React, { KeyboardEvent, ChangeEvent } from 'react';
import { useEffect, Fragment, useState } from 'react';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import { removeCurrency, removeTrailingZeros, formatCurrency, formatCurrency2, formatDate, capitalizeLetters } from '../../data/funcoes';
import globalVars from '../../data/global'
import 'flatpickr/dist/flatpickr.css';
import Nouislider from '@x1mrdonut1x/nouislider-react';
import 'nouislider/distribute/nouislider.css';

interface MetasProps {
    categoria: number;
    categoria_id: string;
    percentual: number;
    onDataReceived: (categoria: number) => void;
    dataFromParent: any;
}

const Metas = ({ categoria, categoria_id, percentual, onDataReceived, dataFromParent }: MetasProps) => {

    const [skippingValue, setSkippingValue] = useState<any>(0);
    const [porcentagemDisponivel, setPorcentagemDisponivel] = useState<any>(100);
    const [start, setStart] = useState<any>(0);
    const [disabled, setDisabled] = useState<any>(false);

    const sendDataToParent = (skippingValue, categoria_id) => {
        onDataReceived(skippingValue, categoria_id);
    };


    useEffect(() => {
        sendDataToParent(skippingValue, categoria_id);
  
    }, [skippingValue]);

    useEffect(() => {
        if ((dataFromParent) <= 0) {
            setStart(skippingValue)
            setSkippingValue(skippingValue)
            setDisabled(true)
            console.log( dataFromParent+ ' ' + skippingValue )
        }
        else
        {
            setDisabled(false)
        }
    }, [dataFromParent]);

    const formatTooltip = (value) => {
        return parseInt(value) + "%";
    };

    return (
        <>
            <div className="panel w-full">
                <div>
                    <div className='ft-total text-center pb-14'>{capitalizeLetters(categoria)}</div>
                    <Nouislider
                        disabled={disabled}
                        start={start}
                        value={start}
                        step={1}
                        range={{
                            min: 0,
                            max: 100,
                        }}
                        tooltips={{
                            to: formatTooltip,
                        }}

                        onSlide={(value) => setSkippingValue(parseInt(value))}
                    />
                    <center>
                        <div className='subtitulo-valor pt-12'><b>Atual:</b> {percentual}</div>
                        <div className='subtitulo-valor pt-3'><b>Limite:</b> {skippingValue + '%'}</div></center>
                </div>
            </div>
        </>
    )
}
export default Metas;