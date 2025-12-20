StartupEvents.registry('item', event => {
//Pistol
  event.create('incomplete_pistol_ammo', 'create:sequenced_assembly')
  .displayName('Incomplete Pistol Ammo'),

//Rifle
  event.create('incomplete_rifle_ammo', 'create:sequenced_assembly')
  .displayName('Incomplete Rifle Ammo'),

//12 Gauge Ammo
  event.create('incomplete_12_gauge_ammo', 'create:sequenced_assembly')
  .displayName('Incomplete 12 Gauge Buckshot')

}
)
