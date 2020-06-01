const router = require('express').Router();
const verify = require('./verifyToken');
const Task = require('../model/Task');

// Get back all the tasks
router.get('/', verify,  async (req, res) => {
    try{
        const { order } = req.query;
        const tasks = await Task.find({'user':req.user._id}).sort({priority: order});

        res.json(tasks);
    }catch(err){
        res.json({message: err});
    }
});

//Creating a new task
router.post('/create', verify, async (req, res) => {
        const task = new Task({
            user: req.user,
            name: req.body.name,
            priority: req.body.priority
        })
        try{
            const savedTask = await task.save();
            res.send(savedTask);
        }catch(err){
            res.status(400).send(err);
        }
});

router.delete('/', verify, async (req, res) =>{
    const _id = req.body;

    const task = await Task.findOne(_id);
    if(!task) return res.status(400).send('Tarefa inexistente');

    try{
        await Task.deleteOne(_id);
        res.json({success: true});
    }catch(err){
        return res.json({err: err.message});
    }

});

//rename a task
router.put('/',verify, async (req, res) =>{

    try{
        const { _id, name } = req.body;
        await Task.findOneAndUpdate({_id}, {'name' : name});
        task = await Task.findById({_id});
        return res.json({sucess: true, task});
    }catch(err){
        return res.json({err: err.message});
    }
});

module.exports = router;