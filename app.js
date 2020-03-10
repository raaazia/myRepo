const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/myFirstApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
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
        unique: true
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

// app.get('/user', (req, res) => {
//     res.json({
//         status: "Success",
//         message: "This is data of all users...",
//         data: Users
//     });
// });

// app.get('/user/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     // why we pass current
//     const user = Users.find((current) => {
//         return current.id === id;
//     });
//     res.json({
//         status: "Success",
//         message: "This is data of all specified users...",
//         data: user
//     });
// });


app.post('/user', async (req, res) => {
    let user = req.body;
    const user = await User.create(req.body);
    Users.push(user);
    res.status(201).json({
        status: 'success',
        message: "Successfully created",
        data: user
    })
});

// app.delete('/user/:id', (req, res) => {
//     let id = parseInt(req.params.id);
//     const userIndex = Users.findIndex((current) => {
//         return current.id === id;
//     });

//     Users.splice(userIndex, 1);
//     res.status(200).json({
//         status: "Success",
//         message: "user deleted",
//         data: Users
//     });
// });



// app.put('/user/:id', (req, res) => {
//     const id = parseInt(req.params.id);
    
// })



app.listen(3000, ()=> {
    console.log('Listening on port 3000');
});