var vcard = [];

exports.create = function(req, res){
	var person = {
		name:""
		tel:""
	}

	person.tel = req.query.tel;
	person.name = req.query.name;
	vcard.push(person);
    res.end();

};

exports.read = function(req, res){
	res.send(person);
    
    res.end();

};

exports.update = function(req, res){
	person.tel = req.query.tel;

    res.end();

};

exports.delete = function(req, res){
	
    
    res.end();

};