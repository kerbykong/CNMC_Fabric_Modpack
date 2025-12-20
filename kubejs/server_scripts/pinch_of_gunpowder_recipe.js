ServerEvents.recipes(event => {
  // 1 gunpowder -> 9 pinches
  event.shapeless(
    Item.of('kubejs:pinch_of_gunpowder', 9),
    'minecraft:gunpowder'
  )

  // 9 pinches -> 1 gunpowder
  event.shapeless(
    'minecraft:gunpowder',
    Item.of('kubejs:pinch_of_gunpowder', 9)
  )
})