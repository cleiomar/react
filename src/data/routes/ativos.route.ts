import express from 'express';
import {
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
} from '../controllers/ativos.controller';

import multer from 'multer';
const router = express.Router();
router.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/type', getGroupAtivos);
router.get('/ativos/:type', getAllAtivos);
router.get('/categorias', ControllerGetCategorias);
router.get('/brokers', ControllerGetBrokers);
router.get('/transacoes', ControllerGetTransacoes);
router.get('/lista_ativos', ControllerGetListaAtivos);
router.get('/configs', ControllerGetConfigs);
router.put('/update_config', ControllerUpdateConfigs);
router.delete('/delete_transacao', ControllerDeleteTransacao);
router.get('/transacao_id', ControllerGetTransacaoId);
router.post('/nova_transacao', upload.none(), ControllerInsertTransacao);
router.post('/update_transacao', upload.none(), ControllerUpdateTransacao);

export default router;