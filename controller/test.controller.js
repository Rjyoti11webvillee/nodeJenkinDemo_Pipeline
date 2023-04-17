greetings = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webvillee'});
};

greetings_1 = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Jenkins'});
};

module.exports = {
    greetings, 
    greetings_1
}
