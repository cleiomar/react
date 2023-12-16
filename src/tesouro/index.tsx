import React, { useEffect, useState, ChangeEvent } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import globalVars from '../data/global'
import Dropdown from '../components/Dropdown';
import { useSelector } from 'react-redux';
import IconClock from '../components/Icon/IconClock';
import { converterDataParaBrasil, calcularVariaveis} from '../data/funcoes';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { DataTable } from 'mantine-datatable';
import Select from 'react-select';
import puppeteer from 'puppeteer';
import { C } from '@fullcalendar/core/internal-common';


interface BondMarket {
    opngDtTm: string;
    clsgDtTm: string;
}

interface BondInfo {
    TrsrBdMkt: BondMarket;
    untrInvstmtVal: number;
    anulInvstmtRate: number;
    untrRedVal: number;
    anulRedRate: number;
}

interface TreasuryBond {
    TrsrBd: {
        PrcgLst: BondInfo[];
    };
}


const Tesouro = () => {

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const treasurybonds = {
        "responseStatus": 200,
        "responseStatusText": "success",
        "statusInfo": "OK",
        "response": {
            "BdTxTp": {
                "cd": 0
            },
            "TrsrBondMkt": {
                "opngDtTm": "2023-12-15T09:25:00",
                "clsgDtTm": "2023-12-18T05:00:00",
                "qtnDtTm": "2023-12-15T09:19:41.967",
                "stsCd": 1,
                "sts": "Aberto"
            },
            "TrsrBdTradgList": [
                {
                    "TrsrBd": {
                        "cd": 171,
                        "nm": "Tesouro Selic 2024",
                        "featrs": "Título com rentabilidade diária vinculada à taxa de juros da economia (taxa Selic). Isso significa que se a taxa Selic aumentar a sua rentabilidade aumenta e se a taxa Selic diminuir, sua rentabilidade diminui.\r\n",
                        "mtrtyDt": "2024-09-01T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Como não paga juros semestrais, é mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento\r\n",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de curto prazo\r\n",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 0.0107,
                        "minRedQty": 0.01,
                        "untrRedVal": 14212.420000,
                        "minRedVal": 142.120000,
                        "isinCd": "BRSTNCLF0008",
                        "FinIndxs": {
                            "cd": 17,
                            "nm": "SELIC"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 4,
                        "nm": "LFT",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 210100
                },
                {
                    "TrsrBd": {
                        "cd": 164,
                        "nm": "Tesouro Selic 2025",
                        "featrs": "Título com rentabilidade diária vinculada à taxa de juros da economia (taxa Selic). Isso significa que se a taxa Selic aumentar a sua rentabilidade aumenta e se a taxa Selic diminuir, sua rentabilidade diminui.",
                        "mtrtyDt": "2025-03-01T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Como não paga juros semestrais, é mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de curto prazo",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 0.0179,
                        "minRedQty": 0.01,
                        "untrRedVal": 14210.400000,
                        "minRedVal": 142.100000,
                        "isinCd": "BRSTNCLF1RC4",
                        "FinIndxs": {
                            "cd": 17,
                            "nm": "SELIC"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 4,
                        "nm": "LFT",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 210100
                },
                {
                    "TrsrBd": {
                        "cd": 177,
                        "nm": "Tesouro Selic 2026",
                        "featrs": "Título com rentabilidade diária vinculada à taxa de juros da economia (taxa Selic). Isso significa que se a taxa Selic aumentar a sua rentabilidade aumenta e se a taxa Selic diminuir, sua rentabilidade diminui.\r\n",
                        "mtrtyDt": "2026-03-01T00:00:00",
                        "minInvstmtAmt": 142.060000,
                        "untrInvstmtVal": 14206.520000,
                        "invstmtStbl": "Como não paga juros semestrais, é mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento\r\n",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de médio prazo\r\n",
                        "anulInvstmtRate": 0.0423,
                        "anulRedRate": 0.0523,
                        "minRedQty": 0.01,
                        "untrRedVal": 14197.110000,
                        "minRedVal": 141.970000,
                        "isinCd": "BRSTNCLF1RE0",
                        "FinIndxs": {
                            "cd": 17,
                            "nm": "SELIC"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 4,
                        "nm": "LFT",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 210100
                },
                {
                    "TrsrBd": {
                        "cd": 172,
                        "nm": "Tesouro Selic 2027",
                        "featrs": "Título com rentabilidade diária vinculada à taxa de juros da economia (taxa Selic). Isso significa que se a taxa Selic aumentar a sua rentabilidade aumenta e se a taxa Selic diminuir, sua rentabilidade diminui.\r\n",
                        "mtrtyDt": "2027-03-01T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Como não paga juros semestrais, é mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento\r\n",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de curto prazo\r\n",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 0.1259,
                        "minRedQty": 0.01,
                        "untrRedVal": 14156.470000,
                        "minRedVal": 141.560000,
                        "isinCd": "BRSTNCLF1RG5",
                        "FinIndxs": {
                            "cd": 17,
                            "nm": "SELIC"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 4,
                        "nm": "LFT",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 210100
                },
                {
                    "TrsrBd": {
                        "cd": 178,
                        "nm": "Tesouro Selic 2029",
                        "featrs": "Título com rentabilidade diária vinculada à taxa de juros da economia (taxa Selic). Isso significa que se a taxa Selic aumentar a sua rentabilidade aumenta e se a taxa Selic diminuir, sua rentabilidade diminui.\r\n",
                        "mtrtyDt": "2029-03-01T00:00:00",
                        "minInvstmtAmt": 141.000000,
                        "untrInvstmtVal": 14100.970000,
                        "invstmtStbl": "Como não paga juros semestrais, é mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento\r\n",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de médio prazo\r\n",
                        "anulInvstmtRate": 0.1620,
                        "anulRedRate": 0.1720,
                        "minRedQty": 0.01,
                        "untrRedVal": 14087.360000,
                        "minRedVal": 140.870000,
                        "isinCd": "BRSTNCLF1RL5",
                        "FinIndxs": {
                            "cd": 17,
                            "nm": "SELIC"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 4,
                        "nm": "LFT",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 210100
                },
                {
                    "TrsrBd": {
                        "cd": 173,
                        "nm": "Tesouro Prefixado 2024",
                        "featrs": "Título prefixado, ou seja, no momento da compra, você já sabe exatamente quanto irá receber no futuro (sempre R$ 1.000 por unidade de título).\r\n",
                        "mtrtyDt": "2024-07-01T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "É mais interessante para quem pode deixar o seu dinheiro render até o vencimento do investimento, pois não paga juro semestrais. Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelos seus valores de mercado.\r\n",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de curto prazo.\r\n",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 10.6700,
                        "minRedQty": 0.01,
                        "untrRedVal": 947.510000,
                        "minRedVal": 9.480000,
                        "isinCd": "BRSTNCLTN7W3",
                        "FinIndxs": {
                            "cd": 19,
                            "nm": "PREFIXADO"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 1,
                        "nm": "LTN",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 100000
                },
                {
                    "TrsrBd": {
                        "cd": 161,
                        "nm": "Tesouro Prefixado 2025",
                        "featrs": "Título prefixado, ou seja, no momento da compra, você já sabe exatamente quanto irá receber no futuro (sempre R$ 1.000 por unidade de título).",
                        "mtrtyDt": "2025-01-01T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "É mais interessante para quem pode deixar o seu dinheiro render até o vencimento do investimento, pois não paga juro semestrais. Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelos seus valores de mercado.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de médio prazo.",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 10.1300,
                        "minRedQty": 0.01,
                        "untrRedVal": 903.850000,
                        "minRedVal": 9.040000,
                        "isinCd": "BRSTNCLTN7N2",
                        "FinIndxs": {
                            "cd": 19,
                            "nm": "PREFIXADO"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 1,
                        "nm": "LTN",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 100000
                },
                {
                    "TrsrBd": {
                        "cd": 151,
                        "nm": "Tesouro Prefixado com Juros Semestrais 2025",
                        "featrs": "Título prefixado, ou seja, no momento da compra, você já sabe exatamente quanto irá receber no futuro (sempre R$ 1.000 por unidade de título + último pagamento de  juros semestrais).",
                        "mtrtyDt": "2025-01-01T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "É mais interessante para quem precisa dos seus rendimentos para complementar sua renda, pois paga juros a cada semestre (cupons de juros) Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 10.1600,
                        "minRedQty": 0.01,
                        "untrRedVal": 1042.680000,
                        "minRedVal": 10.430000,
                        "isinCd": "BRSTNCNTF170",
                        "FinIndxs": {
                            "cd": 19,
                            "nm": "PREFIXADO"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 9,
                        "nm": "NTN-F",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 950199
                },
                {
                    "TrsrBd": {
                        "cd": 165,
                        "nm": "Tesouro Prefixado 2026",
                        "featrs": "Título prefixado, ou seja, no momento da compra, você já sabe exatamente quanto irá receber no futuro (sempre R$ 1.000 por unidade de título).\r\n",
                        "mtrtyDt": "2026-01-01T00:00:00",
                        "minInvstmtAmt": 33.060000,
                        "untrInvstmtVal": 826.700000,
                        "invstmtStbl": "É mais interessante para quem pode deixar o seu dinheiro render até o vencimento do investimento, pois não paga juro semestrais. Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelos seus valores de mercado.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de médio prazo.\r\n",
                        "anulInvstmtRate": 9.7400,
                        "anulRedRate": 9.8600,
                        "minRedQty": 0.01,
                        "untrRedVal": 824.540000,
                        "minRedVal": 8.250000,
                        "isinCd": "BRSTNCLTN7U7",
                        "FinIndxs": {
                            "cd": 19,
                            "nm": "PREFIXADO"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 1,
                        "nm": "LTN",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 100000
                },
                {
                    "TrsrBd": {
                        "cd": 157,
                        "nm": "Tesouro Prefixado com Juros Semestrais 2027",
                        "featrs": "Título prefixado, ou seja, no momento da compra, você já sabe exatamente quanto irá receber no futuro (sempre R$ 1.000 por unidade de título + último pagamento de juros semestrais).",
                        "mtrtyDt": "2027-01-01T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "É mais interessante para quem precisa dos seus rendimentos para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 9.9900,
                        "minRedQty": 0.01,
                        "untrRedVal": 1044.800000,
                        "minRedVal": 10.450000,
                        "isinCd": "BRSTNCNTF1P8",
                        "FinIndxs": {
                            "cd": 19,
                            "nm": "PREFIXADO"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 9,
                        "nm": "NTN-F",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 950199
                },
                {
                    "TrsrBd": {
                        "cd": 174,
                        "nm": "Tesouro Prefixado 2029",
                        "featrs": "Título prefixado, ou seja, no momento da compra, você já sabe exatamente quanto irá receber no futuro (sempre R$ 1.000 por unidade de título).",
                        "mtrtyDt": "2029-01-01T00:00:00",
                        "minInvstmtAmt": 30.510000,
                        "untrInvstmtVal": 610.260000,
                        "invstmtStbl": "É mais interessante para quem pode deixar o seu dinheiro render até o vencimento do investimento, pois não paga juro semestrais. Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelos seus valores de mercado.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de médio prazo.",
                        "anulInvstmtRate": 10.3300,
                        "anulRedRate": 10.4500,
                        "minRedQty": 0.01,
                        "untrRedVal": 606.690000,
                        "minRedVal": 6.070000,
                        "isinCd": "BRSTNCLTN806",
                        "FinIndxs": {
                            "cd": 19,
                            "nm": "PREFIXADO"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 1,
                        "nm": "LTN",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 100000
                },
                {
                    "TrsrBd": {
                        "cd": 162,
                        "nm": "Tesouro Prefixado com Juros Semestrais 2029",
                        "featrs": "Título prefixado, ou seja, no momento da compra, você já sabe exatamente quanto irá receber no futuro (sempre R$ 1.000 por unidade de título + último pagamento de juros semestrais).",
                        "mtrtyDt": "2029-01-01T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "É mais interessante para quem precisa dos seus rendimentos para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 10.4100,
                        "minRedQty": 0.01,
                        "untrRedVal": 1030.520000,
                        "minRedVal": 10.310000,
                        "isinCd": "BRSTNCNTF1Q6",
                        "FinIndxs": {
                            "cd": 19,
                            "nm": "PREFIXADO"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 9,
                        "nm": "NTN-F",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 950199
                },
                {
                    "TrsrBd": {
                        "cd": 166,
                        "nm": "Tesouro Prefixado com Juros Semestrais 2031",
                        "featrs": "Título prefixado, ou seja, no momento da compra, você já sabe exatamente quanto irá receber no futuro (sempre R$ 1.000 por unidade de título + último pagamento de juros semestrais).\r\n",
                        "mtrtyDt": "2031-01-01T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "É mais interessante para quem precisa dos seus rendimentos para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.\r\n",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.\r\n",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 10.6500,
                        "minRedQty": 0.01,
                        "untrRedVal": 1015.560000,
                        "minRedVal": 10.160000,
                        "isinCd": "BRSTNCNTF204",
                        "FinIndxs": {
                            "cd": 19,
                            "nm": "PREFIXADO"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 9,
                        "nm": "NTN-F",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 950199
                },
                {
                    "TrsrBd": {
                        "cd": 176,
                        "nm": "Tesouro Prefixado com Juros Semestrais 2033",
                        "featrs": "Título prefixado, ou seja, no momento da compra, você já sabe exatamente quanto irá receber no futuro (sempre R$ 1.000 por unidade de título + último pagamento de juros semestrais).",
                        "mtrtyDt": "2033-01-01T00:00:00",
                        "minInvstmtAmt": 30.310000,
                        "untrInvstmtVal": 1010.460000,
                        "invstmtStbl": "É mais interessante para quem precisa dos seus rendimentos para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 10.6500,
                        "anulRedRate": 10.7700,
                        "minRedQty": 0.01,
                        "untrRedVal": 1003.660000,
                        "minRedVal": 10.040000,
                        "isinCd": "BRSTNCNTF212",
                        "FinIndxs": {
                            "cd": 19,
                            "nm": "PREFIXADO"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 9,
                        "nm": "NTN-F",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 950199
                },
                {
                    "TrsrBd": {
                        "cd": 103,
                        "nm": "Tesouro IPCA+ 2024",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
                        "mtrtyDt": "2024-08-15T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é compostos por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento, pois não paga juros semestrais. Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 6.8500,
                        "minRedQty": 0.01,
                        "untrRedVal": 3992.390000,
                        "minRedVal": 39.920000,
                        "isinCd": "BRSTNCNTB0K5",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 10,
                        "nm": "NTNB PRINC",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760198
                },
                {
                    "TrsrBd": {
                        "cd": 84,
                        "nm": "Tesouro IPCA+ com Juros Semestrais 2024",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
                        "mtrtyDt": "2024-08-15T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado. ",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": null,
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 6.8500,
                        "minRedQty": 0.01,
                        "untrRedVal": 4232.460000,
                        "minRedVal": 42.320000,
                        "isinCd": "BRSTNCNTB096",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 3,
                        "nm": "NTN-B",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760199
                },
                {
                    "TrsrBd": {
                        "cd": 170,
                        "nm": "Tesouro IPCA+ 2026",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).\r\n",
                        "mtrtyDt": "2026-08-15T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento, pois não paga juros semestrais. Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.\r\n",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.\r\n",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 5.3200,
                        "minRedQty": 0.01,
                        "untrRedVal": 3633.060000,
                        "minRedVal": 36.330000,
                        "isinCd": "BRSTNCNTB4W2",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 10,
                        "nm": "NTNB PRINC",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760198
                },
                {
                    "TrsrBd": {
                        "cd": 156,
                        "nm": "Tesouro IPCA+ com Juros Semestrais 2026",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
                        "mtrtyDt": "2026-08-15T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 5.3500,
                        "minRedQty": 0.01,
                        "untrRedVal": 4318.280000,
                        "minRedVal": 43.180000,
                        "isinCd": "BRSTNCNTB4U6",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 3,
                        "nm": "NTN-B",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760199
                },
                {
                    "TrsrBd": {
                        "cd": 179,
                        "nm": "Tesouro IPCA+ 2029",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).\r\n",
                        "mtrtyDt": "2029-05-15T00:00:00",
                        "minInvstmtAmt": 31.630000,
                        "untrInvstmtVal": 3163.230000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento, pois não paga juros semestrais. Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.\r\n",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.\r\n",
                        "anulInvstmtRate": 5.2800,
                        "anulRedRate": 5.4000,
                        "minRedQty": 0.01,
                        "untrRedVal": 3142.070000,
                        "minRedVal": 31.420000,
                        "isinCd": "BRSTNCNTB6A3",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 10,
                        "nm": "NTNB PRINC",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760198
                },
                {
                    "TrsrBd": {
                        "cd": 167,
                        "nm": "Tesouro IPCA+ com Juros Semestrais 2030",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).\r\n",
                        "mtrtyDt": "2030-08-15T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado. \r\n",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.\r\n",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 5.4200,
                        "minRedQty": 0.01,
                        "untrRedVal": 4388.880000,
                        "minRedVal": 43.890000,
                        "isinCd": "BRSTNCNTB3B8",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 3,
                        "nm": "NTN-B",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760199
                },
                {
                    "TrsrBd": {
                        "cd": 188,
                        "nm": "Tesouro Educa+ 2026",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2030-12-15T00:00:00",
                        "minInvstmtAmt": 33.150000,
                        "untrInvstmtVal": 3315.690000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.2800,
                        "anulRedRate": 5.4000,
                        "minRedQty": 0.01,
                        "untrRedVal": 3297.150000,
                        "minRedVal": 32.970000,
                        "isinCd": "BRSTNCNAP0G8",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2026-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 189,
                        "nm": "Tesouro Educa+ 2027",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2031-12-15T00:00:00",
                        "minInvstmtAmt": 31.460000,
                        "untrInvstmtVal": 3146.940000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.3000,
                        "anulRedRate": 5.4200,
                        "minRedQty": 0.01,
                        "untrRedVal": 3125.810000,
                        "minRedVal": 31.260000,
                        "isinCd": "BRSTNCNAP0P9",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2027-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 175,
                        "nm": "Tesouro IPCA+ com Juros Semestrais 2032",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
                        "mtrtyDt": "2032-08-15T00:00:00",
                        "minInvstmtAmt": 44.290000,
                        "untrInvstmtVal": 4429.830000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado. ",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 5.3900,
                        "anulRedRate": 5.5100,
                        "minRedQty": 0.01,
                        "untrRedVal": 4393.160000,
                        "minRedVal": 43.930000,
                        "isinCd": "BRSTNCNTB674",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 3,
                        "nm": "NTN-B",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760199
                },
                {
                    "TrsrBd": {
                        "cd": 190,
                        "nm": "Tesouro Educa+ 2028",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2032-12-15T00:00:00",
                        "minInvstmtAmt": 59.670000,
                        "untrInvstmtVal": 2983.500000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.3300,
                        "anulRedRate": 5.4500,
                        "minRedQty": 0.01,
                        "untrRedVal": 2960.100000,
                        "minRedVal": 29.600000,
                        "isinCd": "BRSTNCNAP0H6",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2028-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 191,
                        "nm": "Tesouro Educa+ 2029",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2033-12-15T00:00:00",
                        "minInvstmtAmt": 56.490000,
                        "untrInvstmtVal": 2824.970000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.3700,
                        "anulRedRate": 5.4900,
                        "minRedQty": 0.01,
                        "untrRedVal": 2799.640000,
                        "minRedVal": 28.000000,
                        "isinCd": "BRSTNCNAP0I4",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2029-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 192,
                        "nm": "Tesouro Educa+ 2030",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2034-12-15T00:00:00",
                        "minInvstmtAmt": 53.490000,
                        "untrInvstmtVal": 2674.720000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.4000,
                        "anulRedRate": 5.5200,
                        "minRedQty": 0.01,
                        "untrRedVal": 2647.740000,
                        "minRedVal": 26.480000,
                        "isinCd": "BRSTNCNAP0J2",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2030-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 138,
                        "nm": "Tesouro IPCA+ 2035",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
                        "mtrtyDt": "2035-05-15T00:00:00",
                        "minInvstmtAmt": 45.600000,
                        "untrInvstmtVal": 2280.210000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é compostos por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento, pois não paga juros semestrais. Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 5.4600,
                        "anulRedRate": 5.5800,
                        "minRedQty": 0.01,
                        "untrRedVal": 2249.610000,
                        "minRedVal": 22.500000,
                        "isinCd": "BRSTNCNTB3E2",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 10,
                        "nm": "NTNB PRINC",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760198
                },
                {
                    "TrsrBd": {
                        "cd": 111,
                        "nm": "Tesouro IPCA+ com Juros Semestrais 2035",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
                        "mtrtyDt": "2035-05-15T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado. ",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 5.5600,
                        "minRedQty": 0.01,
                        "untrRedVal": 4349.110000,
                        "minRedVal": 43.490000,
                        "isinCd": "BRSTNCNTB0O7",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 3,
                        "nm": "NTN-B",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760199
                },
                {
                    "TrsrBd": {
                        "cd": 193,
                        "nm": "Tesouro Educa+ 2031",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2035-12-15T00:00:00",
                        "minInvstmtAmt": 50.620000,
                        "untrInvstmtVal": 2531.150000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.4300,
                        "anulRedRate": 5.5500,
                        "minRedQty": 0.01,
                        "untrRedVal": 2502.780000,
                        "minRedVal": 25.030000,
                        "isinCd": "BRSTNCNAP0K0",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2031-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 194,
                        "nm": "Tesouro Educa+ 2032",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2036-12-15T00:00:00",
                        "minInvstmtAmt": 47.880000,
                        "untrInvstmtVal": 2394.080000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.4600,
                        "anulRedRate": 5.5800,
                        "minRedQty": 0.01,
                        "untrRedVal": 2364.560000,
                        "minRedVal": 23.650000,
                        "isinCd": "BRSTNCNAP0Q7",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2032-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 195,
                        "nm": "Tesouro Educa+ 2033",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2037-12-15T00:00:00",
                        "minInvstmtAmt": 45.310000,
                        "untrInvstmtVal": 2265.700000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.4800,
                        "anulRedRate": 5.6000,
                        "minRedQty": 0.01,
                        "untrRedVal": 2235.240000,
                        "minRedVal": 22.350000,
                        "isinCd": "BRSTNCNAP0R5",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2033-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 196,
                        "nm": "Tesouro Educa+ 2034",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2038-12-15T00:00:00",
                        "minInvstmtAmt": 42.870000,
                        "untrInvstmtVal": 2143.580000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.5000,
                        "anulRedRate": 5.6200,
                        "minRedQty": 0.01,
                        "untrRedVal": 2112.380000,
                        "minRedVal": 21.120000,
                        "isinCd": "BRSTNCNAP0L8",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2034-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 197,
                        "nm": "Tesouro Educa+ 2035",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2039-12-15T00:00:00",
                        "minInvstmtAmt": 40.590000,
                        "untrInvstmtVal": 2029.800000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.5100,
                        "anulRedRate": 5.6300,
                        "minRedQty": 0.01,
                        "untrRedVal": 1998.000000,
                        "minRedVal": 19.980000,
                        "isinCd": "BRSTNCNAP0M6",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2035-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 168,
                        "nm": "Tesouro IPCA+ com Juros Semestrais 2040",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).\r\n",
                        "mtrtyDt": "2040-08-15T00:00:00",
                        "minInvstmtAmt": 44.740000,
                        "untrInvstmtVal": 4474.820000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado. \r\n",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.\r\n",
                        "anulInvstmtRate": 5.5200,
                        "anulRedRate": 5.6400,
                        "minRedQty": 0.01,
                        "untrRedVal": 4418.010000,
                        "minRedVal": 44.180000,
                        "isinCd": "BRSTNCNTB3C6",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 3,
                        "nm": "NTN-B",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760199
                },
                {
                    "TrsrBd": {
                        "cd": 198,
                        "nm": "Tesouro Educa+ 2036",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2040-12-15T00:00:00",
                        "minInvstmtAmt": 38.370000,
                        "untrInvstmtVal": 1918.830000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.5300,
                        "anulRedRate": 5.6500,
                        "minRedQty": 0.01,
                        "untrRedVal": 1886.630000,
                        "minRedVal": 18.870000,
                        "isinCd": "BRSTNCNAP0N4",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2036-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 199,
                        "nm": "Tesouro Educa+ 2037",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2041-12-15T00:00:00",
                        "minInvstmtAmt": 36.260000,
                        "untrInvstmtVal": 1813.200000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.5500,
                        "anulRedRate": 5.6700,
                        "minRedQty": 0.01,
                        "untrRedVal": 1780.760000,
                        "minRedVal": 17.810000,
                        "isinCd": "BRSTNCNAP0O2",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2037-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 200,
                        "nm": "Tesouro Educa+ 2038",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2042-12-15T00:00:00",
                        "minInvstmtAmt": 34.300000,
                        "untrInvstmtVal": 1715.420000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.5600,
                        "anulRedRate": 5.6800,
                        "minRedQty": 0.01,
                        "untrRedVal": 1682.820000,
                        "minRedVal": 16.830000,
                        "isinCd": "BRSTNCNAP0S3",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2038-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 201,
                        "nm": "Tesouro Educa+ 2039",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2043-12-15T00:00:00",
                        "minInvstmtAmt": 32.450000,
                        "untrInvstmtVal": 1622.510000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.5700,
                        "anulRedRate": 5.6900,
                        "minRedQty": 0.01,
                        "untrRedVal": 1589.870000,
                        "minRedVal": 15.900000,
                        "isinCd": "BRSTNCNAP0T1",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2039-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 202,
                        "nm": "Tesouro Educa+ 2040",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2044-12-15T00:00:00",
                        "minInvstmtAmt": 30.740000,
                        "untrInvstmtVal": 1537.030000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.5700,
                        "anulRedRate": 5.6900,
                        "minRedQty": 0.01,
                        "untrRedVal": 1504.400000,
                        "minRedVal": 15.040000,
                        "isinCd": "BRSTNCNAP0U9",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2040-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 160,
                        "nm": "Tesouro IPCA+ 2045",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
                        "mtrtyDt": "2045-05-15T00:00:00",
                        "minInvstmtAmt": 39.290000,
                        "untrInvstmtVal": 1309.780000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento, pois não paga juros semestrais. Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 5.5800,
                        "anulRedRate": 5.7000,
                        "minRedQty": 0.01,
                        "untrRedVal": 1277.660000,
                        "minRedVal": 12.780000,
                        "isinCd": "BRSTNCNTB2U0",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 10,
                        "nm": "NTNB PRINC",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760198
                },
                {
                    "TrsrBd": {
                        "cd": 93,
                        "nm": "Tesouro IPCA+ com Juros Semestrais 2045",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
                        "mtrtyDt": "2045-05-15T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado. ",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": null,
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 5.6500,
                        "minRedQty": 0.01,
                        "untrRedVal": 4377.940000,
                        "minRedVal": 43.780000,
                        "isinCd": "BRSTNCNTB0A6",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 3,
                        "nm": "NTN-B",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760199
                },
                {
                    "TrsrBd": {
                        "cd": 203,
                        "nm": "Tesouro Educa+ 2041",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 60 meses antes da data de vencimento. Incluindo a própria data de vencimento.",
                        "mtrtyDt": "2045-12-15T00:00:00",
                        "minInvstmtAmt": 43.680000,
                        "untrInvstmtVal": 1456.130000,
                        "invstmtStbl": "Com o Tesouro Educa+, você tem diversas possibilidades para planejar financeiramente o futuro educacional de maneira rápida e fácil.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.",
                        "anulInvstmtRate": 5.5700,
                        "anulRedRate": 5.6900,
                        "minRedQty": 0.01,
                        "untrRedVal": 1423.600000,
                        "minRedVal": 14.240000,
                        "isinCd": "BRSTNCNAP0V7",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2041-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 3,
                            "nm": "Educa+"
                        },
                        "amortQuotQty": 60
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700001
                },
                {
                    "TrsrBd": {
                        "cd": 180,
                        "nm": "Tesouro Renda+ Aposentadoria Extra 2030",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 240 meses antes da data de vencimento. Incluindo a própria data de vencimento.  \r\n",
                        "mtrtyDt": "2049-12-15T00:00:00",
                        "minInvstmtAmt": 37.060000,
                        "untrInvstmtVal": 1853.370000,
                        "invstmtStbl": "O Título vai servir como um complemento da aposentadoria pública para o investidor. Ajudando o mesmo a se aposentar com qualidade.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.\r\n",
                        "anulInvstmtRate": 5.5200,
                        "anulRedRate": 5.6400,
                        "minRedQty": 0.01,
                        "untrRedVal": 1822.580000,
                        "minRedVal": 18.230000,
                        "isinCd": "BRSTNCNAP0E3",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2030-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 2,
                            "nm": "Renda+"
                        },
                        "amortQuotQty": 240
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700000
                },
                {
                    "TrsrBd": {
                        "cd": 147,
                        "nm": "Tesouro IPCA+ com Juros Semestrais 2050",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
                        "mtrtyDt": "2050-08-15T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado. ",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 5.6700,
                        "minRedQty": 0.01,
                        "untrRedVal": 4447.910000,
                        "minRedVal": 44.480000,
                        "isinCd": "BRSTNCNTB3D4",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 3,
                        "nm": "NTN-B",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760199
                },
                {
                    "TrsrBd": {
                        "cd": 181,
                        "nm": "Tesouro Renda+ Aposentadoria Extra 2035",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 240 meses antes da data de vencimento. Incluindo a própria data de vencimento.\r\n",
                        "mtrtyDt": "2054-12-15T00:00:00",
                        "minInvstmtAmt": 42.150000,
                        "untrInvstmtVal": 1405.150000,
                        "invstmtStbl": "O Título vai servir como um complemento da aposentadoria pública para o investidor. Ajudando o mesmo a se aposentar com qualidade.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.\r\n",
                        "anulInvstmtRate": 5.5700,
                        "anulRedRate": 5.6900,
                        "minRedQty": 0.01,
                        "untrRedVal": 1374.040000,
                        "minRedVal": 13.740000,
                        "isinCd": "BRSTNCNAP096",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2035-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 2,
                            "nm": "Renda+"
                        },
                        "amortQuotQty": 240
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700000
                },
                {
                    "TrsrBd": {
                        "cd": 169,
                        "nm": "Tesouro IPCA+ com Juros Semestrais 2055",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).\r\n",
                        "mtrtyDt": "2055-05-15T00:00:00",
                        "minInvstmtAmt": 44.780000,
                        "untrInvstmtVal": 4478.570000,
                        "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado. \r\n",
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.\r\n",
                        "anulInvstmtRate": 5.5500,
                        "anulRedRate": 5.6700,
                        "minRedQty": 0.01,
                        "untrRedVal": 4400.600000,
                        "minRedVal": 44.010000,
                        "isinCd": "BRSTNCNTB4Q4",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 3,
                        "nm": "NTN-B",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 760199
                },
                {
                    "TrsrBd": {
                        "cd": 182,
                        "nm": "Tesouro Renda+ Aposentadoria Extra 2040",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 240 meses antes da data de vencimento. Incluindo a própria data de vencimento.\r\n",
                        "mtrtyDt": "2059-12-15T00:00:00",
                        "minInvstmtAmt": 32.020000,
                        "untrInvstmtVal": 1067.570000,
                        "invstmtStbl": "O Título vai servir como um complemento da aposentadoria pública para o investidor. Ajudando o mesmo a se aposentar com qualidade.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.\r\n",
                        "anulInvstmtRate": 5.5900,
                        "anulRedRate": 5.7100,
                        "minRedQty": 0.01,
                        "untrRedVal": 1038.050000,
                        "minRedVal": 10.380000,
                        "isinCd": "BRSTNCNAP0A1",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2040-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 2,
                            "nm": "Renda+"
                        },
                        "amortQuotQty": 240
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700000
                },
                {
                    "TrsrBd": {
                        "cd": 183,
                        "nm": "Tesouro Renda+ Aposentadoria Extra 2045",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 240 meses antes da data de vencimento. Incluindo a própria data de vencimento.\r\n",
                        "mtrtyDt": "2064-12-15T00:00:00",
                        "minInvstmtAmt": 32.470000,
                        "untrInvstmtVal": 811.890000,
                        "invstmtStbl": "O Título vai servir como um complemento da aposentadoria pública para o investidor. Ajudando o mesmo a se aposentar com qualidade.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.\r\n",
                        "anulInvstmtRate": 5.6000,
                        "anulRedRate": 5.7200,
                        "minRedQty": 0.01,
                        "untrRedVal": 784.990000,
                        "minRedVal": 7.850000,
                        "isinCd": "BRSTNCNAP0F0",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2045-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 2,
                            "nm": "Renda+"
                        },
                        "amortQuotQty": 240
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700000
                },
                {
                    "TrsrBd": {
                        "cd": 184,
                        "nm": "Tesouro Renda+ Aposentadoria Extra 2050",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 240 meses antes da data de vencimento. Incluindo a própria data de vencimento.\r\n",
                        "mtrtyDt": "2069-12-15T00:00:00",
                        "minInvstmtAmt": 30.840000,
                        "untrInvstmtVal": 616.820000,
                        "invstmtStbl": "O Título vai servir como um complemento da aposentadoria pública para o investidor. Ajudando o mesmo a se aposentar com qualidade.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.\r\n",
                        "anulInvstmtRate": 5.6100,
                        "anulRedRate": 5.7300,
                        "minRedQty": 0.01,
                        "untrRedVal": 593.030000,
                        "minRedVal": 5.930000,
                        "isinCd": "BRSTNCNAP0D5",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2050-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 2,
                            "nm": "Renda+"
                        },
                        "amortQuotQty": 240
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700000
                },
                {
                    "TrsrBd": {
                        "cd": 185,
                        "nm": "Tesouro Renda+ Aposentadoria Extra 2055",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 240 meses antes da data de vencimento. Incluindo a própria data de vencimento.\r\n",
                        "mtrtyDt": "2074-12-15T00:00:00",
                        "minInvstmtAmt": 32.890000,
                        "untrInvstmtVal": 469.890000,
                        "invstmtStbl": "O Título vai servir como um complemento da aposentadoria pública para o investidor. Ajudando o mesmo a se aposentar com qualidade.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.\r\n",
                        "anulInvstmtRate": 5.6100,
                        "anulRedRate": 5.7300,
                        "minRedQty": 0.01,
                        "untrRedVal": 449.210000,
                        "minRedVal": 4.490000,
                        "isinCd": "BRSTNCNAP0B9",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2055-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 2,
                            "nm": "Renda+"
                        },
                        "amortQuotQty": 240
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700000
                },
                {
                    "TrsrBd": {
                        "cd": 186,
                        "nm": "Tesouro Renda+ Aposentadoria Extra 2060",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 240 meses antes da data de vencimento. Incluindo a própria data de vencimento.\r\n",
                        "mtrtyDt": "2079-12-15T00:00:00",
                        "minInvstmtAmt": 32.080000,
                        "untrInvstmtVal": 356.460000,
                        "invstmtStbl": "O Título vai servir como um complemento da aposentadoria pública para o investidor. Ajudando o mesmo a se aposentar com qualidade.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.\r\n",
                        "anulInvstmtRate": 5.6200,
                        "anulRedRate": 5.7400,
                        "minRedQty": 0.01,
                        "untrRedVal": 338.850000,
                        "minRedVal": 3.390000,
                        "isinCd": "BRSTNCNAP0C7",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2060-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 2,
                            "nm": "Renda+"
                        },
                        "amortQuotQty": 240
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700000
                },
                {
                    "TrsrBd": {
                        "cd": 187,
                        "nm": "Tesouro Renda+ Aposentadoria Extra 2065",
                        "featrs": "Titulo com pagamento de rendas mensais a partir da data de conversão que acontece 240 meses antes da data de vencimento. Incluindo a própria data de vencimento.\r\n",
                        "mtrtyDt": "2084-12-15T00:00:00",
                        "minInvstmtAmt": 32.570000,
                        "untrInvstmtVal": 271.440000,
                        "invstmtStbl": "O Título vai servir como um complemento da aposentadoria pública para o investidor. Ajudando o mesmo a se aposentar com qualidade.",
                        "semiAnulIntrstInd": false,
                        "rcvgIncm": "Todos os perfis.\r\n",
                        "anulInvstmtRate": 5.6200,
                        "anulRedRate": 5.7400,
                        "minRedQty": 0.01,
                        "untrRedVal": 256.570000,
                        "minRedVal": 2.570000,
                        "isinCd": "BRSTNCNAP088",
                        "FinIndxs": {
                            "cd": 22,
                            "nm": "IPCA"
                        },
                        "wdwlDt": null,
                        "convDt": "2065-01-15T00:00:00",
                        "BusSegmt": {
                            "cd": 2,
                            "nm": "Renda+"
                        },
                        "amortQuotQty": 240
                    },
                    "TrsrBdType": {
                        "cd": 11,
                        "nm": "NTN-B1",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 700000
                },
                {
                    "TrsrBd": {
                        "cd": 66,
                        "nm": "Tesouro IGPM+ com Juros Semestrais 2031",
                        "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IGP-M).",
                        "mtrtyDt": "2031-01-01T00:00:00",
                        "minInvstmtAmt": 0.000000,
                        "untrInvstmtVal": 0.000000,
                        "invstmtStbl": null,
                        "semiAnulIntrstInd": true,
                        "rcvgIncm": null,
                        "anulInvstmtRate": 0.0000,
                        "anulRedRate": 5.7300,
                        "minRedQty": 0.01,
                        "untrRedVal": 8514.890000,
                        "minRedVal": 85.150000,
                        "isinCd": "BRSTNCNTC0K4",
                        "FinIndxs": {
                            "cd": 1,
                            "nm": "IGP-M"
                        },
                        "wdwlDt": null,
                        "convDt": null,
                        "BusSegmt": null,
                        "amortQuotQty": 0
                    },
                    "TrsrBdType": {
                        "cd": 2,
                        "nm": "NTN-C",
                        "ctdyRate": null,
                        "grPr": null
                    },
                    "SelicCode": 770100
                }
            ],
            "BizSts": {
                "cd": null,
                "dtTm": "2023-12-15 10:46:02.053"
            }
        }
    };

    const dados = {
        "responseStatus": 200,
        "responseStatusText": "success",
        "statusInfo": "OK",
        "response": {
            "TrsrBd": {
                "cd": 160,
                "nm": "Tesouro IPCA+ 2045",
                "mtrtyDt": "2045-05-15T00:00:00",
                "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
                "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento, pois não paga juros semestrais. Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.",
                "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
                "PrcgLst": [
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-08T09:25:00",
                            "clsgDtTm": "2017-02-09T05:00:00"
                        },
                        "untrInvstmtVal": 689.450000,
                        "anulInvstmtRate": 5.3200,
                        "untrRedVal": 667.700000,
                        "anulRedRate": 5.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-09T09:25:00",
                            "clsgDtTm": "2017-02-10T05:00:00"
                        },
                        "untrInvstmtVal": 702.710000,
                        "anulInvstmtRate": 5.2500,
                        "untrRedVal": 680.520000,
                        "anulRedRate": 5.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-10T09:25:00",
                            "clsgDtTm": "2017-02-13T05:00:00"
                        },
                        "untrInvstmtVal": 708.770000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 686.390000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-13T09:25:00",
                            "clsgDtTm": "2017-02-14T05:00:00"
                        },
                        "untrInvstmtVal": 707.110000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 684.790000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-14T09:25:00",
                            "clsgDtTm": "2017-02-15T05:00:00"
                        },
                        "untrInvstmtVal": 703.570000,
                        "anulInvstmtRate": 5.2500,
                        "untrRedVal": 681.360000,
                        "anulRedRate": 5.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-15T09:25:00",
                            "clsgDtTm": "2017-02-16T05:00:00"
                        },
                        "untrInvstmtVal": 709.490000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 687.100000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-16T09:25:00",
                            "clsgDtTm": "2017-02-17T05:00:00"
                        },
                        "untrInvstmtVal": 709.760000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 687.360000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-17T09:25:00",
                            "clsgDtTm": "2017-02-20T05:00:00"
                        },
                        "untrInvstmtVal": 708.360000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 686.010000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-20T09:25:00",
                            "clsgDtTm": "2017-02-21T05:00:00"
                        },
                        "untrInvstmtVal": 699.220000,
                        "anulInvstmtRate": 5.2800,
                        "untrRedVal": 677.170000,
                        "anulRedRate": 5.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-21T09:25:00",
                            "clsgDtTm": "2017-02-22T05:00:00"
                        },
                        "untrInvstmtVal": 708.880000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 686.530000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-22T09:25:00",
                            "clsgDtTm": "2017-02-23T05:00:00"
                        },
                        "untrInvstmtVal": 718.690000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 696.010000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-23T09:25:00",
                            "clsgDtTm": "2017-02-24T05:00:00"
                        },
                        "untrInvstmtVal": 732.460000,
                        "anulInvstmtRate": 5.1100,
                        "untrRedVal": 709.340000,
                        "anulRedRate": 5.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-02-24T09:25:00",
                            "clsgDtTm": "2017-03-01T05:00:00"
                        },
                        "untrInvstmtVal": 733.180000,
                        "anulInvstmtRate": 5.1100,
                        "untrRedVal": 710.040000,
                        "anulRedRate": 5.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-01T14:00:00",
                            "clsgDtTm": "2017-03-02T05:00:00"
                        },
                        "untrInvstmtVal": 735.400000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 712.190000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-02T09:25:00",
                            "clsgDtTm": "2017-03-03T05:00:00"
                        },
                        "untrInvstmtVal": 735.670000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 712.450000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-03T09:25:00",
                            "clsgDtTm": "2017-03-06T05:00:00"
                        },
                        "untrInvstmtVal": 736.160000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 712.930000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-06T09:25:00",
                            "clsgDtTm": "2017-03-07T05:00:00"
                        },
                        "untrInvstmtVal": 734.450000,
                        "anulInvstmtRate": 5.1100,
                        "untrRedVal": 711.290000,
                        "anulRedRate": 5.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-07T09:25:00",
                            "clsgDtTm": "2017-03-08T05:00:00"
                        },
                        "untrInvstmtVal": 732.750000,
                        "anulInvstmtRate": 5.1200,
                        "untrRedVal": 709.640000,
                        "anulRedRate": 5.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-08T09:25:00",
                            "clsgDtTm": "2017-03-09T05:00:00"
                        },
                        "untrInvstmtVal": 731.060000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 708.010000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-09T09:25:00",
                            "clsgDtTm": "2017-03-10T05:00:00"
                        },
                        "untrInvstmtVal": 727.420000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 704.490000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-10T09:25:00",
                            "clsgDtTm": "2017-03-13T05:00:00"
                        },
                        "untrInvstmtVal": 733.020000,
                        "anulInvstmtRate": 5.1200,
                        "untrRedVal": 709.910000,
                        "anulRedRate": 5.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-13T09:25:00",
                            "clsgDtTm": "2017-03-14T05:00:00"
                        },
                        "untrInvstmtVal": 737.180000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 713.940000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-14T09:25:00",
                            "clsgDtTm": "2017-03-15T05:00:00"
                        },
                        "untrInvstmtVal": 731.530000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 708.470000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-15T09:25:00",
                            "clsgDtTm": "2017-03-16T05:00:00"
                        },
                        "untrInvstmtVal": 714.360000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 691.870000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-16T09:25:00",
                            "clsgDtTm": "2017-03-17T05:00:00"
                        },
                        "untrInvstmtVal": 728.020000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 705.090000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-17T09:25:00",
                            "clsgDtTm": "2017-03-20T05:00:00"
                        },
                        "untrInvstmtVal": 734.180000,
                        "anulInvstmtRate": 5.1200,
                        "untrRedVal": 711.050000,
                        "anulRedRate": 5.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-20T09:25:00",
                            "clsgDtTm": "2017-03-21T05:00:00"
                        },
                        "untrInvstmtVal": 732.420000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 709.350000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-21T09:25:00",
                            "clsgDtTm": "2017-03-22T05:00:00"
                        },
                        "untrInvstmtVal": 740.480000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 717.150000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-22T09:25:00",
                            "clsgDtTm": "2017-03-23T05:00:00"
                        },
                        "untrInvstmtVal": 730.860000,
                        "anulInvstmtRate": 5.1400,
                        "untrRedVal": 707.850000,
                        "anulRedRate": 5.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-23T09:25:00",
                            "clsgDtTm": "2017-03-24T05:00:00"
                        },
                        "untrInvstmtVal": 721.420000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 698.720000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-24T09:25:00",
                            "clsgDtTm": "2017-03-27T05:00:00"
                        },
                        "untrInvstmtVal": 725.590000,
                        "anulInvstmtRate": 5.1700,
                        "untrRedVal": 702.760000,
                        "anulRedRate": 5.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-27T09:25:00",
                            "clsgDtTm": "2017-03-28T05:00:00"
                        },
                        "untrInvstmtVal": 727.730000,
                        "anulInvstmtRate": 5.1600,
                        "untrRedVal": 704.830000,
                        "anulRedRate": 5.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-28T09:25:00",
                            "clsgDtTm": "2017-03-29T05:00:00"
                        },
                        "untrInvstmtVal": 727.930000,
                        "anulInvstmtRate": 5.1600,
                        "untrRedVal": 705.030000,
                        "anulRedRate": 5.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-29T09:25:00",
                            "clsgDtTm": "2017-03-30T05:00:00"
                        },
                        "untrInvstmtVal": 722.330000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 699.620000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-30T09:25:00",
                            "clsgDtTm": "2017-03-31T05:00:00"
                        },
                        "untrInvstmtVal": 730.280000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 707.300000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-03-31T09:25:00",
                            "clsgDtTm": "2017-04-03T05:00:00"
                        },
                        "untrInvstmtVal": 728.650000,
                        "anulInvstmtRate": 5.1600,
                        "untrRedVal": 705.730000,
                        "anulRedRate": 5.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-03T09:25:00",
                            "clsgDtTm": "2017-04-04T05:00:00"
                        },
                        "untrInvstmtVal": 730.790000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 707.810000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-04T09:25:00",
                            "clsgDtTm": "2017-04-05T05:00:00"
                        },
                        "untrInvstmtVal": 732.940000,
                        "anulInvstmtRate": 5.1400,
                        "untrRedVal": 709.900000,
                        "anulRedRate": 5.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-05T09:25:00",
                            "clsgDtTm": "2017-04-06T05:00:00"
                        },
                        "untrInvstmtVal": 731.200000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 708.210000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-06T09:25:00",
                            "clsgDtTm": "2017-04-07T05:00:00"
                        },
                        "untrInvstmtVal": 712.190000,
                        "anulInvstmtRate": 5.2500,
                        "untrRedVal": 689.820000,
                        "anulRedRate": 5.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-07T09:25:00",
                            "clsgDtTm": "2017-04-10T05:00:00"
                        },
                        "untrInvstmtVal": 716.360000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 693.860000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-10T09:25:00",
                            "clsgDtTm": "2017-04-11T05:00:00"
                        },
                        "untrInvstmtVal": 718.470000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 695.910000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-11T09:25:00",
                            "clsgDtTm": "2017-04-12T05:00:00"
                        },
                        "untrInvstmtVal": 716.760000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 694.260000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-12T09:25:00",
                            "clsgDtTm": "2017-04-13T05:00:00"
                        },
                        "untrInvstmtVal": 718.870000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 696.310000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-13T09:25:00",
                            "clsgDtTm": "2017-04-17T05:00:00"
                        },
                        "untrInvstmtVal": 719.240000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 696.670000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-17T09:25:00",
                            "clsgDtTm": "2017-04-18T05:00:00"
                        },
                        "untrInvstmtVal": 709.940000,
                        "anulInvstmtRate": 5.2700,
                        "untrRedVal": 687.670000,
                        "anulRedRate": 5.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-18T09:25:00",
                            "clsgDtTm": "2017-04-19T05:00:00"
                        },
                        "untrInvstmtVal": 710.140000,
                        "anulInvstmtRate": 5.2700,
                        "untrRedVal": 687.860000,
                        "anulRedRate": 5.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-19T09:25:00",
                            "clsgDtTm": "2017-04-20T05:00:00"
                        },
                        "untrInvstmtVal": 714.120000,
                        "anulInvstmtRate": 5.2500,
                        "untrRedVal": 691.720000,
                        "anulRedRate": 5.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-20T09:25:00",
                            "clsgDtTm": "2017-04-24T05:00:00"
                        },
                        "untrInvstmtVal": 705.050000,
                        "anulInvstmtRate": 5.3000,
                        "untrRedVal": 682.940000,
                        "anulRedRate": 5.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-24T09:25:00",
                            "clsgDtTm": "2017-04-25T05:00:00"
                        },
                        "untrInvstmtVal": 705.100000,
                        "anulInvstmtRate": 5.3000,
                        "untrRedVal": 683.000000,
                        "anulRedRate": 5.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-25T09:25:00",
                            "clsgDtTm": "2017-04-26T05:00:00"
                        },
                        "untrInvstmtVal": 688.640000,
                        "anulInvstmtRate": 5.3900,
                        "untrRedVal": 667.070000,
                        "anulRedRate": 5.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-26T09:25:00",
                            "clsgDtTm": "2017-04-27T05:00:00"
                        },
                        "untrInvstmtVal": 685.180000,
                        "anulInvstmtRate": 5.4100,
                        "untrRedVal": 663.730000,
                        "anulRedRate": 5.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-27T09:25:00",
                            "clsgDtTm": "2017-04-28T05:00:00"
                        },
                        "untrInvstmtVal": 685.360000,
                        "anulInvstmtRate": 5.4100,
                        "untrRedVal": 663.910000,
                        "anulRedRate": 5.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-04-28T09:25:00",
                            "clsgDtTm": "2017-05-02T05:00:00"
                        },
                        "untrInvstmtVal": 687.470000,
                        "anulInvstmtRate": 5.4000,
                        "untrRedVal": 665.950000,
                        "anulRedRate": 5.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-02T09:25:00",
                            "clsgDtTm": "2017-05-03T05:00:00"
                        },
                        "untrInvstmtVal": 696.820000,
                        "anulInvstmtRate": 5.3500,
                        "untrRedVal": 675.000000,
                        "anulRedRate": 5.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-03T09:25:00",
                            "clsgDtTm": "2017-05-04T05:00:00"
                        },
                        "untrInvstmtVal": 700.710000,
                        "anulInvstmtRate": 5.3300,
                        "untrRedVal": 678.770000,
                        "anulRedRate": 5.4500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-04T09:25:00",
                            "clsgDtTm": "2017-05-05T05:00:00"
                        },
                        "untrInvstmtVal": 697.180000,
                        "anulInvstmtRate": 5.3500,
                        "untrRedVal": 675.360000,
                        "anulRedRate": 5.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-05T09:25:00",
                            "clsgDtTm": "2017-05-08T05:00:00"
                        },
                        "untrInvstmtVal": 701.150000,
                        "anulInvstmtRate": 5.3300,
                        "untrRedVal": 679.200000,
                        "anulRedRate": 5.4500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-08T09:25:00",
                            "clsgDtTm": "2017-05-09T05:00:00"
                        },
                        "untrInvstmtVal": 697.620000,
                        "anulInvstmtRate": 5.3500,
                        "untrRedVal": 675.790000,
                        "anulRedRate": 5.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-09T09:25:00",
                            "clsgDtTm": "2017-05-10T05:00:00"
                        },
                        "untrInvstmtVal": 699.650000,
                        "anulInvstmtRate": 5.3400,
                        "untrRedVal": 677.770000,
                        "anulRedRate": 5.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-10T09:25:00",
                            "clsgDtTm": "2017-05-11T05:00:00"
                        },
                        "untrInvstmtVal": 703.440000,
                        "anulInvstmtRate": 5.3200,
                        "untrRedVal": 681.420000,
                        "anulRedRate": 5.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-11T09:25:00",
                            "clsgDtTm": "2017-05-12T05:00:00"
                        },
                        "untrInvstmtVal": 718.690000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 696.190000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-12T09:25:00",
                            "clsgDtTm": "2017-05-15T05:00:00"
                        },
                        "untrInvstmtVal": 734.360000,
                        "anulInvstmtRate": 5.1600,
                        "untrRedVal": 711.360000,
                        "anulRedRate": 5.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-15T09:25:00",
                            "clsgDtTm": "2017-05-16T05:00:00"
                        },
                        "untrInvstmtVal": 742.470000,
                        "anulInvstmtRate": 5.1200,
                        "untrRedVal": 719.200000,
                        "anulRedRate": 5.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-16T09:25:00",
                            "clsgDtTm": "2017-05-17T05:00:00"
                        },
                        "untrInvstmtVal": 768.830000,
                        "anulInvstmtRate": 4.9900,
                        "untrRedVal": 744.710000,
                        "anulRedRate": 5.1100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-17T09:25:00",
                            "clsgDtTm": "2017-05-18T05:00:00"
                        },
                        "untrInvstmtVal": 773.200000,
                        "anulInvstmtRate": 4.9700,
                        "untrRedVal": 748.940000,
                        "anulRedRate": 5.0900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-18T09:25:00",
                            "clsgDtTm": "2017-05-19T05:00:00"
                        },
                        "untrInvstmtVal": 593.730000,
                        "anulInvstmtRate": 5.9700,
                        "untrRedVal": 575.280000,
                        "anulRedRate": 6.0900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-19T09:25:00",
                            "clsgDtTm": "2017-05-22T05:00:00"
                        },
                        "untrInvstmtVal": 639.650000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 619.720000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-22T09:25:00",
                            "clsgDtTm": "2017-05-23T05:00:00"
                        },
                        "untrInvstmtVal": 628.190000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 608.630000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-23T09:25:00",
                            "clsgDtTm": "2017-05-24T05:00:00"
                        },
                        "untrInvstmtVal": 648.640000,
                        "anulInvstmtRate": 5.6400,
                        "untrRedVal": 628.430000,
                        "anulRedRate": 5.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-24T09:25:00",
                            "clsgDtTm": "2017-05-25T05:00:00"
                        },
                        "untrInvstmtVal": 678.640000,
                        "anulInvstmtRate": 5.4700,
                        "untrRedVal": 657.460000,
                        "anulRedRate": 5.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-25T09:25:00",
                            "clsgDtTm": "2017-05-26T05:00:00"
                        },
                        "untrInvstmtVal": 657.710000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 637.210000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-26T09:25:00",
                            "clsgDtTm": "2017-05-29T05:00:00"
                        },
                        "untrInvstmtVal": 673.980000,
                        "anulInvstmtRate": 5.5000,
                        "untrRedVal": 652.960000,
                        "anulRedRate": 5.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-29T09:25:00",
                            "clsgDtTm": "2017-05-30T05:00:00"
                        },
                        "untrInvstmtVal": 676.010000,
                        "anulInvstmtRate": 5.4900,
                        "untrRedVal": 654.930000,
                        "anulRedRate": 5.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-30T09:25:00",
                            "clsgDtTm": "2017-05-31T05:00:00"
                        },
                        "untrInvstmtVal": 667.390000,
                        "anulInvstmtRate": 5.5400,
                        "untrRedVal": 646.590000,
                        "anulRedRate": 5.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-05-31T09:25:00",
                            "clsgDtTm": "2017-06-01T05:00:00"
                        },
                        "untrInvstmtVal": 669.400000,
                        "anulInvstmtRate": 5.5300,
                        "untrRedVal": 648.540000,
                        "anulRedRate": 5.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-01T09:25:00",
                            "clsgDtTm": "2017-06-02T05:00:00"
                        },
                        "untrInvstmtVal": 660.870000,
                        "anulInvstmtRate": 5.5800,
                        "untrRedVal": 640.290000,
                        "anulRedRate": 5.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-02T09:25:00",
                            "clsgDtTm": "2017-06-05T05:00:00"
                        },
                        "untrInvstmtVal": 647.510000,
                        "anulInvstmtRate": 5.6600,
                        "untrRedVal": 627.370000,
                        "anulRedRate": 5.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-05T09:25:00",
                            "clsgDtTm": "2017-06-06T05:00:00"
                        },
                        "untrInvstmtVal": 635.920000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 616.150000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-06T09:25:00",
                            "clsgDtTm": "2017-06-07T05:00:00"
                        },
                        "untrInvstmtVal": 634.490000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 614.760000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-07T09:25:00",
                            "clsgDtTm": "2017-06-08T05:00:00"
                        },
                        "untrInvstmtVal": 634.730000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 615.000000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-08T09:25:00",
                            "clsgDtTm": "2017-06-09T05:00:00"
                        },
                        "untrInvstmtVal": 634.960000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 615.230000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-09T09:25:00",
                            "clsgDtTm": "2017-06-12T05:00:00"
                        },
                        "untrInvstmtVal": 646.230000,
                        "anulInvstmtRate": 5.6700,
                        "untrRedVal": 626.130000,
                        "anulRedRate": 5.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-12T09:25:00",
                            "clsgDtTm": "2017-06-13T05:00:00"
                        },
                        "untrInvstmtVal": 644.730000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 624.690000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-13T09:25:00",
                            "clsgDtTm": "2017-06-14T05:00:00"
                        },
                        "untrInvstmtVal": 643.240000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 623.250000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-14T09:25:00",
                            "clsgDtTm": "2017-06-16T05:00:00"
                        },
                        "untrInvstmtVal": 651.950000,
                        "anulInvstmtRate": 5.6400,
                        "untrRedVal": 631.680000,
                        "anulRedRate": 5.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-16T09:25:00",
                            "clsgDtTm": "2017-06-19T05:00:00"
                        },
                        "untrInvstmtVal": 667.650000,
                        "anulInvstmtRate": 5.5500,
                        "untrRedVal": 646.880000,
                        "anulRedRate": 5.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-19T09:25:00",
                            "clsgDtTm": "2017-06-20T05:00:00"
                        },
                        "untrInvstmtVal": 666.010000,
                        "anulInvstmtRate": 5.5600,
                        "untrRedVal": 645.300000,
                        "anulRedRate": 5.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-20T09:25:00",
                            "clsgDtTm": "2017-06-21T05:00:00"
                        },
                        "untrInvstmtVal": 666.130000,
                        "anulInvstmtRate": 5.5600,
                        "untrRedVal": 645.420000,
                        "anulRedRate": 5.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-21T09:25:00",
                            "clsgDtTm": "2017-06-22T05:00:00"
                        },
                        "untrInvstmtVal": 664.490000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 643.830000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-22T09:25:00",
                            "clsgDtTm": "2017-06-23T05:00:00"
                        },
                        "untrInvstmtVal": 664.610000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 643.950000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-23T09:25:00",
                            "clsgDtTm": "2017-06-26T05:00:00"
                        },
                        "untrInvstmtVal": 664.670000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 644.020000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-26T09:25:00",
                            "clsgDtTm": "2017-06-27T05:00:00"
                        },
                        "untrInvstmtVal": 659.430000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 638.940000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-27T09:25:00",
                            "clsgDtTm": "2017-06-28T05:00:00"
                        },
                        "untrInvstmtVal": 650.920000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 630.700000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-28T09:25:00",
                            "clsgDtTm": "2017-06-29T05:00:00"
                        },
                        "untrInvstmtVal": 656.180000,
                        "anulInvstmtRate": 5.6200,
                        "untrRedVal": 635.800000,
                        "anulRedRate": 5.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-29T09:25:00",
                            "clsgDtTm": "2017-06-30T05:00:00"
                        },
                        "untrInvstmtVal": 664.970000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 644.310000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-06-30T09:25:00",
                            "clsgDtTm": "2017-07-03T05:00:00"
                        },
                        "untrInvstmtVal": 665.000000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 644.350000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-03T09:25:00",
                            "clsgDtTm": "2017-07-04T05:00:00"
                        },
                        "untrInvstmtVal": 665.110000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 644.450000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-04T09:25:00",
                            "clsgDtTm": "2017-07-05T05:00:00"
                        },
                        "untrInvstmtVal": 663.470000,
                        "anulInvstmtRate": 5.5800,
                        "untrRedVal": 642.870000,
                        "anulRedRate": 5.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-05T09:25:00",
                            "clsgDtTm": "2017-07-06T05:00:00"
                        },
                        "untrInvstmtVal": 661.830000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 641.290000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-06T09:25:00",
                            "clsgDtTm": "2017-07-07T05:00:00"
                        },
                        "untrInvstmtVal": 661.930000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 641.390000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-07T09:25:00",
                            "clsgDtTm": "2017-07-10T05:00:00"
                        },
                        "untrInvstmtVal": 661.630000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 641.100000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-10T09:25:00",
                            "clsgDtTm": "2017-07-11T05:00:00"
                        },
                        "untrInvstmtVal": 659.990000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 639.510000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-11T09:25:00",
                            "clsgDtTm": "2017-07-12T05:00:00"
                        },
                        "untrInvstmtVal": 660.080000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 639.600000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-12T09:25:00",
                            "clsgDtTm": "2017-07-13T05:00:00"
                        },
                        "untrInvstmtVal": 665.400000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 644.750000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-13T09:25:00",
                            "clsgDtTm": "2017-07-14T05:00:00"
                        },
                        "untrInvstmtVal": 667.240000,
                        "anulInvstmtRate": 5.5600,
                        "untrRedVal": 646.540000,
                        "anulRedRate": 5.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-14T09:25:00",
                            "clsgDtTm": "2017-07-17T05:00:00"
                        },
                        "untrInvstmtVal": 670.930000,
                        "anulInvstmtRate": 5.5400,
                        "untrRedVal": 650.110000,
                        "anulRedRate": 5.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-17T09:25:00",
                            "clsgDtTm": "2017-07-18T05:00:00"
                        },
                        "untrInvstmtVal": 681.770000,
                        "anulInvstmtRate": 5.4800,
                        "untrRedVal": 660.610000,
                        "anulRedRate": 5.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-18T09:25:00",
                            "clsgDtTm": "2017-07-19T05:00:00"
                        },
                        "untrInvstmtVal": 692.800000,
                        "anulInvstmtRate": 5.4200,
                        "untrRedVal": 671.290000,
                        "anulRedRate": 5.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-19T09:25:00",
                            "clsgDtTm": "2017-07-20T05:00:00"
                        },
                        "untrInvstmtVal": 705.870000,
                        "anulInvstmtRate": 5.3500,
                        "untrRedVal": 683.940000,
                        "anulRedRate": 5.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-20T09:25:00",
                            "clsgDtTm": "2017-07-21T05:00:00"
                        },
                        "untrInvstmtVal": 717.290000,
                        "anulInvstmtRate": 5.2900,
                        "untrRedVal": 695.000000,
                        "anulRedRate": 5.4100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-21T09:25:00",
                            "clsgDtTm": "2017-07-24T05:00:00"
                        },
                        "untrInvstmtVal": 721.180000,
                        "anulInvstmtRate": 5.2700,
                        "untrRedVal": 698.770000,
                        "anulRedRate": 5.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-24T09:25:00",
                            "clsgDtTm": "2017-07-25T05:00:00"
                        },
                        "untrInvstmtVal": 719.460000,
                        "anulInvstmtRate": 5.2800,
                        "untrRedVal": 697.100000,
                        "anulRedRate": 5.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-25T09:25:00",
                            "clsgDtTm": "2017-07-26T05:00:00"
                        },
                        "untrInvstmtVal": 715.850000,
                        "anulInvstmtRate": 5.3000,
                        "untrRedVal": 693.610000,
                        "anulRedRate": 5.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-26T09:25:00",
                            "clsgDtTm": "2017-07-27T05:00:00"
                        },
                        "untrInvstmtVal": 708.530000,
                        "anulInvstmtRate": 5.3400,
                        "untrRedVal": 686.530000,
                        "anulRedRate": 5.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-27T09:25:00",
                            "clsgDtTm": "2017-07-28T05:00:00"
                        },
                        "untrInvstmtVal": 725.680000,
                        "anulInvstmtRate": 5.2500,
                        "untrRedVal": 703.130000,
                        "anulRedRate": 5.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-28T09:25:00",
                            "clsgDtTm": "2017-07-31T05:00:00"
                        },
                        "untrInvstmtVal": 722.080000,
                        "anulInvstmtRate": 5.2700,
                        "untrRedVal": 699.660000,
                        "anulRedRate": 5.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-07-31T09:25:00",
                            "clsgDtTm": "2017-08-01T05:00:00"
                        },
                        "untrInvstmtVal": 720.350000,
                        "anulInvstmtRate": 5.2800,
                        "untrRedVal": 697.990000,
                        "anulRedRate": 5.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-01T09:25:00",
                            "clsgDtTm": "2017-08-02T05:00:00"
                        },
                        "untrInvstmtVal": 728.150000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 705.530000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-02T09:25:00",
                            "clsgDtTm": "2017-08-03T05:00:00"
                        },
                        "untrInvstmtVal": 724.500000,
                        "anulInvstmtRate": 5.2600,
                        "untrRedVal": 702.000000,
                        "anulRedRate": 5.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-03T09:25:00",
                            "clsgDtTm": "2017-08-04T05:00:00"
                        },
                        "untrInvstmtVal": 738.140000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 715.200000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-04T09:25:00",
                            "clsgDtTm": "2017-08-07T05:00:00"
                        },
                        "untrInvstmtVal": 746.170000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 722.980000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-07T09:25:00",
                            "clsgDtTm": "2017-08-08T05:00:00"
                        },
                        "untrInvstmtVal": 748.310000,
                        "anulInvstmtRate": 5.1400,
                        "untrRedVal": 725.060000,
                        "anulRedRate": 5.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-08T09:25:00",
                            "clsgDtTm": "2017-08-09T05:00:00"
                        },
                        "untrInvstmtVal": 744.550000,
                        "anulInvstmtRate": 5.1600,
                        "untrRedVal": 721.420000,
                        "anulRedRate": 5.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-09T09:25:00",
                            "clsgDtTm": "2017-08-10T05:00:00"
                        },
                        "untrInvstmtVal": 739.740000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 716.770000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-10T09:25:00",
                            "clsgDtTm": "2017-08-11T05:00:00"
                        },
                        "untrInvstmtVal": 739.940000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 716.970000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-11T09:25:00",
                            "clsgDtTm": "2017-08-14T05:00:00"
                        },
                        "untrInvstmtVal": 732.520000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 709.790000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-14T09:25:00",
                            "clsgDtTm": "2017-08-15T05:00:00"
                        },
                        "untrInvstmtVal": 730.800000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 708.130000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-15T09:25:00",
                            "clsgDtTm": "2017-08-16T05:00:00"
                        },
                        "untrInvstmtVal": 734.930000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 712.130000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-16T09:25:00",
                            "clsgDtTm": "2017-08-17T05:00:00"
                        },
                        "untrInvstmtVal": 737.130000,
                        "anulInvstmtRate": 5.2100,
                        "untrRedVal": 714.270000,
                        "anulRedRate": 5.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-17T09:25:00",
                            "clsgDtTm": "2017-08-18T05:00:00"
                        },
                        "untrInvstmtVal": 733.540000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 710.800000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-18T09:25:00",
                            "clsgDtTm": "2017-08-21T05:00:00"
                        },
                        "untrInvstmtVal": 734.070000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 711.310000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-21T09:25:00",
                            "clsgDtTm": "2017-08-22T05:00:00"
                        },
                        "untrInvstmtVal": 738.210000,
                        "anulInvstmtRate": 5.2100,
                        "untrRedVal": 715.320000,
                        "anulRedRate": 5.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-22T09:25:00",
                            "clsgDtTm": "2017-08-23T05:00:00"
                        },
                        "untrInvstmtVal": 732.690000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 709.980000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-23T09:25:00",
                            "clsgDtTm": "2017-08-24T05:00:00"
                        },
                        "untrInvstmtVal": 732.960000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 710.250000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-24T09:25:00",
                            "clsgDtTm": "2017-08-25T05:00:00"
                        },
                        "untrInvstmtVal": 732.910000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 710.200000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-25T09:25:00",
                            "clsgDtTm": "2017-08-28T05:00:00"
                        },
                        "untrInvstmtVal": 735.260000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 712.480000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-28T09:25:00",
                            "clsgDtTm": "2017-08-29T05:00:00"
                        },
                        "untrInvstmtVal": 735.500000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 712.720000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-29T09:25:00",
                            "clsgDtTm": "2017-08-30T05:00:00"
                        },
                        "untrInvstmtVal": 735.740000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 712.950000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-30T09:25:00",
                            "clsgDtTm": "2017-08-31T05:00:00"
                        },
                        "untrInvstmtVal": 735.980000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 713.190000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-08-31T09:25:00",
                            "clsgDtTm": "2017-09-01T05:00:00"
                        },
                        "untrInvstmtVal": 738.160000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 715.300000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-01T09:25:00",
                            "clsgDtTm": "2017-09-04T05:00:00"
                        },
                        "untrInvstmtVal": 740.530000,
                        "anulInvstmtRate": 5.2100,
                        "untrRedVal": 717.590000,
                        "anulRedRate": 5.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-04T09:25:00",
                            "clsgDtTm": "2017-09-05T05:00:00"
                        },
                        "untrInvstmtVal": 744.660000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 721.600000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-05T09:25:00",
                            "clsgDtTm": "2017-09-06T05:00:00"
                        },
                        "untrInvstmtVal": 754.740000,
                        "anulInvstmtRate": 5.1400,
                        "untrRedVal": 731.360000,
                        "anulRedRate": 5.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-06T09:25:00",
                            "clsgDtTm": "2017-09-08T05:00:00"
                        },
                        "untrInvstmtVal": 769.910000,
                        "anulInvstmtRate": 5.0600,
                        "untrRedVal": 746.050000,
                        "anulRedRate": 5.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-08T09:25:00",
                            "clsgDtTm": "2017-09-11T05:00:00"
                        },
                        "untrInvstmtVal": 780.380000,
                        "anulInvstmtRate": 5.0100,
                        "untrRedVal": 756.190000,
                        "anulRedRate": 5.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-11T09:25:00",
                            "clsgDtTm": "2017-09-12T05:00:00"
                        },
                        "untrInvstmtVal": 780.580000,
                        "anulInvstmtRate": 5.0100,
                        "untrRedVal": 756.380000,
                        "anulRedRate": 5.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-12T09:25:00",
                            "clsgDtTm": "2017-09-13T05:00:00"
                        },
                        "untrInvstmtVal": 780.780000,
                        "anulInvstmtRate": 5.0100,
                        "untrRedVal": 756.580000,
                        "anulRedRate": 5.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-13T09:25:00",
                            "clsgDtTm": "2017-09-14T05:00:00"
                        },
                        "untrInvstmtVal": 780.980000,
                        "anulInvstmtRate": 5.0100,
                        "untrRedVal": 756.780000,
                        "anulRedRate": 5.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-14T09:25:00",
                            "clsgDtTm": "2017-09-15T05:00:00"
                        },
                        "untrInvstmtVal": 777.090000,
                        "anulInvstmtRate": 5.0300,
                        "untrRedVal": 753.010000,
                        "anulRedRate": 5.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-15T09:25:00",
                            "clsgDtTm": "2017-09-18T05:00:00"
                        },
                        "untrInvstmtVal": 773.360000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 749.410000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-18T09:25:00",
                            "clsgDtTm": "2017-09-19T05:00:00"
                        },
                        "untrInvstmtVal": 773.570000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 749.620000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-19T09:25:00",
                            "clsgDtTm": "2017-09-20T05:00:00"
                        },
                        "untrInvstmtVal": 771.760000,
                        "anulInvstmtRate": 5.0600,
                        "untrRedVal": 747.860000,
                        "anulRedRate": 5.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-20T09:25:00",
                            "clsgDtTm": "2017-09-21T05:00:00"
                        },
                        "untrInvstmtVal": 774.000000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 750.030000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-21T09:25:00",
                            "clsgDtTm": "2017-09-22T05:00:00"
                        },
                        "untrInvstmtVal": 778.280000,
                        "anulInvstmtRate": 5.0300,
                        "untrRedVal": 754.180000,
                        "anulRedRate": 5.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-22T09:25:00",
                            "clsgDtTm": "2017-09-25T05:00:00"
                        },
                        "untrInvstmtVal": 778.230000,
                        "anulInvstmtRate": 5.0300,
                        "untrRedVal": 754.140000,
                        "anulRedRate": 5.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-25T09:25:00",
                            "clsgDtTm": "2017-09-26T05:00:00"
                        },
                        "untrInvstmtVal": 774.340000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 750.370000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-26T09:25:00",
                            "clsgDtTm": "2017-09-27T05:00:00"
                        },
                        "untrInvstmtVal": 774.510000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 750.550000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-27T09:25:00",
                            "clsgDtTm": "2017-09-28T05:00:00"
                        },
                        "untrInvstmtVal": 768.620000,
                        "anulInvstmtRate": 5.0800,
                        "untrRedVal": 744.850000,
                        "anulRedRate": 5.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-28T09:25:00",
                            "clsgDtTm": "2017-09-29T05:00:00"
                        },
                        "untrInvstmtVal": 772.830000,
                        "anulInvstmtRate": 5.0600,
                        "untrRedVal": 748.930000,
                        "anulRedRate": 5.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-09-29T09:25:00",
                            "clsgDtTm": "2017-10-02T05:00:00"
                        },
                        "untrInvstmtVal": 773.050000,
                        "anulInvstmtRate": 5.0600,
                        "untrRedVal": 749.150000,
                        "anulRedRate": 5.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-02T09:25:00",
                            "clsgDtTm": "2017-10-03T05:00:00"
                        },
                        "untrInvstmtVal": 775.260000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 751.280000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-03T09:25:00",
                            "clsgDtTm": "2017-10-04T05:00:00"
                        },
                        "untrInvstmtVal": 771.380000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 747.530000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-04T09:25:00",
                            "clsgDtTm": "2017-10-05T05:00:00"
                        },
                        "untrInvstmtVal": 773.580000,
                        "anulInvstmtRate": 5.0600,
                        "untrRedVal": 749.660000,
                        "anulRedRate": 5.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-05T09:25:00",
                            "clsgDtTm": "2017-10-06T05:00:00"
                        },
                        "untrInvstmtVal": 771.730000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 747.880000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-06T09:25:00",
                            "clsgDtTm": "2017-10-09T05:00:00"
                        },
                        "untrInvstmtVal": 772.380000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 748.520000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-09T09:25:00",
                            "clsgDtTm": "2017-10-10T05:00:00"
                        },
                        "untrInvstmtVal": 776.630000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 752.630000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-10T09:25:00",
                            "clsgDtTm": "2017-10-11T05:00:00"
                        },
                        "untrInvstmtVal": 782.950000,
                        "anulInvstmtRate": 5.0200,
                        "untrRedVal": 758.750000,
                        "anulRedRate": 5.1400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-11T09:25:00",
                            "clsgDtTm": "2017-10-13T05:00:00"
                        },
                        "untrInvstmtVal": 781.140000,
                        "anulInvstmtRate": 5.0300,
                        "untrRedVal": 757.000000,
                        "anulRedRate": 5.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-13T09:25:00",
                            "clsgDtTm": "2017-10-16T05:00:00"
                        },
                        "untrInvstmtVal": 777.410000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 753.390000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-16T09:25:00",
                            "clsgDtTm": "2017-10-17T05:00:00"
                        },
                        "untrInvstmtVal": 771.590000,
                        "anulInvstmtRate": 5.0800,
                        "untrRedVal": 747.770000,
                        "anulRedRate": 5.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-17T09:25:00",
                            "clsgDtTm": "2017-10-18T05:00:00"
                        },
                        "untrInvstmtVal": 773.880000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 749.980000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-18T09:25:00",
                            "clsgDtTm": "2017-10-19T05:00:00"
                        },
                        "untrInvstmtVal": 772.120000,
                        "anulInvstmtRate": 5.0800,
                        "untrRedVal": 748.280000,
                        "anulRedRate": 5.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-19T09:25:00",
                            "clsgDtTm": "2017-10-20T05:00:00"
                        },
                        "untrInvstmtVal": 772.380000,
                        "anulInvstmtRate": 5.0800,
                        "untrRedVal": 748.540000,
                        "anulRedRate": 5.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-20T09:25:00",
                            "clsgDtTm": "2017-10-23T05:00:00"
                        },
                        "untrInvstmtVal": 776.920000,
                        "anulInvstmtRate": 5.0600,
                        "untrRedVal": 752.940000,
                        "anulRedRate": 5.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-23T09:25:00",
                            "clsgDtTm": "2017-10-24T05:00:00"
                        },
                        "untrInvstmtVal": 777.250000,
                        "anulInvstmtRate": 5.0600,
                        "untrRedVal": 753.270000,
                        "anulRedRate": 5.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-24T09:25:00",
                            "clsgDtTm": "2017-10-25T05:00:00"
                        },
                        "untrInvstmtVal": 765.430000,
                        "anulInvstmtRate": 5.1200,
                        "untrRedVal": 741.820000,
                        "anulRedRate": 5.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-25T09:25:00",
                            "clsgDtTm": "2017-10-26T05:00:00"
                        },
                        "untrInvstmtVal": 761.710000,
                        "anulInvstmtRate": 5.1400,
                        "untrRedVal": 738.230000,
                        "anulRedRate": 5.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-26T09:25:00",
                            "clsgDtTm": "2017-10-27T05:00:00"
                        },
                        "untrInvstmtVal": 742.360000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 719.490000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-27T09:25:00",
                            "clsgDtTm": "2017-10-30T05:00:00"
                        },
                        "untrInvstmtVal": 752.600000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 729.420000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-30T09:25:00",
                            "clsgDtTm": "2017-10-31T05:00:00"
                        },
                        "untrInvstmtVal": 750.910000,
                        "anulInvstmtRate": 5.2000,
                        "untrRedVal": 727.780000,
                        "anulRedRate": 5.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-10-31T09:25:00",
                            "clsgDtTm": "2017-11-01T05:00:00"
                        },
                        "untrInvstmtVal": 747.270000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 724.260000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-01T09:25:00",
                            "clsgDtTm": "2017-11-03T05:00:00"
                        },
                        "untrInvstmtVal": 736.050000,
                        "anulInvstmtRate": 5.2800,
                        "untrRedVal": 713.400000,
                        "anulRedRate": 5.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-03T09:25:00",
                            "clsgDtTm": "2017-11-06T05:00:00"
                        },
                        "untrInvstmtVal": 725.120000,
                        "anulInvstmtRate": 5.3400,
                        "untrRedVal": 702.830000,
                        "anulRedRate": 5.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-06T09:25:00",
                            "clsgDtTm": "2017-11-07T05:00:00"
                        },
                        "untrInvstmtVal": 729.170000,
                        "anulInvstmtRate": 5.3200,
                        "untrRedVal": 706.750000,
                        "anulRedRate": 5.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-07T09:25:00",
                            "clsgDtTm": "2017-11-08T05:00:00"
                        },
                        "untrInvstmtVal": 723.760000,
                        "anulInvstmtRate": 5.3500,
                        "untrRedVal": 701.510000,
                        "anulRedRate": 5.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-08T09:25:00",
                            "clsgDtTm": "2017-11-09T05:00:00"
                        },
                        "untrInvstmtVal": 727.800000,
                        "anulInvstmtRate": 5.3300,
                        "untrRedVal": 705.430000,
                        "anulRedRate": 5.4500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-09T09:25:00",
                            "clsgDtTm": "2017-11-10T05:00:00"
                        },
                        "untrInvstmtVal": 728.060000,
                        "anulInvstmtRate": 5.3300,
                        "untrRedVal": 705.680000,
                        "anulRedRate": 5.4500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-10T09:25:00",
                            "clsgDtTm": "2017-11-13T05:00:00"
                        },
                        "untrInvstmtVal": 720.600000,
                        "anulInvstmtRate": 5.3700,
                        "untrRedVal": 698.470000,
                        "anulRedRate": 5.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-13T09:25:00",
                            "clsgDtTm": "2017-11-14T05:00:00"
                        },
                        "untrInvstmtVal": 711.540000,
                        "anulInvstmtRate": 5.4200,
                        "untrRedVal": 689.690000,
                        "anulRedRate": 5.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-14T09:25:00",
                            "clsgDtTm": "2017-11-16T05:00:00"
                        },
                        "untrInvstmtVal": 708.210000,
                        "anulInvstmtRate": 5.4400,
                        "untrRedVal": 686.480000,
                        "anulRedRate": 5.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-16T09:25:00",
                            "clsgDtTm": "2017-11-17T05:00:00"
                        },
                        "untrInvstmtVal": 708.470000,
                        "anulInvstmtRate": 5.4400,
                        "untrRedVal": 686.740000,
                        "anulRedRate": 5.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-17T09:25:00",
                            "clsgDtTm": "2017-11-21T05:00:00"
                        },
                        "untrInvstmtVal": 720.380000,
                        "anulInvstmtRate": 5.3800,
                        "untrRedVal": 698.270000,
                        "anulRedRate": 5.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-21T09:25:00",
                            "clsgDtTm": "2017-11-22T05:00:00"
                        },
                        "untrInvstmtVal": 724.400000,
                        "anulInvstmtRate": 5.3600,
                        "untrRedVal": 702.170000,
                        "anulRedRate": 5.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-22T09:25:00",
                            "clsgDtTm": "2017-11-23T05:00:00"
                        },
                        "untrInvstmtVal": 722.790000,
                        "anulInvstmtRate": 5.3700,
                        "untrRedVal": 700.610000,
                        "anulRedRate": 5.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-23T09:25:00",
                            "clsgDtTm": "2017-11-24T05:00:00"
                        },
                        "untrInvstmtVal": 724.940000,
                        "anulInvstmtRate": 5.3600,
                        "untrRedVal": 702.690000,
                        "anulRedRate": 5.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-24T09:25:00",
                            "clsgDtTm": "2017-11-27T05:00:00"
                        },
                        "untrInvstmtVal": 725.090000,
                        "anulInvstmtRate": 5.3600,
                        "untrRedVal": 702.850000,
                        "anulRedRate": 5.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-27T09:25:00",
                            "clsgDtTm": "2017-11-28T05:00:00"
                        },
                        "untrInvstmtVal": 721.580000,
                        "anulInvstmtRate": 5.3800,
                        "untrRedVal": 699.440000,
                        "anulRedRate": 5.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-28T09:25:00",
                            "clsgDtTm": "2017-11-29T05:00:00"
                        },
                        "untrInvstmtVal": 721.810000,
                        "anulInvstmtRate": 5.3800,
                        "untrRedVal": 699.680000,
                        "anulRedRate": 5.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-29T09:25:00",
                            "clsgDtTm": "2017-11-30T05:00:00"
                        },
                        "untrInvstmtVal": 720.180000,
                        "anulInvstmtRate": 5.3900,
                        "untrRedVal": 698.100000,
                        "anulRedRate": 5.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-11-30T09:25:00",
                            "clsgDtTm": "2017-12-01T05:00:00"
                        },
                        "untrInvstmtVal": 707.450000,
                        "anulInvstmtRate": 5.4600,
                        "untrRedVal": 685.780000,
                        "anulRedRate": 5.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-01T09:25:00",
                            "clsgDtTm": "2017-12-04T05:00:00"
                        },
                        "untrInvstmtVal": 704.200000,
                        "anulInvstmtRate": 5.4800,
                        "untrRedVal": 682.630000,
                        "anulRedRate": 5.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-04T09:25:00",
                            "clsgDtTm": "2017-12-05T05:00:00"
                        },
                        "untrInvstmtVal": 709.940000,
                        "anulInvstmtRate": 5.4500,
                        "untrRedVal": 688.190000,
                        "anulRedRate": 5.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-05T09:25:00",
                            "clsgDtTm": "2017-12-06T05:00:00"
                        },
                        "untrInvstmtVal": 713.870000,
                        "anulInvstmtRate": 5.4300,
                        "untrRedVal": 692.000000,
                        "anulRedRate": 5.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-06T09:25:00",
                            "clsgDtTm": "2017-12-07T05:00:00"
                        },
                        "untrInvstmtVal": 708.570000,
                        "anulInvstmtRate": 5.4600,
                        "untrRedVal": 686.880000,
                        "anulRedRate": 5.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-07T09:25:00",
                            "clsgDtTm": "2017-12-08T05:00:00"
                        },
                        "untrInvstmtVal": 696.070000,
                        "anulInvstmtRate": 5.5300,
                        "untrRedVal": 674.770000,
                        "anulRedRate": 5.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-08T09:25:00",
                            "clsgDtTm": "2017-12-11T05:00:00"
                        },
                        "untrInvstmtVal": 701.360000,
                        "anulInvstmtRate": 5.5000,
                        "untrRedVal": 679.900000,
                        "anulRedRate": 5.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-11T09:25:00",
                            "clsgDtTm": "2017-12-12T05:00:00"
                        },
                        "untrInvstmtVal": 708.880000,
                        "anulInvstmtRate": 5.4600,
                        "untrRedVal": 687.190000,
                        "anulRedRate": 5.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-12T09:25:00",
                            "clsgDtTm": "2017-12-13T05:00:00"
                        },
                        "untrInvstmtVal": 701.790000,
                        "anulInvstmtRate": 5.5000,
                        "untrRedVal": 680.320000,
                        "anulRedRate": 5.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-13T09:25:00",
                            "clsgDtTm": "2017-12-14T05:00:00"
                        },
                        "untrInvstmtVal": 705.650000,
                        "anulInvstmtRate": 5.4800,
                        "untrRedVal": 684.070000,
                        "anulRedRate": 5.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-14T09:25:00",
                            "clsgDtTm": "2017-12-15T05:00:00"
                        },
                        "untrInvstmtVal": 704.040000,
                        "anulInvstmtRate": 5.4900,
                        "untrRedVal": 682.510000,
                        "anulRedRate": 5.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-15T09:25:00",
                            "clsgDtTm": "2017-12-18T05:00:00"
                        },
                        "untrInvstmtVal": 704.370000,
                        "anulInvstmtRate": 5.4900,
                        "untrRedVal": 682.840000,
                        "anulRedRate": 5.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-18T09:25:00",
                            "clsgDtTm": "2017-12-19T05:00:00"
                        },
                        "untrInvstmtVal": 704.580000,
                        "anulInvstmtRate": 5.4900,
                        "untrRedVal": 683.050000,
                        "anulRedRate": 5.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-19T09:25:00",
                            "clsgDtTm": "2017-12-20T05:00:00"
                        },
                        "untrInvstmtVal": 704.800000,
                        "anulInvstmtRate": 5.4900,
                        "untrRedVal": 683.250000,
                        "anulRedRate": 5.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-20T09:25:00",
                            "clsgDtTm": "2017-12-21T05:00:00"
                        },
                        "untrInvstmtVal": 703.180000,
                        "anulInvstmtRate": 5.5000,
                        "untrRedVal": 681.700000,
                        "anulRedRate": 5.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-21T09:25:00",
                            "clsgDtTm": "2017-12-22T05:00:00"
                        },
                        "untrInvstmtVal": 708.880000,
                        "anulInvstmtRate": 5.4700,
                        "untrRedVal": 687.210000,
                        "anulRedRate": 5.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-22T09:25:00",
                            "clsgDtTm": "2017-12-26T05:00:00"
                        },
                        "untrInvstmtVal": 712.930000,
                        "anulInvstmtRate": 5.4500,
                        "untrRedVal": 691.140000,
                        "anulRedRate": 5.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-26T09:25:00",
                            "clsgDtTm": "2017-12-27T05:00:00"
                        },
                        "untrInvstmtVal": 711.290000,
                        "anulInvstmtRate": 5.4600,
                        "untrRedVal": 689.560000,
                        "anulRedRate": 5.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-27T09:25:00",
                            "clsgDtTm": "2017-12-28T05:00:00"
                        },
                        "untrInvstmtVal": 713.350000,
                        "anulInvstmtRate": 5.4500,
                        "untrRedVal": 691.550000,
                        "anulRedRate": 5.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2017-12-28T09:25:00",
                            "clsgDtTm": "2018-01-02T05:00:00"
                        },
                        "untrInvstmtVal": 715.800000,
                        "anulInvstmtRate": 5.4400,
                        "untrRedVal": 0.0,
                        "anulRedRate": 0.0
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-02T09:25:00",
                            "clsgDtTm": "2018-01-03T05:00:00"
                        },
                        "untrInvstmtVal": 717.860000,
                        "anulInvstmtRate": 5.4300,
                        "untrRedVal": 695.930000,
                        "anulRedRate": 5.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-03T09:25:00",
                            "clsgDtTm": "2018-01-04T05:00:00"
                        },
                        "untrInvstmtVal": 723.670000,
                        "anulInvstmtRate": 5.4000,
                        "untrRedVal": 701.560000,
                        "anulRedRate": 5.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-04T09:25:00",
                            "clsgDtTm": "2018-01-05T05:00:00"
                        },
                        "untrInvstmtVal": 733.310000,
                        "anulInvstmtRate": 5.3500,
                        "untrRedVal": 710.890000,
                        "anulRedRate": 5.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-05T09:25:00",
                            "clsgDtTm": "2018-01-08T05:00:00"
                        },
                        "untrInvstmtVal": 733.640000,
                        "anulInvstmtRate": 5.3500,
                        "untrRedVal": 711.220000,
                        "anulRedRate": 5.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-08T09:25:00",
                            "clsgDtTm": "2018-01-09T05:00:00"
                        },
                        "untrInvstmtVal": 733.860000,
                        "anulInvstmtRate": 5.3500,
                        "untrRedVal": 711.430000,
                        "anulRedRate": 5.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-09T09:25:00",
                            "clsgDtTm": "2018-01-10T05:00:00"
                        },
                        "untrInvstmtVal": 732.170000,
                        "anulInvstmtRate": 5.3600,
                        "untrRedVal": 709.810000,
                        "anulRedRate": 5.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-10T09:25:00",
                            "clsgDtTm": "2018-01-11T05:00:00"
                        },
                        "untrInvstmtVal": 737.340000,
                        "anulInvstmtRate": 5.3400,
                        "untrRedVal": 714.810000,
                        "anulRedRate": 5.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-11T09:25:00",
                            "clsgDtTm": "2018-01-12T05:00:00"
                        },
                        "untrInvstmtVal": 741.420000,
                        "anulInvstmtRate": 5.3200,
                        "untrRedVal": 718.770000,
                        "anulRedRate": 5.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-12T09:25:00",
                            "clsgDtTm": "2018-01-15T05:00:00"
                        },
                        "untrInvstmtVal": 757.400000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 734.250000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-15T09:25:00",
                            "clsgDtTm": "2018-01-16T05:00:00"
                        },
                        "untrInvstmtVal": 759.600000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 736.390000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-16T09:25:00",
                            "clsgDtTm": "2018-01-17T05:00:00"
                        },
                        "untrInvstmtVal": 757.880000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 734.720000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-17T09:25:00",
                            "clsgDtTm": "2018-01-18T05:00:00"
                        },
                        "untrInvstmtVal": 764.030000,
                        "anulInvstmtRate": 5.2100,
                        "untrRedVal": 740.680000,
                        "anulRedRate": 5.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-18T09:25:00",
                            "clsgDtTm": "2018-01-19T05:00:00"
                        },
                        "untrInvstmtVal": 768.240000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 744.750000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-19T09:25:00",
                            "clsgDtTm": "2018-01-22T05:00:00"
                        },
                        "untrInvstmtVal": 772.640000,
                        "anulInvstmtRate": 5.1700,
                        "untrRedVal": 749.020000,
                        "anulRedRate": 5.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-22T09:25:00",
                            "clsgDtTm": "2018-01-23T05:00:00"
                        },
                        "untrInvstmtVal": 770.880000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 747.320000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-23T09:25:00",
                            "clsgDtTm": "2018-01-24T05:00:00"
                        },
                        "untrInvstmtVal": 767.140000,
                        "anulInvstmtRate": 5.2000,
                        "untrRedVal": 743.710000,
                        "anulRedRate": 5.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-24T09:25:00",
                            "clsgDtTm": "2018-01-26T05:00:00"
                        },
                        "untrInvstmtVal": 779.740000,
                        "anulInvstmtRate": 5.1400,
                        "untrRedVal": 755.920000,
                        "anulRedRate": 5.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-26T09:25:00",
                            "clsgDtTm": "2018-01-29T05:00:00"
                        },
                        "untrInvstmtVal": 811.090000,
                        "anulInvstmtRate": 4.9900,
                        "untrRedVal": 786.270000,
                        "anulRedRate": 5.1100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-29T09:25:00",
                            "clsgDtTm": "2018-01-30T05:00:00"
                        },
                        "untrInvstmtVal": 809.250000,
                        "anulInvstmtRate": 5.0000,
                        "untrRedVal": 784.490000,
                        "anulRedRate": 5.1200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-30T09:25:00",
                            "clsgDtTm": "2018-01-31T05:00:00"
                        },
                        "untrInvstmtVal": 801.160000,
                        "anulInvstmtRate": 5.0400,
                        "untrRedVal": 776.670000,
                        "anulRedRate": 5.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-01-31T09:25:00",
                            "clsgDtTm": "2018-02-01T05:00:00"
                        },
                        "untrInvstmtVal": 801.420000,
                        "anulInvstmtRate": 5.0400,
                        "untrRedVal": 776.920000,
                        "anulRedRate": 5.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-01T09:25:00",
                            "clsgDtTm": "2018-02-05T05:00:00"
                        },
                        "untrInvstmtVal": 802.140000,
                        "anulInvstmtRate": 5.0400,
                        "untrRedVal": 777.620000,
                        "anulRedRate": 5.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-05T09:25:00",
                            "clsgDtTm": "2018-02-06T05:00:00"
                        },
                        "untrInvstmtVal": 790.040000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 765.910000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-06T09:25:00",
                            "clsgDtTm": "2018-02-07T05:00:00"
                        },
                        "untrInvstmtVal": 784.180000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 760.250000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-07T09:25:00",
                            "clsgDtTm": "2018-02-08T05:00:00"
                        },
                        "untrInvstmtVal": 784.440000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 760.500000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-08T09:25:00",
                            "clsgDtTm": "2018-02-09T05:00:00"
                        },
                        "untrInvstmtVal": 784.060000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 760.140000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-09T09:25:00",
                            "clsgDtTm": "2018-02-14T05:00:00"
                        },
                        "untrInvstmtVal": 774.520000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 750.900000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-14T14:00:00",
                            "clsgDtTm": "2018-02-15T05:00:00"
                        },
                        "untrInvstmtVal": 778.760000,
                        "anulInvstmtRate": 5.1600,
                        "untrRedVal": 755.010000,
                        "anulRedRate": 5.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-15T09:25:00",
                            "clsgDtTm": "2018-02-16T05:00:00"
                        },
                        "untrInvstmtVal": 781.040000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 757.220000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-16T09:25:00",
                            "clsgDtTm": "2018-02-19T05:00:00"
                        },
                        "untrInvstmtVal": 793.740000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 769.520000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-19T09:25:00",
                            "clsgDtTm": "2018-02-20T05:00:00"
                        },
                        "untrInvstmtVal": 796.060000,
                        "anulInvstmtRate": 5.0800,
                        "untrRedVal": 771.770000,
                        "anulRedRate": 5.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-20T09:25:00",
                            "clsgDtTm": "2018-02-21T05:00:00"
                        },
                        "untrInvstmtVal": 798.390000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 774.030000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-21T09:25:00",
                            "clsgDtTm": "2018-02-22T05:00:00"
                        },
                        "untrInvstmtVal": 792.490000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 768.330000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-22T09:25:00",
                            "clsgDtTm": "2018-02-23T05:00:00"
                        },
                        "untrInvstmtVal": 792.760000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 768.590000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-23T09:25:00",
                            "clsgDtTm": "2018-02-26T05:00:00"
                        },
                        "untrInvstmtVal": 797.370000,
                        "anulInvstmtRate": 5.0800,
                        "untrRedVal": 773.050000,
                        "anulRedRate": 5.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-26T09:25:00",
                            "clsgDtTm": "2018-02-27T05:00:00"
                        },
                        "untrInvstmtVal": 803.840000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 779.320000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-27T09:25:00",
                            "clsgDtTm": "2018-02-28T05:00:00"
                        },
                        "untrInvstmtVal": 801.780000,
                        "anulInvstmtRate": 5.0600,
                        "untrRedVal": 777.330000,
                        "anulRedRate": 5.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-02-28T09:25:00",
                            "clsgDtTm": "2018-03-01T05:00:00"
                        },
                        "untrInvstmtVal": 799.960000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 775.580000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-01T09:25:00",
                            "clsgDtTm": "2018-03-02T05:00:00"
                        },
                        "untrInvstmtVal": 798.150000,
                        "anulInvstmtRate": 5.0800,
                        "untrRedVal": 773.830000,
                        "anulRedRate": 5.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-02T09:25:00",
                            "clsgDtTm": "2018-03-05T05:00:00"
                        },
                        "untrInvstmtVal": 798.590000,
                        "anulInvstmtRate": 5.0800,
                        "untrRedVal": 774.260000,
                        "anulRedRate": 5.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-05T09:25:00",
                            "clsgDtTm": "2018-03-06T05:00:00"
                        },
                        "untrInvstmtVal": 796.780000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 772.510000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-06T09:25:00",
                            "clsgDtTm": "2018-03-07T05:00:00"
                        },
                        "untrInvstmtVal": 797.030000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 772.760000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-07T09:25:00",
                            "clsgDtTm": "2018-03-08T05:00:00"
                        },
                        "untrInvstmtVal": 793.180000,
                        "anulInvstmtRate": 5.1100,
                        "untrRedVal": 769.030000,
                        "anulRedRate": 5.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-08T09:25:00",
                            "clsgDtTm": "2018-03-09T05:00:00"
                        },
                        "untrInvstmtVal": 795.480000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 771.260000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-09T09:25:00",
                            "clsgDtTm": "2018-03-12T05:00:00"
                        },
                        "untrInvstmtVal": 797.900000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 773.610000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-12T09:25:00",
                            "clsgDtTm": "2018-03-13T05:00:00"
                        },
                        "untrInvstmtVal": 798.150000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 773.860000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-13T09:25:00",
                            "clsgDtTm": "2018-03-14T05:00:00"
                        },
                        "untrInvstmtVal": 802.520000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 778.100000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-14T09:25:00",
                            "clsgDtTm": "2018-03-15T05:00:00"
                        },
                        "untrInvstmtVal": 800.710000,
                        "anulInvstmtRate": 5.0800,
                        "untrRedVal": 776.340000,
                        "anulRedRate": 5.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-15T09:25:00",
                            "clsgDtTm": "2018-03-16T05:00:00"
                        },
                        "untrInvstmtVal": 798.840000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 774.530000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-16T09:25:00",
                            "clsgDtTm": "2018-03-19T05:00:00"
                        },
                        "untrInvstmtVal": 799.110000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 774.800000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-19T09:25:00",
                            "clsgDtTm": "2018-03-20T05:00:00"
                        },
                        "untrInvstmtVal": 803.430000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 778.990000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-20T09:25:00",
                            "clsgDtTm": "2018-03-21T05:00:00"
                        },
                        "untrInvstmtVal": 791.300000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 767.240000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-21T09:25:00",
                            "clsgDtTm": "2018-03-22T05:00:00"
                        },
                        "untrInvstmtVal": 787.430000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 763.500000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-22T09:25:00",
                            "clsgDtTm": "2018-03-23T05:00:00"
                        },
                        "untrInvstmtVal": 797.830000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 773.570000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-23T09:25:00",
                            "clsgDtTm": "2018-03-26T05:00:00"
                        },
                        "untrInvstmtVal": 798.090000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 773.830000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-26T09:25:00",
                            "clsgDtTm": "2018-03-27T05:00:00"
                        },
                        "untrInvstmtVal": 794.160000,
                        "anulInvstmtRate": 5.1200,
                        "untrRedVal": 770.020000,
                        "anulRedRate": 5.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-27T09:25:00",
                            "clsgDtTm": "2018-03-28T05:00:00"
                        },
                        "untrInvstmtVal": 796.390000,
                        "anulInvstmtRate": 5.1100,
                        "untrRedVal": 772.190000,
                        "anulRedRate": 5.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-28T09:25:00",
                            "clsgDtTm": "2018-03-29T05:00:00"
                        },
                        "untrInvstmtVal": 780.360000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 756.670000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-03-29T09:25:00",
                            "clsgDtTm": "2018-04-02T05:00:00"
                        },
                        "untrInvstmtVal": 784.670000,
                        "anulInvstmtRate": 5.1700,
                        "untrRedVal": 760.850000,
                        "anulRedRate": 5.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-02T09:25:00",
                            "clsgDtTm": "2018-04-03T05:00:00"
                        },
                        "untrInvstmtVal": 782.850000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 759.090000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-03T09:25:00",
                            "clsgDtTm": "2018-04-04T05:00:00"
                        },
                        "untrInvstmtVal": 779.020000,
                        "anulInvstmtRate": 5.2000,
                        "untrRedVal": 755.390000,
                        "anulRedRate": 5.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-04T09:25:00",
                            "clsgDtTm": "2018-04-05T05:00:00"
                        },
                        "untrInvstmtVal": 759.460000,
                        "anulInvstmtRate": 5.3000,
                        "untrRedVal": 736.440000,
                        "anulRedRate": 5.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-05T09:25:00",
                            "clsgDtTm": "2018-04-06T05:00:00"
                        },
                        "untrInvstmtVal": 773.420000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 749.970000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-06T09:25:00",
                            "clsgDtTm": "2018-04-09T05:00:00"
                        },
                        "untrInvstmtVal": 759.900000,
                        "anulInvstmtRate": 5.3000,
                        "untrRedVal": 736.870000,
                        "anulRedRate": 5.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-09T09:25:00",
                            "clsgDtTm": "2018-04-10T05:00:00"
                        },
                        "untrInvstmtVal": 756.200000,
                        "anulInvstmtRate": 5.3200,
                        "untrRedVal": 733.290000,
                        "anulRedRate": 5.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-10T09:25:00",
                            "clsgDtTm": "2018-04-11T05:00:00"
                        },
                        "untrInvstmtVal": 752.260000,
                        "anulInvstmtRate": 5.3400,
                        "untrRedVal": 729.480000,
                        "anulRedRate": 5.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-11T09:25:00",
                            "clsgDtTm": "2018-04-12T05:00:00"
                        },
                        "untrInvstmtVal": 758.240000,
                        "anulInvstmtRate": 5.3100,
                        "untrRedVal": 735.280000,
                        "anulRedRate": 5.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-12T09:25:00",
                            "clsgDtTm": "2018-04-13T05:00:00"
                        },
                        "untrInvstmtVal": 762.320000,
                        "anulInvstmtRate": 5.2900,
                        "untrRedVal": 739.230000,
                        "anulRedRate": 5.4100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-13T09:25:00",
                            "clsgDtTm": "2018-04-16T05:00:00"
                        },
                        "untrInvstmtVal": 766.520000,
                        "anulInvstmtRate": 5.2700,
                        "untrRedVal": 743.310000,
                        "anulRedRate": 5.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-16T09:25:00",
                            "clsgDtTm": "2018-04-17T05:00:00"
                        },
                        "untrInvstmtVal": 764.800000,
                        "anulInvstmtRate": 5.2800,
                        "untrRedVal": 741.640000,
                        "anulRedRate": 5.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-17T09:25:00",
                            "clsgDtTm": "2018-04-18T05:00:00"
                        },
                        "untrInvstmtVal": 772.920000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 749.510000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-18T09:25:00",
                            "clsgDtTm": "2018-04-19T05:00:00"
                        },
                        "untrInvstmtVal": 775.150000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 751.670000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-19T09:25:00",
                            "clsgDtTm": "2018-04-20T05:00:00"
                        },
                        "untrInvstmtVal": 775.380000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 751.900000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-20T09:25:00",
                            "clsgDtTm": "2018-04-23T05:00:00"
                        },
                        "untrInvstmtVal": 771.820000,
                        "anulInvstmtRate": 5.2500,
                        "untrRedVal": 748.460000,
                        "anulRedRate": 5.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-23T09:25:00",
                            "clsgDtTm": "2018-04-24T05:00:00"
                        },
                        "untrInvstmtVal": 766.060000,
                        "anulInvstmtRate": 5.2800,
                        "untrRedVal": 742.880000,
                        "anulRedRate": 5.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-24T09:25:00",
                            "clsgDtTm": "2018-04-25T05:00:00"
                        },
                        "untrInvstmtVal": 762.370000,
                        "anulInvstmtRate": 5.3000,
                        "untrRedVal": 739.310000,
                        "anulRedRate": 5.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-25T09:25:00",
                            "clsgDtTm": "2018-04-26T05:00:00"
                        },
                        "untrInvstmtVal": 758.700000,
                        "anulInvstmtRate": 5.3200,
                        "untrRedVal": 735.760000,
                        "anulRedRate": 5.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-26T09:25:00",
                            "clsgDtTm": "2018-04-27T05:00:00"
                        },
                        "untrInvstmtVal": 764.780000,
                        "anulInvstmtRate": 5.2900,
                        "untrRedVal": 741.650000,
                        "anulRedRate": 5.4100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-27T09:25:00",
                            "clsgDtTm": "2018-04-30T05:00:00"
                        },
                        "untrInvstmtVal": 771.050000,
                        "anulInvstmtRate": 5.2600,
                        "untrRedVal": 747.730000,
                        "anulRedRate": 5.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-04-30T09:25:00",
                            "clsgDtTm": "2018-05-02T05:00:00"
                        },
                        "untrInvstmtVal": 767.410000,
                        "anulInvstmtRate": 5.2800,
                        "untrRedVal": 744.210000,
                        "anulRedRate": 5.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-02T09:25:00",
                            "clsgDtTm": "2018-05-03T05:00:00"
                        },
                        "untrInvstmtVal": 761.770000,
                        "anulInvstmtRate": 5.3100,
                        "untrRedVal": 738.740000,
                        "anulRedRate": 5.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-03T09:25:00",
                            "clsgDtTm": "2018-05-04T05:00:00"
                        },
                        "untrInvstmtVal": 760.050000,
                        "anulInvstmtRate": 5.3200,
                        "untrRedVal": 737.080000,
                        "anulRedRate": 5.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-04T09:25:00",
                            "clsgDtTm": "2018-05-07T05:00:00"
                        },
                        "untrInvstmtVal": 760.420000,
                        "anulInvstmtRate": 5.3200,
                        "untrRedVal": 737.440000,
                        "anulRedRate": 5.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-07T09:25:00",
                            "clsgDtTm": "2018-05-08T05:00:00"
                        },
                        "untrInvstmtVal": 760.640000,
                        "anulInvstmtRate": 5.3200,
                        "untrRedVal": 737.670000,
                        "anulRedRate": 5.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-08T09:25:00",
                            "clsgDtTm": "2018-05-09T05:00:00"
                        },
                        "untrInvstmtVal": 749.290000,
                        "anulInvstmtRate": 5.3800,
                        "untrRedVal": 726.670000,
                        "anulRedRate": 5.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-09T09:25:00",
                            "clsgDtTm": "2018-05-10T05:00:00"
                        },
                        "untrInvstmtVal": 738.120000,
                        "anulInvstmtRate": 5.4400,
                        "untrRedVal": 715.850000,
                        "anulRedRate": 5.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-10T09:25:00",
                            "clsgDtTm": "2018-05-11T05:00:00"
                        },
                        "untrInvstmtVal": 745.530000,
                        "anulInvstmtRate": 5.4000,
                        "untrRedVal": 723.040000,
                        "anulRedRate": 5.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-11T09:25:00",
                            "clsgDtTm": "2018-05-14T05:00:00"
                        },
                        "untrInvstmtVal": 751.590000,
                        "anulInvstmtRate": 5.3700,
                        "untrRedVal": 728.910000,
                        "anulRedRate": 5.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-14T09:25:00",
                            "clsgDtTm": "2018-05-15T05:00:00"
                        },
                        "untrInvstmtVal": 738.480000,
                        "anulInvstmtRate": 5.4400,
                        "untrRedVal": 716.210000,
                        "anulRedRate": 5.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-15T09:25:00",
                            "clsgDtTm": "2018-05-16T05:00:00"
                        },
                        "untrInvstmtVal": 727.500000,
                        "anulInvstmtRate": 5.5000,
                        "untrRedVal": 705.580000,
                        "anulRedRate": 5.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-16T09:25:00",
                            "clsgDtTm": "2018-05-17T05:00:00"
                        },
                        "untrInvstmtVal": 742.750000,
                        "anulInvstmtRate": 5.4200,
                        "untrRedVal": 720.360000,
                        "anulRedRate": 5.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-17T09:25:00",
                            "clsgDtTm": "2018-05-18T05:00:00"
                        },
                        "untrInvstmtVal": 744.890000,
                        "anulInvstmtRate": 5.4100,
                        "untrRedVal": 722.440000,
                        "anulRedRate": 5.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-18T09:25:00",
                            "clsgDtTm": "2018-05-21T05:00:00"
                        },
                        "untrInvstmtVal": 721.010000,
                        "anulInvstmtRate": 5.5400,
                        "untrRedVal": 699.300000,
                        "anulRedRate": 5.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-21T09:25:00",
                            "clsgDtTm": "2018-05-22T05:00:00"
                        },
                        "untrInvstmtVal": 715.760000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 694.220000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-22T09:25:00",
                            "clsgDtTm": "2018-05-23T05:00:00"
                        },
                        "untrInvstmtVal": 728.880000,
                        "anulInvstmtRate": 5.5000,
                        "untrRedVal": 706.940000,
                        "anulRedRate": 5.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-23T09:25:00",
                            "clsgDtTm": "2018-05-24T05:00:00"
                        },
                        "untrInvstmtVal": 727.270000,
                        "anulInvstmtRate": 5.5100,
                        "untrRedVal": 705.380000,
                        "anulRedRate": 5.6300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-24T09:25:00",
                            "clsgDtTm": "2018-05-25T05:00:00"
                        },
                        "untrInvstmtVal": 718.300000,
                        "anulInvstmtRate": 5.5600,
                        "untrRedVal": 696.690000,
                        "anulRedRate": 5.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-25T09:25:00",
                            "clsgDtTm": "2018-05-28T05:00:00"
                        },
                        "untrInvstmtVal": 714.640000,
                        "anulInvstmtRate": 5.5800,
                        "untrRedVal": 693.150000,
                        "anulRedRate": 5.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-28T09:25:00",
                            "clsgDtTm": "2018-05-29T05:00:00"
                        },
                        "untrInvstmtVal": 711.220000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 689.840000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-29T09:25:00",
                            "clsgDtTm": "2018-05-30T05:00:00"
                        },
                        "untrInvstmtVal": 704.220000,
                        "anulInvstmtRate": 5.6400,
                        "untrRedVal": 683.060000,
                        "anulRedRate": 5.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-05-30T09:25:00",
                            "clsgDtTm": "2018-06-01T05:00:00"
                        },
                        "untrInvstmtVal": 678.130000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 657.780000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-01T09:25:00",
                            "clsgDtTm": "2018-06-04T05:00:00"
                        },
                        "untrInvstmtVal": 697.660000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 676.710000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-04T09:25:00",
                            "clsgDtTm": "2018-06-05T05:00:00"
                        },
                        "untrInvstmtVal": 694.330000,
                        "anulInvstmtRate": 5.7000,
                        "untrRedVal": 673.480000,
                        "anulRedRate": 5.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-05T09:25:00",
                            "clsgDtTm": "2018-06-06T05:00:00"
                        },
                        "untrInvstmtVal": 675.400000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 655.150000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-06T09:25:00",
                            "clsgDtTm": "2018-06-07T05:00:00"
                        },
                        "untrInvstmtVal": 662.030000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 642.190000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-07T09:25:00",
                            "clsgDtTm": "2018-06-08T05:00:00"
                        },
                        "untrInvstmtVal": 670.680000,
                        "anulInvstmtRate": 5.8400,
                        "untrRedVal": 650.580000,
                        "anulRedRate": 5.9600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-08T09:25:00",
                            "clsgDtTm": "2018-06-11T05:00:00"
                        },
                        "untrInvstmtVal": 671.970000,
                        "anulInvstmtRate": 5.8400,
                        "untrRedVal": 651.830000,
                        "anulRedRate": 5.9600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-11T09:25:00",
                            "clsgDtTm": "2018-06-12T05:00:00"
                        },
                        "untrInvstmtVal": 677.340000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 657.040000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-12T09:25:00",
                            "clsgDtTm": "2018-06-13T05:00:00"
                        },
                        "untrInvstmtVal": 662.290000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 642.460000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-13T09:25:00",
                            "clsgDtTm": "2018-06-14T05:00:00"
                        },
                        "untrInvstmtVal": 662.530000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 642.700000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-14T09:25:00",
                            "clsgDtTm": "2018-06-15T05:00:00"
                        },
                        "untrInvstmtVal": 659.410000,
                        "anulInvstmtRate": 5.9200,
                        "untrRedVal": 639.680000,
                        "anulRedRate": 6.0400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-15T09:25:00",
                            "clsgDtTm": "2018-06-18T05:00:00"
                        },
                        "untrInvstmtVal": 658.470000,
                        "anulInvstmtRate": 5.9300,
                        "untrRedVal": 638.780000,
                        "anulRedRate": 6.0500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-18T09:25:00",
                            "clsgDtTm": "2018-06-19T05:00:00"
                        },
                        "untrInvstmtVal": 657.150000,
                        "anulInvstmtRate": 5.9400,
                        "untrRedVal": 637.500000,
                        "anulRedRate": 6.0600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-19T09:25:00",
                            "clsgDtTm": "2018-06-20T05:00:00"
                        },
                        "untrInvstmtVal": 659.160000,
                        "anulInvstmtRate": 5.9300,
                        "untrRedVal": 639.450000,
                        "anulRedRate": 6.0500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-20T09:25:00",
                            "clsgDtTm": "2018-06-21T05:00:00"
                        },
                        "untrInvstmtVal": 681.580000,
                        "anulInvstmtRate": 5.8000,
                        "untrRedVal": 661.170000,
                        "anulRedRate": 5.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-21T09:25:00",
                            "clsgDtTm": "2018-06-22T05:00:00"
                        },
                        "untrInvstmtVal": 668.250000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 648.260000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-22T09:25:00",
                            "clsgDtTm": "2018-06-25T05:00:00"
                        },
                        "untrInvstmtVal": 666.400000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 646.470000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-25T09:25:00",
                            "clsgDtTm": "2018-06-26T05:00:00"
                        },
                        "untrInvstmtVal": 666.830000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 646.890000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-26T09:25:00",
                            "clsgDtTm": "2018-06-27T05:00:00"
                        },
                        "untrInvstmtVal": 674.040000,
                        "anulInvstmtRate": 5.8600,
                        "untrRedVal": 653.890000,
                        "anulRedRate": 5.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-27T09:25:00",
                            "clsgDtTm": "2018-06-28T05:00:00"
                        },
                        "untrInvstmtVal": 665.990000,
                        "anulInvstmtRate": 5.9100,
                        "untrRedVal": 646.090000,
                        "anulRedRate": 6.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-28T09:25:00",
                            "clsgDtTm": "2018-06-29T05:00:00"
                        },
                        "untrInvstmtVal": 673.190000,
                        "anulInvstmtRate": 5.8700,
                        "untrRedVal": 653.070000,
                        "anulRedRate": 5.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-06-29T09:25:00",
                            "clsgDtTm": "2018-07-02T05:00:00"
                        },
                        "untrInvstmtVal": 674.180000,
                        "anulInvstmtRate": 5.8700,
                        "untrRedVal": 654.030000,
                        "anulRedRate": 5.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-02T09:25:00",
                            "clsgDtTm": "2018-07-03T05:00:00"
                        },
                        "untrInvstmtVal": 681.470000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 661.100000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-03T09:25:00",
                            "clsgDtTm": "2018-07-04T05:00:00"
                        },
                        "untrInvstmtVal": 681.900000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 661.520000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-04T09:25:00",
                            "clsgDtTm": "2018-07-05T05:00:00"
                        },
                        "untrInvstmtVal": 689.280000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 668.670000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-05T09:25:00",
                            "clsgDtTm": "2018-07-06T05:00:00"
                        },
                        "untrInvstmtVal": 687.970000,
                        "anulInvstmtRate": 5.8000,
                        "untrRedVal": 667.410000,
                        "anulRedRate": 5.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-06T09:25:00",
                            "clsgDtTm": "2018-07-10T05:00:00"
                        },
                        "untrInvstmtVal": 693.030000,
                        "anulInvstmtRate": 5.7800,
                        "untrRedVal": 672.310000,
                        "anulRedRate": 5.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-10T09:25:00",
                            "clsgDtTm": "2018-07-11T05:00:00"
                        },
                        "untrInvstmtVal": 705.860000,
                        "anulInvstmtRate": 5.7100,
                        "untrRedVal": 684.750000,
                        "anulRedRate": 5.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-11T09:25:00",
                            "clsgDtTm": "2018-07-12T05:00:00"
                        },
                        "untrInvstmtVal": 700.970000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 680.020000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-12T09:25:00",
                            "clsgDtTm": "2018-07-13T05:00:00"
                        },
                        "untrInvstmtVal": 697.880000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 677.020000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-13T09:25:00",
                            "clsgDtTm": "2018-07-16T05:00:00"
                        },
                        "untrInvstmtVal": 696.930000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 676.110000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-16T09:25:00",
                            "clsgDtTm": "2018-07-17T05:00:00"
                        },
                        "untrInvstmtVal": 690.160000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 669.550000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-17T09:25:00",
                            "clsgDtTm": "2018-07-18T05:00:00"
                        },
                        "untrInvstmtVal": 688.650000,
                        "anulInvstmtRate": 5.8200,
                        "untrRedVal": 668.100000,
                        "anulRedRate": 5.9400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-18T09:25:00",
                            "clsgDtTm": "2018-07-19T05:00:00"
                        },
                        "untrInvstmtVal": 688.890000,
                        "anulInvstmtRate": 5.8200,
                        "untrRedVal": 668.330000,
                        "anulRedRate": 5.9400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-19T09:25:00",
                            "clsgDtTm": "2018-07-20T05:00:00"
                        },
                        "untrInvstmtVal": 687.390000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 666.880000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-20T09:25:00",
                            "clsgDtTm": "2018-07-23T05:00:00"
                        },
                        "untrInvstmtVal": 703.610000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 682.600000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-23T09:25:00",
                            "clsgDtTm": "2018-07-24T05:00:00"
                        },
                        "untrInvstmtVal": 698.390000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 677.540000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-24T09:25:00",
                            "clsgDtTm": "2018-07-25T05:00:00"
                        },
                        "untrInvstmtVal": 698.610000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 677.770000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-25T09:25:00",
                            "clsgDtTm": "2018-07-26T05:00:00"
                        },
                        "untrInvstmtVal": 705.930000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 684.860000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-26T09:25:00",
                            "clsgDtTm": "2018-07-27T05:00:00"
                        },
                        "untrInvstmtVal": 704.370000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 683.360000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-27T09:25:00",
                            "clsgDtTm": "2018-07-30T05:00:00"
                        },
                        "untrInvstmtVal": 708.310000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 687.170000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-30T09:25:00",
                            "clsgDtTm": "2018-07-31T05:00:00"
                        },
                        "untrInvstmtVal": 706.740000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 685.660000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-07-31T09:25:00",
                            "clsgDtTm": "2018-08-01T05:00:00"
                        },
                        "untrInvstmtVal": 703.410000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 682.430000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-01T09:25:00",
                            "clsgDtTm": "2018-08-02T05:00:00"
                        },
                        "untrInvstmtVal": 703.630000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 682.650000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-02T09:25:00",
                            "clsgDtTm": "2018-08-03T05:00:00"
                        },
                        "untrInvstmtVal": 703.860000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 682.870000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-03T09:25:00",
                            "clsgDtTm": "2018-08-06T05:00:00"
                        },
                        "untrInvstmtVal": 707.780000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 686.670000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-06T09:25:00",
                            "clsgDtTm": "2018-08-07T05:00:00"
                        },
                        "untrInvstmtVal": 715.190000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 693.860000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-07T09:25:00",
                            "clsgDtTm": "2018-08-08T05:00:00"
                        },
                        "untrInvstmtVal": 713.610000,
                        "anulInvstmtRate": 5.7000,
                        "untrRedVal": 692.330000,
                        "anulRedRate": 5.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-08T09:25:00",
                            "clsgDtTm": "2018-08-09T05:00:00"
                        },
                        "untrInvstmtVal": 708.630000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 687.500000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-09T09:25:00",
                            "clsgDtTm": "2018-08-10T05:00:00"
                        },
                        "untrInvstmtVal": 701.740000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 680.840000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-10T09:25:00",
                            "clsgDtTm": "2018-08-13T05:00:00"
                        },
                        "untrInvstmtVal": 693.330000,
                        "anulInvstmtRate": 5.8200,
                        "untrRedVal": 672.690000,
                        "anulRedRate": 5.9400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-13T09:25:00",
                            "clsgDtTm": "2018-08-14T05:00:00"
                        },
                        "untrInvstmtVal": 691.810000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 671.220000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-14T09:25:00",
                            "clsgDtTm": "2018-08-15T05:00:00"
                        },
                        "untrInvstmtVal": 713.290000,
                        "anulInvstmtRate": 5.7100,
                        "untrRedVal": 692.040000,
                        "anulRedRate": 5.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-15T09:25:00",
                            "clsgDtTm": "2018-08-16T05:00:00"
                        },
                        "untrInvstmtVal": 718.870000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 697.460000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-16T09:25:00",
                            "clsgDtTm": "2018-08-17T05:00:00"
                        },
                        "untrInvstmtVal": 739.270000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 717.230000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-17T09:25:00",
                            "clsgDtTm": "2018-08-20T05:00:00"
                        },
                        "untrInvstmtVal": 730.180000,
                        "anulInvstmtRate": 5.6200,
                        "untrRedVal": 708.420000,
                        "anulRedRate": 5.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-20T09:25:00",
                            "clsgDtTm": "2018-08-21T05:00:00"
                        },
                        "untrInvstmtVal": 724.850000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 703.250000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-21T09:25:00",
                            "clsgDtTm": "2018-08-22T05:00:00"
                        },
                        "untrInvstmtVal": 705.190000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 684.200000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-22T09:25:00",
                            "clsgDtTm": "2018-08-23T05:00:00"
                        },
                        "untrInvstmtVal": 708.910000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 687.820000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-23T09:25:00",
                            "clsgDtTm": "2018-08-24T05:00:00"
                        },
                        "untrInvstmtVal": 718.060000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 696.690000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-24T09:25:00",
                            "clsgDtTm": "2018-08-27T05:00:00"
                        },
                        "untrInvstmtVal": 718.160000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 696.780000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-27T09:25:00",
                            "clsgDtTm": "2018-08-28T05:00:00"
                        },
                        "untrInvstmtVal": 725.590000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 703.990000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-28T09:25:00",
                            "clsgDtTm": "2018-08-29T05:00:00"
                        },
                        "untrInvstmtVal": 718.480000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 697.100000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-29T09:25:00",
                            "clsgDtTm": "2018-08-30T05:00:00"
                        },
                        "untrInvstmtVal": 715.020000,
                        "anulInvstmtRate": 5.7100,
                        "untrRedVal": 693.760000,
                        "anulRedRate": 5.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-30T09:25:00",
                            "clsgDtTm": "2018-08-31T05:00:00"
                        },
                        "untrInvstmtVal": 700.930000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 680.100000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-08-31T09:25:00",
                            "clsgDtTm": "2018-09-03T05:00:00"
                        },
                        "untrInvstmtVal": 702.850000,
                        "anulInvstmtRate": 5.7800,
                        "untrRedVal": 681.960000,
                        "anulRedRate": 5.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-03T09:25:00",
                            "clsgDtTm": "2018-09-04T05:00:00"
                        },
                        "untrInvstmtVal": 697.720000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 677.000000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-04T09:25:00",
                            "clsgDtTm": "2018-09-05T05:00:00"
                        },
                        "untrInvstmtVal": 689.160000,
                        "anulInvstmtRate": 5.8600,
                        "untrRedVal": 668.700000,
                        "anulRedRate": 5.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-05T09:25:00",
                            "clsgDtTm": "2018-09-06T05:00:00"
                        },
                        "untrInvstmtVal": 689.320000,
                        "anulInvstmtRate": 5.8600,
                        "untrRedVal": 668.860000,
                        "anulRedRate": 5.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-06T09:25:00",
                            "clsgDtTm": "2018-09-10T05:00:00"
                        },
                        "untrInvstmtVal": 685.500000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 665.160000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-10T09:25:00",
                            "clsgDtTm": "2018-09-11T05:00:00"
                        },
                        "untrInvstmtVal": 687.360000,
                        "anulInvstmtRate": 5.8700,
                        "untrRedVal": 666.970000,
                        "anulRedRate": 5.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-11T09:25:00",
                            "clsgDtTm": "2018-09-12T05:00:00"
                        },
                        "untrInvstmtVal": 682.340000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 662.100000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-12T09:25:00",
                            "clsgDtTm": "2018-09-13T05:00:00"
                        },
                        "untrInvstmtVal": 698.070000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 677.360000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-13T09:25:00",
                            "clsgDtTm": "2018-09-14T05:00:00"
                        },
                        "untrInvstmtVal": 689.500000,
                        "anulInvstmtRate": 5.8600,
                        "untrRedVal": 669.050000,
                        "anulRedRate": 5.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-14T09:25:00",
                            "clsgDtTm": "2018-09-17T05:00:00"
                        },
                        "untrInvstmtVal": 686.330000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 665.980000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-17T09:25:00",
                            "clsgDtTm": "2018-09-18T05:00:00"
                        },
                        "untrInvstmtVal": 686.560000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 666.200000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-18T09:25:00",
                            "clsgDtTm": "2018-09-19T05:00:00"
                        },
                        "untrInvstmtVal": 686.790000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 666.430000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-19T09:25:00",
                            "clsgDtTm": "2018-09-20T05:00:00"
                        },
                        "untrInvstmtVal": 685.290000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 664.980000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-20T09:25:00",
                            "clsgDtTm": "2018-09-21T05:00:00"
                        },
                        "untrInvstmtVal": 685.520000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 665.210000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-21T09:25:00",
                            "clsgDtTm": "2018-09-24T05:00:00"
                        },
                        "untrInvstmtVal": 685.900000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 665.580000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-24T09:25:00",
                            "clsgDtTm": "2018-09-25T05:00:00"
                        },
                        "untrInvstmtVal": 682.880000,
                        "anulInvstmtRate": 5.9100,
                        "untrRedVal": 662.650000,
                        "anulRedRate": 6.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-25T09:25:00",
                            "clsgDtTm": "2018-09-26T05:00:00"
                        },
                        "untrInvstmtVal": 672.930000,
                        "anulInvstmtRate": 5.9700,
                        "untrRedVal": 653.010000,
                        "anulRedRate": 6.0900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-26T09:25:00",
                            "clsgDtTm": "2018-09-27T05:00:00"
                        },
                        "untrInvstmtVal": 678.250000,
                        "anulInvstmtRate": 5.9400,
                        "untrRedVal": 658.180000,
                        "anulRedRate": 6.0600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-27T09:25:00",
                            "clsgDtTm": "2018-09-28T05:00:00"
                        },
                        "untrInvstmtVal": 678.500000,
                        "anulInvstmtRate": 5.9400,
                        "untrRedVal": 658.420000,
                        "anulRedRate": 6.0600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-09-28T09:25:00",
                            "clsgDtTm": "2018-10-01T05:00:00"
                        },
                        "untrInvstmtVal": 678.920000,
                        "anulInvstmtRate": 5.9400,
                        "untrRedVal": 658.830000,
                        "anulRedRate": 6.0600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-01T09:25:00",
                            "clsgDtTm": "2018-10-02T05:00:00"
                        },
                        "untrInvstmtVal": 680.870000,
                        "anulInvstmtRate": 5.9300,
                        "untrRedVal": 660.730000,
                        "anulRedRate": 6.0500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-02T09:25:00",
                            "clsgDtTm": "2018-10-03T05:00:00"
                        },
                        "untrInvstmtVal": 684.540000,
                        "anulInvstmtRate": 5.9100,
                        "untrRedVal": 664.280000,
                        "anulRedRate": 6.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-03T09:25:00",
                            "clsgDtTm": "2018-10-04T05:00:00"
                        },
                        "untrInvstmtVal": 703.920000,
                        "anulInvstmtRate": 5.8000,
                        "untrRedVal": 683.070000,
                        "anulRedRate": 5.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-04T09:25:00",
                            "clsgDtTm": "2018-10-05T05:00:00"
                        },
                        "untrInvstmtVal": 704.170000,
                        "anulInvstmtRate": 5.8000,
                        "untrRedVal": 683.320000,
                        "anulRedRate": 5.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-05T09:25:00",
                            "clsgDtTm": "2018-10-08T05:00:00"
                        },
                        "untrInvstmtVal": 721.130000,
                        "anulInvstmtRate": 5.7100,
                        "untrRedVal": 699.760000,
                        "anulRedRate": 5.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-08T09:25:00",
                            "clsgDtTm": "2018-10-09T05:00:00"
                        },
                        "untrInvstmtVal": 754.740000,
                        "anulInvstmtRate": 5.5300,
                        "untrRedVal": 732.340000,
                        "anulRedRate": 5.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-09T09:25:00",
                            "clsgDtTm": "2018-10-10T05:00:00"
                        },
                        "untrInvstmtVal": 760.730000,
                        "anulInvstmtRate": 5.5000,
                        "untrRedVal": 738.150000,
                        "anulRedRate": 5.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-10T09:25:00",
                            "clsgDtTm": "2018-10-11T05:00:00"
                        },
                        "untrInvstmtVal": 768.700000,
                        "anulInvstmtRate": 5.4600,
                        "untrRedVal": 745.880000,
                        "anulRedRate": 5.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-11T09:25:00",
                            "clsgDtTm": "2018-10-15T05:00:00"
                        },
                        "untrInvstmtVal": 771.290000,
                        "anulInvstmtRate": 5.4500,
                        "untrRedVal": 748.390000,
                        "anulRedRate": 5.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-15T09:25:00",
                            "clsgDtTm": "2018-10-16T05:00:00"
                        },
                        "untrInvstmtVal": 781.330000,
                        "anulInvstmtRate": 5.4000,
                        "untrRedVal": 758.130000,
                        "anulRedRate": 5.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-16T09:25:00",
                            "clsgDtTm": "2018-10-17T05:00:00"
                        },
                        "untrInvstmtVal": 795.490000,
                        "anulInvstmtRate": 5.3300,
                        "untrRedVal": 771.860000,
                        "anulRedRate": 5.4500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-17T09:25:00",
                            "clsgDtTm": "2018-10-18T05:00:00"
                        },
                        "untrInvstmtVal": 803.830000,
                        "anulInvstmtRate": 5.2900,
                        "untrRedVal": 779.940000,
                        "anulRedRate": 5.4100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-18T09:25:00",
                            "clsgDtTm": "2018-10-19T05:00:00"
                        },
                        "untrInvstmtVal": 810.210000,
                        "anulInvstmtRate": 5.2600,
                        "untrRedVal": 786.130000,
                        "anulRedRate": 5.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-19T09:25:00",
                            "clsgDtTm": "2018-10-22T05:00:00"
                        },
                        "untrInvstmtVal": 804.660000,
                        "anulInvstmtRate": 5.2900,
                        "untrRedVal": 780.760000,
                        "anulRedRate": 5.4100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-22T09:25:00",
                            "clsgDtTm": "2018-10-23T05:00:00"
                        },
                        "untrInvstmtVal": 817.190000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 792.910000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-23T09:25:00",
                            "clsgDtTm": "2018-10-24T05:00:00"
                        },
                        "untrInvstmtVal": 811.340000,
                        "anulInvstmtRate": 5.2600,
                        "untrRedVal": 787.240000,
                        "anulRedRate": 5.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-24T09:25:00",
                            "clsgDtTm": "2018-10-25T05:00:00"
                        },
                        "untrInvstmtVal": 813.810000,
                        "anulInvstmtRate": 5.2500,
                        "untrRedVal": 789.640000,
                        "anulRedRate": 5.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-25T09:25:00",
                            "clsgDtTm": "2018-10-26T05:00:00"
                        },
                        "untrInvstmtVal": 803.950000,
                        "anulInvstmtRate": 5.3000,
                        "untrRedVal": 780.080000,
                        "anulRedRate": 5.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-26T09:25:00",
                            "clsgDtTm": "2018-10-29T05:00:00"
                        },
                        "untrInvstmtVal": 825.010000,
                        "anulInvstmtRate": 5.2000,
                        "untrRedVal": 800.500000,
                        "anulRedRate": 5.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-29T09:25:00",
                            "clsgDtTm": "2018-10-30T05:00:00"
                        },
                        "untrInvstmtVal": 844.220000,
                        "anulInvstmtRate": 5.1100,
                        "untrRedVal": 819.120000,
                        "anulRedRate": 5.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-30T09:25:00",
                            "clsgDtTm": "2018-10-31T05:00:00"
                        },
                        "untrInvstmtVal": 827.710000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 803.120000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-10-31T09:25:00",
                            "clsgDtTm": "2018-11-01T05:00:00"
                        },
                        "untrInvstmtVal": 823.870000,
                        "anulInvstmtRate": 5.2100,
                        "untrRedVal": 799.400000,
                        "anulRedRate": 5.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-01T09:25:00",
                            "clsgDtTm": "2018-11-05T05:00:00"
                        },
                        "untrInvstmtVal": 828.760000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 804.150000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-05T09:25:00",
                            "clsgDtTm": "2018-11-06T05:00:00"
                        },
                        "untrInvstmtVal": 829.070000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 804.460000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-06T09:25:00",
                            "clsgDtTm": "2018-11-07T05:00:00"
                        },
                        "untrInvstmtVal": 829.380000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 804.760000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-07T09:25:00",
                            "clsgDtTm": "2018-11-08T05:00:00"
                        },
                        "untrInvstmtVal": 831.210000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 806.530000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-08T09:25:00",
                            "clsgDtTm": "2018-11-09T05:00:00"
                        },
                        "untrInvstmtVal": 829.410000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 804.790000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-09T09:25:00",
                            "clsgDtTm": "2018-11-12T05:00:00"
                        },
                        "untrInvstmtVal": 823.700000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 799.270000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-12T09:25:00",
                            "clsgDtTm": "2018-11-13T05:00:00"
                        },
                        "untrInvstmtVal": 821.920000,
                        "anulInvstmtRate": 5.2300,
                        "untrRedVal": 797.550000,
                        "anulRedRate": 5.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-13T09:25:00",
                            "clsgDtTm": "2018-11-14T05:00:00"
                        },
                        "untrInvstmtVal": 826.350000,
                        "anulInvstmtRate": 5.2100,
                        "untrRedVal": 801.840000,
                        "anulRedRate": 5.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-14T09:25:00",
                            "clsgDtTm": "2018-11-16T05:00:00"
                        },
                        "untrInvstmtVal": 826.620000,
                        "anulInvstmtRate": 5.2100,
                        "untrRedVal": 802.100000,
                        "anulRedRate": 5.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-16T09:25:00",
                            "clsgDtTm": "2018-11-19T05:00:00"
                        },
                        "untrInvstmtVal": 841.400000,
                        "anulInvstmtRate": 5.1400,
                        "untrRedVal": 816.440000,
                        "anulRedRate": 5.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-19T09:25:00",
                            "clsgDtTm": "2018-11-21T05:00:00"
                        },
                        "untrInvstmtVal": 845.950000,
                        "anulInvstmtRate": 5.1200,
                        "untrRedVal": 820.850000,
                        "anulRedRate": 5.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-21T09:25:00",
                            "clsgDtTm": "2018-11-22T05:00:00"
                        },
                        "untrInvstmtVal": 848.230000,
                        "anulInvstmtRate": 5.1100,
                        "untrRedVal": 823.060000,
                        "anulRedRate": 5.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-22T09:25:00",
                            "clsgDtTm": "2018-11-23T05:00:00"
                        },
                        "untrInvstmtVal": 856.950000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 831.520000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-23T09:25:00",
                            "clsgDtTm": "2018-11-26T05:00:00"
                        },
                        "untrInvstmtVal": 863.550000,
                        "anulInvstmtRate": 5.0400,
                        "untrRedVal": 837.930000,
                        "anulRedRate": 5.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-26T09:25:00",
                            "clsgDtTm": "2018-11-27T05:00:00"
                        },
                        "untrInvstmtVal": 857.120000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 831.700000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-27T09:25:00",
                            "clsgDtTm": "2018-11-28T05:00:00"
                        },
                        "untrInvstmtVal": 838.120000,
                        "anulInvstmtRate": 5.1600,
                        "untrRedVal": 813.280000,
                        "anulRedRate": 5.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-28T09:25:00",
                            "clsgDtTm": "2018-11-29T05:00:00"
                        },
                        "untrInvstmtVal": 844.600000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 819.570000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-29T09:25:00",
                            "clsgDtTm": "2018-11-30T05:00:00"
                        },
                        "untrInvstmtVal": 844.750000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 819.710000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-11-30T09:25:00",
                            "clsgDtTm": "2018-12-03T05:00:00"
                        },
                        "untrInvstmtVal": 853.360000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 828.070000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-03T09:25:00",
                            "clsgDtTm": "2018-12-04T05:00:00"
                        },
                        "untrInvstmtVal": 853.510000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 828.210000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-04T09:25:00",
                            "clsgDtTm": "2018-12-05T05:00:00"
                        },
                        "untrInvstmtVal": 845.140000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 820.100000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-05T09:25:00",
                            "clsgDtTm": "2018-12-06T05:00:00"
                        },
                        "untrInvstmtVal": 841.050000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 816.150000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-06T09:25:00",
                            "clsgDtTm": "2018-12-07T05:00:00"
                        },
                        "untrInvstmtVal": 836.990000,
                        "anulInvstmtRate": 5.1700,
                        "untrRedVal": 812.220000,
                        "anulRedRate": 5.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-07T09:25:00",
                            "clsgDtTm": "2018-12-10T05:00:00"
                        },
                        "untrInvstmtVal": 842.490000,
                        "anulInvstmtRate": 5.1400,
                        "untrRedVal": 817.550000,
                        "anulRedRate": 5.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-10T09:25:00",
                            "clsgDtTm": "2018-12-11T05:00:00"
                        },
                        "untrInvstmtVal": 834.200000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 809.520000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-11T09:25:00",
                            "clsgDtTm": "2018-12-12T05:00:00"
                        },
                        "untrInvstmtVal": 834.310000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 809.630000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-12T09:25:00",
                            "clsgDtTm": "2018-12-13T05:00:00"
                        },
                        "untrInvstmtVal": 840.710000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 815.840000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-13T09:25:00",
                            "clsgDtTm": "2018-12-14T05:00:00"
                        },
                        "untrInvstmtVal": 845.040000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 820.040000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-14T09:25:00",
                            "clsgDtTm": "2018-12-17T05:00:00"
                        },
                        "untrInvstmtVal": 853.720000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 828.450000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-17T09:25:00",
                            "clsgDtTm": "2018-12-18T05:00:00"
                        },
                        "untrInvstmtVal": 853.910000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 828.640000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-18T09:25:00",
                            "clsgDtTm": "2018-12-19T05:00:00"
                        },
                        "untrInvstmtVal": 860.550000,
                        "anulInvstmtRate": 5.0600,
                        "untrRedVal": 835.080000,
                        "anulRedRate": 5.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-19T09:25:00",
                            "clsgDtTm": "2018-12-20T05:00:00"
                        },
                        "untrInvstmtVal": 869.410000,
                        "anulInvstmtRate": 5.0200,
                        "untrRedVal": 843.680000,
                        "anulRedRate": 5.1400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-20T09:25:00",
                            "clsgDtTm": "2018-12-21T05:00:00"
                        },
                        "untrInvstmtVal": 867.440000,
                        "anulInvstmtRate": 5.0300,
                        "untrRedVal": 841.760000,
                        "anulRedRate": 5.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-21T09:25:00",
                            "clsgDtTm": "2018-12-26T05:00:00"
                        },
                        "untrInvstmtVal": 865.740000,
                        "anulInvstmtRate": 5.0400,
                        "untrRedVal": 840.130000,
                        "anulRedRate": 5.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-26T09:25:00",
                            "clsgDtTm": "2018-12-27T05:00:00"
                        },
                        "untrInvstmtVal": 865.940000,
                        "anulInvstmtRate": 5.0400,
                        "untrRedVal": 840.320000,
                        "anulRedRate": 5.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-27T09:25:00",
                            "clsgDtTm": "2018-12-28T05:00:00"
                        },
                        "untrInvstmtVal": 863.970000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 838.420000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2018-12-28T09:25:00",
                            "clsgDtTm": "2019-01-02T05:00:00"
                        },
                        "untrInvstmtVal": 868.790000,
                        "anulInvstmtRate": 5.0300,
                        "untrRedVal": 0.0,
                        "anulRedRate": 0.0
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-02T09:25:00",
                            "clsgDtTm": "2019-01-03T05:00:00"
                        },
                        "untrInvstmtVal": 879.930000,
                        "anulInvstmtRate": 4.9800,
                        "untrRedVal": 853.900000,
                        "anulRedRate": 5.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-03T09:25:00",
                            "clsgDtTm": "2019-01-04T05:00:00"
                        },
                        "untrInvstmtVal": 884.540000,
                        "anulInvstmtRate": 4.9600,
                        "untrRedVal": 858.380000,
                        "anulRedRate": 5.0800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-04T09:25:00",
                            "clsgDtTm": "2019-01-07T05:00:00"
                        },
                        "untrInvstmtVal": 891.470000,
                        "anulInvstmtRate": 4.9300,
                        "untrRedVal": 865.100000,
                        "anulRedRate": 5.0500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-07T09:25:00",
                            "clsgDtTm": "2019-01-08T05:00:00"
                        },
                        "untrInvstmtVal": 912.000000,
                        "anulInvstmtRate": 4.8400,
                        "untrRedVal": 885.000000,
                        "anulRedRate": 4.9600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-08T09:25:00",
                            "clsgDtTm": "2019-01-09T05:00:00"
                        },
                        "untrInvstmtVal": 914.480000,
                        "anulInvstmtRate": 4.8300,
                        "untrRedVal": 887.410000,
                        "anulRedRate": 4.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-09T09:25:00",
                            "clsgDtTm": "2019-01-10T05:00:00"
                        },
                        "untrInvstmtVal": 928.540000,
                        "anulInvstmtRate": 4.7700,
                        "untrRedVal": 901.040000,
                        "anulRedRate": 4.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-10T09:25:00",
                            "clsgDtTm": "2019-01-11T05:00:00"
                        },
                        "untrInvstmtVal": 938.100000,
                        "anulInvstmtRate": 4.7300,
                        "untrRedVal": 910.310000,
                        "anulRedRate": 4.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-11T09:25:00",
                            "clsgDtTm": "2019-01-14T05:00:00"
                        },
                        "untrInvstmtVal": 950.660000,
                        "anulInvstmtRate": 4.6800,
                        "untrRedVal": 922.490000,
                        "anulRedRate": 4.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-14T09:25:00",
                            "clsgDtTm": "2019-01-15T05:00:00"
                        },
                        "untrInvstmtVal": 953.270000,
                        "anulInvstmtRate": 4.6700,
                        "untrRedVal": 925.020000,
                        "anulRedRate": 4.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-15T09:25:00",
                            "clsgDtTm": "2019-01-16T05:00:00"
                        },
                        "untrInvstmtVal": 968.020000,
                        "anulInvstmtRate": 4.6100,
                        "untrRedVal": 939.330000,
                        "anulRedRate": 4.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-16T09:25:00",
                            "clsgDtTm": "2019-01-17T05:00:00"
                        },
                        "untrInvstmtVal": 968.320000,
                        "anulInvstmtRate": 4.6100,
                        "untrRedVal": 939.620000,
                        "anulRedRate": 4.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-17T09:25:00",
                            "clsgDtTm": "2019-01-18T05:00:00"
                        },
                        "untrInvstmtVal": 966.190000,
                        "anulInvstmtRate": 4.6200,
                        "untrRedVal": 937.560000,
                        "anulRedRate": 4.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-18T09:25:00",
                            "clsgDtTm": "2019-01-21T05:00:00"
                        },
                        "untrInvstmtVal": 974.040000,
                        "anulInvstmtRate": 4.5900,
                        "untrRedVal": 945.180000,
                        "anulRedRate": 4.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-21T09:25:00",
                            "clsgDtTm": "2019-01-22T05:00:00"
                        },
                        "untrInvstmtVal": 974.340000,
                        "anulInvstmtRate": 4.5900,
                        "untrRedVal": 945.470000,
                        "anulRedRate": 4.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-22T09:25:00",
                            "clsgDtTm": "2019-01-23T05:00:00"
                        },
                        "untrInvstmtVal": 974.640000,
                        "anulInvstmtRate": 4.5900,
                        "untrRedVal": 945.760000,
                        "anulRedRate": 4.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-23T09:25:00",
                            "clsgDtTm": "2019-01-24T05:00:00"
                        },
                        "untrInvstmtVal": 977.390000,
                        "anulInvstmtRate": 4.5800,
                        "untrRedVal": 948.430000,
                        "anulRedRate": 4.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-24T09:25:00",
                            "clsgDtTm": "2019-01-28T05:00:00"
                        },
                        "untrInvstmtVal": 983.110000,
                        "anulInvstmtRate": 4.5600,
                        "untrRedVal": 953.990000,
                        "anulRedRate": 4.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-28T09:25:00",
                            "clsgDtTm": "2019-01-29T05:00:00"
                        },
                        "untrInvstmtVal": 978.490000,
                        "anulInvstmtRate": 4.5800,
                        "untrRedVal": 949.520000,
                        "anulRedRate": 4.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-29T09:25:00",
                            "clsgDtTm": "2019-01-30T05:00:00"
                        },
                        "untrInvstmtVal": 978.790000,
                        "anulInvstmtRate": 4.5800,
                        "untrRedVal": 949.810000,
                        "anulRedRate": 4.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-30T09:25:00",
                            "clsgDtTm": "2019-01-31T05:00:00"
                        },
                        "untrInvstmtVal": 984.000000,
                        "anulInvstmtRate": 4.5600,
                        "untrRedVal": 954.870000,
                        "anulRedRate": 4.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-01-31T09:25:00",
                            "clsgDtTm": "2019-02-01T05:00:00"
                        },
                        "untrInvstmtVal": 1001.730000,
                        "anulInvstmtRate": 4.4900,
                        "untrRedVal": 972.050000,
                        "anulRedRate": 4.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-01T09:25:00",
                            "clsgDtTm": "2019-02-04T05:00:00"
                        },
                        "untrInvstmtVal": 1012.380000,
                        "anulInvstmtRate": 4.4500,
                        "untrRedVal": 982.380000,
                        "anulRedRate": 4.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-04T09:25:00",
                            "clsgDtTm": "2019-02-05T05:00:00"
                        },
                        "untrInvstmtVal": 1017.770000,
                        "anulInvstmtRate": 4.4300,
                        "untrRedVal": 987.620000,
                        "anulRedRate": 4.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-05T09:25:00",
                            "clsgDtTm": "2019-02-06T05:00:00"
                        },
                        "untrInvstmtVal": 1020.630000,
                        "anulInvstmtRate": 4.4200,
                        "untrRedVal": 990.390000,
                        "anulRedRate": 4.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-06T09:25:00",
                            "clsgDtTm": "2019-02-07T05:00:00"
                        },
                        "untrInvstmtVal": 1005.700000,
                        "anulInvstmtRate": 4.4800,
                        "untrRedVal": 975.920000,
                        "anulRedRate": 4.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-07T09:25:00",
                            "clsgDtTm": "2019-02-08T05:00:00"
                        },
                        "untrInvstmtVal": 1000.970000,
                        "anulInvstmtRate": 4.5000,
                        "untrRedVal": 971.340000,
                        "anulRedRate": 4.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-08T09:25:00",
                            "clsgDtTm": "2019-02-11T05:00:00"
                        },
                        "untrInvstmtVal": 981.060000,
                        "anulInvstmtRate": 4.5800,
                        "untrRedVal": 952.050000,
                        "anulRedRate": 4.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-11T09:25:00",
                            "clsgDtTm": "2019-02-12T05:00:00"
                        },
                        "untrInvstmtVal": 966.720000,
                        "anulInvstmtRate": 4.6400,
                        "untrRedVal": 938.150000,
                        "anulRedRate": 4.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-12T09:25:00",
                            "clsgDtTm": "2019-02-13T05:00:00"
                        },
                        "untrInvstmtVal": 976.710000,
                        "anulInvstmtRate": 4.6000,
                        "untrRedVal": 947.850000,
                        "anulRedRate": 4.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-13T09:25:00",
                            "clsgDtTm": "2019-02-14T05:00:00"
                        },
                        "untrInvstmtVal": 989.290000,
                        "anulInvstmtRate": 4.5500,
                        "untrRedVal": 960.040000,
                        "anulRedRate": 4.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-14T09:25:00",
                            "clsgDtTm": "2019-02-15T05:00:00"
                        },
                        "untrInvstmtVal": 994.530000,
                        "anulInvstmtRate": 4.5300,
                        "untrRedVal": 965.120000,
                        "anulRedRate": 4.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-15T09:25:00",
                            "clsgDtTm": "2019-02-18T05:00:00"
                        },
                        "untrInvstmtVal": 1020.290000,
                        "anulInvstmtRate": 4.4300,
                        "untrRedVal": 990.100000,
                        "anulRedRate": 4.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-18T09:25:00",
                            "clsgDtTm": "2019-02-19T05:00:00"
                        },
                        "untrInvstmtVal": 1015.490000,
                        "anulInvstmtRate": 4.4500,
                        "untrRedVal": 985.450000,
                        "anulRedRate": 4.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-19T09:25:00",
                            "clsgDtTm": "2019-02-20T05:00:00"
                        },
                        "untrInvstmtVal": 1018.330000,
                        "anulInvstmtRate": 4.4400,
                        "untrRedVal": 988.210000,
                        "anulRedRate": 4.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-20T09:25:00",
                            "clsgDtTm": "2019-02-21T05:00:00"
                        },
                        "untrInvstmtVal": 1018.640000,
                        "anulInvstmtRate": 4.4400,
                        "untrRedVal": 988.510000,
                        "anulRedRate": 4.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-21T09:25:00",
                            "clsgDtTm": "2019-02-22T05:00:00"
                        },
                        "untrInvstmtVal": 1003.750000,
                        "anulInvstmtRate": 4.5000,
                        "untrRedVal": 974.090000,
                        "anulRedRate": 4.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-22T09:25:00",
                            "clsgDtTm": "2019-02-25T05:00:00"
                        },
                        "untrInvstmtVal": 1009.330000,
                        "anulInvstmtRate": 4.4800,
                        "untrRedVal": 979.500000,
                        "anulRedRate": 4.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-25T09:25:00",
                            "clsgDtTm": "2019-02-26T05:00:00"
                        },
                        "untrInvstmtVal": 1009.630000,
                        "anulInvstmtRate": 4.4800,
                        "untrRedVal": 979.790000,
                        "anulRedRate": 4.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-26T09:25:00",
                            "clsgDtTm": "2019-02-27T05:00:00"
                        },
                        "untrInvstmtVal": 1007.400000,
                        "anulInvstmtRate": 4.4900,
                        "untrRedVal": 977.640000,
                        "anulRedRate": 4.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-27T09:25:00",
                            "clsgDtTm": "2019-02-28T05:00:00"
                        },
                        "untrInvstmtVal": 1010.220000,
                        "anulInvstmtRate": 4.4800,
                        "untrRedVal": 980.380000,
                        "anulRedRate": 4.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-02-28T09:25:00",
                            "clsgDtTm": "2019-03-01T05:00:00"
                        },
                        "untrInvstmtVal": 1018.130000,
                        "anulInvstmtRate": 4.4500,
                        "untrRedVal": 988.050000,
                        "anulRedRate": 4.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-01T09:25:00",
                            "clsgDtTm": "2019-03-06T05:00:00"
                        },
                        "untrInvstmtVal": 1016.380000,
                        "anulInvstmtRate": 4.4600,
                        "untrRedVal": 986.360000,
                        "anulRedRate": 4.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-06T13:50:00",
                            "clsgDtTm": "2019-03-07T05:00:00"
                        },
                        "untrInvstmtVal": 1021.770000,
                        "anulInvstmtRate": 4.4400,
                        "untrRedVal": 991.590000,
                        "anulRedRate": 4.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-07T09:25:00",
                            "clsgDtTm": "2019-03-08T05:00:00"
                        },
                        "untrInvstmtVal": 1024.630000,
                        "anulInvstmtRate": 4.4300,
                        "untrRedVal": 994.370000,
                        "anulRedRate": 4.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-08T09:25:00",
                            "clsgDtTm": "2019-03-11T05:00:00"
                        },
                        "untrInvstmtVal": 1027.750000,
                        "anulInvstmtRate": 4.4200,
                        "untrRedVal": 997.390000,
                        "anulRedRate": 4.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-11T09:25:00",
                            "clsgDtTm": "2019-03-12T05:00:00"
                        },
                        "untrInvstmtVal": 1043.590000,
                        "anulInvstmtRate": 4.3600,
                        "untrRedVal": 1012.750000,
                        "anulRedRate": 4.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-12T09:25:00",
                            "clsgDtTm": "2019-03-13T05:00:00"
                        },
                        "untrInvstmtVal": 1042.150000,
                        "anulInvstmtRate": 4.3700,
                        "untrRedVal": 1011.360000,
                        "anulRedRate": 4.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-13T09:25:00",
                            "clsgDtTm": "2019-03-14T05:00:00"
                        },
                        "untrInvstmtVal": 1050.340000,
                        "anulInvstmtRate": 4.3400,
                        "untrRedVal": 1019.300000,
                        "anulRedRate": 4.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-14T09:25:00",
                            "clsgDtTm": "2019-03-15T05:00:00"
                        },
                        "untrInvstmtVal": 1048.050000,
                        "anulInvstmtRate": 4.3500,
                        "untrRedVal": 1017.090000,
                        "anulRedRate": 4.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-15T09:25:00",
                            "clsgDtTm": "2019-03-18T05:00:00"
                        },
                        "untrInvstmtVal": 1051.330000,
                        "anulInvstmtRate": 4.3400,
                        "untrRedVal": 1020.270000,
                        "anulRedRate": 4.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-18T09:25:00",
                            "clsgDtTm": "2019-03-19T05:00:00"
                        },
                        "untrInvstmtVal": 1054.290000,
                        "anulInvstmtRate": 4.3300,
                        "untrRedVal": 1023.160000,
                        "anulRedRate": 4.4500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-19T09:25:00",
                            "clsgDtTm": "2019-03-20T05:00:00"
                        },
                        "untrInvstmtVal": 1067.900000,
                        "anulInvstmtRate": 4.2800,
                        "untrRedVal": 1036.350000,
                        "anulRedRate": 4.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-20T09:25:00",
                            "clsgDtTm": "2019-03-21T05:00:00"
                        },
                        "untrInvstmtVal": 1060.260000,
                        "anulInvstmtRate": 4.3100,
                        "untrRedVal": 1028.940000,
                        "anulRedRate": 4.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-21T09:25:00",
                            "clsgDtTm": "2019-03-22T05:00:00"
                        },
                        "untrInvstmtVal": 1057.950000,
                        "anulInvstmtRate": 4.3200,
                        "untrRedVal": 1026.710000,
                        "anulRedRate": 4.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-22T09:25:00",
                            "clsgDtTm": "2019-03-25T05:00:00"
                        },
                        "untrInvstmtVal": 1040.260000,
                        "anulInvstmtRate": 4.3900,
                        "untrRedVal": 1009.570000,
                        "anulRedRate": 4.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-25T09:25:00",
                            "clsgDtTm": "2019-03-26T05:00:00"
                        },
                        "untrInvstmtVal": 1032.830000,
                        "anulInvstmtRate": 4.4200,
                        "untrRedVal": 1002.370000,
                        "anulRedRate": 4.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-26T09:25:00",
                            "clsgDtTm": "2019-03-27T05:00:00"
                        },
                        "untrInvstmtVal": 1030.590000,
                        "anulInvstmtRate": 4.4300,
                        "untrRedVal": 1000.210000,
                        "anulRedRate": 4.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-27T09:25:00",
                            "clsgDtTm": "2019-03-28T05:00:00"
                        },
                        "untrInvstmtVal": 1008.500000,
                        "anulInvstmtRate": 4.5200,
                        "untrRedVal": 978.800000,
                        "anulRedRate": 4.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-28T09:25:00",
                            "clsgDtTm": "2019-03-29T05:00:00"
                        },
                        "untrInvstmtVal": 1001.360000,
                        "anulInvstmtRate": 4.5500,
                        "untrRedVal": 971.880000,
                        "anulRedRate": 4.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-03-29T09:25:00",
                            "clsgDtTm": "2019-04-01T05:00:00"
                        },
                        "untrInvstmtVal": 1022.270000,
                        "anulInvstmtRate": 4.4700,
                        "untrRedVal": 992.160000,
                        "anulRedRate": 4.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-01T09:25:00",
                            "clsgDtTm": "2019-04-02T05:00:00"
                        },
                        "untrInvstmtVal": 1032.890000,
                        "anulInvstmtRate": 4.4300,
                        "untrRedVal": 1002.460000,
                        "anulRedRate": 4.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-02T09:25:00",
                            "clsgDtTm": "2019-04-03T05:00:00"
                        },
                        "untrInvstmtVal": 1033.260000,
                        "anulInvstmtRate": 4.4300,
                        "untrRedVal": 1002.820000,
                        "anulRedRate": 4.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-03T09:25:00",
                            "clsgDtTm": "2019-04-04T05:00:00"
                        },
                        "untrInvstmtVal": 1031.060000,
                        "anulInvstmtRate": 4.4400,
                        "untrRedVal": 1000.690000,
                        "anulRedRate": 4.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-04T09:25:00",
                            "clsgDtTm": "2019-04-05T05:00:00"
                        },
                        "untrInvstmtVal": 1023.740000,
                        "anulInvstmtRate": 4.4700,
                        "untrRedVal": 993.610000,
                        "anulRedRate": 4.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-05T09:25:00",
                            "clsgDtTm": "2019-04-08T05:00:00"
                        },
                        "untrInvstmtVal": 1024.500000,
                        "anulInvstmtRate": 4.4700,
                        "untrRedVal": 994.340000,
                        "anulRedRate": 4.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-08T09:25:00",
                            "clsgDtTm": "2019-04-09T05:00:00"
                        },
                        "untrInvstmtVal": 1024.870000,
                        "anulInvstmtRate": 4.4700,
                        "untrRedVal": 994.700000,
                        "anulRedRate": 4.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-09T09:25:00",
                            "clsgDtTm": "2019-04-10T05:00:00"
                        },
                        "untrInvstmtVal": 1012.550000,
                        "anulInvstmtRate": 4.5200,
                        "untrRedVal": 982.770000,
                        "anulRedRate": 4.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-10T09:25:00",
                            "clsgDtTm": "2019-04-11T05:00:00"
                        },
                        "untrInvstmtVal": 1016.940000,
                        "anulInvstmtRate": 4.5100,
                        "untrRedVal": 987.030000,
                        "anulRedRate": 4.6300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-11T09:25:00",
                            "clsgDtTm": "2019-04-12T05:00:00"
                        },
                        "untrInvstmtVal": 1012.310000,
                        "anulInvstmtRate": 4.5300,
                        "untrRedVal": 982.550000,
                        "anulRedRate": 4.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-12T09:25:00",
                            "clsgDtTm": "2019-04-15T05:00:00"
                        },
                        "untrInvstmtVal": 1010.700000,
                        "anulInvstmtRate": 4.5400,
                        "untrRedVal": 981.000000,
                        "anulRedRate": 4.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-15T09:25:00",
                            "clsgDtTm": "2019-04-16T05:00:00"
                        },
                        "untrInvstmtVal": 1006.040000,
                        "anulInvstmtRate": 4.5600,
                        "untrRedVal": 976.490000,
                        "anulRedRate": 4.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-16T09:25:00",
                            "clsgDtTm": "2019-04-17T05:00:00"
                        },
                        "untrInvstmtVal": 1003.910000,
                        "anulInvstmtRate": 4.5700,
                        "untrRedVal": 974.420000,
                        "anulRedRate": 4.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-17T09:25:00",
                            "clsgDtTm": "2019-04-18T05:00:00"
                        },
                        "untrInvstmtVal": 1006.760000,
                        "anulInvstmtRate": 4.5600,
                        "untrRedVal": 977.190000,
                        "anulRedRate": 4.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-18T09:25:00",
                            "clsgDtTm": "2019-04-22T05:00:00"
                        },
                        "untrInvstmtVal": 1010.170000,
                        "anulInvstmtRate": 4.5500,
                        "untrRedVal": 980.500000,
                        "anulRedRate": 4.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-22T09:25:00",
                            "clsgDtTm": "2019-04-23T05:00:00"
                        },
                        "untrInvstmtVal": 1013.050000,
                        "anulInvstmtRate": 4.5400,
                        "untrRedVal": 983.290000,
                        "anulRedRate": 4.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-23T09:25:00",
                            "clsgDtTm": "2019-04-24T05:00:00"
                        },
                        "untrInvstmtVal": 1015.930000,
                        "anulInvstmtRate": 4.5300,
                        "untrRedVal": 986.090000,
                        "anulRedRate": 4.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-24T09:25:00",
                            "clsgDtTm": "2019-04-25T05:00:00"
                        },
                        "untrInvstmtVal": 1026.440000,
                        "anulInvstmtRate": 4.4900,
                        "untrRedVal": 996.290000,
                        "anulRedRate": 4.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-25T09:25:00",
                            "clsgDtTm": "2019-04-26T05:00:00"
                        },
                        "untrInvstmtVal": 1031.930000,
                        "anulInvstmtRate": 4.4700,
                        "untrRedVal": 1001.610000,
                        "anulRedRate": 4.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-26T09:15:00",
                            "clsgDtTm": "2019-04-29T05:00:00"
                        },
                        "untrInvstmtVal": 1043.320000,
                        "anulInvstmtRate": 4.4300,
                        "untrRedVal": 1012.660000,
                        "anulRedRate": 4.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-29T09:15:00",
                            "clsgDtTm": "2019-04-30T05:00:00"
                        },
                        "untrInvstmtVal": 1046.310000,
                        "anulInvstmtRate": 4.4200,
                        "untrRedVal": 1015.570000,
                        "anulRedRate": 4.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-04-30T09:15:00",
                            "clsgDtTm": "2019-05-02T05:00:00"
                        },
                        "untrInvstmtVal": 1041.720000,
                        "anulInvstmtRate": 4.4400,
                        "untrRedVal": 1011.120000,
                        "anulRedRate": 4.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-02T09:15:00",
                            "clsgDtTm": "2019-05-03T05:00:00"
                        },
                        "untrInvstmtVal": 1042.110000,
                        "anulInvstmtRate": 4.4400,
                        "untrRedVal": 1011.510000,
                        "anulRedRate": 4.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-03T09:15:00",
                            "clsgDtTm": "2019-05-06T05:00:00"
                        },
                        "untrInvstmtVal": 1055.970000,
                        "anulInvstmtRate": 4.3900,
                        "untrRedVal": 1024.950000,
                        "anulRedRate": 4.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-06T09:15:00",
                            "clsgDtTm": "2019-05-07T05:00:00"
                        },
                        "untrInvstmtVal": 1058.990000,
                        "anulInvstmtRate": 4.3800,
                        "untrRedVal": 1027.880000,
                        "anulRedRate": 4.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-07T09:15:00",
                            "clsgDtTm": "2019-05-08T05:00:00"
                        },
                        "untrInvstmtVal": 1054.130000,
                        "anulInvstmtRate": 4.4000,
                        "untrRedVal": 1023.180000,
                        "anulRedRate": 4.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-08T09:15:00",
                            "clsgDtTm": "2019-05-09T05:00:00"
                        },
                        "untrInvstmtVal": 1062.420000,
                        "anulInvstmtRate": 4.3700,
                        "untrRedVal": 1031.220000,
                        "anulRedRate": 4.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-09T09:15:00",
                            "clsgDtTm": "2019-05-10T05:00:00"
                        },
                        "untrInvstmtVal": 1065.460000,
                        "anulInvstmtRate": 4.3600,
                        "untrRedVal": 1034.170000,
                        "anulRedRate": 4.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-10T09:15:00",
                            "clsgDtTm": "2019-05-13T05:00:00"
                        },
                        "untrInvstmtVal": 1081.910000,
                        "anulInvstmtRate": 4.3000,
                        "untrRedVal": 1050.120000,
                        "anulRedRate": 4.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-13T09:15:00",
                            "clsgDtTm": "2019-05-14T05:00:00"
                        },
                        "untrInvstmtVal": 1082.290000,
                        "anulInvstmtRate": 4.3000,
                        "untrRedVal": 1050.500000,
                        "anulRedRate": 4.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-14T09:15:00",
                            "clsgDtTm": "2019-05-15T05:00:00"
                        },
                        "untrInvstmtVal": 1088.070000,
                        "anulInvstmtRate": 4.2800,
                        "untrRedVal": 1056.110000,
                        "anulRedRate": 4.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-15T09:15:00",
                            "clsgDtTm": "2019-05-16T05:00:00"
                        },
                        "untrInvstmtVal": 1096.500000,
                        "anulInvstmtRate": 4.2500,
                        "untrRedVal": 1064.290000,
                        "anulRedRate": 4.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-16T09:15:00",
                            "clsgDtTm": "2019-05-17T05:00:00"
                        },
                        "untrInvstmtVal": 1083.240000,
                        "anulInvstmtRate": 4.3000,
                        "untrRedVal": 1051.440000,
                        "anulRedRate": 4.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-17T09:15:00",
                            "clsgDtTm": "2019-05-20T05:00:00"
                        },
                        "untrInvstmtVal": 1070.350000,
                        "anulInvstmtRate": 4.3500,
                        "untrRedVal": 1038.940000,
                        "anulRedRate": 4.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-20T09:15:00",
                            "clsgDtTm": "2019-05-21T05:00:00"
                        },
                        "untrInvstmtVal": 1081.320000,
                        "anulInvstmtRate": 4.3100,
                        "untrRedVal": 1049.580000,
                        "anulRedRate": 4.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-21T09:15:00",
                            "clsgDtTm": "2019-05-22T05:00:00"
                        },
                        "untrInvstmtVal": 1089.690000,
                        "anulInvstmtRate": 4.2800,
                        "untrRedVal": 1057.710000,
                        "anulRedRate": 4.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-22T09:15:00",
                            "clsgDtTm": "2019-05-23T05:00:00"
                        },
                        "untrInvstmtVal": 1100.860000,
                        "anulInvstmtRate": 4.2400,
                        "untrRedVal": 1068.540000,
                        "anulRedRate": 4.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-23T09:15:00",
                            "clsgDtTm": "2019-05-24T05:00:00"
                        },
                        "untrInvstmtVal": 1101.140000,
                        "anulInvstmtRate": 4.2400,
                        "untrRedVal": 1068.820000,
                        "anulRedRate": 4.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-24T09:15:00",
                            "clsgDtTm": "2019-05-27T05:00:00"
                        },
                        "untrInvstmtVal": 1107.120000,
                        "anulInvstmtRate": 4.2200,
                        "untrRedVal": 1074.620000,
                        "anulRedRate": 4.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-27T09:15:00",
                            "clsgDtTm": "2019-05-28T05:00:00"
                        },
                        "untrInvstmtVal": 1109.930000,
                        "anulInvstmtRate": 4.2100,
                        "untrRedVal": 1077.350000,
                        "anulRedRate": 4.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-28T09:15:00",
                            "clsgDtTm": "2019-05-29T05:00:00"
                        },
                        "untrInvstmtVal": 1121.290000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1088.360000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-29T09:15:00",
                            "clsgDtTm": "2019-05-30T05:00:00"
                        },
                        "untrInvstmtVal": 1149.780000,
                        "anulInvstmtRate": 4.0700,
                        "untrRedVal": 1115.990000,
                        "anulRedRate": 4.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-30T09:15:00",
                            "clsgDtTm": "2019-05-31T05:00:00"
                        },
                        "untrInvstmtVal": 1161.550000,
                        "anulInvstmtRate": 4.0300,
                        "untrRedVal": 1127.410000,
                        "anulRedRate": 4.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-05-31T09:15:00",
                            "clsgDtTm": "2019-06-03T05:00:00"
                        },
                        "untrInvstmtVal": 1176.550000,
                        "anulInvstmtRate": 3.9800,
                        "untrRedVal": 1141.950000,
                        "anulRedRate": 4.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-03T09:15:00",
                            "clsgDtTm": "2019-06-04T05:00:00"
                        },
                        "untrInvstmtVal": 1185.630000,
                        "anulInvstmtRate": 3.9500,
                        "untrRedVal": 1150.770000,
                        "anulRedRate": 4.0700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-04T09:15:00",
                            "clsgDtTm": "2019-06-05T05:00:00"
                        },
                        "untrInvstmtVal": 1185.910000,
                        "anulInvstmtRate": 3.9500,
                        "untrRedVal": 1151.040000,
                        "anulRedRate": 4.0700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-05T09:15:00",
                            "clsgDtTm": "2019-06-06T05:00:00"
                        },
                        "untrInvstmtVal": 1195.070000,
                        "anulInvstmtRate": 3.9200,
                        "untrRedVal": 1159.930000,
                        "anulRedRate": 4.0400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-06T09:15:00",
                            "clsgDtTm": "2019-06-07T05:00:00"
                        },
                        "untrInvstmtVal": 1186.460000,
                        "anulInvstmtRate": 3.9500,
                        "untrRedVal": 1151.580000,
                        "anulRedRate": 4.0700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-07T09:15:00",
                            "clsgDtTm": "2019-06-10T05:00:00"
                        },
                        "untrInvstmtVal": 1197.680000,
                        "anulInvstmtRate": 3.9100,
                        "untrRedVal": 1162.470000,
                        "anulRedRate": 4.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-10T09:15:00",
                            "clsgDtTm": "2019-06-11T05:00:00"
                        },
                        "untrInvstmtVal": 1200.900000,
                        "anulInvstmtRate": 3.9000,
                        "untrRedVal": 1165.590000,
                        "anulRedRate": 4.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-11T09:15:00",
                            "clsgDtTm": "2019-06-12T05:00:00"
                        },
                        "untrInvstmtVal": 1204.120000,
                        "anulInvstmtRate": 3.8900,
                        "untrRedVal": 1168.730000,
                        "anulRedRate": 4.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-12T09:15:00",
                            "clsgDtTm": "2019-06-13T05:00:00"
                        },
                        "untrInvstmtVal": 1204.350000,
                        "anulInvstmtRate": 3.8900,
                        "untrRedVal": 1168.960000,
                        "anulRedRate": 4.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-13T09:15:00",
                            "clsgDtTm": "2019-06-14T05:00:00"
                        },
                        "untrInvstmtVal": 1195.630000,
                        "anulInvstmtRate": 3.9200,
                        "untrRedVal": 1160.510000,
                        "anulRedRate": 4.0400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-14T09:15:00",
                            "clsgDtTm": "2019-06-17T05:00:00"
                        },
                        "untrInvstmtVal": 1198.850000,
                        "anulInvstmtRate": 3.9100,
                        "untrRedVal": 1163.630000,
                        "anulRedRate": 4.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-17T09:15:00",
                            "clsgDtTm": "2019-06-18T05:00:00"
                        },
                        "untrInvstmtVal": 1199.040000,
                        "anulInvstmtRate": 3.9100,
                        "untrRedVal": 1163.820000,
                        "anulRedRate": 4.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-18T09:15:00",
                            "clsgDtTm": "2019-06-19T05:00:00"
                        },
                        "untrInvstmtVal": 1202.210000,
                        "anulInvstmtRate": 3.9000,
                        "untrRedVal": 1166.900000,
                        "anulRedRate": 4.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-19T09:15:00",
                            "clsgDtTm": "2019-06-21T05:00:00"
                        },
                        "untrInvstmtVal": 1205.390000,
                        "anulInvstmtRate": 3.8900,
                        "untrRedVal": 1169.990000,
                        "anulRedRate": 4.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-21T09:15:00",
                            "clsgDtTm": "2019-06-24T05:00:00"
                        },
                        "untrInvstmtVal": 1232.870000,
                        "anulInvstmtRate": 3.8000,
                        "untrRedVal": 1196.630000,
                        "anulRedRate": 3.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-24T09:15:00",
                            "clsgDtTm": "2019-06-25T05:00:00"
                        },
                        "untrInvstmtVal": 1242.290000,
                        "anulInvstmtRate": 3.7700,
                        "untrRedVal": 1205.770000,
                        "anulRedRate": 3.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-25T09:15:00",
                            "clsgDtTm": "2019-06-26T05:00:00"
                        },
                        "untrInvstmtVal": 1251.780000,
                        "anulInvstmtRate": 3.7400,
                        "untrRedVal": 1214.980000,
                        "anulRedRate": 3.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-26T09:15:00",
                            "clsgDtTm": "2019-06-27T05:00:00"
                        },
                        "untrInvstmtVal": 1258.010000,
                        "anulInvstmtRate": 3.7200,
                        "untrRedVal": 1221.030000,
                        "anulRedRate": 3.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-27T09:15:00",
                            "clsgDtTm": "2019-06-28T05:00:00"
                        },
                        "untrInvstmtVal": 1261.320000,
                        "anulInvstmtRate": 3.7100,
                        "untrRedVal": 1224.240000,
                        "anulRedRate": 3.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-06-28T09:15:00",
                            "clsgDtTm": "2019-07-01T05:00:00"
                        },
                        "untrInvstmtVal": 1280.430000,
                        "anulInvstmtRate": 3.6500,
                        "untrRedVal": 1242.780000,
                        "anulRedRate": 3.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-01T09:15:00",
                            "clsgDtTm": "2019-07-02T05:00:00"
                        },
                        "untrInvstmtVal": 1303.110000,
                        "anulInvstmtRate": 3.5800,
                        "untrRedVal": 1264.770000,
                        "anulRedRate": 3.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-02T09:15:00",
                            "clsgDtTm": "2019-07-03T05:00:00"
                        },
                        "untrInvstmtVal": 1303.280000,
                        "anulInvstmtRate": 3.5800,
                        "untrRedVal": 1264.940000,
                        "anulRedRate": 3.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-03T09:15:00",
                            "clsgDtTm": "2019-07-04T05:00:00"
                        },
                        "untrInvstmtVal": 1287.330000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1249.480000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-04T09:15:00",
                            "clsgDtTm": "2019-07-05T05:00:00"
                        },
                        "untrInvstmtVal": 1300.380000,
                        "anulInvstmtRate": 3.5900,
                        "untrRedVal": 1262.140000,
                        "anulRedRate": 3.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-05T09:15:00",
                            "clsgDtTm": "2019-07-08T05:00:00"
                        },
                        "untrInvstmtVal": 1287.640000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1249.800000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-08T09:15:00",
                            "clsgDtTm": "2019-07-10T05:00:00"
                        },
                        "untrInvstmtVal": 1291.190000,
                        "anulInvstmtRate": 3.6200,
                        "untrRedVal": 1253.250000,
                        "anulRedRate": 3.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-10T09:15:00",
                            "clsgDtTm": "2019-07-11T05:00:00"
                        },
                        "untrInvstmtVal": 1301.480000,
                        "anulInvstmtRate": 3.5900,
                        "untrRedVal": 1263.230000,
                        "anulRedRate": 3.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-11T09:15:00",
                            "clsgDtTm": "2019-07-12T05:00:00"
                        },
                        "untrInvstmtVal": 1298.430000,
                        "anulInvstmtRate": 3.6000,
                        "untrRedVal": 1260.280000,
                        "anulRedRate": 3.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-12T09:15:00",
                            "clsgDtTm": "2019-07-15T05:00:00"
                        },
                        "untrInvstmtVal": 1301.860000,
                        "anulInvstmtRate": 3.5900,
                        "untrRedVal": 1263.610000,
                        "anulRedRate": 3.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-15T09:15:00",
                            "clsgDtTm": "2019-07-16T05:00:00"
                        },
                        "untrInvstmtVal": 1292.470000,
                        "anulInvstmtRate": 3.6200,
                        "untrRedVal": 1254.510000,
                        "anulRedRate": 3.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-16T09:15:00",
                            "clsgDtTm": "2019-07-17T05:00:00"
                        },
                        "untrInvstmtVal": 1289.540000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1251.670000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-17T09:15:00",
                            "clsgDtTm": "2019-07-18T05:00:00"
                        },
                        "untrInvstmtVal": 1277.060000,
                        "anulInvstmtRate": 3.6700,
                        "untrRedVal": 1239.590000,
                        "anulRedRate": 3.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-18T09:15:00",
                            "clsgDtTm": "2019-07-19T05:00:00"
                        },
                        "untrInvstmtVal": 1277.340000,
                        "anulInvstmtRate": 3.6700,
                        "untrRedVal": 1239.860000,
                        "anulRedRate": 3.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-19T09:15:00",
                            "clsgDtTm": "2019-07-22T05:00:00"
                        },
                        "untrInvstmtVal": 1277.810000,
                        "anulInvstmtRate": 3.6700,
                        "untrRedVal": 1240.320000,
                        "anulRedRate": 3.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-22T09:15:00",
                            "clsgDtTm": "2019-07-23T05:00:00"
                        },
                        "untrInvstmtVal": 1274.920000,
                        "anulInvstmtRate": 3.6800,
                        "untrRedVal": 1237.520000,
                        "anulRedRate": 3.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-23T09:15:00",
                            "clsgDtTm": "2019-07-24T05:00:00"
                        },
                        "untrInvstmtVal": 1284.720000,
                        "anulInvstmtRate": 3.6500,
                        "untrRedVal": 1247.040000,
                        "anulRedRate": 3.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-24T09:15:00",
                            "clsgDtTm": "2019-07-25T05:00:00"
                        },
                        "untrInvstmtVal": 1301.010000,
                        "anulInvstmtRate": 3.6000,
                        "untrRedVal": 1262.840000,
                        "anulRedRate": 3.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-25T09:15:00",
                            "clsgDtTm": "2019-07-26T05:00:00"
                        },
                        "untrInvstmtVal": 1301.290000,
                        "anulInvstmtRate": 3.6000,
                        "untrRedVal": 1263.110000,
                        "anulRedRate": 3.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-26T09:15:00",
                            "clsgDtTm": "2019-07-29T05:00:00"
                        },
                        "untrInvstmtVal": 1298.520000,
                        "anulInvstmtRate": 3.6100,
                        "untrRedVal": 1260.430000,
                        "anulRedRate": 3.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-29T09:15:00",
                            "clsgDtTm": "2019-07-30T05:00:00"
                        },
                        "untrInvstmtVal": 1308.500000,
                        "anulInvstmtRate": 3.5800,
                        "untrRedVal": 1270.120000,
                        "anulRedRate": 3.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-30T09:15:00",
                            "clsgDtTm": "2019-07-31T05:00:00"
                        },
                        "untrInvstmtVal": 1305.530000,
                        "anulInvstmtRate": 3.5900,
                        "untrRedVal": 1267.240000,
                        "anulRedRate": 3.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-07-31T09:15:00",
                            "clsgDtTm": "2019-08-01T05:00:00"
                        },
                        "untrInvstmtVal": 1305.810000,
                        "anulInvstmtRate": 3.5900,
                        "untrRedVal": 1267.510000,
                        "anulRedRate": 3.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-01T09:15:00",
                            "clsgDtTm": "2019-08-02T05:00:00"
                        },
                        "untrInvstmtVal": 1302.840000,
                        "anulInvstmtRate": 3.6000,
                        "untrRedVal": 1264.650000,
                        "anulRedRate": 3.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-02T09:15:00",
                            "clsgDtTm": "2019-08-05T05:00:00"
                        },
                        "untrInvstmtVal": 1290.440000,
                        "anulInvstmtRate": 3.6400,
                        "untrRedVal": 1252.630000,
                        "anulRedRate": 3.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-05T09:15:00",
                            "clsgDtTm": "2019-08-06T05:00:00"
                        },
                        "untrInvstmtVal": 1284.330000,
                        "anulInvstmtRate": 3.6600,
                        "untrRedVal": 1246.710000,
                        "anulRedRate": 3.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-06T09:15:00",
                            "clsgDtTm": "2019-08-07T05:00:00"
                        },
                        "untrInvstmtVal": 1294.190000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1256.280000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-07T09:15:00",
                            "clsgDtTm": "2019-08-08T05:00:00"
                        },
                        "untrInvstmtVal": 1297.680000,
                        "anulInvstmtRate": 3.6200,
                        "untrRedVal": 1259.670000,
                        "anulRedRate": 3.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-08T09:15:00",
                            "clsgDtTm": "2019-08-09T05:00:00"
                        },
                        "untrInvstmtVal": 1326.930000,
                        "anulInvstmtRate": 3.5300,
                        "untrRedVal": 1288.030000,
                        "anulRedRate": 3.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-09T09:15:00",
                            "clsgDtTm": "2019-08-12T05:00:00"
                        },
                        "untrInvstmtVal": 1327.350000,
                        "anulInvstmtRate": 3.5300,
                        "untrRedVal": 1288.450000,
                        "anulRedRate": 3.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-12T09:15:00",
                            "clsgDtTm": "2019-08-13T05:00:00"
                        },
                        "untrInvstmtVal": 1327.620000,
                        "anulInvstmtRate": 3.5300,
                        "untrRedVal": 1288.710000,
                        "anulRedRate": 3.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-13T09:15:00",
                            "clsgDtTm": "2019-08-14T05:00:00"
                        },
                        "untrInvstmtVal": 1334.490000,
                        "anulInvstmtRate": 3.5100,
                        "untrRedVal": 1295.380000,
                        "anulRedRate": 3.6300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-14T09:15:00",
                            "clsgDtTm": "2019-08-15T05:00:00"
                        },
                        "untrInvstmtVal": 1318.310000,
                        "anulInvstmtRate": 3.5600,
                        "untrRedVal": 1279.700000,
                        "anulRedRate": 3.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-15T09:15:00",
                            "clsgDtTm": "2019-08-16T05:00:00"
                        },
                        "untrInvstmtVal": 1318.560000,
                        "anulInvstmtRate": 3.5600,
                        "untrRedVal": 1279.950000,
                        "anulRedRate": 3.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-16T09:15:00",
                            "clsgDtTm": "2019-08-19T05:00:00"
                        },
                        "untrInvstmtVal": 1325.510000,
                        "anulInvstmtRate": 3.5400,
                        "untrRedVal": 1286.700000,
                        "anulRedRate": 3.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-19T09:15:00",
                            "clsgDtTm": "2019-08-20T05:00:00"
                        },
                        "untrInvstmtVal": 1322.490000,
                        "anulInvstmtRate": 3.5500,
                        "untrRedVal": 1283.770000,
                        "anulRedRate": 3.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-20T09:15:00",
                            "clsgDtTm": "2019-08-21T05:00:00"
                        },
                        "untrInvstmtVal": 1316.210000,
                        "anulInvstmtRate": 3.5700,
                        "untrRedVal": 1277.690000,
                        "anulRedRate": 3.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-21T09:15:00",
                            "clsgDtTm": "2019-08-22T05:00:00"
                        },
                        "untrInvstmtVal": 1326.280000,
                        "anulInvstmtRate": 3.5400,
                        "untrRedVal": 1287.460000,
                        "anulRedRate": 3.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-22T09:15:00",
                            "clsgDtTm": "2019-08-23T05:00:00"
                        },
                        "untrInvstmtVal": 1323.260000,
                        "anulInvstmtRate": 3.5500,
                        "untrRedVal": 1284.530000,
                        "anulRedRate": 3.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-23T09:15:00",
                            "clsgDtTm": "2019-08-26T05:00:00"
                        },
                        "untrInvstmtVal": 1320.200000,
                        "anulInvstmtRate": 3.5600,
                        "untrRedVal": 1281.570000,
                        "anulRedRate": 3.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-26T09:15:00",
                            "clsgDtTm": "2019-08-27T05:00:00"
                        },
                        "untrInvstmtVal": 1310.670000,
                        "anulInvstmtRate": 3.5900,
                        "untrRedVal": 1272.340000,
                        "anulRedRate": 3.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-27T09:15:00",
                            "clsgDtTm": "2019-08-28T05:00:00"
                        },
                        "untrInvstmtVal": 1291.590000,
                        "anulInvstmtRate": 3.6500,
                        "untrRedVal": 1253.850000,
                        "anulRedRate": 3.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-28T09:15:00",
                            "clsgDtTm": "2019-08-29T05:00:00"
                        },
                        "untrInvstmtVal": 1279.120000,
                        "anulInvstmtRate": 3.6900,
                        "untrRedVal": 1241.760000,
                        "anulRedRate": 3.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-29T09:15:00",
                            "clsgDtTm": "2019-08-30T05:00:00"
                        },
                        "untrInvstmtVal": 1263.650000,
                        "anulInvstmtRate": 3.7400,
                        "untrRedVal": 1226.770000,
                        "anulRedRate": 3.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-08-30T09:15:00",
                            "clsgDtTm": "2019-09-02T05:00:00"
                        },
                        "untrInvstmtVal": 1270.250000,
                        "anulInvstmtRate": 3.7200,
                        "untrRedVal": 1233.180000,
                        "anulRedRate": 3.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-02T09:15:00",
                            "clsgDtTm": "2019-09-03T05:00:00"
                        },
                        "untrInvstmtVal": 1279.940000,
                        "anulInvstmtRate": 3.6900,
                        "untrRedVal": 1242.580000,
                        "anulRedRate": 3.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-03T09:15:00",
                            "clsgDtTm": "2019-09-04T05:00:00"
                        },
                        "untrInvstmtVal": 1283.340000,
                        "anulInvstmtRate": 3.6800,
                        "untrRedVal": 1245.880000,
                        "anulRedRate": 3.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-04T09:15:00",
                            "clsgDtTm": "2019-09-05T05:00:00"
                        },
                        "untrInvstmtVal": 1289.940000,
                        "anulInvstmtRate": 3.6600,
                        "untrRedVal": 1252.280000,
                        "anulRedRate": 3.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-05T09:15:00",
                            "clsgDtTm": "2019-09-06T05:00:00"
                        },
                        "untrInvstmtVal": 1296.570000,
                        "anulInvstmtRate": 3.6400,
                        "untrRedVal": 1258.720000,
                        "anulRedRate": 3.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-06T09:15:00",
                            "clsgDtTm": "2019-09-09T05:00:00"
                        },
                        "untrInvstmtVal": 1296.710000,
                        "anulInvstmtRate": 3.6400,
                        "untrRedVal": 1258.860000,
                        "anulRedRate": 3.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-09T09:15:00",
                            "clsgDtTm": "2019-09-10T05:00:00"
                        },
                        "untrInvstmtVal": 1296.940000,
                        "anulInvstmtRate": 3.6400,
                        "untrRedVal": 1259.080000,
                        "anulRedRate": 3.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-10T09:15:00",
                            "clsgDtTm": "2019-09-11T05:00:00"
                        },
                        "untrInvstmtVal": 1281.250000,
                        "anulInvstmtRate": 3.6900,
                        "untrRedVal": 1243.880000,
                        "anulRedRate": 3.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-11T09:15:00",
                            "clsgDtTm": "2019-09-12T05:00:00"
                        },
                        "untrInvstmtVal": 1291.000000,
                        "anulInvstmtRate": 3.6600,
                        "untrRedVal": 1253.350000,
                        "anulRedRate": 3.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-12T09:15:00",
                            "clsgDtTm": "2019-09-13T05:00:00"
                        },
                        "untrInvstmtVal": 1300.830000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1262.880000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-13T09:15:00",
                            "clsgDtTm": "2019-09-16T05:00:00"
                        },
                        "untrInvstmtVal": 1294.750000,
                        "anulInvstmtRate": 3.6500,
                        "untrRedVal": 1256.990000,
                        "anulRedRate": 3.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-16T09:15:00",
                            "clsgDtTm": "2019-09-17T05:00:00"
                        },
                        "untrInvstmtVal": 1285.420000,
                        "anulInvstmtRate": 3.6800,
                        "untrRedVal": 1247.950000,
                        "anulRedRate": 3.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-17T09:15:00",
                            "clsgDtTm": "2019-09-18T05:00:00"
                        },
                        "untrInvstmtVal": 1308.050000,
                        "anulInvstmtRate": 3.6100,
                        "untrRedVal": 1269.900000,
                        "anulRedRate": 3.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-18T09:15:00",
                            "clsgDtTm": "2019-09-19T05:00:00"
                        },
                        "untrInvstmtVal": 1324.520000,
                        "anulInvstmtRate": 3.5600,
                        "untrRedVal": 1285.880000,
                        "anulRedRate": 3.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-19T09:15:00",
                            "clsgDtTm": "2019-09-20T05:00:00"
                        },
                        "untrInvstmtVal": 1351.180000,
                        "anulInvstmtRate": 3.4800,
                        "untrRedVal": 1311.740000,
                        "anulRedRate": 3.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-20T09:15:00",
                            "clsgDtTm": "2019-09-23T05:00:00"
                        },
                        "untrInvstmtVal": 1348.170000,
                        "anulInvstmtRate": 3.4900,
                        "untrRedVal": 1308.820000,
                        "anulRedRate": 3.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-23T09:15:00",
                            "clsgDtTm": "2019-09-24T05:00:00"
                        },
                        "untrInvstmtVal": 1345.070000,
                        "anulInvstmtRate": 3.5000,
                        "untrRedVal": 1305.820000,
                        "anulRedRate": 3.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-24T09:15:00",
                            "clsgDtTm": "2019-09-25T05:00:00"
                        },
                        "untrInvstmtVal": 1341.980000,
                        "anulInvstmtRate": 3.5100,
                        "untrRedVal": 1302.830000,
                        "anulRedRate": 3.6300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-25T09:15:00",
                            "clsgDtTm": "2019-09-26T05:00:00"
                        },
                        "untrInvstmtVal": 1345.180000,
                        "anulInvstmtRate": 3.5000,
                        "untrRedVal": 1305.940000,
                        "anulRedRate": 3.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-26T09:15:00",
                            "clsgDtTm": "2019-09-27T05:00:00"
                        },
                        "untrInvstmtVal": 1365.460000,
                        "anulInvstmtRate": 3.4400,
                        "untrRedVal": 1325.610000,
                        "anulRedRate": 3.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-27T09:15:00",
                            "clsgDtTm": "2019-09-30T05:00:00"
                        },
                        "untrInvstmtVal": 1369.050000,
                        "anulInvstmtRate": 3.4300,
                        "untrRedVal": 1329.110000,
                        "anulRedRate": 3.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-09-30T09:15:00",
                            "clsgDtTm": "2019-10-01T05:00:00"
                        },
                        "untrInvstmtVal": 1369.250000,
                        "anulInvstmtRate": 3.4300,
                        "untrRedVal": 1329.300000,
                        "anulRedRate": 3.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-01T09:15:00",
                            "clsgDtTm": "2019-10-02T05:00:00"
                        },
                        "untrInvstmtVal": 1369.450000,
                        "anulInvstmtRate": 3.4300,
                        "untrRedVal": 1329.500000,
                        "anulRedRate": 3.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-02T09:15:00",
                            "clsgDtTm": "2019-10-03T05:00:00"
                        },
                        "untrInvstmtVal": 1369.650000,
                        "anulInvstmtRate": 3.4300,
                        "untrRedVal": 1329.700000,
                        "anulRedRate": 3.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-03T09:15:00",
                            "clsgDtTm": "2019-10-04T05:00:00"
                        },
                        "untrInvstmtVal": 1383.440000,
                        "anulInvstmtRate": 3.3900,
                        "untrRedVal": 1343.070000,
                        "anulRedRate": 3.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-04T09:15:00",
                            "clsgDtTm": "2019-10-07T05:00:00"
                        },
                        "untrInvstmtVal": 1387.080000,
                        "anulInvstmtRate": 3.3800,
                        "untrRedVal": 1346.610000,
                        "anulRedRate": 3.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-07T09:15:00",
                            "clsgDtTm": "2019-10-08T05:00:00"
                        },
                        "untrInvstmtVal": 1383.860000,
                        "anulInvstmtRate": 3.3900,
                        "untrRedVal": 1343.500000,
                        "anulRedRate": 3.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-08T09:15:00",
                            "clsgDtTm": "2019-10-09T05:00:00"
                        },
                        "untrInvstmtVal": 1377.240000,
                        "anulInvstmtRate": 3.4100,
                        "untrRedVal": 1337.090000,
                        "anulRedRate": 3.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-09T09:15:00",
                            "clsgDtTm": "2019-10-10T05:00:00"
                        },
                        "untrInvstmtVal": 1366.490000,
                        "anulInvstmtRate": 3.4400,
                        "untrRedVal": 1326.660000,
                        "anulRedRate": 3.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-10T09:15:00",
                            "clsgDtTm": "2019-10-11T05:00:00"
                        },
                        "untrInvstmtVal": 1380.200000,
                        "anulInvstmtRate": 3.4000,
                        "untrRedVal": 1339.970000,
                        "anulRedRate": 3.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-11T09:15:00",
                            "clsgDtTm": "2019-10-14T05:00:00"
                        },
                        "untrInvstmtVal": 1404.370000,
                        "anulInvstmtRate": 3.3300,
                        "untrRedVal": 1363.410000,
                        "anulRedRate": 3.4500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-14T09:15:00",
                            "clsgDtTm": "2019-10-15T05:00:00"
                        },
                        "untrInvstmtVal": 1414.970000,
                        "anulInvstmtRate": 3.3000,
                        "untrRedVal": 1373.700000,
                        "anulRedRate": 3.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-15T09:15:00",
                            "clsgDtTm": "2019-10-16T05:00:00"
                        },
                        "untrInvstmtVal": 1411.690000,
                        "anulInvstmtRate": 3.3100,
                        "untrRedVal": 1370.530000,
                        "anulRedRate": 3.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-16T09:15:00",
                            "clsgDtTm": "2019-10-17T05:00:00"
                        },
                        "untrInvstmtVal": 1408.420000,
                        "anulInvstmtRate": 3.3200,
                        "untrRedVal": 1367.360000,
                        "anulRedRate": 3.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-17T09:15:00",
                            "clsgDtTm": "2019-10-18T05:00:00"
                        },
                        "untrInvstmtVal": 1443.830000,
                        "anulInvstmtRate": 3.2200,
                        "untrRedVal": 1401.700000,
                        "anulRedRate": 3.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-18T09:15:00",
                            "clsgDtTm": "2019-10-21T05:00:00"
                        },
                        "untrInvstmtVal": 1451.240000,
                        "anulInvstmtRate": 3.2000,
                        "untrRedVal": 1408.900000,
                        "anulRedRate": 3.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-21T09:15:00",
                            "clsgDtTm": "2019-10-22T05:00:00"
                        },
                        "untrInvstmtVal": 1458.630000,
                        "anulInvstmtRate": 3.1800,
                        "untrRedVal": 1416.080000,
                        "anulRedRate": 3.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-22T09:15:00",
                            "clsgDtTm": "2019-10-23T05:00:00"
                        },
                        "untrInvstmtVal": 1462.450000,
                        "anulInvstmtRate": 3.1700,
                        "untrRedVal": 1419.780000,
                        "anulRedRate": 3.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-23T09:15:00",
                            "clsgDtTm": "2019-10-24T05:00:00"
                        },
                        "untrInvstmtVal": 1466.360000,
                        "anulInvstmtRate": 3.1600,
                        "untrRedVal": 1423.580000,
                        "anulRedRate": 3.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-24T09:15:00",
                            "clsgDtTm": "2019-10-25T05:00:00"
                        },
                        "untrInvstmtVal": 1473.840000,
                        "anulInvstmtRate": 3.1400,
                        "untrRedVal": 1430.840000,
                        "anulRedRate": 3.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-25T09:15:00",
                            "clsgDtTm": "2019-10-28T05:00:00"
                        },
                        "untrInvstmtVal": 1474.130000,
                        "anulInvstmtRate": 3.1400,
                        "untrRedVal": 1431.130000,
                        "anulRedRate": 3.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-28T09:15:00",
                            "clsgDtTm": "2019-10-29T05:00:00"
                        },
                        "untrInvstmtVal": 1492.660000,
                        "anulInvstmtRate": 3.0900,
                        "untrRedVal": 1449.110000,
                        "anulRedRate": 3.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-29T09:15:00",
                            "clsgDtTm": "2019-10-30T05:00:00"
                        },
                        "untrInvstmtVal": 1503.980000,
                        "anulInvstmtRate": 3.0600,
                        "untrRedVal": 1460.090000,
                        "anulRedRate": 3.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-30T09:15:00",
                            "clsgDtTm": "2019-10-31T05:00:00"
                        },
                        "untrInvstmtVal": 1500.490000,
                        "anulInvstmtRate": 3.0700,
                        "untrRedVal": 1456.710000,
                        "anulRedRate": 3.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-10-31T09:15:00",
                            "clsgDtTm": "2019-11-01T05:00:00"
                        },
                        "untrInvstmtVal": 1534.440000,
                        "anulInvstmtRate": 2.9800,
                        "untrRedVal": 1489.640000,
                        "anulRedRate": 3.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-01T09:15:00",
                            "clsgDtTm": "2019-11-04T05:00:00"
                        },
                        "untrInvstmtVal": 1557.670000,
                        "anulInvstmtRate": 2.9200,
                        "untrRedVal": 1512.160000,
                        "anulRedRate": 3.0400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-04T09:15:00",
                            "clsgDtTm": "2019-11-05T05:00:00"
                        },
                        "untrInvstmtVal": 1577.260000,
                        "anulInvstmtRate": 2.8700,
                        "untrRedVal": 1531.170000,
                        "anulRedRate": 2.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-05T09:15:00",
                            "clsgDtTm": "2019-11-06T05:00:00"
                        },
                        "untrInvstmtVal": 1558.100000,
                        "anulInvstmtRate": 2.9200,
                        "untrRedVal": 1512.600000,
                        "anulRedRate": 3.0400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-06T09:15:00",
                            "clsgDtTm": "2019-11-07T05:00:00"
                        },
                        "untrInvstmtVal": 1543.000000,
                        "anulInvstmtRate": 2.9600,
                        "untrRedVal": 1497.960000,
                        "anulRedRate": 3.0800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-07T09:15:00",
                            "clsgDtTm": "2019-11-08T05:00:00"
                        },
                        "untrInvstmtVal": 1517.010000,
                        "anulInvstmtRate": 3.0300,
                        "untrRedVal": 1472.770000,
                        "anulRedRate": 3.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-08T09:15:00",
                            "clsgDtTm": "2019-11-11T05:00:00"
                        },
                        "untrInvstmtVal": 1502.440000,
                        "anulInvstmtRate": 3.0700,
                        "untrRedVal": 1458.650000,
                        "anulRedRate": 3.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-11T09:15:00",
                            "clsgDtTm": "2019-11-12T05:00:00"
                        },
                        "untrInvstmtVal": 1495.280000,
                        "anulInvstmtRate": 3.0900,
                        "untrRedVal": 1451.710000,
                        "anulRedRate": 3.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-12T09:15:00",
                            "clsgDtTm": "2019-11-13T05:00:00"
                        },
                        "untrInvstmtVal": 1473.550000,
                        "anulInvstmtRate": 3.1500,
                        "untrRedVal": 1430.650000,
                        "anulRedRate": 3.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-13T09:15:00",
                            "clsgDtTm": "2019-11-14T05:00:00"
                        },
                        "untrInvstmtVal": 1462.940000,
                        "anulInvstmtRate": 3.1800,
                        "untrRedVal": 1420.360000,
                        "anulRedRate": 3.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-14T09:15:00",
                            "clsgDtTm": "2019-11-18T05:00:00"
                        },
                        "untrInvstmtVal": 1460.150000,
                        "anulInvstmtRate": 3.1900,
                        "untrRedVal": 1417.670000,
                        "anulRedRate": 3.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-18T09:15:00",
                            "clsgDtTm": "2019-11-19T05:00:00"
                        },
                        "untrInvstmtVal": 1464.130000,
                        "anulInvstmtRate": 3.1800,
                        "untrRedVal": 1421.530000,
                        "anulRedRate": 3.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-19T09:15:00",
                            "clsgDtTm": "2019-11-21T05:00:00"
                        },
                        "untrInvstmtVal": 1450.530000,
                        "anulInvstmtRate": 3.2200,
                        "untrRedVal": 1408.360000,
                        "anulRedRate": 3.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-21T09:15:00",
                            "clsgDtTm": "2019-11-22T05:00:00"
                        },
                        "untrInvstmtVal": 1436.700000,
                        "anulInvstmtRate": 3.2600,
                        "untrRedVal": 1394.960000,
                        "anulRedRate": 3.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-22T09:15:00",
                            "clsgDtTm": "2019-11-25T05:00:00"
                        },
                        "untrInvstmtVal": 1444.550000,
                        "anulInvstmtRate": 3.2400,
                        "untrRedVal": 1402.570000,
                        "anulRedRate": 3.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-25T09:15:00",
                            "clsgDtTm": "2019-11-26T05:00:00"
                        },
                        "untrInvstmtVal": 1434.410000,
                        "anulInvstmtRate": 3.2700,
                        "untrRedVal": 1392.750000,
                        "anulRedRate": 3.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-26T09:15:00",
                            "clsgDtTm": "2019-11-27T05:00:00"
                        },
                        "untrInvstmtVal": 1424.260000,
                        "anulInvstmtRate": 3.3000,
                        "untrRedVal": 1382.910000,
                        "anulRedRate": 3.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-27T09:15:00",
                            "clsgDtTm": "2019-11-28T05:00:00"
                        },
                        "untrInvstmtVal": 1400.360000,
                        "anulInvstmtRate": 3.3700,
                        "untrRedVal": 1359.740000,
                        "anulRedRate": 3.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-28T09:15:00",
                            "clsgDtTm": "2019-11-29T05:00:00"
                        },
                        "untrInvstmtVal": 1393.890000,
                        "anulInvstmtRate": 3.3900,
                        "untrRedVal": 1353.460000,
                        "anulRedRate": 3.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-11-29T09:15:00",
                            "clsgDtTm": "2019-12-02T05:00:00"
                        },
                        "untrInvstmtVal": 1411.870000,
                        "anulInvstmtRate": 3.3400,
                        "untrRedVal": 1370.920000,
                        "anulRedRate": 3.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-02T09:15:00",
                            "clsgDtTm": "2019-12-03T05:00:00"
                        },
                        "untrInvstmtVal": 1405.340000,
                        "anulInvstmtRate": 3.3600,
                        "untrRedVal": 1364.590000,
                        "anulRedRate": 3.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-03T09:15:00",
                            "clsgDtTm": "2019-12-04T05:00:00"
                        },
                        "untrInvstmtVal": 1402.280000,
                        "anulInvstmtRate": 3.3700,
                        "untrRedVal": 1361.620000,
                        "anulRedRate": 3.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-04T09:15:00",
                            "clsgDtTm": "2019-12-05T05:00:00"
                        },
                        "untrInvstmtVal": 1409.550000,
                        "anulInvstmtRate": 3.3500,
                        "untrRedVal": 1368.690000,
                        "anulRedRate": 3.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-05T09:15:00",
                            "clsgDtTm": "2019-12-06T05:00:00"
                        },
                        "untrInvstmtVal": 1413.400000,
                        "anulInvstmtRate": 3.3400,
                        "untrRedVal": 1372.420000,
                        "anulRedRate": 3.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-06T09:15:00",
                            "clsgDtTm": "2019-12-09T05:00:00"
                        },
                        "untrInvstmtVal": 1415.190000,
                        "anulInvstmtRate": 3.3400,
                        "untrRedVal": 1374.170000,
                        "anulRedRate": 3.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-09T09:15:00",
                            "clsgDtTm": "2019-12-10T05:00:00"
                        },
                        "untrInvstmtVal": 1425.760000,
                        "anulInvstmtRate": 3.3200,
                        "untrRedVal": 1384.430000,
                        "anulRedRate": 3.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-10T09:15:00",
                            "clsgDtTm": "2019-12-11T05:00:00"
                        },
                        "untrInvstmtVal": 1426.310000,
                        "anulInvstmtRate": 3.3200,
                        "untrRedVal": 1384.970000,
                        "anulRedRate": 3.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-11T09:15:00",
                            "clsgDtTm": "2019-12-12T05:00:00"
                        },
                        "untrInvstmtVal": 1440.930000,
                        "anulInvstmtRate": 3.2800,
                        "untrRedVal": 1399.160000,
                        "anulRedRate": 3.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-12T09:15:00",
                            "clsgDtTm": "2019-12-13T05:00:00"
                        },
                        "untrInvstmtVal": 1462.790000,
                        "anulInvstmtRate": 3.2100,
                        "untrRedVal": 1420.360000,
                        "anulRedRate": 3.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-13T09:15:00",
                            "clsgDtTm": "2019-12-16T05:00:00"
                        },
                        "untrInvstmtVal": 1471.040000,
                        "anulInvstmtRate": 3.1900,
                        "untrRedVal": 1428.370000,
                        "anulRedRate": 3.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-16T09:15:00",
                            "clsgDtTm": "2019-12-17T05:00:00"
                        },
                        "untrInvstmtVal": 1450.090000,
                        "anulInvstmtRate": 3.2500,
                        "untrRedVal": 1408.060000,
                        "anulRedRate": 3.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-17T09:15:00",
                            "clsgDtTm": "2019-12-18T05:00:00"
                        },
                        "untrInvstmtVal": 1429.460000,
                        "anulInvstmtRate": 3.3100,
                        "untrRedVal": 1388.060000,
                        "anulRedRate": 3.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-18T09:15:00",
                            "clsgDtTm": "2019-12-19T05:00:00"
                        },
                        "untrInvstmtVal": 1416.060000,
                        "anulInvstmtRate": 3.3500,
                        "untrRedVal": 1375.070000,
                        "anulRedRate": 3.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-19T09:15:00",
                            "clsgDtTm": "2019-12-20T05:00:00"
                        },
                        "untrInvstmtVal": 1399.360000,
                        "anulInvstmtRate": 3.4000,
                        "untrRedVal": 1358.880000,
                        "anulRedRate": 3.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-20T09:15:00",
                            "clsgDtTm": "2019-12-23T05:00:00"
                        },
                        "untrInvstmtVal": 1366.750000,
                        "anulInvstmtRate": 3.5000,
                        "untrRedVal": 1327.260000,
                        "anulRedRate": 3.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-23T09:15:00",
                            "clsgDtTm": "2019-12-26T05:00:00"
                        },
                        "untrInvstmtVal": 1382.910000,
                        "anulInvstmtRate": 3.4600,
                        "untrRedVal": 1342.950000,
                        "anulRedRate": 3.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-26T09:15:00",
                            "clsgDtTm": "2019-12-27T05:00:00"
                        },
                        "untrInvstmtVal": 1393.750000,
                        "anulInvstmtRate": 3.4300,
                        "untrRedVal": 1353.470000,
                        "anulRedRate": 3.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-27T09:15:00",
                            "clsgDtTm": "2019-12-30T05:00:00"
                        },
                        "untrInvstmtVal": 1395.350000,
                        "anulInvstmtRate": 3.4300,
                        "untrRedVal": 1355.020000,
                        "anulRedRate": 3.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2019-12-30T09:15:00",
                            "clsgDtTm": "2020-01-02T05:00:00"
                        },
                        "untrInvstmtVal": 1414.320000,
                        "anulInvstmtRate": 3.3800,
                        "untrRedVal": 1373.440000,
                        "anulRedRate": 3.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-02T09:15:00",
                            "clsgDtTm": "2020-01-03T05:00:00"
                        },
                        "untrInvstmtVal": 1418.440000,
                        "anulInvstmtRate": 3.3700,
                        "untrRedVal": 1377.450000,
                        "anulRedRate": 3.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-03T09:15:00",
                            "clsgDtTm": "2020-01-06T05:00:00"
                        },
                        "untrInvstmtVal": 1423.540000,
                        "anulInvstmtRate": 3.3600,
                        "untrRedVal": 1382.400000,
                        "anulRedRate": 3.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-06T09:15:00",
                            "clsgDtTm": "2020-01-07T05:00:00"
                        },
                        "untrInvstmtVal": 1410.350000,
                        "anulInvstmtRate": 3.4000,
                        "untrRedVal": 1369.620000,
                        "anulRedRate": 3.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-07T09:15:00",
                            "clsgDtTm": "2020-01-08T05:00:00"
                        },
                        "untrInvstmtVal": 1393.880000,
                        "anulInvstmtRate": 3.4500,
                        "untrRedVal": 1353.650000,
                        "anulRedRate": 3.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-08T09:15:00",
                            "clsgDtTm": "2020-01-09T05:00:00"
                        },
                        "untrInvstmtVal": 1411.680000,
                        "anulInvstmtRate": 3.4000,
                        "untrRedVal": 1370.910000,
                        "anulRedRate": 3.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-09T09:15:00",
                            "clsgDtTm": "2020-01-10T05:00:00"
                        },
                        "untrInvstmtVal": 1408.890000,
                        "anulInvstmtRate": 3.4100,
                        "untrRedVal": 1368.220000,
                        "anulRedRate": 3.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-10T09:15:00",
                            "clsgDtTm": "2020-01-13T05:00:00"
                        },
                        "untrInvstmtVal": 1418.730000,
                        "anulInvstmtRate": 3.3900,
                        "untrRedVal": 1377.770000,
                        "anulRedRate": 3.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-13T09:15:00",
                            "clsgDtTm": "2020-01-14T05:00:00"
                        },
                        "untrInvstmtVal": 1412.520000,
                        "anulInvstmtRate": 3.4100,
                        "untrRedVal": 1371.760000,
                        "anulRedRate": 3.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-14T09:15:00",
                            "clsgDtTm": "2020-01-15T05:00:00"
                        },
                        "untrInvstmtVal": 1413.230000,
                        "anulInvstmtRate": 3.4100,
                        "untrRedVal": 1372.450000,
                        "anulRedRate": 3.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-15T09:15:00",
                            "clsgDtTm": "2020-01-16T05:00:00"
                        },
                        "untrInvstmtVal": 1420.490000,
                        "anulInvstmtRate": 3.3900,
                        "untrRedVal": 1379.500000,
                        "anulRedRate": 3.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-16T09:15:00",
                            "clsgDtTm": "2020-01-17T05:00:00"
                        },
                        "untrInvstmtVal": 1407.030000,
                        "anulInvstmtRate": 3.4300,
                        "untrRedVal": 1366.450000,
                        "anulRedRate": 3.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-17T09:15:00",
                            "clsgDtTm": "2020-01-20T05:00:00"
                        },
                        "untrInvstmtVal": 1400.830000,
                        "anulInvstmtRate": 3.4500,
                        "untrRedVal": 1360.440000,
                        "anulRedRate": 3.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-20T09:15:00",
                            "clsgDtTm": "2020-01-21T05:00:00"
                        },
                        "untrInvstmtVal": 1404.590000,
                        "anulInvstmtRate": 3.4400,
                        "untrRedVal": 1364.100000,
                        "anulRedRate": 3.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-21T09:15:00",
                            "clsgDtTm": "2020-01-22T05:00:00"
                        },
                        "untrInvstmtVal": 1384.540000,
                        "anulInvstmtRate": 3.5000,
                        "untrRedVal": 1344.650000,
                        "anulRedRate": 3.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-22T09:15:00",
                            "clsgDtTm": "2020-01-23T05:00:00"
                        },
                        "untrInvstmtVal": 1398.440000,
                        "anulInvstmtRate": 3.4600,
                        "untrRedVal": 1358.150000,
                        "anulRedRate": 3.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-23T09:15:00",
                            "clsgDtTm": "2020-01-24T05:00:00"
                        },
                        "untrInvstmtVal": 1402.200000,
                        "anulInvstmtRate": 3.4500,
                        "untrRedVal": 1361.800000,
                        "anulRedRate": 3.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-24T09:15:00",
                            "clsgDtTm": "2020-01-27T05:00:00"
                        },
                        "untrInvstmtVal": 1406.160000,
                        "anulInvstmtRate": 3.4400,
                        "untrRedVal": 1365.650000,
                        "anulRedRate": 3.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-27T09:15:00",
                            "clsgDtTm": "2020-01-28T05:00:00"
                        },
                        "untrInvstmtVal": 1413.370000,
                        "anulInvstmtRate": 3.4200,
                        "untrRedVal": 1372.650000,
                        "anulRedRate": 3.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-28T09:15:00",
                            "clsgDtTm": "2020-01-29T05:00:00"
                        },
                        "untrInvstmtVal": 1410.270000,
                        "anulInvstmtRate": 3.4300,
                        "untrRedVal": 1369.640000,
                        "anulRedRate": 3.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-29T09:15:00",
                            "clsgDtTm": "2020-01-30T05:00:00"
                        },
                        "untrInvstmtVal": 1434.880000,
                        "anulInvstmtRate": 3.3600,
                        "untrRedVal": 1393.520000,
                        "anulRedRate": 3.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-30T09:15:00",
                            "clsgDtTm": "2020-01-31T05:00:00"
                        },
                        "untrInvstmtVal": 1428.230000,
                        "anulInvstmtRate": 3.3800,
                        "untrRedVal": 1387.080000,
                        "anulRedRate": 3.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-01-31T09:15:00",
                            "clsgDtTm": "2020-02-03T05:00:00"
                        },
                        "untrInvstmtVal": 1428.860000,
                        "anulInvstmtRate": 3.3800,
                        "untrRedVal": 1387.700000,
                        "anulRedRate": 3.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-03T09:15:00",
                            "clsgDtTm": "2020-02-04T05:00:00"
                        },
                        "untrInvstmtVal": 1436.180000,
                        "anulInvstmtRate": 3.3600,
                        "untrRedVal": 1394.810000,
                        "anulRedRate": 3.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-04T09:15:00",
                            "clsgDtTm": "2020-02-05T05:00:00"
                        },
                        "untrInvstmtVal": 1443.530000,
                        "anulInvstmtRate": 3.3400,
                        "untrRedVal": 1401.950000,
                        "anulRedRate": 3.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-05T09:15:00",
                            "clsgDtTm": "2020-02-06T05:00:00"
                        },
                        "untrInvstmtVal": 1450.930000,
                        "anulInvstmtRate": 3.3200,
                        "untrRedVal": 1409.130000,
                        "anulRedRate": 3.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-06T09:15:00",
                            "clsgDtTm": "2020-02-07T05:00:00"
                        },
                        "untrInvstmtVal": 1469.060000,
                        "anulInvstmtRate": 3.2700,
                        "untrRedVal": 1426.720000,
                        "anulRedRate": 3.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-07T09:15:00",
                            "clsgDtTm": "2020-02-10T05:00:00"
                        },
                        "untrInvstmtVal": 1450.560000,
                        "anulInvstmtRate": 3.3200,
                        "untrRedVal": 1408.790000,
                        "anulRedRate": 3.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-10T09:15:00",
                            "clsgDtTm": "2020-02-11T05:00:00"
                        },
                        "untrInvstmtVal": 1454.390000,
                        "anulInvstmtRate": 3.3100,
                        "untrRedVal": 1412.510000,
                        "anulRedRate": 3.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-11T09:15:00",
                            "clsgDtTm": "2020-02-12T05:00:00"
                        },
                        "untrInvstmtVal": 1472.510000,
                        "anulInvstmtRate": 3.2600,
                        "untrRedVal": 1430.090000,
                        "anulRedRate": 3.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-12T09:15:00",
                            "clsgDtTm": "2020-02-13T05:00:00"
                        },
                        "untrInvstmtVal": 1469.210000,
                        "anulInvstmtRate": 3.2700,
                        "untrRedVal": 1426.900000,
                        "anulRedRate": 3.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-13T09:15:00",
                            "clsgDtTm": "2020-02-14T05:00:00"
                        },
                        "untrInvstmtVal": 1473.080000,
                        "anulInvstmtRate": 3.2600,
                        "untrRedVal": 1430.660000,
                        "anulRedRate": 3.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-14T09:15:00",
                            "clsgDtTm": "2020-02-17T05:00:00"
                        },
                        "untrInvstmtVal": 1487.940000,
                        "anulInvstmtRate": 3.2200,
                        "untrRedVal": 1445.080000,
                        "anulRedRate": 3.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-17T09:15:00",
                            "clsgDtTm": "2020-02-18T05:00:00"
                        },
                        "untrInvstmtVal": 1499.120000,
                        "anulInvstmtRate": 3.1900,
                        "untrRedVal": 1455.930000,
                        "anulRedRate": 3.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-18T09:15:00",
                            "clsgDtTm": "2020-02-19T05:00:00"
                        },
                        "untrInvstmtVal": 1484.840000,
                        "anulInvstmtRate": 3.2300,
                        "untrRedVal": 1442.090000,
                        "anulRedRate": 3.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-19T09:15:00",
                            "clsgDtTm": "2020-02-20T05:00:00"
                        },
                        "untrInvstmtVal": 1485.100000,
                        "anulInvstmtRate": 3.2300,
                        "untrRedVal": 1442.340000,
                        "anulRedRate": 3.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-20T09:15:00",
                            "clsgDtTm": "2020-02-21T05:00:00"
                        },
                        "untrInvstmtVal": 1488.980000,
                        "anulInvstmtRate": 3.2200,
                        "untrRedVal": 1446.120000,
                        "anulRedRate": 3.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-21T09:15:00",
                            "clsgDtTm": "2020-02-26T05:00:00"
                        },
                        "untrInvstmtVal": 1482.340000,
                        "anulInvstmtRate": 3.2400,
                        "untrRedVal": 1439.690000,
                        "anulRedRate": 3.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-26T09:15:00",
                            "clsgDtTm": "2020-02-27T05:00:00"
                        },
                        "untrInvstmtVal": 1454.030000,
                        "anulInvstmtRate": 3.3200,
                        "untrRedVal": 1412.220000,
                        "anulRedRate": 3.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-27T09:15:00",
                            "clsgDtTm": "2020-02-28T05:00:00"
                        },
                        "untrInvstmtVal": 1440.210000,
                        "anulInvstmtRate": 3.3600,
                        "untrRedVal": 1398.830000,
                        "anulRedRate": 3.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-02-28T09:15:00",
                            "clsgDtTm": "2020-03-02T05:00:00"
                        },
                        "untrInvstmtVal": 1416.330000,
                        "anulInvstmtRate": 3.4300,
                        "untrRedVal": 1375.670000,
                        "anulRedRate": 3.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-02T09:15:00",
                            "clsgDtTm": "2020-03-03T05:00:00"
                        },
                        "untrInvstmtVal": 1454.970000,
                        "anulInvstmtRate": 3.3200,
                        "untrRedVal": 1413.160000,
                        "anulRedRate": 3.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-03T09:15:00",
                            "clsgDtTm": "2020-03-04T05:00:00"
                        },
                        "untrInvstmtVal": 1469.460000,
                        "anulInvstmtRate": 3.2800,
                        "untrRedVal": 1427.220000,
                        "anulRedRate": 3.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-04T09:15:00",
                            "clsgDtTm": "2020-03-05T05:00:00"
                        },
                        "untrInvstmtVal": 1476.880000,
                        "anulInvstmtRate": 3.2600,
                        "untrRedVal": 1434.430000,
                        "anulRedRate": 3.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-05T09:15:00",
                            "clsgDtTm": "2020-03-06T05:00:00"
                        },
                        "untrInvstmtVal": 1448.700000,
                        "anulInvstmtRate": 3.3400,
                        "untrRedVal": 1407.100000,
                        "anulRedRate": 3.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-06T09:15:00",
                            "clsgDtTm": "2020-03-09T05:00:00"
                        },
                        "untrInvstmtVal": 1438.590000,
                        "anulInvstmtRate": 3.3700,
                        "untrRedVal": 1397.300000,
                        "anulRedRate": 3.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-09T09:15:00",
                            "clsgDtTm": "2020-03-10T05:00:00"
                        },
                        "untrInvstmtVal": 1344.410000,
                        "anulInvstmtRate": 3.6500,
                        "untrRedVal": 1305.930000,
                        "anulRedRate": 3.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-10T09:15:00",
                            "clsgDtTm": "2020-03-11T05:00:00"
                        },
                        "untrInvstmtVal": 1334.940000,
                        "anulInvstmtRate": 3.6800,
                        "untrRedVal": 1296.750000,
                        "anulRedRate": 3.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-11T09:15:00",
                            "clsgDtTm": "2020-03-12T05:00:00"
                        },
                        "untrInvstmtVal": 1255.000000,
                        "anulInvstmtRate": 3.9400,
                        "untrRedVal": 1219.190000,
                        "anulRedRate": 4.0600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-12T09:15:00",
                            "clsgDtTm": "2020-03-13T05:00:00"
                        },
                        "untrInvstmtVal": 1025.770000,
                        "anulInvstmtRate": 4.7800,
                        "untrRedVal": 996.730000,
                        "anulRedRate": 4.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-13T09:15:00",
                            "clsgDtTm": "2020-03-16T05:00:00"
                        },
                        "untrInvstmtVal": 1199.520000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1165.370000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-16T09:15:00",
                            "clsgDtTm": "2020-03-17T05:00:00"
                        },
                        "untrInvstmtVal": 1223.110000,
                        "anulInvstmtRate": 4.0500,
                        "untrRedVal": 1188.260000,
                        "anulRedRate": 4.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-17T09:15:00",
                            "clsgDtTm": "2020-03-18T05:00:00"
                        },
                        "untrInvstmtVal": 1235.200000,
                        "anulInvstmtRate": 4.0100,
                        "untrRedVal": 1200.000000,
                        "anulRedRate": 4.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-18T09:15:00",
                            "clsgDtTm": "2020-03-19T05:00:00"
                        },
                        "untrInvstmtVal": 1077.240000,
                        "anulInvstmtRate": 4.5800,
                        "untrRedVal": 1046.700000,
                        "anulRedRate": 4.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-19T09:15:00",
                            "clsgDtTm": "2020-03-20T05:00:00"
                        },
                        "untrInvstmtVal": 1133.150000,
                        "anulInvstmtRate": 4.3700,
                        "untrRedVal": 1100.970000,
                        "anulRedRate": 4.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-20T09:15:00",
                            "clsgDtTm": "2020-03-23T05:00:00"
                        },
                        "untrInvstmtVal": 1062.390000,
                        "anulInvstmtRate": 4.6400,
                        "untrRedVal": 1032.310000,
                        "anulRedRate": 4.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-23T09:15:00",
                            "clsgDtTm": "2020-03-24T05:00:00"
                        },
                        "untrInvstmtVal": 986.690000,
                        "anulInvstmtRate": 4.9500,
                        "untrRedVal": 958.840000,
                        "anulRedRate": 5.0700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-24T09:15:00",
                            "clsgDtTm": "2020-03-25T05:00:00"
                        },
                        "untrInvstmtVal": 1022.930000,
                        "anulInvstmtRate": 4.8000,
                        "untrRedVal": 994.010000,
                        "anulRedRate": 4.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-25T09:15:00",
                            "clsgDtTm": "2020-03-26T05:00:00"
                        },
                        "untrInvstmtVal": 1094.080000,
                        "anulInvstmtRate": 4.5200,
                        "untrRedVal": 1063.080000,
                        "anulRedRate": 4.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-26T09:15:00",
                            "clsgDtTm": "2020-03-27T05:00:00"
                        },
                        "untrInvstmtVal": 1123.560000,
                        "anulInvstmtRate": 4.4100,
                        "untrRedVal": 1091.690000,
                        "anulRedRate": 4.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-27T09:15:00",
                            "clsgDtTm": "2020-03-30T05:00:00"
                        },
                        "untrInvstmtVal": 1123.870000,
                        "anulInvstmtRate": 4.4100,
                        "untrRedVal": 1092.000000,
                        "anulRedRate": 4.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-30T09:15:00",
                            "clsgDtTm": "2020-03-31T05:00:00"
                        },
                        "untrInvstmtVal": 1129.500000,
                        "anulInvstmtRate": 4.3900,
                        "untrRedVal": 1097.480000,
                        "anulRedRate": 4.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-03-31T09:15:00",
                            "clsgDtTm": "2020-04-01T05:00:00"
                        },
                        "untrInvstmtVal": 1116.280000,
                        "anulInvstmtRate": 4.4400,
                        "untrRedVal": 1084.640000,
                        "anulRedRate": 4.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-01T09:15:00",
                            "clsgDtTm": "2020-04-02T05:00:00"
                        },
                        "untrInvstmtVal": 1084.870000,
                        "anulInvstmtRate": 4.5600,
                        "untrRedVal": 1054.160000,
                        "anulRedRate": 4.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-02T09:15:00",
                            "clsgDtTm": "2020-04-03T05:00:00"
                        },
                        "untrInvstmtVal": 1072.190000,
                        "anulInvstmtRate": 4.6100,
                        "untrRedVal": 1041.870000,
                        "anulRedRate": 4.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-03T09:15:00",
                            "clsgDtTm": "2020-04-06T05:00:00"
                        },
                        "untrInvstmtVal": 1047.160000,
                        "anulInvstmtRate": 4.7100,
                        "untrRedVal": 1017.570000,
                        "anulRedRate": 4.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-06T09:15:00",
                            "clsgDtTm": "2020-04-07T05:00:00"
                        },
                        "untrInvstmtVal": 1054.930000,
                        "anulInvstmtRate": 4.6800,
                        "untrRedVal": 1025.120000,
                        "anulRedRate": 4.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-07T09:15:00",
                            "clsgDtTm": "2020-04-08T05:00:00"
                        },
                        "untrInvstmtVal": 1060.210000,
                        "anulInvstmtRate": 4.6600,
                        "untrRedVal": 1030.250000,
                        "anulRedRate": 4.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-08T09:15:00",
                            "clsgDtTm": "2020-04-09T05:00:00"
                        },
                        "untrInvstmtVal": 1050.350000,
                        "anulInvstmtRate": 4.7000,
                        "untrRedVal": 1020.690000,
                        "anulRedRate": 4.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-09T09:15:00",
                            "clsgDtTm": "2020-04-13T05:00:00"
                        },
                        "untrInvstmtVal": 1086.040000,
                        "anulInvstmtRate": 4.5600,
                        "untrRedVal": 1055.330000,
                        "anulRedRate": 4.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-13T09:15:00",
                            "clsgDtTm": "2020-04-14T05:00:00"
                        },
                        "untrInvstmtVal": 1078.490000,
                        "anulInvstmtRate": 4.5900,
                        "untrRedVal": 1048.010000,
                        "anulRedRate": 4.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-14T09:15:00",
                            "clsgDtTm": "2020-04-15T05:00:00"
                        },
                        "untrInvstmtVal": 1096.920000,
                        "anulInvstmtRate": 4.5200,
                        "untrRedVal": 1065.900000,
                        "anulRedRate": 4.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-15T09:15:00",
                            "clsgDtTm": "2020-04-16T05:00:00"
                        },
                        "untrInvstmtVal": 1123.660000,
                        "anulInvstmtRate": 4.4200,
                        "untrRedVal": 1091.860000,
                        "anulRedRate": 4.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-16T09:15:00",
                            "clsgDtTm": "2020-04-17T05:00:00"
                        },
                        "untrInvstmtVal": 1156.600000,
                        "anulInvstmtRate": 4.3000,
                        "untrRedVal": 1123.840000,
                        "anulRedRate": 4.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-17T09:15:00",
                            "clsgDtTm": "2020-04-20T05:00:00"
                        },
                        "untrInvstmtVal": 1162.310000,
                        "anulInvstmtRate": 4.2800,
                        "untrRedVal": 1129.380000,
                        "anulRedRate": 4.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-20T09:15:00",
                            "clsgDtTm": "2020-04-22T05:00:00"
                        },
                        "untrInvstmtVal": 1193.530000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1159.690000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-22T09:15:00",
                            "clsgDtTm": "2020-04-23T05:00:00"
                        },
                        "untrInvstmtVal": 1222.690000,
                        "anulInvstmtRate": 4.0700,
                        "untrRedVal": 1188.000000,
                        "anulRedRate": 4.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-23T09:15:00",
                            "clsgDtTm": "2020-04-24T05:00:00"
                        },
                        "untrInvstmtVal": 1202.500000,
                        "anulInvstmtRate": 4.1400,
                        "untrRedVal": 1168.410000,
                        "anulRedRate": 4.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-24T09:15:00",
                            "clsgDtTm": "2020-04-27T05:00:00"
                        },
                        "untrInvstmtVal": 1046.900000,
                        "anulInvstmtRate": 4.7200,
                        "untrRedVal": 1017.380000,
                        "anulRedRate": 4.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-27T09:15:00",
                            "clsgDtTm": "2020-04-28T05:00:00"
                        },
                        "untrInvstmtVal": 1059.630000,
                        "anulInvstmtRate": 4.6700,
                        "untrRedVal": 1029.750000,
                        "anulRedRate": 4.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-28T09:15:00",
                            "clsgDtTm": "2020-04-29T05:00:00"
                        },
                        "untrInvstmtVal": 1116.970000,
                        "anulInvstmtRate": 4.4500,
                        "untrRedVal": 1085.410000,
                        "anulRedRate": 4.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-29T09:15:00",
                            "clsgDtTm": "2020-04-30T05:00:00"
                        },
                        "untrInvstmtVal": 1162.520000,
                        "anulInvstmtRate": 4.2800,
                        "untrRedVal": 1129.620000,
                        "anulRedRate": 4.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-04-30T09:15:00",
                            "clsgDtTm": "2020-05-04T05:00:00"
                        },
                        "untrInvstmtVal": 1156.830000,
                        "anulInvstmtRate": 4.3000,
                        "untrRedVal": 1124.110000,
                        "anulRedRate": 4.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-04T09:15:00",
                            "clsgDtTm": "2020-05-05T05:00:00"
                        },
                        "untrInvstmtVal": 1132.310000,
                        "anulInvstmtRate": 4.3900,
                        "untrRedVal": 1100.310000,
                        "anulRedRate": 4.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-05T09:15:00",
                            "clsgDtTm": "2020-05-06T05:00:00"
                        },
                        "untrInvstmtVal": 1157.060000,
                        "anulInvstmtRate": 4.3000,
                        "untrRedVal": 1124.340000,
                        "anulRedRate": 4.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-06T09:15:00",
                            "clsgDtTm": "2020-05-07T05:00:00"
                        },
                        "untrInvstmtVal": 1151.650000,
                        "anulInvstmtRate": 4.3200,
                        "untrRedVal": 1119.090000,
                        "anulRedRate": 4.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-07T09:15:00",
                            "clsgDtTm": "2020-05-08T05:00:00"
                        },
                        "untrInvstmtVal": 1132.650000,
                        "anulInvstmtRate": 4.3900,
                        "untrRedVal": 1100.660000,
                        "anulRedRate": 4.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-08T09:15:00",
                            "clsgDtTm": "2020-05-11T05:00:00"
                        },
                        "untrInvstmtVal": 1118.190000,
                        "anulInvstmtRate": 4.4400,
                        "untrRedVal": 1086.620000,
                        "anulRedRate": 4.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-11T09:15:00",
                            "clsgDtTm": "2020-05-12T05:00:00"
                        },
                        "untrInvstmtVal": 1110.290000,
                        "anulInvstmtRate": 4.4700,
                        "untrRedVal": 1078.960000,
                        "anulRedRate": 4.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-12T09:15:00",
                            "clsgDtTm": "2020-05-13T05:00:00"
                        },
                        "untrInvstmtVal": 1097.200000,
                        "anulInvstmtRate": 4.5200,
                        "untrRedVal": 1066.260000,
                        "anulRedRate": 4.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-13T09:15:00",
                            "clsgDtTm": "2020-05-14T05:00:00"
                        },
                        "untrInvstmtVal": 1056.230000,
                        "anulInvstmtRate": 4.6800,
                        "untrRedVal": 1026.500000,
                        "anulRedRate": 4.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-14T09:15:00",
                            "clsgDtTm": "2020-05-15T05:00:00"
                        },
                        "untrInvstmtVal": 1043.820000,
                        "anulInvstmtRate": 4.7300,
                        "untrRedVal": 1014.450000,
                        "anulRedRate": 4.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-15T09:15:00",
                            "clsgDtTm": "2020-05-18T05:00:00"
                        },
                        "untrInvstmtVal": 1086.750000,
                        "anulInvstmtRate": 4.5600,
                        "untrRedVal": 1056.130000,
                        "anulRedRate": 4.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-18T09:15:00",
                            "clsgDtTm": "2020-05-19T05:00:00"
                        },
                        "untrInvstmtVal": 1105.090000,
                        "anulInvstmtRate": 4.4900,
                        "untrRedVal": 1073.940000,
                        "anulRedRate": 4.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-19T09:15:00",
                            "clsgDtTm": "2020-05-20T05:00:00"
                        },
                        "untrInvstmtVal": 1121.080000,
                        "anulInvstmtRate": 4.4300,
                        "untrRedVal": 1089.470000,
                        "anulRedRate": 4.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-20T09:15:00",
                            "clsgDtTm": "2020-05-21T05:00:00"
                        },
                        "untrInvstmtVal": 1123.820000,
                        "anulInvstmtRate": 4.4200,
                        "untrRedVal": 1092.120000,
                        "anulRedRate": 4.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-21T09:15:00",
                            "clsgDtTm": "2020-05-22T05:00:00"
                        },
                        "untrInvstmtVal": 1153.760000,
                        "anulInvstmtRate": 4.3100,
                        "untrRedVal": 1121.200000,
                        "anulRedRate": 4.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-22T09:15:00",
                            "clsgDtTm": "2020-05-25T05:00:00"
                        },
                        "untrInvstmtVal": 1153.540000,
                        "anulInvstmtRate": 4.3100,
                        "untrRedVal": 1120.990000,
                        "anulRedRate": 4.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-25T09:15:00",
                            "clsgDtTm": "2020-05-26T05:00:00"
                        },
                        "untrInvstmtVal": 1192.820000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1159.110000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-26T09:15:00",
                            "clsgDtTm": "2020-05-27T05:00:00"
                        },
                        "untrInvstmtVal": 1192.860000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1159.170000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-27T09:15:00",
                            "clsgDtTm": "2020-05-28T05:00:00"
                        },
                        "untrInvstmtVal": 1164.380000,
                        "anulInvstmtRate": 4.2700,
                        "untrRedVal": 1131.520000,
                        "anulRedRate": 4.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-28T09:15:00",
                            "clsgDtTm": "2020-05-29T05:00:00"
                        },
                        "untrInvstmtVal": 1172.770000,
                        "anulInvstmtRate": 4.2400,
                        "untrRedVal": 1139.670000,
                        "anulRedRate": 4.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-05-29T09:15:00",
                            "clsgDtTm": "2020-06-01T05:00:00"
                        },
                        "untrInvstmtVal": 1166.870000,
                        "anulInvstmtRate": 4.2600,
                        "untrRedVal": 1133.950000,
                        "anulRedRate": 4.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-01T09:15:00",
                            "clsgDtTm": "2020-06-02T05:00:00"
                        },
                        "untrInvstmtVal": 1164.110000,
                        "anulInvstmtRate": 4.2700,
                        "untrRedVal": 1131.280000,
                        "anulRedRate": 4.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-02T09:15:00",
                            "clsgDtTm": "2020-06-03T05:00:00"
                        },
                        "untrInvstmtVal": 1183.740000,
                        "anulInvstmtRate": 4.2000,
                        "untrRedVal": 1150.340000,
                        "anulRedRate": 4.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-03T09:15:00",
                            "clsgDtTm": "2020-06-04T05:00:00"
                        },
                        "untrInvstmtVal": 1206.590000,
                        "anulInvstmtRate": 4.1200,
                        "untrRedVal": 1172.520000,
                        "anulRedRate": 4.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-04T09:15:00",
                            "clsgDtTm": "2020-06-05T05:00:00"
                        },
                        "untrInvstmtVal": 1197.990000,
                        "anulInvstmtRate": 4.1500,
                        "untrRedVal": 1164.180000,
                        "anulRedRate": 4.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-05T09:15:00",
                            "clsgDtTm": "2020-06-08T05:00:00"
                        },
                        "untrInvstmtVal": 1209.150000,
                        "anulInvstmtRate": 4.1100,
                        "untrRedVal": 1175.020000,
                        "anulRedRate": 4.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-08T09:15:00",
                            "clsgDtTm": "2020-06-09T05:00:00"
                        },
                        "untrInvstmtVal": 1217.860000,
                        "anulInvstmtRate": 4.0800,
                        "untrRedVal": 1183.480000,
                        "anulRedRate": 4.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-09T09:15:00",
                            "clsgDtTm": "2020-06-10T05:00:00"
                        },
                        "untrInvstmtVal": 1220.790000,
                        "anulInvstmtRate": 4.0700,
                        "untrRedVal": 1186.330000,
                        "anulRedRate": 4.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-10T09:15:00",
                            "clsgDtTm": "2020-06-12T05:00:00"
                        },
                        "untrInvstmtVal": 1218.490000,
                        "anulInvstmtRate": 4.0800,
                        "untrRedVal": 1184.100000,
                        "anulRedRate": 4.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-12T09:15:00",
                            "clsgDtTm": "2020-06-15T05:00:00"
                        },
                        "untrInvstmtVal": 1229.920000,
                        "anulInvstmtRate": 4.0400,
                        "untrRedVal": 1195.200000,
                        "anulRedRate": 4.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-15T09:15:00",
                            "clsgDtTm": "2020-06-16T05:00:00"
                        },
                        "untrInvstmtVal": 1221.430000,
                        "anulInvstmtRate": 4.0700,
                        "untrRedVal": 1186.960000,
                        "anulRedRate": 4.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-16T09:15:00",
                            "clsgDtTm": "2020-06-17T05:00:00"
                        },
                        "untrInvstmtVal": 1236.380000,
                        "anulInvstmtRate": 4.0200,
                        "untrRedVal": 1201.480000,
                        "anulRedRate": 4.1400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-17T09:15:00",
                            "clsgDtTm": "2020-06-18T05:00:00"
                        },
                        "untrInvstmtVal": 1242.580000,
                        "anulInvstmtRate": 4.0000,
                        "untrRedVal": 1207.510000,
                        "anulRedRate": 4.1200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-18T09:15:00",
                            "clsgDtTm": "2020-06-19T05:00:00"
                        },
                        "untrInvstmtVal": 1231.060000,
                        "anulInvstmtRate": 4.0400,
                        "untrRedVal": 1196.330000,
                        "anulRedRate": 4.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-19T09:15:00",
                            "clsgDtTm": "2020-06-22T05:00:00"
                        },
                        "untrInvstmtVal": 1222.740000,
                        "anulInvstmtRate": 4.0700,
                        "untrRedVal": 1188.260000,
                        "anulRedRate": 4.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-22T09:15:00",
                            "clsgDtTm": "2020-06-23T05:00:00"
                        },
                        "untrInvstmtVal": 1208.530000,
                        "anulInvstmtRate": 4.1200,
                        "untrRedVal": 1174.470000,
                        "anulRedRate": 4.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-23T09:15:00",
                            "clsgDtTm": "2020-06-24T05:00:00"
                        },
                        "untrInvstmtVal": 1208.810000,
                        "anulInvstmtRate": 4.1200,
                        "untrRedVal": 1174.750000,
                        "anulRedRate": 4.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-24T09:15:00",
                            "clsgDtTm": "2020-06-25T05:00:00"
                        },
                        "untrInvstmtVal": 1197.630000,
                        "anulInvstmtRate": 4.1600,
                        "untrRedVal": 1163.900000,
                        "anulRedRate": 4.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-25T09:15:00",
                            "clsgDtTm": "2020-06-26T05:00:00"
                        },
                        "untrInvstmtVal": 1206.500000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1172.520000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-26T09:15:00",
                            "clsgDtTm": "2020-06-29T05:00:00"
                        },
                        "untrInvstmtVal": 1210.120000,
                        "anulInvstmtRate": 4.1200,
                        "untrRedVal": 1176.040000,
                        "anulRedRate": 4.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-29T09:15:00",
                            "clsgDtTm": "2020-06-30T05:00:00"
                        },
                        "untrInvstmtVal": 1201.810000,
                        "anulInvstmtRate": 4.1500,
                        "untrRedVal": 1167.970000,
                        "anulRedRate": 4.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-06-30T09:15:00",
                            "clsgDtTm": "2020-07-01T05:00:00"
                        },
                        "untrInvstmtVal": 1222.310000,
                        "anulInvstmtRate": 4.0800,
                        "untrRedVal": 1187.890000,
                        "anulRedRate": 4.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-01T09:15:00",
                            "clsgDtTm": "2020-07-02T05:00:00"
                        },
                        "untrInvstmtVal": 1240.220000,
                        "anulInvstmtRate": 4.0200,
                        "untrRedVal": 1205.270000,
                        "anulRedRate": 4.1400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-02T09:15:00",
                            "clsgDtTm": "2020-07-03T05:00:00"
                        },
                        "untrInvstmtVal": 1261.400000,
                        "anulInvstmtRate": 3.9500,
                        "untrRedVal": 1225.840000,
                        "anulRedRate": 4.0700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-03T09:15:00",
                            "clsgDtTm": "2020-07-06T05:00:00"
                        },
                        "untrInvstmtVal": 1264.950000,
                        "anulInvstmtRate": 3.9400,
                        "untrRedVal": 1229.290000,
                        "anulRedRate": 4.0600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-06T09:15:00",
                            "clsgDtTm": "2020-07-07T05:00:00"
                        },
                        "untrInvstmtVal": 1283.490000,
                        "anulInvstmtRate": 3.8800,
                        "untrRedVal": 1247.290000,
                        "anulRedRate": 4.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-07T09:15:00",
                            "clsgDtTm": "2020-07-08T05:00:00"
                        },
                        "untrInvstmtVal": 1274.640000,
                        "anulInvstmtRate": 3.9100,
                        "untrRedVal": 1238.710000,
                        "anulRedRate": 4.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-08T09:15:00",
                            "clsgDtTm": "2020-07-09T05:00:00"
                        },
                        "untrInvstmtVal": 1274.950000,
                        "anulInvstmtRate": 3.9100,
                        "untrRedVal": 1239.020000,
                        "anulRedRate": 4.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-09T09:15:00",
                            "clsgDtTm": "2020-07-10T05:00:00"
                        },
                        "untrInvstmtVal": 1296.720000,
                        "anulInvstmtRate": 3.8400,
                        "untrRedVal": 1260.160000,
                        "anulRedRate": 3.9600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-10T09:15:00",
                            "clsgDtTm": "2020-07-13T05:00:00"
                        },
                        "untrInvstmtVal": 1322.140000,
                        "anulInvstmtRate": 3.7600,
                        "untrRedVal": 1284.830000,
                        "anulRedRate": 3.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-13T09:15:00",
                            "clsgDtTm": "2020-07-14T05:00:00"
                        },
                        "untrInvstmtVal": 1306.770000,
                        "anulInvstmtRate": 3.8100,
                        "untrRedVal": 1269.920000,
                        "anulRedRate": 3.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-14T09:15:00",
                            "clsgDtTm": "2020-07-15T05:00:00"
                        },
                        "untrInvstmtVal": 1303.960000,
                        "anulInvstmtRate": 3.8200,
                        "untrRedVal": 1267.200000,
                        "anulRedRate": 3.9400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-15T09:15:00",
                            "clsgDtTm": "2020-07-16T05:00:00"
                        },
                        "untrInvstmtVal": 1316.870000,
                        "anulInvstmtRate": 3.7800,
                        "untrRedVal": 1279.740000,
                        "anulRedRate": 3.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-16T09:15:00",
                            "clsgDtTm": "2020-07-17T05:00:00"
                        },
                        "untrInvstmtVal": 1311.010000,
                        "anulInvstmtRate": 3.8000,
                        "untrRedVal": 1274.060000,
                        "anulRedRate": 3.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-17T09:15:00",
                            "clsgDtTm": "2020-07-20T05:00:00"
                        },
                        "untrInvstmtVal": 1353.170000,
                        "anulInvstmtRate": 3.6700,
                        "untrRedVal": 1314.980000,
                        "anulRedRate": 3.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-20T09:15:00",
                            "clsgDtTm": "2020-07-21T05:00:00"
                        },
                        "untrInvstmtVal": 1366.560000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1328.000000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-21T09:15:00",
                            "clsgDtTm": "2020-07-22T05:00:00"
                        },
                        "untrInvstmtVal": 1357.230000,
                        "anulInvstmtRate": 3.6600,
                        "untrRedVal": 1318.940000,
                        "anulRedRate": 3.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-22T09:15:00",
                            "clsgDtTm": "2020-07-23T05:00:00"
                        },
                        "untrInvstmtVal": 1367.400000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1328.820000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-23T09:15:00",
                            "clsgDtTm": "2020-07-24T05:00:00"
                        },
                        "untrInvstmtVal": 1367.820000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1329.230000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-24T09:15:00",
                            "clsgDtTm": "2020-07-27T05:00:00"
                        },
                        "untrInvstmtVal": 1375.230000,
                        "anulInvstmtRate": 3.6100,
                        "untrRedVal": 1336.440000,
                        "anulRedRate": 3.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-27T09:15:00",
                            "clsgDtTm": "2020-07-28T05:00:00"
                        },
                        "untrInvstmtVal": 1401.350000,
                        "anulInvstmtRate": 3.5300,
                        "untrRedVal": 1361.790000,
                        "anulRedRate": 3.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-28T09:15:00",
                            "clsgDtTm": "2020-07-29T05:00:00"
                        },
                        "untrInvstmtVal": 1401.710000,
                        "anulInvstmtRate": 3.5300,
                        "untrRedVal": 1362.150000,
                        "anulRedRate": 3.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-29T09:15:00",
                            "clsgDtTm": "2020-07-30T05:00:00"
                        },
                        "untrInvstmtVal": 1402.070000,
                        "anulInvstmtRate": 3.5300,
                        "untrRedVal": 1362.500000,
                        "anulRedRate": 3.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-30T09:15:00",
                            "clsgDtTm": "2020-07-31T05:00:00"
                        },
                        "untrInvstmtVal": 1415.880000,
                        "anulInvstmtRate": 3.4900,
                        "untrRedVal": 1375.920000,
                        "anulRedRate": 3.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-07-31T09:15:00",
                            "clsgDtTm": "2020-08-03T05:00:00"
                        },
                        "untrInvstmtVal": 1450.820000,
                        "anulInvstmtRate": 3.3900,
                        "untrRedVal": 1409.840000,
                        "anulRedRate": 3.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-03T09:15:00",
                            "clsgDtTm": "2020-08-04T05:00:00"
                        },
                        "untrInvstmtVal": 1447.720000,
                        "anulInvstmtRate": 3.4000,
                        "untrRedVal": 1406.840000,
                        "anulRedRate": 3.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-04T09:15:00",
                            "clsgDtTm": "2020-08-05T05:00:00"
                        },
                        "untrInvstmtVal": 1448.090000,
                        "anulInvstmtRate": 3.4000,
                        "untrRedVal": 1407.200000,
                        "anulRedRate": 3.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-05T09:15:00",
                            "clsgDtTm": "2020-08-06T05:00:00"
                        },
                        "untrInvstmtVal": 1441.550000,
                        "anulInvstmtRate": 3.4200,
                        "untrRedVal": 1400.860000,
                        "anulRedRate": 3.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-06T09:15:00",
                            "clsgDtTm": "2020-08-07T05:00:00"
                        },
                        "untrInvstmtVal": 1418.030000,
                        "anulInvstmtRate": 3.4900,
                        "untrRedVal": 1378.040000,
                        "anulRedRate": 3.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-07T09:15:00",
                            "clsgDtTm": "2020-08-10T05:00:00"
                        },
                        "untrInvstmtVal": 1408.500000,
                        "anulInvstmtRate": 3.5200,
                        "untrRedVal": 1368.790000,
                        "anulRedRate": 3.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-10T09:15:00",
                            "clsgDtTm": "2020-08-11T05:00:00"
                        },
                        "untrInvstmtVal": 1402.160000,
                        "anulInvstmtRate": 3.5400,
                        "untrRedVal": 1362.640000,
                        "anulRedRate": 3.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-11T09:15:00",
                            "clsgDtTm": "2020-08-12T05:00:00"
                        },
                        "untrInvstmtVal": 1359.750000,
                        "anulInvstmtRate": 3.6700,
                        "untrRedVal": 1321.490000,
                        "anulRedRate": 3.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-12T09:15:00",
                            "clsgDtTm": "2020-08-13T05:00:00"
                        },
                        "untrInvstmtVal": 1363.350000,
                        "anulInvstmtRate": 3.6600,
                        "untrRedVal": 1324.980000,
                        "anulRedRate": 3.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-13T09:15:00",
                            "clsgDtTm": "2020-08-14T05:00:00"
                        },
                        "untrInvstmtVal": 1337.990000,
                        "anulInvstmtRate": 3.7400,
                        "untrRedVal": 1300.380000,
                        "anulRedRate": 3.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-14T09:15:00",
                            "clsgDtTm": "2020-08-17T05:00:00"
                        },
                        "untrInvstmtVal": 1328.940000,
                        "anulInvstmtRate": 3.7700,
                        "untrRedVal": 1291.590000,
                        "anulRedRate": 3.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-17T09:15:00",
                            "clsgDtTm": "2020-08-18T05:00:00"
                        },
                        "untrInvstmtVal": 1310.370000,
                        "anulInvstmtRate": 3.8300,
                        "untrRedVal": 1273.580000,
                        "anulRedRate": 3.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-18T09:15:00",
                            "clsgDtTm": "2020-08-19T05:00:00"
                        },
                        "untrInvstmtVal": 1351.730000,
                        "anulInvstmtRate": 3.7000,
                        "untrRedVal": 1313.730000,
                        "anulRedRate": 3.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-19T09:15:00",
                            "clsgDtTm": "2020-08-20T05:00:00"
                        },
                        "untrInvstmtVal": 1374.670000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1336.010000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-20T09:15:00",
                            "clsgDtTm": "2020-08-21T05:00:00"
                        },
                        "untrInvstmtVal": 1355.440000,
                        "anulInvstmtRate": 3.6900,
                        "untrRedVal": 1317.350000,
                        "anulRedRate": 3.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-21T09:15:00",
                            "clsgDtTm": "2020-08-24T05:00:00"
                        },
                        "untrInvstmtVal": 1362.260000,
                        "anulInvstmtRate": 3.6700,
                        "untrRedVal": 1323.970000,
                        "anulRedRate": 3.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-24T09:15:00",
                            "clsgDtTm": "2020-08-25T05:00:00"
                        },
                        "untrInvstmtVal": 1372.260000,
                        "anulInvstmtRate": 3.6400,
                        "untrRedVal": 1333.680000,
                        "anulRedRate": 3.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-25T09:15:00",
                            "clsgDtTm": "2020-08-26T05:00:00"
                        },
                        "untrInvstmtVal": 1359.520000,
                        "anulInvstmtRate": 3.6800,
                        "untrRedVal": 1321.330000,
                        "anulRedRate": 3.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-26T09:15:00",
                            "clsgDtTm": "2020-08-27T05:00:00"
                        },
                        "untrInvstmtVal": 1328.320000,
                        "anulInvstmtRate": 3.7800,
                        "untrRedVal": 1291.040000,
                        "anulRedRate": 3.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-27T09:15:00",
                            "clsgDtTm": "2020-08-28T05:00:00"
                        },
                        "untrInvstmtVal": 1341.280000,
                        "anulInvstmtRate": 3.7400,
                        "untrRedVal": 1303.630000,
                        "anulRedRate": 3.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-28T09:15:00",
                            "clsgDtTm": "2020-08-31T05:00:00"
                        },
                        "untrInvstmtVal": 1357.770000,
                        "anulInvstmtRate": 3.6900,
                        "untrRedVal": 1319.650000,
                        "anulRedRate": 3.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-08-31T09:15:00",
                            "clsgDtTm": "2020-09-01T05:00:00"
                        },
                        "untrInvstmtVal": 1345.220000,
                        "anulInvstmtRate": 3.7300,
                        "untrRedVal": 1307.470000,
                        "anulRedRate": 3.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-01T09:15:00",
                            "clsgDtTm": "2020-09-02T05:00:00"
                        },
                        "untrInvstmtVal": 1351.910000,
                        "anulInvstmtRate": 3.7100,
                        "untrRedVal": 1313.970000,
                        "anulRedRate": 3.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-02T09:15:00",
                            "clsgDtTm": "2020-09-03T05:00:00"
                        },
                        "untrInvstmtVal": 1355.410000,
                        "anulInvstmtRate": 3.7000,
                        "untrRedVal": 1317.380000,
                        "anulRedRate": 3.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-03T09:15:00",
                            "clsgDtTm": "2020-09-04T05:00:00"
                        },
                        "untrInvstmtVal": 1358.920000,
                        "anulInvstmtRate": 3.6900,
                        "untrRedVal": 1320.790000,
                        "anulRedRate": 3.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-04T09:15:00",
                            "clsgDtTm": "2020-09-08T05:00:00"
                        },
                        "untrInvstmtVal": 1365.950000,
                        "anulInvstmtRate": 3.6700,
                        "untrRedVal": 1327.620000,
                        "anulRedRate": 3.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-08T09:15:00",
                            "clsgDtTm": "2020-09-09T05:00:00"
                        },
                        "untrInvstmtVal": 1340.560000,
                        "anulInvstmtRate": 3.7500,
                        "untrRedVal": 1302.970000,
                        "anulRedRate": 3.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-09T09:15:00",
                            "clsgDtTm": "2020-09-10T05:00:00"
                        },
                        "untrInvstmtVal": 1350.750000,
                        "anulInvstmtRate": 3.7200,
                        "untrRedVal": 1312.880000,
                        "anulRedRate": 3.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-10T09:15:00",
                            "clsgDtTm": "2020-09-11T05:00:00"
                        },
                        "untrInvstmtVal": 1338.300000,
                        "anulInvstmtRate": 3.7600,
                        "untrRedVal": 1300.800000,
                        "anulRedRate": 3.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-11T09:15:00",
                            "clsgDtTm": "2020-09-14T05:00:00"
                        },
                        "untrInvstmtVal": 1326.180000,
                        "anulInvstmtRate": 3.8000,
                        "untrRedVal": 1289.040000,
                        "anulRedRate": 3.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-14T09:15:00",
                            "clsgDtTm": "2020-09-15T05:00:00"
                        },
                        "untrInvstmtVal": 1329.630000,
                        "anulInvstmtRate": 3.7900,
                        "untrRedVal": 1292.390000,
                        "anulRedRate": 3.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-15T09:15:00",
                            "clsgDtTm": "2020-09-16T05:00:00"
                        },
                        "untrInvstmtVal": 1320.520000,
                        "anulInvstmtRate": 3.8200,
                        "untrRedVal": 1283.550000,
                        "anulRedRate": 3.9400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-16T09:15:00",
                            "clsgDtTm": "2020-09-17T05:00:00"
                        },
                        "untrInvstmtVal": 1302.210000,
                        "anulInvstmtRate": 3.8800,
                        "untrRedVal": 1265.780000,
                        "anulRedRate": 4.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-17T09:15:00",
                            "clsgDtTm": "2020-09-18T05:00:00"
                        },
                        "untrInvstmtVal": 1314.900000,
                        "anulInvstmtRate": 3.8400,
                        "untrRedVal": 1278.110000,
                        "anulRedRate": 3.9600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-18T09:15:00",
                            "clsgDtTm": "2020-09-21T05:00:00"
                        },
                        "untrInvstmtVal": 1278.620000,
                        "anulInvstmtRate": 3.9600,
                        "untrRedVal": 1242.890000,
                        "anulRedRate": 4.0800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-21T09:15:00",
                            "clsgDtTm": "2020-09-22T05:00:00"
                        },
                        "untrInvstmtVal": 1228.610000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1194.340000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-22T09:15:00",
                            "clsgDtTm": "2020-09-23T05:00:00"
                        },
                        "untrInvstmtVal": 1255.290000,
                        "anulInvstmtRate": 4.0400,
                        "untrRedVal": 1220.250000,
                        "anulRedRate": 4.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-23T09:15:00",
                            "clsgDtTm": "2020-09-24T05:00:00"
                        },
                        "untrInvstmtVal": 1264.510000,
                        "anulInvstmtRate": 4.0100,
                        "untrRedVal": 1229.210000,
                        "anulRedRate": 4.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-24T09:15:00",
                            "clsgDtTm": "2020-09-25T05:00:00"
                        },
                        "untrInvstmtVal": 1262.840000,
                        "anulInvstmtRate": 4.0200,
                        "untrRedVal": 1227.590000,
                        "anulRedRate": 4.1400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-25T09:15:00",
                            "clsgDtTm": "2020-09-28T05:00:00"
                        },
                        "untrInvstmtVal": 1290.790000,
                        "anulInvstmtRate": 3.9300,
                        "untrRedVal": 1254.740000,
                        "anulRedRate": 4.0500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-28T09:15:00",
                            "clsgDtTm": "2020-09-29T05:00:00"
                        },
                        "untrInvstmtVal": 1246.290000,
                        "anulInvstmtRate": 4.0800,
                        "untrRedVal": 1211.540000,
                        "anulRedRate": 4.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-29T09:15:00",
                            "clsgDtTm": "2020-09-30T05:00:00"
                        },
                        "untrInvstmtVal": 1220.530000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1186.530000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-09-30T09:15:00",
                            "clsgDtTm": "2020-10-01T05:00:00"
                        },
                        "untrInvstmtVal": 1238.310000,
                        "anulInvstmtRate": 4.1100,
                        "untrRedVal": 1203.800000,
                        "anulRedRate": 4.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-01T09:15:00",
                            "clsgDtTm": "2020-10-02T05:00:00"
                        },
                        "untrInvstmtVal": 1229.980000,
                        "anulInvstmtRate": 4.1400,
                        "untrRedVal": 1195.720000,
                        "anulRedRate": 4.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-02T09:15:00",
                            "clsgDtTm": "2020-10-05T05:00:00"
                        },
                        "untrInvstmtVal": 1190.890000,
                        "anulInvstmtRate": 4.2800,
                        "untrRedVal": 1157.760000,
                        "anulRedRate": 4.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-05T09:15:00",
                            "clsgDtTm": "2020-10-06T05:00:00"
                        },
                        "untrInvstmtVal": 1234.080000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1199.710000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-06T09:15:00",
                            "clsgDtTm": "2020-10-07T05:00:00"
                        },
                        "untrInvstmtVal": 1208.610000,
                        "anulInvstmtRate": 4.2200,
                        "untrRedVal": 1174.980000,
                        "anulRedRate": 4.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-07T09:15:00",
                            "clsgDtTm": "2020-10-08T05:00:00"
                        },
                        "untrInvstmtVal": 1197.680000,
                        "anulInvstmtRate": 4.2600,
                        "untrRedVal": 1164.380000,
                        "anulRedRate": 4.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-08T09:15:00",
                            "clsgDtTm": "2020-10-09T05:00:00"
                        },
                        "untrInvstmtVal": 1220.830000,
                        "anulInvstmtRate": 4.1800,
                        "untrRedVal": 1186.860000,
                        "anulRedRate": 4.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-09T09:15:00",
                            "clsgDtTm": "2020-10-13T05:00:00"
                        },
                        "untrInvstmtVal": 1238.010000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1203.550000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-13T09:15:00",
                            "clsgDtTm": "2020-10-14T05:00:00"
                        },
                        "untrInvstmtVal": 1259.050000,
                        "anulInvstmtRate": 4.0600,
                        "untrRedVal": 1223.990000,
                        "anulRedRate": 4.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-14T09:15:00",
                            "clsgDtTm": "2020-10-15T05:00:00"
                        },
                        "untrInvstmtVal": 1259.520000,
                        "anulInvstmtRate": 4.0600,
                        "untrRedVal": 1224.450000,
                        "anulRedRate": 4.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-15T09:15:00",
                            "clsgDtTm": "2020-10-16T05:00:00"
                        },
                        "untrInvstmtVal": 1245.230000,
                        "anulInvstmtRate": 4.1100,
                        "untrRedVal": 1210.590000,
                        "anulRedRate": 4.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-16T09:15:00",
                            "clsgDtTm": "2020-10-19T05:00:00"
                        },
                        "untrInvstmtVal": 1252.080000,
                        "anulInvstmtRate": 4.0900,
                        "untrRedVal": 1217.240000,
                        "anulRedRate": 4.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-19T09:15:00",
                            "clsgDtTm": "2020-10-20T05:00:00"
                        },
                        "untrInvstmtVal": 1264.380000,
                        "anulInvstmtRate": 4.0500,
                        "untrRedVal": 1229.190000,
                        "anulRedRate": 4.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-20T09:15:00",
                            "clsgDtTm": "2020-10-21T05:00:00"
                        },
                        "untrInvstmtVal": 1282.830000,
                        "anulInvstmtRate": 3.9900,
                        "untrRedVal": 1247.110000,
                        "anulRedRate": 4.1100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-21T09:15:00",
                            "clsgDtTm": "2020-10-22T05:00:00"
                        },
                        "untrInvstmtVal": 1271.270000,
                        "anulInvstmtRate": 4.0300,
                        "untrRedVal": 1235.890000,
                        "anulRedRate": 4.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-22T09:15:00",
                            "clsgDtTm": "2020-10-23T05:00:00"
                        },
                        "untrInvstmtVal": 1271.730000,
                        "anulInvstmtRate": 4.0300,
                        "untrRedVal": 1236.350000,
                        "anulRedRate": 4.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-23T09:15:00",
                            "clsgDtTm": "2020-10-26T05:00:00"
                        },
                        "untrInvstmtVal": 1254.880000,
                        "anulInvstmtRate": 4.0900,
                        "untrRedVal": 1219.990000,
                        "anulRedRate": 4.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-26T09:15:00",
                            "clsgDtTm": "2020-10-27T05:00:00"
                        },
                        "untrInvstmtVal": 1244.410000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1209.830000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-27T09:15:00",
                            "clsgDtTm": "2020-10-28T05:00:00"
                        },
                        "untrInvstmtVal": 1233.290000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1199.040000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-28T09:15:00",
                            "clsgDtTm": "2020-10-29T05:00:00"
                        },
                        "untrInvstmtVal": 1242.530000,
                        "anulInvstmtRate": 4.1400,
                        "untrRedVal": 1208.020000,
                        "anulRedRate": 4.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-29T09:15:00",
                            "clsgDtTm": "2020-10-30T05:00:00"
                        },
                        "untrInvstmtVal": 1240.140000,
                        "anulInvstmtRate": 4.1500,
                        "untrRedVal": 1205.700000,
                        "anulRedRate": 4.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-10-30T09:15:00",
                            "clsgDtTm": "2020-11-03T05:00:00"
                        },
                        "untrInvstmtVal": 1230.030000,
                        "anulInvstmtRate": 4.1900,
                        "untrRedVal": 1195.890000,
                        "anulRedRate": 4.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-03T09:15:00",
                            "clsgDtTm": "2020-11-04T05:00:00"
                        },
                        "untrInvstmtVal": 1230.550000,
                        "anulInvstmtRate": 4.1900,
                        "untrRedVal": 1196.400000,
                        "anulRedRate": 4.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-04T09:15:00",
                            "clsgDtTm": "2020-11-05T05:00:00"
                        },
                        "untrInvstmtVal": 1236.860000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1202.540000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-05T09:15:00",
                            "clsgDtTm": "2020-11-06T05:00:00"
                        },
                        "untrInvstmtVal": 1260.840000,
                        "anulInvstmtRate": 4.0900,
                        "untrRedVal": 1225.830000,
                        "anulRedRate": 4.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-06T09:15:00",
                            "clsgDtTm": "2020-11-09T05:00:00"
                        },
                        "untrInvstmtVal": 1298.620000,
                        "anulInvstmtRate": 3.9700,
                        "untrRedVal": 1262.530000,
                        "anulRedRate": 4.0900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-09T09:15:00",
                            "clsgDtTm": "2020-11-10T05:00:00"
                        },
                        "untrInvstmtVal": 1320.740000,
                        "anulInvstmtRate": 3.9000,
                        "untrRedVal": 1284.010000,
                        "anulRedRate": 4.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-10T09:15:00",
                            "clsgDtTm": "2020-11-11T05:00:00"
                        },
                        "untrInvstmtVal": 1308.940000,
                        "anulInvstmtRate": 3.9400,
                        "untrRedVal": 1272.560000,
                        "anulRedRate": 4.0600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-11T09:15:00",
                            "clsgDtTm": "2020-11-12T05:00:00"
                        },
                        "untrInvstmtVal": 1270.120000,
                        "anulInvstmtRate": 4.0700,
                        "untrRedVal": 1234.870000,
                        "anulRedRate": 4.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-12T09:15:00",
                            "clsgDtTm": "2020-11-13T05:00:00"
                        },
                        "untrInvstmtVal": 1270.680000,
                        "anulInvstmtRate": 4.0700,
                        "untrRedVal": 1235.420000,
                        "anulRedRate": 4.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-13T09:15:00",
                            "clsgDtTm": "2020-11-16T05:00:00"
                        },
                        "untrInvstmtVal": 1259.900000,
                        "anulInvstmtRate": 4.1100,
                        "untrRedVal": 1224.960000,
                        "anulRedRate": 4.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-16T09:15:00",
                            "clsgDtTm": "2020-11-17T05:00:00"
                        },
                        "untrInvstmtVal": 1257.350000,
                        "anulInvstmtRate": 4.1200,
                        "untrRedVal": 1222.480000,
                        "anulRedRate": 4.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-17T09:15:00",
                            "clsgDtTm": "2020-11-18T05:00:00"
                        },
                        "untrInvstmtVal": 1263.660000,
                        "anulInvstmtRate": 4.1000,
                        "untrRedVal": 1228.620000,
                        "anulRedRate": 4.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-18T09:15:00",
                            "clsgDtTm": "2020-11-19T05:00:00"
                        },
                        "untrInvstmtVal": 1249.330000,
                        "anulInvstmtRate": 4.1500,
                        "untrRedVal": 1214.710000,
                        "anulRedRate": 4.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-19T09:15:00",
                            "clsgDtTm": "2020-11-20T05:00:00"
                        },
                        "untrInvstmtVal": 1240.980000,
                        "anulInvstmtRate": 4.1800,
                        "untrRedVal": 1206.600000,
                        "anulRedRate": 4.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-20T09:15:00",
                            "clsgDtTm": "2020-11-23T05:00:00"
                        },
                        "untrInvstmtVal": 1230.180000,
                        "anulInvstmtRate": 4.2200,
                        "untrRedVal": 1196.130000,
                        "anulRedRate": 4.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-23T09:15:00",
                            "clsgDtTm": "2020-11-24T05:00:00"
                        },
                        "untrInvstmtVal": 1219.110000,
                        "anulInvstmtRate": 4.2600,
                        "untrRedVal": 1185.380000,
                        "anulRedRate": 4.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-24T09:15:00",
                            "clsgDtTm": "2020-11-25T05:00:00"
                        },
                        "untrInvstmtVal": 1233.860000,
                        "anulInvstmtRate": 4.2100,
                        "untrRedVal": 1199.710000,
                        "anulRedRate": 4.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-25T09:15:00",
                            "clsgDtTm": "2020-11-26T05:00:00"
                        },
                        "untrInvstmtVal": 1250.150000,
                        "anulInvstmtRate": 4.1600,
                        "untrRedVal": 1215.530000,
                        "anulRedRate": 4.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-26T09:15:00",
                            "clsgDtTm": "2020-11-27T05:00:00"
                        },
                        "untrInvstmtVal": 1262.440000,
                        "anulInvstmtRate": 4.1200,
                        "untrRedVal": 1227.480000,
                        "anulRedRate": 4.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-27T09:15:00",
                            "clsgDtTm": "2020-11-30T05:00:00"
                        },
                        "untrInvstmtVal": 1284.490000,
                        "anulInvstmtRate": 4.0500,
                        "untrRedVal": 1248.900000,
                        "anulRedRate": 4.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-11-30T09:15:00",
                            "clsgDtTm": "2020-12-01T05:00:00"
                        },
                        "untrInvstmtVal": 1270.060000,
                        "anulInvstmtRate": 4.1000,
                        "untrRedVal": 1234.900000,
                        "anulRedRate": 4.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-01T09:15:00",
                            "clsgDtTm": "2020-12-02T05:00:00"
                        },
                        "untrInvstmtVal": 1306.810000,
                        "anulInvstmtRate": 3.9800,
                        "untrRedVal": 1270.590000,
                        "anulRedRate": 4.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-02T09:15:00",
                            "clsgDtTm": "2020-12-03T05:00:00"
                        },
                        "untrInvstmtVal": 1319.660000,
                        "anulInvstmtRate": 3.9400,
                        "untrRedVal": 1283.080000,
                        "anulRedRate": 4.0600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-03T09:15:00",
                            "clsgDtTm": "2020-12-04T05:00:00"
                        },
                        "untrInvstmtVal": 1361.070000,
                        "anulInvstmtRate": 3.8100,
                        "untrRedVal": 1323.300000,
                        "anulRedRate": 3.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-04T09:15:00",
                            "clsgDtTm": "2020-12-07T05:00:00"
                        },
                        "untrInvstmtVal": 1349.590000,
                        "anulInvstmtRate": 3.8500,
                        "untrRedVal": 1312.160000,
                        "anulRedRate": 3.9700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-07T09:15:00",
                            "clsgDtTm": "2020-12-08T05:00:00"
                        },
                        "untrInvstmtVal": 1362.870000,
                        "anulInvstmtRate": 3.8100,
                        "untrRedVal": 1325.060000,
                        "anulRedRate": 3.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-08T09:15:00",
                            "clsgDtTm": "2020-12-09T05:00:00"
                        },
                        "untrInvstmtVal": 1358.330000,
                        "anulInvstmtRate": 3.8300,
                        "untrRedVal": 1320.660000,
                        "anulRedRate": 3.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-09T09:15:00",
                            "clsgDtTm": "2020-12-10T05:00:00"
                        },
                        "untrInvstmtVal": 1355.750000,
                        "anulInvstmtRate": 3.8400,
                        "untrRedVal": 1318.170000,
                        "anulRedRate": 3.9600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-10T09:15:00",
                            "clsgDtTm": "2020-12-11T05:00:00"
                        },
                        "untrInvstmtVal": 1382.040000,
                        "anulInvstmtRate": 3.7600,
                        "untrRedVal": 1343.700000,
                        "anulRedRate": 3.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-11T09:15:00",
                            "clsgDtTm": "2020-12-14T05:00:00"
                        },
                        "untrInvstmtVal": 1403.080000,
                        "anulInvstmtRate": 3.7000,
                        "untrRedVal": 1364.140000,
                        "anulRedRate": 3.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-14T09:15:00",
                            "clsgDtTm": "2020-12-15T05:00:00"
                        },
                        "untrInvstmtVal": 1420.270000,
                        "anulInvstmtRate": 3.6500,
                        "untrRedVal": 1380.840000,
                        "anulRedRate": 3.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-15T09:15:00",
                            "clsgDtTm": "2020-12-16T05:00:00"
                        },
                        "untrInvstmtVal": 1451.400000,
                        "anulInvstmtRate": 3.5600,
                        "untrRedVal": 1411.080000,
                        "anulRedRate": 3.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-16T09:15:00",
                            "clsgDtTm": "2020-12-17T05:00:00"
                        },
                        "untrInvstmtVal": 1455.600000,
                        "anulInvstmtRate": 3.5500,
                        "untrRedVal": 1415.170000,
                        "anulRedRate": 3.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-17T09:15:00",
                            "clsgDtTm": "2020-12-18T05:00:00"
                        },
                        "untrInvstmtVal": 1473.600000,
                        "anulInvstmtRate": 3.5000,
                        "untrRedVal": 1432.650000,
                        "anulRedRate": 3.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-18T09:15:00",
                            "clsgDtTm": "2020-12-21T05:00:00"
                        },
                        "untrInvstmtVal": 1479.060000,
                        "anulInvstmtRate": 3.4900,
                        "untrRedVal": 1437.960000,
                        "anulRedRate": 3.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-21T09:15:00",
                            "clsgDtTm": "2020-12-22T05:00:00"
                        },
                        "untrInvstmtVal": 1490.330000,
                        "anulInvstmtRate": 3.4600,
                        "untrRedVal": 1448.910000,
                        "anulRedRate": 3.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-22T09:15:00",
                            "clsgDtTm": "2020-12-23T05:00:00"
                        },
                        "untrInvstmtVal": 1477.190000,
                        "anulInvstmtRate": 3.5000,
                        "untrRedVal": 1436.160000,
                        "anulRedRate": 3.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-23T09:15:00",
                            "clsgDtTm": "2020-12-28T05:00:00"
                        },
                        "untrInvstmtVal": 1487.240000,
                        "anulInvstmtRate": 3.4800,
                        "untrRedVal": 1445.940000,
                        "anulRedRate": 3.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-28T09:15:00",
                            "clsgDtTm": "2020-12-29T05:00:00"
                        },
                        "untrInvstmtVal": 1484.530000,
                        "anulInvstmtRate": 3.4900,
                        "untrRedVal": 1443.310000,
                        "anulRedRate": 3.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-29T09:15:00",
                            "clsgDtTm": "2020-12-30T05:00:00"
                        },
                        "untrInvstmtVal": 1513.470000,
                        "anulInvstmtRate": 3.4100,
                        "untrRedVal": 1471.430000,
                        "anulRedRate": 3.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2020-12-30T09:15:00",
                            "clsgDtTm": "2021-01-04T05:00:00"
                        },
                        "untrInvstmtVal": 1527.540000,
                        "anulInvstmtRate": 3.3800,
                        "untrRedVal": 0.0,
                        "anulRedRate": 0.0
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-04T09:15:00",
                            "clsgDtTm": "2021-01-05T05:00:00"
                        },
                        "untrInvstmtVal": 1517.610000,
                        "anulInvstmtRate": 3.4100,
                        "untrRedVal": 1475.470000,
                        "anulRedRate": 3.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-05T09:15:00",
                            "clsgDtTm": "2021-01-06T05:00:00"
                        },
                        "untrInvstmtVal": 1497.160000,
                        "anulInvstmtRate": 3.4700,
                        "untrRedVal": 1455.620000,
                        "anulRedRate": 3.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-06T09:15:00",
                            "clsgDtTm": "2021-01-07T05:00:00"
                        },
                        "untrInvstmtVal": 1480.490000,
                        "anulInvstmtRate": 3.5200,
                        "untrRedVal": 1439.430000,
                        "anulRedRate": 3.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-07T09:15:00",
                            "clsgDtTm": "2021-01-08T05:00:00"
                        },
                        "untrInvstmtVal": 1477.800000,
                        "anulInvstmtRate": 3.5300,
                        "untrRedVal": 1436.830000,
                        "anulRedRate": 3.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-08T09:15:00",
                            "clsgDtTm": "2021-01-11T05:00:00"
                        },
                        "untrInvstmtVal": 1472.800000,
                        "anulInvstmtRate": 3.5500,
                        "untrRedVal": 1431.980000,
                        "anulRedRate": 3.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-11T09:15:00",
                            "clsgDtTm": "2021-01-12T05:00:00"
                        },
                        "untrInvstmtVal": 1436.100000,
                        "anulInvstmtRate": 3.6600,
                        "untrRedVal": 1396.350000,
                        "anulRedRate": 3.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-12T09:15:00",
                            "clsgDtTm": "2021-01-13T05:00:00"
                        },
                        "untrInvstmtVal": 1452.260000,
                        "anulInvstmtRate": 3.6200,
                        "untrRedVal": 1412.050000,
                        "anulRedRate": 3.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-13T09:15:00",
                            "clsgDtTm": "2021-01-14T05:00:00"
                        },
                        "untrInvstmtVal": 1470.200000,
                        "anulInvstmtRate": 3.5700,
                        "untrRedVal": 1429.480000,
                        "anulRedRate": 3.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-14T09:15:00",
                            "clsgDtTm": "2021-01-15T05:00:00"
                        },
                        "untrInvstmtVal": 1488.370000,
                        "anulInvstmtRate": 3.5200,
                        "untrRedVal": 1447.140000,
                        "anulRedRate": 3.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-15T09:15:00",
                            "clsgDtTm": "2021-01-18T05:00:00"
                        },
                        "untrInvstmtVal": 1461.330000,
                        "anulInvstmtRate": 3.6000,
                        "untrRedVal": 1420.880000,
                        "anulRedRate": 3.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-18T09:15:00",
                            "clsgDtTm": "2021-01-19T05:00:00"
                        },
                        "untrInvstmtVal": 1471.960000,
                        "anulInvstmtRate": 3.5700,
                        "untrRedVal": 1431.220000,
                        "anulRedRate": 3.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-19T09:15:00",
                            "clsgDtTm": "2021-01-20T05:00:00"
                        },
                        "untrInvstmtVal": 1451.770000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1411.620000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-20T09:15:00",
                            "clsgDtTm": "2021-01-21T05:00:00"
                        },
                        "untrInvstmtVal": 1438.590000,
                        "anulInvstmtRate": 3.6700,
                        "untrRedVal": 1398.810000,
                        "anulRedRate": 3.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-21T09:15:00",
                            "clsgDtTm": "2021-01-22T05:00:00"
                        },
                        "untrInvstmtVal": 1418.880000,
                        "anulInvstmtRate": 3.7300,
                        "untrRedVal": 1379.690000,
                        "anulRedRate": 3.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-22T09:15:00",
                            "clsgDtTm": "2021-01-26T05:00:00"
                        },
                        "untrInvstmtVal": 1403.310000,
                        "anulInvstmtRate": 3.7800,
                        "untrRedVal": 1364.580000,
                        "anulRedRate": 3.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-26T09:15:00",
                            "clsgDtTm": "2021-01-27T05:00:00"
                        },
                        "untrInvstmtVal": 1416.810000,
                        "anulInvstmtRate": 3.7400,
                        "untrRedVal": 1377.690000,
                        "anulRedRate": 3.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-27T09:15:00",
                            "clsgDtTm": "2021-01-28T05:00:00"
                        },
                        "untrInvstmtVal": 1423.950000,
                        "anulInvstmtRate": 3.7200,
                        "untrRedVal": 1384.630000,
                        "anulRedRate": 3.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-28T09:15:00",
                            "clsgDtTm": "2021-01-29T05:00:00"
                        },
                        "untrInvstmtVal": 1454.550000,
                        "anulInvstmtRate": 3.6300,
                        "untrRedVal": 1414.360000,
                        "anulRedRate": 3.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-01-29T09:15:00",
                            "clsgDtTm": "2021-02-01T05:00:00"
                        },
                        "untrInvstmtVal": 1465.410000,
                        "anulInvstmtRate": 3.6000,
                        "untrRedVal": 1424.910000,
                        "anulRedRate": 3.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-01T09:15:00",
                            "clsgDtTm": "2021-02-02T05:00:00"
                        },
                        "untrInvstmtVal": 1479.520000,
                        "anulInvstmtRate": 3.5600,
                        "untrRedVal": 1438.630000,
                        "anulRedRate": 3.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-02T09:15:00",
                            "clsgDtTm": "2021-02-03T05:00:00"
                        },
                        "untrInvstmtVal": 1472.970000,
                        "anulInvstmtRate": 3.5800,
                        "untrRedVal": 1432.270000,
                        "anulRedRate": 3.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-03T09:15:00",
                            "clsgDtTm": "2021-02-04T05:00:00"
                        },
                        "untrInvstmtVal": 1511.680000,
                        "anulInvstmtRate": 3.4700,
                        "untrRedVal": 1469.880000,
                        "anulRedRate": 3.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-04T09:15:00",
                            "clsgDtTm": "2021-02-05T05:00:00"
                        },
                        "untrInvstmtVal": 1497.960000,
                        "anulInvstmtRate": 3.5100,
                        "untrRedVal": 1456.560000,
                        "anulRedRate": 3.6300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-05T09:15:00",
                            "clsgDtTm": "2021-02-08T05:00:00"
                        },
                        "untrInvstmtVal": 1488.140000,
                        "anulInvstmtRate": 3.5400,
                        "untrRedVal": 1447.020000,
                        "anulRedRate": 3.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-08T09:15:00",
                            "clsgDtTm": "2021-02-09T05:00:00"
                        },
                        "untrInvstmtVal": 1485.010000,
                        "anulInvstmtRate": 3.5500,
                        "untrRedVal": 1444.000000,
                        "anulRedRate": 3.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-09T09:15:00",
                            "clsgDtTm": "2021-02-10T05:00:00"
                        },
                        "untrInvstmtVal": 1467.510000,
                        "anulInvstmtRate": 3.6000,
                        "untrRedVal": 1427.010000,
                        "anulRedRate": 3.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-10T09:15:00",
                            "clsgDtTm": "2021-02-11T05:00:00"
                        },
                        "untrInvstmtVal": 1471.260000,
                        "anulInvstmtRate": 3.5900,
                        "untrRedVal": 1430.660000,
                        "anulRedRate": 3.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-11T09:15:00",
                            "clsgDtTm": "2021-02-12T05:00:00"
                        },
                        "untrInvstmtVal": 1475.030000,
                        "anulInvstmtRate": 3.5800,
                        "untrRedVal": 1434.320000,
                        "anulRedRate": 3.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-12T09:15:00",
                            "clsgDtTm": "2021-02-17T05:00:00"
                        },
                        "untrInvstmtVal": 1472.840000,
                        "anulInvstmtRate": 3.5900,
                        "untrRedVal": 1432.200000,
                        "anulRedRate": 3.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-17T09:15:00",
                            "clsgDtTm": "2021-02-18T05:00:00"
                        },
                        "untrInvstmtVal": 1456.310000,
                        "anulInvstmtRate": 3.6400,
                        "untrRedVal": 1416.160000,
                        "anulRedRate": 3.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-18T09:15:00",
                            "clsgDtTm": "2021-02-19T05:00:00"
                        },
                        "untrInvstmtVal": 1456.860000,
                        "anulInvstmtRate": 3.6400,
                        "untrRedVal": 1416.700000,
                        "anulRedRate": 3.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-19T09:15:00",
                            "clsgDtTm": "2021-02-22T05:00:00"
                        },
                        "untrInvstmtVal": 1454.700000,
                        "anulInvstmtRate": 3.6500,
                        "untrRedVal": 1414.610000,
                        "anulRedRate": 3.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-22T09:15:00",
                            "clsgDtTm": "2021-02-23T05:00:00"
                        },
                        "untrInvstmtVal": 1431.710000,
                        "anulInvstmtRate": 3.7200,
                        "untrRedVal": 1392.290000,
                        "anulRedRate": 3.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-23T09:15:00",
                            "clsgDtTm": "2021-02-24T05:00:00"
                        },
                        "untrInvstmtVal": 1415.690000,
                        "anulInvstmtRate": 3.7700,
                        "untrRedVal": 1376.730000,
                        "anulRedRate": 3.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-24T09:15:00",
                            "clsgDtTm": "2021-02-25T05:00:00"
                        },
                        "untrInvstmtVal": 1393.360000,
                        "anulInvstmtRate": 3.8400,
                        "untrRedVal": 1355.040000,
                        "anulRedRate": 3.9600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-25T09:15:00",
                            "clsgDtTm": "2021-02-26T05:00:00"
                        },
                        "untrInvstmtVal": 1349.290000,
                        "anulInvstmtRate": 3.9800,
                        "untrRedVal": 1312.240000,
                        "anulRedRate": 4.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-02-26T09:15:00",
                            "clsgDtTm": "2021-03-01T05:00:00"
                        },
                        "untrInvstmtVal": 1391.850000,
                        "anulInvstmtRate": 3.8500,
                        "untrRedVal": 1353.590000,
                        "anulRedRate": 3.9700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-01T09:15:00",
                            "clsgDtTm": "2021-03-02T05:00:00"
                        },
                        "untrInvstmtVal": 1376.300000,
                        "anulInvstmtRate": 3.9000,
                        "untrRedVal": 1338.500000,
                        "anulRedRate": 4.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-02T09:15:00",
                            "clsgDtTm": "2021-03-03T05:00:00"
                        },
                        "untrInvstmtVal": 1357.790000,
                        "anulInvstmtRate": 3.9600,
                        "untrRedVal": 1320.520000,
                        "anulRedRate": 4.0800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-03T09:15:00",
                            "clsgDtTm": "2021-03-04T05:00:00"
                        },
                        "untrInvstmtVal": 1374.170000,
                        "anulInvstmtRate": 3.9100,
                        "untrRedVal": 1336.440000,
                        "anulRedRate": 4.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-04T09:15:00",
                            "clsgDtTm": "2021-03-05T05:00:00"
                        },
                        "untrInvstmtVal": 1407.010000,
                        "anulInvstmtRate": 3.8100,
                        "untrRedVal": 1368.340000,
                        "anulRedRate": 3.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-05T09:15:00",
                            "clsgDtTm": "2021-03-08T05:00:00"
                        },
                        "untrInvstmtVal": 1431.300000,
                        "anulInvstmtRate": 3.7400,
                        "untrRedVal": 1391.950000,
                        "anulRedRate": 3.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-08T09:15:00",
                            "clsgDtTm": "2021-03-09T05:00:00"
                        },
                        "untrInvstmtVal": 1441.860000,
                        "anulInvstmtRate": 3.7100,
                        "untrRedVal": 1402.220000,
                        "anulRedRate": 3.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-09T09:15:00",
                            "clsgDtTm": "2021-03-10T05:00:00"
                        },
                        "untrInvstmtVal": 1389.790000,
                        "anulInvstmtRate": 3.8700,
                        "untrRedVal": 1351.640000,
                        "anulRedRate": 3.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-10T09:15:00",
                            "clsgDtTm": "2021-03-11T05:00:00"
                        },
                        "untrInvstmtVal": 1409.830000,
                        "anulInvstmtRate": 3.8100,
                        "untrRedVal": 1371.110000,
                        "anulRedRate": 3.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-11T09:15:00",
                            "clsgDtTm": "2021-03-12T05:00:00"
                        },
                        "untrInvstmtVal": 1429.370000,
                        "anulInvstmtRate": 3.7600,
                        "untrRedVal": 1390.100000,
                        "anulRedRate": 3.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-12T09:15:00",
                            "clsgDtTm": "2021-03-15T05:00:00"
                        },
                        "untrInvstmtVal": 1411.100000,
                        "anulInvstmtRate": 3.8200,
                        "untrRedVal": 1372.360000,
                        "anulRedRate": 3.9400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-15T09:15:00",
                            "clsgDtTm": "2021-03-16T05:00:00"
                        },
                        "untrInvstmtVal": 1424.870000,
                        "anulInvstmtRate": 3.7800,
                        "untrRedVal": 1385.750000,
                        "anulRedRate": 3.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-16T09:15:00",
                            "clsgDtTm": "2021-03-17T05:00:00"
                        },
                        "untrInvstmtVal": 1422.180000,
                        "anulInvstmtRate": 3.7900,
                        "untrRedVal": 1383.140000,
                        "anulRedRate": 3.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-17T09:15:00",
                            "clsgDtTm": "2021-03-18T05:00:00"
                        },
                        "untrInvstmtVal": 1422.790000,
                        "anulInvstmtRate": 3.7900,
                        "untrRedVal": 1383.740000,
                        "anulRedRate": 3.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-18T09:15:00",
                            "clsgDtTm": "2021-03-19T05:00:00"
                        },
                        "untrInvstmtVal": 1446.720000,
                        "anulInvstmtRate": 3.7200,
                        "untrRedVal": 1406.990000,
                        "anulRedRate": 3.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-19T09:15:00",
                            "clsgDtTm": "2021-03-22T05:00:00"
                        },
                        "untrInvstmtVal": 1401.880000,
                        "anulInvstmtRate": 3.8600,
                        "untrRedVal": 1363.440000,
                        "anulRedRate": 3.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-22T09:15:00",
                            "clsgDtTm": "2021-03-23T05:00:00"
                        },
                        "untrInvstmtVal": 1348.350000,
                        "anulInvstmtRate": 4.0300,
                        "untrRedVal": 1311.440000,
                        "anulRedRate": 4.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-23T09:15:00",
                            "clsgDtTm": "2021-03-24T05:00:00"
                        },
                        "untrInvstmtVal": 1318.100000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1282.070000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-24T09:15:00",
                            "clsgDtTm": "2021-03-25T05:00:00"
                        },
                        "untrInvstmtVal": 1324.800000,
                        "anulInvstmtRate": 4.1100,
                        "untrRedVal": 1288.580000,
                        "anulRedRate": 4.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-25T09:15:00",
                            "clsgDtTm": "2021-03-26T05:00:00"
                        },
                        "untrInvstmtVal": 1328.450000,
                        "anulInvstmtRate": 4.1000,
                        "untrRedVal": 1292.130000,
                        "anulRedRate": 4.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-26T09:15:00",
                            "clsgDtTm": "2021-03-29T05:00:00"
                        },
                        "untrInvstmtVal": 1343.100000,
                        "anulInvstmtRate": 4.0600,
                        "untrRedVal": 1306.380000,
                        "anulRedRate": 4.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-29T09:15:00",
                            "clsgDtTm": "2021-03-30T05:00:00"
                        },
                        "untrInvstmtVal": 1337.560000,
                        "anulInvstmtRate": 4.0800,
                        "untrRedVal": 1301.000000,
                        "anulRedRate": 4.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-30T09:15:00",
                            "clsgDtTm": "2021-03-31T05:00:00"
                        },
                        "untrInvstmtVal": 1347.530000,
                        "anulInvstmtRate": 4.0500,
                        "untrRedVal": 1310.690000,
                        "anulRedRate": 4.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-03-31T09:15:00",
                            "clsgDtTm": "2021-04-01T05:00:00"
                        },
                        "untrInvstmtVal": 1338.880000,
                        "anulInvstmtRate": 4.0800,
                        "untrRedVal": 1302.300000,
                        "anulRedRate": 4.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-01T09:15:00",
                            "clsgDtTm": "2021-04-05T05:00:00"
                        },
                        "untrInvstmtVal": 1353.330000,
                        "anulInvstmtRate": 4.0400,
                        "untrRedVal": 1316.340000,
                        "anulRedRate": 4.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-05T09:15:00",
                            "clsgDtTm": "2021-04-06T05:00:00"
                        },
                        "untrInvstmtVal": 1347.760000,
                        "anulInvstmtRate": 4.0600,
                        "untrRedVal": 1310.930000,
                        "anulRedRate": 4.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-06T09:15:00",
                            "clsgDtTm": "2021-04-07T05:00:00"
                        },
                        "untrInvstmtVal": 1332.940000,
                        "anulInvstmtRate": 4.1100,
                        "untrRedVal": 1296.550000,
                        "anulRedRate": 4.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-07T09:15:00",
                            "clsgDtTm": "2021-04-08T05:00:00"
                        },
                        "untrInvstmtVal": 1330.530000,
                        "anulInvstmtRate": 4.1200,
                        "untrRedVal": 1294.210000,
                        "anulRedRate": 4.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-08T09:15:00",
                            "clsgDtTm": "2021-04-09T05:00:00"
                        },
                        "untrInvstmtVal": 1352.870000,
                        "anulInvstmtRate": 4.0500,
                        "untrRedVal": 1315.920000,
                        "anulRedRate": 4.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-09T09:15:00",
                            "clsgDtTm": "2021-04-12T05:00:00"
                        },
                        "untrInvstmtVal": 1353.100000,
                        "anulInvstmtRate": 4.0500,
                        "untrRedVal": 1316.160000,
                        "anulRedRate": 4.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-12T09:15:00",
                            "clsgDtTm": "2021-04-13T05:00:00"
                        },
                        "untrInvstmtVal": 1347.490000,
                        "anulInvstmtRate": 4.0700,
                        "untrRedVal": 1310.700000,
                        "anulRedRate": 4.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-13T09:15:00",
                            "clsgDtTm": "2021-04-14T05:00:00"
                        },
                        "untrInvstmtVal": 1320.410000,
                        "anulInvstmtRate": 4.1600,
                        "untrRedVal": 1284.400000,
                        "anulRedRate": 4.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-14T09:15:00",
                            "clsgDtTm": "2021-04-15T05:00:00"
                        },
                        "untrInvstmtVal": 1311.920000,
                        "anulInvstmtRate": 4.1900,
                        "untrRedVal": 1276.160000,
                        "anulRedRate": 4.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-15T09:15:00",
                            "clsgDtTm": "2021-04-16T05:00:00"
                        },
                        "untrInvstmtVal": 1327.510000,
                        "anulInvstmtRate": 4.1400,
                        "untrRedVal": 1291.310000,
                        "anulRedRate": 4.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-16T09:15:00",
                            "clsgDtTm": "2021-04-19T05:00:00"
                        },
                        "untrInvstmtVal": 1346.740000,
                        "anulInvstmtRate": 4.0800,
                        "untrRedVal": 1310.000000,
                        "anulRedRate": 4.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-19T09:15:00",
                            "clsgDtTm": "2021-04-20T05:00:00"
                        },
                        "untrInvstmtVal": 1353.350000,
                        "anulInvstmtRate": 4.0600,
                        "untrRedVal": 1316.440000,
                        "anulRedRate": 4.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-20T09:15:00",
                            "clsgDtTm": "2021-04-22T05:00:00"
                        },
                        "untrInvstmtVal": 1316.990000,
                        "anulInvstmtRate": 4.1800,
                        "untrRedVal": 1281.110000,
                        "anulRedRate": 4.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-22T09:15:00",
                            "clsgDtTm": "2021-04-23T05:00:00"
                        },
                        "untrInvstmtVal": 1329.570000,
                        "anulInvstmtRate": 4.1400,
                        "untrRedVal": 1293.340000,
                        "anulRedRate": 4.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-23T09:15:00",
                            "clsgDtTm": "2021-04-26T05:00:00"
                        },
                        "untrInvstmtVal": 1345.710000,
                        "anulInvstmtRate": 4.0900,
                        "untrRedVal": 1309.030000,
                        "anulRedRate": 4.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-26T09:15:00",
                            "clsgDtTm": "2021-04-27T05:00:00"
                        },
                        "untrInvstmtVal": 1361.700000,
                        "anulInvstmtRate": 4.0400,
                        "untrRedVal": 1324.570000,
                        "anulRedRate": 4.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-27T09:15:00",
                            "clsgDtTm": "2021-04-28T05:00:00"
                        },
                        "untrInvstmtVal": 1393.860000,
                        "anulInvstmtRate": 3.9400,
                        "untrRedVal": 1355.830000,
                        "anulRedRate": 4.0600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-28T09:15:00",
                            "clsgDtTm": "2021-04-29T05:00:00"
                        },
                        "untrInvstmtVal": 1384.000000,
                        "anulInvstmtRate": 3.9700,
                        "untrRedVal": 1346.250000,
                        "anulRedRate": 4.0900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-29T09:15:00",
                            "clsgDtTm": "2021-04-30T05:00:00"
                        },
                        "untrInvstmtVal": 1384.340000,
                        "anulInvstmtRate": 3.9700,
                        "untrRedVal": 1346.600000,
                        "anulRedRate": 4.0900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-04-30T09:15:00",
                            "clsgDtTm": "2021-05-03T05:00:00"
                        },
                        "untrInvstmtVal": 1372.250000,
                        "anulInvstmtRate": 4.0100,
                        "untrRedVal": 1334.850000,
                        "anulRedRate": 4.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-03T09:15:00",
                            "clsgDtTm": "2021-05-04T05:00:00"
                        },
                        "untrInvstmtVal": 1326.010000,
                        "anulInvstmtRate": 4.1600,
                        "untrRedVal": 1289.930000,
                        "anulRedRate": 4.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-04T09:15:00",
                            "clsgDtTm": "2021-05-05T05:00:00"
                        },
                        "untrInvstmtVal": 1329.410000,
                        "anulInvstmtRate": 4.1500,
                        "untrRedVal": 1293.230000,
                        "anulRedRate": 4.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-05T09:15:00",
                            "clsgDtTm": "2021-05-06T05:00:00"
                        },
                        "untrInvstmtVal": 1317.580000,
                        "anulInvstmtRate": 4.1900,
                        "untrRedVal": 1281.750000,
                        "anulRedRate": 4.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-06T09:15:00",
                            "clsgDtTm": "2021-05-07T05:00:00"
                        },
                        "untrInvstmtVal": 1308.870000,
                        "anulInvstmtRate": 4.2200,
                        "untrRedVal": 1273.290000,
                        "anulRedRate": 4.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-07T09:15:00",
                            "clsgDtTm": "2021-05-10T05:00:00"
                        },
                        "untrInvstmtVal": 1315.490000,
                        "anulInvstmtRate": 4.2000,
                        "untrRedVal": 1279.730000,
                        "anulRedRate": 4.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-10T09:15:00",
                            "clsgDtTm": "2021-05-11T05:00:00"
                        },
                        "untrInvstmtVal": 1315.830000,
                        "anulInvstmtRate": 4.2000,
                        "untrRedVal": 1280.070000,
                        "anulRedRate": 4.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-11T09:15:00",
                            "clsgDtTm": "2021-05-12T05:00:00"
                        },
                        "untrInvstmtVal": 1325.510000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1289.480000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-12T09:15:00",
                            "clsgDtTm": "2021-05-13T05:00:00"
                        },
                        "untrInvstmtVal": 1310.730000,
                        "anulInvstmtRate": 4.2200,
                        "untrRedVal": 1275.120000,
                        "anulRedRate": 4.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-13T09:15:00",
                            "clsgDtTm": "2021-05-14T05:00:00"
                        },
                        "untrInvstmtVal": 1317.110000,
                        "anulInvstmtRate": 4.2000,
                        "untrRedVal": 1281.330000,
                        "anulRedRate": 4.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-14T09:15:00",
                            "clsgDtTm": "2021-05-17T05:00:00"
                        },
                        "untrInvstmtVal": 1327.170000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1291.110000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-17T09:15:00",
                            "clsgDtTm": "2021-05-18T05:00:00"
                        },
                        "untrInvstmtVal": 1315.540000,
                        "anulInvstmtRate": 4.2100,
                        "untrRedVal": 1279.820000,
                        "anulRedRate": 4.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-18T09:15:00",
                            "clsgDtTm": "2021-05-19T05:00:00"
                        },
                        "untrInvstmtVal": 1313.040000,
                        "anulInvstmtRate": 4.2200,
                        "untrRedVal": 1277.390000,
                        "anulRedRate": 4.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-19T09:15:00",
                            "clsgDtTm": "2021-05-20T05:00:00"
                        },
                        "untrInvstmtVal": 1298.570000,
                        "anulInvstmtRate": 4.2700,
                        "untrRedVal": 1263.340000,
                        "anulRedRate": 4.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-20T09:15:00",
                            "clsgDtTm": "2021-05-21T05:00:00"
                        },
                        "untrInvstmtVal": 1314.060000,
                        "anulInvstmtRate": 4.2200,
                        "untrRedVal": 1278.400000,
                        "anulRedRate": 4.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-21T09:15:00",
                            "clsgDtTm": "2021-05-24T05:00:00"
                        },
                        "untrInvstmtVal": 1321.210000,
                        "anulInvstmtRate": 4.2000,
                        "untrRedVal": 1285.360000,
                        "anulRedRate": 4.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-24T09:15:00",
                            "clsgDtTm": "2021-05-25T05:00:00"
                        },
                        "untrInvstmtVal": 1318.700000,
                        "anulInvstmtRate": 4.2100,
                        "untrRedVal": 1282.920000,
                        "anulRedRate": 4.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-25T09:15:00",
                            "clsgDtTm": "2021-05-26T05:00:00"
                        },
                        "untrInvstmtVal": 1307.160000,
                        "anulInvstmtRate": 4.2500,
                        "untrRedVal": 1271.720000,
                        "anulRedRate": 4.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-26T09:15:00",
                            "clsgDtTm": "2021-05-27T05:00:00"
                        },
                        "untrInvstmtVal": 1316.750000,
                        "anulInvstmtRate": 4.2200,
                        "untrRedVal": 1281.040000,
                        "anulRedRate": 4.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-27T09:15:00",
                            "clsgDtTm": "2021-05-28T05:00:00"
                        },
                        "untrInvstmtVal": 1329.400000,
                        "anulInvstmtRate": 4.1800,
                        "untrRedVal": 1293.340000,
                        "anulRedRate": 4.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-28T09:15:00",
                            "clsgDtTm": "2021-05-31T05:00:00"
                        },
                        "untrInvstmtVal": 1348.960000,
                        "anulInvstmtRate": 4.1200,
                        "untrRedVal": 1312.350000,
                        "anulRedRate": 4.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-05-31T09:15:00",
                            "clsgDtTm": "2021-06-01T05:00:00"
                        },
                        "untrInvstmtVal": 1334.100000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1297.920000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-01T09:15:00",
                            "clsgDtTm": "2021-06-02T05:00:00"
                        },
                        "untrInvstmtVal": 1337.690000,
                        "anulInvstmtRate": 4.1600,
                        "untrRedVal": 1301.410000,
                        "anulRedRate": 4.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-02T09:15:00",
                            "clsgDtTm": "2021-06-04T05:00:00"
                        },
                        "untrInvstmtVal": 1357.050000,
                        "anulInvstmtRate": 4.1000,
                        "untrRedVal": 1320.240000,
                        "anulRedRate": 4.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-04T09:15:00",
                            "clsgDtTm": "2021-06-07T05:00:00"
                        },
                        "untrInvstmtVal": 1380.180000,
                        "anulInvstmtRate": 4.0300,
                        "untrRedVal": 1342.720000,
                        "anulRedRate": 4.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-07T09:15:00",
                            "clsgDtTm": "2021-06-08T05:00:00"
                        },
                        "untrInvstmtVal": 1368.100000,
                        "anulInvstmtRate": 4.0700,
                        "untrRedVal": 1330.990000,
                        "anulRedRate": 4.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-08T09:15:00",
                            "clsgDtTm": "2021-06-09T05:00:00"
                        },
                        "untrInvstmtVal": 1374.920000,
                        "anulInvstmtRate": 4.0500,
                        "untrRedVal": 1337.620000,
                        "anulRedRate": 4.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-09T09:15:00",
                            "clsgDtTm": "2021-06-10T05:00:00"
                        },
                        "untrInvstmtVal": 1379.990000,
                        "anulInvstmtRate": 4.0400,
                        "untrRedVal": 1342.550000,
                        "anulRedRate": 4.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-10T09:15:00",
                            "clsgDtTm": "2021-06-11T05:00:00"
                        },
                        "untrInvstmtVal": 1367.970000,
                        "anulInvstmtRate": 4.0800,
                        "untrRedVal": 1330.880000,
                        "anulRedRate": 4.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-11T09:15:00",
                            "clsgDtTm": "2021-06-14T05:00:00"
                        },
                        "untrInvstmtVal": 1353.690000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1317.010000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-14T09:15:00",
                            "clsgDtTm": "2021-06-15T05:00:00"
                        },
                        "untrInvstmtVal": 1360.490000,
                        "anulInvstmtRate": 4.1100,
                        "untrRedVal": 1323.630000,
                        "anulRedRate": 4.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-15T09:15:00",
                            "clsgDtTm": "2021-06-16T05:00:00"
                        },
                        "untrInvstmtVal": 1357.850000,
                        "anulInvstmtRate": 4.1200,
                        "untrRedVal": 1321.060000,
                        "anulRedRate": 4.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-16T09:15:00",
                            "clsgDtTm": "2021-06-17T05:00:00"
                        },
                        "untrInvstmtVal": 1370.810000,
                        "anulInvstmtRate": 4.0800,
                        "untrRedVal": 1333.670000,
                        "anulRedRate": 4.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-17T09:15:00",
                            "clsgDtTm": "2021-06-18T05:00:00"
                        },
                        "untrInvstmtVal": 1365.020000,
                        "anulInvstmtRate": 4.1000,
                        "untrRedVal": 1328.050000,
                        "anulRedRate": 4.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-18T09:15:00",
                            "clsgDtTm": "2021-06-21T05:00:00"
                        },
                        "untrInvstmtVal": 1332.050000,
                        "anulInvstmtRate": 4.2100,
                        "untrRedVal": 1296.020000,
                        "anulRedRate": 4.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-21T09:15:00",
                            "clsgDtTm": "2021-06-22T05:00:00"
                        },
                        "untrInvstmtVal": 1329.480000,
                        "anulInvstmtRate": 4.2200,
                        "untrRedVal": 1293.520000,
                        "anulRedRate": 4.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-22T09:15:00",
                            "clsgDtTm": "2021-06-23T05:00:00"
                        },
                        "untrInvstmtVal": 1332.980000,
                        "anulInvstmtRate": 4.2100,
                        "untrRedVal": 1296.940000,
                        "anulRedRate": 4.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-23T09:15:00",
                            "clsgDtTm": "2021-06-24T05:00:00"
                        },
                        "untrInvstmtVal": 1330.410000,
                        "anulInvstmtRate": 4.2200,
                        "untrRedVal": 1294.440000,
                        "anulRedRate": 4.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-24T09:15:00",
                            "clsgDtTm": "2021-06-25T05:00:00"
                        },
                        "untrInvstmtVal": 1346.170000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1309.760000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-25T09:15:00",
                            "clsgDtTm": "2021-06-28T05:00:00"
                        },
                        "untrInvstmtVal": 1365.750000,
                        "anulInvstmtRate": 4.1100,
                        "untrRedVal": 1328.800000,
                        "anulRedRate": 4.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-28T09:15:00",
                            "clsgDtTm": "2021-06-29T05:00:00"
                        },
                        "untrInvstmtVal": 1357.010000,
                        "anulInvstmtRate": 4.1400,
                        "untrRedVal": 1320.310000,
                        "anulRedRate": 4.2600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-29T09:15:00",
                            "clsgDtTm": "2021-06-30T05:00:00"
                        },
                        "untrInvstmtVal": 1373.090000,
                        "anulInvstmtRate": 4.0900,
                        "untrRedVal": 1335.950000,
                        "anulRedRate": 4.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-06-30T09:15:00",
                            "clsgDtTm": "2021-07-01T05:00:00"
                        },
                        "untrInvstmtVal": 1361.070000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1324.280000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-01T09:15:00",
                            "clsgDtTm": "2021-07-02T05:00:00"
                        },
                        "untrInvstmtVal": 1361.550000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1324.750000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-02T09:15:00",
                            "clsgDtTm": "2021-07-05T05:00:00"
                        },
                        "untrInvstmtVal": 1371.930000,
                        "anulInvstmtRate": 4.1000,
                        "untrRedVal": 1334.840000,
                        "anulRedRate": 4.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-05T09:15:00",
                            "clsgDtTm": "2021-07-06T05:00:00"
                        },
                        "untrInvstmtVal": 1375.560000,
                        "anulInvstmtRate": 4.0900,
                        "untrRedVal": 1338.370000,
                        "anulRedRate": 4.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-06T09:15:00",
                            "clsgDtTm": "2021-07-07T05:00:00"
                        },
                        "untrInvstmtVal": 1363.520000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1326.680000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-07T09:15:00",
                            "clsgDtTm": "2021-07-08T05:00:00"
                        },
                        "untrInvstmtVal": 1364.010000,
                        "anulInvstmtRate": 4.1300,
                        "untrRedVal": 1327.160000,
                        "anulRedRate": 4.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-08T09:15:00",
                            "clsgDtTm": "2021-07-12T05:00:00"
                        },
                        "untrInvstmtVal": 1368.010000,
                        "anulInvstmtRate": 4.1200,
                        "untrRedVal": 1331.060000,
                        "anulRedRate": 4.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-12T09:15:00",
                            "clsgDtTm": "2021-07-13T05:00:00"
                        },
                        "untrInvstmtVal": 1356.030000,
                        "anulInvstmtRate": 4.1600,
                        "untrRedVal": 1319.430000,
                        "anulRedRate": 4.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-13T09:15:00",
                            "clsgDtTm": "2021-07-14T05:00:00"
                        },
                        "untrInvstmtVal": 1335.010000,
                        "anulInvstmtRate": 4.2300,
                        "untrRedVal": 1299.000000,
                        "anulRedRate": 4.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-14T09:15:00",
                            "clsgDtTm": "2021-07-15T05:00:00"
                        },
                        "untrInvstmtVal": 1350.770000,
                        "anulInvstmtRate": 4.1800,
                        "untrRedVal": 1314.330000,
                        "anulRedRate": 4.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-15T09:15:00",
                            "clsgDtTm": "2021-07-16T05:00:00"
                        },
                        "untrInvstmtVal": 1354.420000,
                        "anulInvstmtRate": 4.1700,
                        "untrRedVal": 1317.880000,
                        "anulRedRate": 4.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-16T09:15:00",
                            "clsgDtTm": "2021-07-19T05:00:00"
                        },
                        "untrInvstmtVal": 1374.330000,
                        "anulInvstmtRate": 4.1100,
                        "untrRedVal": 1337.240000,
                        "anulRedRate": 4.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-19T09:15:00",
                            "clsgDtTm": "2021-07-20T05:00:00"
                        },
                        "untrInvstmtVal": 1378.040000,
                        "anulInvstmtRate": 4.1000,
                        "untrRedVal": 1340.850000,
                        "anulRedRate": 4.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-20T09:15:00",
                            "clsgDtTm": "2021-07-21T05:00:00"
                        },
                        "untrInvstmtVal": 1381.750000,
                        "anulInvstmtRate": 4.0900,
                        "untrRedVal": 1344.460000,
                        "anulRedRate": 4.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-21T09:15:00",
                            "clsgDtTm": "2021-07-22T05:00:00"
                        },
                        "untrInvstmtVal": 1385.470000,
                        "anulInvstmtRate": 4.0800,
                        "untrRedVal": 1348.090000,
                        "anulRedRate": 4.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-22T09:15:00",
                            "clsgDtTm": "2021-07-23T05:00:00"
                        },
                        "untrInvstmtVal": 1389.200000,
                        "anulInvstmtRate": 4.0700,
                        "untrRedVal": 1351.720000,
                        "anulRedRate": 4.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-23T09:15:00",
                            "clsgDtTm": "2021-07-26T05:00:00"
                        },
                        "untrInvstmtVal": 1380.990000,
                        "anulInvstmtRate": 4.1000,
                        "untrRedVal": 1343.750000,
                        "anulRedRate": 4.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-26T09:15:00",
                            "clsgDtTm": "2021-07-27T05:00:00"
                        },
                        "untrInvstmtVal": 1382.350000,
                        "anulInvstmtRate": 4.1000,
                        "untrRedVal": 1345.080000,
                        "anulRedRate": 4.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-27T09:15:00",
                            "clsgDtTm": "2021-07-28T05:00:00"
                        },
                        "untrInvstmtVal": 1351.840000,
                        "anulInvstmtRate": 4.2000,
                        "untrRedVal": 1315.430000,
                        "anulRedRate": 4.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-28T09:15:00",
                            "clsgDtTm": "2021-07-29T05:00:00"
                        },
                        "untrInvstmtVal": 1343.260000,
                        "anulInvstmtRate": 4.2300,
                        "untrRedVal": 1307.100000,
                        "anulRedRate": 4.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-29T09:15:00",
                            "clsgDtTm": "2021-07-30T05:00:00"
                        },
                        "untrInvstmtVal": 1350.010000,
                        "anulInvstmtRate": 4.2100,
                        "untrRedVal": 1313.670000,
                        "anulRedRate": 4.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-07-30T09:15:00",
                            "clsgDtTm": "2021-08-02T05:00:00"
                        },
                        "untrInvstmtVal": 1327.080000,
                        "anulInvstmtRate": 4.2900,
                        "untrRedVal": 1291.380000,
                        "anulRedRate": 4.4100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-02T09:15:00",
                            "clsgDtTm": "2021-08-03T05:00:00"
                        },
                        "untrInvstmtVal": 1318.670000,
                        "anulInvstmtRate": 4.3200,
                        "untrRedVal": 1283.220000,
                        "anulRedRate": 4.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-03T09:15:00",
                            "clsgDtTm": "2021-08-04T05:00:00"
                        },
                        "untrInvstmtVal": 1316.300000,
                        "anulInvstmtRate": 4.3300,
                        "untrRedVal": 1280.920000,
                        "anulRedRate": 4.4500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-04T09:15:00",
                            "clsgDtTm": "2021-08-05T05:00:00"
                        },
                        "untrInvstmtVal": 1338.030000,
                        "anulInvstmtRate": 4.2600,
                        "untrRedVal": 1302.040000,
                        "anulRedRate": 4.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-05T09:15:00",
                            "clsgDtTm": "2021-08-06T05:00:00"
                        },
                        "untrInvstmtVal": 1302.650000,
                        "anulInvstmtRate": 4.3800,
                        "untrRedVal": 1267.670000,
                        "anulRedRate": 4.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-06T09:15:00",
                            "clsgDtTm": "2021-08-09T05:00:00"
                        },
                        "untrInvstmtVal": 1295.190000,
                        "anulInvstmtRate": 4.4100,
                        "untrRedVal": 1260.420000,
                        "anulRedRate": 4.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-09T09:15:00",
                            "clsgDtTm": "2021-08-10T05:00:00"
                        },
                        "untrInvstmtVal": 1298.750000,
                        "anulInvstmtRate": 4.4000,
                        "untrRedVal": 1263.880000,
                        "anulRedRate": 4.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-10T09:15:00",
                            "clsgDtTm": "2021-08-11T05:00:00"
                        },
                        "untrInvstmtVal": 1273.440000,
                        "anulInvstmtRate": 4.4900,
                        "untrRedVal": 1239.290000,
                        "anulRedRate": 4.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-11T09:15:00",
                            "clsgDtTm": "2021-08-12T05:00:00"
                        },
                        "untrInvstmtVal": 1279.840000,
                        "anulInvstmtRate": 4.4700,
                        "untrRedVal": 1245.520000,
                        "anulRedRate": 4.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-12T09:15:00",
                            "clsgDtTm": "2021-08-13T05:00:00"
                        },
                        "untrInvstmtVal": 1266.030000,
                        "anulInvstmtRate": 4.5200,
                        "untrRedVal": 1232.100000,
                        "anulRedRate": 4.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-13T09:15:00",
                            "clsgDtTm": "2021-08-16T05:00:00"
                        },
                        "untrInvstmtVal": 1233.300000,
                        "anulInvstmtRate": 4.6400,
                        "untrRedVal": 1200.290000,
                        "anulRedRate": 4.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-16T09:15:00",
                            "clsgDtTm": "2021-08-17T05:00:00"
                        },
                        "untrInvstmtVal": 1228.180000,
                        "anulInvstmtRate": 4.6600,
                        "untrRedVal": 1195.310000,
                        "anulRedRate": 4.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-17T09:15:00",
                            "clsgDtTm": "2021-08-18T05:00:00"
                        },
                        "untrInvstmtVal": 1193.050000,
                        "anulInvstmtRate": 4.7900,
                        "untrRedVal": 1161.180000,
                        "anulRedRate": 4.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-18T09:10:00",
                            "clsgDtTm": "2021-08-19T05:00:00"
                        },
                        "untrInvstmtVal": 1158.980000,
                        "anulInvstmtRate": 4.9200,
                        "untrRedVal": 1128.060000,
                        "anulRedRate": 5.0400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-19T09:15:00",
                            "clsgDtTm": "2021-08-20T05:00:00"
                        },
                        "untrInvstmtVal": 1162.030000,
                        "anulInvstmtRate": 4.9100,
                        "untrRedVal": 1131.030000,
                        "anulRedRate": 5.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-20T09:15:00",
                            "clsgDtTm": "2021-08-23T05:00:00"
                        },
                        "untrInvstmtVal": 1192.080000,
                        "anulInvstmtRate": 4.8000,
                        "untrRedVal": 1160.250000,
                        "anulRedRate": 4.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-23T09:15:00",
                            "clsgDtTm": "2021-08-24T05:00:00"
                        },
                        "untrInvstmtVal": 1181.800000,
                        "anulInvstmtRate": 4.8400,
                        "untrRedVal": 1150.260000,
                        "anulRedRate": 4.9600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-24T09:15:00",
                            "clsgDtTm": "2021-08-25T05:00:00"
                        },
                        "untrInvstmtVal": 1220.180000,
                        "anulInvstmtRate": 4.7000,
                        "untrRedVal": 1187.570000,
                        "anulRedRate": 4.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-25T09:25:00",
                            "clsgDtTm": "2021-08-26T05:00:00"
                        },
                        "untrInvstmtVal": 1234.480000,
                        "anulInvstmtRate": 4.6500,
                        "untrRedVal": 1201.480000,
                        "anulRedRate": 4.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-26T09:25:00",
                            "clsgDtTm": "2021-08-27T05:00:00"
                        },
                        "untrInvstmtVal": 1249.470000,
                        "anulInvstmtRate": 4.6000,
                        "untrRedVal": 1216.070000,
                        "anulRedRate": 4.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-27T09:25:00",
                            "clsgDtTm": "2021-08-30T05:00:00"
                        },
                        "untrInvstmtVal": 1259.000000,
                        "anulInvstmtRate": 4.5700,
                        "untrRedVal": 1225.330000,
                        "anulRedRate": 4.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-30T09:25:00",
                            "clsgDtTm": "2021-08-31T05:00:00"
                        },
                        "untrInvstmtVal": 1262.340000,
                        "anulInvstmtRate": 4.5600,
                        "untrRedVal": 1228.590000,
                        "anulRedRate": 4.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-08-31T09:20:00",
                            "clsgDtTm": "2021-09-01T05:00:00"
                        },
                        "untrInvstmtVal": 1243.020000,
                        "anulInvstmtRate": 4.6300,
                        "untrRedVal": 1209.810000,
                        "anulRedRate": 4.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-01T09:25:00",
                            "clsgDtTm": "2021-09-02T05:00:00"
                        },
                        "untrInvstmtVal": 1243.510000,
                        "anulInvstmtRate": 4.6300,
                        "untrRedVal": 1210.290000,
                        "anulRedRate": 4.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-02T09:25:00",
                            "clsgDtTm": "2021-09-03T05:00:00"
                        },
                        "untrInvstmtVal": 1246.800000,
                        "anulInvstmtRate": 4.6200,
                        "untrRedVal": 1213.510000,
                        "anulRedRate": 4.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-03T09:25:00",
                            "clsgDtTm": "2021-09-06T05:00:00"
                        },
                        "untrInvstmtVal": 1222.740000,
                        "anulInvstmtRate": 4.7100,
                        "untrRedVal": 1190.120000,
                        "anulRedRate": 4.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-06T09:25:00",
                            "clsgDtTm": "2021-09-08T05:00:00"
                        },
                        "untrInvstmtVal": 1226.250000,
                        "anulInvstmtRate": 4.7000,
                        "untrRedVal": 1193.530000,
                        "anulRedRate": 4.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-08T09:25:00",
                            "clsgDtTm": "2021-09-09T05:00:00"
                        },
                        "untrInvstmtVal": 1196.700000,
                        "anulInvstmtRate": 4.8100,
                        "untrRedVal": 1164.810000,
                        "anulRedRate": 4.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-09T09:20:00",
                            "clsgDtTm": "2021-09-10T05:00:00"
                        },
                        "untrInvstmtVal": 1221.080000,
                        "anulInvstmtRate": 4.7300,
                        "untrRedVal": 1188.520000,
                        "anulRedRate": 4.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-10T09:20:00",
                            "clsgDtTm": "2021-09-13T05:00:00"
                        },
                        "untrInvstmtVal": 1208.640000,
                        "anulInvstmtRate": 4.7800,
                        "untrRedVal": 1176.430000,
                        "anulRedRate": 4.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-13T09:25:00",
                            "clsgDtTm": "2021-09-14T05:00:00"
                        },
                        "untrInvstmtVal": 1233.970000,
                        "anulInvstmtRate": 4.6900,
                        "untrRedVal": 1201.060000,
                        "anulRedRate": 4.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-14T09:25:00",
                            "clsgDtTm": "2021-09-15T05:00:00"
                        },
                        "untrInvstmtVal": 1231.760000,
                        "anulInvstmtRate": 4.7000,
                        "untrRedVal": 1198.920000,
                        "anulRedRate": 4.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-15T09:25:00",
                            "clsgDtTm": "2021-09-16T05:00:00"
                        },
                        "untrInvstmtVal": 1224.090000,
                        "anulInvstmtRate": 4.7300,
                        "untrRedVal": 1191.470000,
                        "anulRedRate": 4.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-16T09:25:00",
                            "clsgDtTm": "2021-09-17T05:00:00"
                        },
                        "untrInvstmtVal": 1233.010000,
                        "anulInvstmtRate": 4.7000,
                        "untrRedVal": 1200.160000,
                        "anulRedRate": 4.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-17T09:25:00",
                            "clsgDtTm": "2021-09-20T05:00:00"
                        },
                        "untrInvstmtVal": 1212.430000,
                        "anulInvstmtRate": 4.7800,
                        "untrRedVal": 1180.140000,
                        "anulRedRate": 4.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-20T09:25:00",
                            "clsgDtTm": "2021-09-21T05:00:00"
                        },
                        "untrInvstmtVal": 1218.520000,
                        "anulInvstmtRate": 4.7600,
                        "untrRedVal": 1186.070000,
                        "anulRedRate": 4.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-21T09:25:00",
                            "clsgDtTm": "2021-09-22T05:00:00"
                        },
                        "untrInvstmtVal": 1227.400000,
                        "anulInvstmtRate": 4.7300,
                        "untrRedVal": 1194.720000,
                        "anulRedRate": 4.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-22T09:25:00",
                            "clsgDtTm": "2021-09-23T05:00:00"
                        },
                        "untrInvstmtVal": 1236.350000,
                        "anulInvstmtRate": 4.7000,
                        "untrRedVal": 1203.420000,
                        "anulRedRate": 4.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-23T09:25:00",
                            "clsgDtTm": "2021-09-24T05:00:00"
                        },
                        "untrInvstmtVal": 1220.390000,
                        "anulInvstmtRate": 4.7600,
                        "untrRedVal": 1187.920000,
                        "anulRedRate": 4.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-24T09:25:00",
                            "clsgDtTm": "2021-09-27T05:00:00"
                        },
                        "untrInvstmtVal": 1202.750000,
                        "anulInvstmtRate": 4.8300,
                        "untrRedVal": 1170.770000,
                        "anulRedRate": 4.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-27T09:25:00",
                            "clsgDtTm": "2021-09-28T05:00:00"
                        },
                        "untrInvstmtVal": 1193.830000,
                        "anulInvstmtRate": 4.8700,
                        "untrRedVal": 1162.110000,
                        "anulRedRate": 4.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-28T09:25:00",
                            "clsgDtTm": "2021-09-29T05:00:00"
                        },
                        "untrInvstmtVal": 1194.550000,
                        "anulInvstmtRate": 4.8700,
                        "untrRedVal": 1162.800000,
                        "anulRedRate": 4.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-29T09:25:00",
                            "clsgDtTm": "2021-09-30T05:00:00"
                        },
                        "untrInvstmtVal": 1195.260000,
                        "anulInvstmtRate": 4.8700,
                        "untrRedVal": 1163.500000,
                        "anulRedRate": 4.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-09-30T09:25:00",
                            "clsgDtTm": "2021-10-01T05:00:00"
                        },
                        "untrInvstmtVal": 1190.610000,
                        "anulInvstmtRate": 4.8900,
                        "untrRedVal": 1158.990000,
                        "anulRedRate": 5.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-01T09:25:00",
                            "clsgDtTm": "2021-10-04T05:00:00"
                        },
                        "untrInvstmtVal": 1181.640000,
                        "anulInvstmtRate": 4.9300,
                        "untrRedVal": 1150.280000,
                        "anulRedRate": 5.0500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-04T09:25:00",
                            "clsgDtTm": "2021-10-05T05:00:00"
                        },
                        "untrInvstmtVal": 1187.670000,
                        "anulInvstmtRate": 4.9100,
                        "untrRedVal": 1156.140000,
                        "anulRedRate": 5.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-05T09:25:00",
                            "clsgDtTm": "2021-10-06T05:00:00"
                        },
                        "untrInvstmtVal": 1177.770000,
                        "anulInvstmtRate": 4.9500,
                        "untrRedVal": 1146.520000,
                        "anulRedRate": 5.0700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-06T09:25:00",
                            "clsgDtTm": "2021-10-07T05:00:00"
                        },
                        "untrInvstmtVal": 1183.770000,
                        "anulInvstmtRate": 4.9300,
                        "untrRedVal": 1152.360000,
                        "anulRedRate": 5.0500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-07T09:25:00",
                            "clsgDtTm": "2021-10-08T05:00:00"
                        },
                        "untrInvstmtVal": 1173.910000,
                        "anulInvstmtRate": 4.9700,
                        "untrRedVal": 1142.780000,
                        "anulRedRate": 5.0900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-08T09:25:00",
                            "clsgDtTm": "2021-10-11T05:00:00"
                        },
                        "untrInvstmtVal": 1188.100000,
                        "anulInvstmtRate": 4.9200,
                        "untrRedVal": 1156.590000,
                        "anulRedRate": 5.0400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-11T09:25:00",
                            "clsgDtTm": "2021-10-13T05:00:00"
                        },
                        "untrInvstmtVal": 1170.740000,
                        "anulInvstmtRate": 4.9900,
                        "untrRedVal": 1139.710000,
                        "anulRedRate": 5.1100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-13T09:25:00",
                            "clsgDtTm": "2021-10-14T05:00:00"
                        },
                        "untrInvstmtVal": 1171.410000,
                        "anulInvstmtRate": 4.9900,
                        "untrRedVal": 1140.370000,
                        "anulRedRate": 5.1100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-14T09:25:00",
                            "clsgDtTm": "2021-10-15T05:00:00"
                        },
                        "untrInvstmtVal": 1172.090000,
                        "anulInvstmtRate": 4.9900,
                        "untrRedVal": 1141.040000,
                        "anulRedRate": 5.1100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-15T09:25:00",
                            "clsgDtTm": "2021-10-18T05:00:00"
                        },
                        "untrInvstmtVal": 1157.460000,
                        "anulInvstmtRate": 5.0500,
                        "untrRedVal": 1126.820000,
                        "anulRedRate": 5.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-18T09:25:00",
                            "clsgDtTm": "2021-10-19T05:00:00"
                        },
                        "untrInvstmtVal": 1152.780000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 1122.280000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-19T09:25:00",
                            "clsgDtTm": "2021-10-20T05:00:00"
                        },
                        "untrInvstmtVal": 1093.080000,
                        "anulInvstmtRate": 5.3100,
                        "untrRedVal": 1064.220000,
                        "anulRedRate": 5.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-20T09:25:00",
                            "clsgDtTm": "2021-10-21T05:00:00"
                        },
                        "untrInvstmtVal": 1133.310000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 1103.350000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-21T09:25:00",
                            "clsgDtTm": "2021-10-22T05:00:00"
                        },
                        "untrInvstmtVal": 1067.530000,
                        "anulInvstmtRate": 5.4200,
                        "untrRedVal": 1039.380000,
                        "anulRedRate": 5.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-22T09:25:00",
                            "clsgDtTm": "2021-10-25T05:00:00"
                        },
                        "untrInvstmtVal": 1107.260000,
                        "anulInvstmtRate": 5.2600,
                        "untrRedVal": 1078.030000,
                        "anulRedRate": 5.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-25T09:25:00",
                            "clsgDtTm": "2021-10-26T05:00:00"
                        },
                        "untrInvstmtVal": 1090.580000,
                        "anulInvstmtRate": 5.3300,
                        "untrRedVal": 1061.820000,
                        "anulRedRate": 5.4500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-26T09:25:00",
                            "clsgDtTm": "2021-10-27T05:00:00"
                        },
                        "untrInvstmtVal": 1067.020000,
                        "anulInvstmtRate": 5.4300,
                        "untrRedVal": 1038.910000,
                        "anulRedRate": 5.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-27T09:25:00",
                            "clsgDtTm": "2021-10-28T05:00:00"
                        },
                        "untrInvstmtVal": 1071.330000,
                        "anulInvstmtRate": 5.4200,
                        "untrRedVal": 1043.110000,
                        "anulRedRate": 5.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-28T09:25:00",
                            "clsgDtTm": "2021-10-29T05:00:00"
                        },
                        "untrInvstmtVal": 1057.700000,
                        "anulInvstmtRate": 5.4800,
                        "untrRedVal": 1029.850000,
                        "anulRedRate": 5.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-10-29T09:25:00",
                            "clsgDtTm": "2021-11-01T05:00:00"
                        },
                        "untrInvstmtVal": 1056.620000,
                        "anulInvstmtRate": 5.4900,
                        "untrRedVal": 1028.810000,
                        "anulRedRate": 5.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-01T09:25:00",
                            "clsgDtTm": "2021-11-03T05:00:00"
                        },
                        "untrInvstmtVal": 1045.850000,
                        "anulInvstmtRate": 5.5400,
                        "untrRedVal": 1018.340000,
                        "anulRedRate": 5.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-03T09:25:00",
                            "clsgDtTm": "2021-11-04T05:00:00"
                        },
                        "untrInvstmtVal": 1113.690000,
                        "anulInvstmtRate": 5.2600,
                        "untrRedVal": 1084.320000,
                        "anulRedRate": 5.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-04T09:25:00",
                            "clsgDtTm": "2021-11-05T05:00:00"
                        },
                        "untrInvstmtVal": 1131.800000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 1101.940000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-05T09:25:00",
                            "clsgDtTm": "2021-11-08T05:00:00"
                        },
                        "untrInvstmtVal": 1115.610000,
                        "anulInvstmtRate": 5.2600,
                        "untrRedVal": 1086.210000,
                        "anulRedRate": 5.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-08T09:25:00",
                            "clsgDtTm": "2021-11-09T05:00:00"
                        },
                        "untrInvstmtVal": 1118.700000,
                        "anulInvstmtRate": 5.2500,
                        "untrRedVal": 1089.220000,
                        "anulRedRate": 5.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-09T09:25:00",
                            "clsgDtTm": "2021-11-10T05:00:00"
                        },
                        "untrInvstmtVal": 1126.800000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 1097.100000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-10T09:25:00",
                            "clsgDtTm": "2021-11-11T05:00:00"
                        },
                        "untrInvstmtVal": 1147.290000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 1117.030000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-11T09:25:00",
                            "clsgDtTm": "2021-11-12T05:00:00"
                        },
                        "untrInvstmtVal": 1140.330000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 1110.270000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-12T09:25:00",
                            "clsgDtTm": "2021-11-16T05:00:00"
                        },
                        "untrInvstmtVal": 1139.770000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 1109.730000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-16T09:25:00",
                            "clsgDtTm": "2021-11-17T05:00:00"
                        },
                        "untrInvstmtVal": 1135.300000,
                        "anulInvstmtRate": 5.2100,
                        "untrRedVal": 1105.390000,
                        "anulRedRate": 5.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-17T09:25:00",
                            "clsgDtTm": "2021-11-18T05:00:00"
                        },
                        "untrInvstmtVal": 1128.350000,
                        "anulInvstmtRate": 5.2400,
                        "untrRedVal": 1098.630000,
                        "anulRedRate": 5.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-18T09:25:00",
                            "clsgDtTm": "2021-11-19T05:00:00"
                        },
                        "untrInvstmtVal": 1133.980000,
                        "anulInvstmtRate": 5.2200,
                        "untrRedVal": 1104.120000,
                        "anulRedRate": 5.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-19T09:25:00",
                            "clsgDtTm": "2021-11-22T05:00:00"
                        },
                        "untrInvstmtVal": 1140.390000,
                        "anulInvstmtRate": 5.2000,
                        "untrRedVal": 1110.360000,
                        "anulRedRate": 5.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-22T09:25:00",
                            "clsgDtTm": "2021-11-23T05:00:00"
                        },
                        "untrInvstmtVal": 1143.540000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 1113.430000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-23T09:25:00",
                            "clsgDtTm": "2021-11-24T05:00:00"
                        },
                        "untrInvstmtVal": 1146.690000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 1116.500000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-24T09:25:00",
                            "clsgDtTm": "2021-11-25T05:00:00"
                        },
                        "untrInvstmtVal": 1154.980000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 1124.570000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-25T09:25:00",
                            "clsgDtTm": "2021-11-26T05:00:00"
                        },
                        "untrInvstmtVal": 1155.590000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 1125.160000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-26T09:25:00",
                            "clsgDtTm": "2021-11-29T05:00:00"
                        },
                        "untrInvstmtVal": 1152.300000,
                        "anulInvstmtRate": 5.1700,
                        "untrRedVal": 1121.980000,
                        "anulRedRate": 5.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-29T09:25:00",
                            "clsgDtTm": "2021-11-30T05:00:00"
                        },
                        "untrInvstmtVal": 1150.390000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 1120.120000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-11-30T09:25:00",
                            "clsgDtTm": "2021-12-01T05:00:00"
                        },
                        "untrInvstmtVal": 1163.900000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 1133.260000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-01T09:25:00",
                            "clsgDtTm": "2021-12-02T05:00:00"
                        },
                        "untrInvstmtVal": 1167.130000,
                        "anulInvstmtRate": 5.1200,
                        "untrRedVal": 1136.420000,
                        "anulRedRate": 5.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-02T09:25:00",
                            "clsgDtTm": "2021-12-03T05:00:00"
                        },
                        "untrInvstmtVal": 1157.450000,
                        "anulInvstmtRate": 5.1600,
                        "untrRedVal": 1127.000000,
                        "anulRedRate": 5.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-03T09:25:00",
                            "clsgDtTm": "2021-12-06T05:00:00"
                        },
                        "untrInvstmtVal": 1177.100000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 1146.120000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-06T09:25:00",
                            "clsgDtTm": "2021-12-07T05:00:00"
                        },
                        "untrInvstmtVal": 1175.140000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 1144.220000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-07T09:25:00",
                            "clsgDtTm": "2021-12-08T05:00:00"
                        },
                        "untrInvstmtVal": 1162.800000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 1132.220000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-08T09:25:00",
                            "clsgDtTm": "2021-12-09T05:00:00"
                        },
                        "untrInvstmtVal": 1179.060000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 1148.050000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-09T09:25:00",
                            "clsgDtTm": "2021-12-10T05:00:00"
                        },
                        "untrInvstmtVal": 1179.720000,
                        "anulInvstmtRate": 5.0900,
                        "untrRedVal": 1148.690000,
                        "anulRedRate": 5.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-10T09:25:00",
                            "clsgDtTm": "2021-12-13T05:00:00"
                        },
                        "untrInvstmtVal": 1198.300000,
                        "anulInvstmtRate": 5.0200,
                        "untrRedVal": 1166.770000,
                        "anulRedRate": 5.1400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-13T09:25:00",
                            "clsgDtTm": "2021-12-14T05:00:00"
                        },
                        "untrInvstmtVal": 1209.620000,
                        "anulInvstmtRate": 4.9800,
                        "untrRedVal": 1177.780000,
                        "anulRedRate": 5.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-14T09:25:00",
                            "clsgDtTm": "2021-12-15T05:00:00"
                        },
                        "untrInvstmtVal": 1204.860000,
                        "anulInvstmtRate": 5.0000,
                        "untrRedVal": 1173.170000,
                        "anulRedRate": 5.1200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-15T09:25:00",
                            "clsgDtTm": "2021-12-16T05:00:00"
                        },
                        "untrInvstmtVal": 1184.130000,
                        "anulInvstmtRate": 5.0800,
                        "untrRedVal": 1153.000000,
                        "anulRedRate": 5.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-16T09:25:00",
                            "clsgDtTm": "2021-12-17T05:00:00"
                        },
                        "untrInvstmtVal": 1187.260000,
                        "anulInvstmtRate": 5.0700,
                        "untrRedVal": 1156.050000,
                        "anulRedRate": 5.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-17T09:25:00",
                            "clsgDtTm": "2021-12-20T05:00:00"
                        },
                        "untrInvstmtVal": 1159.620000,
                        "anulInvstmtRate": 5.1800,
                        "untrRedVal": 1129.180000,
                        "anulRedRate": 5.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-20T09:25:00",
                            "clsgDtTm": "2021-12-21T05:00:00"
                        },
                        "untrInvstmtVal": 1165.270000,
                        "anulInvstmtRate": 5.1600,
                        "untrRedVal": 1134.680000,
                        "anulRedRate": 5.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-21T09:25:00",
                            "clsgDtTm": "2021-12-22T05:00:00"
                        },
                        "untrInvstmtVal": 1173.540000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 1142.740000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-22T09:25:00",
                            "clsgDtTm": "2021-12-23T05:00:00"
                        },
                        "untrInvstmtVal": 1174.040000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 1143.220000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-23T09:25:00",
                            "clsgDtTm": "2021-12-27T05:00:00"
                        },
                        "untrInvstmtVal": 1183.400000,
                        "anulInvstmtRate": 5.1000,
                        "untrRedVal": 1152.330000,
                        "anulRedRate": 5.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-27T09:25:00",
                            "clsgDtTm": "2021-12-28T05:00:00"
                        },
                        "untrInvstmtVal": 1170.500000,
                        "anulInvstmtRate": 5.1500,
                        "untrRedVal": 1139.800000,
                        "anulRedRate": 5.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-28T09:25:00",
                            "clsgDtTm": "2021-12-29T05:00:00"
                        },
                        "untrInvstmtVal": 1176.170000,
                        "anulInvstmtRate": 5.1300,
                        "untrRedVal": 1145.310000,
                        "anulRedRate": 5.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-29T09:25:00",
                            "clsgDtTm": "2021-12-30T05:00:00"
                        },
                        "untrInvstmtVal": 1161.100000,
                        "anulInvstmtRate": 5.1900,
                        "untrRedVal": 1130.660000,
                        "anulRedRate": 5.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2021-12-30T09:25:00",
                            "clsgDtTm": "2022-01-03T05:00:00"
                        },
                        "untrInvstmtVal": 1129.530000,
                        "anulInvstmtRate": 5.3200,
                        "untrRedVal": 0.0,
                        "anulRedRate": 0.0
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-03T09:25:00",
                            "clsgDtTm": "2022-01-04T05:00:00"
                        },
                        "untrInvstmtVal": 1147.620000,
                        "anulInvstmtRate": 5.2500,
                        "untrRedVal": 1117.570000,
                        "anulRedRate": 5.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-04T09:25:00",
                            "clsgDtTm": "2022-01-05T05:00:00"
                        },
                        "untrInvstmtVal": 1137.970000,
                        "anulInvstmtRate": 5.2900,
                        "untrRedVal": 1108.190000,
                        "anulRedRate": 5.4100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-05T09:25:00",
                            "clsgDtTm": "2022-01-06T05:00:00"
                        },
                        "untrInvstmtVal": 1116.010000,
                        "anulInvstmtRate": 5.3800,
                        "untrRedVal": 1086.830000,
                        "anulRedRate": 5.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-06T09:25:00",
                            "clsgDtTm": "2022-01-07T05:00:00"
                        },
                        "untrInvstmtVal": 1118.930000,
                        "anulInvstmtRate": 5.3700,
                        "untrRedVal": 1089.680000,
                        "anulRedRate": 5.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-07T09:25:00",
                            "clsgDtTm": "2022-01-10T05:00:00"
                        },
                        "untrInvstmtVal": 1080.990000,
                        "anulInvstmtRate": 5.5300,
                        "untrRedVal": 1052.770000,
                        "anulRedRate": 5.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-10T09:25:00",
                            "clsgDtTm": "2022-01-11T05:00:00"
                        },
                        "untrInvstmtVal": 1064.870000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 1037.100000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-11T09:25:00",
                            "clsgDtTm": "2022-01-12T05:00:00"
                        },
                        "untrInvstmtVal": 1050.060000,
                        "anulInvstmtRate": 5.6700,
                        "untrRedVal": 1022.700000,
                        "anulRedRate": 5.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-12T09:25:00",
                            "clsgDtTm": "2022-01-13T05:00:00"
                        },
                        "untrInvstmtVal": 1055.170000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 1027.680000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-13T09:25:00",
                            "clsgDtTm": "2022-01-14T05:00:00"
                        },
                        "untrInvstmtVal": 1057.970000,
                        "anulInvstmtRate": 5.6400,
                        "untrRedVal": 1030.410000,
                        "anulRedRate": 5.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-14T09:25:00",
                            "clsgDtTm": "2022-01-17T05:00:00"
                        },
                        "untrInvstmtVal": 1068.120000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 1040.290000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-17T09:25:00",
                            "clsgDtTm": "2022-01-18T05:00:00"
                        },
                        "untrInvstmtVal": 1042.960000,
                        "anulInvstmtRate": 5.7100,
                        "untrRedVal": 1015.810000,
                        "anulRedRate": 5.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-18T09:25:00",
                            "clsgDtTm": "2022-01-19T05:00:00"
                        },
                        "untrInvstmtVal": 1043.340000,
                        "anulInvstmtRate": 5.7100,
                        "untrRedVal": 1016.190000,
                        "anulRedRate": 5.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-19T09:25:00",
                            "clsgDtTm": "2022-01-20T05:00:00"
                        },
                        "untrInvstmtVal": 1059.910000,
                        "anulInvstmtRate": 5.6400,
                        "untrRedVal": 1032.310000,
                        "anulRedRate": 5.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-20T09:25:00",
                            "clsgDtTm": "2022-01-21T05:00:00"
                        },
                        "untrInvstmtVal": 1072.020000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1044.100000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-21T09:25:00",
                            "clsgDtTm": "2022-01-24T05:00:00"
                        },
                        "untrInvstmtVal": 1065.660000,
                        "anulInvstmtRate": 5.6200,
                        "untrRedVal": 1037.920000,
                        "anulRedRate": 5.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-24T09:25:00",
                            "clsgDtTm": "2022-01-25T05:00:00"
                        },
                        "untrInvstmtVal": 1073.110000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1045.170000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-25T09:25:00",
                            "clsgDtTm": "2022-01-26T05:00:00"
                        },
                        "untrInvstmtVal": 1071.140000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 1043.260000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-26T09:25:00",
                            "clsgDtTm": "2022-01-27T05:00:00"
                        },
                        "untrInvstmtVal": 1062.140000,
                        "anulInvstmtRate": 5.6400,
                        "untrRedVal": 1034.510000,
                        "anulRedRate": 5.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-27T09:25:00",
                            "clsgDtTm": "2022-01-28T05:00:00"
                        },
                        "untrInvstmtVal": 1070.000000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1042.160000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-28T09:25:00",
                            "clsgDtTm": "2022-01-31T05:00:00"
                        },
                        "untrInvstmtVal": 1068.450000,
                        "anulInvstmtRate": 5.6200,
                        "untrRedVal": 1040.660000,
                        "anulRedRate": 5.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-01-31T09:25:00",
                            "clsgDtTm": "2022-02-01T05:00:00"
                        },
                        "untrInvstmtVal": 1071.220000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1043.360000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-01T09:25:00",
                            "clsgDtTm": "2022-02-02T05:00:00"
                        },
                        "untrInvstmtVal": 1076.360000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1048.370000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-02T09:25:00",
                            "clsgDtTm": "2022-02-03T05:00:00"
                        },
                        "untrInvstmtVal": 1088.690000,
                        "anulInvstmtRate": 5.5400,
                        "untrRedVal": 1060.360000,
                        "anulRedRate": 5.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-03T09:25:00",
                            "clsgDtTm": "2022-02-04T05:00:00"
                        },
                        "untrInvstmtVal": 1103.570000,
                        "anulInvstmtRate": 5.4800,
                        "untrRedVal": 1074.850000,
                        "anulRedRate": 5.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-04T09:25:00",
                            "clsgDtTm": "2022-02-07T05:00:00"
                        },
                        "untrInvstmtVal": 1085.140000,
                        "anulInvstmtRate": 5.5600,
                        "untrRedVal": 1056.920000,
                        "anulRedRate": 5.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-07T09:25:00",
                            "clsgDtTm": "2022-02-08T05:00:00"
                        },
                        "untrInvstmtVal": 1090.350000,
                        "anulInvstmtRate": 5.5400,
                        "untrRedVal": 1062.000000,
                        "anulRedRate": 5.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-08T09:25:00",
                            "clsgDtTm": "2022-02-09T05:00:00"
                        },
                        "untrInvstmtVal": 1083.610000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 1055.440000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-09T09:25:00",
                            "clsgDtTm": "2022-02-10T05:00:00"
                        },
                        "untrInvstmtVal": 1074.470000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1046.560000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-10T09:25:00",
                            "clsgDtTm": "2022-02-11T05:00:00"
                        },
                        "untrInvstmtVal": 1065.500000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 1037.830000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-11T09:25:00",
                            "clsgDtTm": "2022-02-14T05:00:00"
                        },
                        "untrInvstmtVal": 1056.970000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 1029.540000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-14T09:25:00",
                            "clsgDtTm": "2022-02-15T05:00:00"
                        },
                        "untrInvstmtVal": 1066.700000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 1039.010000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-15T09:25:00",
                            "clsgDtTm": "2022-02-16T05:00:00"
                        },
                        "untrInvstmtVal": 1081.410000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1053.330000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-16T09:25:00",
                            "clsgDtTm": "2022-02-17T05:00:00"
                        },
                        "untrInvstmtVal": 1084.360000,
                        "anulInvstmtRate": 5.5800,
                        "untrRedVal": 1056.210000,
                        "anulRedRate": 5.7000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-17T09:25:00",
                            "clsgDtTm": "2022-02-18T05:00:00"
                        },
                        "untrInvstmtVal": 1080.190000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 1052.150000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-18T09:25:00",
                            "clsgDtTm": "2022-02-21T05:00:00"
                        },
                        "untrInvstmtVal": 1074.360000,
                        "anulInvstmtRate": 5.6300,
                        "untrRedVal": 1046.490000,
                        "anulRedRate": 5.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-21T09:25:00",
                            "clsgDtTm": "2022-02-22T05:00:00"
                        },
                        "untrInvstmtVal": 1063.230000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 1035.660000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-22T09:25:00",
                            "clsgDtTm": "2022-02-23T05:00:00"
                        },
                        "untrInvstmtVal": 1056.830000,
                        "anulInvstmtRate": 5.7100,
                        "untrRedVal": 1029.440000,
                        "anulRedRate": 5.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-23T09:25:00",
                            "clsgDtTm": "2022-02-24T05:00:00"
                        },
                        "untrInvstmtVal": 1062.040000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 1034.510000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-24T09:25:00",
                            "clsgDtTm": "2022-02-25T05:00:00"
                        },
                        "untrInvstmtVal": 1046.640000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1019.540000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-02-25T09:25:00",
                            "clsgDtTm": "2022-03-02T05:00:00"
                        },
                        "untrInvstmtVal": 1057.840000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1030.440000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-02T09:25:00",
                            "clsgDtTm": "2022-03-03T05:00:00"
                        },
                        "untrInvstmtVal": 1051.500000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1024.280000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-03T09:25:00",
                            "clsgDtTm": "2022-03-04T05:00:00"
                        },
                        "untrInvstmtVal": 1045.210000,
                        "anulInvstmtRate": 5.7800,
                        "untrRedVal": 1018.160000,
                        "anulRedRate": 5.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-04T09:25:00",
                            "clsgDtTm": "2022-03-07T05:00:00"
                        },
                        "untrInvstmtVal": 1048.780000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 1021.640000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-07T09:25:00",
                            "clsgDtTm": "2022-03-08T05:00:00"
                        },
                        "untrInvstmtVal": 1037.960000,
                        "anulInvstmtRate": 5.8200,
                        "untrRedVal": 1011.120000,
                        "anulRedRate": 5.9400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-08T09:25:00",
                            "clsgDtTm": "2022-03-09T05:00:00"
                        },
                        "untrInvstmtVal": 1025.020000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 998.540000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-09T09:25:00",
                            "clsgDtTm": "2022-03-10T05:00:00"
                        },
                        "untrInvstmtVal": 1036.860000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 1010.060000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-10T09:25:00",
                            "clsgDtTm": "2022-03-11T05:00:00"
                        },
                        "untrInvstmtVal": 1030.670000,
                        "anulInvstmtRate": 5.8600,
                        "untrRedVal": 1004.040000,
                        "anulRedRate": 5.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-11T09:25:00",
                            "clsgDtTm": "2022-03-14T05:00:00"
                        },
                        "untrInvstmtVal": 1039.400000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 1012.550000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-14T09:25:00",
                            "clsgDtTm": "2022-03-15T05:00:00"
                        },
                        "untrInvstmtVal": 1033.230000,
                        "anulInvstmtRate": 5.8600,
                        "untrRedVal": 1006.540000,
                        "anulRedRate": 5.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-15T09:25:00",
                            "clsgDtTm": "2022-03-16T05:00:00"
                        },
                        "untrInvstmtVal": 1024.790000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 998.340000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-16T09:25:00",
                            "clsgDtTm": "2022-03-17T05:00:00"
                        },
                        "untrInvstmtVal": 1041.110000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 1014.220000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-17T09:25:00",
                            "clsgDtTm": "2022-03-18T05:00:00"
                        },
                        "untrInvstmtVal": 1037.130000,
                        "anulInvstmtRate": 5.8500,
                        "untrRedVal": 1010.350000,
                        "anulRedRate": 5.9700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-18T09:25:00",
                            "clsgDtTm": "2022-03-21T05:00:00"
                        },
                        "untrInvstmtVal": 1058.880000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1031.530000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-21T09:25:00",
                            "clsgDtTm": "2022-03-22T05:00:00"
                        },
                        "untrInvstmtVal": 1061.750000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1034.330000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-22T09:25:00",
                            "clsgDtTm": "2022-03-23T05:00:00"
                        },
                        "untrInvstmtVal": 1062.310000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1034.870000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-23T09:25:00",
                            "clsgDtTm": "2022-03-24T05:00:00"
                        },
                        "untrInvstmtVal": 1083.940000,
                        "anulInvstmtRate": 5.6600,
                        "untrRedVal": 1055.930000,
                        "anulRedRate": 5.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-24T09:25:00",
                            "clsgDtTm": "2022-03-25T05:00:00"
                        },
                        "untrInvstmtVal": 1106.040000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 1077.430000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-25T09:25:00",
                            "clsgDtTm": "2022-03-28T05:00:00"
                        },
                        "untrInvstmtVal": 1154.240000,
                        "anulInvstmtRate": 5.3800,
                        "untrRedVal": 1124.340000,
                        "anulRedRate": 5.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-28T09:25:00",
                            "clsgDtTm": "2022-03-29T05:00:00"
                        },
                        "untrInvstmtVal": 1156.580000,
                        "anulInvstmtRate": 5.3800,
                        "untrRedVal": 1126.630000,
                        "anulRedRate": 5.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-29T09:25:00",
                            "clsgDtTm": "2022-03-30T05:00:00"
                        },
                        "untrInvstmtVal": 1132.270000,
                        "anulInvstmtRate": 5.4800,
                        "untrRedVal": 1102.980000,
                        "anulRedRate": 5.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-30T09:25:00",
                            "clsgDtTm": "2022-03-31T05:00:00"
                        },
                        "untrInvstmtVal": 1130.500000,
                        "anulInvstmtRate": 5.4900,
                        "untrRedVal": 1101.260000,
                        "anulRedRate": 5.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-03-31T09:25:00",
                            "clsgDtTm": "2022-04-01T05:00:00"
                        },
                        "untrInvstmtVal": 1133.680000,
                        "anulInvstmtRate": 5.4800,
                        "untrRedVal": 1104.360000,
                        "anulRedRate": 5.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-01T09:25:00",
                            "clsgDtTm": "2022-04-04T05:00:00"
                        },
                        "untrInvstmtVal": 1152.810000,
                        "anulInvstmtRate": 5.4100,
                        "untrRedVal": 1122.990000,
                        "anulRedRate": 5.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-04T09:25:00",
                            "clsgDtTm": "2022-04-05T05:00:00"
                        },
                        "untrInvstmtVal": 1171.320000,
                        "anulInvstmtRate": 5.3400,
                        "untrRedVal": 1141.000000,
                        "anulRedRate": 5.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-05T09:25:00",
                            "clsgDtTm": "2022-04-06T05:00:00"
                        },
                        "untrInvstmtVal": 1151.720000,
                        "anulInvstmtRate": 5.4200,
                        "untrRedVal": 1121.940000,
                        "anulRedRate": 5.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-06T09:25:00",
                            "clsgDtTm": "2022-04-07T05:00:00"
                        },
                        "untrInvstmtVal": 1142.410000,
                        "anulInvstmtRate": 5.4600,
                        "untrRedVal": 1112.880000,
                        "anulRedRate": 5.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-07T09:25:00",
                            "clsgDtTm": "2022-04-08T05:00:00"
                        },
                        "untrInvstmtVal": 1153.150000,
                        "anulInvstmtRate": 5.4200,
                        "untrRedVal": 1123.340000,
                        "anulRedRate": 5.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-08T09:25:00",
                            "clsgDtTm": "2022-04-11T05:00:00"
                        },
                        "untrInvstmtVal": 1155.660000,
                        "anulInvstmtRate": 5.4300,
                        "untrRedVal": 1125.790000,
                        "anulRedRate": 5.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-11T09:25:00",
                            "clsgDtTm": "2022-04-12T05:00:00"
                        },
                        "untrInvstmtVal": 1129.080000,
                        "anulInvstmtRate": 5.5400,
                        "untrRedVal": 1099.930000,
                        "anulRedRate": 5.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-12T09:25:00",
                            "clsgDtTm": "2022-04-13T05:00:00"
                        },
                        "untrInvstmtVal": 1112.790000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1084.090000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-13T09:25:00",
                            "clsgDtTm": "2022-04-14T05:00:00"
                        },
                        "untrInvstmtVal": 1116.040000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 1087.260000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-14T09:25:00",
                            "clsgDtTm": "2022-04-18T05:00:00"
                        },
                        "untrInvstmtVal": 1110.430000,
                        "anulInvstmtRate": 5.6300,
                        "untrRedVal": 1081.800000,
                        "anulRedRate": 5.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-18T09:25:00",
                            "clsgDtTm": "2022-04-19T05:00:00"
                        },
                        "untrInvstmtVal": 1110.950000,
                        "anulInvstmtRate": 5.6300,
                        "untrRedVal": 1082.320000,
                        "anulRedRate": 5.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-19T09:25:00",
                            "clsgDtTm": "2022-04-20T05:00:00"
                        },
                        "untrInvstmtVal": 1118.760000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 1089.920000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-20T09:25:00",
                            "clsgDtTm": "2022-04-22T05:00:00"
                        },
                        "untrInvstmtVal": 1119.560000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 1090.710000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-22T09:25:00",
                            "clsgDtTm": "2022-04-25T05:00:00"
                        },
                        "untrInvstmtVal": 1118.220000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1089.400000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-25T09:25:00",
                            "clsgDtTm": "2022-04-26T05:00:00"
                        },
                        "untrInvstmtVal": 1109.050000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 1080.490000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-26T09:25:00",
                            "clsgDtTm": "2022-04-27T05:00:00"
                        },
                        "untrInvstmtVal": 1107.160000,
                        "anulInvstmtRate": 5.6600,
                        "untrRedVal": 1078.650000,
                        "anulRedRate": 5.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-27T09:25:00",
                            "clsgDtTm": "2022-04-28T05:00:00"
                        },
                        "untrInvstmtVal": 1112.510000,
                        "anulInvstmtRate": 5.6400,
                        "untrRedVal": 1083.860000,
                        "anulRedRate": 5.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-28T09:25:00",
                            "clsgDtTm": "2022-04-29T05:00:00"
                        },
                        "untrInvstmtVal": 1111.540000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 1082.930000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-04-29T09:25:00",
                            "clsgDtTm": "2022-05-02T05:00:00"
                        },
                        "untrInvstmtVal": 1120.110000,
                        "anulInvstmtRate": 5.6200,
                        "untrRedVal": 1091.270000,
                        "anulRedRate": 5.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-02T09:25:00",
                            "clsgDtTm": "2022-05-03T05:00:00"
                        },
                        "untrInvstmtVal": 1106.180000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 1077.720000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-03T09:25:00",
                            "clsgDtTm": "2022-05-04T05:00:00"
                        },
                        "untrInvstmtVal": 1106.770000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 1078.300000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-04T09:25:00",
                            "clsgDtTm": "2022-05-05T05:00:00"
                        },
                        "untrInvstmtVal": 1097.770000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1069.560000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-05T09:25:00",
                            "clsgDtTm": "2022-05-06T05:00:00"
                        },
                        "untrInvstmtVal": 1105.540000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 1077.110000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-06T09:25:00",
                            "clsgDtTm": "2022-05-09T05:00:00"
                        },
                        "untrInvstmtVal": 1099.630000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1071.370000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-09T09:25:00",
                            "clsgDtTm": "2022-05-10T05:00:00"
                        },
                        "untrInvstmtVal": 1100.220000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1071.950000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-10T09:25:00",
                            "clsgDtTm": "2022-05-11T05:00:00"
                        },
                        "untrInvstmtVal": 1084.210000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 1056.380000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-11T09:25:00",
                            "clsgDtTm": "2022-05-12T05:00:00"
                        },
                        "untrInvstmtVal": 1076.580000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 1048.950000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-12T09:25:00",
                            "clsgDtTm": "2022-05-13T05:00:00"
                        },
                        "untrInvstmtVal": 1086.580000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 1058.690000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-13T09:25:00",
                            "clsgDtTm": "2022-05-16T05:00:00"
                        },
                        "untrInvstmtVal": 1104.380000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1076.020000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-16T09:25:00",
                            "clsgDtTm": "2022-05-17T05:00:00"
                        },
                        "untrInvstmtVal": 1116.830000,
                        "anulInvstmtRate": 5.6700,
                        "untrRedVal": 1088.150000,
                        "anulRedRate": 5.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-17T09:25:00",
                            "clsgDtTm": "2022-05-18T05:00:00"
                        },
                        "untrInvstmtVal": 1129.430000,
                        "anulInvstmtRate": 5.6200,
                        "untrRedVal": 1100.420000,
                        "anulRedRate": 5.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-18T09:25:00",
                            "clsgDtTm": "2022-05-19T05:00:00"
                        },
                        "untrInvstmtVal": 1120.080000,
                        "anulInvstmtRate": 5.6600,
                        "untrRedVal": 1091.320000,
                        "anulRedRate": 5.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-19T09:25:00",
                            "clsgDtTm": "2022-05-20T05:00:00"
                        },
                        "untrInvstmtVal": 1132.710000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1103.620000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-20T09:25:00",
                            "clsgDtTm": "2022-05-23T05:00:00"
                        },
                        "untrInvstmtVal": 1135.920000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 1106.750000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-23T09:25:00",
                            "clsgDtTm": "2022-05-24T05:00:00"
                        },
                        "untrInvstmtVal": 1131.410000,
                        "anulInvstmtRate": 5.6200,
                        "untrRedVal": 1102.370000,
                        "anulRedRate": 5.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-24T09:25:00",
                            "clsgDtTm": "2022-05-25T05:00:00"
                        },
                        "untrInvstmtVal": 1100.390000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1072.180000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-25T09:25:00",
                            "clsgDtTm": "2022-05-26T05:00:00"
                        },
                        "untrInvstmtVal": 1098.920000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1070.760000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-26T09:25:00",
                            "clsgDtTm": "2022-05-27T05:00:00"
                        },
                        "untrInvstmtVal": 1116.160000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 1087.540000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-27T09:25:00",
                            "clsgDtTm": "2022-05-30T05:00:00"
                        },
                        "untrInvstmtVal": 1126.770000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 1097.870000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-30T09:25:00",
                            "clsgDtTm": "2022-05-31T05:00:00"
                        },
                        "untrInvstmtVal": 1115.080000,
                        "anulInvstmtRate": 5.7000,
                        "untrRedVal": 1086.500000,
                        "anulRedRate": 5.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-05-31T09:25:00",
                            "clsgDtTm": "2022-06-01T05:00:00"
                        },
                        "untrInvstmtVal": 1110.720000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1082.260000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-01T09:25:00",
                            "clsgDtTm": "2022-06-02T05:00:00"
                        },
                        "untrInvstmtVal": 1111.180000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1082.710000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-02T09:25:00",
                            "clsgDtTm": "2022-06-03T05:00:00"
                        },
                        "untrInvstmtVal": 1104.440000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1076.160000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-03T09:25:00",
                            "clsgDtTm": "2022-06-06T05:00:00"
                        },
                        "untrInvstmtVal": 1107.710000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 1079.350000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-06T09:25:00",
                            "clsgDtTm": "2022-06-07T05:00:00"
                        },
                        "untrInvstmtVal": 1108.170000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 1079.800000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-07T09:25:00",
                            "clsgDtTm": "2022-06-08T05:00:00"
                        },
                        "untrInvstmtVal": 1101.460000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 1073.270000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-08T09:25:00",
                            "clsgDtTm": "2022-06-09T05:00:00"
                        },
                        "untrInvstmtVal": 1106.680000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1078.370000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-09T09:25:00",
                            "clsgDtTm": "2022-06-10T05:00:00"
                        },
                        "untrInvstmtVal": 1118.050000,
                        "anulInvstmtRate": 5.7000,
                        "untrRedVal": 1089.430000,
                        "anulRedRate": 5.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-10T09:25:00",
                            "clsgDtTm": "2022-06-13T05:00:00"
                        },
                        "untrInvstmtVal": 1118.810000,
                        "anulInvstmtRate": 5.7000,
                        "untrRedVal": 1090.170000,
                        "anulRedRate": 5.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-13T09:25:00",
                            "clsgDtTm": "2022-06-14T05:00:00"
                        },
                        "untrInvstmtVal": 1111.990000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 1083.540000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-14T09:25:00",
                            "clsgDtTm": "2022-06-15T05:00:00"
                        },
                        "untrInvstmtVal": 1095.710000,
                        "anulInvstmtRate": 5.8000,
                        "untrRedVal": 1067.710000,
                        "anulRedRate": 5.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-15T09:25:00",
                            "clsgDtTm": "2022-06-17T05:00:00"
                        },
                        "untrInvstmtVal": 1115.530000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1087.000000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-17T09:25:00",
                            "clsgDtTm": "2022-06-20T05:00:00"
                        },
                        "untrInvstmtVal": 1126.180000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 1097.370000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-20T09:25:00",
                            "clsgDtTm": "2022-06-21T05:00:00"
                        },
                        "untrInvstmtVal": 1129.100000,
                        "anulInvstmtRate": 5.6700,
                        "untrRedVal": 1100.220000,
                        "anulRedRate": 5.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-21T09:25:00",
                            "clsgDtTm": "2022-06-22T05:00:00"
                        },
                        "untrInvstmtVal": 1115.040000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 1086.540000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-22T09:25:00",
                            "clsgDtTm": "2022-06-23T05:00:00"
                        },
                        "untrInvstmtVal": 1108.330000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1080.010000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-23T09:25:00",
                            "clsgDtTm": "2022-06-24T05:00:00"
                        },
                        "untrInvstmtVal": 1118.420000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1089.840000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-24T09:25:00",
                            "clsgDtTm": "2022-06-27T05:00:00"
                        },
                        "untrInvstmtVal": 1109.760000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1081.430000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-27T09:25:00",
                            "clsgDtTm": "2022-06-28T05:00:00"
                        },
                        "untrInvstmtVal": 1103.520000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 1075.340000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-28T09:25:00",
                            "clsgDtTm": "2022-06-29T05:00:00"
                        },
                        "untrInvstmtVal": 1082.830000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 1055.210000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-29T09:25:00",
                            "clsgDtTm": "2022-06-30T05:00:00"
                        },
                        "untrInvstmtVal": 1081.000000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1053.440000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-06-30T09:25:00",
                            "clsgDtTm": "2022-07-01T05:00:00"
                        },
                        "untrInvstmtVal": 1081.510000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1053.940000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-01T09:25:00",
                            "clsgDtTm": "2022-07-04T05:00:00"
                        },
                        "untrInvstmtVal": 1082.540000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1054.950000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-04T09:25:00",
                            "clsgDtTm": "2022-07-05T05:00:00"
                        },
                        "untrInvstmtVal": 1073.770000,
                        "anulInvstmtRate": 5.9300,
                        "untrRedVal": 1046.420000,
                        "anulRedRate": 6.0500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-05T09:25:00",
                            "clsgDtTm": "2022-07-06T05:00:00"
                        },
                        "untrInvstmtVal": 1058.230000,
                        "anulInvstmtRate": 6.0000,
                        "untrRedVal": 1031.290000,
                        "anulRedRate": 6.1200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-06T09:25:00",
                            "clsgDtTm": "2022-07-07T05:00:00"
                        },
                        "untrInvstmtVal": 1056.450000,
                        "anulInvstmtRate": 6.0100,
                        "untrRedVal": 1029.570000,
                        "anulRedRate": 6.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-07T09:25:00",
                            "clsgDtTm": "2022-07-08T05:00:00"
                        },
                        "untrInvstmtVal": 1056.950000,
                        "anulInvstmtRate": 6.0100,
                        "untrRedVal": 1030.070000,
                        "anulRedRate": 6.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-08T09:25:00",
                            "clsgDtTm": "2022-07-11T05:00:00"
                        },
                        "untrInvstmtVal": 1043.890000,
                        "anulInvstmtRate": 6.0700,
                        "untrRedVal": 1017.350000,
                        "anulRedRate": 6.1900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-11T09:25:00",
                            "clsgDtTm": "2022-07-12T05:00:00"
                        },
                        "untrInvstmtVal": 1013.460000,
                        "anulInvstmtRate": 6.2100,
                        "untrRedVal": 987.740000,
                        "anulRedRate": 6.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-12T09:25:00",
                            "clsgDtTm": "2022-07-13T05:00:00"
                        },
                        "untrInvstmtVal": 1013.930000,
                        "anulInvstmtRate": 6.2100,
                        "untrRedVal": 988.200000,
                        "anulRedRate": 6.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-13T09:25:00",
                            "clsgDtTm": "2022-07-14T05:00:00"
                        },
                        "untrInvstmtVal": 1018.760000,
                        "anulInvstmtRate": 6.1900,
                        "untrRedVal": 992.900000,
                        "anulRedRate": 6.3100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-14T09:25:00",
                            "clsgDtTm": "2022-07-15T05:00:00"
                        },
                        "untrInvstmtVal": 1023.610000,
                        "anulInvstmtRate": 6.1700,
                        "untrRedVal": 997.620000,
                        "anulRedRate": 6.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-15T09:25:00",
                            "clsgDtTm": "2022-07-18T05:00:00"
                        },
                        "untrInvstmtVal": 1043.160000,
                        "anulInvstmtRate": 6.0800,
                        "untrRedVal": 1016.670000,
                        "anulRedRate": 6.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-18T09:25:00",
                            "clsgDtTm": "2022-07-19T05:00:00"
                        },
                        "untrInvstmtVal": 1036.500000,
                        "anulInvstmtRate": 6.1100,
                        "untrRedVal": 1010.190000,
                        "anulRedRate": 6.2300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-19T09:25:00",
                            "clsgDtTm": "2022-07-20T05:00:00"
                        },
                        "untrInvstmtVal": 1003.760000,
                        "anulInvstmtRate": 6.2600,
                        "untrRedVal": 978.310000,
                        "anulRedRate": 6.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-20T09:25:00",
                            "clsgDtTm": "2022-07-21T05:00:00"
                        },
                        "untrInvstmtVal": 1010.260000,
                        "anulInvstmtRate": 6.2300,
                        "untrRedVal": 984.650000,
                        "anulRedRate": 6.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-21T09:25:00",
                            "clsgDtTm": "2022-07-22T05:00:00"
                        },
                        "untrInvstmtVal": 1010.300000,
                        "anulInvstmtRate": 6.2300,
                        "untrRedVal": 984.690000,
                        "anulRedRate": 6.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-22T09:25:00",
                            "clsgDtTm": "2022-07-25T05:00:00"
                        },
                        "untrInvstmtVal": 1007.760000,
                        "anulInvstmtRate": 6.2400,
                        "untrRedVal": 982.230000,
                        "anulRedRate": 6.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-25T09:25:00",
                            "clsgDtTm": "2022-07-26T05:00:00"
                        },
                        "untrInvstmtVal": 1020.820000,
                        "anulInvstmtRate": 6.1800,
                        "untrRedVal": 994.950000,
                        "anulRedRate": 6.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-26T09:25:00",
                            "clsgDtTm": "2022-07-27T05:00:00"
                        },
                        "untrInvstmtVal": 1001.390000,
                        "anulInvstmtRate": 6.2700,
                        "untrRedVal": 976.030000,
                        "anulRedRate": 6.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-27T09:25:00",
                            "clsgDtTm": "2022-07-28T05:00:00"
                        },
                        "untrInvstmtVal": 1009.900000,
                        "anulInvstmtRate": 6.2300,
                        "untrRedVal": 984.320000,
                        "anulRedRate": 6.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-28T09:25:00",
                            "clsgDtTm": "2022-07-29T05:00:00"
                        },
                        "untrInvstmtVal": 1016.430000,
                        "anulInvstmtRate": 6.2000,
                        "untrRedVal": 990.690000,
                        "anulRedRate": 6.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-07-29T09:25:00",
                            "clsgDtTm": "2022-08-01T05:00:00"
                        },
                        "untrInvstmtVal": 1013.850000,
                        "anulInvstmtRate": 6.2100,
                        "untrRedVal": 988.180000,
                        "anulRedRate": 6.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-01T09:25:00",
                            "clsgDtTm": "2022-08-02T05:00:00"
                        },
                        "untrInvstmtVal": 1024.780000,
                        "anulInvstmtRate": 6.1600,
                        "untrRedVal": 998.820000,
                        "anulRedRate": 6.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-02T09:25:00",
                            "clsgDtTm": "2022-08-03T05:00:00"
                        },
                        "untrInvstmtVal": 1009.580000,
                        "anulInvstmtRate": 6.2300,
                        "untrRedVal": 984.030000,
                        "anulRedRate": 6.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-03T09:25:00",
                            "clsgDtTm": "2022-08-04T05:00:00"
                        },
                        "untrInvstmtVal": 1020.450000,
                        "anulInvstmtRate": 6.1800,
                        "untrRedVal": 994.620000,
                        "anulRedRate": 6.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-04T09:25:00",
                            "clsgDtTm": "2022-08-05T05:00:00"
                        },
                        "untrInvstmtVal": 1058.280000,
                        "anulInvstmtRate": 6.0100,
                        "untrRedVal": 1031.450000,
                        "anulRedRate": 6.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-05T09:25:00",
                            "clsgDtTm": "2022-08-08T05:00:00"
                        },
                        "untrInvstmtVal": 1064.660000,
                        "anulInvstmtRate": 5.9800,
                        "untrRedVal": 1037.660000,
                        "anulRedRate": 6.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-08T09:25:00",
                            "clsgDtTm": "2022-08-09T05:00:00"
                        },
                        "untrInvstmtVal": 1099.450000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 1071.540000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-09T09:25:00",
                            "clsgDtTm": "2022-08-10T05:00:00"
                        },
                        "untrInvstmtVal": 1087.560000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 1059.970000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-10T09:25:00",
                            "clsgDtTm": "2022-08-11T05:00:00"
                        },
                        "untrInvstmtVal": 1085.240000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1057.720000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-11T09:25:00",
                            "clsgDtTm": "2022-08-12T05:00:00"
                        },
                        "untrInvstmtVal": 1087.570000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 1059.990000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-12T09:25:00",
                            "clsgDtTm": "2022-08-15T05:00:00"
                        },
                        "untrInvstmtVal": 1096.460000,
                        "anulInvstmtRate": 5.8400,
                        "untrRedVal": 1068.640000,
                        "anulRedRate": 5.9600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-15T09:25:00",
                            "clsgDtTm": "2022-08-16T05:00:00"
                        },
                        "untrInvstmtVal": 1132.460000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 1103.700000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-16T09:25:00",
                            "clsgDtTm": "2022-08-17T05:00:00"
                        },
                        "untrInvstmtVal": 1110.980000,
                        "anulInvstmtRate": 5.7800,
                        "untrRedVal": 1082.790000,
                        "anulRedRate": 5.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-17T09:25:00",
                            "clsgDtTm": "2022-08-18T05:00:00"
                        },
                        "untrInvstmtVal": 1104.020000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 1076.020000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-18T09:25:00",
                            "clsgDtTm": "2022-08-19T05:00:00"
                        },
                        "untrInvstmtVal": 1108.930000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 1080.810000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-19T09:25:00",
                            "clsgDtTm": "2022-08-22T05:00:00"
                        },
                        "untrInvstmtVal": 1094.780000,
                        "anulInvstmtRate": 5.8500,
                        "untrRedVal": 1067.030000,
                        "anulRedRate": 5.9700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-22T09:25:00",
                            "clsgDtTm": "2022-08-23T05:00:00"
                        },
                        "untrInvstmtVal": 1092.600000,
                        "anulInvstmtRate": 5.8600,
                        "untrRedVal": 1064.920000,
                        "anulRedRate": 5.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-23T09:25:00",
                            "clsgDtTm": "2022-08-24T05:00:00"
                        },
                        "untrInvstmtVal": 1102.160000,
                        "anulInvstmtRate": 5.8200,
                        "untrRedVal": 1074.230000,
                        "anulRedRate": 5.9400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-24T09:25:00",
                            "clsgDtTm": "2022-08-25T05:00:00"
                        },
                        "untrInvstmtVal": 1104.690000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 1076.700000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-25T09:25:00",
                            "clsgDtTm": "2022-08-26T05:00:00"
                        },
                        "untrInvstmtVal": 1099.750000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 1071.890000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-26T09:25:00",
                            "clsgDtTm": "2022-08-29T05:00:00"
                        },
                        "untrInvstmtVal": 1092.610000,
                        "anulInvstmtRate": 5.8600,
                        "untrRedVal": 1064.940000,
                        "anulRedRate": 5.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-29T09:25:00",
                            "clsgDtTm": "2022-08-30T05:00:00"
                        },
                        "untrInvstmtVal": 1102.120000,
                        "anulInvstmtRate": 5.8200,
                        "untrRedVal": 1074.220000,
                        "anulRedRate": 5.9400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-30T09:25:00",
                            "clsgDtTm": "2022-08-31T05:00:00"
                        },
                        "untrInvstmtVal": 1085.880000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1058.410000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-08-31T09:25:00",
                            "clsgDtTm": "2022-09-01T05:00:00"
                        },
                        "untrInvstmtVal": 1088.340000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 1060.800000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-01T09:25:00",
                            "clsgDtTm": "2022-09-02T05:00:00"
                        },
                        "untrInvstmtVal": 1100.160000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 1072.320000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-02T09:25:00",
                            "clsgDtTm": "2022-09-05T05:00:00"
                        },
                        "untrInvstmtVal": 1116.640000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1088.370000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-05T09:25:00",
                            "clsgDtTm": "2022-09-06T05:00:00"
                        },
                        "untrInvstmtVal": 1116.770000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1088.500000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-06T09:25:00",
                            "clsgDtTm": "2022-09-08T05:00:00"
                        },
                        "untrInvstmtVal": 1104.910000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 1076.960000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-08T09:25:00",
                            "clsgDtTm": "2022-09-09T05:00:00"
                        },
                        "untrInvstmtVal": 1109.770000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 1081.690000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-09T09:25:00",
                            "clsgDtTm": "2022-09-12T05:00:00"
                        },
                        "untrInvstmtVal": 1123.680000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 1095.240000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-12T09:25:00",
                            "clsgDtTm": "2022-09-13T05:00:00"
                        },
                        "untrInvstmtVal": 1104.750000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 1076.820000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-13T09:25:00",
                            "clsgDtTm": "2022-09-14T05:00:00"
                        },
                        "untrInvstmtVal": 1083.850000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 1056.470000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-14T09:25:00",
                            "clsgDtTm": "2022-09-15T05:00:00"
                        },
                        "untrInvstmtVal": 1095.600000,
                        "anulInvstmtRate": 5.8500,
                        "untrRedVal": 1067.920000,
                        "anulRedRate": 5.9700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-15T09:25:00",
                            "clsgDtTm": "2022-09-16T05:00:00"
                        },
                        "untrInvstmtVal": 1081.870000,
                        "anulInvstmtRate": 5.9100,
                        "untrRedVal": 1054.550000,
                        "anulRedRate": 6.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-16T09:25:00",
                            "clsgDtTm": "2022-09-19T05:00:00"
                        },
                        "untrInvstmtVal": 1084.290000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 1056.920000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-19T09:25:00",
                            "clsgDtTm": "2022-09-20T05:00:00"
                        },
                        "untrInvstmtVal": 1110.240000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 1082.190000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-20T09:25:00",
                            "clsgDtTm": "2022-09-21T05:00:00"
                        },
                        "untrInvstmtVal": 1112.820000,
                        "anulInvstmtRate": 5.7800,
                        "untrRedVal": 1084.700000,
                        "anulRedRate": 5.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-21T09:25:00",
                            "clsgDtTm": "2022-09-22T05:00:00"
                        },
                        "untrInvstmtVal": 1117.780000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1089.540000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-22T09:25:00",
                            "clsgDtTm": "2022-09-23T05:00:00"
                        },
                        "untrInvstmtVal": 1149.440000,
                        "anulInvstmtRate": 5.6300,
                        "untrRedVal": 1120.370000,
                        "anulRedRate": 5.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-23T09:25:00",
                            "clsgDtTm": "2022-09-26T05:00:00"
                        },
                        "untrInvstmtVal": 1130.090000,
                        "anulInvstmtRate": 5.7100,
                        "untrRedVal": 1101.530000,
                        "anulRedRate": 5.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-26T09:25:00",
                            "clsgDtTm": "2022-09-27T05:00:00"
                        },
                        "untrInvstmtVal": 1115.920000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 1087.740000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-27T09:25:00",
                            "clsgDtTm": "2022-09-28T05:00:00"
                        },
                        "untrInvstmtVal": 1111.370000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 1083.320000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-28T09:25:00",
                            "clsgDtTm": "2022-09-29T05:00:00"
                        },
                        "untrInvstmtVal": 1115.280000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 1087.130000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-29T09:25:00",
                            "clsgDtTm": "2022-09-30T05:00:00"
                        },
                        "untrInvstmtVal": 1120.180000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1091.900000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-09-30T09:25:00",
                            "clsgDtTm": "2022-10-03T05:00:00"
                        },
                        "untrInvstmtVal": 1136.910000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 1108.200000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-03T09:25:00",
                            "clsgDtTm": "2022-10-04T05:00:00"
                        },
                        "untrInvstmtVal": 1166.520000,
                        "anulInvstmtRate": 5.5600,
                        "untrRedVal": 1137.030000,
                        "anulRedRate": 5.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-04T09:25:00",
                            "clsgDtTm": "2022-10-05T05:00:00"
                        },
                        "untrInvstmtVal": 1142.020000,
                        "anulInvstmtRate": 5.6600,
                        "untrRedVal": 1113.190000,
                        "anulRedRate": 5.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-05T09:25:00",
                            "clsgDtTm": "2022-10-06T05:00:00"
                        },
                        "untrInvstmtVal": 1142.150000,
                        "anulInvstmtRate": 5.6600,
                        "untrRedVal": 1113.320000,
                        "anulRedRate": 5.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-06T09:25:00",
                            "clsgDtTm": "2022-10-07T05:00:00"
                        },
                        "untrInvstmtVal": 1144.720000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 1115.820000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-07T09:25:00",
                            "clsgDtTm": "2022-10-10T05:00:00"
                        },
                        "untrInvstmtVal": 1132.470000,
                        "anulInvstmtRate": 5.7000,
                        "untrRedVal": 1103.900000,
                        "anulRedRate": 5.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-10T09:25:00",
                            "clsgDtTm": "2022-10-11T05:00:00"
                        },
                        "untrInvstmtVal": 1118.220000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1090.030000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-11T09:25:00",
                            "clsgDtTm": "2022-10-13T05:00:00"
                        },
                        "untrInvstmtVal": 1113.790000,
                        "anulInvstmtRate": 5.7800,
                        "untrRedVal": 1085.720000,
                        "anulRedRate": 5.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-13T09:25:00",
                            "clsgDtTm": "2022-10-14T05:00:00"
                        },
                        "untrInvstmtVal": 1113.930000,
                        "anulInvstmtRate": 5.7800,
                        "untrRedVal": 1085.860000,
                        "anulRedRate": 5.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-14T09:25:00",
                            "clsgDtTm": "2022-10-17T05:00:00"
                        },
                        "untrInvstmtVal": 1107.220000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 1079.330000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-17T09:25:00",
                            "clsgDtTm": "2022-10-18T05:00:00"
                        },
                        "untrInvstmtVal": 1119.430000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1091.230000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-18T09:25:00",
                            "clsgDtTm": "2022-10-19T05:00:00"
                        },
                        "untrInvstmtVal": 1126.960000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 1098.570000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-19T09:25:00",
                            "clsgDtTm": "2022-10-20T05:00:00"
                        },
                        "untrInvstmtVal": 1124.940000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 1096.600000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-20T09:25:00",
                            "clsgDtTm": "2022-10-21T05:00:00"
                        },
                        "untrInvstmtVal": 1120.530000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1092.320000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-21T09:25:00",
                            "clsgDtTm": "2022-10-24T05:00:00"
                        },
                        "untrInvstmtVal": 1121.140000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1092.910000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-24T09:25:00",
                            "clsgDtTm": "2022-10-25T05:00:00"
                        },
                        "untrInvstmtVal": 1114.380000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 1086.330000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-25T09:25:00",
                            "clsgDtTm": "2022-10-26T05:00:00"
                        },
                        "untrInvstmtVal": 1112.380000,
                        "anulInvstmtRate": 5.8000,
                        "untrRedVal": 1084.400000,
                        "anulRedRate": 5.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-26T09:25:00",
                            "clsgDtTm": "2022-10-27T05:00:00"
                        },
                        "untrInvstmtVal": 1108.500000,
                        "anulInvstmtRate": 5.8200,
                        "untrRedVal": 1080.620000,
                        "anulRedRate": 5.9400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-27T09:25:00",
                            "clsgDtTm": "2022-10-28T05:00:00"
                        },
                        "untrInvstmtVal": 1111.260000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 1083.320000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-28T09:25:00",
                            "clsgDtTm": "2022-10-31T05:00:00"
                        },
                        "untrInvstmtVal": 1107.270000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 1079.440000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-10-31T09:25:00",
                            "clsgDtTm": "2022-11-01T05:00:00"
                        },
                        "untrInvstmtVal": 1112.390000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 1084.430000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-01T09:25:00",
                            "clsgDtTm": "2022-11-03T05:00:00"
                        },
                        "untrInvstmtVal": 1129.620000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 1101.210000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-03T09:25:00",
                            "clsgDtTm": "2022-11-04T05:00:00"
                        },
                        "untrInvstmtVal": 1118.100000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 1090.000000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-04T09:25:00",
                            "clsgDtTm": "2022-11-07T05:00:00"
                        },
                        "untrInvstmtVal": 1118.820000,
                        "anulInvstmtRate": 5.7900,
                        "untrRedVal": 1090.710000,
                        "anulRedRate": 5.9100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-07T09:25:00",
                            "clsgDtTm": "2022-11-08T05:00:00"
                        },
                        "untrInvstmtVal": 1095.750000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1068.240000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-08T09:25:00",
                            "clsgDtTm": "2022-11-09T05:00:00"
                        },
                        "untrInvstmtVal": 1082.310000,
                        "anulInvstmtRate": 5.9500,
                        "untrRedVal": 1055.160000,
                        "anulRedRate": 6.0700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-09T09:25:00",
                            "clsgDtTm": "2022-11-10T05:00:00"
                        },
                        "untrInvstmtVal": 1089.610000,
                        "anulInvstmtRate": 5.9200,
                        "untrRedVal": 1062.280000,
                        "anulRedRate": 6.0400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-10T09:25:00",
                            "clsgDtTm": "2022-11-11T05:00:00"
                        },
                        "untrInvstmtVal": 1055.090000,
                        "anulInvstmtRate": 6.0800,
                        "untrRedVal": 1028.670000,
                        "anulRedRate": 6.2000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-11T09:25:00",
                            "clsgDtTm": "2022-11-14T05:00:00"
                        },
                        "untrInvstmtVal": 1047.050000,
                        "anulInvstmtRate": 6.1200,
                        "untrRedVal": 1020.840000,
                        "anulRedRate": 6.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-14T09:25:00",
                            "clsgDtTm": "2022-11-16T05:00:00"
                        },
                        "untrInvstmtVal": 1065.520000,
                        "anulInvstmtRate": 6.0400,
                        "untrRedVal": 1038.830000,
                        "anulRedRate": 6.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-16T09:25:00",
                            "clsgDtTm": "2022-11-17T05:00:00"
                        },
                        "untrInvstmtVal": 1061.430000,
                        "anulInvstmtRate": 6.0600,
                        "untrRedVal": 1034.860000,
                        "anulRedRate": 6.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-17T09:25:00",
                            "clsgDtTm": "2022-11-18T05:00:00"
                        },
                        "untrInvstmtVal": 1052.900000,
                        "anulInvstmtRate": 6.1000,
                        "untrRedVal": 1026.550000,
                        "anulRedRate": 6.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-18T09:25:00",
                            "clsgDtTm": "2022-11-21T05:00:00"
                        },
                        "untrInvstmtVal": 1038.160000,
                        "anulInvstmtRate": 6.1700,
                        "untrRedVal": 1012.210000,
                        "anulRedRate": 6.2900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-21T09:25:00",
                            "clsgDtTm": "2022-11-22T05:00:00"
                        },
                        "untrInvstmtVal": 1042.960000,
                        "anulInvstmtRate": 6.1500,
                        "untrRedVal": 1016.880000,
                        "anulRedRate": 6.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-22T09:25:00",
                            "clsgDtTm": "2022-11-23T05:00:00"
                        },
                        "untrInvstmtVal": 1023.730000,
                        "anulInvstmtRate": 6.2400,
                        "untrRedVal": 998.160000,
                        "anulRedRate": 6.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-23T09:25:00",
                            "clsgDtTm": "2022-11-24T05:00:00"
                        },
                        "untrInvstmtVal": 1015.530000,
                        "anulInvstmtRate": 6.2800,
                        "untrRedVal": 990.180000,
                        "anulRedRate": 6.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-24T09:25:00",
                            "clsgDtTm": "2022-11-25T05:00:00"
                        },
                        "untrInvstmtVal": 1028.860000,
                        "anulInvstmtRate": 6.2200,
                        "untrRedVal": 1003.170000,
                        "anulRedRate": 6.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-25T09:25:00",
                            "clsgDtTm": "2022-11-28T05:00:00"
                        },
                        "untrInvstmtVal": 1034.370000,
                        "anulInvstmtRate": 6.2000,
                        "untrRedVal": 1008.540000,
                        "anulRedRate": 6.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-28T09:25:00",
                            "clsgDtTm": "2022-11-29T05:00:00"
                        },
                        "untrInvstmtVal": 1039.170000,
                        "anulInvstmtRate": 6.1800,
                        "untrRedVal": 1013.220000,
                        "anulRedRate": 6.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-29T09:25:00",
                            "clsgDtTm": "2022-11-30T05:00:00"
                        },
                        "untrInvstmtVal": 1059.530000,
                        "anulInvstmtRate": 6.0900,
                        "untrRedVal": 1033.060000,
                        "anulRedRate": 6.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-11-30T09:25:00",
                            "clsgDtTm": "2022-12-01T05:00:00"
                        },
                        "untrInvstmtVal": 1068.960000,
                        "anulInvstmtRate": 6.0500,
                        "untrRedVal": 1042.250000,
                        "anulRedRate": 6.1700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-01T09:25:00",
                            "clsgDtTm": "2022-12-02T05:00:00"
                        },
                        "untrInvstmtVal": 1083.030000,
                        "anulInvstmtRate": 5.9900,
                        "untrRedVal": 1055.960000,
                        "anulRedRate": 6.1100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-02T09:25:00",
                            "clsgDtTm": "2022-12-05T05:00:00"
                        },
                        "untrInvstmtVal": 1079.320000,
                        "anulInvstmtRate": 6.0100,
                        "untrRedVal": 1052.340000,
                        "anulRedRate": 6.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-05T09:25:00",
                            "clsgDtTm": "2022-12-06T05:00:00"
                        },
                        "untrInvstmtVal": 1068.430000,
                        "anulInvstmtRate": 6.0600,
                        "untrRedVal": 1041.740000,
                        "anulRedRate": 6.1800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-06T09:25:00",
                            "clsgDtTm": "2022-12-07T05:00:00"
                        },
                        "untrInvstmtVal": 1035.620000,
                        "anulInvstmtRate": 6.2100,
                        "untrRedVal": 1009.790000,
                        "anulRedRate": 6.3300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-07T09:25:00",
                            "clsgDtTm": "2022-12-08T05:00:00"
                        },
                        "untrInvstmtVal": 1038.240000,
                        "anulInvstmtRate": 6.2000,
                        "untrRedVal": 1012.350000,
                        "anulRedRate": 6.3200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-08T09:25:00",
                            "clsgDtTm": "2022-12-09T05:00:00"
                        },
                        "untrInvstmtVal": 1029.970000,
                        "anulInvstmtRate": 6.2400,
                        "untrRedVal": 1004.300000,
                        "anulRedRate": 6.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-09T09:25:00",
                            "clsgDtTm": "2022-12-12T05:00:00"
                        },
                        "untrInvstmtVal": 1023.010000,
                        "anulInvstmtRate": 6.2700,
                        "untrRedVal": 997.530000,
                        "anulRedRate": 6.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-12T09:25:00",
                            "clsgDtTm": "2022-12-13T05:00:00"
                        },
                        "untrInvstmtVal": 1012.700000,
                        "anulInvstmtRate": 6.3200,
                        "untrRedVal": 987.490000,
                        "anulRedRate": 6.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-13T09:25:00",
                            "clsgDtTm": "2022-12-14T05:00:00"
                        },
                        "untrInvstmtVal": 992.020000,
                        "anulInvstmtRate": 6.4200,
                        "untrRedVal": 967.350000,
                        "anulRedRate": 6.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-14T09:25:00",
                            "clsgDtTm": "2022-12-15T05:00:00"
                        },
                        "untrInvstmtVal": 1007.100000,
                        "anulInvstmtRate": 6.3500,
                        "untrRedVal": 982.040000,
                        "anulRedRate": 6.4700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-15T09:25:00",
                            "clsgDtTm": "2022-12-16T05:00:00"
                        },
                        "untrInvstmtVal": 1018.160000,
                        "anulInvstmtRate": 6.3000,
                        "untrRedVal": 992.820000,
                        "anulRedRate": 6.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-16T09:25:00",
                            "clsgDtTm": "2022-12-19T05:00:00"
                        },
                        "untrInvstmtVal": 999.870000,
                        "anulInvstmtRate": 6.3900,
                        "untrRedVal": 975.010000,
                        "anulRedRate": 6.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-19T09:25:00",
                            "clsgDtTm": "2022-12-20T05:00:00"
                        },
                        "untrInvstmtVal": 1004.500000,
                        "anulInvstmtRate": 6.3700,
                        "untrRedVal": 979.530000,
                        "anulRedRate": 6.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-20T09:25:00",
                            "clsgDtTm": "2022-12-21T05:00:00"
                        },
                        "untrInvstmtVal": 1000.720000,
                        "anulInvstmtRate": 6.3900,
                        "untrRedVal": 975.840000,
                        "anulRedRate": 6.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-21T09:25:00",
                            "clsgDtTm": "2022-12-22T05:00:00"
                        },
                        "untrInvstmtVal": 1001.140000,
                        "anulInvstmtRate": 6.3900,
                        "untrRedVal": 976.260000,
                        "anulRedRate": 6.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-22T09:25:00",
                            "clsgDtTm": "2022-12-23T05:00:00"
                        },
                        "untrInvstmtVal": 999.460000,
                        "anulInvstmtRate": 6.4000,
                        "untrRedVal": 974.640000,
                        "anulRedRate": 6.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-23T09:25:00",
                            "clsgDtTm": "2022-12-26T05:00:00"
                        },
                        "untrInvstmtVal": 1008.670000,
                        "anulInvstmtRate": 6.3600,
                        "untrRedVal": 983.610000,
                        "anulRedRate": 6.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-26T09:25:00",
                            "clsgDtTm": "2022-12-27T05:00:00"
                        },
                        "untrInvstmtVal": 1017.130000,
                        "anulInvstmtRate": 6.3200,
                        "untrRedVal": 991.850000,
                        "anulRedRate": 6.4400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-27T09:25:00",
                            "clsgDtTm": "2022-12-28T05:00:00"
                        },
                        "untrInvstmtVal": 1019.650000,
                        "anulInvstmtRate": 6.3100,
                        "untrRedVal": 994.310000,
                        "anulRedRate": 6.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-28T09:25:00",
                            "clsgDtTm": "2022-12-29T05:00:00"
                        },
                        "untrInvstmtVal": 1048.260000,
                        "anulInvstmtRate": 6.1800,
                        "untrRedVal": 1022.180000,
                        "anulRedRate": 6.3000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2022-12-29T09:25:00",
                            "clsgDtTm": "2023-01-02T05:00:00"
                        },
                        "untrInvstmtVal": 1042.750000,
                        "anulInvstmtRate": 6.2100,
                        "untrRedVal": 0.0,
                        "anulRedRate": 0.0
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-02T09:25:00",
                            "clsgDtTm": "2023-01-03T05:00:00"
                        },
                        "untrInvstmtVal": 1036.600000,
                        "anulInvstmtRate": 6.2400,
                        "untrRedVal": 1010.840000,
                        "anulRedRate": 6.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-03T09:25:00",
                            "clsgDtTm": "2023-01-04T05:00:00"
                        },
                        "untrInvstmtVal": 1021.880000,
                        "anulInvstmtRate": 6.3100,
                        "untrRedVal": 996.510000,
                        "anulRedRate": 6.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-04T09:25:00",
                            "clsgDtTm": "2023-01-05T05:00:00"
                        },
                        "untrInvstmtVal": 1001.080000,
                        "anulInvstmtRate": 6.4100,
                        "untrRedVal": 976.250000,
                        "anulRedRate": 6.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-05T09:25:00",
                            "clsgDtTm": "2023-01-06T05:00:00"
                        },
                        "untrInvstmtVal": 1009.890000,
                        "anulInvstmtRate": 6.3700,
                        "untrRedVal": 984.840000,
                        "anulRedRate": 6.4900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-06T09:25:00",
                            "clsgDtTm": "2023-01-09T05:00:00"
                        },
                        "untrInvstmtVal": 1008.440000,
                        "anulInvstmtRate": 6.3800,
                        "untrRedVal": 983.430000,
                        "anulRedRate": 6.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-09T09:25:00",
                            "clsgDtTm": "2023-01-10T05:00:00"
                        },
                        "untrInvstmtVal": 1017.310000,
                        "anulInvstmtRate": 6.3400,
                        "untrRedVal": 992.080000,
                        "anulRedRate": 6.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-10T09:25:00",
                            "clsgDtTm": "2023-01-11T05:00:00"
                        },
                        "untrInvstmtVal": 1025.800000,
                        "anulInvstmtRate": 6.3100,
                        "untrRedVal": 1000.360000,
                        "anulRedRate": 6.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-11T09:25:00",
                            "clsgDtTm": "2023-01-12T05:00:00"
                        },
                        "untrInvstmtVal": 1037.060000,
                        "anulInvstmtRate": 6.2600,
                        "untrRedVal": 1011.330000,
                        "anulRedRate": 6.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-12T09:25:00",
                            "clsgDtTm": "2023-01-13T05:00:00"
                        },
                        "untrInvstmtVal": 1066.170000,
                        "anulInvstmtRate": 6.1300,
                        "untrRedVal": 1039.690000,
                        "anulRedRate": 6.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-13T09:25:00",
                            "clsgDtTm": "2023-01-16T05:00:00"
                        },
                        "untrInvstmtVal": 1060.340000,
                        "anulInvstmtRate": 6.1600,
                        "untrRedVal": 1034.010000,
                        "anulRedRate": 6.2800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-16T09:25:00",
                            "clsgDtTm": "2023-01-17T05:00:00"
                        },
                        "untrInvstmtVal": 1045.320000,
                        "anulInvstmtRate": 6.2300,
                        "untrRedVal": 1019.390000,
                        "anulRedRate": 6.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-17T09:25:00",
                            "clsgDtTm": "2023-01-18T05:00:00"
                        },
                        "untrInvstmtVal": 1045.750000,
                        "anulInvstmtRate": 6.2300,
                        "untrRedVal": 1019.810000,
                        "anulRedRate": 6.3500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-18T09:25:00",
                            "clsgDtTm": "2023-01-19T05:00:00"
                        },
                        "untrInvstmtVal": 1037.450000,
                        "anulInvstmtRate": 6.2700,
                        "untrRedVal": 1011.730000,
                        "anulRedRate": 6.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-19T09:25:00",
                            "clsgDtTm": "2023-01-20T05:00:00"
                        },
                        "untrInvstmtVal": 1033.540000,
                        "anulInvstmtRate": 6.2900,
                        "untrRedVal": 1007.930000,
                        "anulRedRate": 6.4100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-20T09:25:00",
                            "clsgDtTm": "2023-01-23T05:00:00"
                        },
                        "untrInvstmtVal": 1004.480000,
                        "anulInvstmtRate": 6.4300,
                        "untrRedVal": 979.620000,
                        "anulRedRate": 6.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-23T09:25:00",
                            "clsgDtTm": "2023-01-24T05:00:00"
                        },
                        "untrInvstmtVal": 1002.800000,
                        "anulInvstmtRate": 6.4400,
                        "untrRedVal": 977.990000,
                        "anulRedRate": 6.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-24T09:25:00",
                            "clsgDtTm": "2023-01-25T05:00:00"
                        },
                        "untrInvstmtVal": 992.800000,
                        "anulInvstmtRate": 6.4900,
                        "untrRedVal": 968.260000,
                        "anulRedRate": 6.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-25T09:25:00",
                            "clsgDtTm": "2023-01-26T05:00:00"
                        },
                        "untrInvstmtVal": 999.590000,
                        "anulInvstmtRate": 6.4600,
                        "untrRedVal": 974.880000,
                        "anulRedRate": 6.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-26T09:25:00",
                            "clsgDtTm": "2023-01-27T05:00:00"
                        },
                        "untrInvstmtVal": 995.850000,
                        "anulInvstmtRate": 6.4800,
                        "untrRedVal": 971.240000,
                        "anulRedRate": 6.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-27T09:25:00",
                            "clsgDtTm": "2023-01-30T05:00:00"
                        },
                        "untrInvstmtVal": 990.430000,
                        "anulInvstmtRate": 6.5100,
                        "untrRedVal": 965.960000,
                        "anulRedRate": 6.6300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-30T09:25:00",
                            "clsgDtTm": "2023-01-31T05:00:00"
                        },
                        "untrInvstmtVal": 992.920000,
                        "anulInvstmtRate": 6.5000,
                        "untrRedVal": 968.390000,
                        "anulRedRate": 6.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-01-31T09:25:00",
                            "clsgDtTm": "2023-02-01T05:00:00"
                        },
                        "untrInvstmtVal": 993.340000,
                        "anulInvstmtRate": 6.5000,
                        "untrRedVal": 968.810000,
                        "anulRedRate": 6.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-01T09:25:00",
                            "clsgDtTm": "2023-02-02T05:00:00"
                        },
                        "untrInvstmtVal": 995.850000,
                        "anulInvstmtRate": 6.4900,
                        "untrRedVal": 971.250000,
                        "anulRedRate": 6.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-02T09:25:00",
                            "clsgDtTm": "2023-02-03T05:00:00"
                        },
                        "untrInvstmtVal": 996.270000,
                        "anulInvstmtRate": 6.4900,
                        "untrRedVal": 971.680000,
                        "anulRedRate": 6.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-03T09:25:00",
                            "clsgDtTm": "2023-02-06T05:00:00"
                        },
                        "untrInvstmtVal": 997.060000,
                        "anulInvstmtRate": 6.4900,
                        "untrRedVal": 972.450000,
                        "anulRedRate": 6.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-06T09:25:00",
                            "clsgDtTm": "2023-02-07T05:00:00"
                        },
                        "untrInvstmtVal": 1007.940000,
                        "anulInvstmtRate": 6.4400,
                        "untrRedVal": 983.050000,
                        "anulRedRate": 6.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-07T09:25:00",
                            "clsgDtTm": "2023-02-08T05:00:00"
                        },
                        "untrInvstmtVal": 1008.370000,
                        "anulInvstmtRate": 6.4400,
                        "untrRedVal": 983.470000,
                        "anulRedRate": 6.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-08T09:25:00",
                            "clsgDtTm": "2023-02-09T05:00:00"
                        },
                        "untrInvstmtVal": 1010.910000,
                        "anulInvstmtRate": 6.4300,
                        "untrRedVal": 985.950000,
                        "anulRedRate": 6.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-09T09:25:00",
                            "clsgDtTm": "2023-02-10T05:00:00"
                        },
                        "untrInvstmtVal": 992.310000,
                        "anulInvstmtRate": 6.5200,
                        "untrRedVal": 967.840000,
                        "anulRedRate": 6.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-10T09:25:00",
                            "clsgDtTm": "2023-02-13T05:00:00"
                        },
                        "untrInvstmtVal": 1003.460000,
                        "anulInvstmtRate": 6.4700,
                        "untrRedVal": 978.700000,
                        "anulRedRate": 6.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-13T09:25:00",
                            "clsgDtTm": "2023-02-14T05:00:00"
                        },
                        "untrInvstmtVal": 1005.970000,
                        "anulInvstmtRate": 6.4600,
                        "untrRedVal": 981.160000,
                        "anulRedRate": 6.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-14T09:25:00",
                            "clsgDtTm": "2023-02-15T05:00:00"
                        },
                        "untrInvstmtVal": 1000.130000,
                        "anulInvstmtRate": 6.4900,
                        "untrRedVal": 975.470000,
                        "anulRedRate": 6.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-15T09:25:00",
                            "clsgDtTm": "2023-02-16T05:00:00"
                        },
                        "untrInvstmtVal": 1017.470000,
                        "anulInvstmtRate": 6.4100,
                        "untrRedVal": 992.370000,
                        "anulRedRate": 6.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-16T09:25:00",
                            "clsgDtTm": "2023-02-17T05:00:00"
                        },
                        "untrInvstmtVal": 1015.900000,
                        "anulInvstmtRate": 6.4200,
                        "untrRedVal": 990.840000,
                        "anulRedRate": 6.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-17T09:25:00",
                            "clsgDtTm": "2023-02-22T05:00:00"
                        },
                        "untrInvstmtVal": 1030.410000,
                        "anulInvstmtRate": 6.3600,
                        "untrRedVal": 1004.980000,
                        "anulRedRate": 6.4800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-22T09:25:00",
                            "clsgDtTm": "2023-02-23T05:00:00"
                        },
                        "untrInvstmtVal": 1035.260000,
                        "anulInvstmtRate": 6.3400,
                        "untrRedVal": 1009.720000,
                        "anulRedRate": 6.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-23T09:25:00",
                            "clsgDtTm": "2023-02-24T05:00:00"
                        },
                        "untrInvstmtVal": 1025.080000,
                        "anulInvstmtRate": 6.3900,
                        "untrRedVal": 999.810000,
                        "anulRedRate": 6.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-24T09:25:00",
                            "clsgDtTm": "2023-02-27T05:00:00"
                        },
                        "untrInvstmtVal": 1011.380000,
                        "anulInvstmtRate": 6.4600,
                        "untrRedVal": 986.470000,
                        "anulRedRate": 6.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-27T09:25:00",
                            "clsgDtTm": "2023-02-28T05:00:00"
                        },
                        "untrInvstmtVal": 1026.580000,
                        "anulInvstmtRate": 6.3900,
                        "untrRedVal": 1001.280000,
                        "anulRedRate": 6.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-02-28T09:25:00",
                            "clsgDtTm": "2023-03-01T05:00:00"
                        },
                        "untrInvstmtVal": 1001.800000,
                        "anulInvstmtRate": 6.5100,
                        "untrRedVal": 977.140000,
                        "anulRedRate": 6.6300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-01T09:25:00",
                            "clsgDtTm": "2023-03-02T05:00:00"
                        },
                        "untrInvstmtVal": 998.170000,
                        "anulInvstmtRate": 6.5300,
                        "untrRedVal": 973.610000,
                        "anulRedRate": 6.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-02T09:25:00",
                            "clsgDtTm": "2023-03-03T05:00:00"
                        },
                        "untrInvstmtVal": 994.560000,
                        "anulInvstmtRate": 6.5500,
                        "untrRedVal": 970.090000,
                        "anulRedRate": 6.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-03T09:25:00",
                            "clsgDtTm": "2023-03-06T05:00:00"
                        },
                        "untrInvstmtVal": 991.500000,
                        "anulInvstmtRate": 6.5700,
                        "untrRedVal": 967.120000,
                        "anulRedRate": 6.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-06T09:25:00",
                            "clsgDtTm": "2023-03-07T05:00:00"
                        },
                        "untrInvstmtVal": 992.020000,
                        "anulInvstmtRate": 6.5700,
                        "untrRedVal": 967.630000,
                        "anulRedRate": 6.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-07T09:25:00",
                            "clsgDtTm": "2023-03-08T05:00:00"
                        },
                        "untrInvstmtVal": 998.740000,
                        "anulInvstmtRate": 6.5400,
                        "untrRedVal": 974.180000,
                        "anulRedRate": 6.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-08T09:25:00",
                            "clsgDtTm": "2023-03-09T05:00:00"
                        },
                        "untrInvstmtVal": 999.270000,
                        "anulInvstmtRate": 6.5400,
                        "untrRedVal": 974.700000,
                        "anulRedRate": 6.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-09T09:25:00",
                            "clsgDtTm": "2023-03-10T05:00:00"
                        },
                        "untrInvstmtVal": 1010.220000,
                        "anulInvstmtRate": 6.4900,
                        "untrRedVal": 985.380000,
                        "anulRedRate": 6.6100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-10T09:25:00",
                            "clsgDtTm": "2023-03-13T05:00:00"
                        },
                        "untrInvstmtVal": 1009.860000,
                        "anulInvstmtRate": 6.5000,
                        "untrRedVal": 985.030000,
                        "anulRedRate": 6.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-13T09:25:00",
                            "clsgDtTm": "2023-03-14T05:00:00"
                        },
                        "untrInvstmtVal": 1023.070000,
                        "anulInvstmtRate": 6.4400,
                        "untrRedVal": 997.920000,
                        "anulRedRate": 6.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-14T09:25:00",
                            "clsgDtTm": "2023-03-15T05:00:00"
                        },
                        "untrInvstmtVal": 1010.970000,
                        "anulInvstmtRate": 6.5000,
                        "untrRedVal": 986.120000,
                        "anulRedRate": 6.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-15T09:25:00",
                            "clsgDtTm": "2023-03-16T05:00:00"
                        },
                        "untrInvstmtVal": 1005.190000,
                        "anulInvstmtRate": 6.5300,
                        "untrRedVal": 980.500000,
                        "anulRedRate": 6.6500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-16T09:25:00",
                            "clsgDtTm": "2023-03-17T05:00:00"
                        },
                        "untrInvstmtVal": 1009.860000,
                        "anulInvstmtRate": 6.5100,
                        "untrRedVal": 985.050000,
                        "anulRedRate": 6.6300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-17T09:25:00",
                            "clsgDtTm": "2023-03-20T05:00:00"
                        },
                        "untrInvstmtVal": 1023.490000,
                        "anulInvstmtRate": 6.4500,
                        "untrRedVal": 998.340000,
                        "anulRedRate": 6.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-20T09:25:00",
                            "clsgDtTm": "2023-03-21T05:00:00"
                        },
                        "untrInvstmtVal": 1023.990000,
                        "anulInvstmtRate": 6.4500,
                        "untrRedVal": 998.830000,
                        "anulRedRate": 6.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-21T09:25:00",
                            "clsgDtTm": "2023-03-22T05:00:00"
                        },
                        "untrInvstmtVal": 1020.240000,
                        "anulInvstmtRate": 6.4700,
                        "untrRedVal": 995.190000,
                        "anulRedRate": 6.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-22T09:25:00",
                            "clsgDtTm": "2023-03-23T05:00:00"
                        },
                        "untrInvstmtVal": 1018.630000,
                        "anulInvstmtRate": 6.4800,
                        "untrRedVal": 993.620000,
                        "anulRedRate": 6.6000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-23T09:25:00",
                            "clsgDtTm": "2023-03-24T05:00:00"
                        },
                        "untrInvstmtVal": 1021.240000,
                        "anulInvstmtRate": 6.4700,
                        "untrRedVal": 996.170000,
                        "anulRedRate": 6.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-24T09:25:00",
                            "clsgDtTm": "2023-03-27T05:00:00"
                        },
                        "untrInvstmtVal": 1035.020000,
                        "anulInvstmtRate": 6.4100,
                        "untrRedVal": 1009.590000,
                        "anulRedRate": 6.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-27T09:25:00",
                            "clsgDtTm": "2023-03-28T05:00:00"
                        },
                        "untrInvstmtVal": 1050.750000,
                        "anulInvstmtRate": 6.3400,
                        "untrRedVal": 1024.930000,
                        "anulRedRate": 6.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-28T09:25:00",
                            "clsgDtTm": "2023-03-29T05:00:00"
                        },
                        "untrInvstmtVal": 1051.260000,
                        "anulInvstmtRate": 6.3400,
                        "untrRedVal": 1025.430000,
                        "anulRedRate": 6.4600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-29T09:25:00",
                            "clsgDtTm": "2023-03-30T05:00:00"
                        },
                        "untrInvstmtVal": 1060.530000,
                        "anulInvstmtRate": 6.3000,
                        "untrRedVal": 1034.470000,
                        "anulRedRate": 6.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-30T09:25:00",
                            "clsgDtTm": "2023-03-31T05:00:00"
                        },
                        "untrInvstmtVal": 1061.050000,
                        "anulInvstmtRate": 6.3000,
                        "untrRedVal": 1034.980000,
                        "anulRedRate": 6.4200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-03-31T09:25:00",
                            "clsgDtTm": "2023-04-03T05:00:00"
                        },
                        "untrInvstmtVal": 1055.500000,
                        "anulInvstmtRate": 6.3300,
                        "untrRedVal": 1029.580000,
                        "anulRedRate": 6.4500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-03T09:25:00",
                            "clsgDtTm": "2023-04-04T05:00:00"
                        },
                        "untrInvstmtVal": 1060.400000,
                        "anulInvstmtRate": 6.3100,
                        "untrRedVal": 1034.360000,
                        "anulRedRate": 6.4300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-04T09:25:00",
                            "clsgDtTm": "2023-04-05T05:00:00"
                        },
                        "untrInvstmtVal": 1069.750000,
                        "anulInvstmtRate": 6.2700,
                        "untrRedVal": 1043.480000,
                        "anulRedRate": 6.3900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-05T09:25:00",
                            "clsgDtTm": "2023-04-06T05:00:00"
                        },
                        "untrInvstmtVal": 1076.950000,
                        "anulInvstmtRate": 6.2400,
                        "untrRedVal": 1050.500000,
                        "anulRedRate": 6.3600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-06T09:25:00",
                            "clsgDtTm": "2023-04-10T05:00:00"
                        },
                        "untrInvstmtVal": 1073.800000,
                        "anulInvstmtRate": 6.2600,
                        "untrRedVal": 1047.430000,
                        "anulRedRate": 6.3800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-10T09:25:00",
                            "clsgDtTm": "2023-04-11T05:00:00"
                        },
                        "untrInvstmtVal": 1069.880000,
                        "anulInvstmtRate": 6.2800,
                        "untrRedVal": 1043.620000,
                        "anulRedRate": 6.4000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-11T09:25:00",
                            "clsgDtTm": "2023-04-12T05:00:00"
                        },
                        "untrInvstmtVal": 1076.590000,
                        "anulInvstmtRate": 6.2500,
                        "untrRedVal": 1050.160000,
                        "anulRedRate": 6.3700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-12T09:25:00",
                            "clsgDtTm": "2023-04-13T05:00:00"
                        },
                        "untrInvstmtVal": 1083.810000,
                        "anulInvstmtRate": 6.2200,
                        "untrRedVal": 1057.200000,
                        "anulRedRate": 6.3400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-13T09:25:00",
                            "clsgDtTm": "2023-04-14T05:00:00"
                        },
                        "untrInvstmtVal": 1100.170000,
                        "anulInvstmtRate": 6.1500,
                        "untrRedVal": 1073.140000,
                        "anulRedRate": 6.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-14T09:25:00",
                            "clsgDtTm": "2023-04-17T05:00:00"
                        },
                        "untrInvstmtVal": 1105.630000,
                        "anulInvstmtRate": 6.1300,
                        "untrRedVal": 1078.480000,
                        "anulRedRate": 6.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-17T09:25:00",
                            "clsgDtTm": "2023-04-18T05:00:00"
                        },
                        "untrInvstmtVal": 1112.990000,
                        "anulInvstmtRate": 6.1000,
                        "untrRedVal": 1085.650000,
                        "anulRedRate": 6.2200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-18T09:25:00",
                            "clsgDtTm": "2023-04-19T05:00:00"
                        },
                        "untrInvstmtVal": 1108.840000,
                        "anulInvstmtRate": 6.1200,
                        "untrRedVal": 1081.610000,
                        "anulRedRate": 6.2400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-19T09:25:00",
                            "clsgDtTm": "2023-04-20T05:00:00"
                        },
                        "untrInvstmtVal": 1102.410000,
                        "anulInvstmtRate": 6.1500,
                        "untrRedVal": 1075.360000,
                        "anulRedRate": 6.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-20T09:25:00",
                            "clsgDtTm": "2023-04-24T05:00:00"
                        },
                        "untrInvstmtVal": 1103.440000,
                        "anulInvstmtRate": 6.1500,
                        "untrRedVal": 1076.360000,
                        "anulRedRate": 6.2700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-24T09:25:00",
                            "clsgDtTm": "2023-04-25T05:00:00"
                        },
                        "untrInvstmtVal": 1108.470000,
                        "anulInvstmtRate": 6.1300,
                        "untrRedVal": 1081.270000,
                        "anulRedRate": 6.2500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-25T09:25:00",
                            "clsgDtTm": "2023-04-26T05:00:00"
                        },
                        "untrInvstmtVal": 1118.160000,
                        "anulInvstmtRate": 6.0900,
                        "untrRedVal": 1090.710000,
                        "anulRedRate": 6.2100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-26T09:25:00",
                            "clsgDtTm": "2023-04-27T05:00:00"
                        },
                        "untrInvstmtVal": 1130.260000,
                        "anulInvstmtRate": 6.0400,
                        "untrRedVal": 1102.510000,
                        "anulRedRate": 6.1600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-27T09:25:00",
                            "clsgDtTm": "2023-04-28T05:00:00"
                        },
                        "untrInvstmtVal": 1135.560000,
                        "anulInvstmtRate": 6.0200,
                        "untrRedVal": 1107.680000,
                        "anulRedRate": 6.1400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-04-28T09:25:00",
                            "clsgDtTm": "2023-05-02T05:00:00"
                        },
                        "untrInvstmtVal": 1134.300000,
                        "anulInvstmtRate": 6.0300,
                        "untrRedVal": 1106.460000,
                        "anulRedRate": 6.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-02T09:25:00",
                            "clsgDtTm": "2023-05-03T05:00:00"
                        },
                        "untrInvstmtVal": 1134.780000,
                        "anulInvstmtRate": 6.0300,
                        "untrRedVal": 1106.920000,
                        "anulRedRate": 6.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-03T09:25:00",
                            "clsgDtTm": "2023-05-04T05:00:00"
                        },
                        "untrInvstmtVal": 1135.250000,
                        "anulInvstmtRate": 6.0300,
                        "untrRedVal": 1107.390000,
                        "anulRedRate": 6.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-04T09:25:00",
                            "clsgDtTm": "2023-05-05T05:00:00"
                        },
                        "untrInvstmtVal": 1149.920000,
                        "anulInvstmtRate": 5.9700,
                        "untrRedVal": 1121.700000,
                        "anulRedRate": 6.0900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-05T09:25:00",
                            "clsgDtTm": "2023-05-08T05:00:00"
                        },
                        "untrInvstmtVal": 1148.440000,
                        "anulInvstmtRate": 5.9800,
                        "untrRedVal": 1120.260000,
                        "anulRedRate": 6.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-08T09:25:00",
                            "clsgDtTm": "2023-05-09T05:00:00"
                        },
                        "untrInvstmtVal": 1144.170000,
                        "anulInvstmtRate": 6.0000,
                        "untrRedVal": 1116.100000,
                        "anulRedRate": 6.1200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-09T09:25:00",
                            "clsgDtTm": "2023-05-10T05:00:00"
                        },
                        "untrInvstmtVal": 1137.550000,
                        "anulInvstmtRate": 6.0300,
                        "untrRedVal": 1109.660000,
                        "anulRedRate": 6.1500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-10T09:25:00",
                            "clsgDtTm": "2023-05-11T05:00:00"
                        },
                        "untrInvstmtVal": 1140.380000,
                        "anulInvstmtRate": 6.0200,
                        "untrRedVal": 1112.420000,
                        "anulRedRate": 6.1400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-11T09:25:00",
                            "clsgDtTm": "2023-05-12T05:00:00"
                        },
                        "untrInvstmtVal": 1150.340000,
                        "anulInvstmtRate": 5.9800,
                        "untrRedVal": 1122.130000,
                        "anulRedRate": 6.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-12T09:25:00",
                            "clsgDtTm": "2023-05-15T05:00:00"
                        },
                        "untrInvstmtVal": 1168.740000,
                        "anulInvstmtRate": 5.9100,
                        "untrRedVal": 1140.060000,
                        "anulRedRate": 6.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-15T09:25:00",
                            "clsgDtTm": "2023-05-16T05:00:00"
                        },
                        "untrInvstmtVal": 1176.480000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 1147.610000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-16T09:25:00",
                            "clsgDtTm": "2023-05-17T05:00:00"
                        },
                        "untrInvstmtVal": 1172.070000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 1143.320000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-17T09:25:00",
                            "clsgDtTm": "2023-05-18T05:00:00"
                        },
                        "untrInvstmtVal": 1172.520000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 1143.760000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-18T09:25:00",
                            "clsgDtTm": "2023-05-19T05:00:00"
                        },
                        "untrInvstmtVal": 1175.400000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1146.580000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-19T09:25:00",
                            "clsgDtTm": "2023-05-22T05:00:00"
                        },
                        "untrInvstmtVal": 1173.790000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 1145.020000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-22T09:25:00",
                            "clsgDtTm": "2023-05-23T05:00:00"
                        },
                        "untrInvstmtVal": 1184.010000,
                        "anulInvstmtRate": 5.8600,
                        "untrRedVal": 1154.970000,
                        "anulRedRate": 5.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-23T09:25:00",
                            "clsgDtTm": "2023-05-24T05:00:00"
                        },
                        "untrInvstmtVal": 1182.010000,
                        "anulInvstmtRate": 5.8700,
                        "untrRedVal": 1153.040000,
                        "anulRedRate": 5.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-24T09:25:00",
                            "clsgDtTm": "2023-05-25T05:00:00"
                        },
                        "untrInvstmtVal": 1187.370000,
                        "anulInvstmtRate": 5.8500,
                        "untrRedVal": 1158.260000,
                        "anulRedRate": 5.9700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-25T09:25:00",
                            "clsgDtTm": "2023-05-26T05:00:00"
                        },
                        "untrInvstmtVal": 1192.750000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 1163.510000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-26T09:25:00",
                            "clsgDtTm": "2023-05-29T05:00:00"
                        },
                        "untrInvstmtVal": 1200.310000,
                        "anulInvstmtRate": 5.8000,
                        "untrRedVal": 1170.890000,
                        "anulRedRate": 5.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-29T09:25:00",
                            "clsgDtTm": "2023-05-30T05:00:00"
                        },
                        "untrInvstmtVal": 1205.700000,
                        "anulInvstmtRate": 5.7800,
                        "untrRedVal": 1176.140000,
                        "anulRedRate": 5.9000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-30T09:25:00",
                            "clsgDtTm": "2023-05-31T05:00:00"
                        },
                        "untrInvstmtVal": 1211.110000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1181.420000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-05-31T09:25:00",
                            "clsgDtTm": "2023-06-01T05:00:00"
                        },
                        "untrInvstmtVal": 1211.520000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1181.830000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-01T09:25:00",
                            "clsgDtTm": "2023-06-02T05:00:00"
                        },
                        "untrInvstmtVal": 1209.430000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 1179.790000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-02T09:25:00",
                            "clsgDtTm": "2023-06-05T05:00:00"
                        },
                        "untrInvstmtVal": 1215.130000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1185.350000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-05T09:25:00",
                            "clsgDtTm": "2023-06-06T05:00:00"
                        },
                        "untrInvstmtVal": 1223.110000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1193.140000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-06T09:25:00",
                            "clsgDtTm": "2023-06-07T05:00:00"
                        },
                        "untrInvstmtVal": 1236.250000,
                        "anulInvstmtRate": 5.6700,
                        "untrRedVal": 1205.940000,
                        "anulRedRate": 5.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-07T09:25:00",
                            "clsgDtTm": "2023-06-09T05:00:00"
                        },
                        "untrInvstmtVal": 1238.070000,
                        "anulInvstmtRate": 5.6600,
                        "untrRedVal": 1207.720000,
                        "anulRedRate": 5.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-09T09:25:00",
                            "clsgDtTm": "2023-06-12T05:00:00"
                        },
                        "untrInvstmtVal": 1236.060000,
                        "anulInvstmtRate": 5.6700,
                        "untrRedVal": 1205.770000,
                        "anulRedRate": 5.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-12T09:25:00",
                            "clsgDtTm": "2023-06-13T05:00:00"
                        },
                        "untrInvstmtVal": 1238.980000,
                        "anulInvstmtRate": 5.6600,
                        "untrRedVal": 1208.620000,
                        "anulRedRate": 5.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-13T09:25:00",
                            "clsgDtTm": "2023-06-14T05:00:00"
                        },
                        "untrInvstmtVal": 1231.680000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 1201.510000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-14T09:25:00",
                            "clsgDtTm": "2023-06-15T05:00:00"
                        },
                        "untrInvstmtVal": 1232.040000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 1201.860000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-15T09:25:00",
                            "clsgDtTm": "2023-06-16T05:00:00"
                        },
                        "untrInvstmtVal": 1239.980000,
                        "anulInvstmtRate": 5.6600,
                        "untrRedVal": 1209.610000,
                        "anulRedRate": 5.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-16T09:25:00",
                            "clsgDtTm": "2023-06-19T05:00:00"
                        },
                        "untrInvstmtVal": 1235.160000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 1204.920000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-19T09:25:00",
                            "clsgDtTm": "2023-06-20T05:00:00"
                        },
                        "untrInvstmtVal": 1245.700000,
                        "anulInvstmtRate": 5.6400,
                        "untrRedVal": 1215.190000,
                        "anulRedRate": 5.7600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-20T09:25:00",
                            "clsgDtTm": "2023-06-21T05:00:00"
                        },
                        "untrInvstmtVal": 1248.550000,
                        "anulInvstmtRate": 5.6300,
                        "untrRedVal": 1217.980000,
                        "anulRedRate": 5.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-21T09:25:00",
                            "clsgDtTm": "2023-06-22T05:00:00"
                        },
                        "untrInvstmtVal": 1254.010000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1223.300000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-22T09:25:00",
                            "clsgDtTm": "2023-06-23T05:00:00"
                        },
                        "untrInvstmtVal": 1254.290000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1223.580000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-23T09:25:00",
                            "clsgDtTm": "2023-06-26T05:00:00"
                        },
                        "untrInvstmtVal": 1254.580000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1223.870000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-26T09:25:00",
                            "clsgDtTm": "2023-06-27T05:00:00"
                        },
                        "untrInvstmtVal": 1252.270000,
                        "anulInvstmtRate": 5.6200,
                        "untrRedVal": 1221.630000,
                        "anulRedRate": 5.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-27T09:25:00",
                            "clsgDtTm": "2023-06-28T05:00:00"
                        },
                        "untrInvstmtVal": 1242.250000,
                        "anulInvstmtRate": 5.6600,
                        "untrRedVal": 1211.870000,
                        "anulRedRate": 5.7800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-28T09:25:00",
                            "clsgDtTm": "2023-06-29T05:00:00"
                        },
                        "untrInvstmtVal": 1239.330000,
                        "anulInvstmtRate": 5.6700,
                        "untrRedVal": 1209.030000,
                        "anulRedRate": 5.7900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-29T09:25:00",
                            "clsgDtTm": "2023-06-30T05:00:00"
                        },
                        "untrInvstmtVal": 1237.010000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 1206.770000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-06-30T09:25:00",
                            "clsgDtTm": "2023-07-03T05:00:00"
                        },
                        "untrInvstmtVal": 1265.580000,
                        "anulInvstmtRate": 5.5700,
                        "untrRedVal": 1234.620000,
                        "anulRedRate": 5.6900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-03T09:25:00",
                            "clsgDtTm": "2023-07-04T05:00:00"
                        },
                        "untrInvstmtVal": 1281.600000,
                        "anulInvstmtRate": 5.5100,
                        "untrRedVal": 1250.230000,
                        "anulRedRate": 5.6300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-04T09:25:00",
                            "clsgDtTm": "2023-07-05T05:00:00"
                        },
                        "untrInvstmtVal": 1260.830000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1230.010000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-05T09:25:00",
                            "clsgDtTm": "2023-07-06T05:00:00"
                        },
                        "untrInvstmtVal": 1261.070000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1230.240000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-06T09:25:00",
                            "clsgDtTm": "2023-07-07T05:00:00"
                        },
                        "untrInvstmtVal": 1245.790000,
                        "anulInvstmtRate": 5.6500,
                        "untrRedVal": 1215.360000,
                        "anulRedRate": 5.7700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-07T09:25:00",
                            "clsgDtTm": "2023-07-10T05:00:00"
                        },
                        "untrInvstmtVal": 1261.460000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1230.630000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-10T09:25:00",
                            "clsgDtTm": "2023-07-11T05:00:00"
                        },
                        "untrInvstmtVal": 1256.500000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1225.810000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-11T09:25:00",
                            "clsgDtTm": "2023-07-12T05:00:00"
                        },
                        "untrInvstmtVal": 1254.260000,
                        "anulInvstmtRate": 5.6200,
                        "untrRedVal": 1223.630000,
                        "anulRedRate": 5.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-12T09:25:00",
                            "clsgDtTm": "2023-07-13T05:00:00"
                        },
                        "untrInvstmtVal": 1257.090000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1226.390000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-13T09:25:00",
                            "clsgDtTm": "2023-07-14T05:00:00"
                        },
                        "untrInvstmtVal": 1259.920000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 1229.160000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-14T09:25:00",
                            "clsgDtTm": "2023-07-17T05:00:00"
                        },
                        "untrInvstmtVal": 1255.060000,
                        "anulInvstmtRate": 5.6200,
                        "untrRedVal": 1224.430000,
                        "anulRedRate": 5.7400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-17T09:25:00",
                            "clsgDtTm": "2023-07-18T05:00:00"
                        },
                        "untrInvstmtVal": 1263.160000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1232.320000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-18T09:25:00",
                            "clsgDtTm": "2023-07-19T05:00:00"
                        },
                        "untrInvstmtVal": 1263.470000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1232.630000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-19T09:25:00",
                            "clsgDtTm": "2023-07-20T05:00:00"
                        },
                        "untrInvstmtVal": 1263.780000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1232.950000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-20T09:25:00",
                            "clsgDtTm": "2023-07-21T05:00:00"
                        },
                        "untrInvstmtVal": 1264.100000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1233.260000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-21T09:25:00",
                            "clsgDtTm": "2023-07-24T05:00:00"
                        },
                        "untrInvstmtVal": 1277.580000,
                        "anulInvstmtRate": 5.5400,
                        "untrRedVal": 1246.400000,
                        "anulRedRate": 5.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-24T09:25:00",
                            "clsgDtTm": "2023-07-25T05:00:00"
                        },
                        "untrInvstmtVal": 1285.820000,
                        "anulInvstmtRate": 5.5100,
                        "untrRedVal": 1254.440000,
                        "anulRedRate": 5.6300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-25T09:25:00",
                            "clsgDtTm": "2023-07-26T05:00:00"
                        },
                        "untrInvstmtVal": 1288.790000,
                        "anulInvstmtRate": 5.5000,
                        "untrRedVal": 1257.330000,
                        "anulRedRate": 5.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-26T09:25:00",
                            "clsgDtTm": "2023-07-27T05:00:00"
                        },
                        "untrInvstmtVal": 1283.700000,
                        "anulInvstmtRate": 5.5200,
                        "untrRedVal": 1252.380000,
                        "anulRedRate": 5.6400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-27T09:25:00",
                            "clsgDtTm": "2023-07-28T05:00:00"
                        },
                        "untrInvstmtVal": 1278.730000,
                        "anulInvstmtRate": 5.5400,
                        "untrRedVal": 1247.550000,
                        "anulRedRate": 5.6600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-28T09:25:00",
                            "clsgDtTm": "2023-07-31T05:00:00"
                        },
                        "untrInvstmtVal": 1289.680000,
                        "anulInvstmtRate": 5.5000,
                        "untrRedVal": 1258.230000,
                        "anulRedRate": 5.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-07-31T09:25:00",
                            "clsgDtTm": "2023-08-01T05:00:00"
                        },
                        "untrInvstmtVal": 1297.980000,
                        "anulInvstmtRate": 5.4700,
                        "untrRedVal": 1266.320000,
                        "anulRedRate": 5.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-01T09:25:00",
                            "clsgDtTm": "2023-08-02T05:00:00"
                        },
                        "untrInvstmtVal": 1300.960000,
                        "anulInvstmtRate": 5.4600,
                        "untrRedVal": 1269.230000,
                        "anulRedRate": 5.5800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-02T09:25:00",
                            "clsgDtTm": "2023-08-03T05:00:00"
                        },
                        "untrInvstmtVal": 1306.640000,
                        "anulInvstmtRate": 5.4400,
                        "untrRedVal": 1274.770000,
                        "anulRedRate": 5.5600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-03T09:25:00",
                            "clsgDtTm": "2023-08-04T05:00:00"
                        },
                        "untrInvstmtVal": 1304.260000,
                        "anulInvstmtRate": 5.4500,
                        "untrRedVal": 1272.460000,
                        "anulRedRate": 5.5700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-04T09:25:00",
                            "clsgDtTm": "2023-08-07T05:00:00"
                        },
                        "untrInvstmtVal": 1312.720000,
                        "anulInvstmtRate": 5.4200,
                        "untrRedVal": 1280.710000,
                        "anulRedRate": 5.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-07T09:25:00",
                            "clsgDtTm": "2023-08-08T05:00:00"
                        },
                        "untrInvstmtVal": 1299.590000,
                        "anulInvstmtRate": 5.4700,
                        "untrRedVal": 1267.920000,
                        "anulRedRate": 5.5900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-08T09:25:00",
                            "clsgDtTm": "2023-08-09T05:00:00"
                        },
                        "untrInvstmtVal": 1310.640000,
                        "anulInvstmtRate": 5.4300,
                        "untrRedVal": 1278.690000,
                        "anulRedRate": 5.5500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-09T09:25:00",
                            "clsgDtTm": "2023-08-10T05:00:00"
                        },
                        "untrInvstmtVal": 1319.060000,
                        "anulInvstmtRate": 5.4000,
                        "untrRedVal": 1286.910000,
                        "anulRedRate": 5.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-10T09:25:00",
                            "clsgDtTm": "2023-08-11T05:00:00"
                        },
                        "untrInvstmtVal": 1319.370000,
                        "anulInvstmtRate": 5.4000,
                        "untrRedVal": 1287.220000,
                        "anulRedRate": 5.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-11T09:25:00",
                            "clsgDtTm": "2023-08-14T05:00:00"
                        },
                        "untrInvstmtVal": 1322.980000,
                        "anulInvstmtRate": 5.3900,
                        "untrRedVal": 1290.740000,
                        "anulRedRate": 5.5100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-14T09:25:00",
                            "clsgDtTm": "2023-08-15T05:00:00"
                        },
                        "untrInvstmtVal": 1317.870000,
                        "anulInvstmtRate": 5.4100,
                        "untrRedVal": 1285.760000,
                        "anulRedRate": 5.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-15T09:25:00",
                            "clsgDtTm": "2023-08-16T05:00:00"
                        },
                        "untrInvstmtVal": 1320.930000,
                        "anulInvstmtRate": 5.4000,
                        "untrRedVal": 1288.750000,
                        "anulRedRate": 5.5200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-16T09:25:00",
                            "clsgDtTm": "2023-08-17T05:00:00"
                        },
                        "untrInvstmtVal": 1326.710000,
                        "anulInvstmtRate": 5.3800,
                        "untrRedVal": 1294.390000,
                        "anulRedRate": 5.5000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-17T09:25:00",
                            "clsgDtTm": "2023-08-18T05:00:00"
                        },
                        "untrInvstmtVal": 1318.890000,
                        "anulInvstmtRate": 5.4100,
                        "untrRedVal": 1286.780000,
                        "anulRedRate": 5.5300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-18T09:25:00",
                            "clsgDtTm": "2023-08-21T05:00:00"
                        },
                        "untrInvstmtVal": 1316.650000,
                        "anulInvstmtRate": 5.4200,
                        "untrRedVal": 1284.600000,
                        "anulRedRate": 5.5400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-21T09:25:00",
                            "clsgDtTm": "2023-08-22T05:00:00"
                        },
                        "untrInvstmtVal": 1295.530000,
                        "anulInvstmtRate": 5.5000,
                        "untrRedVal": 1264.020000,
                        "anulRedRate": 5.6200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-22T09:25:00",
                            "clsgDtTm": "2023-08-23T05:00:00"
                        },
                        "untrInvstmtVal": 1282.640000,
                        "anulInvstmtRate": 5.5500,
                        "untrRedVal": 1251.460000,
                        "anulRedRate": 5.6700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-23T09:25:00",
                            "clsgDtTm": "2023-08-24T05:00:00"
                        },
                        "untrInvstmtVal": 1280.350000,
                        "anulInvstmtRate": 5.5600,
                        "untrRedVal": 1249.240000,
                        "anulRedRate": 5.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-24T09:25:00",
                            "clsgDtTm": "2023-08-25T05:00:00"
                        },
                        "untrInvstmtVal": 1272.830000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1241.920000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-25T09:25:00",
                            "clsgDtTm": "2023-08-28T05:00:00"
                        },
                        "untrInvstmtVal": 1273.290000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1242.370000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-28T09:25:00",
                            "clsgDtTm": "2023-08-29T05:00:00"
                        },
                        "untrInvstmtVal": 1269.040000,
                        "anulInvstmtRate": 5.6100,
                        "untrRedVal": 1238.240000,
                        "anulRedRate": 5.7300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-29T09:25:00",
                            "clsgDtTm": "2023-08-30T05:00:00"
                        },
                        "untrInvstmtVal": 1272.030000,
                        "anulInvstmtRate": 5.6000,
                        "untrRedVal": 1241.160000,
                        "anulRedRate": 5.7200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-30T09:25:00",
                            "clsgDtTm": "2023-08-31T05:00:00"
                        },
                        "untrInvstmtVal": 1282.880000,
                        "anulInvstmtRate": 5.5600,
                        "untrRedVal": 1251.740000,
                        "anulRedRate": 5.6800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-08-31T09:25:00",
                            "clsgDtTm": "2023-09-01T05:00:00"
                        },
                        "untrInvstmtVal": 1265.000000,
                        "anulInvstmtRate": 5.6300,
                        "untrRedVal": 1234.310000,
                        "anulRedRate": 5.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-01T09:25:00",
                            "clsgDtTm": "2023-09-04T05:00:00"
                        },
                        "untrInvstmtVal": 1250.150000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 1219.840000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-04T09:25:00",
                            "clsgDtTm": "2023-09-05T05:00:00"
                        },
                        "untrInvstmtVal": 1253.090000,
                        "anulInvstmtRate": 5.6800,
                        "untrRedVal": 1222.720000,
                        "anulRedRate": 5.8000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-05T09:25:00",
                            "clsgDtTm": "2023-09-06T05:00:00"
                        },
                        "untrInvstmtVal": 1243.250000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1213.140000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-06T09:25:00",
                            "clsgDtTm": "2023-09-08T05:00:00"
                        },
                        "untrInvstmtVal": 1238.660000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 1208.670000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-08T09:25:00",
                            "clsgDtTm": "2023-09-11T05:00:00"
                        },
                        "untrInvstmtVal": 1241.780000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 1211.720000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-11T09:25:00",
                            "clsgDtTm": "2023-09-12T05:00:00"
                        },
                        "untrInvstmtVal": 1242.160000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 1212.090000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-12T09:25:00",
                            "clsgDtTm": "2023-09-13T05:00:00"
                        },
                        "untrInvstmtVal": 1244.740000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1214.610000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-13T09:25:00",
                            "clsgDtTm": "2023-09-14T05:00:00"
                        },
                        "untrInvstmtVal": 1245.100000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1214.970000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-14T09:25:00",
                            "clsgDtTm": "2023-09-15T05:00:00"
                        },
                        "untrInvstmtVal": 1248.020000,
                        "anulInvstmtRate": 5.7100,
                        "untrRedVal": 1217.820000,
                        "anulRedRate": 5.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-15T09:25:00",
                            "clsgDtTm": "2023-09-18T05:00:00"
                        },
                        "untrInvstmtVal": 1238.610000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1208.650000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-18T09:25:00",
                            "clsgDtTm": "2023-09-19T05:00:00"
                        },
                        "untrInvstmtVal": 1236.510000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1206.610000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-19T09:25:00",
                            "clsgDtTm": "2023-09-20T05:00:00"
                        },
                        "untrInvstmtVal": 1236.940000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1207.040000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-20T09:25:00",
                            "clsgDtTm": "2023-09-21T05:00:00"
                        },
                        "untrInvstmtVal": 1239.900000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1209.930000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-21T09:25:00",
                            "clsgDtTm": "2023-09-22T05:00:00"
                        },
                        "untrInvstmtVal": 1240.340000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1210.360000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-22T09:25:00",
                            "clsgDtTm": "2023-09-25T05:00:00"
                        },
                        "untrInvstmtVal": 1241.080000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1211.090000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-25T09:25:00",
                            "clsgDtTm": "2023-09-26T05:00:00"
                        },
                        "untrInvstmtVal": 1228.920000,
                        "anulInvstmtRate": 5.8000,
                        "untrRedVal": 1199.250000,
                        "anulRedRate": 5.9200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-26T09:25:00",
                            "clsgDtTm": "2023-09-27T05:00:00"
                        },
                        "untrInvstmtVal": 1211.950000,
                        "anulInvstmtRate": 5.8700,
                        "untrRedVal": 1182.710000,
                        "anulRedRate": 5.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-27T09:25:00",
                            "clsgDtTm": "2023-09-28T05:00:00"
                        },
                        "untrInvstmtVal": 1202.230000,
                        "anulInvstmtRate": 5.9100,
                        "untrRedVal": 1173.240000,
                        "anulRedRate": 6.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-28T09:25:00",
                            "clsgDtTm": "2023-09-29T05:00:00"
                        },
                        "untrInvstmtVal": 1197.750000,
                        "anulInvstmtRate": 5.9300,
                        "untrRedVal": 1168.880000,
                        "anulRedRate": 6.0500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-09-29T09:25:00",
                            "clsgDtTm": "2023-10-02T05:00:00"
                        },
                        "untrInvstmtVal": 1218.080000,
                        "anulInvstmtRate": 5.8500,
                        "untrRedVal": 1188.700000,
                        "anulRedRate": 5.9700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-02T09:25:00",
                            "clsgDtTm": "2023-10-03T05:00:00"
                        },
                        "untrInvstmtVal": 1206.150000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 1177.070000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-03T09:25:00",
                            "clsgDtTm": "2023-10-04T05:00:00"
                        },
                        "untrInvstmtVal": 1187.080000,
                        "anulInvstmtRate": 5.9800,
                        "untrRedVal": 1158.490000,
                        "anulRedRate": 6.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-04T09:25:00",
                            "clsgDtTm": "2023-10-05T05:00:00"
                        },
                        "untrInvstmtVal": 1192.320000,
                        "anulInvstmtRate": 5.9600,
                        "untrRedVal": 1163.610000,
                        "anulRedRate": 6.0800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-05T09:25:00",
                            "clsgDtTm": "2023-10-06T05:00:00"
                        },
                        "untrInvstmtVal": 1185.470000,
                        "anulInvstmtRate": 5.9900,
                        "untrRedVal": 1156.940000,
                        "anulRedRate": 6.1100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-06T09:25:00",
                            "clsgDtTm": "2023-10-09T05:00:00"
                        },
                        "untrInvstmtVal": 1181.320000,
                        "anulInvstmtRate": 6.0100,
                        "untrRedVal": 1152.890000,
                        "anulRedRate": 6.1300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-09T09:25:00",
                            "clsgDtTm": "2023-10-10T05:00:00"
                        },
                        "untrInvstmtVal": 1198.640000,
                        "anulInvstmtRate": 5.9400,
                        "untrRedVal": 1169.780000,
                        "anulRedRate": 6.0600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-10T09:25:00",
                            "clsgDtTm": "2023-10-11T05:00:00"
                        },
                        "untrInvstmtVal": 1211.280000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1182.120000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-11T09:25:00",
                            "clsgDtTm": "2023-10-13T05:00:00"
                        },
                        "untrInvstmtVal": 1206.230000,
                        "anulInvstmtRate": 5.9100,
                        "untrRedVal": 1177.190000,
                        "anulRedRate": 6.0300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-13T09:25:00",
                            "clsgDtTm": "2023-10-16T05:00:00"
                        },
                        "untrInvstmtVal": 1211.740000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1182.580000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-16T09:25:00",
                            "clsgDtTm": "2023-10-17T05:00:00"
                        },
                        "untrInvstmtVal": 1212.140000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1182.970000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-17T09:25:00",
                            "clsgDtTm": "2023-10-18T05:00:00"
                        },
                        "untrInvstmtVal": 1195.430000,
                        "anulInvstmtRate": 5.9600,
                        "untrRedVal": 1166.680000,
                        "anulRedRate": 6.0800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-18T09:25:00",
                            "clsgDtTm": "2023-10-19T05:00:00"
                        },
                        "untrInvstmtVal": 1210.470000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 1181.360000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-19T09:25:00",
                            "clsgDtTm": "2023-10-20T05:00:00"
                        },
                        "untrInvstmtVal": 1205.960000,
                        "anulInvstmtRate": 5.9200,
                        "untrRedVal": 1176.960000,
                        "anulRedRate": 6.0400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-20T09:25:00",
                            "clsgDtTm": "2023-10-23T05:00:00"
                        },
                        "untrInvstmtVal": 1192.000000,
                        "anulInvstmtRate": 5.9800,
                        "untrRedVal": 1163.360000,
                        "anulRedRate": 6.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-23T09:25:00",
                            "clsgDtTm": "2023-10-24T05:00:00"
                        },
                        "untrInvstmtVal": 1197.240000,
                        "anulInvstmtRate": 5.9600,
                        "untrRedVal": 1168.470000,
                        "anulRedRate": 6.0800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-24T09:25:00",
                            "clsgDtTm": "2023-10-25T05:00:00"
                        },
                        "untrInvstmtVal": 1192.790000,
                        "anulInvstmtRate": 5.9800,
                        "untrRedVal": 1164.140000,
                        "anulRedRate": 6.1000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-25T09:25:00",
                            "clsgDtTm": "2023-10-26T05:00:00"
                        },
                        "untrInvstmtVal": 1198.030000,
                        "anulInvstmtRate": 5.9600,
                        "untrRedVal": 1169.260000,
                        "anulRedRate": 6.0800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-26T09:25:00",
                            "clsgDtTm": "2023-10-27T05:00:00"
                        },
                        "untrInvstmtVal": 1215.560000,
                        "anulInvstmtRate": 5.8900,
                        "untrRedVal": 1186.350000,
                        "anulRedRate": 6.0100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-27T09:25:00",
                            "clsgDtTm": "2023-10-30T05:00:00"
                        },
                        "untrInvstmtVal": 1218.430000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 1189.150000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-30T09:25:00",
                            "clsgDtTm": "2023-10-31T05:00:00"
                        },
                        "untrInvstmtVal": 1213.880000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 1184.720000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-10-31T09:25:00",
                            "clsgDtTm": "2023-11-01T05:00:00"
                        },
                        "untrInvstmtVal": 1214.260000,
                        "anulInvstmtRate": 5.9000,
                        "untrRedVal": 1185.100000,
                        "anulRedRate": 6.0200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-01T09:25:00",
                            "clsgDtTm": "2023-11-03T05:00:00"
                        },
                        "untrInvstmtVal": 1222.160000,
                        "anulInvstmtRate": 5.8700,
                        "untrRedVal": 1192.800000,
                        "anulRedRate": 5.9900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-03T09:25:00",
                            "clsgDtTm": "2023-11-06T05:00:00"
                        },
                        "untrInvstmtVal": 1232.710000,
                        "anulInvstmtRate": 5.8300,
                        "untrRedVal": 1203.100000,
                        "anulRedRate": 5.9500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-06T09:25:00",
                            "clsgDtTm": "2023-11-07T05:00:00"
                        },
                        "untrInvstmtVal": 1220.660000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 1191.360000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-07T09:25:00",
                            "clsgDtTm": "2023-11-08T05:00:00"
                        },
                        "untrInvstmtVal": 1221.050000,
                        "anulInvstmtRate": 5.8800,
                        "untrRedVal": 1191.740000,
                        "anulRedRate": 6.0000
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-08T09:25:00",
                            "clsgDtTm": "2023-11-09T05:00:00"
                        },
                        "untrInvstmtVal": 1228.870000,
                        "anulInvstmtRate": 5.8500,
                        "untrRedVal": 1199.370000,
                        "anulRedRate": 5.9700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-09T09:25:00",
                            "clsgDtTm": "2023-11-10T05:00:00"
                        },
                        "untrInvstmtVal": 1239.260000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 1209.510000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-10T09:25:00",
                            "clsgDtTm": "2023-11-13T05:00:00"
                        },
                        "untrInvstmtVal": 1239.510000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 1209.760000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-13T09:25:00",
                            "clsgDtTm": "2023-11-14T05:00:00"
                        },
                        "untrInvstmtVal": 1227.400000,
                        "anulInvstmtRate": 5.8600,
                        "untrRedVal": 1197.950000,
                        "anulRedRate": 5.9800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-14T09:25:00",
                            "clsgDtTm": "2023-11-16T05:00:00"
                        },
                        "untrInvstmtVal": 1240.380000,
                        "anulInvstmtRate": 5.8100,
                        "untrRedVal": 1210.620000,
                        "anulRedRate": 5.9300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-16T09:25:00",
                            "clsgDtTm": "2023-11-17T05:00:00"
                        },
                        "untrInvstmtVal": 1253.410000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1223.320000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-17T09:25:00",
                            "clsgDtTm": "2023-11-20T05:00:00"
                        },
                        "untrInvstmtVal": 1266.820000,
                        "anulInvstmtRate": 5.7100,
                        "untrRedVal": 1236.400000,
                        "anulRedRate": 5.8300
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-20T09:25:00",
                            "clsgDtTm": "2023-11-21T05:00:00"
                        },
                        "untrInvstmtVal": 1264.650000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1234.300000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-21T09:25:00",
                            "clsgDtTm": "2023-11-22T05:00:00"
                        },
                        "untrInvstmtVal": 1252.310000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 1222.270000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-22T09:25:00",
                            "clsgDtTm": "2023-11-23T05:00:00"
                        },
                        "untrInvstmtVal": 1255.250000,
                        "anulInvstmtRate": 5.7600,
                        "untrRedVal": 1225.140000,
                        "anulRedRate": 5.8800
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-23T09:25:00",
                            "clsgDtTm": "2023-11-24T05:00:00"
                        },
                        "untrInvstmtVal": 1253.110000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 1223.060000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-24T09:25:00",
                            "clsgDtTm": "2023-11-27T05:00:00"
                        },
                        "untrInvstmtVal": 1253.750000,
                        "anulInvstmtRate": 5.7700,
                        "untrRedVal": 1223.700000,
                        "anulRedRate": 5.8900
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-27T09:25:00",
                            "clsgDtTm": "2023-11-28T05:00:00"
                        },
                        "untrInvstmtVal": 1259.240000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1229.050000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-28T09:25:00",
                            "clsgDtTm": "2023-11-29T05:00:00"
                        },
                        "untrInvstmtVal": 1259.640000,
                        "anulInvstmtRate": 5.7500,
                        "untrRedVal": 1229.440000,
                        "anulRedRate": 5.8700
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-29T09:25:00",
                            "clsgDtTm": "2023-11-30T05:00:00"
                        },
                        "untrInvstmtVal": 1267.770000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1237.380000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-11-30T09:25:00",
                            "clsgDtTm": "2023-12-01T05:00:00"
                        },
                        "untrInvstmtVal": 1268.180000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1237.780000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-01T09:25:00",
                            "clsgDtTm": "2023-12-04T05:00:00"
                        },
                        "untrInvstmtVal": 1273.980000,
                        "anulInvstmtRate": 5.7000,
                        "untrRedVal": 1243.450000,
                        "anulRedRate": 5.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-04T09:25:00",
                            "clsgDtTm": "2023-12-05T05:00:00"
                        },
                        "untrInvstmtVal": 1274.390000,
                        "anulInvstmtRate": 5.7000,
                        "untrRedVal": 1243.850000,
                        "anulRedRate": 5.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-05T09:25:00",
                            "clsgDtTm": "2023-12-06T05:00:00"
                        },
                        "untrInvstmtVal": 1274.800000,
                        "anulInvstmtRate": 5.7000,
                        "untrRedVal": 1244.260000,
                        "anulRedRate": 5.8200
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-06T09:25:00",
                            "clsgDtTm": "2023-12-07T05:00:00"
                        },
                        "untrInvstmtVal": 1277.790000,
                        "anulInvstmtRate": 5.6900,
                        "untrRedVal": 1247.170000,
                        "anulRedRate": 5.8100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-07T09:25:00",
                            "clsgDtTm": "2023-12-08T05:00:00"
                        },
                        "untrInvstmtVal": 1270.470000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1240.050000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-08T09:25:00",
                            "clsgDtTm": "2023-12-11T05:00:00"
                        },
                        "untrInvstmtVal": 1266.000000,
                        "anulInvstmtRate": 5.7400,
                        "untrRedVal": 1235.700000,
                        "anulRedRate": 5.8600
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-11T09:25:00",
                            "clsgDtTm": "2023-12-12T05:00:00"
                        },
                        "untrInvstmtVal": 1271.540000,
                        "anulInvstmtRate": 5.7200,
                        "untrRedVal": 1241.100000,
                        "anulRedRate": 5.8400
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-12T09:25:00",
                            "clsgDtTm": "2023-12-13T05:00:00"
                        },
                        "untrInvstmtVal": 1269.140000,
                        "anulInvstmtRate": 5.7300,
                        "untrRedVal": 1238.770000,
                        "anulRedRate": 5.8500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-13T09:25:00",
                            "clsgDtTm": "2023-12-14T05:00:00"
                        },
                        "untrInvstmtVal": 1295.450000,
                        "anulInvstmtRate": 5.6300,
                        "untrRedVal": 1264.430000,
                        "anulRedRate": 5.7500
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-14T09:25:00",
                            "clsgDtTm": "2023-12-15T05:00:00"
                        },
                        "untrInvstmtVal": 1306.370000,
                        "anulInvstmtRate": 5.5900,
                        "untrRedVal": 1275.080000,
                        "anulRedRate": 5.7100
                    },
                    {
                        "TrsrBdMkt": {
                            "opngDtTm": "2023-12-15T09:25:00",
                            "clsgDtTm": "2023-12-18T05:00:00"
                        },
                        "untrInvstmtVal": 1315.080000,
                        "anulInvstmtRate": 5.5600,
                        "untrRedVal": 1283.580000,
                        "anulRedRate": 5.6800
                    }
                ]
            },
            "BizSts": {
                "cd": "0",
                "dtTm": "2023-12-16T14:03:53"
            }
        }
    };

    
    const [selectedOptionCategoria, setSelectedOptionCategoria] = useState([]);
    const SelectChangeCategoria = (selectedOptionCategoria) => {
        setSelectedOptionCategoria(selectedOptionCategoria)
    };

    const [selectedOptionRange, setSelectedOptionRange] = useState([]);
    const SelectChangeRange = (selectedOptionRange) => {
        setSelectedOptionRange(selectedOptionRange)
    };

    const [acumulador, setAcumulador] = useState(0);
    const [tamanho, setTamanho] = useState(0);
    const [media, setMedia] = useState(0);
    const [data, setData] = useState([]);
    const [dataTime, setDataTime] = useState([]);
    const [dataNomes, setDataNomes] = useState([]);
    
    useEffect(() => {

        const jsonData = dados.response?.TrsrBd?.PrcgLst?.map(item => item?.anulInvstmtRate.toString());
        setData(jsonData);

        const jsonDataTime = dados.response?.TrsrBd?.PrcgLst?.map(item => converterDataParaBrasil(item?.TrsrBdMkt?.opngDtTm));
        setDataTime(jsonDataTime);

        const jsonTreasure = treasurybonds.response?.TrsrBdTradgList?.map((item, index) => ({
            'value': index,
            'label': item?.TrsrBd.nm?.toString(),
        }));
        setDataNomes(jsonTreasure);

        const somarTaxas = () => {
            const soma = dados.response?.TrsrBd?.PrcgLst?.reduce((acc, item) => {
                const opngDtTm = item?.TrsrBdMkt?.opngDtTm;
                if (opngDtTm !== undefined) {
                    return acc + +item.anulInvstmtRate;
                }
                return acc;
            }, 0);

            setAcumulador(soma);
            setTamanho(dados.response?.TrsrBd?.PrcgLst?.length);
            setMedia(soma / (dados.response?.TrsrBd?.PrcgLst?.length));
        };
        somarTaxas();

    }, []);


    const findMinMaxRates = (data: Data) => {
        const prcgList = data?.response?.TrsrBd?.PrcgLst || [];

        if (prcgList.length === 0) {
            return { minRate: undefined, maxRate: undefined };
        }

        const rates = prcgList.map(item => item.anulInvstmtRate);
        const minRate = Math.min(...rates);
        const maxRate = Math.max(...rates);

        return { minRate, maxRate };
    };

    const [minRate, setMinRate] = useState(0);
    const [maxRate, setMaxRate] = useState(0);
    const [pessimo, setPessimo] = useState(0);
    const [pessimo2, setPessimo2] = useState(0);
    useEffect(() => {
        const { minRate, maxRate } = findMinMaxRates(dados);
        setMinRate(minRate);
        setMaxRate(maxRate);
    }, [])


    const annotations = {
        yaxis: [{
            y: parseFloat(media).toFixed(2),
            borderColor: '#000000',
            borderWidth: 6, // Ajuste a largura da linha conforme necessário
            label: {
                borderColor: '#000000',
                style: {
                    color: '#FFFFFF',
                    background: '#000000'
                },
                text: 'Média: ' + parseFloat(media).toFixed(2) + '%'
            }
        },
        {
            y: parseFloat((((maxRate-minRate)/6)*2)+media).toFixed(2), // Valor inicial da faixa
            y2: maxRate*2, // Valor final da faixa
            fillColor: '#00ab55', // Cor de fundo da faixa
            nome: 'Ótima',
            opacity: 0.3, // Opacidade da faixa
        }, {
            y: parseFloat((((maxRate-minRate)/6))+media).toFixed(2), // Valor inicial da faixa
            y2: parseFloat((((maxRate-minRate)/6)*2)+media).toFixed(2), // Valor final da faixa
            fillColor: '#0c60bb', // Cor de fundo da faixa
            nome: 'Bom',
            opacity: 0.3, // Opacidade da faixa
        }, {
            y: media, // Valor inicial da faixa
            y2: parseFloat((((maxRate-minRate)/6))+media).toFixed(2), // Valor final da faixa
            fillColor: '#454545', // Cor de fundo da faixa
            nome: 'Normal',
            opacity: 0.3, // Opacidade da faixa
        }, {
            y: parseFloat(((4 / 5) * media)).toFixed(2), // Valor inicial da faixa
            y2: media, // Valor final da faixa
            fillColor: '#ef7817', // Cor de fundo da faixa
            nome: 'Ruim',
            opacity: 0.3, // Opacidade da faixa
        }, {
            y: 0.00, // Valor inicial da faixa
            y2: parseFloat(((4 / 5) * media)).toFixed(2), // Valor final da faixa
            fillColor: '#e7515a', // Cor de fundo da faixa
            nome: 'Péssima',
            opacity: 0.3, // Opacidade da faixa
        },
        ],
    };

    const colorCategorias = ["#CE0300"];
    const areaChart: any = {
        series: [
            {
                name: 'IPCA + 45',
                data: data,
            }
        ],
        options: {
            annotations: annotations,
            chart: {
                height: 325,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                stacked: false,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,//Barra para Salvar Imagens
                },
            },

            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'straight',
                width: 2,
                lineCap: 'square',
            },
            dropShadow: {
                enabled: true,
                opacity: 1,
                blur: 10,
                left: -7,
                top: 22,
            },
            colors: isDark ? colorCategorias : colorCategorias,
            labels: dataTime,
            xaxis: {

                tickAmount: 7,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                },
                crosshairs: {
                    show: true,
                },
                labels: {
                    offsetX: isRtl ? 25 : 25,
                    offsetY: 5,

                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-xaxis-title',
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
                axisTicks: {
                    show: true,
                },
                labels: {
                    formatter: (value: number) => {
                        return `${parseFloat(value).toFixed(2)}%`;
                    },
                    offsetX: isRtl ? -30 : -10,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
                opposite: isRtl ? true : false,
                title: {
                    text: 'Taxa de Juros (%)',
                    style: {
                        fontSize: '14px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                }
            },
            grid: {
                borderColor: isDark ? '#191E3A' : '#E0E6ED',
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
                fontSize: '16px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
                x: {
                    show: false,
                },
            },
            fill: {
                type: 'solid',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: isDark ? 1 : 1,
                    opacityTo: 1,
                    stops: isDark ? [100, 100] : [100, 100],
                },
            },
        },
    };

    return (
        <><div>
            <div className='titulo-page'>TESOURO</div>
            <ul className="flex space-x-2 rtl:space-x-reverse mb-5 mt-4">
                <li>
                    <Link to="/components/Patromonio" className="text-primary hover:underline">
                        Nexus
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Tesouro</span>
                </li>
            </ul>

            <div className="panel">
                <div className="grid 1xl:grid-cols-7 lg:grid-cols-7 sm:grid-cols-7 grid-cols-1 gap-6 ">
                    <div className='text-sm xl:col-span-4 col-span-4 sm:col-span-4'></div>
                    <Select
                        className='text-sm xl:col-span-2 col-span-2 sm:col-span-2'
                        name="categoria"
                        value={selectedOptionCategoria}
                        onChange={SelectChangeCategoria}
                        options={dataNomes}
                        isSearchable={false}
                    />
                    <Select
                        className='text-sm xl:col-span-1 col-span-1 sm:col-span-1'
                        name="categoria"
                        // value={selectedOptionRange}
                        onChange={SelectChangeRange}
                        options={[{ 'value': 1, 'label': '1 Ano' }, { 'value': 0, 'label': 'Todos os Anos ' }]}
                        isSearchable={false}
                    />
                </div>
                <div className="grid 1xl:grid-cols-8 lg:grid-cols-8 sm:grid-cols-8 grid-cols-1 mb-10">
                    <div className='ft-total xl:col-span-7 col-span-7 sm:col-span-6'>
                        <div className='pt-5 ft-total'><center>IPCA+ 45</center></div>
                        <ReactApexChart series={areaChart.series} options={areaChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="line" height={500} />
                    </div>
                    <div className='xl:col-span-1 col-span-1 sm:col-span-2'>
                        <div className='pt-5 pb-2 ft-total'><center>Janela</center></div>
                        {annotations.yaxis.map((annotation, index) => (
                            <div key={index} className='p-1'>
                                <center><div style={{ backgroundColor: annotation.fillColor, width: '20px', height: '20px', opacity: '0.5' }} className='p-7'><div className='pl-12 mb-2' style={{ marginTop: '-10px' }}><b>{annotation.nome}</b></div></div></center>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div></>
    )

};
export default Tesouro;