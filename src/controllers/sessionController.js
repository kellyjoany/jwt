const jwt = require('jsonwebtoken');
const authConfig = require ('../config/auth');
const alunas = require("../model/alunas.json");

exports.getToken = (req, res) => {
  const { name } = req.body;
  const user = alunas.find(e => e.nome == name)

  if (!user) {
    return res.status(401).json({ error: 'user not found' });
  }

  const {id, nome} = user;
  
  try {
    return res.json({
      user: {
        id,
        nome,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  } catch (e) {
    return res.status(401).json({ error: 'erro' });
  }
}
/*  
class SessionController {
  store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validations fails' });
    } 

    const { nome } = req.body;
    const user = alunas.find(e => e.nome == nome)

    if (!user) {
      return res.status(401).json({ error: 'user not found' });
    }

    try {
      return res.json({
        user: {
          nome,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (e) {
      return res.status(401).json({ error: 'erro' });
    }
  }
}

export default new SessionController();
*/