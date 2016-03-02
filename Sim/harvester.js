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
		destId = creep.room.find(FIND_SOURCES)[0].id;
		creep.memory.destId = destId;
	}
	
	creep.moveTo(Game.getObjectById(destId));
	creep.harvest(Game.getObjectById(destId));
}
