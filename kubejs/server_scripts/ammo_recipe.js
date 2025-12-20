// priority: 0

ServerEvents.recipes(event => {

 //9mm
    event.recipes.create.sequenced_assembly([
      '15x pointblank:ammo9mm'
    ], 'kubejs:pistol_casings', [
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:pistol_casings', 'minecraft:red_dye']),
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:incomplete_pistol_ammo', 'minecraft:gunpowder']),
      event.recipes.createPressing('15x pointblank:ammo9mm', 'kubejs:incomplete_pistol_ammo')
    ]).transitionalItem('kubejs:incomplete_pistol_ammo').loops(1)

 //.45 ACP
    event.recipes.create.sequenced_assembly([
      '15x pointblank:ammo45acp'
    ], 'kubejs:pistol_casings', [
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:pistol_casings', 'minecraft:orange_dye']),
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:incomplete_pistol_ammo', 'minecraft:gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:incomplete_pistol_ammo', 'kubejs:pinch_of_gunpowder']),
      event.recipes.createPressing('15x pointblank:ammo45acp', 'kubejs:incomplete_pistol_ammo')
    ]).transitionalItem('kubejs:incomplete_pistol_ammo').loops(1)

 //.357
    event.recipes.create.sequenced_assembly([
      '15x pointblank:ammo357'
    ], 'kubejs:pistol_casings', [
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:pistol_casings', 'minecraft:pink_dye']),
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:incomplete_pistol_ammo', 'minecraft:gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:incomplete_pistol_ammo', 'kubejs:pinch_of_gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:incomplete_pistol_ammo', 'kubejs:pinch_of_gunpowder']),
      event.recipes.createPressing('15x pointblank:ammo357', 'kubejs:incomplete_pistol_ammo')
    ]).transitionalItem('kubejs:incomplete_pistol_ammo').loops(1)

 //5.7mm
    event.recipes.create.sequenced_assembly([
      '15x pointblank:ammo57'
    ], 'kubejs:pistol_casings', [
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:pistol_casings', 'minecraft:black_dye']),
      event.recipes.createDeploying('kubejs:incomplete_pistol_ammo', ['kubejs:incomplete_pistol_ammo', 'minecraft:gunpowder']),
      event.recipes.createPressing('15x pointblank:ammo57', 'kubejs:incomplete_pistol_ammo')
    ]).transitionalItem('kubejs:incomplete_pistol_ammo').loops(1)

 //5.56
    event.recipes.create.sequenced_assembly([
      '10x pointblank:ammo556'
    ], 'kubejs:rifle_casings', [
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:rifle_casings', 'minecraft:pink_dye']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'minecraft:gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'kubejs:pinch_of_gunpowder']),
      event.recipes.createPressing('10x pointblank:ammo556', 'kubejs:incomplete_rifle_ammo')
    ]).transitionalItem('kubejs:incomplete_rifle_ammo').loops(1)

 //6.8
    event.recipes.create.sequenced_assembly([
      '10x pointblank:ammo68'
    ], 'kubejs:rifle_casings', [
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:rifle_casings', 'minecraft:orange_dye']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'minecraft:gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'kubejs:pinch_of_gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'kubejs:pinch_of_gunpowder']),
      event.recipes.createPressing('10x pointblank:ammo68', 'kubejs:incomplete_rifle_ammo')
    ]).transitionalItem('kubejs:incomplete_rifle_ammo').loops(1)

 //7.62
    event.recipes.create.sequenced_assembly([
      '10x pointblank:ammo762'
    ], 'kubejs:rifle_casings', [
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:rifle_casings', 'minecraft:gray_dye']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'minecraft:gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'kubejs:pinch_of_gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'kubejs:pinch_of_gunpowder']),
      event.recipes.createPressing('10x pointblank:ammo762', 'kubejs:incomplete_rifle_ammo')
    ]).transitionalItem('kubejs:incomplete_rifle_ammo').loops(1)

 //7.62x51
    event.recipes.create.sequenced_assembly([
      '5x pointblank:ammo762x51'
    ], 'kubejs:rifle_casings', [
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:rifle_casings', 'minecraft:brown_dye']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'minecraft:gunpowder']),
      event.recipes.createPressing('5x pointblank:ammo762x51', 'kubejs:incomplete_rifle_ammo')
    ]).transitionalItem('kubejs:incomplete_rifle_ammo').loops(1)

 //.338 Lapua
    event.recipes.create.sequenced_assembly([
      '5x pointblank:ammo338lapua'
    ], 'kubejs:rifle_casings', [
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:rifle_casings', 'minecraft:green_dye']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'minecraft:gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'minecraft:gunpowder']),
      event.recipes.createPressing('5x pointblank:ammo338lapua', 'kubejs:incomplete_rifle_ammo')
    ]).transitionalItem('kubejs:incomplete_rifle_ammo').loops(1)

 //.50 BMG
    event.recipes.create.sequenced_assembly([
      '5x pointblank:ammo50bmg'
    ], 'kubejs:rifle_casings', [
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:rifle_casings', 'minecraft:gray_dye']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'minecraft:gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'minecraft:gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_rifle_ammo', ['kubejs:incomplete_rifle_ammo', 'minecraft:gunpowder']),
      event.recipes.createPressing('5x pointblank:ammo50bmg', 'kubejs:incomplete_rifle_ammo')
    ]).transitionalItem('kubejs:incomplete_rifle_ammo').loops(1)

 //12 Guage
    event.recipes.create.sequenced_assembly([
      '8x pointblank:ammo12gauge'
    ], 'kubejs:shotguns_hulls', [
      event.recipes.createDeploying('kubejs:incomplete_12_gauge_ammo', ['kubejs:incomplete_12_gauge_ammo', 'minecraft:gunpowder']),
      event.recipes.createDeploying('kubejs:incomplete_12_gauge_ammo', ['kubejs:incomplete_12_gauge_ammo', 'minecraft:iron_nugget']),
      event.recipes.createDeploying('kubejs:incomplete_12_gauge_ammo', ['kubejs:incomplete_12_gauge_ammo', 'minecraft:iron_nugget']),
      event.recipes.createDeploying('kubejs:incomplete_12_gauge_ammo', ['kubejs:incomplete_12_gauge_ammo', 'minecraft:iron_nugget']),
      event.recipes.createPressing('8x pointblank:ammo12gauge', 'kubejs:incomplete_12_gauge_ammo')
    ]).transitionalItem('kubejs:incomplete_12_gauge_ammo').loops(1)

})