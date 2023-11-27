import { Request, Response } from 'express';
import {
    serviceConfigPercentual,
    serviceGetPercentualCategoria,
    serviceGetListaAtivosCliente,
    serviceAdicionarHistoricoCliente,
    serviceAdicionarHistorico,
    serviceUpdateDadosB3,
    serviceDadosB3,
    serviceGetAtivoMoeda,
    serviceGetValorTotalPatrimonio,
    serviceGetTotalAtivos,
    serviceUpdateTransacao,
    serviceGetTransacaoId,
    serviceDeleteTransacao,
    serviceUpdateConfigs,
    serviceGetConfigs,
    serviceGetListaAtivos,
    serviceGetTransacoes,
    serviceInsertTransacao,
    serviceGetBrokers,
    serviceGetCategoria,
    serviceGetGroup,
    serviceGetAll,
  } from '../services/ativos.service';

const getAllAtivos = async (req: Request, res: Response): Promise<void> => {
    const { type, graph } = req.params;
    try {
        const data = await serviceGetAll(type, graph);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getGroupAtivos = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await serviceGetGroup();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetCategorias = async (req: Request, res: Response): Promise<void> => {

    try {
        const data = await serviceGetCategoria();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetPercentualCategorias = async (req: Request, res: Response): Promise<void> => {
    const soma : any = req.query.soma;

    try {
        const data = await serviceGetPercentualCategoria(soma);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetBrokers = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await serviceGetBrokers();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerInsertTransacao = async (req: Request, res: Response): Promise<void> => {
    try {
        const { categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, userid, tipo  } = req.body;
        const data = await serviceInsertTransacao(categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, userid, tipo);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerGetTransacoes = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await serviceGetTransacoes();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerGetListaAtivos = async (req: Request, res: Response): Promise<void> => {
    try {
        const id : any = req.query.id;
        const b3 : any = req.query.b3;
        
        const data = await serviceGetListaAtivos(id, b3);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetConfigs = async (req: Request, res: Response): Promise<void> => {
    try {
        const id : any = req.query.id;
        
        const data = await serviceGetConfigs(id);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerUpdateConfigs = async (req: Request, res: Response): Promise<void> => {
    try {
        const hide_values : any = req.body.hide_values;
        
        const data = await serviceUpdateConfigs(hide_values);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerDeleteTransacao = async (req: Request, res: Response): Promise<void> => {
    try {
        const id : any = req.body.id;
        
        const data = await serviceDeleteTransacao(id);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetTransacaoId = async (req: Request, res: Response): Promise<void> => {
    try {
        const id : any = req.query.id;
        
        const data = await serviceGetTransacaoId(id);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerUpdateTransacao = async (req: Request, res: Response): Promise<void> => {
    try {
        const { categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, id, tipo } = req.body;
        const data = await serviceUpdateTransacao(categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, id, tipo);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerTotalAtivos = async (req: Request, res: Response): Promise<void> => {
    const { type } = req.params;
    try {
        const data = await serviceGetTotalAtivos(type);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerValorTotalPatrimonio = async (req: Request, res: Response): Promise<void> => {
    const { type } = req.params;
    try {
        const data = await serviceGetValorTotalPatrimonio(type);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetAtivoMoeda = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.query;
    try {
        const data = await serviceGetAtivoMoeda(id);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerDadosB3 = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.query;
    try {
        const data = await serviceDadosB3(id);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerUpdateDadosB3 = async (req: Request, res: Response): Promise<void> => {
    try {
        const ticker : any = req.body.ticker;
        const valor : any = req.body.valor;
        
        const data = await serviceUpdateDadosB3(ticker, valor);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerAdicionarHistorico = async (req: Request, res: Response): Promise<void> => {
    try {
        const lista_ativo_id : any = req.body.lista_ativo_id;
        const valor : any = req.body.valor;
        
        const data = await serviceAdicionarHistorico(lista_ativo_id, valor);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerAdicionarHistoricoCliente = async (req: Request, res: Response): Promise<void> => {
    try {
        const lista_ativo_id : any = req.body.lista_ativo_id;
        const quantidade : any = req.body.quantidade;
        
        const data = await serviceAdicionarHistoricoCliente(lista_ativo_id, quantidade);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetListaAtivosCliente = async (req: Request, res: Response): Promise<void> => {
    try {
        const id : any = req.query.id;
        const b3 : any = req.query.b3;
        
        const data = await serviceGetListaAtivosCliente(id, b3);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerConfigPercentual = async (req: Request, res: Response): Promise<void> => {
    const porcentagemAcao : any = req.body.porcentagemAcao;
    const porcentagemFII : any = req.body.porcentagemFII;
    const porcentagemFIAgro : any = req.body.porcentagemFIAgro;
    const porcentagemETFN : any = req.body.porcentagemETFN;
    const porcentagemETFI : any = req.body.porcentagemETFI;
    const porcentagemCriptomoedas : any = req.body.porcentagemCriptomoedas;
    const porcentagemFixa : any = req.body.porcentagemFixa;
    const porcentagemCaixa : any = req.body.porcentagemCaixa;
    const limit : any = req.body.limit;

    try {
        const data = await serviceConfigPercentual(porcentagemAcao, porcentagemFII, porcentagemFIAgro, porcentagemETFN, porcentagemETFI, porcentagemCriptomoedas, porcentagemFixa, porcentagemCaixa, limit);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export {
    ControllerConfigPercentual,
    ControllerGetPercentualCategorias,
    ControllerGetListaAtivosCliente,
    ControllerAdicionarHistoricoCliente,
    ControllerAdicionarHistorico,
    ControllerUpdateDadosB3,
    ControllerDadosB3,
    ControllerGetAtivoMoeda,
    ControllerValorTotalPatrimonio,
    ControllerTotalAtivos,
    ControllerUpdateTransacao,
    ControllerGetTransacaoId,
    ControllerDeleteTransacao,
    ControllerUpdateConfigs,
    ControllerGetConfigs,
    ControllerGetListaAtivos,
    ControllerGetTransacoes,
    ControllerInsertTransacao,
    ControllerGetBrokers,
    ControllerGetCategorias,
    getGroupAtivos,
    getAllAtivos,
  };