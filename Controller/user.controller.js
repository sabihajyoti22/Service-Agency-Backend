const userSchema = require("../Model/user.model")
const bcrypt = require("bcrypt")
const saltRounds = 10

const getUsers = async (req, res) => {
    try {
        const users = await userSchema.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const profile = async (req, res) => {
    try {
        const profile = await userSchema.findOne({ _id: req.params.id })
        if (profile) {
            res.status(200).json(profile)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const signUpUser = async (req, res) => {
    try {
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            const newUser = userSchema({
                username: req.body.username,
                useremail: req.body.useremail,
                password: hash
            })
            await newUser.save()
            res.status(201).json(newUser)
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const signInUser = async (req, res) => {
    try {
        const { useremail, password } = req.body
        const loginData = await userSchema.findOne({ useremail: useremail })
        if (loginData) {
            bcrypt.compare(password, loginData.password, function (err, result) {
                if (result) {
                    res.status(202).json(loginData)
                }
                else {
                    res.status(203).send(err)
                }
            })
        }
        else {
            res.status(204).send("Client not found")
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { getUsers, profile, signUpUser, signInUser }