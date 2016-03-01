/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('harvester'); // -> 'a thing'
*/

module.exports = function(creep)
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










/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('harvester'); // -> 'a thing'
*/

/*module.exports = function(creep)
{
	if (creep.harvest(Game.getObjectById(creep.memory.destID)) != OK)
	{
		var didMove = creep.moveTo(Game.getObjectById(creep.memory.destID));
		
		if (didMove != OK && didMove != ERR_TIRED)
		{
			var sources = creep.room.find(FIND_SOURCES);
			creep.memory.destID = sources[0].id;
		}
	}
}*/
