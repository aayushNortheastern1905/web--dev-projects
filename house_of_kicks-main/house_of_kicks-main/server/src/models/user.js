const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Sneaker = require('./sneaker')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!validator.isAlpha(value)) {
                throw new Error('First Name is Invalid')
            }
        }
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!validator.isAlpha(value)) {
                throw new Error('Last Name is Invalid')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is Invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(value) {
            if(!validator.isStrongPassword(value)) {
                throw new Error('Password is too weak. Try a stronger password')
            }
        }
    },
    phone: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ], 
    profilePicture: {
        type: Buffer
    },
    cart: [
        {
            sneaker: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Sneaker',
            },
        }
    ]

}, {
    timestamps: true
})

// Token generation
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'houseOfKicks')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

// Hiding some data 
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.tokens

    return userObject
}

// Logging in the user 
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if(!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Middleware that hashes the password on every change including the first time
userSchema.pre('save', async function(next) {
    const user = this

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

// Middleware for removing all data related to the user when user deletes his account
userSchema.pre('remove', async function(next) {
    const user = this 

    //TODO: Remove all the data related to this user 
})

const User = mongoose.model('User', userSchema)

module.exports = User