/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('harvester'); // -> 'a thing'
*/

module.exports = function(creep)
{
	var destID = creep.memory.destID;
	
	if (destID == null)
	{
		destID = creep.room.find(FIND_SOURCES).ID;
	}
	
	creep.moveTo(Game.getObjectById(destID));
	creep.harvest(Game.getObjectById(destID));
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
