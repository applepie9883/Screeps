/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('creep'); // -> 'a thing'
*/

module.exports = initialize();

function initialize()
{
	Creep.prototype.work = function()
    {
        if (this.memory.role == 'harvester')
		{
			this.doHarvester();
		}
		else if (this.memory.role == 'gatherer')
		{
			this.doGatherer();
		}
		else if (this.memory.role == 'builder')
		{
			this.doBuilder();
		}
		else if (this.memory.role == 'guarder')
		{
			this.doGuarder();
		}
		else if (this.memory.role == 'dead')
		{
			this.suicide();
			this.memory = null;
		}
    };
	
	Creep.prototype.doHarvester = function()
	{
		var destId = this.memory.destId;
	
		if (destId == null)
		{
			destId = this.room.findSources()[0].id;
			this.memory.destId = destId;
		}
		
		this.moveToAndHarvest(Game.getObjectById(destId));
	};
	
	Creep.prototype.moveToAndHarvest = function(source)
	{
		this.moveTo(source);
		this.harvest(source);
	};
	
	Creep.prototype.doGatherer = function()
	{
		if (this.carry.energy < this.carryCapacity)
		{
			var energies = this.room.find(FIND_DROPPED_ENERGY);
			this.moveTo(energies[0]);
			this.pickup(energies[0]);
		}
		else
		{
			this.moveTo(Game.spawns.Spawn1);
			this.transferEnergy(Game.spawns.Spawn1);
		}
	};
	
	Creep.prototype.doGuarder = function()
	{
		var targets = this.room.find(FIND_HOSTILE_CREEPS);
	
		if (targets.length)
		{
		this.moveTo(targets[0]);
		this.attack(targets[0]);
		}
		else
		{
			this.moveTo(Game.spawns.Spawn1);
		}
		
		if (!this.getActiveBodyparts(MOVE))
		{
			this.suicide();
		}
	};
	
	Creep.prototype.doBuilder = function()
	{
		if(this.carry.energy == 0)
		{
			this.moveTo(Game.spawns.Spawn1);
			Game.spawns.Spawn1.transferEnergy(this);
		}
		else
		{
			var targets = this.room.find(FIND_CONSTRUCTION_SITES);
			
			if(targets.length)
			{
				this.moveTo(targets[0]);
				this.build(targets[0]);
			}
		}
	};
}
