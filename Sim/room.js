/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('room'); // -> 'a thing'
*/

module.exports = initialize();

function initialize()
{
	Room.prototype.findSources = function()
    {
        if (this.memory.sources == null)
	    {
	        console.log(`${this.name}: memorizing sources`);
	        var sourcesFound = this.find(FIND_SOURCES);
	        
	        this.memory.sources = [];
	        
	        for (var i = 0; i < sourcesFound.length; i++)
	        {
	        	this.memory.sources[i] = {id:sourcesFound[i].id, x:sourcesFound[i].pos.x, y:sourcesFound[i].pos.y};
	        }
	    }
	    
	    return this.memory.sources;
    };
}