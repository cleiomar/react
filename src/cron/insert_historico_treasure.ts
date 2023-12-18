

async function fetchTreasure(codigo: any, dataTime: any, valor: any): Promise<any> {
    try {
        const response = await fetch('http://localhost:3000/insert_historico_treasure', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Certifique-se de ajustar o tipo de conteúdo conforme necessário
                // Adicione outros cabeçalhos conforme necessário
            },
            body: JSON.stringify({ "codigo": codigo, "dataTime": dataTime, "valor": valor }), // Converte os dados para o formato JSON
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


const dados = {
    "responseStatus": 200,
    "responseStatusText": "success",
    "statusInfo": "OK",
    "response": {
        "TrsrBd": {
            "cd": 169,
            "nm": "Tesouro IPCA+ com Juros Semestrais 2055",
            "mtrtyDt": "2055-05-15T00:00:00",
            "featrs": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).\r\n",
            "invstmtStbl": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado. \r\n",
            "rcvgIncm": "Indicado para aqueles que querem realizar investimentos de longo prazo.\r\n",
            "PrcgLst": [
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-10T09:15:00",
                        "clsgDtTm": "2020-02-11T05:00:00"
                    },
                    "untrInvstmtVal": 5063.370000,
                    "anulInvstmtRate": 3.4200,
                    "untrRedVal": 4956.730000,
                    "anulRedRate": 3.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-11T09:15:00",
                        "clsgDtTm": "2020-02-12T05:00:00"
                    },
                    "untrInvstmtVal": 5091.590000,
                    "anulInvstmtRate": 3.3900,
                    "untrRedVal": 4984.090000,
                    "anulRedRate": 3.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-12T09:15:00",
                        "clsgDtTm": "2020-02-13T05:00:00"
                    },
                    "untrInvstmtVal": 5110.860000,
                    "anulInvstmtRate": 3.3700,
                    "untrRedVal": 5002.790000,
                    "anulRedRate": 3.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-13T09:15:00",
                        "clsgDtTm": "2020-02-14T05:00:00"
                    },
                    "untrInvstmtVal": 5102.740000,
                    "anulInvstmtRate": 3.3800,
                    "untrRedVal": 4994.960000,
                    "anulRedRate": 3.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-14T09:15:00",
                        "clsgDtTm": "2020-02-17T05:00:00"
                    },
                    "untrInvstmtVal": 5131.740000,
                    "anulInvstmtRate": 3.3500,
                    "untrRedVal": 5023.080000,
                    "anulRedRate": 3.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-17T09:15:00",
                        "clsgDtTm": "2020-02-18T05:00:00"
                    },
                    "untrInvstmtVal": 5160.360000,
                    "anulInvstmtRate": 3.3200,
                    "untrRedVal": 5050.840000,
                    "anulRedRate": 3.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-18T09:15:00",
                        "clsgDtTm": "2020-02-19T05:00:00"
                    },
                    "untrInvstmtVal": 5124.390000,
                    "anulInvstmtRate": 3.3600,
                    "untrRedVal": 5016.030000,
                    "anulRedRate": 3.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-19T09:15:00",
                        "clsgDtTm": "2020-02-20T05:00:00"
                    },
                    "untrInvstmtVal": 5125.300000,
                    "anulInvstmtRate": 3.3600,
                    "untrRedVal": 5016.950000,
                    "anulRedRate": 3.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-20T09:15:00",
                        "clsgDtTm": "2020-02-21T05:00:00"
                    },
                    "untrInvstmtVal": 5107.930000,
                    "anulInvstmtRate": 3.3800,
                    "untrRedVal": 5000.150000,
                    "anulRedRate": 3.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-21T09:15:00",
                        "clsgDtTm": "2020-02-26T05:00:00"
                    },
                    "untrInvstmtVal": 5091.820000,
                    "anulInvstmtRate": 3.4000,
                    "untrRedVal": 4984.590000,
                    "anulRedRate": 3.5200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-26T09:15:00",
                        "clsgDtTm": "2020-02-27T05:00:00"
                    },
                    "untrInvstmtVal": 5012.020000,
                    "anulInvstmtRate": 3.4900,
                    "untrRedVal": 4907.320000,
                    "anulRedRate": 3.6100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-27T09:15:00",
                        "clsgDtTm": "2020-02-28T05:00:00"
                    },
                    "untrInvstmtVal": 4977.700000,
                    "anulInvstmtRate": 3.5300,
                    "untrRedVal": 4874.090000,
                    "anulRedRate": 3.6500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-02-28T09:15:00",
                        "clsgDtTm": "2020-03-02T05:00:00"
                    },
                    "untrInvstmtVal": 4909.720000,
                    "anulInvstmtRate": 3.6100,
                    "untrRedVal": 4808.260000,
                    "anulRedRate": 3.7300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-02T09:15:00",
                        "clsgDtTm": "2020-03-03T05:00:00"
                    },
                    "untrInvstmtVal": 5006.510000,
                    "anulInvstmtRate": 3.5000,
                    "untrRedVal": 4902.080000,
                    "anulRedRate": 3.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-03T09:15:00",
                        "clsgDtTm": "2020-03-04T05:00:00"
                    },
                    "untrInvstmtVal": 5043.010000,
                    "anulInvstmtRate": 3.4600,
                    "untrRedVal": 4937.470000,
                    "anulRedRate": 3.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-04T09:15:00",
                        "clsgDtTm": "2020-03-05T05:00:00"
                    },
                    "untrInvstmtVal": 5061.860000,
                    "anulInvstmtRate": 3.4400,
                    "untrRedVal": 4955.770000,
                    "anulRedRate": 3.5600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-05T09:15:00",
                        "clsgDtTm": "2020-03-06T05:00:00"
                    },
                    "untrInvstmtVal": 4982.930000,
                    "anulInvstmtRate": 3.5300,
                    "untrRedVal": 4879.330000,
                    "anulRedRate": 3.6500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-06T09:15:00",
                        "clsgDtTm": "2020-03-09T05:00:00"
                    },
                    "untrInvstmtVal": 4966.890000,
                    "anulInvstmtRate": 3.5500,
                    "untrRedVal": 4863.820000,
                    "anulRedRate": 3.6700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-09T09:15:00",
                        "clsgDtTm": "2020-03-10T05:00:00"
                    },
                    "untrInvstmtVal": 4748.560000,
                    "anulInvstmtRate": 3.8100,
                    "untrRedVal": 4652.270000,
                    "anulRedRate": 3.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-10T09:15:00",
                        "clsgDtTm": "2020-03-11T05:00:00"
                    },
                    "untrInvstmtVal": 4733.250000,
                    "anulInvstmtRate": 3.8300,
                    "untrRedVal": 4637.460000,
                    "anulRedRate": 3.9500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-11T09:15:00",
                        "clsgDtTm": "2020-03-12T05:00:00"
                    },
                    "untrInvstmtVal": 4519.270000,
                    "anulInvstmtRate": 4.1100,
                    "untrRedVal": 4430.080000,
                    "anulRedRate": 4.2300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-12T09:15:00",
                        "clsgDtTm": "2020-03-13T05:00:00"
                    },
                    "untrInvstmtVal": 3818.570000,
                    "anulInvstmtRate": 5.1700,
                    "untrRedVal": 3750.140000,
                    "anulRedRate": 5.2900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-13T09:15:00",
                        "clsgDtTm": "2020-03-16T05:00:00"
                    },
                    "untrInvstmtVal": 4290.100000,
                    "anulInvstmtRate": 4.4300,
                    "untrRedVal": 4207.860000,
                    "anulRedRate": 4.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-16T09:15:00",
                        "clsgDtTm": "2020-03-17T05:00:00"
                    },
                    "untrInvstmtVal": 4354.320000,
                    "anulInvstmtRate": 4.3400,
                    "untrRedVal": 4270.190000,
                    "anulRedRate": 4.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-17T09:15:00",
                        "clsgDtTm": "2020-03-18T05:00:00"
                    },
                    "untrInvstmtVal": 4341.010000,
                    "anulInvstmtRate": 4.3600,
                    "untrRedVal": 4257.310000,
                    "anulRedRate": 4.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-18T09:15:00",
                        "clsgDtTm": "2020-03-19T05:00:00"
                    },
                    "untrInvstmtVal": 3947.540000,
                    "anulInvstmtRate": 4.9600,
                    "untrRedVal": 3875.490000,
                    "anulRedRate": 5.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-19T09:15:00",
                        "clsgDtTm": "2020-03-20T05:00:00"
                    },
                    "untrInvstmtVal": 4138.210000,
                    "anulInvstmtRate": 4.6600,
                    "untrRedVal": 4060.600000,
                    "anulRedRate": 4.7800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-20T09:15:00",
                        "clsgDtTm": "2020-03-23T05:00:00"
                    },
                    "untrInvstmtVal": 4126.300000,
                    "anulInvstmtRate": 4.6800,
                    "untrRedVal": 4049.070000,
                    "anulRedRate": 4.8000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-23T09:15:00",
                        "clsgDtTm": "2020-03-24T05:00:00"
                    },
                    "untrInvstmtVal": 3956.610000,
                    "anulInvstmtRate": 4.9500,
                    "untrRedVal": 3884.380000,
                    "anulRedRate": 5.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-24T09:15:00",
                        "clsgDtTm": "2020-03-25T05:00:00"
                    },
                    "untrInvstmtVal": 4057.210000,
                    "anulInvstmtRate": 4.7900,
                    "untrRedVal": 3982.070000,
                    "anulRedRate": 4.9100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-25T09:15:00",
                        "clsgDtTm": "2020-03-26T05:00:00"
                    },
                    "untrInvstmtVal": 4181.770000,
                    "anulInvstmtRate": 4.6000,
                    "untrRedVal": 4102.990000,
                    "anulRedRate": 4.7200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-26T09:15:00",
                        "clsgDtTm": "2020-03-27T05:00:00"
                    },
                    "untrInvstmtVal": 4305.380000,
                    "anulInvstmtRate": 4.4200,
                    "untrRedVal": 4222.950000,
                    "anulRedRate": 4.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-27T09:15:00",
                        "clsgDtTm": "2020-03-30T05:00:00"
                    },
                    "untrInvstmtVal": 4265.050000,
                    "anulInvstmtRate": 4.4800,
                    "untrRedVal": 4183.850000,
                    "anulRedRate": 4.6000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-30T09:15:00",
                        "clsgDtTm": "2020-03-31T05:00:00"
                    },
                    "untrInvstmtVal": 4272.820000,
                    "anulInvstmtRate": 4.4700,
                    "untrRedVal": 4191.420000,
                    "anulRedRate": 4.5900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-03-31T09:15:00",
                        "clsgDtTm": "2020-04-01T05:00:00"
                    },
                    "untrInvstmtVal": 4266.840000,
                    "anulInvstmtRate": 4.4800,
                    "untrRedVal": 4185.640000,
                    "anulRedRate": 4.6000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-01T09:15:00",
                        "clsgDtTm": "2020-04-02T05:00:00"
                    },
                    "untrInvstmtVal": 4179.890000,
                    "anulInvstmtRate": 4.6100,
                    "untrRedVal": 4101.300000,
                    "anulRedRate": 4.7300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-02T09:15:00",
                        "clsgDtTm": "2020-04-03T05:00:00"
                    },
                    "untrInvstmtVal": 4180.780000,
                    "anulInvstmtRate": 4.6100,
                    "untrRedVal": 4102.200000,
                    "anulRedRate": 4.7300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-03T09:15:00",
                        "clsgDtTm": "2020-04-06T05:00:00"
                    },
                    "untrInvstmtVal": 4077.710000,
                    "anulInvstmtRate": 4.7700,
                    "untrRedVal": 4002.200000,
                    "anulRedRate": 4.8900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-06T09:15:00",
                        "clsgDtTm": "2020-04-07T05:00:00"
                    },
                    "untrInvstmtVal": 4104.290000,
                    "anulInvstmtRate": 4.7300,
                    "untrRedVal": 4028.020000,
                    "anulRedRate": 4.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-07T09:15:00",
                        "clsgDtTm": "2020-04-08T05:00:00"
                    },
                    "untrInvstmtVal": 4124.610000,
                    "anulInvstmtRate": 4.7000,
                    "untrRedVal": 4047.770000,
                    "anulRedRate": 4.8200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-08T09:15:00",
                        "clsgDtTm": "2020-04-09T05:00:00"
                    },
                    "untrInvstmtVal": 4086.800000,
                    "anulInvstmtRate": 4.7600,
                    "untrRedVal": 4011.110000,
                    "anulRedRate": 4.8800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-09T09:15:00",
                        "clsgDtTm": "2020-04-13T05:00:00"
                    },
                    "untrInvstmtVal": 4157.990000,
                    "anulInvstmtRate": 4.6500,
                    "untrRedVal": 4080.220000,
                    "anulRedRate": 4.7700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-13T09:15:00",
                        "clsgDtTm": "2020-04-14T05:00:00"
                    },
                    "untrInvstmtVal": 4145.710000,
                    "anulInvstmtRate": 4.6700,
                    "untrRedVal": 4068.330000,
                    "anulRedRate": 4.7900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-14T09:15:00",
                        "clsgDtTm": "2020-04-15T05:00:00"
                    },
                    "untrInvstmtVal": 4192.780000,
                    "anulInvstmtRate": 4.6000,
                    "untrRedVal": 4114.030000,
                    "anulRedRate": 4.7200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-15T09:15:00",
                        "clsgDtTm": "2020-04-16T05:00:00"
                    },
                    "untrInvstmtVal": 4260.930000,
                    "anulInvstmtRate": 4.5000,
                    "untrRedVal": 4180.180000,
                    "anulRedRate": 4.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-16T09:15:00",
                        "clsgDtTm": "2020-04-17T05:00:00"
                    },
                    "untrInvstmtVal": 4380.250000,
                    "anulInvstmtRate": 4.3300,
                    "untrRedVal": 4295.980000,
                    "anulRedRate": 4.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-17T09:15:00",
                        "clsgDtTm": "2020-04-20T05:00:00"
                    },
                    "untrInvstmtVal": 4387.950000,
                    "anulInvstmtRate": 4.3200,
                    "untrRedVal": 4303.470000,
                    "anulRedRate": 4.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-20T09:15:00",
                        "clsgDtTm": "2020-04-22T05:00:00"
                    },
                    "untrInvstmtVal": 4483.040000,
                    "anulInvstmtRate": 4.1900,
                    "untrRedVal": 4395.730000,
                    "anulRedRate": 4.3100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-22T09:15:00",
                        "clsgDtTm": "2020-04-23T05:00:00"
                    },
                    "untrInvstmtVal": 4535.880000,
                    "anulInvstmtRate": 4.1200,
                    "untrRedVal": 4447.010000,
                    "anulRedRate": 4.2400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-23T09:15:00",
                        "clsgDtTm": "2020-04-24T05:00:00"
                    },
                    "untrInvstmtVal": 4462.300000,
                    "anulInvstmtRate": 4.2200,
                    "untrRedVal": 4375.670000,
                    "anulRedRate": 4.3400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-24T09:15:00",
                        "clsgDtTm": "2020-04-27T05:00:00"
                    },
                    "untrInvstmtVal": 4073.810000,
                    "anulInvstmtRate": 4.7900,
                    "untrRedVal": 3998.740000,
                    "anulRedRate": 4.9100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-27T09:15:00",
                        "clsgDtTm": "2020-04-28T05:00:00"
                    },
                    "untrInvstmtVal": 4112.890000,
                    "anulInvstmtRate": 4.7300,
                    "untrRedVal": 4036.700000,
                    "anulRedRate": 4.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-28T09:15:00",
                        "clsgDtTm": "2020-04-29T05:00:00"
                    },
                    "untrInvstmtVal": 4272.980000,
                    "anulInvstmtRate": 4.4900,
                    "untrRedVal": 4192.090000,
                    "anulRedRate": 4.6100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-29T09:15:00",
                        "clsgDtTm": "2020-04-30T05:00:00"
                    },
                    "untrInvstmtVal": 4346.290000,
                    "anulInvstmtRate": 4.3800,
                    "untrRedVal": 4263.200000,
                    "anulRedRate": 4.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-04-30T09:15:00",
                        "clsgDtTm": "2020-05-04T05:00:00"
                    },
                    "untrInvstmtVal": 4338.790000,
                    "anulInvstmtRate": 4.3900,
                    "untrRedVal": 4255.940000,
                    "anulRedRate": 4.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-04T09:15:00",
                        "clsgDtTm": "2020-05-05T05:00:00"
                    },
                    "untrInvstmtVal": 4290.600000,
                    "anulInvstmtRate": 4.4600,
                    "untrRedVal": 4209.210000,
                    "anulRedRate": 4.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-05T09:15:00",
                        "clsgDtTm": "2020-05-06T05:00:00"
                    },
                    "untrInvstmtVal": 4360.770000,
                    "anulInvstmtRate": 4.3600,
                    "untrRedVal": 4277.310000,
                    "anulRedRate": 4.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-06T09:15:00",
                        "clsgDtTm": "2020-05-07T05:00:00"
                    },
                    "untrInvstmtVal": 4354.150000,
                    "anulInvstmtRate": 4.3700,
                    "untrRedVal": 4270.910000,
                    "anulRedRate": 4.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-07T09:15:00",
                        "clsgDtTm": "2020-05-08T05:00:00"
                    },
                    "untrInvstmtVal": 4298.820000,
                    "anulInvstmtRate": 4.4500,
                    "untrRedVal": 4217.260000,
                    "anulRedRate": 4.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-08T09:15:00",
                        "clsgDtTm": "2020-05-11T05:00:00"
                    },
                    "untrInvstmtVal": 4288.040000,
                    "anulInvstmtRate": 4.4600,
                    "untrRedVal": 4206.780000,
                    "anulRedRate": 4.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-11T09:15:00",
                        "clsgDtTm": "2020-05-12T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4207.090000,
                    "anulRedRate": 4.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-12T09:15:00",
                        "clsgDtTm": "2020-05-13T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4187.470000,
                    "anulRedRate": 4.6100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-13T09:15:00",
                        "clsgDtTm": "2020-05-14T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-14T09:15:00",
                        "clsgDtTm": "2020-05-15T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-15T09:15:00",
                        "clsgDtTm": "2020-05-18T05:00:00"
                    },
                    "untrInvstmtVal": 4170.310000,
                    "anulInvstmtRate": 4.4900,
                    "untrRedVal": 4089.740000,
                    "anulRedRate": 4.6100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-18T09:15:00",
                        "clsgDtTm": "2020-05-19T05:00:00"
                    },
                    "untrInvstmtVal": 4191.060000,
                    "anulInvstmtRate": 4.4600,
                    "untrRedVal": 4109.900000,
                    "anulRedRate": 4.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-19T09:15:00",
                        "clsgDtTm": "2020-05-20T05:00:00"
                    },
                    "untrInvstmtVal": 4198.160000,
                    "anulInvstmtRate": 4.4500,
                    "untrRedVal": 4116.800000,
                    "anulRedRate": 4.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-20T09:15:00",
                        "clsgDtTm": "2020-05-21T05:00:00"
                    },
                    "untrInvstmtVal": 4198.380000,
                    "anulInvstmtRate": 4.4500,
                    "untrRedVal": 4117.040000,
                    "anulRedRate": 4.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-21T09:15:00",
                        "clsgDtTm": "2020-05-22T05:00:00"
                    },
                    "untrInvstmtVal": 4254.200000,
                    "anulInvstmtRate": 4.3700,
                    "untrRedVal": 4171.220000,
                    "anulRedRate": 4.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-22T09:15:00",
                        "clsgDtTm": "2020-05-25T05:00:00"
                    },
                    "untrInvstmtVal": 4246.390000,
                    "anulInvstmtRate": 4.3800,
                    "untrRedVal": 4163.650000,
                    "anulRedRate": 4.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-25T09:15:00",
                        "clsgDtTm": "2020-05-26T05:00:00"
                    },
                    "untrInvstmtVal": 4303.160000,
                    "anulInvstmtRate": 4.3000,
                    "untrRedVal": 4218.750000,
                    "anulRedRate": 4.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-26T09:15:00",
                        "clsgDtTm": "2020-05-27T05:00:00"
                    },
                    "untrInvstmtVal": 4317.680000,
                    "anulInvstmtRate": 4.2800,
                    "untrRedVal": 4232.860000,
                    "anulRedRate": 4.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-27T09:15:00",
                        "clsgDtTm": "2020-05-28T05:00:00"
                    },
                    "untrInvstmtVal": 4245.600000,
                    "anulInvstmtRate": 4.3800,
                    "untrRedVal": 4162.940000,
                    "anulRedRate": 4.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-28T09:15:00",
                        "clsgDtTm": "2020-05-29T05:00:00"
                    },
                    "untrInvstmtVal": 4280.890000,
                    "anulInvstmtRate": 4.3300,
                    "untrRedVal": 4197.190000,
                    "anulRedRate": 4.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-05-29T09:15:00",
                        "clsgDtTm": "2020-06-01T05:00:00"
                    },
                    "untrInvstmtVal": 4258.590000,
                    "anulInvstmtRate": 4.3600,
                    "untrRedVal": 4175.570000,
                    "anulRedRate": 4.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-01T09:15:00",
                        "clsgDtTm": "2020-06-02T05:00:00"
                    },
                    "untrInvstmtVal": 4244.680000,
                    "anulInvstmtRate": 4.3800,
                    "untrRedVal": 4162.090000,
                    "anulRedRate": 4.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-02T09:15:00",
                        "clsgDtTm": "2020-06-03T05:00:00"
                    },
                    "untrInvstmtVal": 4322.710000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4237.810000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-03T09:15:00",
                        "clsgDtTm": "2020-06-04T05:00:00"
                    },
                    "untrInvstmtVal": 4373.520000,
                    "anulInvstmtRate": 4.2000,
                    "untrRedVal": 4287.110000,
                    "anulRedRate": 4.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-04T09:15:00",
                        "clsgDtTm": "2020-06-05T05:00:00"
                    },
                    "untrInvstmtVal": 4380.910000,
                    "anulInvstmtRate": 4.1900,
                    "untrRedVal": 4294.310000,
                    "anulRedRate": 4.3100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-05T09:15:00",
                        "clsgDtTm": "2020-06-08T05:00:00"
                    },
                    "untrInvstmtVal": 4401.770000,
                    "anulInvstmtRate": 4.1600,
                    "untrRedVal": 4314.540000,
                    "anulRedRate": 4.2800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-08T09:15:00",
                        "clsgDtTm": "2020-06-09T05:00:00"
                    },
                    "untrInvstmtVal": 4431.510000,
                    "anulInvstmtRate": 4.1200,
                    "untrRedVal": 4343.410000,
                    "anulRedRate": 4.2400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-09T09:15:00",
                        "clsgDtTm": "2020-06-10T05:00:00"
                    },
                    "untrInvstmtVal": 4461.540000,
                    "anulInvstmtRate": 4.0800,
                    "untrRedVal": 4372.560000,
                    "anulRedRate": 4.2000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-10T09:15:00",
                        "clsgDtTm": "2020-06-12T05:00:00"
                    },
                    "untrInvstmtVal": 4463.780000,
                    "anulInvstmtRate": 4.0800,
                    "untrRedVal": 4374.770000,
                    "anulRedRate": 4.2000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-12T09:15:00",
                        "clsgDtTm": "2020-06-15T05:00:00"
                    },
                    "untrInvstmtVal": 4462.840000,
                    "anulInvstmtRate": 4.0800,
                    "untrRedVal": 4373.880000,
                    "anulRedRate": 4.2000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-15T09:15:00",
                        "clsgDtTm": "2020-06-16T05:00:00"
                    },
                    "untrInvstmtVal": 4411.650000,
                    "anulInvstmtRate": 4.1500,
                    "untrRedVal": 4324.260000,
                    "anulRedRate": 4.2700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-16T09:15:00",
                        "clsgDtTm": "2020-06-17T05:00:00"
                    },
                    "untrInvstmtVal": 4405.300000,
                    "anulInvstmtRate": 4.1600,
                    "untrRedVal": 4318.120000,
                    "anulRedRate": 4.2800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-17T09:15:00",
                        "clsgDtTm": "2020-06-18T05:00:00"
                    },
                    "untrInvstmtVal": 4391.620000,
                    "anulInvstmtRate": 4.1800,
                    "untrRedVal": 4304.890000,
                    "anulRedRate": 4.3000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-18T09:15:00",
                        "clsgDtTm": "2020-06-19T05:00:00"
                    },
                    "untrInvstmtVal": 4378.020000,
                    "anulInvstmtRate": 4.2000,
                    "untrRedVal": 4291.720000,
                    "anulRedRate": 4.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-19T09:15:00",
                        "clsgDtTm": "2020-06-22T05:00:00"
                    },
                    "untrInvstmtVal": 4379.690000,
                    "anulInvstmtRate": 4.2000,
                    "untrRedVal": 4293.380000,
                    "anulRedRate": 4.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-22T09:15:00",
                        "clsgDtTm": "2020-06-23T05:00:00"
                    },
                    "untrInvstmtVal": 4337.250000,
                    "anulInvstmtRate": 4.2600,
                    "untrRedVal": 4252.240000,
                    "anulRedRate": 4.3800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-23T09:15:00",
                        "clsgDtTm": "2020-06-24T05:00:00"
                    },
                    "untrInvstmtVal": 4331.100000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4246.310000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-24T09:15:00",
                        "clsgDtTm": "2020-06-25T05:00:00"
                    },
                    "untrInvstmtVal": 4317.820000,
                    "anulInvstmtRate": 4.2900,
                    "untrRedVal": 4233.460000,
                    "anulRedRate": 4.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-25T09:15:00",
                        "clsgDtTm": "2020-06-26T05:00:00"
                    },
                    "untrInvstmtVal": 4347.550000,
                    "anulInvstmtRate": 4.2500,
                    "untrRedVal": 4262.330000,
                    "anulRedRate": 4.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-26T09:15:00",
                        "clsgDtTm": "2020-06-29T05:00:00"
                    },
                    "untrInvstmtVal": 4328.680000,
                    "anulInvstmtRate": 4.2800,
                    "untrRedVal": 4244.070000,
                    "anulRedRate": 4.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-29T09:15:00",
                        "clsgDtTm": "2020-06-30T05:00:00"
                    },
                    "untrInvstmtVal": 4344.150000,
                    "anulInvstmtRate": 4.2600,
                    "untrRedVal": 4259.100000,
                    "anulRedRate": 4.3800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-06-30T09:15:00",
                        "clsgDtTm": "2020-07-01T05:00:00"
                    },
                    "untrInvstmtVal": 4403.410000,
                    "anulInvstmtRate": 4.1800,
                    "untrRedVal": 4316.620000,
                    "anulRedRate": 4.3000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-01T09:15:00",
                        "clsgDtTm": "2020-07-02T05:00:00"
                    },
                    "untrInvstmtVal": 4456.390000,
                    "anulInvstmtRate": 4.1100,
                    "untrRedVal": 4368.040000,
                    "anulRedRate": 4.2300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-02T09:15:00",
                        "clsgDtTm": "2020-07-03T05:00:00"
                    },
                    "untrInvstmtVal": 4495.120000,
                    "anulInvstmtRate": 4.0600,
                    "untrRedVal": 4405.630000,
                    "anulRedRate": 4.1800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-03T09:15:00",
                        "clsgDtTm": "2020-07-06T05:00:00"
                    },
                    "untrInvstmtVal": 4519.850000,
                    "anulInvstmtRate": 4.0300,
                    "untrRedVal": 4429.660000,
                    "anulRedRate": 4.1500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-06T09:15:00",
                        "clsgDtTm": "2020-07-07T05:00:00"
                    },
                    "untrInvstmtVal": 4551.650000,
                    "anulInvstmtRate": 3.9900,
                    "untrRedVal": 4460.530000,
                    "anulRedRate": 4.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-07T09:15:00",
                        "clsgDtTm": "2020-07-08T05:00:00"
                    },
                    "untrInvstmtVal": 4545.060000,
                    "anulInvstmtRate": 4.0000,
                    "untrRedVal": 4454.170000,
                    "anulRedRate": 4.1200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-08T09:15:00",
                        "clsgDtTm": "2020-07-09T05:00:00"
                    },
                    "untrInvstmtVal": 4553.880000,
                    "anulInvstmtRate": 3.9900,
                    "untrRedVal": 4462.760000,
                    "anulRedRate": 4.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-09T09:15:00",
                        "clsgDtTm": "2020-07-10T05:00:00"
                    },
                    "untrInvstmtVal": 4601.630000,
                    "anulInvstmtRate": 3.9300,
                    "untrRedVal": 4509.090000,
                    "anulRedRate": 4.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-10T09:15:00",
                        "clsgDtTm": "2020-07-13T05:00:00"
                    },
                    "untrInvstmtVal": 4618.850000,
                    "anulInvstmtRate": 3.9100,
                    "untrRedVal": 4525.820000,
                    "anulRedRate": 4.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-13T09:15:00",
                        "clsgDtTm": "2020-07-14T05:00:00"
                    },
                    "untrInvstmtVal": 4580.840000,
                    "anulInvstmtRate": 3.9600,
                    "untrRedVal": 4489.000000,
                    "anulRedRate": 4.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-14T09:15:00",
                        "clsgDtTm": "2020-07-15T05:00:00"
                    },
                    "untrInvstmtVal": 4589.730000,
                    "anulInvstmtRate": 3.9500,
                    "untrRedVal": 4497.640000,
                    "anulRedRate": 4.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-15T09:15:00",
                        "clsgDtTm": "2020-07-16T05:00:00"
                    },
                    "untrInvstmtVal": 4614.650000,
                    "anulInvstmtRate": 3.9200,
                    "untrRedVal": 4521.850000,
                    "anulRedRate": 4.0400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-16T09:15:00",
                        "clsgDtTm": "2020-07-17T05:00:00"
                    },
                    "untrInvstmtVal": 4592.640000,
                    "anulInvstmtRate": 3.9500,
                    "untrRedVal": 4500.550000,
                    "anulRedRate": 4.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-17T09:15:00",
                        "clsgDtTm": "2020-07-20T05:00:00"
                    },
                    "untrInvstmtVal": 4674.590000,
                    "anulInvstmtRate": 3.8500,
                    "untrRedVal": 4580.060000,
                    "anulRedRate": 3.9700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-20T09:15:00",
                        "clsgDtTm": "2020-07-21T05:00:00"
                    },
                    "untrInvstmtVal": 4700.160000,
                    "anulInvstmtRate": 3.8200,
                    "untrRedVal": 4604.880000,
                    "anulRedRate": 3.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-21T09:15:00",
                        "clsgDtTm": "2020-07-22T05:00:00"
                    },
                    "untrInvstmtVal": 4685.540000,
                    "anulInvstmtRate": 3.8400,
                    "untrRedVal": 4590.740000,
                    "anulRedRate": 3.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-22T09:15:00",
                        "clsgDtTm": "2020-07-23T05:00:00"
                    },
                    "untrInvstmtVal": 4703.100000,
                    "anulInvstmtRate": 3.8200,
                    "untrRedVal": 4607.800000,
                    "anulRedRate": 3.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-23T09:15:00",
                        "clsgDtTm": "2020-07-24T05:00:00"
                    },
                    "untrInvstmtVal": 4688.480000,
                    "anulInvstmtRate": 3.8400,
                    "untrRedVal": 4593.670000,
                    "anulRedRate": 3.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-24T09:15:00",
                        "clsgDtTm": "2020-07-27T05:00:00"
                    },
                    "untrInvstmtVal": 4691.490000,
                    "anulInvstmtRate": 3.8400,
                    "untrRedVal": 4596.640000,
                    "anulRedRate": 3.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-27T09:15:00",
                        "clsgDtTm": "2020-07-28T05:00:00"
                    },
                    "untrInvstmtVal": 4755.070000,
                    "anulInvstmtRate": 3.7600,
                    "untrRedVal": 4658.290000,
                    "anulRedRate": 3.8800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-28T09:15:00",
                        "clsgDtTm": "2020-07-29T05:00:00"
                    },
                    "untrInvstmtVal": 4731.860000,
                    "anulInvstmtRate": 3.7900,
                    "untrRedVal": 4635.820000,
                    "anulRedRate": 3.9100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-29T09:15:00",
                        "clsgDtTm": "2020-07-30T05:00:00"
                    },
                    "untrInvstmtVal": 4741.260000,
                    "anulInvstmtRate": 3.7800,
                    "untrRedVal": 4644.970000,
                    "anulRedRate": 3.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-30T09:15:00",
                        "clsgDtTm": "2020-07-31T05:00:00"
                    },
                    "untrInvstmtVal": 4783.540000,
                    "anulInvstmtRate": 3.7300,
                    "untrRedVal": 4685.990000,
                    "anulRedRate": 3.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-07-31T09:15:00",
                        "clsgDtTm": "2020-08-03T05:00:00"
                    },
                    "untrInvstmtVal": 4844.280000,
                    "anulInvstmtRate": 3.6600,
                    "untrRedVal": 4744.920000,
                    "anulRedRate": 3.7800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-03T09:15:00",
                        "clsgDtTm": "2020-08-04T05:00:00"
                    },
                    "untrInvstmtVal": 4837.150000,
                    "anulInvstmtRate": 3.6700,
                    "untrRedVal": 4738.040000,
                    "anulRedRate": 3.7900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-04T09:15:00",
                        "clsgDtTm": "2020-08-05T05:00:00"
                    },
                    "untrInvstmtVal": 4830.040000,
                    "anulInvstmtRate": 3.6800,
                    "untrRedVal": 4731.180000,
                    "anulRedRate": 3.8000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-05T09:15:00",
                        "clsgDtTm": "2020-08-06T05:00:00"
                    },
                    "untrInvstmtVal": 4806.300000,
                    "anulInvstmtRate": 3.7100,
                    "untrRedVal": 4708.210000,
                    "anulRedRate": 3.8300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-06T09:15:00",
                        "clsgDtTm": "2020-08-07T05:00:00"
                    },
                    "untrInvstmtVal": 4774.530000,
                    "anulInvstmtRate": 3.7500,
                    "untrRedVal": 4677.440000,
                    "anulRedRate": 3.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-07T09:15:00",
                        "clsgDtTm": "2020-08-10T05:00:00"
                    },
                    "untrInvstmtVal": 4743.830000,
                    "anulInvstmtRate": 3.7900,
                    "untrRedVal": 4647.720000,
                    "anulRedRate": 3.9100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-10T09:15:00",
                        "clsgDtTm": "2020-08-11T05:00:00"
                    },
                    "untrInvstmtVal": 4688.650000,
                    "anulInvstmtRate": 3.8600,
                    "untrRedVal": 4594.250000,
                    "anulRedRate": 3.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-11T09:15:00",
                        "clsgDtTm": "2020-08-12T05:00:00"
                    },
                    "untrInvstmtVal": 4603.250000,
                    "anulInvstmtRate": 3.9700,
                    "untrRedVal": 4511.470000,
                    "anulRedRate": 4.0900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-12T09:15:00",
                        "clsgDtTm": "2020-08-13T05:00:00"
                    },
                    "untrInvstmtVal": 4620.070000,
                    "anulInvstmtRate": 3.9500,
                    "untrRedVal": 4527.820000,
                    "anulRedRate": 4.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-13T09:15:00",
                        "clsgDtTm": "2020-08-14T05:00:00"
                    },
                    "untrInvstmtVal": 4590.250000,
                    "anulInvstmtRate": 3.9900,
                    "untrRedVal": 4498.930000,
                    "anulRedRate": 4.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-14T09:15:00",
                        "clsgDtTm": "2020-08-17T05:00:00"
                    },
                    "untrInvstmtVal": 4576.430000,
                    "anulInvstmtRate": 4.0100,
                    "untrRedVal": 4485.570000,
                    "anulRedRate": 4.1300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-17T09:15:00",
                        "clsgDtTm": "2020-08-18T05:00:00"
                    },
                    "untrInvstmtVal": 4554.340000,
                    "anulInvstmtRate": 4.0400,
                    "untrRedVal": 4464.170000,
                    "anulRedRate": 4.1600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-18T09:15:00",
                        "clsgDtTm": "2020-08-19T05:00:00"
                    },
                    "untrInvstmtVal": 4656.090000,
                    "anulInvstmtRate": 3.9100,
                    "untrRedVal": 4562.880000,
                    "anulRedRate": 4.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-19T09:15:00",
                        "clsgDtTm": "2020-08-20T05:00:00"
                    },
                    "untrInvstmtVal": 4696.670000,
                    "anulInvstmtRate": 3.8600,
                    "untrRedVal": 4602.260000,
                    "anulRedRate": 3.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-20T09:15:00",
                        "clsgDtTm": "2020-08-21T05:00:00"
                    },
                    "untrInvstmtVal": 4665.760000,
                    "anulInvstmtRate": 3.9000,
                    "untrRedVal": 4572.320000,
                    "anulRedRate": 4.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-21T09:15:00",
                        "clsgDtTm": "2020-08-24T05:00:00"
                    },
                    "untrInvstmtVal": 4682.870000,
                    "anulInvstmtRate": 3.8800,
                    "untrRedVal": 4588.940000,
                    "anulRedRate": 4.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-24T09:15:00",
                        "clsgDtTm": "2020-08-25T05:00:00"
                    },
                    "untrInvstmtVal": 4699.700000,
                    "anulInvstmtRate": 3.8600,
                    "untrRedVal": 4605.290000,
                    "anulRedRate": 3.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-25T09:15:00",
                        "clsgDtTm": "2020-08-26T05:00:00"
                    },
                    "untrInvstmtVal": 4676.710000,
                    "anulInvstmtRate": 3.8900,
                    "untrRedVal": 4583.030000,
                    "anulRedRate": 4.0100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-26T09:15:00",
                        "clsgDtTm": "2020-08-27T05:00:00"
                    },
                    "untrInvstmtVal": 4585.510000,
                    "anulInvstmtRate": 4.0100,
                    "untrRedVal": 4494.630000,
                    "anulRedRate": 4.1300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-27T09:15:00",
                        "clsgDtTm": "2020-08-28T05:00:00"
                    },
                    "untrInvstmtVal": 4594.240000,
                    "anulInvstmtRate": 4.0000,
                    "untrRedVal": 4503.130000,
                    "anulRedRate": 4.1200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-28T09:15:00",
                        "clsgDtTm": "2020-08-31T05:00:00"
                    },
                    "untrInvstmtVal": 4634.690000,
                    "anulInvstmtRate": 3.9500,
                    "untrRedVal": 4542.390000,
                    "anulRedRate": 4.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-08-31T09:15:00",
                        "clsgDtTm": "2020-09-01T05:00:00"
                    },
                    "untrInvstmtVal": 4604.630000,
                    "anulInvstmtRate": 3.9900,
                    "untrRedVal": 4513.280000,
                    "anulRedRate": 4.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-01T09:15:00",
                        "clsgDtTm": "2020-09-02T05:00:00"
                    },
                    "untrInvstmtVal": 4613.400000,
                    "anulInvstmtRate": 3.9800,
                    "untrRedVal": 4521.810000,
                    "anulRedRate": 4.1000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-02T09:15:00",
                        "clsgDtTm": "2020-09-03T05:00:00"
                    },
                    "untrInvstmtVal": 4598.970000,
                    "anulInvstmtRate": 4.0000,
                    "untrRedVal": 4507.840000,
                    "anulRedRate": 4.1200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-03T09:15:00",
                        "clsgDtTm": "2020-09-04T05:00:00"
                    },
                    "untrInvstmtVal": 4615.460000,
                    "anulInvstmtRate": 3.9800,
                    "untrRedVal": 4523.870000,
                    "anulRedRate": 4.1000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-04T09:15:00",
                        "clsgDtTm": "2020-09-08T05:00:00"
                    },
                    "untrInvstmtVal": 4625.180000,
                    "anulInvstmtRate": 3.9700,
                    "untrRedVal": 4533.340000,
                    "anulRedRate": 4.0900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-08T09:15:00",
                        "clsgDtTm": "2020-09-09T05:00:00"
                    },
                    "untrInvstmtVal": 4587.600000,
                    "anulInvstmtRate": 4.0200,
                    "untrRedVal": 4496.920000,
                    "anulRedRate": 4.1400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-09T09:15:00",
                        "clsgDtTm": "2020-09-10T05:00:00"
                    },
                    "untrInvstmtVal": 4612.890000,
                    "anulInvstmtRate": 3.9900,
                    "untrRedVal": 4521.490000,
                    "anulRedRate": 4.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-10T09:15:00",
                        "clsgDtTm": "2020-09-11T05:00:00"
                    },
                    "untrInvstmtVal": 4583.190000,
                    "anulInvstmtRate": 4.0300,
                    "untrRedVal": 4492.710000,
                    "anulRedRate": 4.1500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-11T09:15:00",
                        "clsgDtTm": "2020-09-14T05:00:00"
                    },
                    "untrInvstmtVal": 4577.320000,
                    "anulInvstmtRate": 4.0400,
                    "untrRedVal": 4487.070000,
                    "anulRedRate": 4.1600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-14T09:15:00",
                        "clsgDtTm": "2020-09-15T05:00:00"
                    },
                    "untrInvstmtVal": 4586.040000,
                    "anulInvstmtRate": 4.0300,
                    "untrRedVal": 4495.560000,
                    "anulRedRate": 4.1500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-15T09:15:00",
                        "clsgDtTm": "2020-09-16T05:00:00"
                    },
                    "untrInvstmtVal": 4564.260000,
                    "anulInvstmtRate": 4.0600,
                    "untrRedVal": 4474.460000,
                    "anulRedRate": 4.1800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-16T09:15:00",
                        "clsgDtTm": "2020-09-17T05:00:00"
                    },
                    "untrInvstmtVal": 4527.610000,
                    "anulInvstmtRate": 4.1100,
                    "untrRedVal": 4438.950000,
                    "anulRedRate": 4.2300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-17T09:15:00",
                        "clsgDtTm": "2020-09-18T05:00:00"
                    },
                    "untrInvstmtVal": 4543.760000,
                    "anulInvstmtRate": 4.0900,
                    "untrRedVal": 4454.640000,
                    "anulRedRate": 4.2100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-18T09:15:00",
                        "clsgDtTm": "2020-09-21T05:00:00"
                    },
                    "untrInvstmtVal": 4441.880000,
                    "anulInvstmtRate": 4.2300,
                    "untrRedVal": 4355.850000,
                    "anulRedRate": 4.3500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-21T09:15:00",
                        "clsgDtTm": "2020-09-22T05:00:00"
                    },
                    "untrInvstmtVal": 4371.110000,
                    "anulInvstmtRate": 4.3300,
                    "untrRedVal": 4287.220000,
                    "anulRedRate": 4.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-22T09:15:00",
                        "clsgDtTm": "2020-09-23T05:00:00"
                    },
                    "untrInvstmtVal": 4422.330000,
                    "anulInvstmtRate": 4.2600,
                    "untrRedVal": 4336.950000,
                    "anulRedRate": 4.3800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-23T09:15:00",
                        "clsgDtTm": "2020-09-24T05:00:00"
                    },
                    "untrInvstmtVal": 4467.110000,
                    "anulInvstmtRate": 4.2000,
                    "untrRedVal": 4380.420000,
                    "anulRedRate": 4.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-24T09:15:00",
                        "clsgDtTm": "2020-09-25T05:00:00"
                    },
                    "untrInvstmtVal": 4457.130000,
                    "anulInvstmtRate": 4.2200,
                    "untrRedVal": 4370.810000,
                    "anulRedRate": 4.3400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-25T09:15:00",
                        "clsgDtTm": "2020-09-28T05:00:00"
                    },
                    "untrInvstmtVal": 4519.080000,
                    "anulInvstmtRate": 4.1400,
                    "untrRedVal": 4430.960000,
                    "anulRedRate": 4.2600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-28T09:15:00",
                        "clsgDtTm": "2020-09-29T05:00:00"
                    },
                    "untrInvstmtVal": 4417.990000,
                    "anulInvstmtRate": 4.2800,
                    "untrRedVal": 4332.910000,
                    "anulRedRate": 4.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-29T09:15:00",
                        "clsgDtTm": "2020-09-30T05:00:00"
                    },
                    "untrInvstmtVal": 4369.500000,
                    "anulInvstmtRate": 4.3500,
                    "untrRedVal": 4285.900000,
                    "anulRedRate": 4.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-09-30T09:15:00",
                        "clsgDtTm": "2020-10-01T05:00:00"
                    },
                    "untrInvstmtVal": 4428.100000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4342.800000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-01T09:15:00",
                        "clsgDtTm": "2020-10-02T05:00:00"
                    },
                    "untrInvstmtVal": 4400.830000,
                    "anulInvstmtRate": 4.3100,
                    "untrRedVal": 4316.380000,
                    "anulRedRate": 4.4300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-02T09:15:00",
                        "clsgDtTm": "2020-10-05T05:00:00"
                    },
                    "untrInvstmtVal": 4298.500000,
                    "anulInvstmtRate": 4.4600,
                    "untrRedVal": 4217.120000,
                    "anulRedRate": 4.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-05T09:15:00",
                        "clsgDtTm": "2020-10-06T05:00:00"
                    },
                    "untrInvstmtVal": 4433.920000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4348.560000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-06T09:15:00",
                        "clsgDtTm": "2020-10-07T05:00:00"
                    },
                    "untrInvstmtVal": 4385.270000,
                    "anulInvstmtRate": 4.3400,
                    "untrRedVal": 4301.390000,
                    "anulRedRate": 4.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-07T09:15:00",
                        "clsgDtTm": "2020-10-08T05:00:00"
                    },
                    "untrInvstmtVal": 4386.720000,
                    "anulInvstmtRate": 4.3400,
                    "untrRedVal": 4302.840000,
                    "anulRedRate": 4.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-08T09:15:00",
                        "clsgDtTm": "2020-10-09T05:00:00"
                    },
                    "untrInvstmtVal": 4423.880000,
                    "anulInvstmtRate": 4.2900,
                    "untrRedVal": 4338.930000,
                    "anulRedRate": 4.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-09T09:15:00",
                        "clsgDtTm": "2020-10-13T05:00:00"
                    },
                    "untrInvstmtVal": 4469.910000,
                    "anulInvstmtRate": 4.2400,
                    "untrRedVal": 4383.710000,
                    "anulRedRate": 4.3600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-13T09:15:00",
                        "clsgDtTm": "2020-10-14T05:00:00"
                    },
                    "untrInvstmtVal": 4493.560000,
                    "anulInvstmtRate": 4.2100,
                    "untrRedVal": 4406.700000,
                    "anulRedRate": 4.3300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-14T09:15:00",
                        "clsgDtTm": "2020-10-15T05:00:00"
                    },
                    "untrInvstmtVal": 4487.910000,
                    "anulInvstmtRate": 4.2200,
                    "untrRedVal": 4401.250000,
                    "anulRedRate": 4.3400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-15T09:15:00",
                        "clsgDtTm": "2020-10-16T05:00:00"
                    },
                    "untrInvstmtVal": 4453.140000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4367.550000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-16T09:15:00",
                        "clsgDtTm": "2020-10-19T05:00:00"
                    },
                    "untrInvstmtVal": 4478.450000,
                    "anulInvstmtRate": 4.2400,
                    "untrRedVal": 4392.160000,
                    "anulRedRate": 4.3600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-19T09:15:00",
                        "clsgDtTm": "2020-10-20T05:00:00"
                    },
                    "untrInvstmtVal": 4509.460000,
                    "anulInvstmtRate": 4.2000,
                    "untrRedVal": 4422.290000,
                    "anulRedRate": 4.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-20T09:15:00",
                        "clsgDtTm": "2020-10-21T05:00:00"
                    },
                    "untrInvstmtVal": 4525.910000,
                    "anulInvstmtRate": 4.1800,
                    "untrRedVal": 4438.290000,
                    "anulRedRate": 4.3000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-21T09:15:00",
                        "clsgDtTm": "2020-10-22T05:00:00"
                    },
                    "untrInvstmtVal": 4505.420000,
                    "anulInvstmtRate": 4.2100,
                    "untrRedVal": 4418.440000,
                    "anulRedRate": 4.3300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-22T09:15:00",
                        "clsgDtTm": "2020-10-23T05:00:00"
                    },
                    "untrInvstmtVal": 4499.730000,
                    "anulInvstmtRate": 4.2200,
                    "untrRedVal": 4412.970000,
                    "anulRedRate": 4.3400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-23T09:15:00",
                        "clsgDtTm": "2020-10-26T05:00:00"
                    },
                    "untrInvstmtVal": 4466.760000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4381.030000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-26T09:15:00",
                        "clsgDtTm": "2020-10-27T05:00:00"
                    },
                    "untrInvstmtVal": 4464.090000,
                    "anulInvstmtRate": 4.2800,
                    "untrRedVal": 4378.510000,
                    "anulRedRate": 4.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-27T09:15:00",
                        "clsgDtTm": "2020-10-28T05:00:00"
                    },
                    "untrInvstmtVal": 4451.550000,
                    "anulInvstmtRate": 4.3000,
                    "untrRedVal": 4366.380000,
                    "anulRedRate": 4.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-28T09:15:00",
                        "clsgDtTm": "2020-10-29T05:00:00"
                    },
                    "untrInvstmtVal": 4467.900000,
                    "anulInvstmtRate": 4.2800,
                    "untrRedVal": 4382.290000,
                    "anulRedRate": 4.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-29T09:15:00",
                        "clsgDtTm": "2020-10-30T05:00:00"
                    },
                    "untrInvstmtVal": 4462.570000,
                    "anulInvstmtRate": 4.2900,
                    "untrRedVal": 4377.160000,
                    "anulRedRate": 4.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-10-30T09:15:00",
                        "clsgDtTm": "2020-11-03T05:00:00"
                    },
                    "untrInvstmtVal": 4439.180000,
                    "anulInvstmtRate": 4.3300,
                    "untrRedVal": 4354.530000,
                    "anulRedRate": 4.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-03T09:15:00",
                        "clsgDtTm": "2020-11-04T05:00:00"
                    },
                    "untrInvstmtVal": 4441.080000,
                    "anulInvstmtRate": 4.3300,
                    "untrRedVal": 4356.420000,
                    "anulRedRate": 4.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-04T09:15:00",
                        "clsgDtTm": "2020-11-05T05:00:00"
                    },
                    "untrInvstmtVal": 4450.150000,
                    "anulInvstmtRate": 4.3200,
                    "untrRedVal": 4365.260000,
                    "anulRedRate": 4.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-05T09:15:00",
                        "clsgDtTm": "2020-11-06T05:00:00"
                    },
                    "untrInvstmtVal": 4488.200000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4402.220000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-06T09:15:00",
                        "clsgDtTm": "2020-11-09T05:00:00"
                    },
                    "untrInvstmtVal": 4575.470000,
                    "anulInvstmtRate": 4.1600,
                    "untrRedVal": 4486.970000,
                    "anulRedRate": 4.2800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-09T09:15:00",
                        "clsgDtTm": "2020-11-10T05:00:00"
                    },
                    "untrInvstmtVal": 4607.580000,
                    "anulInvstmtRate": 4.1200,
                    "untrRedVal": 4518.170000,
                    "anulRedRate": 4.2400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-10T09:15:00",
                        "clsgDtTm": "2020-11-11T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4490.950000,
                    "anulRedRate": 4.2800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-11T09:15:00",
                        "clsgDtTm": "2020-11-12T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4407.020000,
                    "anulRedRate": 4.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-12T09:15:00",
                        "clsgDtTm": "2020-11-13T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-13T09:15:00",
                        "clsgDtTm": "2020-11-16T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-16T09:15:00",
                        "clsgDtTm": "2020-11-17T05:00:00"
                    },
                    "untrInvstmtVal": 4386.180000,
                    "anulInvstmtRate": 4.3000,
                    "untrRedVal": 4300.620000,
                    "anulRedRate": 4.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-17T09:15:00",
                        "clsgDtTm": "2020-11-18T05:00:00"
                    },
                    "untrInvstmtVal": 4424.020000,
                    "anulInvstmtRate": 4.2500,
                    "untrRedVal": 4337.370000,
                    "anulRedRate": 4.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-18T09:15:00",
                        "clsgDtTm": "2020-11-19T05:00:00"
                    },
                    "untrInvstmtVal": 4389.020000,
                    "anulInvstmtRate": 4.3000,
                    "untrRedVal": 4303.440000,
                    "anulRedRate": 4.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-19T09:15:00",
                        "clsgDtTm": "2020-11-20T05:00:00"
                    },
                    "untrInvstmtVal": 4397.690000,
                    "anulInvstmtRate": 4.2900,
                    "untrRedVal": 4311.890000,
                    "anulRedRate": 4.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-20T09:15:00",
                        "clsgDtTm": "2020-11-23T05:00:00"
                    },
                    "untrInvstmtVal": 4364.410000,
                    "anulInvstmtRate": 4.3400,
                    "untrRedVal": 4279.640000,
                    "anulRedRate": 4.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-23T09:15:00",
                        "clsgDtTm": "2020-11-24T05:00:00"
                    },
                    "untrInvstmtVal": 4358.660000,
                    "anulInvstmtRate": 4.3500,
                    "untrRedVal": 4274.100000,
                    "anulRedRate": 4.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-24T09:15:00",
                        "clsgDtTm": "2020-11-25T05:00:00"
                    },
                    "untrInvstmtVal": 4374.420000,
                    "anulInvstmtRate": 4.3300,
                    "untrRedVal": 4289.420000,
                    "anulRedRate": 4.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-25T09:15:00",
                        "clsgDtTm": "2020-11-26T05:00:00"
                    },
                    "untrInvstmtVal": 4395.060000,
                    "anulInvstmtRate": 4.3100,
                    "untrRedVal": 4309.540000,
                    "anulRedRate": 4.4300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-26T09:15:00",
                        "clsgDtTm": "2020-11-27T05:00:00"
                    },
                    "untrInvstmtVal": 4426.020000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4339.610000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-27T09:15:00",
                        "clsgDtTm": "2020-11-30T05:00:00"
                    },
                    "untrInvstmtVal": 4459.550000,
                    "anulInvstmtRate": 4.2300,
                    "untrRedVal": 4372.210000,
                    "anulRedRate": 4.3500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-11-30T09:15:00",
                        "clsgDtTm": "2020-12-01T05:00:00"
                    },
                    "untrInvstmtVal": 4417.420000,
                    "anulInvstmtRate": 4.2900,
                    "untrRedVal": 4331.370000,
                    "anulRedRate": 4.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-01T09:15:00",
                        "clsgDtTm": "2020-12-02T05:00:00"
                    },
                    "untrInvstmtVal": 4523.030000,
                    "anulInvstmtRate": 4.1500,
                    "untrRedVal": 4433.880000,
                    "anulRedRate": 4.2700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-02T09:15:00",
                        "clsgDtTm": "2020-12-03T05:00:00"
                    },
                    "untrInvstmtVal": 4601.320000,
                    "anulInvstmtRate": 4.0500,
                    "untrRedVal": 4509.870000,
                    "anulRedRate": 4.1700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-03T09:15:00",
                        "clsgDtTm": "2020-12-04T05:00:00"
                    },
                    "untrInvstmtVal": 4705.510000,
                    "anulInvstmtRate": 3.9200,
                    "untrRedVal": 4610.970000,
                    "anulRedRate": 4.0400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-04T09:15:00",
                        "clsgDtTm": "2020-12-07T05:00:00"
                    },
                    "untrInvstmtVal": 4662.170000,
                    "anulInvstmtRate": 3.9800,
                    "untrRedVal": 4569.000000,
                    "anulRedRate": 4.1000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-07T09:15:00",
                        "clsgDtTm": "2020-12-08T05:00:00"
                    },
                    "untrInvstmtVal": 4671.980000,
                    "anulInvstmtRate": 3.9700,
                    "untrRedVal": 4578.560000,
                    "anulRedRate": 4.0900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-08T09:15:00",
                        "clsgDtTm": "2020-12-09T05:00:00"
                    },
                    "untrInvstmtVal": 4646.850000,
                    "anulInvstmtRate": 4.0100,
                    "untrRedVal": 4554.270000,
                    "anulRedRate": 4.1300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-09T09:15:00",
                        "clsgDtTm": "2020-12-10T05:00:00"
                    },
                    "untrInvstmtVal": 4656.800000,
                    "anulInvstmtRate": 4.0000,
                    "untrRedVal": 4563.960000,
                    "anulRedRate": 4.1200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-10T09:15:00",
                        "clsgDtTm": "2020-12-11T05:00:00"
                    },
                    "untrInvstmtVal": 4706.400000,
                    "anulInvstmtRate": 3.9400,
                    "untrRedVal": 4612.120000,
                    "anulRedRate": 4.0600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-11T09:15:00",
                        "clsgDtTm": "2020-12-14T05:00:00"
                    },
                    "untrInvstmtVal": 4759.580000,
                    "anulInvstmtRate": 3.8800,
                    "untrRedVal": 4663.760000,
                    "anulRedRate": 4.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-14T09:15:00",
                        "clsgDtTm": "2020-12-15T05:00:00"
                    },
                    "untrInvstmtVal": 4761.700000,
                    "anulInvstmtRate": 3.8800,
                    "untrRedVal": 4665.860000,
                    "anulRedRate": 4.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-15T09:15:00",
                        "clsgDtTm": "2020-12-16T05:00:00"
                    },
                    "untrInvstmtVal": 4796.960000,
                    "anulInvstmtRate": 3.8400,
                    "untrRedVal": 4700.100000,
                    "anulRedRate": 3.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-16T09:15:00",
                        "clsgDtTm": "2020-12-17T05:00:00"
                    },
                    "untrInvstmtVal": 4758.880000,
                    "anulInvstmtRate": 3.8900,
                    "untrRedVal": 4663.220000,
                    "anulRedRate": 4.0100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-17T09:15:00",
                        "clsgDtTm": "2020-12-18T05:00:00"
                    },
                    "untrInvstmtVal": 4769.630000,
                    "anulInvstmtRate": 3.8800,
                    "untrRedVal": 4673.700000,
                    "anulRedRate": 4.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-18T09:15:00",
                        "clsgDtTm": "2020-12-21T05:00:00"
                    },
                    "untrInvstmtVal": 4792.430000,
                    "anulInvstmtRate": 3.8600,
                    "untrRedVal": 4695.900000,
                    "anulRedRate": 3.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-21T09:15:00",
                        "clsgDtTm": "2020-12-22T05:00:00"
                    },
                    "untrInvstmtVal": 4811.480000,
                    "anulInvstmtRate": 3.8400,
                    "untrRedVal": 4714.410000,
                    "anulRedRate": 3.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-22T09:15:00",
                        "clsgDtTm": "2020-12-23T05:00:00"
                    },
                    "untrInvstmtVal": 4797.750000,
                    "anulInvstmtRate": 3.8600,
                    "untrRedVal": 4701.150000,
                    "anulRedRate": 3.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-23T09:15:00",
                        "clsgDtTm": "2020-12-28T05:00:00"
                    },
                    "untrInvstmtVal": 4807.900000,
                    "anulInvstmtRate": 3.8600,
                    "untrRedVal": 4711.140000,
                    "anulRedRate": 3.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-28T09:15:00",
                        "clsgDtTm": "2020-12-29T05:00:00"
                    },
                    "untrInvstmtVal": 4802.310000,
                    "anulInvstmtRate": 3.8700,
                    "untrRedVal": 4705.760000,
                    "anulRedRate": 3.9900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-29T09:15:00",
                        "clsgDtTm": "2020-12-30T05:00:00"
                    },
                    "untrInvstmtVal": 4862.610000,
                    "anulInvstmtRate": 3.8000,
                    "untrRedVal": 4764.300000,
                    "anulRedRate": 3.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2020-12-30T09:15:00",
                        "clsgDtTm": "2021-01-04T05:00:00"
                    },
                    "untrInvstmtVal": 4898.600000,
                    "anulInvstmtRate": 3.7700,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-04T09:15:00",
                        "clsgDtTm": "2021-01-05T05:00:00"
                    },
                    "untrInvstmtVal": 4909.630000,
                    "anulInvstmtRate": 3.7600,
                    "untrRedVal": 4810.090000,
                    "anulRedRate": 3.8800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-05T09:15:00",
                        "clsgDtTm": "2021-01-06T05:00:00"
                    },
                    "untrInvstmtVal": 4887.080000,
                    "anulInvstmtRate": 3.7900,
                    "untrRedVal": 4788.270000,
                    "anulRedRate": 3.9100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-06T09:15:00",
                        "clsgDtTm": "2021-01-07T05:00:00"
                    },
                    "untrInvstmtVal": 4823.460000,
                    "anulInvstmtRate": 3.8700,
                    "untrRedVal": 4726.620000,
                    "anulRedRate": 3.9900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-07T09:15:00",
                        "clsgDtTm": "2021-01-08T05:00:00"
                    },
                    "untrInvstmtVal": 4793.440000,
                    "anulInvstmtRate": 3.9100,
                    "untrRedVal": 4697.550000,
                    "anulRedRate": 4.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-08T09:15:00",
                        "clsgDtTm": "2021-01-11T05:00:00"
                    },
                    "untrInvstmtVal": 4807.890000,
                    "anulInvstmtRate": 3.9000,
                    "untrRedVal": 4711.650000,
                    "anulRedRate": 4.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-11T09:15:00",
                        "clsgDtTm": "2021-01-12T05:00:00"
                    },
                    "untrInvstmtVal": 4738.010000,
                    "anulInvstmtRate": 3.9900,
                    "untrRedVal": 4643.910000,
                    "anulRedRate": 4.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-12T09:15:00",
                        "clsgDtTm": "2021-01-13T05:00:00"
                    },
                    "untrInvstmtVal": 4770.730000,
                    "anulInvstmtRate": 3.9600,
                    "untrRedVal": 4675.760000,
                    "anulRedRate": 4.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-13T09:15:00",
                        "clsgDtTm": "2021-01-14T05:00:00"
                    },
                    "untrInvstmtVal": 4773.530000,
                    "anulInvstmtRate": 3.9600,
                    "untrRedVal": 4678.530000,
                    "anulRedRate": 4.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-14T09:15:00",
                        "clsgDtTm": "2021-01-15T05:00:00"
                    },
                    "untrInvstmtVal": 4816.790000,
                    "anulInvstmtRate": 3.9100,
                    "untrRedVal": 4720.540000,
                    "anulRedRate": 4.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-15T09:15:00",
                        "clsgDtTm": "2021-01-18T05:00:00"
                    },
                    "untrInvstmtVal": 4746.310000,
                    "anulInvstmtRate": 4.0000,
                    "untrRedVal": 4652.210000,
                    "anulRedRate": 4.1200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-18T09:15:00",
                        "clsgDtTm": "2021-01-19T05:00:00"
                    },
                    "untrInvstmtVal": 4779.470000,
                    "anulInvstmtRate": 3.9600,
                    "untrRedVal": 4684.410000,
                    "anulRedRate": 4.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-19T09:15:00",
                        "clsgDtTm": "2021-01-20T05:00:00"
                    },
                    "untrInvstmtVal": 4732.730000,
                    "anulInvstmtRate": 4.0200,
                    "untrRedVal": 4639.110000,
                    "anulRedRate": 4.1400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-20T09:15:00",
                        "clsgDtTm": "2021-01-21T05:00:00"
                    },
                    "untrInvstmtVal": 4710.210000,
                    "anulInvstmtRate": 4.0500,
                    "untrRedVal": 4617.290000,
                    "anulRedRate": 4.1700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-21T09:15:00",
                        "clsgDtTm": "2021-01-22T05:00:00"
                    },
                    "untrInvstmtVal": 4695.680000,
                    "anulInvstmtRate": 4.0700,
                    "untrRedVal": 4603.230000,
                    "anulRedRate": 4.1900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-22T09:15:00",
                        "clsgDtTm": "2021-01-26T05:00:00"
                    },
                    "untrInvstmtVal": 4659.930000,
                    "anulInvstmtRate": 4.1200,
                    "untrRedVal": 4568.620000,
                    "anulRedRate": 4.2400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-26T09:15:00",
                        "clsgDtTm": "2021-01-27T05:00:00"
                    },
                    "untrInvstmtVal": 4699.950000,
                    "anulInvstmtRate": 4.0700,
                    "untrRedVal": 4607.480000,
                    "anulRedRate": 4.1900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-27T09:15:00",
                        "clsgDtTm": "2021-01-28T05:00:00"
                    },
                    "untrInvstmtVal": 4701.690000,
                    "anulInvstmtRate": 4.0700,
                    "untrRedVal": 4609.210000,
                    "anulRedRate": 4.1900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-28T09:15:00",
                        "clsgDtTm": "2021-01-29T05:00:00"
                    },
                    "untrInvstmtVal": 4742.260000,
                    "anulInvstmtRate": 4.0200,
                    "untrRedVal": 4648.600000,
                    "anulRedRate": 4.1400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-01-29T09:15:00",
                        "clsgDtTm": "2021-02-01T05:00:00"
                    },
                    "untrInvstmtVal": 4728.570000,
                    "anulInvstmtRate": 4.0400,
                    "untrRedVal": 4635.360000,
                    "anulRedRate": 4.1600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-01T09:15:00",
                        "clsgDtTm": "2021-02-02T05:00:00"
                    },
                    "untrInvstmtVal": 4745.580000,
                    "anulInvstmtRate": 4.0200,
                    "untrRedVal": 4651.900000,
                    "anulRedRate": 4.1400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-02T09:15:00",
                        "clsgDtTm": "2021-02-03T05:00:00"
                    },
                    "untrInvstmtVal": 4746.780000,
                    "anulInvstmtRate": 4.0200,
                    "untrRedVal": 4653.100000,
                    "anulRedRate": 4.1400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-03T09:15:00",
                        "clsgDtTm": "2021-02-04T05:00:00"
                    },
                    "untrInvstmtVal": 4844.570000,
                    "anulInvstmtRate": 3.9000,
                    "untrRedVal": 4747.990000,
                    "anulRedRate": 4.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-04T09:15:00",
                        "clsgDtTm": "2021-02-05T05:00:00"
                    },
                    "untrInvstmtVal": 4837.610000,
                    "anulInvstmtRate": 3.9100,
                    "untrRedVal": 4741.270000,
                    "anulRedRate": 4.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-05T09:15:00",
                        "clsgDtTm": "2021-02-08T05:00:00"
                    },
                    "untrInvstmtVal": 4847.910000,
                    "anulInvstmtRate": 3.9000,
                    "untrRedVal": 4751.310000,
                    "anulRedRate": 4.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-08T09:15:00",
                        "clsgDtTm": "2021-02-09T05:00:00"
                    },
                    "untrInvstmtVal": 4840.950000,
                    "anulInvstmtRate": 3.9100,
                    "untrRedVal": 4744.590000,
                    "anulRedRate": 4.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-09T09:15:00",
                        "clsgDtTm": "2021-02-10T05:00:00"
                    },
                    "untrInvstmtVal": 4807.700000,
                    "anulInvstmtRate": 3.9500,
                    "untrRedVal": 4712.340000,
                    "anulRedRate": 4.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-10T09:15:00",
                        "clsgDtTm": "2021-02-11T05:00:00"
                    },
                    "untrInvstmtVal": 4800.760000,
                    "anulInvstmtRate": 3.9600,
                    "untrRedVal": 4705.650000,
                    "anulRedRate": 4.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-11T09:15:00",
                        "clsgDtTm": "2021-02-12T05:00:00"
                    },
                    "untrInvstmtVal": 4809.950000,
                    "anulInvstmtRate": 3.9500,
                    "untrRedVal": 4714.600000,
                    "anulRedRate": 4.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-12T09:15:00",
                        "clsgDtTm": "2021-02-17T05:00:00"
                    },
                    "untrInvstmtVal": 4814.110000,
                    "anulInvstmtRate": 3.9500,
                    "untrRedVal": 4718.700000,
                    "anulRedRate": 4.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-17T09:15:00",
                        "clsgDtTm": "2021-02-18T05:00:00"
                    },
                    "untrInvstmtVal": 4783.850000,
                    "anulInvstmtRate": 3.9900,
                    "untrRedVal": 4689.380000,
                    "anulRedRate": 4.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-18T09:15:00",
                        "clsgDtTm": "2021-02-19T05:00:00"
                    },
                    "untrInvstmtVal": 4793.720000,
                    "anulInvstmtRate": 3.9800,
                    "untrRedVal": 4699.000000,
                    "anulRedRate": 4.1000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-19T09:15:00",
                        "clsgDtTm": "2021-02-22T05:00:00"
                    },
                    "untrInvstmtVal": 4773.880000,
                    "anulInvstmtRate": 4.0100,
                    "untrRedVal": 4679.810000,
                    "anulRedRate": 4.1300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-22T09:15:00",
                        "clsgDtTm": "2021-02-23T05:00:00"
                    },
                    "untrInvstmtVal": 4720.520000,
                    "anulInvstmtRate": 4.0800,
                    "untrRedVal": 4628.080000,
                    "anulRedRate": 4.2000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-23T09:15:00",
                        "clsgDtTm": "2021-02-24T05:00:00"
                    },
                    "untrInvstmtVal": 4668.110000,
                    "anulInvstmtRate": 4.1500,
                    "untrRedVal": 4577.270000,
                    "anulRedRate": 4.2700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-24T09:15:00",
                        "clsgDtTm": "2021-02-25T05:00:00"
                    },
                    "untrInvstmtVal": 4631.770000,
                    "anulInvstmtRate": 4.2000,
                    "untrRedVal": 4542.050000,
                    "anulRedRate": 4.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-25T09:15:00",
                        "clsgDtTm": "2021-02-26T05:00:00"
                    },
                    "untrInvstmtVal": 4536.520000,
                    "anulInvstmtRate": 4.3300,
                    "untrRedVal": 4449.650000,
                    "anulRedRate": 4.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-02-26T09:15:00",
                        "clsgDtTm": "2021-03-01T05:00:00"
                    },
                    "untrInvstmtVal": 4622.490000,
                    "anulInvstmtRate": 4.2200,
                    "untrRedVal": 4533.140000,
                    "anulRedRate": 4.3400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-01T09:15:00",
                        "clsgDtTm": "2021-03-02T05:00:00"
                    },
                    "untrInvstmtVal": 4616.780000,
                    "anulInvstmtRate": 4.2300,
                    "untrRedVal": 4527.640000,
                    "anulRedRate": 4.3500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-02T09:15:00",
                        "clsgDtTm": "2021-03-03T05:00:00"
                    },
                    "untrInvstmtVal": 4588.610000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4500.350000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-03T09:15:00",
                        "clsgDtTm": "2021-03-04T05:00:00"
                    },
                    "untrInvstmtVal": 4628.020000,
                    "anulInvstmtRate": 4.2200,
                    "untrRedVal": 4538.630000,
                    "anulRedRate": 4.3400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-04T09:15:00",
                        "clsgDtTm": "2021-03-05T05:00:00"
                    },
                    "untrInvstmtVal": 4675.590000,
                    "anulInvstmtRate": 4.1600,
                    "untrRedVal": 4584.830000,
                    "anulRedRate": 4.2800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-05T09:15:00",
                        "clsgDtTm": "2021-03-08T05:00:00"
                    },
                    "untrInvstmtVal": 4710.530000,
                    "anulInvstmtRate": 4.1200,
                    "untrRedVal": 4618.800000,
                    "anulRedRate": 4.2400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-08T09:15:00",
                        "clsgDtTm": "2021-03-09T05:00:00"
                    },
                    "untrInvstmtVal": 4650.920000,
                    "anulInvstmtRate": 4.2000,
                    "untrRedVal": 4560.990000,
                    "anulRedRate": 4.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-09T09:15:00",
                        "clsgDtTm": "2021-03-10T05:00:00"
                    },
                    "untrInvstmtVal": 4555.460000,
                    "anulInvstmtRate": 4.3300,
                    "untrRedVal": 4468.390000,
                    "anulRedRate": 4.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-10T09:15:00",
                        "clsgDtTm": "2021-03-11T05:00:00"
                    },
                    "untrInvstmtVal": 4601.820000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4513.430000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-11T09:15:00",
                        "clsgDtTm": "2021-03-12T05:00:00"
                    },
                    "untrInvstmtVal": 4634.390000,
                    "anulInvstmtRate": 4.2400,
                    "untrRedVal": 4545.160000,
                    "anulRedRate": 4.3600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-12T09:15:00",
                        "clsgDtTm": "2021-03-15T05:00:00"
                    },
                    "untrInvstmtVal": 4594.420000,
                    "anulInvstmtRate": 4.3000,
                    "untrRedVal": 4506.440000,
                    "anulRedRate": 4.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-15T09:15:00",
                        "clsgDtTm": "2021-03-16T05:00:00"
                    },
                    "untrInvstmtVal": 4626.410000,
                    "anulInvstmtRate": 4.2600,
                    "untrRedVal": 4537.530000,
                    "anulRedRate": 4.3800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-16T09:15:00",
                        "clsgDtTm": "2021-03-17T05:00:00"
                    },
                    "untrInvstmtVal": 4628.480000,
                    "anulInvstmtRate": 4.2600,
                    "untrRedVal": 4539.590000,
                    "anulRedRate": 4.3800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-17T09:15:00",
                        "clsgDtTm": "2021-03-18T05:00:00"
                    },
                    "untrInvstmtVal": 4615.560000,
                    "anulInvstmtRate": 4.2800,
                    "untrRedVal": 4527.080000,
                    "anulRedRate": 4.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-18T09:15:00",
                        "clsgDtTm": "2021-03-19T05:00:00"
                    },
                    "untrInvstmtVal": 4655.290000,
                    "anulInvstmtRate": 4.2300,
                    "untrRedVal": 4565.680000,
                    "anulRedRate": 4.3500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-19T09:15:00",
                        "clsgDtTm": "2021-03-22T05:00:00"
                    },
                    "untrInvstmtVal": 4592.500000,
                    "anulInvstmtRate": 4.3200,
                    "untrRedVal": 4504.810000,
                    "anulRedRate": 4.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-22T09:15:00",
                        "clsgDtTm": "2021-03-23T05:00:00"
                    },
                    "untrInvstmtVal": 4514.070000,
                    "anulInvstmtRate": 4.4300,
                    "untrRedVal": 4428.720000,
                    "anulRedRate": 4.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-23T09:15:00",
                        "clsgDtTm": "2021-03-24T05:00:00"
                    },
                    "untrInvstmtVal": 4430.760000,
                    "anulInvstmtRate": 4.5500,
                    "untrRedVal": 4347.890000,
                    "anulRedRate": 4.6700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-24T09:15:00",
                        "clsgDtTm": "2021-03-25T05:00:00"
                    },
                    "untrInvstmtVal": 4475.170000,
                    "anulInvstmtRate": 4.4900,
                    "untrRedVal": 4391.040000,
                    "anulRedRate": 4.6100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-25T09:15:00",
                        "clsgDtTm": "2021-03-26T05:00:00"
                    },
                    "untrInvstmtVal": 4491.480000,
                    "anulInvstmtRate": 4.4700,
                    "untrRedVal": 4406.920000,
                    "anulRedRate": 4.5900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-26T09:15:00",
                        "clsgDtTm": "2021-03-29T05:00:00"
                    },
                    "untrInvstmtVal": 4528.080000,
                    "anulInvstmtRate": 4.4300,
                    "untrRedVal": 4442.550000,
                    "anulRedRate": 4.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-29T09:15:00",
                        "clsgDtTm": "2021-03-30T05:00:00"
                    },
                    "untrInvstmtVal": 4501.570000,
                    "anulInvstmtRate": 4.4700,
                    "untrRedVal": 4416.860000,
                    "anulRedRate": 4.5900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-30T09:15:00",
                        "clsgDtTm": "2021-03-31T05:00:00"
                    },
                    "untrInvstmtVal": 4518.220000,
                    "anulInvstmtRate": 4.4500,
                    "untrRedVal": 4433.070000,
                    "anulRedRate": 4.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-03-31T09:15:00",
                        "clsgDtTm": "2021-04-01T05:00:00"
                    },
                    "untrInvstmtVal": 4513.320000,
                    "anulInvstmtRate": 4.4600,
                    "untrRedVal": 4428.350000,
                    "anulRedRate": 4.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-01T09:15:00",
                        "clsgDtTm": "2021-04-05T05:00:00"
                    },
                    "untrInvstmtVal": 4549.050000,
                    "anulInvstmtRate": 4.4200,
                    "untrRedVal": 4463.130000,
                    "anulRedRate": 4.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-05T09:15:00",
                        "clsgDtTm": "2021-04-06T05:00:00"
                    },
                    "untrInvstmtVal": 4544.090000,
                    "anulInvstmtRate": 4.4300,
                    "untrRedVal": 4458.370000,
                    "anulRedRate": 4.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-06T09:15:00",
                        "clsgDtTm": "2021-04-07T05:00:00"
                    },
                    "untrInvstmtVal": 4496.060000,
                    "anulInvstmtRate": 4.5000,
                    "untrRedVal": 4411.780000,
                    "anulRedRate": 4.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-07T09:15:00",
                        "clsgDtTm": "2021-04-08T05:00:00"
                    },
                    "untrInvstmtVal": 4498.350000,
                    "anulInvstmtRate": 4.5000,
                    "untrRedVal": 4414.040000,
                    "anulRedRate": 4.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-08T09:15:00",
                        "clsgDtTm": "2021-04-09T05:00:00"
                    },
                    "untrInvstmtVal": 4550.990000,
                    "anulInvstmtRate": 4.4300,
                    "untrRedVal": 4465.190000,
                    "anulRedRate": 4.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-09T09:15:00",
                        "clsgDtTm": "2021-04-12T05:00:00"
                    },
                    "untrInvstmtVal": 4537.380000,
                    "anulInvstmtRate": 4.4500,
                    "untrRedVal": 4452.010000,
                    "anulRedRate": 4.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-12T09:15:00",
                        "clsgDtTm": "2021-04-13T05:00:00"
                    },
                    "untrInvstmtVal": 4539.520000,
                    "anulInvstmtRate": 4.4500,
                    "untrRedVal": 4454.130000,
                    "anulRedRate": 4.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-13T09:15:00",
                        "clsgDtTm": "2021-04-14T05:00:00"
                    },
                    "untrInvstmtVal": 4512.910000,
                    "anulInvstmtRate": 4.4900,
                    "untrRedVal": 4428.340000,
                    "anulRedRate": 4.6100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-14T09:15:00",
                        "clsgDtTm": "2021-04-15T05:00:00"
                    },
                    "untrInvstmtVal": 4529.390000,
                    "anulInvstmtRate": 4.4700,
                    "untrRedVal": 4444.370000,
                    "anulRedRate": 4.5900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-15T09:15:00",
                        "clsgDtTm": "2021-04-16T05:00:00"
                    },
                    "untrInvstmtVal": 4566.930000,
                    "anulInvstmtRate": 4.4200,
                    "untrRedVal": 4480.860000,
                    "anulRedRate": 4.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-16T09:15:00",
                        "clsgDtTm": "2021-04-19T05:00:00"
                    },
                    "untrInvstmtVal": 4591.420000,
                    "anulInvstmtRate": 4.3900,
                    "untrRedVal": 4504.680000,
                    "anulRedRate": 4.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-19T09:15:00",
                        "clsgDtTm": "2021-04-20T05:00:00"
                    },
                    "untrInvstmtVal": 4607.510000,
                    "anulInvstmtRate": 4.3700,
                    "untrRedVal": 4520.340000,
                    "anulRedRate": 4.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-20T09:15:00",
                        "clsgDtTm": "2021-04-22T05:00:00"
                    },
                    "untrInvstmtVal": 4551.070000,
                    "anulInvstmtRate": 4.4500,
                    "untrRedVal": 4465.590000,
                    "anulRedRate": 4.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-22T09:15:00",
                        "clsgDtTm": "2021-04-23T05:00:00"
                    },
                    "untrInvstmtVal": 4574.220000,
                    "anulInvstmtRate": 4.4200,
                    "untrRedVal": 4488.100000,
                    "anulRedRate": 4.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-23T09:15:00",
                        "clsgDtTm": "2021-04-26T05:00:00"
                    },
                    "untrInvstmtVal": 4598.730000,
                    "anulInvstmtRate": 4.3900,
                    "untrRedVal": 4511.930000,
                    "anulRedRate": 4.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-26T09:15:00",
                        "clsgDtTm": "2021-04-27T05:00:00"
                    },
                    "untrInvstmtVal": 4585.460000,
                    "anulInvstmtRate": 4.4100,
                    "untrRedVal": 4499.090000,
                    "anulRedRate": 4.5300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-27T09:15:00",
                        "clsgDtTm": "2021-04-28T05:00:00"
                    },
                    "untrInvstmtVal": 4594.160000,
                    "anulInvstmtRate": 4.4000,
                    "untrRedVal": 4507.560000,
                    "anulRedRate": 4.5200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-28T09:15:00",
                        "clsgDtTm": "2021-04-29T05:00:00"
                    },
                    "untrInvstmtVal": 4578.800000,
                    "anulInvstmtRate": 4.4200,
                    "untrRedVal": 4492.670000,
                    "anulRedRate": 4.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-29T09:15:00",
                        "clsgDtTm": "2021-04-30T05:00:00"
                    },
                    "untrInvstmtVal": 4580.030000,
                    "anulInvstmtRate": 4.4200,
                    "untrRedVal": 4493.890000,
                    "anulRedRate": 4.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-04-30T09:15:00",
                        "clsgDtTm": "2021-05-03T05:00:00"
                    },
                    "untrInvstmtVal": 4560.360000,
                    "anulInvstmtRate": 4.4500,
                    "untrRedVal": 4474.840000,
                    "anulRedRate": 4.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-03T09:15:00",
                        "clsgDtTm": "2021-05-04T05:00:00"
                    },
                    "untrInvstmtVal": 4525.650000,
                    "anulInvstmtRate": 4.5000,
                    "untrRedVal": 4441.170000,
                    "anulRedRate": 4.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-04T09:15:00",
                        "clsgDtTm": "2021-05-05T05:00:00"
                    },
                    "untrInvstmtVal": 4526.880000,
                    "anulInvstmtRate": 4.5000,
                    "untrRedVal": 4442.400000,
                    "anulRedRate": 4.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-05T09:15:00",
                        "clsgDtTm": "2021-05-06T05:00:00"
                    },
                    "untrInvstmtVal": 4513.850000,
                    "anulInvstmtRate": 4.5200,
                    "untrRedVal": 4429.790000,
                    "anulRedRate": 4.6400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-06T09:15:00",
                        "clsgDtTm": "2021-05-07T05:00:00"
                    },
                    "untrInvstmtVal": 4472.730000,
                    "anulInvstmtRate": 4.5800,
                    "untrRedVal": 4389.900000,
                    "anulRedRate": 4.7000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-07T09:15:00",
                        "clsgDtTm": "2021-05-10T05:00:00"
                    },
                    "untrInvstmtVal": 4510.080000,
                    "anulInvstmtRate": 4.5300,
                    "untrRedVal": 4426.200000,
                    "anulRedRate": 4.6500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-10T09:15:00",
                        "clsgDtTm": "2021-05-11T05:00:00"
                    },
                    "untrInvstmtVal": 4554.180000,
                    "anulInvstmtRate": 4.4700,
                    "untrRedVal": 4469.050000,
                    "anulRedRate": 4.5900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-11T09:15:00",
                        "clsgDtTm": "2021-05-12T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4513.340000,
                    "anulRedRate": 4.5300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-12T09:15:00",
                        "clsgDtTm": "2021-05-13T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4472.340000,
                    "anulRedRate": 4.5900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-13T09:15:00",
                        "clsgDtTm": "2021-05-14T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-14T09:15:00",
                        "clsgDtTm": "2021-05-17T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-17T09:15:00",
                        "clsgDtTm": "2021-05-18T05:00:00"
                    },
                    "untrInvstmtVal": 4510.460000,
                    "anulInvstmtRate": 4.4000,
                    "untrRedVal": 4423.760000,
                    "anulRedRate": 4.5200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-18T09:15:00",
                        "clsgDtTm": "2021-05-19T05:00:00"
                    },
                    "untrInvstmtVal": 4475.800000,
                    "anulInvstmtRate": 4.4500,
                    "untrRedVal": 4390.160000,
                    "anulRedRate": 4.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-19T09:15:00",
                        "clsgDtTm": "2021-05-20T05:00:00"
                    },
                    "untrInvstmtVal": 4455.930000,
                    "anulInvstmtRate": 4.4800,
                    "untrRedVal": 4370.900000,
                    "anulRedRate": 4.6000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-20T09:15:00",
                        "clsgDtTm": "2021-05-21T05:00:00"
                    },
                    "untrInvstmtVal": 4493.890000,
                    "anulInvstmtRate": 4.4300,
                    "untrRedVal": 4407.790000,
                    "anulRedRate": 4.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-21T09:15:00",
                        "clsgDtTm": "2021-05-24T05:00:00"
                    },
                    "untrInvstmtVal": 4497.700000,
                    "anulInvstmtRate": 4.4300,
                    "untrRedVal": 4411.550000,
                    "anulRedRate": 4.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-24T09:15:00",
                        "clsgDtTm": "2021-05-25T05:00:00"
                    },
                    "untrInvstmtVal": 4484.950000,
                    "anulInvstmtRate": 4.4500,
                    "untrRedVal": 4399.210000,
                    "anulRedRate": 4.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-25T09:15:00",
                        "clsgDtTm": "2021-05-26T05:00:00"
                    },
                    "untrInvstmtVal": 4479.490000,
                    "anulInvstmtRate": 4.4600,
                    "untrRedVal": 4393.950000,
                    "anulRedRate": 4.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-26T09:15:00",
                        "clsgDtTm": "2021-05-27T05:00:00"
                    },
                    "untrInvstmtVal": 4495.950000,
                    "anulInvstmtRate": 4.4400,
                    "untrRedVal": 4409.970000,
                    "anulRedRate": 4.5600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-27T09:15:00",
                        "clsgDtTm": "2021-05-28T05:00:00"
                    },
                    "untrInvstmtVal": 4512.330000,
                    "anulInvstmtRate": 4.4200,
                    "untrRedVal": 4425.910000,
                    "anulRedRate": 4.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-28T09:15:00",
                        "clsgDtTm": "2021-05-31T05:00:00"
                    },
                    "untrInvstmtVal": 4545.600000,
                    "anulInvstmtRate": 4.3800,
                    "untrRedVal": 4458.260000,
                    "anulRedRate": 4.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-05-31T09:15:00",
                        "clsgDtTm": "2021-06-01T05:00:00"
                    },
                    "untrInvstmtVal": 4532.670000,
                    "anulInvstmtRate": 4.4000,
                    "untrRedVal": 4445.750000,
                    "anulRedRate": 4.5200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-01T09:15:00",
                        "clsgDtTm": "2021-06-02T05:00:00"
                    },
                    "untrInvstmtVal": 4549.220000,
                    "anulInvstmtRate": 4.3800,
                    "untrRedVal": 4461.860000,
                    "anulRedRate": 4.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-02T09:15:00",
                        "clsgDtTm": "2021-06-04T05:00:00"
                    },
                    "untrInvstmtVal": 4596.750000,
                    "anulInvstmtRate": 4.3200,
                    "untrRedVal": 4508.050000,
                    "anulRedRate": 4.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-04T09:15:00",
                        "clsgDtTm": "2021-06-07T05:00:00"
                    },
                    "untrInvstmtVal": 4692.130000,
                    "anulInvstmtRate": 4.2000,
                    "untrRedVal": 4600.680000,
                    "anulRedRate": 4.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-07T09:15:00",
                        "clsgDtTm": "2021-06-08T05:00:00"
                    },
                    "untrInvstmtVal": 4655.520000,
                    "anulInvstmtRate": 4.2500,
                    "untrRedVal": 4565.190000,
                    "anulRedRate": 4.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-08T09:15:00",
                        "clsgDtTm": "2021-06-09T05:00:00"
                    },
                    "untrInvstmtVal": 4672.670000,
                    "anulInvstmtRate": 4.2300,
                    "untrRedVal": 4581.880000,
                    "anulRedRate": 4.3500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-09T09:15:00",
                        "clsgDtTm": "2021-06-10T05:00:00"
                    },
                    "untrInvstmtVal": 4679.180000,
                    "anulInvstmtRate": 4.2300,
                    "untrRedVal": 4588.280000,
                    "anulRedRate": 4.3500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-10T09:15:00",
                        "clsgDtTm": "2021-06-11T05:00:00"
                    },
                    "untrInvstmtVal": 4665.850000,
                    "anulInvstmtRate": 4.2500,
                    "untrRedVal": 4575.390000,
                    "anulRedRate": 4.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-11T09:15:00",
                        "clsgDtTm": "2021-06-14T05:00:00"
                    },
                    "untrInvstmtVal": 4639.880000,
                    "anulInvstmtRate": 4.2900,
                    "untrRedVal": 4550.240000,
                    "anulRedRate": 4.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-14T09:15:00",
                        "clsgDtTm": "2021-06-15T05:00:00"
                    },
                    "untrInvstmtVal": 4649.490000,
                    "anulInvstmtRate": 4.2800,
                    "untrRedVal": 4559.600000,
                    "anulRedRate": 4.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-15T09:15:00",
                        "clsgDtTm": "2021-06-16T05:00:00"
                    },
                    "untrInvstmtVal": 4635.960000,
                    "anulInvstmtRate": 4.3000,
                    "untrRedVal": 4546.510000,
                    "anulRedRate": 4.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-16T09:15:00",
                        "clsgDtTm": "2021-06-17T05:00:00"
                    },
                    "untrInvstmtVal": 4660.380000,
                    "anulInvstmtRate": 4.2700,
                    "untrRedVal": 4570.250000,
                    "anulRedRate": 4.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-17T09:15:00",
                        "clsgDtTm": "2021-06-18T05:00:00"
                    },
                    "untrInvstmtVal": 4631.670000,
                    "anulInvstmtRate": 4.3100,
                    "untrRedVal": 4542.430000,
                    "anulRedRate": 4.4300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-18T09:15:00",
                        "clsgDtTm": "2021-06-21T05:00:00"
                    },
                    "untrInvstmtVal": 4575.220000,
                    "anulInvstmtRate": 4.3900,
                    "untrRedVal": 4487.670000,
                    "anulRedRate": 4.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-21T09:15:00",
                        "clsgDtTm": "2021-06-22T05:00:00"
                    },
                    "untrInvstmtVal": 4599.150000,
                    "anulInvstmtRate": 4.3600,
                    "untrRedVal": 4510.940000,
                    "anulRedRate": 4.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-22T09:15:00",
                        "clsgDtTm": "2021-06-23T05:00:00"
                    },
                    "untrInvstmtVal": 4585.900000,
                    "anulInvstmtRate": 4.3800,
                    "untrRedVal": 4498.110000,
                    "anulRedRate": 4.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-23T09:15:00",
                        "clsgDtTm": "2021-06-24T05:00:00"
                    },
                    "untrInvstmtVal": 4594.970000,
                    "anulInvstmtRate": 4.3700,
                    "untrRedVal": 4506.960000,
                    "anulRedRate": 4.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-24T09:15:00",
                        "clsgDtTm": "2021-06-25T05:00:00"
                    },
                    "untrInvstmtVal": 4611.530000,
                    "anulInvstmtRate": 4.3500,
                    "untrRedVal": 4523.070000,
                    "anulRedRate": 4.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-25T09:15:00",
                        "clsgDtTm": "2021-06-28T05:00:00"
                    },
                    "untrInvstmtVal": 4614.880000,
                    "anulInvstmtRate": 4.3500,
                    "untrRedVal": 4526.380000,
                    "anulRedRate": 4.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-28T09:15:00",
                        "clsgDtTm": "2021-06-29T05:00:00"
                    },
                    "untrInvstmtVal": 4572.360000,
                    "anulInvstmtRate": 4.4100,
                    "untrRedVal": 4485.150000,
                    "anulRedRate": 4.5300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-29T09:15:00",
                        "clsgDtTm": "2021-06-30T05:00:00"
                    },
                    "untrInvstmtVal": 4588.810000,
                    "anulInvstmtRate": 4.3900,
                    "untrRedVal": 4501.160000,
                    "anulRedRate": 4.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-06-30T09:15:00",
                        "clsgDtTm": "2021-07-01T05:00:00"
                    },
                    "untrInvstmtVal": 4553.640000,
                    "anulInvstmtRate": 4.4400,
                    "untrRedVal": 4467.040000,
                    "anulRedRate": 4.5600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-01T09:15:00",
                        "clsgDtTm": "2021-07-02T05:00:00"
                    },
                    "untrInvstmtVal": 4569.990000,
                    "anulInvstmtRate": 4.4200,
                    "untrRedVal": 4482.950000,
                    "anulRedRate": 4.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-02T09:15:00",
                        "clsgDtTm": "2021-07-05T05:00:00"
                    },
                    "untrInvstmtVal": 4603.020000,
                    "anulInvstmtRate": 4.3800,
                    "untrRedVal": 4515.080000,
                    "anulRedRate": 4.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-05T09:15:00",
                        "clsgDtTm": "2021-07-06T05:00:00"
                    },
                    "untrInvstmtVal": 4619.610000,
                    "anulInvstmtRate": 4.3600,
                    "untrRedVal": 4531.220000,
                    "anulRedRate": 4.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-06T09:15:00",
                        "clsgDtTm": "2021-07-07T05:00:00"
                    },
                    "untrInvstmtVal": 4591.520000,
                    "anulInvstmtRate": 4.4000,
                    "untrRedVal": 4503.990000,
                    "anulRedRate": 4.5200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-07T09:15:00",
                        "clsgDtTm": "2021-07-08T05:00:00"
                    },
                    "untrInvstmtVal": 4600.600000,
                    "anulInvstmtRate": 4.3900,
                    "untrRedVal": 4512.840000,
                    "anulRedRate": 4.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-08T09:15:00",
                        "clsgDtTm": "2021-07-12T05:00:00"
                    },
                    "untrInvstmtVal": 4618.550000,
                    "anulInvstmtRate": 4.3700,
                    "untrRedVal": 4530.330000,
                    "anulRedRate": 4.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-12T09:15:00",
                        "clsgDtTm": "2021-07-13T05:00:00"
                    },
                    "untrInvstmtVal": 4635.100000,
                    "anulInvstmtRate": 4.3500,
                    "untrRedVal": 4546.440000,
                    "anulRedRate": 4.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-13T09:15:00",
                        "clsgDtTm": "2021-07-14T05:00:00"
                    },
                    "untrInvstmtVal": 4606.850000,
                    "anulInvstmtRate": 4.3900,
                    "untrRedVal": 4519.060000,
                    "anulRedRate": 4.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-14T09:15:00",
                        "clsgDtTm": "2021-07-15T05:00:00"
                    },
                    "untrInvstmtVal": 4623.340000,
                    "anulInvstmtRate": 4.3700,
                    "untrRedVal": 4535.100000,
                    "anulRedRate": 4.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-15T09:15:00",
                        "clsgDtTm": "2021-07-16T05:00:00"
                    },
                    "untrInvstmtVal": 4625.290000,
                    "anulInvstmtRate": 4.3700,
                    "untrRedVal": 4537.030000,
                    "anulRedRate": 4.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-16T09:15:00",
                        "clsgDtTm": "2021-07-19T05:00:00"
                    },
                    "untrInvstmtVal": 4659.580000,
                    "anulInvstmtRate": 4.3300,
                    "untrRedVal": 4570.380000,
                    "anulRedRate": 4.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-19T09:15:00",
                        "clsgDtTm": "2021-07-20T05:00:00"
                    },
                    "untrInvstmtVal": 4669.080000,
                    "anulInvstmtRate": 4.3200,
                    "untrRedVal": 4579.650000,
                    "anulRedRate": 4.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-20T09:15:00",
                        "clsgDtTm": "2021-07-21T05:00:00"
                    },
                    "untrInvstmtVal": 4686.210000,
                    "anulInvstmtRate": 4.3000,
                    "untrRedVal": 4596.310000,
                    "anulRedRate": 4.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-21T09:15:00",
                        "clsgDtTm": "2021-07-22T05:00:00"
                    },
                    "untrInvstmtVal": 4688.160000,
                    "anulInvstmtRate": 4.3000,
                    "untrRedVal": 4598.250000,
                    "anulRedRate": 4.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-22T09:15:00",
                        "clsgDtTm": "2021-07-23T05:00:00"
                    },
                    "untrInvstmtVal": 4690.120000,
                    "anulInvstmtRate": 4.3000,
                    "untrRedVal": 4600.200000,
                    "anulRedRate": 4.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-23T09:15:00",
                        "clsgDtTm": "2021-07-26T05:00:00"
                    },
                    "untrInvstmtVal": 4664.140000,
                    "anulInvstmtRate": 4.3400,
                    "untrRedVal": 4575.040000,
                    "anulRedRate": 4.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-26T09:15:00",
                        "clsgDtTm": "2021-07-27T05:00:00"
                    },
                    "untrInvstmtVal": 4661.250000,
                    "anulInvstmtRate": 4.3500,
                    "untrRedVal": 4572.300000,
                    "anulRedRate": 4.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-27T09:15:00",
                        "clsgDtTm": "2021-07-28T05:00:00"
                    },
                    "untrInvstmtVal": 4574.460000,
                    "anulInvstmtRate": 4.4700,
                    "untrRedVal": 4488.080000,
                    "anulRedRate": 4.5900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-28T09:15:00",
                        "clsgDtTm": "2021-07-29T05:00:00"
                    },
                    "untrInvstmtVal": 4583.940000,
                    "anulInvstmtRate": 4.4600,
                    "untrRedVal": 4497.320000,
                    "anulRedRate": 4.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-29T09:15:00",
                        "clsgDtTm": "2021-07-30T05:00:00"
                    },
                    "untrInvstmtVal": 4608.160000,
                    "anulInvstmtRate": 4.4300,
                    "untrRedVal": 4520.890000,
                    "anulRedRate": 4.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-07-30T09:15:00",
                        "clsgDtTm": "2021-08-02T05:00:00"
                    },
                    "untrInvstmtVal": 4561.820000,
                    "anulInvstmtRate": 4.5000,
                    "untrRedVal": 4475.960000,
                    "anulRedRate": 4.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-02T09:15:00",
                        "clsgDtTm": "2021-08-03T05:00:00"
                    },
                    "untrInvstmtVal": 4549.490000,
                    "anulInvstmtRate": 4.5200,
                    "untrRedVal": 4464.030000,
                    "anulRedRate": 4.6400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-03T09:15:00",
                        "clsgDtTm": "2021-08-04T05:00:00"
                    },
                    "untrInvstmtVal": 4566.140000,
                    "anulInvstmtRate": 4.5000,
                    "untrRedVal": 4480.240000,
                    "anulRedRate": 4.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-04T09:15:00",
                        "clsgDtTm": "2021-08-05T05:00:00"
                    },
                    "untrInvstmtVal": 4590.180000,
                    "anulInvstmtRate": 4.4700,
                    "untrRedVal": 4503.620000,
                    "anulRedRate": 4.5900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-05T09:15:00",
                        "clsgDtTm": "2021-08-06T05:00:00"
                    },
                    "untrInvstmtVal": 4534.350000,
                    "anulInvstmtRate": 4.5500,
                    "untrRedVal": 4449.450000,
                    "anulRedRate": 4.6700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-06T09:15:00",
                        "clsgDtTm": "2021-08-09T05:00:00"
                    },
                    "untrInvstmtVal": 4539.210000,
                    "anulInvstmtRate": 4.5500,
                    "untrRedVal": 4454.240000,
                    "anulRedRate": 4.6700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-09T09:15:00",
                        "clsgDtTm": "2021-08-10T05:00:00"
                    },
                    "untrInvstmtVal": 4527.030000,
                    "anulInvstmtRate": 4.5700,
                    "untrRedVal": 4442.460000,
                    "anulRedRate": 4.6900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-10T09:15:00",
                        "clsgDtTm": "2021-08-11T05:00:00"
                    },
                    "untrInvstmtVal": 4445.740000,
                    "anulInvstmtRate": 4.6900,
                    "untrRedVal": 4363.570000,
                    "anulRedRate": 4.8100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-11T09:15:00",
                        "clsgDtTm": "2021-08-12T05:00:00"
                    },
                    "untrInvstmtVal": 4454.880000,
                    "anulInvstmtRate": 4.6800,
                    "untrRedVal": 4372.480000,
                    "anulRedRate": 4.8000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-12T09:15:00",
                        "clsgDtTm": "2021-08-13T05:00:00"
                    },
                    "untrInvstmtVal": 4436.230000,
                    "anulInvstmtRate": 4.7100,
                    "untrRedVal": 4354.410000,
                    "anulRedRate": 4.8300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-13T09:15:00",
                        "clsgDtTm": "2021-08-16T05:00:00"
                    },
                    "untrInvstmtVal": 4358.680000,
                    "anulInvstmtRate": 4.8300,
                    "untrRedVal": 4279.150000,
                    "anulRedRate": 4.9500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-16T09:15:00",
                        "clsgDtTm": "2021-08-17T05:00:00"
                    },
                    "untrInvstmtVal": 4306.980000,
                    "anulInvstmtRate": 4.9100,
                    "untrRedVal": 4228.950000,
                    "anulRedRate": 5.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-17T09:15:00",
                        "clsgDtTm": "2021-08-18T05:00:00"
                    },
                    "untrInvstmtVal": 4321.790000,
                    "anulInvstmtRate": 4.8900,
                    "untrRedVal": 4243.380000,
                    "anulRedRate": 5.0100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-18T09:10:00",
                        "clsgDtTm": "2021-08-19T05:00:00"
                    },
                    "untrInvstmtVal": 4270.840000,
                    "anulInvstmtRate": 4.9700,
                    "untrRedVal": 4193.910000,
                    "anulRedRate": 5.0900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-19T09:15:00",
                        "clsgDtTm": "2021-08-20T05:00:00"
                    },
                    "untrInvstmtVal": 4305.140000,
                    "anulInvstmtRate": 4.9200,
                    "untrRedVal": 4227.270000,
                    "anulRedRate": 5.0400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-20T09:15:00",
                        "clsgDtTm": "2021-08-23T05:00:00"
                    },
                    "untrInvstmtVal": 4374.910000,
                    "anulInvstmtRate": 4.8200,
                    "untrRedVal": 4295.100000,
                    "anulRedRate": 4.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-23T09:15:00",
                        "clsgDtTm": "2021-08-24T05:00:00"
                    },
                    "untrInvstmtVal": 4296.690000,
                    "anulInvstmtRate": 4.9400,
                    "untrRedVal": 4219.140000,
                    "anulRedRate": 5.0600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-24T09:15:00",
                        "clsgDtTm": "2021-08-25T05:00:00"
                    },
                    "untrInvstmtVal": 4364.630000,
                    "anulInvstmtRate": 4.8400,
                    "untrRedVal": 4285.190000,
                    "anulRedRate": 4.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-25T09:25:00",
                        "clsgDtTm": "2021-08-26T05:00:00"
                    },
                    "untrInvstmtVal": 4427.340000,
                    "anulInvstmtRate": 4.7500,
                    "untrRedVal": 4346.140000,
                    "anulRedRate": 4.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-26T09:25:00",
                        "clsgDtTm": "2021-08-27T05:00:00"
                    },
                    "untrInvstmtVal": 4444.580000,
                    "anulInvstmtRate": 4.7300,
                    "untrRedVal": 4362.950000,
                    "anulRedRate": 4.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-27T09:25:00",
                        "clsgDtTm": "2021-08-30T05:00:00"
                    },
                    "untrInvstmtVal": 4455.140000,
                    "anulInvstmtRate": 4.7200,
                    "untrRedVal": 4373.260000,
                    "anulRedRate": 4.8400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-30T09:25:00",
                        "clsgDtTm": "2021-08-31T05:00:00"
                    },
                    "untrInvstmtVal": 4463.840000,
                    "anulInvstmtRate": 4.7100,
                    "untrRedVal": 4381.750000,
                    "anulRedRate": 4.8300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-08-31T09:20:00",
                        "clsgDtTm": "2021-09-01T05:00:00"
                    },
                    "untrInvstmtVal": 4417.410000,
                    "anulInvstmtRate": 4.7800,
                    "untrRedVal": 4336.690000,
                    "anulRedRate": 4.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-01T09:25:00",
                        "clsgDtTm": "2021-09-02T05:00:00"
                    },
                    "untrInvstmtVal": 4398.770000,
                    "anulInvstmtRate": 4.8100,
                    "untrRedVal": 4318.610000,
                    "anulRedRate": 4.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-02T09:25:00",
                        "clsgDtTm": "2021-09-03T05:00:00"
                    },
                    "untrInvstmtVal": 4393.750000,
                    "anulInvstmtRate": 4.8200,
                    "untrRedVal": 4313.780000,
                    "anulRedRate": 4.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-03T09:25:00",
                        "clsgDtTm": "2021-09-06T05:00:00"
                    },
                    "untrInvstmtVal": 4370.440000,
                    "anulInvstmtRate": 4.8600,
                    "untrRedVal": 4291.190000,
                    "anulRedRate": 4.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-06T09:25:00",
                        "clsgDtTm": "2021-09-08T05:00:00"
                    },
                    "untrInvstmtVal": 4373.120000,
                    "anulInvstmtRate": 4.8600,
                    "untrRedVal": 4293.840000,
                    "anulRedRate": 4.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-08T09:25:00",
                        "clsgDtTm": "2021-09-09T05:00:00"
                    },
                    "untrInvstmtVal": 4348.190000,
                    "anulInvstmtRate": 4.9000,
                    "untrRedVal": 4269.650000,
                    "anulRedRate": 5.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-09T09:20:00",
                        "clsgDtTm": "2021-09-10T05:00:00"
                    },
                    "untrInvstmtVal": 4397.740000,
                    "anulInvstmtRate": 4.8400,
                    "untrRedVal": 4317.920000,
                    "anulRedRate": 4.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-10T09:20:00",
                        "clsgDtTm": "2021-09-13T05:00:00"
                    },
                    "untrInvstmtVal": 4395.510000,
                    "anulInvstmtRate": 4.8500,
                    "untrRedVal": 4315.810000,
                    "anulRedRate": 4.9700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-13T09:25:00",
                        "clsgDtTm": "2021-09-14T05:00:00"
                    },
                    "untrInvstmtVal": 4431.470000,
                    "anulInvstmtRate": 4.8000,
                    "untrRedVal": 4350.790000,
                    "anulRedRate": 4.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-14T09:25:00",
                        "clsgDtTm": "2021-09-15T05:00:00"
                    },
                    "untrInvstmtVal": 4440.360000,
                    "anulInvstmtRate": 4.7900,
                    "untrRedVal": 4359.470000,
                    "anulRedRate": 4.9100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-15T09:25:00",
                        "clsgDtTm": "2021-09-16T05:00:00"
                    },
                    "untrInvstmtVal": 4429.000000,
                    "anulInvstmtRate": 4.8100,
                    "untrRedVal": 4348.470000,
                    "anulRedRate": 4.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-16T09:25:00",
                        "clsgDtTm": "2021-09-17T05:00:00"
                    },
                    "untrInvstmtVal": 4431.280000,
                    "anulInvstmtRate": 4.8100,
                    "untrRedVal": 4350.730000,
                    "anulRedRate": 4.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-17T09:25:00",
                        "clsgDtTm": "2021-09-20T05:00:00"
                    },
                    "untrInvstmtVal": 4389.160000,
                    "anulInvstmtRate": 4.8800,
                    "untrRedVal": 4309.880000,
                    "anulRedRate": 5.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-20T09:25:00",
                        "clsgDtTm": "2021-09-21T05:00:00"
                    },
                    "untrInvstmtVal": 4391.430000,
                    "anulInvstmtRate": 4.8800,
                    "untrRedVal": 4312.130000,
                    "anulRedRate": 5.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-21T09:25:00",
                        "clsgDtTm": "2021-09-22T05:00:00"
                    },
                    "untrInvstmtVal": 4400.420000,
                    "anulInvstmtRate": 4.8700,
                    "untrRedVal": 4320.910000,
                    "anulRedRate": 4.9900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-22T09:25:00",
                        "clsgDtTm": "2021-09-23T05:00:00"
                    },
                    "untrInvstmtVal": 4409.430000,
                    "anulInvstmtRate": 4.8600,
                    "untrRedVal": 4329.700000,
                    "anulRedRate": 4.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-23T09:25:00",
                        "clsgDtTm": "2021-09-24T05:00:00"
                    },
                    "untrInvstmtVal": 4384.870000,
                    "anulInvstmtRate": 4.9000,
                    "untrRedVal": 4305.880000,
                    "anulRedRate": 5.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-24T09:25:00",
                        "clsgDtTm": "2021-09-27T05:00:00"
                    },
                    "untrInvstmtVal": 4370.040000,
                    "anulInvstmtRate": 4.9300,
                    "untrRedVal": 4291.560000,
                    "anulRedRate": 5.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-27T09:25:00",
                        "clsgDtTm": "2021-09-28T05:00:00"
                    },
                    "untrInvstmtVal": 4350.360000,
                    "anulInvstmtRate": 4.9700,
                    "untrRedVal": 4272.520000,
                    "anulRedRate": 5.0900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-28T09:25:00",
                        "clsgDtTm": "2021-09-29T05:00:00"
                    },
                    "untrInvstmtVal": 4346.400000,
                    "anulInvstmtRate": 4.9800,
                    "untrRedVal": 4268.720000,
                    "anulRedRate": 5.1000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-29T09:25:00",
                        "clsgDtTm": "2021-09-30T05:00:00"
                    },
                    "untrInvstmtVal": 4355.590000,
                    "anulInvstmtRate": 4.9700,
                    "untrRedVal": 4277.690000,
                    "anulRedRate": 5.0900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-09-30T09:25:00",
                        "clsgDtTm": "2021-10-01T05:00:00"
                    },
                    "untrInvstmtVal": 4345.060000,
                    "anulInvstmtRate": 4.9900,
                    "untrRedVal": 4267.510000,
                    "anulRedRate": 5.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-01T09:25:00",
                        "clsgDtTm": "2021-10-04T05:00:00"
                    },
                    "untrInvstmtVal": 4338.120000,
                    "anulInvstmtRate": 5.0100,
                    "untrRedVal": 4260.850000,
                    "anulRedRate": 5.1300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-04T09:25:00",
                        "clsgDtTm": "2021-10-05T05:00:00"
                    },
                    "untrInvstmtVal": 4347.270000,
                    "anulInvstmtRate": 5.0000,
                    "untrRedVal": 4269.790000,
                    "anulRedRate": 5.1200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-05T09:25:00",
                        "clsgDtTm": "2021-10-06T05:00:00"
                    },
                    "untrInvstmtVal": 4336.810000,
                    "anulInvstmtRate": 5.0200,
                    "untrRedVal": 4259.670000,
                    "anulRedRate": 5.1400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-06T09:25:00",
                        "clsgDtTm": "2021-10-07T05:00:00"
                    },
                    "untrInvstmtVal": 4339.430000,
                    "anulInvstmtRate": 5.0200,
                    "untrRedVal": 4262.250000,
                    "anulRedRate": 5.1400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-07T09:25:00",
                        "clsgDtTm": "2021-10-08T05:00:00"
                    },
                    "untrInvstmtVal": 4316.060000,
                    "anulInvstmtRate": 5.0600,
                    "untrRedVal": 4239.590000,
                    "anulRedRate": 5.1800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-08T09:25:00",
                        "clsgDtTm": "2021-10-11T05:00:00"
                    },
                    "untrInvstmtVal": 4345.590000,
                    "anulInvstmtRate": 5.0200,
                    "untrRedVal": 4268.350000,
                    "anulRedRate": 5.1400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-11T09:25:00",
                        "clsgDtTm": "2021-10-13T05:00:00"
                    },
                    "untrInvstmtVal": 4323.760000,
                    "anulInvstmtRate": 5.0600,
                    "untrRedVal": 4247.200000,
                    "anulRedRate": 5.1800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-13T09:25:00",
                        "clsgDtTm": "2021-10-14T05:00:00"
                    },
                    "untrInvstmtVal": 4319.810000,
                    "anulInvstmtRate": 5.0700,
                    "untrRedVal": 4243.400000,
                    "anulRedRate": 5.1900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-14T09:25:00",
                        "clsgDtTm": "2021-10-15T05:00:00"
                    },
                    "untrInvstmtVal": 4315.860000,
                    "anulInvstmtRate": 5.0800,
                    "untrRedVal": 4239.610000,
                    "anulRedRate": 5.2000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-15T09:25:00",
                        "clsgDtTm": "2021-10-18T05:00:00"
                    },
                    "untrInvstmtVal": 4300.350000,
                    "anulInvstmtRate": 5.1100,
                    "untrRedVal": 4224.590000,
                    "anulRedRate": 5.2300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-18T09:25:00",
                        "clsgDtTm": "2021-10-19T05:00:00"
                    },
                    "untrInvstmtVal": 4276.670000,
                    "anulInvstmtRate": 5.1500,
                    "untrRedVal": 4201.620000,
                    "anulRedRate": 5.2700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-19T09:25:00",
                        "clsgDtTm": "2021-10-20T05:00:00"
                    },
                    "untrInvstmtVal": 4124.470000,
                    "anulInvstmtRate": 5.4000,
                    "untrRedVal": 4053.700000,
                    "anulRedRate": 5.5200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-20T09:25:00",
                        "clsgDtTm": "2021-10-21T05:00:00"
                    },
                    "untrInvstmtVal": 4217.590000,
                    "anulInvstmtRate": 5.2500,
                    "untrRedVal": 4144.270000,
                    "anulRedRate": 5.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-21T09:25:00",
                        "clsgDtTm": "2021-10-22T05:00:00"
                    },
                    "untrInvstmtVal": 4080.630000,
                    "anulInvstmtRate": 5.4800,
                    "untrRedVal": 4011.150000,
                    "anulRedRate": 5.6000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-22T09:25:00",
                        "clsgDtTm": "2021-10-25T05:00:00"
                    },
                    "untrInvstmtVal": 4167.870000,
                    "anulInvstmtRate": 5.3400,
                    "untrRedVal": 4096.030000,
                    "anulRedRate": 5.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-25T09:25:00",
                        "clsgDtTm": "2021-10-26T05:00:00"
                    },
                    "untrInvstmtVal": 4127.510000,
                    "anulInvstmtRate": 5.4100,
                    "untrRedVal": 4056.830000,
                    "anulRedRate": 5.5300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-26T09:25:00",
                        "clsgDtTm": "2021-10-27T05:00:00"
                    },
                    "untrInvstmtVal": 4081.950000,
                    "anulInvstmtRate": 5.4900,
                    "untrRedVal": 4012.560000,
                    "anulRedRate": 5.6100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-27T09:25:00",
                        "clsgDtTm": "2021-10-28T05:00:00"
                    },
                    "untrInvstmtVal": 4095.220000,
                    "anulInvstmtRate": 5.4800,
                    "untrRedVal": 4025.570000,
                    "anulRedRate": 5.6000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-28T09:25:00",
                        "clsgDtTm": "2021-10-29T05:00:00"
                    },
                    "untrInvstmtVal": 4079.840000,
                    "anulInvstmtRate": 5.5100,
                    "untrRedVal": 4010.650000,
                    "anulRedRate": 5.6300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-10-29T09:25:00",
                        "clsgDtTm": "2021-11-01T05:00:00"
                    },
                    "untrInvstmtVal": 4073.080000,
                    "anulInvstmtRate": 5.5300,
                    "untrRedVal": 4004.140000,
                    "anulRedRate": 5.6500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-01T09:25:00",
                        "clsgDtTm": "2021-11-03T05:00:00"
                    },
                    "untrInvstmtVal": 4059.220000,
                    "anulInvstmtRate": 5.5600,
                    "untrRedVal": 3990.720000,
                    "anulRedRate": 5.6800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-03T09:25:00",
                        "clsgDtTm": "2021-11-04T05:00:00"
                    },
                    "untrInvstmtVal": 4222.800000,
                    "anulInvstmtRate": 5.2900,
                    "untrRedVal": 4149.820000,
                    "anulRedRate": 5.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-04T09:25:00",
                        "clsgDtTm": "2021-11-05T05:00:00"
                    },
                    "untrInvstmtVal": 4237.430000,
                    "anulInvstmtRate": 5.2700,
                    "untrRedVal": 4164.080000,
                    "anulRedRate": 5.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-05T09:25:00",
                        "clsgDtTm": "2021-11-08T05:00:00"
                    },
                    "untrInvstmtVal": 4187.240000,
                    "anulInvstmtRate": 5.3600,
                    "untrRedVal": 4115.360000,
                    "anulRedRate": 5.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-08T09:25:00",
                        "clsgDtTm": "2021-11-09T05:00:00"
                    },
                    "untrInvstmtVal": 4201.680000,
                    "anulInvstmtRate": 5.3400,
                    "untrRedVal": 4129.440000,
                    "anulRedRate": 5.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-09T09:25:00",
                        "clsgDtTm": "2021-11-10T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4155.540000,
                    "anulRedRate": 5.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-10T09:25:00",
                        "clsgDtTm": "2021-11-11T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4189.800000,
                    "anulRedRate": 5.3800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-11T09:25:00",
                        "clsgDtTm": "2021-11-12T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-12T09:25:00",
                        "clsgDtTm": "2021-11-16T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-16T09:25:00",
                        "clsgDtTm": "2021-11-17T05:00:00"
                    },
                    "untrInvstmtVal": 4140.670000,
                    "anulInvstmtRate": 5.3000,
                    "untrRedVal": 4067.420000,
                    "anulRedRate": 5.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-17T09:25:00",
                        "clsgDtTm": "2021-11-18T05:00:00"
                    },
                    "untrInvstmtVal": 4130.530000,
                    "anulInvstmtRate": 5.3200,
                    "untrRedVal": 4057.600000,
                    "anulRedRate": 5.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-18T09:25:00",
                        "clsgDtTm": "2021-11-19T05:00:00"
                    },
                    "untrInvstmtVal": 4126.580000,
                    "anulInvstmtRate": 5.3300,
                    "untrRedVal": 4053.790000,
                    "anulRedRate": 5.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-19T09:25:00",
                        "clsgDtTm": "2021-11-22T05:00:00"
                    },
                    "untrInvstmtVal": 4150.030000,
                    "anulInvstmtRate": 5.3000,
                    "untrRedVal": 4076.660000,
                    "anulRedRate": 5.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-22T09:25:00",
                        "clsgDtTm": "2021-11-23T05:00:00"
                    },
                    "untrInvstmtVal": 4152.240000,
                    "anulInvstmtRate": 5.3000,
                    "untrRedVal": 4078.860000,
                    "anulRedRate": 5.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-23T09:25:00",
                        "clsgDtTm": "2021-11-24T05:00:00"
                    },
                    "untrInvstmtVal": 4185.660000,
                    "anulInvstmtRate": 5.2500,
                    "untrRedVal": 4111.380000,
                    "anulRedRate": 5.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-24T09:25:00",
                        "clsgDtTm": "2021-11-25T05:00:00"
                    },
                    "untrInvstmtVal": 4150.470000,
                    "anulInvstmtRate": 5.3100,
                    "untrRedVal": 4077.220000,
                    "anulRedRate": 5.4300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-25T09:25:00",
                        "clsgDtTm": "2021-11-26T05:00:00"
                    },
                    "untrInvstmtVal": 4158.890000,
                    "anulInvstmtRate": 5.3000,
                    "untrRedVal": 4085.440000,
                    "anulRedRate": 5.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-26T09:25:00",
                        "clsgDtTm": "2021-11-29T05:00:00"
                    },
                    "untrInvstmtVal": 4165.580000,
                    "anulInvstmtRate": 5.3000,
                    "untrRedVal": 4092.030000,
                    "anulRedRate": 5.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-29T09:25:00",
                        "clsgDtTm": "2021-11-30T05:00:00"
                    },
                    "untrInvstmtVal": 4155.510000,
                    "anulInvstmtRate": 5.3200,
                    "untrRedVal": 4082.290000,
                    "anulRedRate": 5.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-11-30T09:25:00",
                        "clsgDtTm": "2021-12-01T05:00:00"
                    },
                    "untrInvstmtVal": 4176.490000,
                    "anulInvstmtRate": 5.2900,
                    "untrRedVal": 4102.730000,
                    "anulRedRate": 5.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-01T09:25:00",
                        "clsgDtTm": "2021-12-02T05:00:00"
                    },
                    "untrInvstmtVal": 4191.350000,
                    "anulInvstmtRate": 5.2700,
                    "untrRedVal": 4117.210000,
                    "anulRedRate": 5.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-02T09:25:00",
                        "clsgDtTm": "2021-12-03T05:00:00"
                    },
                    "untrInvstmtVal": 4181.200000,
                    "anulInvstmtRate": 5.2900,
                    "untrRedVal": 4107.390000,
                    "anulRedRate": 5.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-03T09:25:00",
                        "clsgDtTm": "2021-12-06T05:00:00"
                    },
                    "untrInvstmtVal": 4230.620000,
                    "anulInvstmtRate": 5.2200,
                    "untrRedVal": 4155.510000,
                    "anulRedRate": 5.3400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-06T09:25:00",
                        "clsgDtTm": "2021-12-07T05:00:00"
                    },
                    "untrInvstmtVal": 4258.510000,
                    "anulInvstmtRate": 5.1800,
                    "untrRedVal": 4182.660000,
                    "anulRedRate": 5.3000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-07T09:25:00",
                        "clsgDtTm": "2021-12-08T05:00:00"
                    },
                    "untrInvstmtVal": 4267.310000,
                    "anulInvstmtRate": 5.1700,
                    "untrRedVal": 4191.260000,
                    "anulRedRate": 5.2900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-08T09:25:00",
                        "clsgDtTm": "2021-12-09T05:00:00"
                    },
                    "untrInvstmtVal": 4295.540000,
                    "anulInvstmtRate": 5.1300,
                    "untrRedVal": 4218.740000,
                    "anulRedRate": 5.2500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-09T09:25:00",
                        "clsgDtTm": "2021-12-10T05:00:00"
                    },
                    "untrInvstmtVal": 4304.430000,
                    "anulInvstmtRate": 5.1200,
                    "untrRedVal": 4227.430000,
                    "anulRedRate": 5.2400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-10T09:25:00",
                        "clsgDtTm": "2021-12-13T05:00:00"
                    },
                    "untrInvstmtVal": 4344.060000,
                    "anulInvstmtRate": 5.0600,
                    "untrRedVal": 4265.970000,
                    "anulRedRate": 5.1800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-13T09:25:00",
                        "clsgDtTm": "2021-12-14T05:00:00"
                    },
                    "untrInvstmtVal": 4352.890000,
                    "anulInvstmtRate": 5.0500,
                    "untrRedVal": 4274.590000,
                    "anulRedRate": 5.1700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-14T09:25:00",
                        "clsgDtTm": "2021-12-15T05:00:00"
                    },
                    "untrInvstmtVal": 4341.910000,
                    "anulInvstmtRate": 5.0700,
                    "untrRedVal": 4263.960000,
                    "anulRedRate": 5.1900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-15T09:25:00",
                        "clsgDtTm": "2021-12-16T05:00:00"
                    },
                    "untrInvstmtVal": 4297.980000,
                    "anulInvstmtRate": 5.1400,
                    "untrRedVal": 4221.300000,
                    "anulRedRate": 5.2600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-16T09:25:00",
                        "clsgDtTm": "2021-12-17T05:00:00"
                    },
                    "untrInvstmtVal": 4261.170000,
                    "anulInvstmtRate": 5.2000,
                    "untrRedVal": 4185.550000,
                    "anulRedRate": 5.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-17T09:25:00",
                        "clsgDtTm": "2021-12-20T05:00:00"
                    },
                    "untrInvstmtVal": 4214.180000,
                    "anulInvstmtRate": 5.2800,
                    "untrRedVal": 4139.930000,
                    "anulRedRate": 5.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-20T09:25:00",
                        "clsgDtTm": "2021-12-21T05:00:00"
                    },
                    "untrInvstmtVal": 4215.980000,
                    "anulInvstmtRate": 5.2800,
                    "untrRedVal": 4141.720000,
                    "anulRedRate": 5.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-21T09:25:00",
                        "clsgDtTm": "2021-12-22T05:00:00"
                    },
                    "untrInvstmtVal": 4217.780000,
                    "anulInvstmtRate": 5.2800,
                    "untrRedVal": 4143.500000,
                    "anulRedRate": 5.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-22T09:25:00",
                        "clsgDtTm": "2021-12-23T05:00:00"
                    },
                    "untrInvstmtVal": 4219.570000,
                    "anulInvstmtRate": 5.2800,
                    "untrRedVal": 4145.280000,
                    "anulRedRate": 5.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-23T09:25:00",
                        "clsgDtTm": "2021-12-27T05:00:00"
                    },
                    "untrInvstmtVal": 4218.770000,
                    "anulInvstmtRate": 5.2900,
                    "untrRedVal": 4144.590000,
                    "anulRedRate": 5.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-27T09:25:00",
                        "clsgDtTm": "2021-12-28T05:00:00"
                    },
                    "untrInvstmtVal": 4188.180000,
                    "anulInvstmtRate": 5.3400,
                    "untrRedVal": 4114.880000,
                    "anulRedRate": 5.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-28T09:25:00",
                        "clsgDtTm": "2021-12-29T05:00:00"
                    },
                    "untrInvstmtVal": 4189.880000,
                    "anulInvstmtRate": 5.3400,
                    "untrRedVal": 4116.570000,
                    "anulRedRate": 5.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-29T09:25:00",
                        "clsgDtTm": "2021-12-30T05:00:00"
                    },
                    "untrInvstmtVal": 4173.050000,
                    "anulInvstmtRate": 5.3700,
                    "untrRedVal": 4100.240000,
                    "anulRedRate": 5.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2021-12-30T09:25:00",
                        "clsgDtTm": "2022-01-03T05:00:00"
                    },
                    "untrInvstmtVal": 4093.310000,
                    "anulInvstmtRate": 5.5100,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-03T09:25:00",
                        "clsgDtTm": "2022-01-04T05:00:00"
                    },
                    "untrInvstmtVal": 4155.300000,
                    "anulInvstmtRate": 5.4100,
                    "untrRedVal": 4083.110000,
                    "anulRedRate": 5.5300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-04T09:25:00",
                        "clsgDtTm": "2022-01-05T05:00:00"
                    },
                    "untrInvstmtVal": 4138.760000,
                    "anulInvstmtRate": 5.4400,
                    "untrRedVal": 4067.050000,
                    "anulRedRate": 5.5600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-05T09:25:00",
                        "clsgDtTm": "2022-01-06T05:00:00"
                    },
                    "untrInvstmtVal": 4098.370000,
                    "anulInvstmtRate": 5.5100,
                    "untrRedVal": 4027.820000,
                    "anulRedRate": 5.6300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-06T09:25:00",
                        "clsgDtTm": "2022-01-07T05:00:00"
                    },
                    "untrInvstmtVal": 4106.030000,
                    "anulInvstmtRate": 5.5000,
                    "untrRedVal": 4035.300000,
                    "anulRedRate": 5.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-07T09:25:00",
                        "clsgDtTm": "2022-01-10T05:00:00"
                    },
                    "untrInvstmtVal": 4050.250000,
                    "anulInvstmtRate": 5.6000,
                    "untrRedVal": 3981.100000,
                    "anulRedRate": 5.7200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-10T09:25:00",
                        "clsgDtTm": "2022-01-11T05:00:00"
                    },
                    "untrInvstmtVal": 4022.890000,
                    "anulInvstmtRate": 5.6500,
                    "untrRedVal": 3954.520000,
                    "anulRedRate": 5.7700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-11T09:25:00",
                        "clsgDtTm": "2022-01-12T05:00:00"
                    },
                    "untrInvstmtVal": 3994.080000,
                    "anulInvstmtRate": 5.7100,
                    "untrRedVal": 3926.570000,
                    "anulRedRate": 5.8300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-12T09:25:00",
                        "clsgDtTm": "2022-01-13T05:00:00"
                    },
                    "untrInvstmtVal": 3995.900000,
                    "anulInvstmtRate": 5.7100,
                    "untrRedVal": 3928.380000,
                    "anulRedRate": 5.8300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-13T09:25:00",
                        "clsgDtTm": "2022-01-14T05:00:00"
                    },
                    "untrInvstmtVal": 4020.650000,
                    "anulInvstmtRate": 5.6700,
                    "untrRedVal": 3952.490000,
                    "anulRedRate": 5.7900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-14T09:25:00",
                        "clsgDtTm": "2022-01-17T05:00:00"
                    },
                    "untrInvstmtVal": 4029.400000,
                    "anulInvstmtRate": 5.6600,
                    "untrRedVal": 3961.050000,
                    "anulRedRate": 5.7800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-17T09:25:00",
                        "clsgDtTm": "2022-01-18T05:00:00"
                    },
                    "untrInvstmtVal": 3985.090000,
                    "anulInvstmtRate": 5.7400,
                    "untrRedVal": 3917.980000,
                    "anulRedRate": 5.8600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-18T09:25:00",
                        "clsgDtTm": "2022-01-19T05:00:00"
                    },
                    "untrInvstmtVal": 3986.550000,
                    "anulInvstmtRate": 5.7400,
                    "untrRedVal": 3919.430000,
                    "anulRedRate": 5.8600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-19T09:25:00",
                        "clsgDtTm": "2022-01-20T05:00:00"
                    },
                    "untrInvstmtVal": 4028.020000,
                    "anulInvstmtRate": 5.6700,
                    "untrRedVal": 3959.810000,
                    "anulRedRate": 5.7900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-20T09:25:00",
                        "clsgDtTm": "2022-01-21T05:00:00"
                    },
                    "untrInvstmtVal": 4052.650000,
                    "anulInvstmtRate": 5.6300,
                    "untrRedVal": 3983.800000,
                    "anulRedRate": 5.7500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-21T09:25:00",
                        "clsgDtTm": "2022-01-24T05:00:00"
                    },
                    "untrInvstmtVal": 4032.120000,
                    "anulInvstmtRate": 5.6700,
                    "untrRedVal": 3963.880000,
                    "anulRedRate": 5.7900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-24T09:25:00",
                        "clsgDtTm": "2022-01-25T05:00:00"
                    },
                    "untrInvstmtVal": 4050.950000,
                    "anulInvstmtRate": 5.6400,
                    "untrRedVal": 3982.230000,
                    "anulRedRate": 5.7600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-25T09:25:00",
                        "clsgDtTm": "2022-01-26T05:00:00"
                    },
                    "untrInvstmtVal": 4052.420000,
                    "anulInvstmtRate": 5.6400,
                    "untrRedVal": 3983.690000,
                    "anulRedRate": 5.7600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-26T09:25:00",
                        "clsgDtTm": "2022-01-27T05:00:00"
                    },
                    "untrInvstmtVal": 4030.760000,
                    "anulInvstmtRate": 5.6800,
                    "untrRedVal": 3962.660000,
                    "anulRedRate": 5.8000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-27T09:25:00",
                        "clsgDtTm": "2022-01-28T05:00:00"
                    },
                    "untrInvstmtVal": 4051.250000,
                    "anulInvstmtRate": 5.6500,
                    "untrRedVal": 3982.630000,
                    "anulRedRate": 5.7700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-28T09:25:00",
                        "clsgDtTm": "2022-01-31T05:00:00"
                    },
                    "untrInvstmtVal": 4060.090000,
                    "anulInvstmtRate": 5.6400,
                    "untrRedVal": 3991.280000,
                    "anulRedRate": 5.7600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-01-31T09:25:00",
                        "clsgDtTm": "2022-02-01T05:00:00"
                    },
                    "untrInvstmtVal": 4061.690000,
                    "anulInvstmtRate": 5.6400,
                    "untrRedVal": 3992.870000,
                    "anulRedRate": 5.7600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-01T09:25:00",
                        "clsgDtTm": "2022-02-02T05:00:00"
                    },
                    "untrInvstmtVal": 4080.800000,
                    "anulInvstmtRate": 5.6100,
                    "untrRedVal": 4011.500000,
                    "anulRedRate": 5.7300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-02T09:25:00",
                        "clsgDtTm": "2022-02-03T05:00:00"
                    },
                    "untrInvstmtVal": 4105.940000,
                    "anulInvstmtRate": 5.5700,
                    "untrRedVal": 4035.990000,
                    "anulRedRate": 5.6900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-03T09:25:00",
                        "clsgDtTm": "2022-02-04T05:00:00"
                    },
                    "untrInvstmtVal": 4161.320000,
                    "anulInvstmtRate": 5.4800,
                    "untrRedVal": 4089.880000,
                    "anulRedRate": 5.6000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-04T09:25:00",
                        "clsgDtTm": "2022-02-07T05:00:00"
                    },
                    "untrInvstmtVal": 4104.710000,
                    "anulInvstmtRate": 5.5800,
                    "untrRedVal": 4034.870000,
                    "anulRedRate": 5.7000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-07T09:25:00",
                        "clsgDtTm": "2022-02-08T05:00:00"
                    },
                    "untrInvstmtVal": 4141.980000,
                    "anulInvstmtRate": 5.5200,
                    "untrRedVal": 4071.160000,
                    "anulRedRate": 5.6400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-08T09:25:00",
                        "clsgDtTm": "2022-02-09T05:00:00"
                    },
                    "untrInvstmtVal": 4119.760000,
                    "anulInvstmtRate": 5.5600,
                    "untrRedVal": 4049.580000,
                    "anulRedRate": 5.6800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-09T09:25:00",
                        "clsgDtTm": "2022-02-10T05:00:00"
                    },
                    "untrInvstmtVal": 4097.420000,
                    "anulInvstmtRate": 5.6000,
                    "untrRedVal": 4027.880000,
                    "anulRedRate": 5.7200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-10T09:25:00",
                        "clsgDtTm": "2022-02-11T05:00:00"
                    },
                    "untrInvstmtVal": 4069.810000,
                    "anulInvstmtRate": 5.6500,
                    "untrRedVal": 4001.060000,
                    "anulRedRate": 5.7700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-11T09:25:00",
                        "clsgDtTm": "2022-02-14T05:00:00"
                    },
                    "untrInvstmtVal": 4055.450000,
                    "anulInvstmtRate": 5.6800,
                    "untrRedVal": 3987.140000,
                    "anulRedRate": 5.8000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-14T09:25:00",
                        "clsgDtTm": "2022-02-15T05:00:00"
                    },
                    "untrInvstmtVal": 4068.610000,
                    "anulInvstmtRate": 5.6600,
                    "untrRedVal": 3999.980000,
                    "anulRedRate": 5.7800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-15T09:25:00",
                        "clsgDtTm": "2022-02-16T05:00:00"
                    },
                    "untrInvstmtVal": 4082.420000,
                    "anulInvstmtRate": 5.6400,
                    "untrRedVal": 4013.450000,
                    "anulRedRate": 5.7600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-16T09:25:00",
                        "clsgDtTm": "2022-02-17T05:00:00"
                    },
                    "untrInvstmtVal": 4072.970000,
                    "anulInvstmtRate": 5.6600,
                    "untrRedVal": 4004.300000,
                    "anulRedRate": 5.7800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-17T09:25:00",
                        "clsgDtTm": "2022-02-18T05:00:00"
                    },
                    "untrInvstmtVal": 4075.140000,
                    "anulInvstmtRate": 5.6600,
                    "untrRedVal": 4006.460000,
                    "anulRedRate": 5.7800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-18T09:25:00",
                        "clsgDtTm": "2022-02-21T05:00:00"
                    },
                    "untrInvstmtVal": 4068.320000,
                    "anulInvstmtRate": 5.6800,
                    "untrRedVal": 3999.880000,
                    "anulRedRate": 5.8000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-21T09:25:00",
                        "clsgDtTm": "2022-02-22T05:00:00"
                    },
                    "untrInvstmtVal": 4070.500000,
                    "anulInvstmtRate": 5.6800,
                    "untrRedVal": 4002.040000,
                    "anulRedRate": 5.8000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-22T09:25:00",
                        "clsgDtTm": "2022-02-23T05:00:00"
                    },
                    "untrInvstmtVal": 4055.380000,
                    "anulInvstmtRate": 5.7100,
                    "untrRedVal": 3987.380000,
                    "anulRedRate": 5.8300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-23T09:25:00",
                        "clsgDtTm": "2022-02-24T05:00:00"
                    },
                    "untrInvstmtVal": 4063.310000,
                    "anulInvstmtRate": 5.7000,
                    "untrRedVal": 3995.130000,
                    "anulRedRate": 5.8200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-24T09:25:00",
                        "clsgDtTm": "2022-02-25T05:00:00"
                    },
                    "untrInvstmtVal": 4043.260000,
                    "anulInvstmtRate": 5.7400,
                    "untrRedVal": 3975.680000,
                    "anulRedRate": 5.8600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-02-25T09:25:00",
                        "clsgDtTm": "2022-03-02T05:00:00"
                    },
                    "untrInvstmtVal": 4056.650000,
                    "anulInvstmtRate": 5.7300,
                    "untrRedVal": 3988.800000,
                    "anulRedRate": 5.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-02T09:25:00",
                        "clsgDtTm": "2022-03-03T05:00:00"
                    },
                    "untrInvstmtVal": 4058.900000,
                    "anulInvstmtRate": 5.7300,
                    "untrRedVal": 3991.030000,
                    "anulRedRate": 5.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-03T09:25:00",
                        "clsgDtTm": "2022-03-04T05:00:00"
                    },
                    "untrInvstmtVal": 4049.710000,
                    "anulInvstmtRate": 5.7500,
                    "untrRedVal": 3982.130000,
                    "anulRedRate": 5.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-04T09:25:00",
                        "clsgDtTm": "2022-03-07T05:00:00"
                    },
                    "untrInvstmtVal": 4048.960000,
                    "anulInvstmtRate": 5.7600,
                    "untrRedVal": 3981.470000,
                    "anulRedRate": 5.8800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-07T09:25:00",
                        "clsgDtTm": "2022-03-08T05:00:00"
                    },
                    "untrInvstmtVal": 4017.230000,
                    "anulInvstmtRate": 5.8200,
                    "untrRedVal": 3950.640000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-08T09:25:00",
                        "clsgDtTm": "2022-03-09T05:00:00"
                    },
                    "untrInvstmtVal": 3985.940000,
                    "anulInvstmtRate": 5.8800,
                    "untrRedVal": 3920.240000,
                    "anulRedRate": 6.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-09T09:25:00",
                        "clsgDtTm": "2022-03-10T05:00:00"
                    },
                    "untrInvstmtVal": 4010.490000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 3944.160000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-10T09:25:00",
                        "clsgDtTm": "2022-03-11T05:00:00"
                    },
                    "untrInvstmtVal": 3990.420000,
                    "anulInvstmtRate": 5.8800,
                    "untrRedVal": 3924.670000,
                    "anulRedRate": 6.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-11T09:25:00",
                        "clsgDtTm": "2022-03-14T05:00:00"
                    },
                    "untrInvstmtVal": 4014.740000,
                    "anulInvstmtRate": 5.8500,
                    "untrRedVal": 3948.440000,
                    "anulRedRate": 5.9700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-14T09:25:00",
                        "clsgDtTm": "2022-03-15T05:00:00"
                    },
                    "untrInvstmtVal": 3994.780000,
                    "anulInvstmtRate": 5.8900,
                    "untrRedVal": 3929.060000,
                    "anulRedRate": 6.0100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-15T09:25:00",
                        "clsgDtTm": "2022-03-16T05:00:00"
                    },
                    "untrInvstmtVal": 3980.290000,
                    "anulInvstmtRate": 5.9200,
                    "untrRedVal": 3915.000000,
                    "anulRedRate": 6.0400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-16T09:25:00",
                        "clsgDtTm": "2022-03-17T05:00:00"
                    },
                    "untrInvstmtVal": 4010.150000,
                    "anulInvstmtRate": 5.8700,
                    "untrRedVal": 3944.090000,
                    "anulRedRate": 5.9900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-17T09:25:00",
                        "clsgDtTm": "2022-03-18T05:00:00"
                    },
                    "untrInvstmtVal": 4001.130000,
                    "anulInvstmtRate": 5.8900,
                    "untrRedVal": 3935.350000,
                    "anulRedRate": 6.0100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-18T09:25:00",
                        "clsgDtTm": "2022-03-21T05:00:00"
                    },
                    "untrInvstmtVal": 4033.630000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 3967.040000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-21T09:25:00",
                        "clsgDtTm": "2022-03-22T05:00:00"
                    },
                    "untrInvstmtVal": 4052.690000,
                    "anulInvstmtRate": 5.8100,
                    "untrRedVal": 3985.630000,
                    "anulRedRate": 5.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-22T09:25:00",
                        "clsgDtTm": "2022-03-23T05:00:00"
                    },
                    "untrInvstmtVal": 4043.510000,
                    "anulInvstmtRate": 5.8300,
                    "untrRedVal": 3976.740000,
                    "anulRedRate": 5.9500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-23T09:25:00",
                        "clsgDtTm": "2022-03-24T05:00:00"
                    },
                    "untrInvstmtVal": 4091.200000,
                    "anulInvstmtRate": 5.7500,
                    "untrRedVal": 4023.180000,
                    "anulRedRate": 5.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-24T09:25:00",
                        "clsgDtTm": "2022-03-25T05:00:00"
                    },
                    "untrInvstmtVal": 4151.490000,
                    "anulInvstmtRate": 5.6500,
                    "untrRedVal": 4081.870000,
                    "anulRedRate": 5.7700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-25T09:25:00",
                        "clsgDtTm": "2022-03-28T05:00:00"
                    },
                    "untrInvstmtVal": 4239.910000,
                    "anulInvstmtRate": 5.5100,
                    "untrRedVal": 4167.950000,
                    "anulRedRate": 5.6300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-28T09:25:00",
                        "clsgDtTm": "2022-03-29T05:00:00"
                    },
                    "untrInvstmtVal": 4248.540000,
                    "anulInvstmtRate": 5.5100,
                    "untrRedVal": 4176.450000,
                    "anulRedRate": 5.6300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-29T09:25:00",
                        "clsgDtTm": "2022-03-30T05:00:00"
                    },
                    "untrInvstmtVal": 4220.900000,
                    "anulInvstmtRate": 5.5600,
                    "untrRedVal": 4149.610000,
                    "anulRedRate": 5.6800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-30T09:25:00",
                        "clsgDtTm": "2022-03-31T05:00:00"
                    },
                    "untrInvstmtVal": 4205.520000,
                    "anulInvstmtRate": 5.5900,
                    "untrRedVal": 4134.710000,
                    "anulRedRate": 5.7100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-03-31T09:25:00",
                        "clsgDtTm": "2022-04-01T05:00:00"
                    },
                    "untrInvstmtVal": 4202.180000,
                    "anulInvstmtRate": 5.6000,
                    "untrRedVal": 4131.500000,
                    "anulRedRate": 5.7200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-01T09:25:00",
                        "clsgDtTm": "2022-04-04T05:00:00"
                    },
                    "untrInvstmtVal": 4244.390000,
                    "anulInvstmtRate": 5.5400,
                    "untrRedVal": 4172.640000,
                    "anulRedRate": 5.6600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-04T09:25:00",
                        "clsgDtTm": "2022-04-05T05:00:00"
                    },
                    "untrInvstmtVal": 4283.680000,
                    "anulInvstmtRate": 5.4800,
                    "untrRedVal": 4210.900000,
                    "anulRedRate": 5.6000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-05T09:25:00",
                        "clsgDtTm": "2022-04-06T05:00:00"
                    },
                    "untrInvstmtVal": 4249.690000,
                    "anulInvstmtRate": 5.5400,
                    "untrRedVal": 4177.890000,
                    "anulRedRate": 5.6600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-06T09:25:00",
                        "clsgDtTm": "2022-04-07T05:00:00"
                    },
                    "untrInvstmtVal": 4228.180000,
                    "anulInvstmtRate": 5.5800,
                    "untrRedVal": 4157.010000,
                    "anulRedRate": 5.7000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-07T09:25:00",
                        "clsgDtTm": "2022-04-08T05:00:00"
                    },
                    "untrInvstmtVal": 4242.890000,
                    "anulInvstmtRate": 5.5600,
                    "untrRedVal": 4171.360000,
                    "anulRedRate": 5.6800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-08T09:25:00",
                        "clsgDtTm": "2022-04-11T05:00:00"
                    },
                    "untrInvstmtVal": 4255.380000,
                    "anulInvstmtRate": 5.5700,
                    "untrRedVal": 4183.730000,
                    "anulRedRate": 5.6900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-11T09:25:00",
                        "clsgDtTm": "2022-04-12T05:00:00"
                    },
                    "untrInvstmtVal": 4198.630000,
                    "anulInvstmtRate": 5.6700,
                    "untrRedVal": 4128.570000,
                    "anulRedRate": 5.7900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-12T09:25:00",
                        "clsgDtTm": "2022-04-13T05:00:00"
                    },
                    "untrInvstmtVal": 4160.610000,
                    "anulInvstmtRate": 5.7400,
                    "untrRedVal": 4091.630000,
                    "anulRedRate": 5.8600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-13T09:25:00",
                        "clsgDtTm": "2022-04-14T05:00:00"
                    },
                    "untrInvstmtVal": 4187.110000,
                    "anulInvstmtRate": 5.7000,
                    "untrRedVal": 4117.470000,
                    "anulRedRate": 5.8200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-14T09:25:00",
                        "clsgDtTm": "2022-04-18T05:00:00"
                    },
                    "untrInvstmtVal": 4175.770000,
                    "anulInvstmtRate": 5.7300,
                    "untrRedVal": 4106.520000,
                    "anulRedRate": 5.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-18T09:25:00",
                        "clsgDtTm": "2022-04-19T05:00:00"
                    },
                    "untrInvstmtVal": 4183.600000,
                    "anulInvstmtRate": 5.7200,
                    "untrRedVal": 4114.180000,
                    "anulRedRate": 5.8400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-19T09:25:00",
                        "clsgDtTm": "2022-04-20T05:00:00"
                    },
                    "untrInvstmtVal": 4185.580000,
                    "anulInvstmtRate": 5.7200,
                    "untrRedVal": 4116.150000,
                    "anulRedRate": 5.8400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-20T09:25:00",
                        "clsgDtTm": "2022-04-22T05:00:00"
                    },
                    "untrInvstmtVal": 4188.620000,
                    "anulInvstmtRate": 5.7200,
                    "untrRedVal": 4119.150000,
                    "anulRedRate": 5.8400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-22T09:25:00",
                        "clsgDtTm": "2022-04-25T05:00:00"
                    },
                    "untrInvstmtVal": 4175.160000,
                    "anulInvstmtRate": 5.7500,
                    "untrRedVal": 4106.120000,
                    "anulRedRate": 5.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-25T09:25:00",
                        "clsgDtTm": "2022-04-26T05:00:00"
                    },
                    "untrInvstmtVal": 4159.700000,
                    "anulInvstmtRate": 5.7800,
                    "untrRedVal": 4091.110000,
                    "anulRedRate": 5.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-26T09:25:00",
                        "clsgDtTm": "2022-04-27T05:00:00"
                    },
                    "untrInvstmtVal": 4155.890000,
                    "anulInvstmtRate": 5.7900,
                    "untrRedVal": 4087.440000,
                    "anulRedRate": 5.9100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-27T09:25:00",
                        "clsgDtTm": "2022-04-28T05:00:00"
                    },
                    "untrInvstmtVal": 4163.660000,
                    "anulInvstmtRate": 5.7800,
                    "untrRedVal": 4095.040000,
                    "anulRedRate": 5.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-28T09:25:00",
                        "clsgDtTm": "2022-04-29T05:00:00"
                    },
                    "untrInvstmtVal": 4157.530000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4089.150000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-04-29T09:25:00",
                        "clsgDtTm": "2022-05-02T05:00:00"
                    },
                    "untrInvstmtVal": 4191.420000,
                    "anulInvstmtRate": 5.7500,
                    "untrRedVal": 4122.200000,
                    "anulRedRate": 5.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-02T09:25:00",
                        "clsgDtTm": "2022-05-03T05:00:00"
                    },
                    "untrInvstmtVal": 4158.810000,
                    "anulInvstmtRate": 5.8100,
                    "untrRedVal": 4090.500000,
                    "anulRedRate": 5.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-03T09:25:00",
                        "clsgDtTm": "2022-05-04T05:00:00"
                    },
                    "untrInvstmtVal": 4166.810000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4098.340000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-04T09:25:00",
                        "clsgDtTm": "2022-05-05T05:00:00"
                    },
                    "untrInvstmtVal": 4163.270000,
                    "anulInvstmtRate": 5.8100,
                    "untrRedVal": 4094.930000,
                    "anulRedRate": 5.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-05T09:25:00",
                        "clsgDtTm": "2022-05-06T05:00:00"
                    },
                    "untrInvstmtVal": 4188.700000,
                    "anulInvstmtRate": 5.7700,
                    "untrRedVal": 4119.720000,
                    "anulRedRate": 5.8900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-06T09:25:00",
                        "clsgDtTm": "2022-05-09T05:00:00"
                    },
                    "untrInvstmtVal": 4176.120000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4107.540000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-09T09:25:00",
                        "clsgDtTm": "2022-05-10T05:00:00"
                    },
                    "untrInvstmtVal": 4172.570000,
                    "anulInvstmtRate": 5.8100,
                    "untrRedVal": 4104.130000,
                    "anulRedRate": 5.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-10T09:25:00",
                        "clsgDtTm": "2022-05-11T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4083.950000,
                    "anulRedRate": 5.9700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-11T09:25:00",
                        "clsgDtTm": "2022-05-12T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4062.770000,
                    "anulRedRate": 6.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-12T09:25:00",
                        "clsgDtTm": "2022-05-13T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-13T09:25:00",
                        "clsgDtTm": "2022-05-16T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-16T09:25:00",
                        "clsgDtTm": "2022-05-17T05:00:00"
                    },
                    "untrInvstmtVal": 4102.200000,
                    "anulInvstmtRate": 5.7600,
                    "untrRedVal": 4032.790000,
                    "anulRedRate": 5.8800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-17T09:25:00",
                        "clsgDtTm": "2022-05-18T05:00:00"
                    },
                    "untrInvstmtVal": 4109.590000,
                    "anulInvstmtRate": 5.7500,
                    "untrRedVal": 4040.010000,
                    "anulRedRate": 5.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-18T09:25:00",
                        "clsgDtTm": "2022-05-19T05:00:00"
                    },
                    "untrInvstmtVal": 4099.380000,
                    "anulInvstmtRate": 5.7700,
                    "untrRedVal": 4030.110000,
                    "anulRedRate": 5.8900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-19T09:25:00",
                        "clsgDtTm": "2022-05-20T05:00:00"
                    },
                    "untrInvstmtVal": 4118.520000,
                    "anulInvstmtRate": 5.7400,
                    "untrRedVal": 4048.770000,
                    "anulRedRate": 5.8600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-20T09:25:00",
                        "clsgDtTm": "2022-05-23T05:00:00"
                    },
                    "untrInvstmtVal": 4127.160000,
                    "anulInvstmtRate": 5.7300,
                    "untrRedVal": 4057.220000,
                    "anulRedRate": 5.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-23T09:25:00",
                        "clsgDtTm": "2022-05-24T05:00:00"
                    },
                    "untrInvstmtVal": 4134.600000,
                    "anulInvstmtRate": 5.7200,
                    "untrRedVal": 4064.490000,
                    "anulRedRate": 5.8400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-24T09:25:00",
                        "clsgDtTm": "2022-05-25T05:00:00"
                    },
                    "untrInvstmtVal": 4083.360000,
                    "anulInvstmtRate": 5.8100,
                    "untrRedVal": 4014.670000,
                    "anulRedRate": 5.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-25T09:25:00",
                        "clsgDtTm": "2022-05-26T05:00:00"
                    },
                    "untrInvstmtVal": 4063.640000,
                    "anulInvstmtRate": 5.8500,
                    "untrRedVal": 3995.530000,
                    "anulRedRate": 5.9700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-26T09:25:00",
                        "clsgDtTm": "2022-05-27T05:00:00"
                    },
                    "untrInvstmtVal": 4111.780000,
                    "anulInvstmtRate": 5.7700,
                    "untrRedVal": 4042.410000,
                    "anulRedRate": 5.8900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-27T09:25:00",
                        "clsgDtTm": "2022-05-30T05:00:00"
                    },
                    "untrInvstmtVal": 4120.910000,
                    "anulInvstmtRate": 5.7600,
                    "untrRedVal": 4051.350000,
                    "anulRedRate": 5.8800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-30T09:25:00",
                        "clsgDtTm": "2022-05-31T05:00:00"
                    },
                    "untrInvstmtVal": 4087.580000,
                    "anulInvstmtRate": 5.8200,
                    "untrRedVal": 4018.950000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-05-31T09:25:00",
                        "clsgDtTm": "2022-06-01T05:00:00"
                    },
                    "untrInvstmtVal": 4089.280000,
                    "anulInvstmtRate": 5.8200,
                    "untrRedVal": 4020.630000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-01T09:25:00",
                        "clsgDtTm": "2022-06-02T05:00:00"
                    },
                    "untrInvstmtVal": 4096.780000,
                    "anulInvstmtRate": 5.8100,
                    "untrRedVal": 4027.970000,
                    "anulRedRate": 5.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-02T09:25:00",
                        "clsgDtTm": "2022-06-03T05:00:00"
                    },
                    "untrInvstmtVal": 4075.320000,
                    "anulInvstmtRate": 5.8500,
                    "untrRedVal": 4007.130000,
                    "anulRedRate": 5.9700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-03T09:25:00",
                        "clsgDtTm": "2022-06-06T05:00:00"
                    },
                    "untrInvstmtVal": 4090.120000,
                    "anulInvstmtRate": 5.8300,
                    "untrRedVal": 4021.580000,
                    "anulRedRate": 5.9500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-06T09:25:00",
                        "clsgDtTm": "2022-06-07T05:00:00"
                    },
                    "untrInvstmtVal": 4086.030000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 4017.630000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-07T09:25:00",
                        "clsgDtTm": "2022-06-08T05:00:00"
                    },
                    "untrInvstmtVal": 4070.450000,
                    "anulInvstmtRate": 5.8700,
                    "untrRedVal": 4002.500000,
                    "anulRedRate": 5.9900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-08T09:25:00",
                        "clsgDtTm": "2022-06-09T05:00:00"
                    },
                    "untrInvstmtVal": 4083.650000,
                    "anulInvstmtRate": 5.8500,
                    "untrRedVal": 4015.390000,
                    "anulRedRate": 5.9700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-09T09:25:00",
                        "clsgDtTm": "2022-06-10T05:00:00"
                    },
                    "untrInvstmtVal": 4098.600000,
                    "anulInvstmtRate": 5.8200,
                    "untrRedVal": 4029.930000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-10T09:25:00",
                        "clsgDtTm": "2022-06-13T05:00:00"
                    },
                    "untrInvstmtVal": 4095.590000,
                    "anulInvstmtRate": 5.8300,
                    "untrRedVal": 4027.040000,
                    "anulRedRate": 5.9500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-13T09:25:00",
                        "clsgDtTm": "2022-06-14T05:00:00"
                    },
                    "untrInvstmtVal": 4079.810000,
                    "anulInvstmtRate": 5.8600,
                    "untrRedVal": 4011.730000,
                    "anulRedRate": 5.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-14T09:25:00",
                        "clsgDtTm": "2022-06-15T05:00:00"
                    },
                    "untrInvstmtVal": 4047.070000,
                    "anulInvstmtRate": 5.9200,
                    "untrRedVal": 3979.900000,
                    "anulRedRate": 6.0400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-15T09:25:00",
                        "clsgDtTm": "2022-06-17T05:00:00"
                    },
                    "untrInvstmtVal": 4136.340000,
                    "anulInvstmtRate": 5.7700,
                    "untrRedVal": 4066.810000,
                    "anulRedRate": 5.8900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-17T09:25:00",
                        "clsgDtTm": "2022-06-20T05:00:00"
                    },
                    "untrInvstmtVal": 4110.680000,
                    "anulInvstmtRate": 5.8200,
                    "untrRedVal": 4041.900000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-20T09:25:00",
                        "clsgDtTm": "2022-06-21T05:00:00"
                    },
                    "untrInvstmtVal": 4118.300000,
                    "anulInvstmtRate": 5.8100,
                    "untrRedVal": 4049.340000,
                    "anulRedRate": 5.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-21T09:25:00",
                        "clsgDtTm": "2022-06-22T05:00:00"
                    },
                    "untrInvstmtVal": 4079.640000,
                    "anulInvstmtRate": 5.8800,
                    "untrRedVal": 4011.760000,
                    "anulRedRate": 6.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-22T09:25:00",
                        "clsgDtTm": "2022-06-23T05:00:00"
                    },
                    "untrInvstmtVal": 4075.700000,
                    "anulInvstmtRate": 5.8900,
                    "untrRedVal": 4007.960000,
                    "anulRedRate": 6.0100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-23T09:25:00",
                        "clsgDtTm": "2022-06-24T05:00:00"
                    },
                    "untrInvstmtVal": 4071.780000,
                    "anulInvstmtRate": 5.9000,
                    "untrRedVal": 4004.190000,
                    "anulRedRate": 6.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-24T09:25:00",
                        "clsgDtTm": "2022-06-27T05:00:00"
                    },
                    "untrInvstmtVal": 4058.220000,
                    "anulInvstmtRate": 5.9300,
                    "untrRedVal": 3991.040000,
                    "anulRedRate": 6.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-27T09:25:00",
                        "clsgDtTm": "2022-06-28T05:00:00"
                    },
                    "untrInvstmtVal": 4061.590000,
                    "anulInvstmtRate": 5.9300,
                    "untrRedVal": 3994.370000,
                    "anulRedRate": 6.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-28T09:25:00",
                        "clsgDtTm": "2022-06-29T05:00:00"
                    },
                    "untrInvstmtVal": 4029.660000,
                    "anulInvstmtRate": 5.9900,
                    "untrRedVal": 3963.330000,
                    "anulRedRate": 6.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-29T09:25:00",
                        "clsgDtTm": "2022-06-30T05:00:00"
                    },
                    "untrInvstmtVal": 4020.380000,
                    "anulInvstmtRate": 6.0100,
                    "untrRedVal": 3954.340000,
                    "anulRedRate": 6.1300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-06-30T09:25:00",
                        "clsgDtTm": "2022-07-01T05:00:00"
                    },
                    "untrInvstmtVal": 4027.880000,
                    "anulInvstmtRate": 6.0000,
                    "untrRedVal": 3961.670000,
                    "anulRedRate": 6.1200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-01T09:25:00",
                        "clsgDtTm": "2022-07-04T05:00:00"
                    },
                    "untrInvstmtVal": 4026.150000,
                    "anulInvstmtRate": 6.0100,
                    "untrRedVal": 3960.050000,
                    "anulRedRate": 6.1300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-04T09:25:00",
                        "clsgDtTm": "2022-07-05T05:00:00"
                    },
                    "untrInvstmtVal": 4011.360000,
                    "anulInvstmtRate": 6.0400,
                    "untrRedVal": 3945.690000,
                    "anulRedRate": 6.1600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-05T09:25:00",
                        "clsgDtTm": "2022-07-06T05:00:00"
                    },
                    "untrInvstmtVal": 3985.680000,
                    "anulInvstmtRate": 6.0900,
                    "untrRedVal": 3920.730000,
                    "anulRedRate": 6.2100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-06T09:25:00",
                        "clsgDtTm": "2022-07-07T05:00:00"
                    },
                    "untrInvstmtVal": 3982.110000,
                    "anulInvstmtRate": 6.1000,
                    "untrRedVal": 3917.280000,
                    "anulRedRate": 6.2200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-07T09:25:00",
                        "clsgDtTm": "2022-07-08T05:00:00"
                    },
                    "untrInvstmtVal": 3967.630000,
                    "anulInvstmtRate": 6.1300,
                    "untrRedVal": 3903.240000,
                    "anulRedRate": 6.2500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-08T09:25:00",
                        "clsgDtTm": "2022-07-11T05:00:00"
                    },
                    "untrInvstmtVal": 3936.990000,
                    "anulInvstmtRate": 6.1900,
                    "untrRedVal": 3873.430000,
                    "anulRedRate": 6.3100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-11T09:25:00",
                        "clsgDtTm": "2022-07-12T05:00:00"
                    },
                    "untrInvstmtVal": 3880.470000,
                    "anulInvstmtRate": 6.3000,
                    "untrRedVal": 3818.440000,
                    "anulRedRate": 6.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-12T09:25:00",
                        "clsgDtTm": "2022-07-13T05:00:00"
                    },
                    "untrInvstmtVal": 3871.820000,
                    "anulInvstmtRate": 6.3200,
                    "untrRedVal": 3810.050000,
                    "anulRedRate": 6.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-13T09:25:00",
                        "clsgDtTm": "2022-07-14T05:00:00"
                    },
                    "untrInvstmtVal": 3889.330000,
                    "anulInvstmtRate": 6.2900,
                    "untrRedVal": 3827.130000,
                    "anulRedRate": 6.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-14T09:25:00",
                        "clsgDtTm": "2022-07-15T05:00:00"
                    },
                    "untrInvstmtVal": 3912.240000,
                    "anulInvstmtRate": 6.2500,
                    "untrRedVal": 3849.480000,
                    "anulRedRate": 6.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-15T09:25:00",
                        "clsgDtTm": "2022-07-18T05:00:00"
                    },
                    "untrInvstmtVal": 3953.540000,
                    "anulInvstmtRate": 6.1700,
                    "untrRedVal": 3889.700000,
                    "anulRedRate": 6.2900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-18T09:25:00",
                        "clsgDtTm": "2022-07-19T05:00:00"
                    },
                    "untrInvstmtVal": 3937.560000,
                    "anulInvstmtRate": 6.2000,
                    "untrRedVal": 3874.150000,
                    "anulRedRate": 6.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-19T09:25:00",
                        "clsgDtTm": "2022-07-20T05:00:00"
                    },
                    "untrInvstmtVal": 3863.900000,
                    "anulInvstmtRate": 6.3400,
                    "untrRedVal": 3802.450000,
                    "anulRedRate": 6.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-20T09:25:00",
                        "clsgDtTm": "2022-07-21T05:00:00"
                    },
                    "untrInvstmtVal": 3890.140000,
                    "anulInvstmtRate": 6.2900,
                    "untrRedVal": 3828.020000,
                    "anulRedRate": 6.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-21T09:25:00",
                        "clsgDtTm": "2022-07-22T05:00:00"
                    },
                    "untrInvstmtVal": 3900.800000,
                    "anulInvstmtRate": 6.2700,
                    "untrRedVal": 3838.420000,
                    "anulRedRate": 6.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-22T09:25:00",
                        "clsgDtTm": "2022-07-25T05:00:00"
                    },
                    "untrInvstmtVal": 3899.360000,
                    "anulInvstmtRate": 6.2700,
                    "untrRedVal": 3837.020000,
                    "anulRedRate": 6.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-25T09:25:00",
                        "clsgDtTm": "2022-07-26T05:00:00"
                    },
                    "untrInvstmtVal": 3925.970000,
                    "anulInvstmtRate": 6.2200,
                    "untrRedVal": 3862.950000,
                    "anulRedRate": 6.3400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-26T09:25:00",
                        "clsgDtTm": "2022-07-27T05:00:00"
                    },
                    "untrInvstmtVal": 3889.150000,
                    "anulInvstmtRate": 6.2900,
                    "untrRedVal": 3827.110000,
                    "anulRedRate": 6.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-27T09:25:00",
                        "clsgDtTm": "2022-07-28T05:00:00"
                    },
                    "untrInvstmtVal": 3909.850000,
                    "anulInvstmtRate": 6.2500,
                    "untrRedVal": 3847.280000,
                    "anulRedRate": 6.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-28T09:25:00",
                        "clsgDtTm": "2022-07-29T05:00:00"
                    },
                    "untrInvstmtVal": 3915.240000,
                    "anulInvstmtRate": 6.2400,
                    "untrRedVal": 3852.550000,
                    "anulRedRate": 6.3600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-07-29T09:25:00",
                        "clsgDtTm": "2022-08-01T05:00:00"
                    },
                    "untrInvstmtVal": 3913.670000,
                    "anulInvstmtRate": 6.2400,
                    "untrRedVal": 3851.030000,
                    "anulRedRate": 6.3600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-01T09:25:00",
                        "clsgDtTm": "2022-08-02T05:00:00"
                    },
                    "untrInvstmtVal": 3935.030000,
                    "anulInvstmtRate": 6.2000,
                    "untrRedVal": 3871.840000,
                    "anulRedRate": 6.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-02T09:25:00",
                        "clsgDtTm": "2022-08-03T05:00:00"
                    },
                    "untrInvstmtVal": 3903.330000,
                    "anulInvstmtRate": 6.2600,
                    "untrRedVal": 3840.990000,
                    "anulRedRate": 6.3800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-03T09:25:00",
                        "clsgDtTm": "2022-08-04T05:00:00"
                    },
                    "untrInvstmtVal": 3919.280000,
                    "anulInvstmtRate": 6.2300,
                    "untrRedVal": 3856.540000,
                    "anulRedRate": 6.3500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-04T09:25:00",
                        "clsgDtTm": "2022-08-05T05:00:00"
                    },
                    "untrInvstmtVal": 4027.720000,
                    "anulInvstmtRate": 6.0300,
                    "untrRedVal": 3962.140000,
                    "anulRedRate": 6.1500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-05T09:25:00",
                        "clsgDtTm": "2022-08-08T05:00:00"
                    },
                    "untrInvstmtVal": 4037.180000,
                    "anulInvstmtRate": 6.0100,
                    "untrRedVal": 3971.340000,
                    "anulRedRate": 6.1300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-08T09:25:00",
                        "clsgDtTm": "2022-08-09T05:00:00"
                    },
                    "untrInvstmtVal": 4110.590000,
                    "anulInvstmtRate": 5.8800,
                    "untrRedVal": 4042.810000,
                    "anulRedRate": 6.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-09T09:25:00",
                        "clsgDtTm": "2022-08-10T05:00:00"
                    },
                    "untrInvstmtVal": 4081.500000,
                    "anulInvstmtRate": 5.9300,
                    "untrRedVal": 4014.510000,
                    "anulRedRate": 6.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-10T09:25:00",
                        "clsgDtTm": "2022-08-11T05:00:00"
                    },
                    "untrInvstmtVal": 4064.620000,
                    "anulInvstmtRate": 5.9600,
                    "untrRedVal": 3998.100000,
                    "anulRedRate": 6.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-11T09:25:00",
                        "clsgDtTm": "2022-08-12T05:00:00"
                    },
                    "untrInvstmtVal": 4070.280000,
                    "anulInvstmtRate": 5.9500,
                    "untrRedVal": 4003.630000,
                    "anulRedRate": 6.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-12T09:25:00",
                        "clsgDtTm": "2022-08-15T05:00:00"
                    },
                    "untrInvstmtVal": 4096.820000,
                    "anulInvstmtRate": 5.9000,
                    "untrRedVal": 4029.460000,
                    "anulRedRate": 6.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-15T09:25:00",
                        "clsgDtTm": "2022-08-16T05:00:00"
                    },
                    "untrInvstmtVal": 4184.250000,
                    "anulInvstmtRate": 5.7500,
                    "untrRedVal": 4114.570000,
                    "anulRedRate": 5.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-16T09:25:00",
                        "clsgDtTm": "2022-08-17T05:00:00"
                    },
                    "untrInvstmtVal": 4138.210000,
                    "anulInvstmtRate": 5.8300,
                    "untrRedVal": 4069.790000,
                    "anulRedRate": 5.9500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-17T09:25:00",
                        "clsgDtTm": "2022-08-18T05:00:00"
                    },
                    "untrInvstmtVal": 4115.820000,
                    "anulInvstmtRate": 5.8700,
                    "untrRedVal": 4048.030000,
                    "anulRedRate": 5.9900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-18T09:25:00",
                        "clsgDtTm": "2022-08-19T05:00:00"
                    },
                    "untrInvstmtVal": 4133.680000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 4065.440000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-19T09:25:00",
                        "clsgDtTm": "2022-08-22T05:00:00"
                    },
                    "untrInvstmtVal": 4099.350000,
                    "anulInvstmtRate": 5.9000,
                    "untrRedVal": 4032.040000,
                    "anulRedRate": 6.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-22T09:25:00",
                        "clsgDtTm": "2022-08-23T05:00:00"
                    },
                    "untrInvstmtVal": 4099.980000,
                    "anulInvstmtRate": 5.9000,
                    "untrRedVal": 4032.670000,
                    "anulRedRate": 6.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-23T09:25:00",
                        "clsgDtTm": "2022-08-24T05:00:00"
                    },
                    "untrInvstmtVal": 4117.710000,
                    "anulInvstmtRate": 5.8700,
                    "untrRedVal": 4049.960000,
                    "anulRedRate": 5.9900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-24T09:25:00",
                        "clsgDtTm": "2022-08-25T05:00:00"
                    },
                    "untrInvstmtVal": 4118.340000,
                    "anulInvstmtRate": 5.8700,
                    "untrRedVal": 4050.600000,
                    "anulRedRate": 5.9900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-25T09:25:00",
                        "clsgDtTm": "2022-08-26T05:00:00"
                    },
                    "untrInvstmtVal": 4100.400000,
                    "anulInvstmtRate": 5.9000,
                    "untrRedVal": 4033.150000,
                    "anulRedRate": 6.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-26T09:25:00",
                        "clsgDtTm": "2022-08-29T05:00:00"
                    },
                    "untrInvstmtVal": 4083.040000,
                    "anulInvstmtRate": 5.9300,
                    "untrRedVal": 4016.270000,
                    "anulRedRate": 6.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-29T09:25:00",
                        "clsgDtTm": "2022-08-30T05:00:00"
                    },
                    "untrInvstmtVal": 4083.540000,
                    "anulInvstmtRate": 5.9300,
                    "untrRedVal": 4016.770000,
                    "anulRedRate": 6.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-30T09:25:00",
                        "clsgDtTm": "2022-08-31T05:00:00"
                    },
                    "untrInvstmtVal": 4050.440000,
                    "anulInvstmtRate": 5.9900,
                    "untrRedVal": 3984.570000,
                    "anulRedRate": 6.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-08-31T09:25:00",
                        "clsgDtTm": "2022-09-01T05:00:00"
                    },
                    "untrInvstmtVal": 4084.540000,
                    "anulInvstmtRate": 5.9300,
                    "untrRedVal": 4017.790000,
                    "anulRedRate": 6.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-01T09:25:00",
                        "clsgDtTm": "2022-09-02T05:00:00"
                    },
                    "untrInvstmtVal": 4107.690000,
                    "anulInvstmtRate": 5.8900,
                    "untrRedVal": 4040.340000,
                    "anulRedRate": 6.0100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-02T09:25:00",
                        "clsgDtTm": "2022-09-05T05:00:00"
                    },
                    "untrInvstmtVal": 4147.430000,
                    "anulInvstmtRate": 5.8200,
                    "untrRedVal": 4079.040000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-05T09:25:00",
                        "clsgDtTm": "2022-09-06T05:00:00"
                    },
                    "untrInvstmtVal": 4147.910000,
                    "anulInvstmtRate": 5.8200,
                    "untrRedVal": 4079.530000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-06T09:25:00",
                        "clsgDtTm": "2022-09-08T05:00:00"
                    },
                    "untrInvstmtVal": 4113.550000,
                    "anulInvstmtRate": 5.8800,
                    "untrRedVal": 4046.100000,
                    "anulRedRate": 6.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-08T09:25:00",
                        "clsgDtTm": "2022-09-09T05:00:00"
                    },
                    "untrInvstmtVal": 4125.460000,
                    "anulInvstmtRate": 5.8600,
                    "untrRedVal": 4057.720000,
                    "anulRedRate": 5.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-09T09:25:00",
                        "clsgDtTm": "2022-09-12T05:00:00"
                    },
                    "untrInvstmtVal": 4152.700000,
                    "anulInvstmtRate": 5.8100,
                    "untrRedVal": 4084.240000,
                    "anulRedRate": 5.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-12T09:25:00",
                        "clsgDtTm": "2022-09-13T05:00:00"
                    },
                    "untrInvstmtVal": 4112.990000,
                    "anulInvstmtRate": 5.8800,
                    "untrRedVal": 4045.610000,
                    "anulRedRate": 6.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-13T09:25:00",
                        "clsgDtTm": "2022-09-14T05:00:00"
                    },
                    "untrInvstmtVal": 4073.930000,
                    "anulInvstmtRate": 5.9500,
                    "untrRedVal": 4007.620000,
                    "anulRedRate": 6.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-14T09:25:00",
                        "clsgDtTm": "2022-09-15T05:00:00"
                    },
                    "untrInvstmtVal": 4102.550000,
                    "anulInvstmtRate": 5.9000,
                    "untrRedVal": 4035.490000,
                    "anulRedRate": 6.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-15T09:25:00",
                        "clsgDtTm": "2022-09-16T05:00:00"
                    },
                    "untrInvstmtVal": 4086.390000,
                    "anulInvstmtRate": 5.9300,
                    "untrRedVal": 4019.790000,
                    "anulRedRate": 6.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-16T09:25:00",
                        "clsgDtTm": "2022-09-19T05:00:00"
                    },
                    "untrInvstmtVal": 4081.210000,
                    "anulInvstmtRate": 5.9400,
                    "untrRedVal": 4014.770000,
                    "anulRedRate": 6.0600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-19T09:25:00",
                        "clsgDtTm": "2022-09-20T05:00:00"
                    },
                    "untrInvstmtVal": 4133.000000,
                    "anulInvstmtRate": 5.8500,
                    "untrRedVal": 4065.210000,
                    "anulRedRate": 5.9700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-20T09:25:00",
                        "clsgDtTm": "2022-09-21T05:00:00"
                    },
                    "untrInvstmtVal": 4139.500000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 4071.560000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-21T09:25:00",
                        "clsgDtTm": "2022-09-22T05:00:00"
                    },
                    "untrInvstmtVal": 4151.770000,
                    "anulInvstmtRate": 5.8200,
                    "untrRedVal": 4083.530000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-22T09:25:00",
                        "clsgDtTm": "2022-09-23T05:00:00"
                    },
                    "untrInvstmtVal": 4252.430000,
                    "anulInvstmtRate": 5.6500,
                    "untrRedVal": 4181.520000,
                    "anulRedRate": 5.7700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-23T09:25:00",
                        "clsgDtTm": "2022-09-26T05:00:00"
                    },
                    "untrInvstmtVal": 4176.120000,
                    "anulInvstmtRate": 5.7800,
                    "untrRedVal": 4107.280000,
                    "anulRedRate": 5.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-26T09:25:00",
                        "clsgDtTm": "2022-09-27T05:00:00"
                    },
                    "untrInvstmtVal": 4142.240000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 4074.320000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-27T09:25:00",
                        "clsgDtTm": "2022-09-28T05:00:00"
                    },
                    "untrInvstmtVal": 4143.000000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 4075.100000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-28T09:25:00",
                        "clsgDtTm": "2022-09-29T05:00:00"
                    },
                    "untrInvstmtVal": 4145.630000,
                    "anulInvstmtRate": 5.8300,
                    "untrRedVal": 4077.640000,
                    "anulRedRate": 5.9500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-29T09:25:00",
                        "clsgDtTm": "2022-09-30T05:00:00"
                    },
                    "untrInvstmtVal": 4151.870000,
                    "anulInvstmtRate": 5.8200,
                    "untrRedVal": 4083.740000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-09-30T09:25:00",
                        "clsgDtTm": "2022-10-03T05:00:00"
                    },
                    "untrInvstmtVal": 4192.060000,
                    "anulInvstmtRate": 5.7500,
                    "untrRedVal": 4122.870000,
                    "anulRedRate": 5.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-03T09:25:00",
                        "clsgDtTm": "2022-10-04T05:00:00"
                    },
                    "untrInvstmtVal": 4269.650000,
                    "anulInvstmtRate": 5.6200,
                    "untrRedVal": 4198.400000,
                    "anulRedRate": 5.7400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-04T09:25:00",
                        "clsgDtTm": "2022-10-05T05:00:00"
                    },
                    "untrInvstmtVal": 4222.410000,
                    "anulInvstmtRate": 5.7000,
                    "untrRedVal": 4152.450000,
                    "anulRedRate": 5.8200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-05T09:25:00",
                        "clsgDtTm": "2022-10-06T05:00:00"
                    },
                    "untrInvstmtVal": 4222.890000,
                    "anulInvstmtRate": 5.7000,
                    "untrRedVal": 4152.940000,
                    "anulRedRate": 5.8200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-06T09:25:00",
                        "clsgDtTm": "2022-10-07T05:00:00"
                    },
                    "untrInvstmtVal": 4229.280000,
                    "anulInvstmtRate": 5.6900,
                    "untrRedVal": 4159.180000,
                    "anulRedRate": 5.8100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-07T09:25:00",
                        "clsgDtTm": "2022-10-10T05:00:00"
                    },
                    "untrInvstmtVal": 4211.150000,
                    "anulInvstmtRate": 5.7200,
                    "untrRedVal": 4141.560000,
                    "anulRedRate": 5.8400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-10T09:25:00",
                        "clsgDtTm": "2022-10-11T05:00:00"
                    },
                    "untrInvstmtVal": 4182.410000,
                    "anulInvstmtRate": 5.7700,
                    "untrRedVal": 4113.610000,
                    "anulRedRate": 5.8900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-11T09:25:00",
                        "clsgDtTm": "2022-10-13T05:00:00"
                    },
                    "untrInvstmtVal": 4172.020000,
                    "anulInvstmtRate": 5.7900,
                    "untrRedVal": 4103.530000,
                    "anulRedRate": 5.9100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-13T09:25:00",
                        "clsgDtTm": "2022-10-14T05:00:00"
                    },
                    "untrInvstmtVal": 4172.550000,
                    "anulInvstmtRate": 5.7900,
                    "untrRedVal": 4104.070000,
                    "anulRedRate": 5.9100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-14T09:25:00",
                        "clsgDtTm": "2022-10-17T05:00:00"
                    },
                    "untrInvstmtVal": 4168.190000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4099.850000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-17T09:25:00",
                        "clsgDtTm": "2022-10-18T05:00:00"
                    },
                    "untrInvstmtVal": 4169.560000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4101.220000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-18T09:25:00",
                        "clsgDtTm": "2022-10-19T05:00:00"
                    },
                    "untrInvstmtVal": 4182.510000,
                    "anulInvstmtRate": 5.7800,
                    "untrRedVal": 4113.860000,
                    "anulRedRate": 5.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-19T09:25:00",
                        "clsgDtTm": "2022-10-20T05:00:00"
                    },
                    "untrInvstmtVal": 4172.310000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4103.970000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-20T09:25:00",
                        "clsgDtTm": "2022-10-21T05:00:00"
                    },
                    "untrInvstmtVal": 4173.690000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4105.340000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-21T09:25:00",
                        "clsgDtTm": "2022-10-24T05:00:00"
                    },
                    "untrInvstmtVal": 4175.960000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4107.590000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-24T09:25:00",
                        "clsgDtTm": "2022-10-25T05:00:00"
                    },
                    "untrInvstmtVal": 4177.340000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4108.960000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-25T09:25:00",
                        "clsgDtTm": "2022-10-26T05:00:00"
                    },
                    "untrInvstmtVal": 4178.720000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4110.340000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-26T09:25:00",
                        "clsgDtTm": "2022-10-27T05:00:00"
                    },
                    "untrInvstmtVal": 4170.340000,
                    "anulInvstmtRate": 5.8200,
                    "untrRedVal": 4102.230000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-27T09:25:00",
                        "clsgDtTm": "2022-10-28T05:00:00"
                    },
                    "untrInvstmtVal": 4177.620000,
                    "anulInvstmtRate": 5.8100,
                    "untrRedVal": 4109.360000,
                    "anulRedRate": 5.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-28T09:25:00",
                        "clsgDtTm": "2022-10-31T05:00:00"
                    },
                    "untrInvstmtVal": 4163.090000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 4095.260000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-10-31T09:25:00",
                        "clsgDtTm": "2022-11-01T05:00:00"
                    },
                    "untrInvstmtVal": 4199.230000,
                    "anulInvstmtRate": 5.7800,
                    "untrRedVal": 4130.470000,
                    "anulRedRate": 5.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-01T09:25:00",
                        "clsgDtTm": "2022-11-03T05:00:00"
                    },
                    "untrInvstmtVal": 4236.450000,
                    "anulInvstmtRate": 5.7200,
                    "untrRedVal": 4166.740000,
                    "anulRedRate": 5.8400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-03T09:25:00",
                        "clsgDtTm": "2022-11-04T05:00:00"
                    },
                    "untrInvstmtVal": 4220.380000,
                    "anulInvstmtRate": 5.7500,
                    "untrRedVal": 4151.130000,
                    "anulRedRate": 5.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-04T09:25:00",
                        "clsgDtTm": "2022-11-07T05:00:00"
                    },
                    "untrInvstmtVal": 4217.260000,
                    "anulInvstmtRate": 5.7600,
                    "untrRedVal": 4148.140000,
                    "anulRedRate": 5.8800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-07T09:25:00",
                        "clsgDtTm": "2022-11-08T05:00:00"
                    },
                    "untrInvstmtVal": 4172.510000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 4104.620000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-08T09:25:00",
                        "clsgDtTm": "2022-11-09T05:00:00"
                    },
                    "untrInvstmtVal": 4139.860000,
                    "anulInvstmtRate": 5.9000,
                    "untrRedVal": 4072.870000,
                    "anulRedRate": 6.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-09T09:25:00",
                        "clsgDtTm": "2022-11-10T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4096.520000,
                    "anulRedRate": 5.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-10T09:25:00",
                        "clsgDtTm": "2022-11-11T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 3994.530000,
                    "anulRedRate": 6.1800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-11T09:25:00",
                        "clsgDtTm": "2022-11-14T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-14T09:25:00",
                        "clsgDtTm": "2022-11-16T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-16T09:25:00",
                        "clsgDtTm": "2022-11-17T05:00:00"
                    },
                    "untrInvstmtVal": 3965.480000,
                    "anulInvstmtRate": 6.0300,
                    "untrRedVal": 3900.260000,
                    "anulRedRate": 6.1500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-17T09:25:00",
                        "clsgDtTm": "2022-11-18T05:00:00"
                    },
                    "untrInvstmtVal": 3956.010000,
                    "anulInvstmtRate": 6.0500,
                    "untrRedVal": 3891.060000,
                    "anulRedRate": 6.1700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-18T09:25:00",
                        "clsgDtTm": "2022-11-21T05:00:00"
                    },
                    "untrInvstmtVal": 3909.820000,
                    "anulInvstmtRate": 6.1400,
                    "untrRedVal": 3846.140000,
                    "anulRedRate": 6.2600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-21T09:25:00",
                        "clsgDtTm": "2022-11-22T05:00:00"
                    },
                    "untrInvstmtVal": 3927.510000,
                    "anulInvstmtRate": 6.1100,
                    "untrRedVal": 3863.400000,
                    "anulRedRate": 6.2300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-22T09:25:00",
                        "clsgDtTm": "2022-11-23T05:00:00"
                    },
                    "untrInvstmtVal": 3891.420000,
                    "anulInvstmtRate": 6.1800,
                    "untrRedVal": 3828.280000,
                    "anulRedRate": 6.3000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-23T09:25:00",
                        "clsgDtTm": "2022-11-24T05:00:00"
                    },
                    "untrInvstmtVal": 3855.890000,
                    "anulInvstmtRate": 6.2500,
                    "untrRedVal": 3793.720000,
                    "anulRedRate": 6.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-24T09:25:00",
                        "clsgDtTm": "2022-11-25T05:00:00"
                    },
                    "untrInvstmtVal": 3899.770000,
                    "anulInvstmtRate": 6.1700,
                    "untrRedVal": 3836.490000,
                    "anulRedRate": 6.2900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-25T09:25:00",
                        "clsgDtTm": "2022-11-28T05:00:00"
                    },
                    "untrInvstmtVal": 3893.460000,
                    "anulInvstmtRate": 6.1900,
                    "untrRedVal": 3830.400000,
                    "anulRedRate": 6.3100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-28T09:25:00",
                        "clsgDtTm": "2022-11-29T05:00:00"
                    },
                    "untrInvstmtVal": 3895.100000,
                    "anulInvstmtRate": 6.1900,
                    "untrRedVal": 3832.030000,
                    "anulRedRate": 6.3100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-29T09:25:00",
                        "clsgDtTm": "2022-11-30T05:00:00"
                    },
                    "untrInvstmtVal": 3961.520000,
                    "anulInvstmtRate": 6.0700,
                    "untrRedVal": 3896.740000,
                    "anulRedRate": 6.1900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-11-30T09:25:00",
                        "clsgDtTm": "2022-12-01T05:00:00"
                    },
                    "untrInvstmtVal": 3996.220000,
                    "anulInvstmtRate": 6.0100,
                    "untrRedVal": 3930.560000,
                    "anulRedRate": 6.1300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-01T09:25:00",
                        "clsgDtTm": "2022-12-02T05:00:00"
                    },
                    "untrInvstmtVal": 4031.390000,
                    "anulInvstmtRate": 5.9500,
                    "untrRedVal": 3964.830000,
                    "anulRedRate": 6.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-02T09:25:00",
                        "clsgDtTm": "2022-12-05T05:00:00"
                    },
                    "untrInvstmtVal": 4034.520000,
                    "anulInvstmtRate": 5.9500,
                    "untrRedVal": 3967.930000,
                    "anulRedRate": 6.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-05T09:25:00",
                        "clsgDtTm": "2022-12-06T05:00:00"
                    },
                    "untrInvstmtVal": 3986.070000,
                    "anulInvstmtRate": 6.0400,
                    "untrRedVal": 3920.790000,
                    "anulRedRate": 6.1600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-06T09:25:00",
                        "clsgDtTm": "2022-12-07T05:00:00"
                    },
                    "untrInvstmtVal": 3933.200000,
                    "anulInvstmtRate": 6.1400,
                    "untrRedVal": 3869.340000,
                    "anulRedRate": 6.2600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-07T09:25:00",
                        "clsgDtTm": "2022-12-08T05:00:00"
                    },
                    "untrInvstmtVal": 3945.660000,
                    "anulInvstmtRate": 6.1200,
                    "untrRedVal": 3881.510000,
                    "anulRedRate": 6.2400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-08T09:25:00",
                        "clsgDtTm": "2022-12-09T05:00:00"
                    },
                    "untrInvstmtVal": 3920.370000,
                    "anulInvstmtRate": 6.1700,
                    "untrRedVal": 3856.920000,
                    "anulRedRate": 6.2900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-09T09:25:00",
                        "clsgDtTm": "2022-12-12T05:00:00"
                    },
                    "untrInvstmtVal": 3907.850000,
                    "anulInvstmtRate": 6.1900,
                    "untrRedVal": 3844.730000,
                    "anulRedRate": 6.3100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-12T09:25:00",
                        "clsgDtTm": "2022-12-13T05:00:00"
                    },
                    "untrInvstmtVal": 3872.290000,
                    "anulInvstmtRate": 6.2600,
                    "untrRedVal": 3810.130000,
                    "anulRedRate": 6.3800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-13T09:25:00",
                        "clsgDtTm": "2022-12-14T05:00:00"
                    },
                    "untrInvstmtVal": 3811.580000,
                    "anulInvstmtRate": 6.3800,
                    "untrRedVal": 3751.040000,
                    "anulRedRate": 6.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-14T09:25:00",
                        "clsgDtTm": "2022-12-15T05:00:00"
                    },
                    "untrInvstmtVal": 3833.580000,
                    "anulInvstmtRate": 6.3400,
                    "untrRedVal": 3772.490000,
                    "anulRedRate": 6.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-15T09:25:00",
                        "clsgDtTm": "2022-12-16T05:00:00"
                    },
                    "untrInvstmtVal": 3866.350000,
                    "anulInvstmtRate": 6.2800,
                    "untrRedVal": 3804.440000,
                    "anulRedRate": 6.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-16T09:25:00",
                        "clsgDtTm": "2022-12-19T05:00:00"
                    },
                    "untrInvstmtVal": 3807.400000,
                    "anulInvstmtRate": 6.4000,
                    "untrRedVal": 3747.070000,
                    "anulRedRate": 6.5200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-19T09:25:00",
                        "clsgDtTm": "2022-12-20T05:00:00"
                    },
                    "untrInvstmtVal": 3829.480000,
                    "anulInvstmtRate": 6.3600,
                    "untrRedVal": 3768.610000,
                    "anulRedRate": 6.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-20T09:25:00",
                        "clsgDtTm": "2022-12-21T05:00:00"
                    },
                    "untrInvstmtVal": 3831.090000,
                    "anulInvstmtRate": 6.3600,
                    "untrRedVal": 3770.220000,
                    "anulRedRate": 6.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-21T09:25:00",
                        "clsgDtTm": "2022-12-22T05:00:00"
                    },
                    "untrInvstmtVal": 3837.860000,
                    "anulInvstmtRate": 6.3500,
                    "untrRedVal": 3776.840000,
                    "anulRedRate": 6.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-22T09:25:00",
                        "clsgDtTm": "2022-12-23T05:00:00"
                    },
                    "untrInvstmtVal": 3834.330000,
                    "anulInvstmtRate": 6.3600,
                    "untrRedVal": 3773.430000,
                    "anulRedRate": 6.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-23T09:25:00",
                        "clsgDtTm": "2022-12-26T05:00:00"
                    },
                    "untrInvstmtVal": 3868.370000,
                    "anulInvstmtRate": 6.3000,
                    "untrRedVal": 3806.640000,
                    "anulRedRate": 6.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-26T09:25:00",
                        "clsgDtTm": "2022-12-27T05:00:00"
                    },
                    "untrInvstmtVal": 3889.140000,
                    "anulInvstmtRate": 6.2600,
                    "untrRedVal": 3826.880000,
                    "anulRedRate": 6.3800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-27T09:25:00",
                        "clsgDtTm": "2022-12-28T05:00:00"
                    },
                    "untrInvstmtVal": 3885.360000,
                    "anulInvstmtRate": 6.2700,
                    "untrRedVal": 3823.230000,
                    "anulRedRate": 6.3900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-28T09:25:00",
                        "clsgDtTm": "2022-12-29T05:00:00"
                    },
                    "untrInvstmtVal": 3956.030000,
                    "anulInvstmtRate": 6.1400,
                    "untrRedVal": 3892.090000,
                    "anulRedRate": 6.2600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2022-12-29T09:25:00",
                        "clsgDtTm": "2023-01-02T05:00:00"
                    },
                    "untrInvstmtVal": 3949.320000,
                    "anulInvstmtRate": 6.1600,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-02T09:25:00",
                        "clsgDtTm": "2023-01-03T05:00:00"
                    },
                    "untrInvstmtVal": 3924.060000,
                    "anulInvstmtRate": 6.2100,
                    "untrRedVal": 3861.060000,
                    "anulRedRate": 6.3300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-03T09:25:00",
                        "clsgDtTm": "2023-01-04T05:00:00"
                    },
                    "untrInvstmtVal": 3883.350000,
                    "anulInvstmtRate": 6.2900,
                    "untrRedVal": 3821.440000,
                    "anulRedRate": 6.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-04T09:25:00",
                        "clsgDtTm": "2023-01-05T05:00:00"
                    },
                    "untrInvstmtVal": 3838.240000,
                    "anulInvstmtRate": 6.3800,
                    "untrRedVal": 3777.540000,
                    "anulRedRate": 6.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-05T09:25:00",
                        "clsgDtTm": "2023-01-06T05:00:00"
                    },
                    "untrInvstmtVal": 3855.140000,
                    "anulInvstmtRate": 6.3500,
                    "untrRedVal": 3794.030000,
                    "anulRedRate": 6.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-06T09:25:00",
                        "clsgDtTm": "2023-01-09T05:00:00"
                    },
                    "untrInvstmtVal": 3857.690000,
                    "anulInvstmtRate": 6.3500,
                    "untrRedVal": 3796.560000,
                    "anulRedRate": 6.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-09T09:25:00",
                        "clsgDtTm": "2023-01-10T05:00:00"
                    },
                    "untrInvstmtVal": 3869.510000,
                    "anulInvstmtRate": 6.3300,
                    "untrRedVal": 3808.100000,
                    "anulRedRate": 6.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-10T09:25:00",
                        "clsgDtTm": "2023-01-11T05:00:00"
                    },
                    "untrInvstmtVal": 3893.000000,
                    "anulInvstmtRate": 6.3000,
                    "untrRedVal": 3831.080000,
                    "anulRedRate": 6.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-11T09:25:00",
                        "clsgDtTm": "2023-01-12T05:00:00"
                    },
                    "untrInvstmtVal": 3936.920000,
                    "anulInvstmtRate": 6.2200,
                    "untrRedVal": 3873.890000,
                    "anulRedRate": 6.3400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-12T09:25:00",
                        "clsgDtTm": "2023-01-13T05:00:00"
                    },
                    "untrInvstmtVal": 4008.860000,
                    "anulInvstmtRate": 6.0900,
                    "untrRedVal": 3943.980000,
                    "anulRedRate": 6.2100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-13T09:25:00",
                        "clsgDtTm": "2023-01-16T05:00:00"
                    },
                    "untrInvstmtVal": 3995.680000,
                    "anulInvstmtRate": 6.1200,
                    "untrRedVal": 3931.190000,
                    "anulRedRate": 6.2400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-16T09:25:00",
                        "clsgDtTm": "2023-01-17T05:00:00"
                    },
                    "untrInvstmtVal": 3970.210000,
                    "anulInvstmtRate": 6.1700,
                    "untrRedVal": 3906.430000,
                    "anulRedRate": 6.2900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-17T09:25:00",
                        "clsgDtTm": "2023-01-18T05:00:00"
                    },
                    "untrInvstmtVal": 3961.070000,
                    "anulInvstmtRate": 6.1900,
                    "untrRedVal": 3897.560000,
                    "anulRedRate": 6.3100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-18T09:25:00",
                        "clsgDtTm": "2023-01-19T05:00:00"
                    },
                    "untrInvstmtVal": 3957.320000,
                    "anulInvstmtRate": 6.2000,
                    "untrRedVal": 3893.940000,
                    "anulRedRate": 6.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-19T09:25:00",
                        "clsgDtTm": "2023-01-20T05:00:00"
                    },
                    "untrInvstmtVal": 3948.240000,
                    "anulInvstmtRate": 6.2200,
                    "untrRedVal": 3885.140000,
                    "anulRedRate": 6.3400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-20T09:25:00",
                        "clsgDtTm": "2023-01-23T05:00:00"
                    },
                    "untrInvstmtVal": 3888.030000,
                    "anulInvstmtRate": 6.3400,
                    "untrRedVal": 3826.540000,
                    "anulRedRate": 6.4600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-23T09:25:00",
                        "clsgDtTm": "2023-01-24T05:00:00"
                    },
                    "untrInvstmtVal": 3874.110000,
                    "anulInvstmtRate": 6.3700,
                    "untrRedVal": 3813.010000,
                    "anulRedRate": 6.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-24T09:25:00",
                        "clsgDtTm": "2023-01-25T05:00:00"
                    },
                    "untrInvstmtVal": 3855.160000,
                    "anulInvstmtRate": 6.4100,
                    "untrRedVal": 3794.580000,
                    "anulRedRate": 6.5300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-25T09:25:00",
                        "clsgDtTm": "2023-01-26T05:00:00"
                    },
                    "untrInvstmtVal": 3883.020000,
                    "anulInvstmtRate": 6.3600,
                    "untrRedVal": 3821.760000,
                    "anulRedRate": 6.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-26T09:25:00",
                        "clsgDtTm": "2023-01-27T05:00:00"
                    },
                    "untrInvstmtVal": 3864.070000,
                    "anulInvstmtRate": 6.4000,
                    "untrRedVal": 3803.330000,
                    "anulRedRate": 6.5200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-27T09:25:00",
                        "clsgDtTm": "2023-01-30T05:00:00"
                    },
                    "untrInvstmtVal": 3851.770000,
                    "anulInvstmtRate": 6.4300,
                    "untrRedVal": 3791.400000,
                    "anulRedRate": 6.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-30T09:25:00",
                        "clsgDtTm": "2023-01-31T05:00:00"
                    },
                    "untrInvstmtVal": 3853.410000,
                    "anulInvstmtRate": 6.4300,
                    "untrRedVal": 3793.040000,
                    "anulRedRate": 6.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-01-31T09:25:00",
                        "clsgDtTm": "2023-02-01T05:00:00"
                    },
                    "untrInvstmtVal": 3860.170000,
                    "anulInvstmtRate": 6.4200,
                    "untrRedVal": 3799.650000,
                    "anulRedRate": 6.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-01T09:25:00",
                        "clsgDtTm": "2023-02-02T05:00:00"
                    },
                    "untrInvstmtVal": 3856.710000,
                    "anulInvstmtRate": 6.4300,
                    "untrRedVal": 3796.320000,
                    "anulRedRate": 6.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-02T09:25:00",
                        "clsgDtTm": "2023-02-03T05:00:00"
                    },
                    "untrInvstmtVal": 3853.260000,
                    "anulInvstmtRate": 6.4400,
                    "untrRedVal": 3792.990000,
                    "anulRedRate": 6.5600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-03T09:25:00",
                        "clsgDtTm": "2023-02-06T05:00:00"
                    },
                    "untrInvstmtVal": 3851.220000,
                    "anulInvstmtRate": 6.4500,
                    "untrRedVal": 3791.050000,
                    "anulRedRate": 6.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-06T09:25:00",
                        "clsgDtTm": "2023-02-07T05:00:00"
                    },
                    "untrInvstmtVal": 3868.160000,
                    "anulInvstmtRate": 6.4200,
                    "untrRedVal": 3807.580000,
                    "anulRedRate": 6.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-07T09:25:00",
                        "clsgDtTm": "2023-02-08T05:00:00"
                    },
                    "untrInvstmtVal": 3890.360000,
                    "anulInvstmtRate": 6.3800,
                    "untrRedVal": 3829.250000,
                    "anulRedRate": 6.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-08T09:25:00",
                        "clsgDtTm": "2023-02-09T05:00:00"
                    },
                    "untrInvstmtVal": 3886.860000,
                    "anulInvstmtRate": 6.3900,
                    "untrRedVal": 3825.870000,
                    "anulRedRate": 6.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-09T09:25:00",
                        "clsgDtTm": "2023-02-10T05:00:00"
                    },
                    "untrInvstmtVal": 3856.850000,
                    "anulInvstmtRate": 6.4500,
                    "untrRedVal": 3796.660000,
                    "anulRedRate": 6.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-10T09:25:00",
                        "clsgDtTm": "2023-02-13T05:00:00"
                    },
                    "untrInvstmtVal": 3880.210000,
                    "anulInvstmtRate": 6.4100,
                    "untrRedVal": 3819.460000,
                    "anulRedRate": 6.5300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-13T09:25:00",
                        "clsgDtTm": "2023-02-14T05:00:00"
                    },
                    "untrInvstmtVal": 3892.110000,
                    "anulInvstmtRate": 6.3900,
                    "untrRedVal": 3831.090000,
                    "anulRedRate": 6.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-14T09:25:00",
                        "clsgDtTm": "2023-02-15T05:00:00"
                    },
                    "untrInvstmtVal": 3883.450000,
                    "anulInvstmtRate": 6.4100,
                    "untrRedVal": 3822.680000,
                    "anulRedRate": 6.5300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-15T09:25:00",
                        "clsgDtTm": "2023-02-16T05:00:00"
                    },
                    "untrInvstmtVal": 3932.160000,
                    "anulInvstmtRate": 6.3200,
                    "untrRedVal": 3870.180000,
                    "anulRedRate": 6.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-16T09:25:00",
                        "clsgDtTm": "2023-02-17T05:00:00"
                    },
                    "untrInvstmtVal": 3934.250000,
                    "anulInvstmtRate": 6.3200,
                    "untrRedVal": 3872.250000,
                    "anulRedRate": 6.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-17T09:25:00",
                        "clsgDtTm": "2023-02-22T05:00:00"
                    },
                    "untrInvstmtVal": 3977.860000,
                    "anulInvstmtRate": 6.2500,
                    "untrRedVal": 3914.810000,
                    "anulRedRate": 6.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-22T09:25:00",
                        "clsgDtTm": "2023-02-23T05:00:00"
                    },
                    "untrInvstmtVal": 3979.970000,
                    "anulInvstmtRate": 6.2500,
                    "untrRedVal": 3916.900000,
                    "anulRedRate": 6.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-23T09:25:00",
                        "clsgDtTm": "2023-02-24T05:00:00"
                    },
                    "untrInvstmtVal": 3955.580000,
                    "anulInvstmtRate": 6.3000,
                    "untrRedVal": 3893.190000,
                    "anulRedRate": 6.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-24T09:25:00",
                        "clsgDtTm": "2023-02-27T05:00:00"
                    },
                    "untrInvstmtVal": 3923.340000,
                    "anulInvstmtRate": 6.3700,
                    "untrRedVal": 3861.850000,
                    "anulRedRate": 6.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-27T09:25:00",
                        "clsgDtTm": "2023-02-28T05:00:00"
                    },
                    "untrInvstmtVal": 3966.620000,
                    "anulInvstmtRate": 6.2900,
                    "untrRedVal": 3904.030000,
                    "anulRedRate": 6.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-02-28T09:25:00",
                        "clsgDtTm": "2023-03-01T05:00:00"
                    },
                    "untrInvstmtVal": 3906.060000,
                    "anulInvstmtRate": 6.4100,
                    "untrRedVal": 3845.080000,
                    "anulRedRate": 6.5300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-01T09:25:00",
                        "clsgDtTm": "2023-03-02T05:00:00"
                    },
                    "untrInvstmtVal": 3892.700000,
                    "anulInvstmtRate": 6.4400,
                    "untrRedVal": 3832.110000,
                    "anulRedRate": 6.5600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-02T09:25:00",
                        "clsgDtTm": "2023-03-03T05:00:00"
                    },
                    "untrInvstmtVal": 3884.520000,
                    "anulInvstmtRate": 6.4600,
                    "untrRedVal": 3824.170000,
                    "anulRedRate": 6.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-03T09:25:00",
                        "clsgDtTm": "2023-03-06T05:00:00"
                    },
                    "untrInvstmtVal": 3888.680000,
                    "anulInvstmtRate": 6.4600,
                    "untrRedVal": 3828.280000,
                    "anulRedRate": 6.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-06T09:25:00",
                        "clsgDtTm": "2023-03-07T05:00:00"
                    },
                    "untrInvstmtVal": 3880.530000,
                    "anulInvstmtRate": 6.4800,
                    "untrRedVal": 3820.380000,
                    "anulRedRate": 6.6000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-07T09:25:00",
                        "clsgDtTm": "2023-03-08T05:00:00"
                    },
                    "untrInvstmtVal": 3892.740000,
                    "anulInvstmtRate": 6.4600,
                    "untrRedVal": 3832.320000,
                    "anulRedRate": 6.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-08T09:25:00",
                        "clsgDtTm": "2023-03-09T05:00:00"
                    },
                    "untrInvstmtVal": 3910.130000,
                    "anulInvstmtRate": 6.4300,
                    "untrRedVal": 3849.300000,
                    "anulRedRate": 6.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-09T09:25:00",
                        "clsgDtTm": "2023-03-10T05:00:00"
                    },
                    "untrInvstmtVal": 3964.110000,
                    "anulInvstmtRate": 6.3300,
                    "untrRedVal": 3901.920000,
                    "anulRedRate": 6.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-10T09:25:00",
                        "clsgDtTm": "2023-03-13T05:00:00"
                    },
                    "untrInvstmtVal": 3939.550000,
                    "anulInvstmtRate": 6.3900,
                    "untrRedVal": 3878.080000,
                    "anulRedRate": 6.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-13T09:25:00",
                        "clsgDtTm": "2023-03-14T05:00:00"
                    },
                    "untrInvstmtVal": 3973.050000,
                    "anulInvstmtRate": 6.3300,
                    "untrRedVal": 3910.760000,
                    "anulRedRate": 6.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-14T09:25:00",
                        "clsgDtTm": "2023-03-15T05:00:00"
                    },
                    "untrInvstmtVal": 3943.840000,
                    "anulInvstmtRate": 6.3900,
                    "untrRedVal": 3882.340000,
                    "anulRedRate": 6.5100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-15T09:25:00",
                        "clsgDtTm": "2023-03-16T05:00:00"
                    },
                    "untrInvstmtVal": 3940.570000,
                    "anulInvstmtRate": 6.4000,
                    "untrRedVal": 3879.190000,
                    "anulRedRate": 6.5200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-16T09:25:00",
                        "clsgDtTm": "2023-03-17T05:00:00"
                    },
                    "untrInvstmtVal": 3958.070000,
                    "anulInvstmtRate": 6.3700,
                    "untrRedVal": 3896.280000,
                    "anulRedRate": 6.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-17T09:25:00",
                        "clsgDtTm": "2023-03-20T05:00:00"
                    },
                    "untrInvstmtVal": 3988.120000,
                    "anulInvstmtRate": 6.3200,
                    "untrRedVal": 3925.600000,
                    "anulRedRate": 6.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-20T09:25:00",
                        "clsgDtTm": "2023-03-21T05:00:00"
                    },
                    "untrInvstmtVal": 3995.320000,
                    "anulInvstmtRate": 6.3100,
                    "untrRedVal": 3932.660000,
                    "anulRedRate": 6.4300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-21T09:25:00",
                        "clsgDtTm": "2023-03-22T05:00:00"
                    },
                    "untrInvstmtVal": 3986.680000,
                    "anulInvstmtRate": 6.3300,
                    "untrRedVal": 3924.280000,
                    "anulRedRate": 6.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-22T09:25:00",
                        "clsgDtTm": "2023-03-23T05:00:00"
                    },
                    "untrInvstmtVal": 3999.160000,
                    "anulInvstmtRate": 6.3100,
                    "untrRedVal": 3936.470000,
                    "anulRedRate": 6.4300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-23T09:25:00",
                        "clsgDtTm": "2023-03-24T05:00:00"
                    },
                    "untrInvstmtVal": 3990.520000,
                    "anulInvstmtRate": 6.3300,
                    "untrRedVal": 3928.090000,
                    "anulRedRate": 6.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-24T09:25:00",
                        "clsgDtTm": "2023-03-27T05:00:00"
                    },
                    "untrInvstmtVal": 4036.910000,
                    "anulInvstmtRate": 6.2500,
                    "untrRedVal": 3973.340000,
                    "anulRedRate": 6.3700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-27T09:25:00",
                        "clsgDtTm": "2023-03-28T05:00:00"
                    },
                    "untrInvstmtVal": 4066.170000,
                    "anulInvstmtRate": 6.2000,
                    "untrRedVal": 4001.880000,
                    "anulRedRate": 6.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-28T09:25:00",
                        "clsgDtTm": "2023-03-29T05:00:00"
                    },
                    "untrInvstmtVal": 4068.140000,
                    "anulInvstmtRate": 6.2000,
                    "untrRedVal": 4003.830000,
                    "anulRedRate": 6.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-29T09:25:00",
                        "clsgDtTm": "2023-03-30T05:00:00"
                    },
                    "untrInvstmtVal": 4064.680000,
                    "anulInvstmtRate": 6.2100,
                    "untrRedVal": 4000.500000,
                    "anulRedRate": 6.3300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-30T09:25:00",
                        "clsgDtTm": "2023-03-31T05:00:00"
                    },
                    "untrInvstmtVal": 4093.900000,
                    "anulInvstmtRate": 6.1600,
                    "untrRedVal": 4028.990000,
                    "anulRedRate": 6.2800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-03-31T09:25:00",
                        "clsgDtTm": "2023-04-03T05:00:00"
                    },
                    "untrInvstmtVal": 4076.030000,
                    "anulInvstmtRate": 6.2000,
                    "untrRedVal": 4011.650000,
                    "anulRedRate": 6.3200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-03T09:25:00",
                        "clsgDtTm": "2023-04-04T05:00:00"
                    },
                    "untrInvstmtVal": 4094.360000,
                    "anulInvstmtRate": 6.1700,
                    "untrRedVal": 4029.540000,
                    "anulRedRate": 6.2900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-04T09:25:00",
                        "clsgDtTm": "2023-04-05T05:00:00"
                    },
                    "untrInvstmtVal": 4112.810000,
                    "anulInvstmtRate": 6.1400,
                    "untrRedVal": 4047.550000,
                    "anulRedRate": 6.2600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-05T09:25:00",
                        "clsgDtTm": "2023-04-06T05:00:00"
                    },
                    "untrInvstmtVal": 4131.380000,
                    "anulInvstmtRate": 6.1100,
                    "untrRedVal": 4065.670000,
                    "anulRedRate": 6.2300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-06T09:25:00",
                        "clsgDtTm": "2023-04-10T05:00:00"
                    },
                    "untrInvstmtVal": 4114.280000,
                    "anulInvstmtRate": 6.1500,
                    "untrRedVal": 4049.080000,
                    "anulRedRate": 6.2700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-10T09:25:00",
                        "clsgDtTm": "2023-04-11T05:00:00"
                    },
                    "untrInvstmtVal": 4105.270000,
                    "anulInvstmtRate": 6.1700,
                    "untrRedVal": 4040.350000,
                    "anulRedRate": 6.2900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-11T09:25:00",
                        "clsgDtTm": "2023-04-12T05:00:00"
                    },
                    "untrInvstmtVal": 4127.430000,
                    "anulInvstmtRate": 6.1300,
                    "untrRedVal": 4061.950000,
                    "anulRedRate": 6.2500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-12T09:25:00",
                        "clsgDtTm": "2023-04-13T05:00:00"
                    },
                    "untrInvstmtVal": 4134.880000,
                    "anulInvstmtRate": 6.1200,
                    "untrRedVal": 4069.240000,
                    "anulRedRate": 6.2400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-13T09:25:00",
                        "clsgDtTm": "2023-04-14T05:00:00"
                    },
                    "untrInvstmtVal": 4187.190000,
                    "anulInvstmtRate": 6.0300,
                    "untrRedVal": 4120.220000,
                    "anulRedRate": 6.1500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-14T09:25:00",
                        "clsgDtTm": "2023-04-17T05:00:00"
                    },
                    "untrInvstmtVal": 4184.910000,
                    "anulInvstmtRate": 6.0400,
                    "untrRedVal": 4118.060000,
                    "anulRedRate": 6.1600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-17T09:25:00",
                        "clsgDtTm": "2023-04-18T05:00:00"
                    },
                    "untrInvstmtVal": 4209.300000,
                    "anulInvstmtRate": 6.0000,
                    "untrRedVal": 4141.840000,
                    "anulRedRate": 6.1200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-18T09:25:00",
                        "clsgDtTm": "2023-04-19T05:00:00"
                    },
                    "untrInvstmtVal": 4199.630000,
                    "anulInvstmtRate": 6.0200,
                    "untrRedVal": 4132.460000,
                    "anulRedRate": 6.1400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-19T09:25:00",
                        "clsgDtTm": "2023-04-20T05:00:00"
                    },
                    "untrInvstmtVal": 4178.740000,
                    "anulInvstmtRate": 6.0600,
                    "untrRedVal": 4112.160000,
                    "anulRedRate": 6.1800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-20T09:25:00",
                        "clsgDtTm": "2023-04-24T05:00:00"
                    },
                    "untrInvstmtVal": 4182.610000,
                    "anulInvstmtRate": 6.0600,
                    "untrRedVal": 4115.980000,
                    "anulRedRate": 6.1800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-24T09:25:00",
                        "clsgDtTm": "2023-04-25T05:00:00"
                    },
                    "untrInvstmtVal": 4195.590000,
                    "anulInvstmtRate": 6.0400,
                    "untrRedVal": 4128.650000,
                    "anulRedRate": 6.1600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-25T09:25:00",
                        "clsgDtTm": "2023-04-26T05:00:00"
                    },
                    "untrInvstmtVal": 4214.300000,
                    "anulInvstmtRate": 6.0100,
                    "untrRedVal": 4146.920000,
                    "anulRedRate": 6.1300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-26T09:25:00",
                        "clsgDtTm": "2023-04-27T05:00:00"
                    },
                    "untrInvstmtVal": 4244.620000,
                    "anulInvstmtRate": 5.9600,
                    "untrRedVal": 4176.480000,
                    "anulRedRate": 6.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-27T09:25:00",
                        "clsgDtTm": "2023-04-28T05:00:00"
                    },
                    "untrInvstmtVal": 4258.420000,
                    "anulInvstmtRate": 5.9400,
                    "untrRedVal": 4189.950000,
                    "anulRedRate": 6.0600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-04-28T09:25:00",
                        "clsgDtTm": "2023-05-02T05:00:00"
                    },
                    "untrInvstmtVal": 4245.210000,
                    "anulInvstmtRate": 5.9700,
                    "untrRedVal": 4177.150000,
                    "anulRedRate": 6.0900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-02T09:25:00",
                        "clsgDtTm": "2023-05-03T05:00:00"
                    },
                    "untrInvstmtVal": 4246.960000,
                    "anulInvstmtRate": 5.9700,
                    "untrRedVal": 4178.900000,
                    "anulRedRate": 6.0900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-03T09:25:00",
                        "clsgDtTm": "2023-05-04T05:00:00"
                    },
                    "untrInvstmtVal": 4260.240000,
                    "anulInvstmtRate": 5.9500,
                    "untrRedVal": 4191.860000,
                    "anulRedRate": 6.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-04T09:25:00",
                        "clsgDtTm": "2023-05-05T05:00:00"
                    },
                    "untrInvstmtVal": 4291.040000,
                    "anulInvstmtRate": 5.9000,
                    "untrRedVal": 4221.880000,
                    "anulRedRate": 6.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-05T09:25:00",
                        "clsgDtTm": "2023-05-08T05:00:00"
                    },
                    "untrInvstmtVal": 4288.530000,
                    "anulInvstmtRate": 5.9100,
                    "untrRedVal": 4219.500000,
                    "anulRedRate": 6.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-08T09:25:00",
                        "clsgDtTm": "2023-05-09T05:00:00"
                    },
                    "untrInvstmtVal": 4290.290000,
                    "anulInvstmtRate": 5.9100,
                    "untrRedVal": 4221.250000,
                    "anulRedRate": 6.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-09T09:25:00",
                        "clsgDtTm": "2023-05-10T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4206.020000,
                    "anulRedRate": 6.0600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-10T09:25:00",
                        "clsgDtTm": "2023-05-11T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4213.420000,
                    "anulRedRate": 6.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-11T09:25:00",
                        "clsgDtTm": "2023-05-12T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-12T09:25:00",
                        "clsgDtTm": "2023-05-15T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-15T09:25:00",
                        "clsgDtTm": "2023-05-16T05:00:00"
                    },
                    "untrInvstmtVal": 4258.370000,
                    "anulInvstmtRate": 5.7800,
                    "untrRedVal": 4187.190000,
                    "anulRedRate": 5.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-16T09:25:00",
                        "clsgDtTm": "2023-05-17T05:00:00"
                    },
                    "untrInvstmtVal": 4266.020000,
                    "anulInvstmtRate": 5.7700,
                    "untrRedVal": 4194.660000,
                    "anulRedRate": 5.8900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-17T09:25:00",
                        "clsgDtTm": "2023-05-18T05:00:00"
                    },
                    "untrInvstmtVal": 4249.620000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4178.730000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-18T09:25:00",
                        "clsgDtTm": "2023-05-19T05:00:00"
                    },
                    "untrInvstmtVal": 4263.240000,
                    "anulInvstmtRate": 5.7800,
                    "untrRedVal": 4192.030000,
                    "anulRedRate": 5.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-19T09:25:00",
                        "clsgDtTm": "2023-05-22T05:00:00"
                    },
                    "untrInvstmtVal": 4254.200000,
                    "anulInvstmtRate": 5.8000,
                    "untrRedVal": 4183.270000,
                    "anulRedRate": 5.9200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-22T09:25:00",
                        "clsgDtTm": "2023-05-23T05:00:00"
                    },
                    "untrInvstmtVal": 4267.830000,
                    "anulInvstmtRate": 5.7800,
                    "untrRedVal": 4196.580000,
                    "anulRedRate": 5.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-23T09:25:00",
                        "clsgDtTm": "2023-05-24T05:00:00"
                    },
                    "untrInvstmtVal": 4269.460000,
                    "anulInvstmtRate": 5.7800,
                    "untrRedVal": 4198.200000,
                    "anulRedRate": 5.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-24T09:25:00",
                        "clsgDtTm": "2023-05-25T05:00:00"
                    },
                    "untrInvstmtVal": 4283.150000,
                    "anulInvstmtRate": 5.7600,
                    "untrRedVal": 4211.560000,
                    "anulRedRate": 5.8800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-25T09:25:00",
                        "clsgDtTm": "2023-05-26T05:00:00"
                    },
                    "untrInvstmtVal": 4302.980000,
                    "anulInvstmtRate": 5.7300,
                    "untrRedVal": 4230.900000,
                    "anulRedRate": 5.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-26T09:25:00",
                        "clsgDtTm": "2023-05-29T05:00:00"
                    },
                    "untrInvstmtVal": 4309.540000,
                    "anulInvstmtRate": 5.7200,
                    "untrRedVal": 4237.310000,
                    "anulRedRate": 5.8400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-29T09:25:00",
                        "clsgDtTm": "2023-05-30T05:00:00"
                    },
                    "untrInvstmtVal": 4329.360000,
                    "anulInvstmtRate": 5.6900,
                    "untrRedVal": 4256.630000,
                    "anulRedRate": 5.8100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-30T09:25:00",
                        "clsgDtTm": "2023-05-31T05:00:00"
                    },
                    "untrInvstmtVal": 4343.130000,
                    "anulInvstmtRate": 5.6700,
                    "untrRedVal": 4270.070000,
                    "anulRedRate": 5.7900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-05-31T09:25:00",
                        "clsgDtTm": "2023-06-01T05:00:00"
                    },
                    "untrInvstmtVal": 4344.580000,
                    "anulInvstmtRate": 5.6700,
                    "untrRedVal": 4271.520000,
                    "anulRedRate": 5.7900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-01T09:25:00",
                        "clsgDtTm": "2023-06-02T05:00:00"
                    },
                    "untrInvstmtVal": 4339.870000,
                    "anulInvstmtRate": 5.6800,
                    "untrRedVal": 4266.970000,
                    "anulRedRate": 5.8000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-02T09:25:00",
                        "clsgDtTm": "2023-06-05T05:00:00"
                    },
                    "untrInvstmtVal": 4367.080000,
                    "anulInvstmtRate": 5.6400,
                    "untrRedVal": 4293.500000,
                    "anulRedRate": 5.7600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-05T09:25:00",
                        "clsgDtTm": "2023-06-06T05:00:00"
                    },
                    "untrInvstmtVal": 4387.250000,
                    "anulInvstmtRate": 5.6100,
                    "untrRedVal": 4313.160000,
                    "anulRedRate": 5.7300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-06T09:25:00",
                        "clsgDtTm": "2023-06-07T05:00:00"
                    },
                    "untrInvstmtVal": 4420.180000,
                    "anulInvstmtRate": 5.5600,
                    "untrRedVal": 4345.240000,
                    "anulRedRate": 5.6800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-07T09:25:00",
                        "clsgDtTm": "2023-06-09T05:00:00"
                    },
                    "untrInvstmtVal": 4411.210000,
                    "anulInvstmtRate": 5.5700,
                    "untrRedVal": 4336.520000,
                    "anulRedRate": 5.6900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-09T09:25:00",
                        "clsgDtTm": "2023-06-12T05:00:00"
                    },
                    "untrInvstmtVal": 4413.140000,
                    "anulInvstmtRate": 5.5700,
                    "untrRedVal": 4338.430000,
                    "anulRedRate": 5.6900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-12T09:25:00",
                        "clsgDtTm": "2023-06-13T05:00:00"
                    },
                    "untrInvstmtVal": 4408.120000,
                    "anulInvstmtRate": 5.5800,
                    "untrRedVal": 4333.570000,
                    "anulRedRate": 5.7000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-13T09:25:00",
                        "clsgDtTm": "2023-06-14T05:00:00"
                    },
                    "untrInvstmtVal": 4384.320000,
                    "anulInvstmtRate": 5.6200,
                    "untrRedVal": 4310.440000,
                    "anulRedRate": 5.7400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-14T09:25:00",
                        "clsgDtTm": "2023-06-15T05:00:00"
                    },
                    "untrInvstmtVal": 4416.970000,
                    "anulInvstmtRate": 5.5700,
                    "untrRedVal": 4342.250000,
                    "anulRedRate": 5.6900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-15T09:25:00",
                        "clsgDtTm": "2023-06-16T05:00:00"
                    },
                    "untrInvstmtVal": 4411.650000,
                    "anulInvstmtRate": 5.5800,
                    "untrRedVal": 4337.100000,
                    "anulRedRate": 5.7000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-16T09:25:00",
                        "clsgDtTm": "2023-06-19T05:00:00"
                    },
                    "untrInvstmtVal": 4400.120000,
                    "anulInvstmtRate": 5.6000,
                    "untrRedVal": 4325.910000,
                    "anulRedRate": 5.7200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-19T09:25:00",
                        "clsgDtTm": "2023-06-20T05:00:00"
                    },
                    "untrInvstmtVal": 4419.970000,
                    "anulInvstmtRate": 5.5700,
                    "untrRedVal": 4345.260000,
                    "anulRedRate": 5.6900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-20T09:25:00",
                        "clsgDtTm": "2023-06-21T05:00:00"
                    },
                    "untrInvstmtVal": 4433.600000,
                    "anulInvstmtRate": 5.5500,
                    "untrRedVal": 4358.550000,
                    "anulRedRate": 5.6700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-21T09:25:00",
                        "clsgDtTm": "2023-06-22T05:00:00"
                    },
                    "untrInvstmtVal": 4434.580000,
                    "anulInvstmtRate": 5.5500,
                    "untrRedVal": 4359.540000,
                    "anulRedRate": 5.6700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-22T09:25:00",
                        "clsgDtTm": "2023-06-23T05:00:00"
                    },
                    "untrInvstmtVal": 4448.260000,
                    "anulInvstmtRate": 5.5300,
                    "untrRedVal": 4372.880000,
                    "anulRedRate": 5.6500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-23T09:25:00",
                        "clsgDtTm": "2023-06-26T05:00:00"
                    },
                    "untrInvstmtVal": 4462.060000,
                    "anulInvstmtRate": 5.5100,
                    "untrRedVal": 4386.350000,
                    "anulRedRate": 5.6300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-26T09:25:00",
                        "clsgDtTm": "2023-06-27T05:00:00"
                    },
                    "untrInvstmtVal": 4456.650000,
                    "anulInvstmtRate": 5.5200,
                    "untrRedVal": 4381.110000,
                    "anulRedRate": 5.6400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-27T09:25:00",
                        "clsgDtTm": "2023-06-28T05:00:00"
                    },
                    "untrInvstmtVal": 4432.230000,
                    "anulInvstmtRate": 5.5600,
                    "untrRedVal": 4357.370000,
                    "anulRedRate": 5.6800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-28T09:25:00",
                        "clsgDtTm": "2023-06-29T05:00:00"
                    },
                    "untrInvstmtVal": 4424.620000,
                    "anulInvstmtRate": 5.5700,
                    "untrRedVal": 4349.970000,
                    "anulRedRate": 5.6900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-29T09:25:00",
                        "clsgDtTm": "2023-06-30T05:00:00"
                    },
                    "untrInvstmtVal": 4425.440000,
                    "anulInvstmtRate": 5.5700,
                    "untrRedVal": 4350.790000,
                    "anulRedRate": 5.6900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-06-30T09:25:00",
                        "clsgDtTm": "2023-07-03T05:00:00"
                    },
                    "untrInvstmtVal": 4496.210000,
                    "anulInvstmtRate": 5.4600,
                    "untrRedVal": 4419.700000,
                    "anulRedRate": 5.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-03T09:25:00",
                        "clsgDtTm": "2023-07-04T05:00:00"
                    },
                    "untrInvstmtVal": 4529.520000,
                    "anulInvstmtRate": 5.4100,
                    "untrRedVal": 4452.140000,
                    "anulRedRate": 5.5300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-04T09:25:00",
                        "clsgDtTm": "2023-07-05T05:00:00"
                    },
                    "untrInvstmtVal": 4504.300000,
                    "anulInvstmtRate": 5.4500,
                    "untrRedVal": 4427.630000,
                    "anulRedRate": 5.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-05T09:25:00",
                        "clsgDtTm": "2023-07-06T05:00:00"
                    },
                    "untrInvstmtVal": 4485.760000,
                    "anulInvstmtRate": 5.4800,
                    "untrRedVal": 4409.610000,
                    "anulRedRate": 5.6000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-06T09:25:00",
                        "clsgDtTm": "2023-07-07T05:00:00"
                    },
                    "untrInvstmtVal": 4448.240000,
                    "anulInvstmtRate": 5.5400,
                    "untrRedVal": 4373.120000,
                    "anulRedRate": 5.6600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-07T09:25:00",
                        "clsgDtTm": "2023-07-10T05:00:00"
                    },
                    "untrInvstmtVal": 4480.690000,
                    "anulInvstmtRate": 5.4900,
                    "untrRedVal": 4404.730000,
                    "anulRedRate": 5.6100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-10T09:25:00",
                        "clsgDtTm": "2023-07-11T05:00:00"
                    },
                    "untrInvstmtVal": 4475.100000,
                    "anulInvstmtRate": 5.5000,
                    "untrRedVal": 4399.320000,
                    "anulRedRate": 5.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-11T09:25:00",
                        "clsgDtTm": "2023-07-12T05:00:00"
                    },
                    "untrInvstmtVal": 4457.180000,
                    "anulInvstmtRate": 5.5300,
                    "untrRedVal": 4381.910000,
                    "anulRedRate": 5.6500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-12T09:25:00",
                        "clsgDtTm": "2023-07-13T05:00:00"
                    },
                    "untrInvstmtVal": 4470.760000,
                    "anulInvstmtRate": 5.5100,
                    "untrRedVal": 4395.150000,
                    "anulRedRate": 5.6300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-13T09:25:00",
                        "clsgDtTm": "2023-07-14T05:00:00"
                    },
                    "untrInvstmtVal": 4471.590000,
                    "anulInvstmtRate": 5.5100,
                    "untrRedVal": 4395.990000,
                    "anulRedRate": 5.6300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-14T09:25:00",
                        "clsgDtTm": "2023-07-17T05:00:00"
                    },
                    "untrInvstmtVal": 4459.970000,
                    "anulInvstmtRate": 5.5300,
                    "untrRedVal": 4384.710000,
                    "anulRedRate": 5.6500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-17T09:25:00",
                        "clsgDtTm": "2023-07-18T05:00:00"
                    },
                    "untrInvstmtVal": 4448.380000,
                    "anulInvstmtRate": 5.5500,
                    "untrRedVal": 4373.460000,
                    "anulRedRate": 5.6700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-18T09:25:00",
                        "clsgDtTm": "2023-07-19T05:00:00"
                    },
                    "untrInvstmtVal": 4474.910000,
                    "anulInvstmtRate": 5.5100,
                    "untrRedVal": 4399.310000,
                    "anulRedRate": 5.6300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-19T09:25:00",
                        "clsgDtTm": "2023-07-20T05:00:00"
                    },
                    "untrInvstmtVal": 4469.620000,
                    "anulInvstmtRate": 5.5200,
                    "untrRedVal": 4394.200000,
                    "anulRedRate": 5.6400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-20T09:25:00",
                        "clsgDtTm": "2023-07-21T05:00:00"
                    },
                    "untrInvstmtVal": 4470.720000,
                    "anulInvstmtRate": 5.5200,
                    "untrRedVal": 4395.300000,
                    "anulRedRate": 5.6400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-21T09:25:00",
                        "clsgDtTm": "2023-07-24T05:00:00"
                    },
                    "untrInvstmtVal": 4510.590000,
                    "anulInvstmtRate": 5.4600,
                    "untrRedVal": 4434.140000,
                    "anulRedRate": 5.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-24T09:25:00",
                        "clsgDtTm": "2023-07-25T05:00:00"
                    },
                    "untrInvstmtVal": 4518.160000,
                    "anulInvstmtRate": 5.4500,
                    "untrRedVal": 4441.530000,
                    "anulRedRate": 5.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-25T09:25:00",
                        "clsgDtTm": "2023-07-26T05:00:00"
                    },
                    "untrInvstmtVal": 4532.230000,
                    "anulInvstmtRate": 5.4300,
                    "untrRedVal": 4455.260000,
                    "anulRedRate": 5.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-26T09:25:00",
                        "clsgDtTm": "2023-07-27T05:00:00"
                    },
                    "untrInvstmtVal": 4526.480000,
                    "anulInvstmtRate": 5.4400,
                    "untrRedVal": 4449.690000,
                    "anulRedRate": 5.5600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-27T09:25:00",
                        "clsgDtTm": "2023-07-28T05:00:00"
                    },
                    "untrInvstmtVal": 4514.610000,
                    "anulInvstmtRate": 5.4600,
                    "untrRedVal": 4438.170000,
                    "anulRedRate": 5.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-28T09:25:00",
                        "clsgDtTm": "2023-07-31T05:00:00"
                    },
                    "untrInvstmtVal": 4528.850000,
                    "anulInvstmtRate": 5.4400,
                    "untrRedVal": 4452.060000,
                    "anulRedRate": 5.5600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-07-31T09:25:00",
                        "clsgDtTm": "2023-08-01T05:00:00"
                    },
                    "untrInvstmtVal": 4555.980000,
                    "anulInvstmtRate": 5.4000,
                    "untrRedVal": 4478.500000,
                    "anulRedRate": 5.5200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-01T09:25:00",
                        "clsgDtTm": "2023-08-02T05:00:00"
                    },
                    "untrInvstmtVal": 4570.170000,
                    "anulInvstmtRate": 5.3800,
                    "untrRedVal": 4492.340000,
                    "anulRedRate": 5.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-02T09:25:00",
                        "clsgDtTm": "2023-08-03T05:00:00"
                    },
                    "untrInvstmtVal": 4577.830000,
                    "anulInvstmtRate": 5.3700,
                    "untrRedVal": 4499.810000,
                    "anulRedRate": 5.4900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-03T09:25:00",
                        "clsgDtTm": "2023-08-04T05:00:00"
                    },
                    "untrInvstmtVal": 4585.490000,
                    "anulInvstmtRate": 5.3600,
                    "untrRedVal": 4507.300000,
                    "anulRedRate": 5.4800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-04T09:25:00",
                        "clsgDtTm": "2023-08-07T05:00:00"
                    },
                    "untrInvstmtVal": 4593.410000,
                    "anulInvstmtRate": 5.3500,
                    "untrRedVal": 4515.040000,
                    "anulRedRate": 5.4700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-07T09:25:00",
                        "clsgDtTm": "2023-08-08T05:00:00"
                    },
                    "untrInvstmtVal": 4574.690000,
                    "anulInvstmtRate": 5.3800,
                    "untrRedVal": 4496.850000,
                    "anulRedRate": 5.5000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-08T09:25:00",
                        "clsgDtTm": "2023-08-09T05:00:00"
                    },
                    "untrInvstmtVal": 4608.810000,
                    "anulInvstmtRate": 5.3300,
                    "untrRedVal": 4530.100000,
                    "anulRedRate": 5.4500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-09T09:25:00",
                        "clsgDtTm": "2023-08-10T05:00:00"
                    },
                    "untrInvstmtVal": 4623.210000,
                    "anulInvstmtRate": 5.3100,
                    "untrRedVal": 4544.140000,
                    "anulRedRate": 5.4300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-10T09:25:00",
                        "clsgDtTm": "2023-08-11T05:00:00"
                    },
                    "untrInvstmtVal": 4637.670000,
                    "anulInvstmtRate": 5.2900,
                    "untrRedVal": 4558.240000,
                    "anulRedRate": 5.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-11T09:25:00",
                        "clsgDtTm": "2023-08-14T05:00:00"
                    },
                    "untrInvstmtVal": 4640.770000,
                    "anulInvstmtRate": 5.2900,
                    "untrRedVal": 4561.310000,
                    "anulRedRate": 5.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-14T09:25:00",
                        "clsgDtTm": "2023-08-15T05:00:00"
                    },
                    "untrInvstmtVal": 4635.200000,
                    "anulInvstmtRate": 5.3000,
                    "untrRedVal": 4555.910000,
                    "anulRedRate": 5.4200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-15T09:25:00",
                        "clsgDtTm": "2023-08-16T05:00:00"
                    },
                    "untrInvstmtVal": 4643.070000,
                    "anulInvstmtRate": 5.2900,
                    "untrRedVal": 4563.610000,
                    "anulRedRate": 5.4100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-16T09:25:00",
                        "clsgDtTm": "2023-08-17T05:00:00"
                    },
                    "untrInvstmtVal": 4650.970000,
                    "anulInvstmtRate": 5.2800,
                    "untrRedVal": 4571.330000,
                    "anulRedRate": 5.4000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-17T09:25:00",
                        "clsgDtTm": "2023-08-18T05:00:00"
                    },
                    "untrInvstmtVal": 4625.350000,
                    "anulInvstmtRate": 5.3200,
                    "untrRedVal": 4546.430000,
                    "anulRedRate": 5.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-18T09:25:00",
                        "clsgDtTm": "2023-08-21T05:00:00"
                    },
                    "untrInvstmtVal": 4626.980000,
                    "anulInvstmtRate": 5.3200,
                    "untrRedVal": 4548.050000,
                    "anulRedRate": 5.4400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-21T09:25:00",
                        "clsgDtTm": "2023-08-22T05:00:00"
                    },
                    "untrInvstmtVal": 4562.230000,
                    "anulInvstmtRate": 5.4200,
                    "untrRedVal": 4485.070000,
                    "anulRedRate": 5.5400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-22T09:25:00",
                        "clsgDtTm": "2023-08-23T05:00:00"
                    },
                    "untrInvstmtVal": 4543.920000,
                    "anulInvstmtRate": 5.4500,
                    "untrRedVal": 4467.280000,
                    "anulRedRate": 5.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-23T09:25:00",
                        "clsgDtTm": "2023-08-24T05:00:00"
                    },
                    "untrInvstmtVal": 4558.070000,
                    "anulInvstmtRate": 5.4300,
                    "untrRedVal": 4481.080000,
                    "anulRedRate": 5.5500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-24T09:25:00",
                        "clsgDtTm": "2023-08-25T05:00:00"
                    },
                    "untrInvstmtVal": 4546.270000,
                    "anulInvstmtRate": 5.4500,
                    "untrRedVal": 4469.630000,
                    "anulRedRate": 5.5700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-25T09:25:00",
                        "clsgDtTm": "2023-08-28T05:00:00"
                    },
                    "untrInvstmtVal": 4534.970000,
                    "anulInvstmtRate": 5.4700,
                    "untrRedVal": 4458.670000,
                    "anulRedRate": 5.5900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-28T09:25:00",
                        "clsgDtTm": "2023-08-29T05:00:00"
                    },
                    "untrInvstmtVal": 4519.120000,
                    "anulInvstmtRate": 5.5000,
                    "untrRedVal": 4443.290000,
                    "anulRedRate": 5.6200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-29T09:25:00",
                        "clsgDtTm": "2023-08-30T05:00:00"
                    },
                    "untrInvstmtVal": 4539.740000,
                    "anulInvstmtRate": 5.4700,
                    "untrRedVal": 4463.400000,
                    "anulRedRate": 5.5900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-30T09:25:00",
                        "clsgDtTm": "2023-08-31T05:00:00"
                    },
                    "untrInvstmtVal": 4547.530000,
                    "anulInvstmtRate": 5.4600,
                    "untrRedVal": 4471.020000,
                    "anulRedRate": 5.5800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-08-31T09:25:00",
                        "clsgDtTm": "2023-09-01T05:00:00"
                    },
                    "untrInvstmtVal": 4491.290000,
                    "anulInvstmtRate": 5.5500,
                    "untrRedVal": 4416.310000,
                    "anulRedRate": 5.6700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-01T09:25:00",
                        "clsgDtTm": "2023-09-04T05:00:00"
                    },
                    "untrInvstmtVal": 4468.160000,
                    "anulInvstmtRate": 5.5900,
                    "untrRedVal": 4393.830000,
                    "anulRedRate": 5.7100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-04T09:25:00",
                        "clsgDtTm": "2023-09-05T05:00:00"
                    },
                    "untrInvstmtVal": 4469.500000,
                    "anulInvstmtRate": 5.5900,
                    "untrRedVal": 4395.160000,
                    "anulRedRate": 5.7100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-05T09:25:00",
                        "clsgDtTm": "2023-09-06T05:00:00"
                    },
                    "untrInvstmtVal": 4439.620000,
                    "anulInvstmtRate": 5.6400,
                    "untrRedVal": 4366.110000,
                    "anulRedRate": 5.7600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-06T09:25:00",
                        "clsgDtTm": "2023-09-08T05:00:00"
                    },
                    "untrInvstmtVal": 4435.130000,
                    "anulInvstmtRate": 5.6500,
                    "untrRedVal": 4361.780000,
                    "anulRedRate": 5.7700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-08T09:25:00",
                        "clsgDtTm": "2023-09-11T05:00:00"
                    },
                    "untrInvstmtVal": 4437.210000,
                    "anulInvstmtRate": 5.6500,
                    "untrRedVal": 4363.840000,
                    "anulRedRate": 5.7700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-11T09:25:00",
                        "clsgDtTm": "2023-09-12T05:00:00"
                    },
                    "untrInvstmtVal": 4444.760000,
                    "anulInvstmtRate": 5.6400,
                    "untrRedVal": 4371.220000,
                    "anulRedRate": 5.7600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-12T09:25:00",
                        "clsgDtTm": "2023-09-13T05:00:00"
                    },
                    "untrInvstmtVal": 4451.060000,
                    "anulInvstmtRate": 5.6300,
                    "untrRedVal": 4377.380000,
                    "anulRedRate": 5.7500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-13T09:25:00",
                        "clsgDtTm": "2023-09-14T05:00:00"
                    },
                    "untrInvstmtVal": 4458.590000,
                    "anulInvstmtRate": 5.6200,
                    "untrRedVal": 4384.740000,
                    "anulRedRate": 5.7400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-14T09:25:00",
                        "clsgDtTm": "2023-09-15T05:00:00"
                    },
                    "untrInvstmtVal": 4466.140000,
                    "anulInvstmtRate": 5.6100,
                    "untrRedVal": 4392.130000,
                    "anulRedRate": 5.7300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-15T09:25:00",
                        "clsgDtTm": "2023-09-18T05:00:00"
                    },
                    "untrInvstmtVal": 4450.100000,
                    "anulInvstmtRate": 5.6400,
                    "untrRedVal": 4376.560000,
                    "anulRedRate": 5.7600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-18T09:25:00",
                        "clsgDtTm": "2023-09-19T05:00:00"
                    },
                    "untrInvstmtVal": 4433.060000,
                    "anulInvstmtRate": 5.6700,
                    "untrRedVal": 4360.000000,
                    "anulRedRate": 5.7900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-19T09:25:00",
                        "clsgDtTm": "2023-09-20T05:00:00"
                    },
                    "untrInvstmtVal": 4422.280000,
                    "anulInvstmtRate": 5.6900,
                    "untrRedVal": 4349.540000,
                    "anulRedRate": 5.8100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-20T09:25:00",
                        "clsgDtTm": "2023-09-21T05:00:00"
                    },
                    "untrInvstmtVal": 4436.120000,
                    "anulInvstmtRate": 5.6700,
                    "untrRedVal": 4363.060000,
                    "anulRedRate": 5.7900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-21T09:25:00",
                        "clsgDtTm": "2023-09-22T05:00:00"
                    },
                    "untrInvstmtVal": 4419.210000,
                    "anulInvstmtRate": 5.7000,
                    "untrRedVal": 4346.620000,
                    "anulRedRate": 5.8200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-22T09:25:00",
                        "clsgDtTm": "2023-09-25T05:00:00"
                    },
                    "untrInvstmtVal": 4427.990000,
                    "anulInvstmtRate": 5.6900,
                    "untrRedVal": 4355.220000,
                    "anulRedRate": 5.8100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-25T09:25:00",
                        "clsgDtTm": "2023-09-26T05:00:00"
                    },
                    "untrInvstmtVal": 4392.890000,
                    "anulInvstmtRate": 5.7500,
                    "untrRedVal": 4321.080000,
                    "anulRedRate": 5.8700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-26T09:25:00",
                        "clsgDtTm": "2023-09-27T05:00:00"
                    },
                    "untrInvstmtVal": 4358.270000,
                    "anulInvstmtRate": 5.8100,
                    "untrRedVal": 4287.400000,
                    "anulRedRate": 5.9300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-27T09:25:00",
                        "clsgDtTm": "2023-09-28T05:00:00"
                    },
                    "untrInvstmtVal": 4317.110000,
                    "anulInvstmtRate": 5.8800,
                    "untrRedVal": 4247.350000,
                    "anulRedRate": 6.0000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-28T09:25:00",
                        "clsgDtTm": "2023-09-29T05:00:00"
                    },
                    "untrInvstmtVal": 4300.930000,
                    "anulInvstmtRate": 5.9100,
                    "untrRedVal": 4231.620000,
                    "anulRedRate": 6.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-09-29T09:25:00",
                        "clsgDtTm": "2023-10-02T05:00:00"
                    },
                    "untrInvstmtVal": 4344.590000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 4274.180000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-02T09:25:00",
                        "clsgDtTm": "2023-10-03T05:00:00"
                    },
                    "untrInvstmtVal": 4334.160000,
                    "anulInvstmtRate": 5.8600,
                    "untrRedVal": 4264.060000,
                    "anulRedRate": 5.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-03T09:25:00",
                        "clsgDtTm": "2023-10-04T05:00:00"
                    },
                    "untrInvstmtVal": 4277.050000,
                    "anulInvstmtRate": 5.9600,
                    "untrRedVal": 4208.480000,
                    "anulRedRate": 6.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-04T09:25:00",
                        "clsgDtTm": "2023-10-05T05:00:00"
                    },
                    "untrInvstmtVal": 4284.290000,
                    "anulInvstmtRate": 5.9500,
                    "untrRedVal": 4215.560000,
                    "anulRedRate": 6.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-05T09:25:00",
                        "clsgDtTm": "2023-10-06T05:00:00"
                    },
                    "untrInvstmtVal": 4274.140000,
                    "anulInvstmtRate": 5.9700,
                    "untrRedVal": 4205.710000,
                    "anulRedRate": 6.0900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-06T09:25:00",
                        "clsgDtTm": "2023-10-09T05:00:00"
                    },
                    "untrInvstmtVal": 4282.280000,
                    "anulInvstmtRate": 5.9600,
                    "untrRedVal": 4213.680000,
                    "anulRedRate": 6.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-09T09:25:00",
                        "clsgDtTm": "2023-10-10T05:00:00"
                    },
                    "untrInvstmtVal": 4324.590000,
                    "anulInvstmtRate": 5.8900,
                    "untrRedVal": 4254.910000,
                    "anulRedRate": 6.0100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-10T09:25:00",
                        "clsgDtTm": "2023-10-11T05:00:00"
                    },
                    "untrInvstmtVal": 4355.620000,
                    "anulInvstmtRate": 5.8400,
                    "untrRedVal": 4285.160000,
                    "anulRedRate": 5.9600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-11T09:25:00",
                        "clsgDtTm": "2023-10-13T05:00:00"
                    },
                    "untrInvstmtVal": 4343.220000,
                    "anulInvstmtRate": 5.8600,
                    "untrRedVal": 4273.110000,
                    "anulRedRate": 5.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-13T09:25:00",
                        "clsgDtTm": "2023-10-16T05:00:00"
                    },
                    "untrInvstmtVal": 4345.400000,
                    "anulInvstmtRate": 5.8600,
                    "untrRedVal": 4275.260000,
                    "anulRedRate": 5.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-16T09:25:00",
                        "clsgDtTm": "2023-10-17T05:00:00"
                    },
                    "untrInvstmtVal": 4346.810000,
                    "anulInvstmtRate": 5.8600,
                    "untrRedVal": 4276.680000,
                    "anulRedRate": 5.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-17T09:25:00",
                        "clsgDtTm": "2023-10-18T05:00:00"
                    },
                    "untrInvstmtVal": 4295.450000,
                    "anulInvstmtRate": 5.9500,
                    "untrRedVal": 4226.690000,
                    "anulRedRate": 6.0700
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-18T09:25:00",
                        "clsgDtTm": "2023-10-19T05:00:00"
                    },
                    "untrInvstmtVal": 4331.930000,
                    "anulInvstmtRate": 5.8900,
                    "untrRedVal": 4262.250000,
                    "anulRedRate": 6.0100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-19T09:25:00",
                        "clsgDtTm": "2023-10-20T05:00:00"
                    },
                    "untrInvstmtVal": 4321.610000,
                    "anulInvstmtRate": 5.9100,
                    "untrRedVal": 4252.230000,
                    "anulRedRate": 6.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-20T09:25:00",
                        "clsgDtTm": "2023-10-23T05:00:00"
                    },
                    "untrInvstmtVal": 4283.190000,
                    "anulInvstmtRate": 5.9800,
                    "untrRedVal": 4214.860000,
                    "anulRedRate": 6.1000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-23T09:25:00",
                        "clsgDtTm": "2023-10-24T05:00:00"
                    },
                    "untrInvstmtVal": 4296.170000,
                    "anulInvstmtRate": 5.9600,
                    "untrRedVal": 4227.530000,
                    "anulRedRate": 6.0800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-24T09:25:00",
                        "clsgDtTm": "2023-10-25T05:00:00"
                    },
                    "untrInvstmtVal": 4280.250000,
                    "anulInvstmtRate": 5.9900,
                    "untrRedVal": 4212.060000,
                    "anulRedRate": 6.1100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-25T09:25:00",
                        "clsgDtTm": "2023-10-26T05:00:00"
                    },
                    "untrInvstmtVal": 4293.210000,
                    "anulInvstmtRate": 5.9700,
                    "untrRedVal": 4224.720000,
                    "anulRedRate": 6.0900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-26T09:25:00",
                        "clsgDtTm": "2023-10-27T05:00:00"
                    },
                    "untrInvstmtVal": 4329.560000,
                    "anulInvstmtRate": 5.9100,
                    "untrRedVal": 4260.150000,
                    "anulRedRate": 6.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-27T09:25:00",
                        "clsgDtTm": "2023-10-30T05:00:00"
                    },
                    "untrInvstmtVal": 4336.880000,
                    "anulInvstmtRate": 5.9000,
                    "untrRedVal": 4267.310000,
                    "anulRedRate": 6.0200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-30T09:25:00",
                        "clsgDtTm": "2023-10-31T05:00:00"
                    },
                    "untrInvstmtVal": 4320.680000,
                    "anulInvstmtRate": 5.9300,
                    "untrRedVal": 4251.570000,
                    "anulRedRate": 6.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-10-31T09:25:00",
                        "clsgDtTm": "2023-11-01T05:00:00"
                    },
                    "untrInvstmtVal": 4322.040000,
                    "anulInvstmtRate": 5.9300,
                    "untrRedVal": 4252.920000,
                    "anulRedRate": 6.0500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-01T09:25:00",
                        "clsgDtTm": "2023-11-03T05:00:00"
                    },
                    "untrInvstmtVal": 4335.480000,
                    "anulInvstmtRate": 5.9100,
                    "untrRedVal": 4266.050000,
                    "anulRedRate": 6.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-03T09:25:00",
                        "clsgDtTm": "2023-11-06T05:00:00"
                    },
                    "untrInvstmtVal": 4367.080000,
                    "anulInvstmtRate": 5.8600,
                    "untrRedVal": 4296.870000,
                    "anulRedRate": 5.9800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-06T09:25:00",
                        "clsgDtTm": "2023-11-07T05:00:00"
                    },
                    "untrInvstmtVal": 4338.960000,
                    "anulInvstmtRate": 5.9100,
                    "untrRedVal": 4269.520000,
                    "anulRedRate": 6.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-07T09:25:00",
                        "clsgDtTm": "2023-11-08T05:00:00"
                    },
                    "untrInvstmtVal": 4340.330000,
                    "anulInvstmtRate": 5.9100,
                    "untrRedVal": 4270.880000,
                    "anulRedRate": 6.0300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-08T09:25:00",
                        "clsgDtTm": "2023-11-09T05:00:00"
                    },
                    "untrInvstmtVal": 4365.250000,
                    "anulInvstmtRate": 5.8700,
                    "untrRedVal": 4295.190000,
                    "anulRedRate": 5.9900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-09T09:25:00",
                        "clsgDtTm": "2023-11-10T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4325.530000,
                    "anulRedRate": 5.9400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-10T09:25:00",
                        "clsgDtTm": "2023-11-13T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 4320.620000,
                    "anulRedRate": 5.9500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-13T09:25:00",
                        "clsgDtTm": "2023-11-14T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-14T09:25:00",
                        "clsgDtTm": "2023-11-16T05:00:00"
                    },
                    "untrInvstmtVal": 0.0,
                    "anulInvstmtRate": 0.0,
                    "untrRedVal": 0.0,
                    "anulRedRate": 0.0
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-16T09:25:00",
                        "clsgDtTm": "2023-11-17T05:00:00"
                    },
                    "untrInvstmtVal": 4314.870000,
                    "anulInvstmtRate": 5.7600,
                    "untrRedVal": 4243.070000,
                    "anulRedRate": 5.8800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-17T09:25:00",
                        "clsgDtTm": "2023-11-20T05:00:00"
                    },
                    "untrInvstmtVal": 4347.570000,
                    "anulInvstmtRate": 5.7100,
                    "untrRedVal": 4274.960000,
                    "anulRedRate": 5.8300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-20T09:25:00",
                        "clsgDtTm": "2023-11-21T05:00:00"
                    },
                    "untrInvstmtVal": 4330.620000,
                    "anulInvstmtRate": 5.7400,
                    "untrRedVal": 4258.470000,
                    "anulRedRate": 5.8600
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-21T09:25:00",
                        "clsgDtTm": "2023-11-22T05:00:00"
                    },
                    "untrInvstmtVal": 4301.700000,
                    "anulInvstmtRate": 5.7900,
                    "untrRedVal": 4230.350000,
                    "anulRedRate": 5.9100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-22T09:25:00",
                        "clsgDtTm": "2023-11-23T05:00:00"
                    },
                    "untrInvstmtVal": 4315.150000,
                    "anulInvstmtRate": 5.7700,
                    "untrRedVal": 4243.480000,
                    "anulRedRate": 5.8900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-23T09:25:00",
                        "clsgDtTm": "2023-11-24T05:00:00"
                    },
                    "untrInvstmtVal": 4310.490000,
                    "anulInvstmtRate": 5.7800,
                    "untrRedVal": 4238.970000,
                    "anulRedRate": 5.9000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-24T09:25:00",
                        "clsgDtTm": "2023-11-27T05:00:00"
                    },
                    "untrInvstmtVal": 4318.740000,
                    "anulInvstmtRate": 5.7700,
                    "untrRedVal": 4247.050000,
                    "anulRedRate": 5.8900
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-27T09:25:00",
                        "clsgDtTm": "2023-11-28T05:00:00"
                    },
                    "untrInvstmtVal": 4326.180000,
                    "anulInvstmtRate": 5.7600,
                    "untrRedVal": 4254.320000,
                    "anulRedRate": 5.8800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-28T09:25:00",
                        "clsgDtTm": "2023-11-29T05:00:00"
                    },
                    "untrInvstmtVal": 4345.820000,
                    "anulInvstmtRate": 5.7300,
                    "untrRedVal": 4273.490000,
                    "anulRedRate": 5.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-29T09:25:00",
                        "clsgDtTm": "2023-11-30T05:00:00"
                    },
                    "untrInvstmtVal": 4359.670000,
                    "anulInvstmtRate": 5.7100,
                    "untrRedVal": 4287.000000,
                    "anulRedRate": 5.8300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-11-30T09:25:00",
                        "clsgDtTm": "2023-12-01T05:00:00"
                    },
                    "untrInvstmtVal": 4354.940000,
                    "anulInvstmtRate": 5.7200,
                    "untrRedVal": 4282.420000,
                    "anulRedRate": 5.8400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-01T09:25:00",
                        "clsgDtTm": "2023-12-04T05:00:00"
                    },
                    "untrInvstmtVal": 4369.480000,
                    "anulInvstmtRate": 5.7000,
                    "untrRedVal": 4296.630000,
                    "anulRedRate": 5.8200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-04T09:25:00",
                        "clsgDtTm": "2023-12-05T05:00:00"
                    },
                    "untrInvstmtVal": 4377.040000,
                    "anulInvstmtRate": 5.6900,
                    "untrRedVal": 4304.020000,
                    "anulRedRate": 5.8100
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-05T09:25:00",
                        "clsgDtTm": "2023-12-06T05:00:00"
                    },
                    "untrInvstmtVal": 4372.280000,
                    "anulInvstmtRate": 5.7000,
                    "untrRedVal": 4299.420000,
                    "anulRedRate": 5.8200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-06T09:25:00",
                        "clsgDtTm": "2023-12-07T05:00:00"
                    },
                    "untrInvstmtVal": 4386.010000,
                    "anulInvstmtRate": 5.6800,
                    "untrRedVal": 4312.820000,
                    "anulRedRate": 5.8000
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-07T09:25:00",
                        "clsgDtTm": "2023-12-08T05:00:00"
                    },
                    "untrInvstmtVal": 4375.070000,
                    "anulInvstmtRate": 5.7000,
                    "untrRedVal": 4302.210000,
                    "anulRedRate": 5.8200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-08T09:25:00",
                        "clsgDtTm": "2023-12-11T05:00:00"
                    },
                    "untrInvstmtVal": 4358.940000,
                    "anulInvstmtRate": 5.7300,
                    "untrRedVal": 4286.540000,
                    "anulRedRate": 5.8500
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-11T09:25:00",
                        "clsgDtTm": "2023-12-12T05:00:00"
                    },
                    "untrInvstmtVal": 4366.460000,
                    "anulInvstmtRate": 5.7200,
                    "untrRedVal": 4293.900000,
                    "anulRedRate": 5.8400
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-12T09:25:00",
                        "clsgDtTm": "2023-12-13T05:00:00"
                    },
                    "untrInvstmtVal": 4373.180000,
                    "anulInvstmtRate": 5.7100,
                    "untrRedVal": 4300.470000,
                    "anulRedRate": 5.8300
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-13T09:25:00",
                        "clsgDtTm": "2023-12-14T05:00:00"
                    },
                    "untrInvstmtVal": 4442.940000,
                    "anulInvstmtRate": 5.6000,
                    "untrRedVal": 4368.420000,
                    "anulRedRate": 5.7200
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-14T09:25:00",
                        "clsgDtTm": "2023-12-15T05:00:00"
                    },
                    "untrInvstmtVal": 4469.610000,
                    "anulInvstmtRate": 5.5600,
                    "untrRedVal": 4394.410000,
                    "anulRedRate": 5.6800
                },
                {
                    "TrsrBdMkt": {
                        "opngDtTm": "2023-12-15T09:25:00",
                        "clsgDtTm": "2023-12-18T05:00:00"
                    },
                    "untrInvstmtVal": 4497.730000,
                    "anulInvstmtRate": 5.5200,
                    "untrRedVal": 4421.840000,
                    "anulRedRate": 5.6400
                }
            ]
        },
        "BizSts": {
            "cd": "0",
            "dtTm": "2023-12-17T06:40:10"
        }
    }
};

const cdValues = [];
const nmValues = [];
const cdValue = dados.response.TrsrBd.cd;
const nmValue = dados.response.TrsrBd.nm;
let index = 0;
while (index < dados.response.TrsrBd.PrcgLst.length) {
    const variavel = dados.response.TrsrBd.PrcgLst[index];
    console.log(variavel.TrsrBdMkt.opngDtTm + '-' + variavel.anulInvstmtRate);
    fetchTreasure(cdValue, variavel.TrsrBdMkt.opngDtTm, variavel.anulInvstmtRate);
    index++;
}

console.log("Valor de cd:", cdValue);
console.log("Valor de nm:", nmValue);