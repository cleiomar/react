

async function fetchTreasure(codigo: any, nome: any, ativo: any): Promise<any> {
    console.log(codigo + '-' + nome)
    try {
        const response = await fetch('http://localhost:3000/insert_treasure', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Certifique-se de ajustar o tipo de conteúdo conforme necessário
                // Adicione outros cabeçalhos conforme necessário
            },
            body: JSON.stringify({ "codigo": codigo, "nome": nome , "ativo": ativo }), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(response);
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}


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

const cdValues = [];
const nmValues = [];
let index = 0;
while (index < treasurybonds.response.TrsrBdTradgList.length) {
    const variavel = treasurybonds.response.TrsrBdTradgList[index];
        fetchTreasure(variavel.TrsrBd.cd, variavel.TrsrBd.nm, variavel.TrsrBd.semiAnulIntrstInd);

    index++;
}
