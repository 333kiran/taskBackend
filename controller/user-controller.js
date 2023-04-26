import User from "../model/user-schema.js";

export const registerUser = async(req,res) => {
    try{
        const exist = await User.findOne({email:req.body.email});
        if(exist){
           return res.status(401).json({message:"email already register"});
        }

        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({message:user});

    }catch(error){
        res.status(500).json({message:error.message});
       
    }
}

export const loginUser = async(req,res) => {
    try{
        const email = req.body.email;
        const passward = req.body.passward;
        let user = await User.findOne({email:email,passward:passward});
        if(user) {
            res.status(200).json({data:user});
        }
        else{
            res.status(401).json("Invalid Login");
        }

    }catch(error){
        res.status(500).json({message:error.message});
    }
}