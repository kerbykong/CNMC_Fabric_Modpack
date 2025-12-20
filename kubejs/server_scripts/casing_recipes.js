ServerEvents.recipes(event => {

 //Pistol Casings
    event.stonecutting('kubejs:pistol_casings', 'create:brass_sheet')

    event.recipes.createCutting('kubejs:pistol_casings', 'create:brass_sheet')

 //Rifle Casings
    event.stonecutting('kubejs:rifle_casings', 'create:brass_sheet')

    event.recipes.createCutting('kubejs:rifle_casings', 'create:brass_sheet')

 //Shotgun Hulls
    event.shapeless(
  Item.of('kubejs:shotguns_hulls', 1), // arg 1: output
  [
    'minecraft:paper',
    'create:brass_sheet', 	       // arg 2: the array of inputs
    'minecraft:red_dye'
  ]
)

})