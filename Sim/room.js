/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('room'); // -> 'a thing'
*/

module.exports = initialize();
// TODO: update stuff when creeps die
function initialize()
{
	if (!Room.prototype.hasOwnProperty('spawn'))
	{
		Object.defineProperty(Room.prototype, 'spawn', {
		get: function() {return Game.getObjectById(this.findSpawn());}
		});
	}

	Room.prototype.doStuff = function()
    {
		this.queueHarvesters();
		this.queueGatherers();
    };
	
	Room.prototype.queueHarvesters = function()
	{
		var sources = this.findSources();
		
		for (var i = 0; i < sources.length; i++)
		{
			var currentSource = sources[i];
			
			if (currentSource.needs_harvester == true)
			{
				// TODO: modify the existing code to allow spawning of creeps at a spawn outside of the current room, and to allow for spawning creeps with different body parts
				
				this.spawn.queueCreep([WORK, MOVE], {role:'harvester', destId:currentSource.id});
				
				currentSource.needs_harvester = false;
				
				return;
			}
		}
	};
	
	Room.prototype.queueGatherers = function()
	{
		var sources = this.findSources();
		
		for (var i = 0; i < sources.length; i++)
		{
			var currentSource = sources[i];
			
			if (currentSource.needs_harvester == false && currentSource.needs_gatherer == true)
			{
				// TODO: modify the existing code to allow spawning of creeps at a spawn outside of the current room, and to allow for spawning creeps with different body parts
				
				this.spawn.queueCreep([CARRY, CARRY, MOVE], {role:'gatherer'});
				
				currentSource.needs_gatherer = false;
				
				return;
			}
		}
	};
	
	Room.prototype.findSources = function()
    {
        if (this.memory.sources == null)
	    {
	        console.log(`${this.name}: memorizing sources`);
	        var sourcesFound = this.find(FIND_SOURCES);
	        
	        this.memory.sources = [];
	        
	        for (var i = 0; i < sourcesFound.length; i++)
	        {
				var lairsInRange = sourcesFound[i].pos.findInRange(FIND_HOSTILE_STRUCTURES, 5, { filter: { structureType: STRUCTURE_KEEPER_LAIR } });
					
				if (lairsInRange.length <= 0)
				{
					this.memory.sources.push({id:sourcesFound[i].id, x:sourcesFound[i].pos.x, y:sourcesFound[i].pos.y, needs_harvester:true, harvester_id:null, needs_gatherer:true, gatherer_id:null});
				}
	        }
	    }
	    
	    return this.memory.sources;
    };
	
	Room.prototype.findSpawn = function()
	{
		if (this.memory.spawn == null)
		{
			console.log(`${this.name}: memorizing spawn`);
			this.memory.spawn = this.find(FIND_MY_SPAWNS)[0].id;
		}
		
		return this.memory.spawn;
	};
}