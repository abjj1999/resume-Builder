const User = require('../models/User')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  const { email, username, password } = req.body
  console.log(req.body)
  try {
    // const user = await User.create({ username, password });
    const existEmail = await User.findOne({ email })
    if (existEmail) {
      return res.status(400).json({ error: 'Email already exists' })
    }
    const existUsername = await User.findOne({ username })
    if (existUsername) {
      return res.status(400).json({ error: 'Username already exists' })
    }

    const hashPw = await bcrypt.hash(password, 10)
    const user = new User({ username, email, password: hashPw })
    try {
      await user.save()
      res.status(201).json({ message: 'User created successfully', ok: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  console.log(req.body)
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: 'Email does not exist' })
    }
    console.log('found')
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ error: 'Password is incorrect' })
    }
    res.status(200).json({ message: 'Login successful', user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  register,
  login,
}
