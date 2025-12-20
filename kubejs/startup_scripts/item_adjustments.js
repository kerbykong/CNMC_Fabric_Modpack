//Nerfing Mr Crayfish's knife and spatula as they have 2.6 attack speed for some god damn reason?
ItemEvents.modification(event => {
    event.modify("refurbished_furniture:knife", item => {
        // Attack Damage
        item.attackDamage = 5;

        // Attack Speed
        item.attackSpeed = 1.2;
    });
	
	event.modify("refurbished_furniture:spatula", item => {
        // Attack Damage
        item.attackDamage = 4;

        // Attack Speed
        item.attackSpeed = 1;
    });
});