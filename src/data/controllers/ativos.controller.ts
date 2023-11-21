import { Request, Response } from 'express';
import {
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
    const { type } = req.params;
    try {
        const data = await serviceGetAll(type);
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
        const { categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, userid, tipo, moeda } = req.body;
        const data = await serviceInsertTransacao(categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, userid, tipo, moeda);
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
        
        const data = await serviceGetListaAtivos(id);
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
        const { categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, id, tipo, moeda } = req.body;
        const data = await serviceUpdateTransacao(categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, id, tipo, moeda);
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


export {
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