const router = require("express").Router();

const Users = require("./users-model.js");

const { restricted } = require("../auth/auth-middleware");

router.get("/:user_id", restricted, (req, res, next) => {
  Users.findById(req.params.user_id)
    .then((user) => res.status(200).json(user))
    .catch(next);
});

router.get("/:user_id/user_invoices", restricted, (req, res, next) => {
  Users.getUserInvoices(req.params.user_id)
    .then((invoices) => res.status(200).json(invoices))
    .catch(next);
});

router.put("/:user_id", restricted, (req, res, next) => {
  Users.editUser(req.params.user_id, req.body)
    .then((updatedUser) => res.status(200).json(updatedUser))
    .catch(next);
});

module.exports = router;
