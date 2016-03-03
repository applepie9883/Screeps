/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('prototypes'); // -> 'a thing'
*/

module.exports = initializePrototypes();

function initializePrototypes()
{
	Room.prototype.memorizeSources = function(shouldOverwrite)
    {
        shouldOverwrite = shouldOverwrite || false;
        
        if (shouldOverwrite || this.memory sources == null)
	    {
	        console.log(`${this.name}: memorizing sources`);
	        var sourcesFound = this.find(FIND_SOURCES);
	        
	        this.memory.sources = [];
	        
	        for (var i = 0; i < sourcesFound.length; i++)
	        {
	        	this.memory.sources[i] = {id:sourcesFound[i].id, x:sourcesFound[i].pos.x, y:sourcesFound[i].pos.y};
	        }
	        
	        console.log(`Done: ${this.memory.sources}`);
	        
	        return true;
	    }
	    
	    return false;
    };
    
	/*
	Creep.prototype.setPath_m = function(path)
	{
		this.memory.destPath = path;
	};
	
	Creep.prototype.moveByPath_m = function()
	{
		var destPath = this.memory.destPath;
		
		if (destPath != null)
		{
			var rtn = this.moveByPath_e(this.memory.destPath);
			
			if (destPath.length == 0)
			{
				destPath = null;
			}
			else
			{
				destPath.splice(0, 1);
			}
			return rtn;
		}
	};
	
	Creep.prototype.moveByPath_e = function(path)
	{
		
	};
	*/
}
