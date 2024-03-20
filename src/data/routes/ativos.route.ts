import express from 'express';
import {
  ControllerUpdateFornecedor,
  ControllerGetRamos,
  ControllerGetFornecedorId,
  ControllerGetFornecedor,
  ControllerInsertNovoFornecedor,
} from '../controllers/ativos.controller';

import multer from 'multer';
const router = express.Router();
router.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//router.get('/type', getGroupAtivos);
router.get('/get_ramos', upload.none(), ControllerGetRamos);
router.get('/get_fornecedores', upload.none(), ControllerGetFornecedor);
router.get('/get_fornecedores_id/:id', upload.none(), ControllerGetFornecedorId);
router.put('/update_fornecedor', upload.none(), ControllerUpdateFornecedor);
router.post('/novo_fornecedor', upload.none(), ControllerInsertNovoFornecedor);

export default router;