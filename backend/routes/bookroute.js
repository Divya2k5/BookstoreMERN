import express from 'express';

const router=express.Router();
import{ example } from '../models/example.js';
//creating data or adding new book

router.post('/',async(request, response)=>{
    try{ 
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear 
        ) {
            return response.status(400).send({
                message:'send all req fields :title,author,publishYear'
            });
        }
        const newsample={
            title: request.body.title,
            author: request.body.author,
            publishYear:request.body.publishYear,
        };
        const sample = await example.create(newsample);
        return response.status(201).send(sample);
    }
        catch(error){
            console.log(error.message);
            response.status(500).send({message:error.message})

        }
    
});

//retrive data 

router.get('/',async(request, response)=>{
    try{
        const sample = await example.find({

        })
        return response.status(200).json(
           {count: sample.length,
            data:sample
           } 

        );
    }
    catch(error){
            console.log(error.message);
            response.status(500).send({message:error.message})

        }
});

//retrive data by id

router.get('/:id', async(request, response) => {
    
    
    try {
        const { id } = request.params;
        const sample = await example.findById(id);  // Changed this line
        console.log(id);
        
        return response.status(200).json({
            
            data: sample
        });
    }
    catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route updation 

router.put('/:id',async(request, response)=>{
    try{
      if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear 
        ) 
        {
            return response.status(400).send({
                message:'send all req fields :title,author,publishYear'
            });
        }
        const{ id }= request.params;
        const sample = await example.findByIdAndUpdate(id,request.body); 
        
        if (!sample){ return response.status(404).json({
            
            message:'Book not found'
        });}
         return response.status(200).send({message:'Book updates success'});
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({
            message:error.message
        });
    }
});



//deleting book / database
router.delete('/:id',async(request, response)=>{
    try{
        const{ id }= request.params;
        const result = await example.findByIdAndDelete(id); 
        if(!result){
            return response.status(404).json({message:'Book not found'

            });
        }
        return response.status(200).send({message:'Book deleted '

            });
    } catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
        
    }
});


export default router ;
