const NormalAuth = (req,res,next) => {
    if(req.session.loggedin){
        next();
    }else{
        return res.redirect("/login")
    }
   
}

export default NormalAuth;
