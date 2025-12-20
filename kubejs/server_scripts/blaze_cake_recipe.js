ServerEvents.recipes(event => {
	
	//Milling netherrack → cinder flour
	event.recipes.create.milling({
    ingredients: [
      { item: 'minecraft:netherrack' }
    ],
    results: [
      { item: 'create:cinder_flour' },             // 100% guaranteed
      { item: 'create:cinder_flour', chance: 0.75 } // 75% chance
    ],
    processingTime: 100
  });

	// 4x output recipe
	event.recipes.create.compacting({
		ingredients: [
		  { item: 'create:cinder_flour'},
		  { item: 'minecraft:egg' },
		  { item: 'minecraft:sugar' }
		],
		results: [
		  { item: 'create:blaze_cake_base', count: 3 }
		]
	});

});
