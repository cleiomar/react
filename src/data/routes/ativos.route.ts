import express from 'express';
import {
  ControllerUpdateCnpj,
  ControllerGetListaFii,
  ControllerDeleteComunicado,
  ControllerUpdateFav,
  ControllerUpdateListaCVM,
  ControllerUpdateComunicadosB3,
  ControllerGetComunicadosB3,
  ControllerInsertComunicadosB3,
  ControllerInsertEmpresasB3,
  ControllerUpdateDrawDown,
  ControllerGetValoresAtivo,
  ControllerGetGraphIndicador,
  ControllerGetIndicadores,
  ControllerUpdateIndicador,
  ControllerCriarIndicador,
  ControllerGetBuscaAtivo,
  ControllerGetEmpresasRelacionadas,
  ControllerUpdateLista,
  ControllerGetProventos,
  ControllerGetAtivo,
  ControllerGetCotacao,
  ControllerInsertHistoricalDataPrice,
  ControllerInsertSubscriptions,
  ControllerInsertStockDividends,
  ControllerInsertCashDividends,
  ControllerInsertFinancialData,
  ControllerInsertDefaultKeyStatistics,
  ControllerInsertBalanceSheetHistory,
  ControllerInsertBalanceSheet,
  ControllerUpdateFii,
  ControllerInsertSetores,
  ControllerSummaryProfile,
  ControllerGetEstatisticas,
  ControllerUpdateEstatistica,
  ControllerGetRankingIndicesB3,
  ControllerGetListaIndicesB3,
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
router.get('/ativo/:ticker', ControllerGetAtivo);
router.get('/buscaativo/:codigo/:categoria', ControllerGetBuscaAtivo);
router.get('/valor_total_patrimonio/', ControllerValorTotalPatrimonio);
router.get('/get_relatorio/:period/:mode', ControllerGetRelatorio);
router.get('/get_total_ativos/:type', ControllerTotalAtivos);
router.get('/categorias', ControllerGetCategorias);
router.get('/percentual_categorias', ControllerGetPercentualCategorias);
router.get('/brokers', ControllerGetBrokers);
router.get('/transacoes', ControllerGetTransacoes);
router.get('/get_graph_indicador/:indicador/:ticker', ControllerGetGraphIndicador);
router.get('/lista_ativos', ControllerGetListaAtivos);
router.get('/lista_fii', ControllerGetListaFii);
router.get('/lista_ativos_cliente', ControllerGetListaAtivosCliente);
router.get('/configs', ControllerGetConfigs);
router.get('/transacao_id', ControllerGetTransacaoId);
router.get('/ativo_moeda', ControllerGetAtivoMoeda);
router.get('/treasure/:codigo/:periodo', ControllerGetTreasure);
router.get('/treasure_names', ControllerGetTreasureNames);
router.get('/lista_indices_b3', ControllerGetListaIndicesB3);
router.get('/get_estatisticas/:codigo', ControllerGetEstatisticas);
router.get('/cotacao/:ativo/:periodo/:periodicidade', ControllerGetCotacao);
router.get('/get_lista_indice/:indice', ControllerGetRankingIndicesB3);
router.get('/get_empresas_relacionadas/:codigo', ControllerGetEmpresasRelacionadas);
router.get('/proventos/:codigo/:somar/:periodo', ControllerGetProventos);
router.get('/criar_indicador/:codigo', ControllerCriarIndicador);
router.get('/get_indicadores/:ticker', ControllerGetIndicadores);
router.get('/get_valores_ativo/:ticker', ControllerGetValoresAtivo);
router.put('/adicionar_indicador', ControllerUpdateIndicador);
router.put('/update_drawdown/', ControllerUpdateDrawDown);
router.post('/insert_setores', ControllerInsertSetores);
router.post('/empresas_b3', ControllerInsertEmpresasB3);
router.post('/comunicados_b3', ControllerInsertComunicadosB3);
router.post('/get_comunicados_b3', ControllerGetComunicadosB3);
router.put('/update_comunicados_b3', ControllerUpdateComunicadosB3);
router.put('/update_fav', ControllerUpdateFav);
router.put('/update_cnpj', ControllerUpdateCnpj);
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
router.put('/update_estatistica', ControllerUpdateEstatistica);
router.post('/summaryProfile', upload.none(), ControllerSummaryProfile);
router.post('/update_fii', upload.none(), ControllerUpdateFii);
router.post('/balance_sheet_statements', upload.none(), ControllerInsertBalanceSheet);
router.post('/balance_sheet_history', upload.none(), ControllerInsertBalanceSheetHistory);
router.post('/default_key_statistics', upload.none(), ControllerInsertDefaultKeyStatistics);
router.post('/financialdata', upload.none(), ControllerInsertFinancialData);
router.post('/cashdividends', upload.none(), ControllerInsertCashDividends);
router.post('/stockdividends', upload.none(), ControllerInsertStockDividends);
router.post('/subscriptions', upload.none(), ControllerInsertSubscriptions);
router.post('/historicaldataprice', upload.none(), ControllerInsertHistoricalDataPrice);
router.put('/update_lista', ControllerUpdateLista);
router.put('/update_lista_codigo_cvm', ControllerUpdateListaCVM);
router.put('/delete_comunicados', ControllerDeleteComunicado);

export default router;