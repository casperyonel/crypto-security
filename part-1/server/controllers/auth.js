const bcrypt = require('bcrypt')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      const {username, password} = req.body
      for (let i = 0; i < users.length; i++) {
        const existingPass = bcrypt.compareSync(password, users[i].passHash)
        if (users[i].username === username && existingPass === true) {
          let securedUser = {...users[i]}
          delete securedUser.passHash
          res.status(200).send(securedUser)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        const {username, email, firstName, lastName, password} = req.body
        const salt = bcrypt.genSaltSync()
        const passHash = bcrypt.hashSync(password, salt)
        let newUser = {
          username,
          email, 
          firstName,
          lastName,
          passHash,
        }
        let securedUser = {...newUser}
        delete securedUser.passHash
        users.push(newUser)
        console.log(users)
        res.status(200).send(securedUser)
    }
}