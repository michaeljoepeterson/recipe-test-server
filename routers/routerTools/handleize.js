const handleize = function(title){
	let handle = title.toLowerCase().trim();
	let regex = /[^a-z0-9]+/gi;
	handle = handle.replace(regex,'-');

	return handle;
}

module.exports = {handleize};