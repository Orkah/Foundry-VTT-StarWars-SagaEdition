export const dieSize = ["1", "1d2", "1d3", "1d4", "1d6", "1d8", "2d6", "2d8", "3d6", "3d8"];
export const dieType = ["1", "2", "3", "4", "6", "8", "10", "12"];
export const sizeArray = ["Colossal", "Gargantuan", "Huge", "Large", "Medium", "Small", "Tiny", "Diminutive", "Fine"];
export const d20 = "1d20";
export const skills = ["Acrobatics", "Climb", "Deception", "Endurance", "Gather Information", "Initiative", "Jump",
    "Knowledge (Bureaucracy)", "Knowledge (Galactic Lore)", "Knowledge (Life Sciences)", "Knowledge (Physical Sciences)",
    "Knowledge (Social Sciences)", "Knowledge (Tactics)", "Knowledge (Technology)", "Mechanics", "Perception",
    "Persuasion", "Pilot", "Ride", "Stealth", "Survival", "Swim", "Treat Injury", "Use Computer", "Use the Force"];
export const lightsaberForms = ["Ataru",
    "Djem So",
    "Jar'Kai",
    "Juyo",
    "Makashi",
    "Niman",
    "Shien",
    "Shii-Cho",
    "Sokan",
    "Soresu",
    "Trakata",
    "Vaapad",
    "Dun Möch",
    "Maho-Kai",
    "Tripzest"];

export const crewPositions = ['Pilot', 'Copilot', 'Gunner', 'Commander', 'System Operator', 'Engineer', 'Astromech Droid'];
export const vehicleActorTypes = ["vehicle", "npc-vehicle"];

export const crewQuality = {
    "Untrained":{"Attack Bonus":-5, "Check Modifier": 0, "CL Modifier":-1},
    "Normal":   {"Attack Bonus": 0, "Check Modifier": 5, "CL Modifier": 0},
    "Skilled":  {"Attack Bonus": 2, "Check Modifier": 6, "CL Modifier": 1},
    "Expert":   {"Attack Bonus": 5, "Check Modifier": 8, "CL Modifier": 2},
    "Ace":      {"Attack Bonus":10, "Check Modifier":12, "CL Modifier": 4}
}

export const uniqueKey = ["damage", "stunDamage"]