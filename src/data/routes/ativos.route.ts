import express from 'express';
import {
  ControllerUpdateTreasure,
  ControllerGetTreasureNames,
  ControllerGetTreasure,
  ControllerInsertHistoricoTreasure,
  ControllerInsertTreasure,
  ControllerCurrencyUpdate,
  ControllerGetRelatorio,
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
} from '../controllers/ativos.controller';

import multer from 'multer';
const router = express.Router();
router.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/type', getGroupAtivos);
router.get('/ativos/:type/:graph', getAllAtivos);
router.get('/valor_total_patrimonio/', ControllerValorTotalPatrimonio);
router.get('/get_relatorio/:period/:mode', ControllerGetRelatorio);
router.get('/get_total_ativos/:type', ControllerTotalAtivos);
router.get('/categorias', ControllerGetCategorias);
router.get('/percentual_categorias', ControllerGetPercentualCategorias);
router.get('/brokers', ControllerGetBrokers);
router.get('/transacoes', ControllerGetTransacoes);
router.get('/lista_ativos', ControllerGetListaAtivos);
router.get('/lista_ativos_cliente', ControllerGetListaAtivosCliente);
router.get('/configs', ControllerGetConfigs);
router.get('/transacao_id', ControllerGetTransacaoId);
router.get('/ativo_moeda', ControllerGetAtivoMoeda);
router.get('/treasure/:codigo/:periodo', ControllerGetTreasure);
router.get('/treasure_names', ControllerGetTreasureNames);
//router.get('/atualizar_dados_b3', ControllerDadosB3);
router.delete('/delete_transacao', ControllerDeleteTransacao);
router.put('/update_config', ControllerUpdateConfigs);
router.put('/adicionar_historico', ControllerAdicionarHistorico);
router.put('/adicionar_historico_cliente', ControllerAdicionarHistoricoCliente);
router.put('/atualizar_dados_b3', ControllerUpdateDadosB3);
router.post('/nova_transacao', upload.none(), ControllerInsertTransacao);
router.post('/update_transacao', upload.none(), ControllerUpdateTransacao);
router.put('/config_percentual', upload.none(), ControllerConfigPercentual);
router.put('/currency_update', upload.none(), ControllerCurrencyUpdate);
router.post('/insert_treasure', upload.none(), ControllerInsertTreasure);
router.post('/insert_historico_treasure', upload.none(), ControllerInsertHistoricoTreasure);
router.put('/update_treasure', ControllerUpdateTreasure);

export default router;