/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn');
 * mod.thing == 'a thing'; // true
 */

module.exports = initialize();

function initialize()
{
	Spawn.prototype.doStuff = function()
	{
		var toSpawn = this.getQueue()[0];
		
		if (toSpawn != null)
		{
			if (this.canCreateCreep(toSpawn.body) == OK)
			{
				this.createCreep(toSpawn.body, null, toSpawn.memory);
				this.advanceQueue();
			}
		}
	};
	
	Spawn.prototype.queueCreep = function(body, memory)
	{
		if (this.memory.spawnQueue == null)
			this.memory.spawnQueue = [];
		
		this.memory.spawnQueue.push({body, memory});
	};
	
	Spawn.prototype.getQueue = function()
	{
		return this.memory.spawnQueue || [];
	};
	
	Spawn.prototype.advanceQueue = function()
	{
		this.memory.spawnQueue.splice(0, 1);
	};
}