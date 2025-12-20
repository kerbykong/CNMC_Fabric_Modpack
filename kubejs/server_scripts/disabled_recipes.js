ServerEvents.recipes(event => {
	//Remove original blaze cake base recipe, we replace it with 4x output in blaze_cake_recipe.js
	event.remove({ output: 'create:blaze_cake_base' });
	
	//Waystones
    event.remove({ output: 'waystones:waystone' });
    event.remove({ output: 'waystones:deepslate_waystone' });
    event.remove({ output: 'waystones:end_stone_waystone' });
    event.remove({ output: 'waystones:blackstone_waystone' });
    event.remove({ output: 'waystones:mossy_waystone' });
    event.remove({ output: 'waystones:sandy_waystone' });
    event.remove({ output: 'waystones:warp_plate' });
    event.remove({ output: 'waystones:portstone' });
    event.remove({ output: 'waystones:sharestone' });
    event.remove({ output: 'waystones:warp_stone' });
    event.remove({ output: 'waystones:warp_dust' });
	
	//Blockus
    event.remove({ output: 'blockus:legacy_nether_reactor_core' });
    event.remove({ output: 'blockus:nether_stars_block' });
	
	//Removing automated crushed ores
    event.remove({ id: "create:crushing/ochrum"});
    event.remove({ id: "create:crushing/ochrum_recycling"});
	event.remove({ id: "create:crushing/veridium"});
    event.remove({ id: "create:crushing/veridium_recycling"});
	event.remove({ id: "create:crushing/asurine"});
    event.remove({ id: "create:crushing/asurine_recycling"});
});
