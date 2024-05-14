const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()


app.use(express.json())

//routes
app.get('/', (req,res)=>{
  res.send('Hello NODE API')
})


app.get('/blog',(req,res)=>{
  res.send('Hello Blog ')
})


app.post('/product', async (req,res)=>{
  try{
    const product = await Product.create(req.body)
    res.status(500).json(product);

  } catch (error){
  console.log(error.message);
  res.status(500).json({message: error.message})
}
})


mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://virginiah:virg2023@project.dpdto6z.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Project')
.then(()=>{
  console.log('connected to MongoDB')
  app.listen(3000,()=>{
    console.log(`Node Api app is running on port 3000`)
  }); 
}).catch((error)=>{
  console.error(`Error connecting to MongoDB`,error)
})