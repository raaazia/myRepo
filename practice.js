const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/myFirstApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Successfully connected to db...');
}).catch((ex) => {
    console.log(ex);
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User must have a phone number...']
    },
    email: {
        type: String,
        required: [true, 'Email required...'],
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    cgpa: Number,
    phone: {
        type: String,
        required: [true, 'User must have a phone number']
    }

});

const User = mongoose.model('User', userSchema);

app.use(express.json());

// const Users = [
//     {
//         id: 1,
//         name: 'raazia'
//     },
//     {
//         id: 2,
//         name: 'Nuzhat'
//     },
//     {
//         id: 3,
//         name: 'Namraa'
//     },
// ];

app.get('/user', async (req, res) => {
    const users =  await User.find();
    res.json({
        status: "Success",
        message: "This is data of all users...",
        // results: User.length,
        data: users
    });
});

app.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json({
        status: "Success",
        message: "This is data of all specified users...",
        data: user
    });
});


app.post('/user', async (req, res) => {
    console.log(req.body);
    const user = await User.create(req.body);
    // let user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     cgpa: req.body.cgpa,
    //     phone: req.body.phone
    // });
    // user = await user.save();
    res.status(201).json({
        status: 'success',
        message: "Successfully created",
        data: user
    });
});

app.put('/user/:id', async (req, res) => {
    console.log(req.body);
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        // for data of new user
        new: true
    });
    res.status(200).json({
        status: "Success",
        message: "user modified",
        data: user
    });
})

app.delete('/user/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send('User deleted...');
});





app.listen(3000, ()=> {
    console.log('Listening on port 3000');
});