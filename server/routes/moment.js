const express = require('express');
const MomentService = require('../service/momentService');
const momentService = new MomentService();

const momentRoute = express.Router();

momentRoute.get('/getList', async (req, res) => {
  const { query: { name } } = req;
  const moments = await momentService.getListByName(name);
  res.send(moments);
});

module.exports = momentRoute;