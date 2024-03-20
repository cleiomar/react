import { Request, Response } from 'express';
import {
    serviceUpdateFornecedor,
    serviceGetRamos,
    serviceGetFornecedorId,
    serviceInsertNovoFornecedor,
    serviceGetFornecedor,
} from '../services/ativos.service';
import { Console } from 'console';

const ControllerInsertNovoFornecedor = async (req: Request, res: Response): Promise<void> => {
    const { nome, responsavel, cpf, email, cnpj, ie, ramo, cep, endereco, cidade, setor, estado, vendedor, tel_vendas, tel_financeiro, whatsapp, produtos, avaliacao } = req.body;
    try {
        const data = await serviceInsertNovoFornecedor(nome, responsavel, cpf, email, cnpj, ie, ramo, cep, endereco, cidade, setor, estado, vendedor, tel_vendas, tel_financeiro, whatsapp, produtos, avaliacao);
        res.json({ success: true, ...data });
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerGetFornecedor = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await serviceGetFornecedor();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerGetFornecedorId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
         const data = await serviceGetFornecedorId(id);
         res.json(data);
     } catch (error) {
         console.error('Erro ao obter ativos:', error);
         res.status(500).json({ message: 'Internal Server Error' });
     }
 };


 const ControllerGetRamos = async (req: Request, res: Response): Promise<void> => {
    try {
         const data = await serviceGetRamos();
         res.json(data);
     } catch (error) {
         console.error('Erro ao obter ativos:', error);
         res.status(500).json({ message: 'Internal Server Error' });
     }
 };


 const ControllerUpdateFornecedor = async (req: Request, res: Response): Promise<void> => {
    const { nome, responsavel, cpf, email, cnpj, ie, ramo, cep, endereco, cidade, setor, estado, vendedor, tel_vendas, tel_financeiro, whatsapp, produtos, avaliacao, id } = req.body;
    try {
        const data = await serviceUpdateFornecedor(nome, responsavel, cpf, email, cnpj, ie, ramo, cep, endereco, cidade, setor, estado, vendedor, tel_vendas, tel_financeiro, whatsapp, produtos, avaliacao, id);
        res.json({ success: true, ...data });
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export {
    ControllerUpdateFornecedor,
    ControllerGetRamos,
    ControllerGetFornecedorId,
    ControllerGetFornecedor,
    ControllerInsertNovoFornecedor,
};