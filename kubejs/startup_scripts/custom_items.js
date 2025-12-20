StartupEvents.registry('item', event => {
  event.create('pinch_of_gunpowder')
    .maxStackSize(64)

  event.create('pistol_casings')
    .maxStackSize(64)

  event.create('rifle_casings')
    .maxStackSize(64)

  event.create('shotguns_hulls')
    .maxStackSize(64)
})