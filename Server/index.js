const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Crud = require('./Models/Crud');
const cors = require('cors');


app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://chaitanya123:chaitanya123@cluster0.bck4ey7.mongodb.net/crud?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });







app.post('/addItem',async (req, res) => {
    
const foodName=req.body.food;
const date=req.body.date;
    const crud= new Crud({

        foodName: foodName,
        dateSinceAte: date
    })
    try{
        await crud.save();
        res.send('Inserted data');
    }catch(err){
        console.log(err);
    }

}
);
app.get('/read', async (req, res) => {
    
    const results = await Crud.find();
    res.send(results);
    
}
);

app.delete('/delete/:id',async (req, res) => {
        
        const id=req.params.id;
        await Crud.findByIdAndRemove(id).exec();
        res.send('deleted');  
});


app.listen(3001, () => console.log('Server running on port 3001'));