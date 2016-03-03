/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('harvester'); // -> 'a thing'
*/

module.exports = harvester;

function harvester(creep)
{
	var destId = creep.memory.destId;
	
	if (destId == null)
	{
		creep.room.memorizeSources();
	    
	    destId = creep.room.memory.sourceIds[0];
		creep.memory.destId = destId;
	}
	
	creep.moveTo(Game.getObjectById(destId));
	creep.harvest(Game.getObjectById(destId));
}
