const { Router } = require('express')
const Company = require('./model')

const router = new Router()

router.get('/companies', (req, res, next) => {
    Company
      .findAll()
      .then(companies => {
        res.send({ companies })
      })
      .catch(error => next(error))
  })

  router.get('/companies/:id', (req, res, next) => {
      const id = req.params.id
      Company
        .findByID(id)
        .then(company => {
            if (!company) {
              return res.status(404).send({
                message: `Company does not exist`
              })
            }
            return res.send(company)
          })
  })