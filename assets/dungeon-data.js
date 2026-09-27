/* Mage Forever TL;DR: dungeon data for the planner, for both factions. From Wowhead's Forever dungeon
   quest guide, community loot tables and dungeon guides, checked in late September 2026.
   travel: if = from Ironforge (Gnomes), sw = from Stormwind (Humans and Skyborne), sky = an extra note for Skyborne,
   org = from Orgrimmar (Orcs and Trolls), uc = from Undercity (Undead). Quest fac: "a", "h" or "both". */
(() => {
"use strict";

const DUNGEONS = {
 "hot": {
  "key": "hot",
  "name": "The Hall of Thanes",
  "short": "Hall of Thanes",
  "levels": "13–18",
  "zone": "Ironforge (Old Ironforge)",
  "entrance": {
   "zone": "Ironforge",
   "x": "44.5",
   "y": "49.4",
   "note": ""
  },
  "travel": {
   "if": "You're home. Walk to the High Seat, Magni's throne room. The open door to Old Ironforge is immediately on your left as you enter; follow the path all the way down to the portal by the lava bridge.",
   "sw": "Take the Deeprun Tram from Stormwind's Dwarven District to Tinker Town in Ironforge. Walk to the High Seat and take the door on the left down into Old Ironforge. Old Ironforge Incursion starts at the camp over Gol'Bolar Quarry in Dun Morogh.",
   "org": "Impractical. Wowhead's route: take the zeppelin to Tirisfal Glades and go south to Tarren Mill in Hillsbrad, then east through Arathi Highlands, over Thandol Span into the Wetlands, through Loch Modan into Dun Morogh and into Ironforge to the High Seat. The guards will kill you on the way in, so take your gear off to save on repairs.",
   "uc": "Same trek without the zeppelin: south through Silverpine into Hillsbrad (Tarren Mill), then Arathi Highlands, the Wetlands, Loch Modan and Dun Morogh to Ironforge.",
   "sky": "The last Skyborne intro quest, Exploring the Alliance, sends you to King Magni in the High Seat anyway, right beside the Old Ironforge door."
  },
  "reach": {
   "a": "easy: right under Ironforge",
   "h": "impractical: a long trek through Alliance land, then through Ironforge past its guards"
  },
  "bosses": [
   "Faldrim Anvilmar",
   "Magmatus",
   "Plunder",
   "Durgen Dirgehammer"
  ],
  "forever": "New in Forever: the dwarven royal crypt under Ironforge, the Alliance-side starter dungeon. Important Heirlooms and An Ancient Grudge are open to both factions; the other three quests are Alliance-only.",
  "quests": [
   {
    "id": 96403,
    "name": "Important Heirlooms",
    "giver": "Thom Filch",
    "where": {
     "zone": "Ironforge (Old Ironforge, entrance bridge)",
     "x": "32.6",
     "y": "44.6"
    },
    "min": 10,
    "chain": "",
    "task": "Loot 8 Dwarven Heirlooms from urns, chests and tables inside (many in the last room behind Durgen's vault).",
    "rewards": [
     "Dwarven Tome",
     "Tomb Robber's Gloves"
    ],
    "note": "",
    "fac": "both"
   },
   {
    "id": 96394,
    "name": "The Restless Dead",
    "giver": "Afadra Dunwall",
    "where": {
     "zone": "Ironforge (Old Ironforge, above the entrance gate)",
     "x": "33.2",
     "y": "47.6"
    },
    "min": 10,
    "chain": "",
    "task": "Kill 15 Enraged Apparitions and 10 Tormented Souls, and put Faldrim Anvilmar's spirit to rest.",
    "rewards": [
     "Dusty Belt",
     "Cryptwalker Bracers"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 96393,
    "name": "Old Ironforge Incursion",
    "giver": "Earthseer Farsen",
    "where": {
     "zone": "Dun Morogh (camp over Gol'Bolar Quarry)",
     "x": "64.8",
     "y": "58.4"
    },
    "min": 9,
    "chain": "1 step before: kill Dark Iron Spies around Dun Morogh 77, 60 until the Dark Iron Map drops (about 10 kills). It starts Underground Map (96391); hand it to Earthseer Farsen to get this quest.",
    "task": "Kill Durgen Dirgehammer (last boss) and bring his head to King Magni Bronzebeard in the Ironforge throne room (~39, 56).",
    "rewards": [
     "Calibrated Blunderbuss",
     "Ironforge Greathammer",
     "Deepblaze"
    ],
    "note": "First get the Dark Iron Map: kill Dark Iron Spies around Dun Morogh 77, 60 (about ten kills), which starts Underground Map.",
    "fac": "a"
   },
   {
    "id": 96395,
    "name": "An Ancient Grudge",
    "giver": "Ghostly Attendant",
    "where": {
     "zone": "Inside Hall of Thanes (Anvilmar's Rest, west wing)",
     "x": null,
     "y": null
    },
    "min": 10,
    "chain": "Starts inside the dungeon.",
    "task": "Defeat Faldrim Anvilmar (first boss) and return to the Ghostly Attendant.",
    "rewards": [
     "Catacomb Cloak",
     "Deepgrave Trousers"
    ],
    "note": "",
    "fac": "both"
   },
   {
    "id": 98423,
    "name": "The Treaty of Understanding",
    "giver": "Treaty of Understanding (tablet you pick up in the final vault, Reliquary of Kings)",
    "where": {
     "zone": "Inside Hall of Thanes",
     "x": null,
     "y": null
    },
    "min": 9,
    "chain": "Starts inside the dungeon.",
    "task": "Bring the Treaty to King Magni Bronzebeard in Ironforge.",
    "rewards": [],
    "note": "",
    "fac": "a"
   }
  ],
  "cap": 20
 },
 "rfc": {
  "key": "rfc",
  "name": "Ragefire Chasm",
  "short": "Ragefire Chasm",
  "levels": "15–25",
  "zone": "Orgrimmar",
  "entrance": {
   "zone": "Orgrimmar",
   "x": "53.0",
   "y": "48.9",
   "note": ""
  },
  "travel": {
   "if": "Not practical for Alliance: the entrance is inside Orgrimmar.",
   "sw": "Not practical for Alliance: the entrance is inside Orgrimmar.",
   "org": "You're home. Head down into the Cleft of Shadow; the entrance is at 53.0, 48.9 and Neeru Fireblade (Slaying the Beast) stands nearby. Thrall (Hidden Enemies) is in the Valley of Wisdom.",
   "uc": "Grab The Power to Destroy... from Varimathras in the Royal Quarter first. Take the zeppelin from Tirisfal Glades to Durotar, walk into Orgrimmar through the front gate and head for the Cleft of Shadow."
  },
  "reach": {
   "a": "impractical: inside Orgrimmar",
   "h": "easy: inside Orgrimmar (Undead: one zeppelin ride)"
  },
  "bosses": [
   "Oggleflint",
   "Taragaman the Hungerer",
   "Jergosh the Invoker",
   "Bazzalan"
  ],
  "forever": "No Forever changes found. No new quests: Wowhead's Forever data keeps the Classic Horde set (IDs 5722-5761 and the Hidden Enemies chain 5726-5730).",
  "quests": [
   {
    "id": 5728,
    "name": "Hidden Enemies",
    "giver": "Thrall",
    "where": {
     "zone": "Orgrimmar (Valley of Wisdom)",
     "x": "31.7",
     "y": "37.8"
    },
    "min": 9,
    "chain": "Part of a five-step chain from Thrall: Hidden Enemies (5726) asks for a Lieutenant's Insignia from the Burning Blade in Skull Rock, just east of Orgrimmar; then speak with Neeru Fireblade (5727); then this kill step (5728); then speak with Neeru again (5729) and report to Thrall (5730) for the reward.",
    "task": "Kill Bazzalan and Jergosh the Invoker.",
    "rewards": [
     "Staff of Orgrimmar",
     "Kris of Orgrimmar",
     "Hammer of Orgrimmar",
     "Axe of Orgrimmar"
    ],
    "note": "Level 9 is wowhandbook's value for this step; the first step's level isn't confirmed. Wowhead comments report a slow insignia drop at Skull Rock.",
    "fac": "h"
   },
   {
    "id": 5725,
    "name": "The Power to Destroy...",
    "giver": "Varimathras",
    "where": {
     "zone": "Undercity (Royal Quarter)",
     "x": "56.3",
     "y": "92.2"
    },
    "min": 9,
    "chain": "",
    "task": "Bring back the books Spells of Shadow and Incantations from the Nether, which drop from mobs inside.",
    "rewards": [
     "Ghastly Trousers",
     "Dredgemire Leggings",
     "Gargoyle Leggings"
    ],
    "note": "",
    "fac": "h"
   },
   {
    "id": 5722,
    "name": "Searching for the Lost Satchel, then Returning the Lost Satchel",
    "giver": "Rahauro",
    "where": {
     "zone": "Thunder Bluff (Elder Rise)",
     "x": "70.1",
     "y": "29.5"
    },
    "min": 9,
    "chain": "Searching for the Lost Satchel leads you to Maur Grimtotem's corpse inside, which starts Returning the Lost Satchel (5724).",
    "task": "Find Maur Grimtotem's body (from the main tunnel junction take the nearest path right, uphill; three troggs guard it) and take the Grimtotem Satchel back to Rahauro.",
    "rewards": [
     "Featherbead Bracers",
     "Savannah Bracers",
     "Garrison Cuffs"
    ],
    "note": "Rewards come from Returning the Lost Satchel.",
    "fac": "h"
   },
   {
    "id": 5761,
    "name": "Slaying the Beast",
    "giver": "Neeru Fireblade",
    "where": {
     "zone": "Orgrimmar (Cleft of Shadow)",
     "x": "49.5",
     "y": "50.6"
    },
    "min": 9,
    "chain": "",
    "task": "Kill Taragaman the Hungerer and bring back his heart.",
    "rewards": [],
    "note": "XP only. Taragaman can knock you into the lava, so pull him off the rock bridge.",
    "fac": "h"
   },
   {
    "id": 5723,
    "name": "Testing an Enemy's Strength",
    "giver": "Rahauro",
    "where": {
     "zone": "Thunder Bluff (Elder Rise)",
     "x": "70.1",
     "y": "29.5"
    },
    "min": 9,
    "chain": "",
    "task": "Kill 8 Ragefire Troggs and 8 Ragefire Shamans.",
    "rewards": [],
    "note": "XP and Thunder Bluff reputation only.",
    "fac": "h"
   }
  ],
  "cap": 20
 },
 "dm": {
  "key": "dm",
  "name": "The Deadmines",
  "short": "Deadmines",
  "levels": "15–25",
  "zone": "Westfall",
  "entrance": {
   "zone": "Westfall",
   "x": "42.6",
   "y": "72.2",
   "note": ""
  },
  "travel": {
   "if": "Take the Deeprun Tram from Tinkertown to Stormwind. Fly to Sentinel Hill (Westfall) if you have it; otherwise walk west through Elwynn Forest into Westfall. From Sentinel Hill ride southwest to the ruined town of Moonbrook and go into the stone building on the west edge of town.",
   "sw": "Grab Collecting Memories, Oh Brother... and Underground Assault in Stormwind's Dwarven District first. Ride west out of Stormwind through Elwynn Forest into Westfall (or fly to Sentinel Hill if you have it), then southwest to the ruined town of Moonbrook and into the stone building on the west edge of town.",
   "org": "Impractical, and there are no Horde quests. You'd take the zeppelin to Grom'gol in Stranglethorn Vale, ride north into Duskwood, then west into Westfall to Moonbrook, all through Alliance land.",
   "uc": "Same: zeppelin from Tirisfal Glades to Grom'gol, then north through Duskwood into Westfall."
  },
  "reach": {
   "a": "easy: Westfall is next to Stormwind; from Ironforge it's a tram ride away",
   "h": "impractical: deep in Alliance land, and no Horde quests"
  },
  "bosses": [
   "Rhahk'Zor",
   "Sneed's Shredder and Sneed",
   "Gilnid",
   "Mr. Smite",
   "Captain Greenskin",
   "Edwin VanCleef",
   "Cookie (optional)"
  ],
  "forever": "Forever adds a new Westfall chain from Alba Fairmoon that ends inside with Destruction in Deadmines. No Horde quests (Wowhead's quest guide lists none; wowtbc marks every Deadmines quest Alliance-only).",
  "quests": [
   {
    "id": 166,
    "name": "The Defias Brotherhood",
    "giver": "Gryan Stoutmantle",
    "where": {
     "zone": "Westfall (Sentinel Hill)",
     "x": "56.3",
     "y": "47.5"
    },
    "min": 14,
    "chain": "Starts with The Defias Brotherhood from Gryan; 6 steps before this one, ending with The Defias Traitor escort into Moonbrook.",
    "task": "Kill Edwin VanCleef and bring his head to Gryan.",
    "rewards": [
     "Chausses of Westfall",
     "Tunic of Westfall",
     "Staff of Westfall"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 214,
    "name": "Red Silk Bandanas",
    "giver": "Scout Riell",
    "where": {
     "zone": "Westfall (top of Sentinel Hill tower)",
     "x": "56.6",
     "y": "47.3"
    },
    "min": 14,
    "chain": "Opens after The Defias Traitor (step 6 of the Defias chain).",
    "task": "Collect 10 Red Silk Bandanas from Defias in the Deadmines.",
    "rewards": [
     "Solid Shortblade",
     "Scrimshaw Dagger",
     "Piercing Axe",
     "Monastic Hammer"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 168,
    "name": "Collecting Memories",
    "giver": "Wilder Thistlenettle",
    "where": {
     "zone": "Stormwind City (Dwarven District)",
     "x": "65.2",
     "y": "21.6"
    },
    "min": 14,
    "chain": "",
    "task": "Collect 4 Miners' Union Cards from the undead miners in the mine before the instance portal.",
    "rewards": [
     "Tunneler's Boots",
     "Dusty Mining Gloves",
     "Worn Miner's Waistcord"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 167,
    "name": "Oh Brother...",
    "giver": "Wilder Thistlenettle",
    "where": {
     "zone": "Stormwind City (Dwarven District)",
     "x": "65.2",
     "y": "21.6"
    },
    "min": 15,
    "chain": "",
    "task": "Take Foreman Thistlenettle's Explorers' League Badge from Foreman Thistlenettle (undead, in the mine outside the portal).",
    "rewards": [
     "Miner's Revenge",
     "Miner's Workgloves",
     "Miner's Workboots"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 2040,
    "name": "Underground Assault",
    "giver": "Shoni the Shilent",
    "where": {
     "zone": "Stormwind City (Dwarven District)",
     "x": "55.6",
     "y": "12.6"
    },
    "min": 15,
    "chain": "",
    "task": "Loot the Gnoam Sprecklesprocket from Sneed's Shredder.",
    "rewards": [
     "Polar Gauntlets",
     "Sable Wand",
     "Bravo's Armbands",
     "Dreamer's Leggings"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 373,
    "name": "The Unsent Letter",
    "giver": "Unsent Letter (drops from Edwin VanCleef)",
    "where": {
     "zone": "Inside The Deadmines",
     "x": null,
     "y": null
    },
    "min": 16,
    "chain": "Starts from VanCleef's drop.",
    "task": "Take the letter to Baros Alexston at City Hall, Cathedral Square, Stormwind (49.0, 30.2).",
    "rewards": [],
    "note": "",
    "fac": "a"
   },
   {
    "id": 92753,
    "name": "Destruction in Deadmines",
    "giver": "Alba Fairmoon",
    "where": {
     "zone": "Westfall (Sentinel Hill)",
     "x": "52.4",
     "y": "53.0"
    },
    "min": 9,
    "chain": "New Forever chain. Starts with Testing the Wells from Alba; 9 steps before this one: Testing the Wells, Murloc Gills, The State of the Mines, Moonbrook Espionage, Explosive Consultation, A Dynamite Plan, Detonation at a Distance (2 parts), Explosive Consultation (2).",
    "task": "Plant the Extra-Destructive Explosives by the forge hidden in the Deadmines, then meet Alba at the Deadmines exit in the hills behind Moonbrook (38.6, 83.6) and use the detonator (Destruction in Deadmines (2)).",
    "rewards": [],
    "note": "The last step of Alba Fairmoon’s new Westfall chain. No item reward.",
    "fac": "a"
   }
  ],
  "cap": 20
 },
 "wc": {
  "key": "wc",
  "name": "Wailing Caverns",
  "short": "Wailing Caverns",
  "levels": "17–27",
  "zone": "The Barrens",
  "entrance": {
   "zone": "The Barrens",
   "x": "46.0",
   "y": "36.3",
   "note": ""
  },
  "travel": {
   "if": "A long trip into Horde land. Take the boat from Menethil Harbor to Theramore, follow the road west into the Barrens, then head north. The cave is in the mound southwest of the Crossroads, a Horde town, so go around it. Ratchet, a neutral town on the coast, has a flight path.",
   "sw": "A long trip into Horde land. First get to Menethil Harbor: take the ship from Stormwind Harbor to Auberdine and change to the boat for Menethil (it stops at Southshore on the way), or take the tram to Ironforge and ride through Loch Modan and the Wetlands. From Menethil take the boat to Theramore, follow the road west into the Barrens and head north. The cave is in the mound southwest of the Crossroads, a Horde town, so go around it.",
   "org": "Close. Fly to the Crossroads if you have it, or leave Orgrimmar, cross the river west into the Barrens and follow the road to the Crossroads. The cave is in the mound southwest of the Crossroads; Nalpak and Ebru stand on top of it. Serpentbloom, Leaders of the Fang and In Nightmares involve Thunder Bluff.",
   "uc": "Take the zeppelin from Tirisfal Glades to Durotar, then as from Orgrimmar."
  },
  "reach": {
   "a": "far: two or three boats, then a ride through the Horde Barrens past the Crossroads",
   "h": "easy: in the Barrens next to the Crossroads (Undead: one zeppelin ride)"
  },
  "bosses": [
   "Lady Anacondra",
   "Lord Cobrahn",
   "Kresh",
   "Lord Pythas",
   "Skum",
   "Lord Serpentis",
   "Verdan the Everliving",
   "Mutanus the Devourer"
  ],
  "forever": "No Forever changes found; the quests are the Classic set.",
  "quests": [
   {
    "id": 6981,
    "name": "The Glowing Shard, then In Nightmares",
    "giver": "Glowing Shard (drops from Mutanus the Devourer)",
    "where": {
     "zone": "Inside Wailing Caverns",
     "x": null,
     "y": null
    },
    "min": 15,
    "chain": "Starts from Mutanus's drop. Show the shard to Sputtervalve in Ratchet (63.0, 37.2), then take it to Falla Sagewind on the mountain above WC (48.2, 32.8); she gives In Nightmares (3370).",
    "task": "Bring the Nightmare Shard to Mathrengyl Bearwalker, Cenarion Enclave, Darnassus (~35, 8).",
    "rewards": [
     "Talbar Mantle",
     "Quagmire Galoshes"
    ],
    "note": "Show the shard to Sputtervalve in Ratchet, then take it to Falla Sagewind on the mountain above the cave. She sends you to Darnassus.",
    "fac": "a"
   },
   {
    "id": 959,
    "name": "Trouble at the Docks",
    "giver": "Crane Operator Bigglefuzz",
    "where": {
     "zone": "The Barrens (Ratchet)",
     "x": "63.0",
     "y": "37.4"
    },
    "min": 14,
    "chain": "",
    "task": "Get the 99-Year-Old Port from Mad Magglish, a stealthed goblin in the outer caves before the portal.",
    "rewards": [],
    "note": "",
    "fac": "both"
   },
   {
    "id": 1491,
    "name": "Smart Drinks",
    "giver": "Mebok Mizzyrix",
    "where": {
     "zone": "The Barrens (Ratchet)",
     "x": "62.4",
     "y": "37.6"
    },
    "min": 13,
    "chain": "Do Raptor Horns (same NPC) first.",
    "task": "Collect 6 Wailing Essence from ectoplasms in WC.",
    "rewards": [],
    "note": "",
    "fac": "both"
   },
   {
    "id": 1486,
    "name": "Deviate Hides",
    "giver": "Nalpak",
    "where": {
     "zone": "The Barrens (on top of the WC mound)",
     "x": "46.0",
     "y": "35.7"
    },
    "min": 13,
    "chain": "",
    "task": "Collect 20 Deviate Hides from deviate beasts in and around WC.",
    "rewards": [
     "Slick Deviate Leggings",
     "Deviate Hide Pack"
    ],
    "note": "",
    "fac": "both"
   },
   {
    "id": 1487,
    "name": "Deviate Eradication",
    "giver": "Ebru",
    "where": {
     "zone": "The Barrens (on top of the WC mound)",
     "x": "46.0",
     "y": "35.7"
    },
    "min": 15,
    "chain": "",
    "task": "Kill 7 each of Deviate Ravagers, Vipers, Shamblers and Dreadfangs inside.",
    "rewards": [
     "Pattern: Deviate Scale Belt",
     "Sizzle Stick",
     "Dagmire Gauntlets"
    ],
    "note": "",
    "fac": "both"
   },
   {
    "id": 914,
    "name": "Leaders of the Fang",
    "giver": "Nara Wildmane",
    "where": {
     "zone": "Thunder Bluff (Elder Rise)",
     "x": "75.7",
     "y": "31.6"
    },
    "min": 10,
    "chain": "End of a Barrens druid chain that starts with Tonga Runetotem at the Crossroads (52.2, 31.8). Per Wowhead comments: The Barrens Oases, The Forgotten Pools, The Stagnant Oasis, Altered Beings, then Hamuul Runetotem (1489) and Nara Wildmane (1490), both takeable at 10.",
    "task": "Collect the Gems of Cobrahn, Anacondra, Pythas and Serpentis from the four Fanglords inside.",
    "rewards": [
     "Crescent Staff",
     "Wingblade",
     "Hammerbone"
    ],
    "note": "Each Fanglord drops a gem for every party member.",
    "fac": "h"
   },
   {
    "id": 962,
    "name": "Serpentbloom",
    "giver": "Apothecary Zamah",
    "where": {
     "zone": "Thunder Bluff (Pools of Vision)",
     "x": "23.6",
     "y": "21.4"
    },
    "min": 14,
    "chain": "",
    "task": "Collect 10 Serpentbloom inside Wailing Caverns.",
    "rewards": [
     "Apothecary Gloves",
     "Heat Resistant Mitts",
     "Safety Boots"
    ],
    "note": "Coordinates from zockify only.",
    "fac": "h"
   },
   {
    "id": 6981,
    "name": "The Glowing Shard, then In Nightmares",
    "giver": "Glowing Shard (drops from Mutanus the Devourer)",
    "where": {
     "zone": "Inside Wailing Caverns",
     "x": null,
     "y": null
    },
    "min": 15,
    "chain": "Starts from Mutanus's drop. Show the shard to Sputtervalve in Ratchet (63.0, 37.2), then take it to Falla Sagewind on the mountain above WC (48.2, 32.8); she gives the Horde In Nightmares (3369).",
    "task": "Bring the Nightmare Shard to Hamuul Runetotem on Elder Rise, Thunder Bluff (about 78, 28).",
    "rewards": [
     "Talbar Mantle",
     "Quagmire Galoshes"
    ],
    "note": "",
    "fac": "h"
   }
  ],
  "cap": 20
 },
 "rol": {
  "key": "rol",
  "name": "Ruins of Lordaeron",
  "short": "Ruins of Lordaeron",
  "levels": "15–20",
  "zone": "Tirisfal Glades",
  "entrance": {
   "zone": "Tirisfal Glades",
   "x": "61.2",
   "y": "67.4",
   "note": "Approximate: the courtyard of the ruins above Undercity. The portal is behind iron portcullises on its east side."
  },
  "travel": {
   "if": "A long trek through Horde land. Take the boat from Menethil Harbor and get off at Southshore. Follow the road north to Hillsbrad Fields, go around Dalaran, swim north across Lordamere Lake into Tirisfal Glades and follow the road to the ruins above Undercity. Horde guards are around, so travel with your group.",
   "sw": "Wowhead's route: take the ship from Stormwind Harbor to Auberdine, then the boat for Menethil Harbor and stay on until Southshore. Follow the road north to Hillsbrad Fields, go around Dalaran, swim north across Lordamere Lake into Tirisfal Glades and follow the road to the Ruins of Lordaeron. Horde guards are around, so travel with your group.",
   "org": "Take the zeppelin from the tower just outside Orgrimmar to Tirisfal Glades, then walk south into the Ruins of Lordaeron above Undercity (you enter from Tirisfal, south of Brill).",
   "uc": "You're home. Ride the lift up out of Undercity into the ruins; the portal is behind iron portcullises on the east side of the keep's courtyard. Deathguard Kristof's camp is just southeast of Brill, and Tabitha Heartweaver is at The Sepulcher in Silverpine."
  },
  "reach": {
   "a": "far and risky: boats to Southshore, a swim across Lordamere Lake, then the doorstep of a Horde capital",
   "h": "easy: right above Undercity (Orcs and Trolls: one zeppelin ride)"
  },
  "bosses": [
   "Witherfang",
   "The Baron",
   "The Abandoned (hidden)",
   "Bjork",
   "Rath'mael",
   "Viktor the Vile (hidden)",
   "Lordaeron Captain (rare)"
  ],
  "forever": "New in Forever, in the ruins above Undercity: the Horde-side counterpart to the Hall of Thanes. Ten quests: six Horde (four given in Undercity, Brill and The Sepulcher, two from items inside) and four Alliance.",
  "quests": [
   {
    "id": 95250,
    "name": "Abominable Creatures",
    "giver": "Captain Truman",
    "where": {
     "zone": "Inside Ruins of Lordaeron (just past the entrance)",
     "x": null,
     "y": null
    },
    "min": 16,
    "chain": "",
    "task": "Kill The Baron and bring the Head of the Baron back to Captain Truman.",
    "rewards": [
     "Monstrous Cleaver",
     "Grave Shroud",
     "Slain Baron's Signet"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 95195,
    "name": "Bloodied Insignia",
    "giver": "Bloodied Insignia (item found inside)",
    "where": {
     "zone": "Inside Ruins of Lordaeron",
     "x": null,
     "y": null
    },
    "min": 16,
    "chain": "Starts inside the dungeon.",
    "task": "Collect 10 Bloodied Insignias and bring them to General Marcus Jonathan, Stormwind (Trade District, ~64.6, 75.8).",
    "rewards": [
     "Duty Bound Leggings",
     "Remembrance Armor"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 95189,
    "name": "Crest of Lordaeron",
    "giver": "Crest of Lordaeron (item that spawns in different spots inside)",
    "where": {
     "zone": "Inside Ruins of Lordaeron",
     "x": null,
     "y": null
    },
    "min": 16,
    "chain": "Starts inside the dungeon.",
    "task": "Bring the Crest to Lady Dena Kennedy, Royal Gallery, Stormwind Keep.",
    "rewards": [
     "Small Sack of Gems"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 92415,
    "name": "Remember That I Love You",
    "giver": "Blood-Stained Letter (item in the graveyard area deep inside, near a boss)",
    "where": {
     "zone": "Inside Ruins of Lordaeron",
     "x": null,
     "y": null
    },
    "min": 15,
    "chain": "Part 2 sends you to Orphan Matron Nightingale in Stormwind's Cathedral Square, then on to Duskwood.",
    "task": "Bring the letter to Orphan Matron Nightingale in front of Stormwind Cathedral (Cathedral Square, ~47.0, 38.0).",
    "rewards": [
     "Tarnished Locket"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 92422,
    "name": "The Wrath of Rath'mael",
    "giver": "Deathguard Kristof",
    "where": {
     "zone": "Tirisfal Glades (skinning camp southeast of Brill)",
     "x": "65.2",
     "y": "60.2"
    },
    "min": 15,
    "chain": "",
    "task": "Kill Rath'mael.",
    "rewards": [
     "Gnarled Necromancer's Staff",
     "Forsaken Greataxe"
    ],
    "note": "Wowhead marks it Horde only and says it gives no XP (beta data). A Wowhead comment says Kristof doesn't show on the world map.",
    "fac": "h"
   },
   {
    "id": 92401,
    "name": "A Frightened Request",
    "giver": "Tabitha Heartweaver",
    "where": {
     "zone": "Silverpine Forest (The Sepulcher)",
     "x": "44.6",
     "y": "42.8"
    },
    "min": 15,
    "chain": "",
    "task": "Find out what happened to Edward Heartweaver in the Ruins of Lordaeron and report back to Tabitha.",
    "rewards": [
     "Tabitha's Cuffs",
     "Edward's Knife"
    ],
    "note": "Wowhead's quest guide gives her a wrong /way; 44.6, 42.8 is from Wowhead's Ruins of Lordaeron guide (other sites: 44.5, 43.0).",
    "fac": "h"
   },
   {
    "id": 95216,
    "name": "The New Plague",
    "giver": "Theodore Griffs",
    "where": {
     "zone": "Undercity (The Apothecarium)",
     "x": "47.0",
     "y": "72.6"
    },
    "min": 16,
    "chain": "",
    "task": "Collect the Highly Toxic Strain from Witherfang.",
    "rewards": [
     "Blight Gloves",
     "Plaguefang"
    ],
    "note": "",
    "fac": "h"
   },
   {
    "id": 97288,
    "name": "Unending Torment",
    "giver": "Abominable Head (drops from The Baron)",
    "where": {
     "zone": "Inside Ruins of Lordaeron",
     "x": null,
     "y": null
    },
    "min": 16,
    "chain": "Five parts, all called Unending Torment: bring the head to Master Apothecary Faranell in the Apothecarium, Undercity (48.8, 69.3) (97288); place it by Othmar's body in the next room (97289); report to Faranell (97290) for the reward; then two optional Undercity steps (97291 gather ingredients, 97292 inject the Hissing Serum).",
    "task": "Bring the Abominable Head to Master Apothecary Faranell in Undercity.",
    "rewards": [
     "Slain Baron's Signet",
     "Grave Shroud",
     "Monstrous Cleaver"
    ],
    "note": "Rewards come from the third part (97290); the same choices as the Alliance's Abominable Creatures. Item-started, so each player needs their own head.",
    "fac": "h"
   },
   {
    "id": 92421,
    "name": "Light's Justice",
    "giver": "Morbin Lightbane",
    "where": {
     "zone": "Undercity (Royal Quarter)",
     "x": "57.8",
     "y": "89.8"
    },
    "min": 15,
    "chain": "",
    "task": "Collect 25 Intact Limbs from the dead inside.",
    "rewards": [
     "The Stitcher",
     "Spare Part Bindings"
    ],
    "note": "",
    "fac": "h"
   },
   {
    "id": 95204,
    "name": "Crest of Lordaeron",
    "giver": "Crest of Lordaeron (item that spawns in different spots inside; one is a tower near Bjork)",
    "where": {
     "zone": "Inside Ruins of Lordaeron",
     "x": null,
     "y": null
    },
    "min": 16,
    "chain": "Starts inside the dungeon.",
    "task": "Bring the Crest to Oran Snakewrithe in Undercity (73.6, 32.6).",
    "rewards": [
     "Small Sack of Gems"
    ],
    "note": "Oran's coordinates from zockify only.",
    "fac": "h"
   }
  ],
  "cap": 20
 },
 "sfk": {
  "key": "sfk",
  "name": "Shadowfang Keep",
  "short": "Shadowfang Keep",
  "levels": "22–30",
  "zone": "Silverpine Forest",
  "entrance": {
   "zone": "Silverpine Forest",
   "x": "44.7",
   "y": "67.8",
   "note": ""
  },
  "travel": {
   "if": "Get to Southshore in Hillsbrad: take the boat from Menethil Harbor, which now stops at Southshore on its way to Auberdine (or fly, or ride north from Menethil over Thandol Span through Arathi Highlands). Then run west into Silverpine Forest. The keep is on the hill above Pyrewood Village. It's Horde land, so stay clear of The Sepulcher.",
   "sw": "Take the ship from Stormwind Harbor to Auberdine, then the boat for Menethil and get off at Southshore (or fly to Southshore if you have it). Run west into Silverpine Forest to the keep on the hill above Pyrewood Village. It's Horde land, so stay clear of The Sepulcher.",
   "org": "Take the zeppelin from Durotar to Tirisfal Glades, then as from Undercity (or fly to The Sepulcher if you have it).",
   "uc": "Close. Grab The Book of Ur in the Apothecarium, leave Undercity and follow the road south through Tirisfal into Silverpine Forest. Pick up Deathstalkers in Shadowfang and Arugal Must Die at The Sepulcher on the way, then keep going south to the keep on the hill above Pyrewood Village."
  },
  "reach": {
   "a": "far: boats to Southshore, then Horde Silverpine near The Sepulcher; no Alliance quests",
   "h": "easy for Undead (south of Undercity); Orcs and Trolls take one zeppelin"
  },
  "bosses": [
   "Rethilgore",
   "Razorclaw the Butcher",
   "Baron Silverlaine",
   "Commander Springvale",
   "Odo the Blindwatcher",
   "Fenrus the Devourer",
   "Wolf Master Nandos",
   "Archmage Arugal"
  ],
  "forever": "Forever adds a new third reward to The Book of Ur: Tattered Mittens (cloth hands with spell damage, item 270030, not in Classic). Still no Alliance quests besides class quests.",
  "quests": [
   {
    "id": 1098,
    "name": "Deathstalkers in Shadowfang",
    "giver": "High Executor Hadrec",
    "where": {
     "zone": "Silverpine Forest (The Sepulcher)",
     "x": "43.4",
     "y": "40.9"
    },
    "min": 18,
    "chain": "",
    "task": "Find Deathstalker Adamant (in the prison cells at the start; freeing him opens the courtyard) and Deathstalker Vincent (just to the right as you enter the courtyard). You turn it in to Vincent inside.",
    "rewards": [
     "Ghostly Mantle",
     "Tanned Shoulderpads",
     "Bronzed Shoulderguards"
    ],
    "note": "",
    "fac": "h"
   },
   {
    "id": 1013,
    "name": "The Book of Ur",
    "giver": "Keeper Bel'dugur",
    "where": {
     "zone": "Undercity (The Apothecarium)",
     "x": "53.7",
     "y": "54.5"
    },
    "min": 16,
    "chain": "",
    "task": "Bring back The Book of Ur from a bookcase in Fenrus the Devourer's room.",
    "rewards": [
     "Tattered Mittens",
     "Grizzled Boots",
     "Steel-clasped Bracers"
    ],
    "note": "Tattered Mittens are new in Forever. Book location from zockify.",
    "fac": "h"
   },
   {
    "id": 1014,
    "name": "Arugal Must Die",
    "giver": "Dalar Dawnweaver",
    "where": {
     "zone": "Silverpine Forest (The Sepulcher)",
     "x": "44.2",
     "y": "39.8"
    },
    "min": 18,
    "chain": "",
    "task": "Kill Archmage Arugal (last boss) and bring his head to Dalar Dawnweaver.",
    "rewards": [
     "Seal of Sylvanas"
    ],
    "note": "",
    "fac": "h"
   }
  ],
  "cap": 20
 },
 "bfd": {
  "key": "bfd",
  "name": "Blackfathom Deeps",
  "short": "Blackfathom Deeps",
  "levels": "22–32",
  "zone": "Ashenvale",
  "entrance": {
   "zone": "Ashenvale",
   "x": "14.5",
   "y": "14.6",
   "note": ""
  },
  "travel": {
   "if": "Take the boat from Menethil Harbor to Auberdine in Darkshore (it may now stop at Southshore on the way), then run south along the coast into Ashenvale's Zoram Strand. Or fly to Astranaar and head west to the beach. Swim down through the pool into the cave.",
   "sw": "Pick up The Corruption Abroad from Argos Nightwhisper in Stormwind (21.4, 55.8) first. Take the new ship from Stormwind Harbor to Auberdine in Darkshore, then run south along the coast into Ashenvale's Zoram Strand and swim down through the pool into the cave.",
   "org": "Far, through Alliance forest. Head for Zoram'gar Outpost on the Ashenvale coast, where Je'neu Sancrea gives the Horde quests: fly there if you have it, or go north from the Barrens into Ashenvale and west to the coast, steering clear of Alliance Astranaar. The dungeon is in the ruins at the north end of the Zoram Strand; swim down through the pool into the cave.",
   "uc": "Take the zeppelin from Tirisfal Glades to Durotar, then as from Orgrimmar.",
   "sky": "Exploring the Alliance sends you to Darnassus, so you'll pass through Auberdine early anyway."
  },
  "reach": {
   "a": "easy: a boat to Auberdine (now straight from Stormwind Harbor too), then a ride down the coast",
   "h": "far: Ashenvale is Alliance land, but the Horde's Zoram'gar Outpost sits right by the dungeon"
  },
  "bosses": [
   "Ghamoo-ra",
   "Lady Sarevess",
   "Gelihast",
   "Lorgus Jett",
   "Old Serra'kis",
   "Twilight Lord Kelris",
   "Aku'mai"
  ],
  "forever": "No Forever changes found.",
  "quests": [
   {
    "id": 971,
    "name": "Knowledge in the Deeps",
    "giver": "Gerrig Bonegrip",
    "where": {
     "zone": "Ironforge (Forlorn Cavern)",
     "x": "50.8",
     "y": "5.6"
    },
    "min": 10,
    "chain": "",
    "task": "Get the Lorgalis Manuscript from a chest underwater near Ghamoo-ra's area.",
    "rewards": [
     "Sustaining Ring"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 1275,
    "name": "Researching the Corruption",
    "giver": "Gershala Nightwhisper",
    "where": {
     "zone": "Darkshore (Auberdine)",
     "x": "38.3",
     "y": "43.0"
    },
    "min": 18,
    "chain": "wowforevertalent lists The Corruption Abroad as the step before;",
    "task": "Collect 8 Corrupted Brain Stems from the naga and satyrs in and around BFD.",
    "rewards": [
     "Beetle Clasps",
     "Prelacy Cape",
     "Staghide Armguards"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 1198,
    "name": "In Search of Thaelrid",
    "giver": "Dawnwatcher Shaedlass",
    "where": {
     "zone": "Darnassus (Craftsmen's Terrace, upper floor)",
     "x": "55.4",
     "y": "25.0"
    },
    "min": 18,
    "chain": "",
    "task": "Find Argent Guard Thaelrid inside BFD.",
    "rewards": [],
    "note": "",
    "fac": "a"
   },
   {
    "id": 1200,
    "name": "Blackfathom Villainy",
    "giver": "Argent Guard Thaelrid",
    "where": {
     "zone": "Inside Blackfathom Deeps (cave southwest of Ghamoo-ra)",
     "x": null,
     "y": null
    },
    "min": 18,
    "chain": "After In Search of Thaelrid (1 step before); can also be shared.",
    "task": "Bring the head of Twilight Lord Kelris to Dawnwatcher Selgorm, Craftsmen's Terrace, Darnassus (~55.4, 23.8).",
    "rewards": [
     "Gravestone Scepter",
     "Arctic Buckler",
     "Dark Ritual Leggings",
     "Cultist's Armguards"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 1199,
    "name": "Twilight Falls",
    "giver": "Argent Guard Manados",
    "where": {
     "zone": "Darnassus (Craftsmen's Terrace)",
     "x": "55.2",
     "y": "24.0"
    },
    "min": 20,
    "chain": "",
    "task": "Collect 10 Twilight Pendants from Twilight's Hammer cultists inside.",
    "rewards": [
     "Nimbus Boots",
     "Heartwood Girdle",
     "Silvered Gauntlets"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 6563,
    "name": "The Essence of Aku'Mai",
    "giver": "Je'neu Sancrea",
    "where": {
     "zone": "Ashenvale (Zoram'gar Outpost)",
     "x": "11.6",
     "y": "34.3"
    },
    "min": 17,
    "chain": "Optional lead-in: Trouble in the Deeps (6562, min 17) from Tsunaman at Sun Rock Retreat, Stonetalon Mountains. You can't take it after finishing this one.",
    "task": "Bring 20 Sapphires of Aku'Mai from the blue crystals on the cave walls before the instance portal.",
    "rewards": [],
    "note": "XP and reputation only. Opens Amongst the Ruins.",
    "fac": "h"
   },
   {
    "id": 6565,
    "name": "Allegiance to the Old Gods",
    "giver": "Je'neu Sancrea",
    "where": {
     "zone": "Ashenvale (Zoram'gar Outpost)",
     "x": "11.6",
     "y": "34.3"
    },
    "min": 17,
    "chain": "Starts from a Damp Note that drops from Blackfathom Tide Priestesses (Allegiance to the Old Gods, 6564); bring it to Je'neu to get this one.",
    "task": "Kill Lorgus Jett inside and return to Je'neu Sancrea.",
    "rewards": [
     "Chestnut Mantle",
     "Band of the Fist"
    ],
    "note": "Lorgus Jett's spawn point moves around.",
    "fac": "h"
   },
   {
    "id": 6561,
    "name": "Blackfathom Villainy",
    "giver": "Argent Guard Thaelrid",
    "where": {
     "zone": "Inside Blackfathom Deeps (cave southwest of Ghamoo-ra)",
     "x": null,
     "y": null
    },
    "min": 18,
    "chain": "Starts inside the dungeon.",
    "task": "Bring the head of Twilight Lord Kelris to Bashana Runetotem, Elder Rise, Thunder Bluff (70.8, 33.8).",
    "rewards": [
     "Gravestone Scepter",
     "Arctic Buckler",
     "Dark Ritual Leggings",
     "Cultist's Armguards"
    ],
    "note": "The Horde version of the Alliance quest 1200.",
    "fac": "h"
   },
   {
    "id": 6921,
    "name": "Amongst the Ruins",
    "giver": "Je'neu Sancrea",
    "where": {
     "zone": "Ashenvale (Zoram'gar Outpost)",
     "x": "11.6",
     "y": "34.3"
    },
    "min": 21,
    "chain": "After The Essence of Aku'Mai.",
    "task": "Bring back the Fathom Core, a stone egg in the water below the walkway just before Kelris. Looting it spawns Baron Aquanis.",
    "rewards": [],
    "note": "XP and reputation only.",
    "fac": "h"
   },
   {
    "id": 6922,
    "name": "Baron Aquanis",
    "giver": "Strange Water Globe (drops from Baron Aquanis)",
    "where": {
     "zone": "Inside Blackfathom Deeps",
     "x": null,
     "y": null
    },
    "min": 21,
    "chain": "Baron Aquanis spawns when you loot the Fathom Core for Amongst the Ruins.",
    "task": "Take the Strange Water Globe to Je'neu Sancrea at Zoram'gar Outpost.",
    "rewards": [
     "Outlaw Sabre",
     "Witch's Finger"
    ],
    "note": "Reward names are the Classic ones; wowtbc and wowhandbook haven't seen them in Forever yet.",
    "fac": "h"
   },
   {
    "id": 3765,
    "name": "The Corruption Abroad",
    "giver": "Argos Nightwhisper",
    "where": {
     "zone": "Stormwind City",
     "x": "21.4",
     "y": "55.8"
    },
    "min": 18,
    "chain": "Lead-in to Researching the Corruption (1275).",
    "task": "Speak with Gershala Nightwhisper in Auberdine, Darkshore.",
    "rewards": [],
    "note": "Worth grabbing for Humans and Skyborne before sailing to Auberdine.",
    "fac": "a"
   }
  ],
  "cap": 20
 },
 "stocks": {
  "key": "stocks",
  "name": "The Stockade",
  "short": "The Stockade",
  "levels": "22–32",
  "zone": "Stormwind City",
  "entrance": {
   "zone": "Stormwind City",
   "x": "41.2",
   "y": "58.0",
   "note": ""
  },
  "travel": {
   "if": "Take the Deeprun Tram from Tinkertown to Stormwind and walk to the canal by the Mage Quarter. Two of its quests start in Darkshire (Duskwood) and Dun Modr (Wetlands), so pick those up on the way.",
   "sw": "You're home. Walk to the canal by the Mage Quarter; Warden Thelwater stands outside the Stockade. Crime and Punishment (Darkshire, Duskwood) and What Comes Around... (Lakeshire, Redridge) are short rides away; The Fury Runs Deep starts at Dun Modr in the Wetlands.",
   "org": "Impractical: the entrance is inside Stormwind City, and there are no Horde quests.",
   "uc": "Impractical: the entrance is inside Stormwind City, and there are no Horde quests."
  },
  "reach": {
   "a": "easy: inside Stormwind",
   "h": "impractical: inside Stormwind, and no Horde quests"
  },
  "bosses": [
   "Targorr the Dread",
   "Kam Deepfury",
   "Hamhock",
   "Dextren Ward",
   "Bazil Thredd",
   "Bruegal Ironknuckle (rare)"
  ],
  "forever": "No Forever changes found. No Horde quests.",
  "quests": [
   {
    "id": 387,
    "name": "Quell the Uprising",
    "giver": "Warden Thelwater",
    "where": {
     "zone": "Stormwind City (outside the Stockade)",
     "x": "41.2",
     "y": "58.0"
    },
    "min": 22,
    "chain": "",
    "task": "Kill 10 Defias Prisoners, 8 Defias Convicts and 8 Defias Insurgents.",
    "rewards": [],
    "note": "",
    "fac": "a"
   },
   {
    "id": 388,
    "name": "The Color of Blood",
    "giver": "Nikova Raskol",
    "where": {
     "zone": "Stormwind City (patrols Old Town)",
     "x": null,
     "y": null
    },
    "min": 22,
    "chain": "",
    "task": "Collect 10 Red Wool Bandanas from Defias inside.",
    "rewards": [],
    "note": "",
    "fac": "a"
   },
   {
    "id": 377,
    "name": "Crime and Punishment",
    "giver": "Councilman Millstipe",
    "where": {
     "zone": "Duskwood (Darkshire)",
     "x": "72.0",
     "y": "47.8"
    },
    "min": 22,
    "chain": "",
    "task": "Bring back the Hand of Dextren Ward.",
    "rewards": [
     "Ambassador's Boots",
     "Darkshire Mail Leggings",
     "Town Clerk's Mittens"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 386,
    "name": "What Comes Around...",
    "giver": "Guard Berton",
    "where": {
     "zone": "Redridge Mountains (Lakeshire)",
     "x": "26.6",
     "y": "46.8"
    },
    "min": 22,
    "chain": "",
    "task": "Bring back the Head of Targorr the Dread.",
    "rewards": [
     "Lucine Longsword",
     "Hardened Root Staff",
     "Ursine Hammer"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 378,
    "name": "The Fury Runs Deep",
    "giver": "Motley Garmason",
    "where": {
     "zone": "Wetlands (Dun Modr)",
     "x": "49.6",
     "y": "18.2"
    },
    "min": 22,
    "chain": "Do The Dark Iron War (same NPC) first (1 step before).",
    "task": "Bring back the Head of Kam Deepfury.",
    "rewards": [
     "Belt of Vindication",
     "Headbasher"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 391,
    "name": "The Stockade Riots",
    "giver": "Warden Thelwater",
    "where": {
     "zone": "Stormwind City (outside the Stockade)",
     "x": "41.2",
     "y": "58.0"
    },
    "min": 16,
    "chain": "Starts with The Unsent Letter (drops from Edwin VanCleef in the Deadmines), then Bazil Thredd; 2 steps before this one.",
    "task": "Kill Bazil Thredd and bring his head to Warden Thelwater.",
    "rewards": [],
    "note": "",
    "fac": "a"
   }
  ],
  "cap": 20
 },
 "exsite": {
  "key": "exsite",
  "name": "Excavation Site: Wetlands",
  "short": "Excavation Site",
  "levels": "24–29",
  "zone": "Wetlands",
  "entrance": {
   "zone": "Wetlands",
   "x": "38.5",
   "y": "47.0",
   "note": "Coordinates from one site; not confirmed yet."
  },
  "travel": {
   "if": "Fly to Menethil Harbor, or run from Ironforge through Loch Modan and the Dun Algaz tunnel into the Wetlands. Head for Whelgar's Excavation Site; the dungeon is up the hill above the dig.",
   "sw": "Take the Deeprun Tram to Ironforge and ride through Loch Modan and the Dun Algaz tunnel into the Wetlands, or sail from Stormwind Harbor to Auberdine and take the boat to Menethil Harbor. Whelgar's Excavation Site is east of Menethil along the main road; the dungeon is up the hill above the dig.",
   "org": "Take the zeppelin from Durotar to Tirisfal Glades, then as from Undercity.",
   "uc": "Far. wowhandbook's Horde route: go south through Silverpine into Hillsbrad (Tarren Mill), east through Arathi Highlands to Hammerfall, then south across Thandol Span into the Wetlands and on to Whelgar's Excavation Site, east of the Alliance port of Menethil Harbor."
  },
  "reach": {
   "a": "easy: in the Wetlands, a short ride east of Menethil Harbor",
   "h": "far: across Arathi and Thandol Span into the Alliance-held Wetlands, with no quests to draw you there"
  },
  "bosses": [
   "Saltspine",
   "Shadetooth",
   "Highland Horror",
   "Relic Guardian"
  ],
  "forever": "New in Forever and opens with the level 30 cap. No quests for either faction (wowhandbook, Sept 26), and nobody has published its loot yet (wowtbc).",
  "quests": [],
  "cap": 30
 },
 "gnomer": {
  "key": "gnomer",
  "name": "Gnomeregan",
  "short": "Gnomeregan",
  "levels": "26–36",
  "zone": "Dun Morogh",
  "entrance": {
   "zone": "Dun Morogh",
   "x": "24.0",
   "y": "40.0",
   "note": ""
  },
  "travel": {
   "if": "Ride west from Ironforge past Kharanos, cross the frozen lake and pass Brewnall Village to the gnome building with the lift. Ride it down and cross the outer area to the entrance. The front way needs no key.",
   "sw": "Take the Deeprun Tram to Ironforge, then ride west past Kharanos, cross the frozen lake and pass Brewnall Village to the gnome building with the lift. Ride it down and cross the outer area to the entrance. Shoni the Shilent in Stormwind's Dwarven District gives Gyrodrillmatic Excavationators, and Brother Sarno in Stormwind starts the Tinkmaster Overspark lead-in.",
   "org": "Use the goblin transporter. Take Rig Wars from Nogg in the Valley of Honor (76.0, 25.4), then Chief Engineer Scooty from Sovik in the same shop. Get to Booty Bay (zeppelin to Grom'gol and ride south through Stranglethorn, or the boat from Ratchet), do Gnomer-gooooone! with Scooty to get the Goblin Transponder, then step on his pad to teleport to Gnomeregan. Walking instead means crossing Arathi, the Wetlands, Loch Modan and Dun Morogh.",
   "uc": "You need Rig Wars and Chief Engineer Scooty from Orgrimmar first, so take the zeppelin to Durotar, then the zeppelin from Durotar to Grom'gol, ride south to Booty Bay and use Scooty's transporter.",
   "sky": "Exploring the Alliance also sends you to High Tinker Mekkatorque in Tinker Town, who gives The Grand Betrayal."
  },
  "reach": {
   "a": "easy: in Dun Morogh, west of Ironforge",
   "h": "far on foot, but Scooty's transporter in Booty Bay teleports you there once you've done Rig Wars, Chief Engineer Scooty and Gnomer-gooooone!"
  },
  "bosses": [
   "Grubbis",
   "Viscous Fallout",
   "Electrocutioner 6000",
   "Crowd Pummeler 9-60",
   "Mekgineer Thermaplugg"
  ],
  "forever": "Horde keeps its Classic quests: Rig Wars and the Booty Bay transporter chain, plus the shared A Fine Mess and ring chain.",
  "quests": [
   {
    "id": 2922,
    "name": "Save Techbot's Brain!",
    "giver": "Tinkmaster Overspark",
    "where": {
     "zone": "Ironforge (Tinkertown)",
     "x": "69.5",
     "y": "50.3"
    },
    "min": 20,
    "chain": "Optional lead-in: Tinkmaster Overspark (2923) from Brother Sarno in Stormwind.",
    "task": "Get Techbot's Memory Core from Techbot in the outer area before the portal.",
    "rewards": [],
    "note": "",
    "fac": "a"
   },
   {
    "id": 2928,
    "name": "Gyrodrillmatic Excavationators",
    "giver": "Shoni the Shilent",
    "where": {
     "zone": "Stormwind City (Dwarven District)",
     "x": "55.6",
     "y": "12.6"
    },
    "min": 20,
    "chain": "",
    "task": "Collect 24 Robo-mechanical Guts from the machines inside.",
    "rewards": [
     "Shoni's Disarming Tool",
     "Shilly Mitts",
     "Operator's Gloves"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 2926,
    "name": "Gnogaine",
    "giver": "Ozzie Togglevolt",
    "where": {
     "zone": "Dun Morogh (Kharanos)",
     "x": "45.9",
     "y": "49.4"
    },
    "min": 20,
    "chain": "Lead-in: The Day After (2927) from Gnoarn in Tinkertown (~69.2, 50.5).",
    "task": "Use the Leaden Collection Phial on Irradiated Pillagers/Invaders in the outer area until it's full.",
    "rewards": [],
    "note": "",
    "fac": "a"
   },
   {
    "id": 2962,
    "name": "The Only Cure is More Green Glow",
    "giver": "Ozzie Togglevolt",
    "where": {
     "zone": "Dun Morogh (Kharanos)",
     "x": "45.9",
     "y": "49.4"
    },
    "min": 20,
    "chain": "After Gnogaine (1 step before).",
    "task": "Collect High Potency Radioactive Fallout from Irradiated Slimes/Horrors inside.",
    "rewards": [],
    "note": "",
    "fac": "a"
   },
   {
    "id": 2924,
    "name": "Essential Artificials",
    "giver": "Klockmort Spannerspan",
    "where": {
     "zone": "Ironforge (Tinkertown)",
     "x": "67.9",
     "y": "46.1"
    },
    "min": 24,
    "chain": "",
    "task": "Collect 12 Essential Artificials from the machines inside.",
    "rewards": [],
    "note": "",
    "fac": "a"
   },
   {
    "id": 2930,
    "name": "Data Rescue",
    "giver": "Master Mechanic Castpipe",
    "where": {
     "zone": "Ironforge (Tinkertown)",
     "x": "69.8",
     "y": "48.1"
    },
    "min": 25,
    "chain": "",
    "task": "Make a Prismatic Punch Card at the four Matrix Punchograph machines inside.",
    "rewards": [
     "Repairman's Cape",
     "Mechanic's Pipehammer"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 2929,
    "name": "The Grand Betrayal",
    "giver": "High Tinker Mekkatorque",
    "where": {
     "zone": "Ironforge (Tinkertown)",
     "x": "68.8",
     "y": "49.0"
    },
    "min": 25,
    "chain": "",
    "task": "Kill Mekgineer Thermaplugg.",
    "rewards": [
     "Civinad Robes",
     "Triprunner Dungarees",
     "Dual Reinforced Leggings"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 2904,
    "name": "A Fine Mess",
    "giver": "Kernobee",
    "where": {
     "zone": "Inside Gnomeregan (after the Clean Zone)",
     "x": null,
     "y": null
    },
    "min": 20,
    "chain": "Starts inside the dungeon.",
    "task": "Escort Kernobee to the Clockwerk Run exit, then report to Scooty in Booty Bay (27.6, 77.4).",
    "rewards": [
     "Fire-welded Bracers",
     "Fairywing Mantle",
     "Technician's Bracers"
    ],
    "note": "",
    "fac": "both"
   },
   {
    "id": 2945,
    "name": "Grime-Encrusted Ring",
    "giver": "Grime-Encrusted Ring (drops from Dark Iron Agents inside)",
    "where": {
     "zone": "Inside Gnomeregan",
     "x": null,
     "y": null
    },
    "min": 28,
    "chain": "Clean it in the Sparklematic 5200 (Clean Zone), then Return of the Ring (2947) and Gnome Improvement (2948) with Talvash del Kissel, Mystic Ward, Ironforge (~36.4, 3.6).",
    "task": "Clean the ring, return it to Talvash, and bring him a Silver Bar, a Moss Agate and some silver.",
    "rewards": [
     "Talvash's Gold Ring"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 2841,
    "name": "Rig Wars",
    "giver": "Nogg",
    "where": {
     "zone": "Orgrimmar (Valley of Honor, engineering shop)",
     "x": "76.0",
     "y": "25.4"
    },
    "min": 25,
    "chain": "Accepting it unlocks Chief Engineer Scooty.",
    "task": "Kill Mekgineer Thermaplugg for Thermaplugg's Safe Combination, open his safe for the Rig Blueprints, and bring both to Nogg.",
    "rewards": [
     "Civinad Robes",
     "Triprunner Dungarees",
     "Dual Reinforced Leggings"
    ],
    "note": "Min 25 per Wowhead's quest guide; zockify shows 40. The Horde version of The Grand Betrayal.",
    "fac": "h"
   },
   {
    "id": 2842,
    "name": "Chief Engineer Scooty, then Gnomer-gooooone!",
    "giver": "Sovik",
    "where": {
     "zone": "Orgrimmar (Valley of Honor, same shop as Nogg)",
     "x": null,
     "y": null
    },
    "min": 20,
    "chain": "Needs Rig Wars accepted first. Leads to Gnomer-gooooone! (2843) from Scooty in Booty Bay.",
    "task": "Speak with Scooty in Booty Bay (27.6, 77.4), then wait while he calibrates the Goblin Transponder.",
    "rewards": [
     "Goblin Transponder"
    ],
    "note": "The transponder lets you step on Scooty's pad in Booty Bay and teleport to Gnomeregan; there's a return pad inside (Wowhead quest text). A Wowhead comment warns not to finish STOLEN: Smithing Tuyere and Lookout's Spyglass first, or this quest becomes unavailable.",
    "fac": "h"
   },
   {
    "id": 2945,
    "name": "Grime-Encrusted Ring",
    "giver": "Grime-Encrusted Ring (drops from Dark Iron Agents inside)",
    "where": {
     "zone": "Inside Gnomeregan",
     "x": null,
     "y": null
    },
    "min": 28,
    "chain": "Clean it in the Sparklematic 5200 (The Sparklematic 5200!, 2951), then Return of the Ring and Nogg's Ring Redo (2950) with Nogg in Orgrimmar (76.0, 25.4).",
    "task": "Clean the ring, then bring Nogg the Brilliant Gold Ring, a Silver Bar, a Moss Agate and 30 silver.",
    "rewards": [],
    "note": "The Horde ending of the shared ring chain (wowhandbook lists Return of the Ring as 2947/2949 for the two factions). Its ring reward isn't in Forever's data yet.",
    "fac": "h"
   }
  ],
  "cap": 20
 },
 "rfk": {
  "key": "rfk",
  "name": "Razorfen Kraul",
  "short": "Razorfen Kraul",
  "levels": "29–38",
  "zone": "The Barrens",
  "entrance": {
   "zone": "The Barrens",
   "x": "42.3",
   "y": "89.9",
   "note": ""
  },
  "travel": {
   "if": "Take the boat from Menethil to Theramore, go west through Dustwallow Marsh to the Barrens' main road and turn south. Pass the Horde town of Camp Taurajo (go around it). The bramble mound is at the far south, just north of the Great Lift.",
   "sw": "Get to Menethil Harbor (ship from Stormwind Harbor to Auberdine, then the boat for Menethil; or tram to Ironforge and ride through Loch Modan and the Wetlands), take the boat to Theramore, go west through Dustwallow Marsh to the Barrens' main road and turn south past Camp Taurajo (a Horde town; go around it). The bramble mound is at the far south, just north of the Great Lift. At 30 you can also ride south through Duskwood and Stranglethorn to Booty Bay, take the boat to Ratchet and ride southwest.",
   "org": "Fly to the Crossroads or Camp Taurajo if you have them, then ride south along the Barrens road to the far south. The bramble mound is just north of the Great Lift.",
   "uc": "Take the zeppelin from Tirisfal Glades to Durotar, then as from Orgrimmar."
  },
  "reach": {
   "a": "far: boats to Theramore, then south through the Horde Barrens past Camp Taurajo",
   "h": "easy: a ride south through the Barrens (Undead: one zeppelin ride first)"
  },
  "bosses": [
   "Roogug",
   "Aggem Thorncurse",
   "Death Speaker Jargba",
   "Overlord Ramtusk",
   "Agathelos the Raging",
   "Charlga Razorflank"
  ],
  "forever": "Its entrance and drops need a group of 29 or higher; a level 30 group is right at the low end. Horde quests unlock at 28-30.",
  "quests": [
   {
    "id": 1221,
    "name": "Blueleaf Tubers",
    "giver": "Mebok Mizzyrix",
    "where": {
     "zone": "The Barrens (Ratchet)",
     "x": "62.4",
     "y": "37.6"
    },
    "min": 20,
    "chain": "",
    "task": "Use the gopher he gives you to dig up 6 Blueleaf Tubers inside RFK.",
    "rewards": [
     "A Small Container of Gems"
    ],
    "note": "",
    "fac": "both"
   },
   {
    "id": 1144,
    "name": "Willix the Importer",
    "giver": "Willix the Importer",
    "where": {
     "zone": "Inside Razorfen Kraul",
     "x": null,
     "y": null
    },
    "min": 22,
    "chain": "Starts inside the dungeon.",
    "task": "Escort Willix out to the dungeon entrance.",
    "rewards": [
     "Monkey Ring",
     "Snake Hoop",
     "Tiger Band"
    ],
    "note": "Rewards: pick Snake Hoop.",
    "fac": "both"
   },
   {
    "id": 1142,
    "name": "Mortality Wanes",
    "giver": "Heralath Fallowbrook",
    "where": {
     "zone": "Inside Razorfen Kraul (dying elf in a hut)",
     "x": null,
     "y": null
    },
    "min": 25,
    "chain": "Starts inside the dungeon.",
    "task": "Find Treshala's Pendant (random drop inside) and take it to Treshala Fallowbrook, Tradesmen's Terrace, Darnassus (69.6, 67.6).",
    "rewards": [
     "Mourning Shawl",
     "Lancer Boots"
    ],
    "note": "Its Classic rewards aren’t in Forever’s item data yet.",
    "fac": "a"
   },
   {
    "id": 1101,
    "name": "The Crone of the Kraul",
    "giver": "Falfindel Waywarder",
    "where": {
     "zone": "Feralas (Thalanaar)",
     "x": "89.6",
     "y": "46.6"
    },
    "min": 29,
    "chain": "1 step before: Lonebrow's Journal, from a corpse at the bottom of the Great Lift in Thousand Needles.",
    "task": "Bring Razorflank's Medallion from Charlga Razorflank.",
    "rewards": [
     "Berylline Pads",
     "Stonefist Girdle",
     "Marbled Buckler"
    ],
    "note": "Wowhead’s Forever quest list leaves this one out, so it may not exist in Forever.",
    "fac": "a"
   },
   {
    "id": 6522,
    "name": "An Unholy Alliance",
    "giver": "Small Scroll (drops from Charlga Razorflank)",
    "where": {
     "zone": "Inside Razorfen Kraul",
     "x": null,
     "y": null
    },
    "min": 28,
    "chain": "Take the scroll to Varimathras, Royal Quarter, Undercity (56.3, 92.2); he gives a second An Unholy Alliance (6521).",
    "task": "Then kill Ambassador Malcin, who wanders between the tents outside Razorfen Downs, and bring his head to Varimathras.",
    "rewards": [
     "Zealot's Robe",
     "Skullbreaker",
     "Nail Spitter"
    ],
    "note": "The second part is a level 36 quest next to Razorfen Downs; hard at the 30 cap. Wowhead shows two of the rewards only as items 17042 and 17043; zockify names them Nail Spitter and Zealot's Robe.",
    "fac": "h"
   },
   {
    "id": 1102,
    "name": "A Vengeful Fate",
    "giver": "Auld Stonespire",
    "where": {
     "zone": "Thunder Bluff",
     "x": "36.0",
     "y": "59.9"
    },
    "min": 29,
    "chain": "",
    "task": "Bring Razorflank's Heart from Charlga Razorflank (last boss).",
    "rewards": [
     "Berylline Pads",
     "Stonefist Girdle",
     "Marbled Buckler"
    ],
    "note": "The Horde version of the Alliance's The Crone of the Kraul.",
    "fac": "h"
   },
   {
    "id": 1109,
    "name": "Going, Going, Guano!",
    "giver": "Master Apothecary Faranell",
    "where": {
     "zone": "Undercity (The Apothecarium)",
     "x": "48.8",
     "y": "69.3"
    },
    "min": 30,
    "chain": "",
    "task": "Bring a pile of Kraul Guano from the Kraul bats inside.",
    "rewards": [],
    "note": "XP only; opens Hearts of Zeal for Scarlet Monastery.",
    "fac": "h"
   }
  ],
  "cap": 20
 },
 "smgy": {
  "key": "smgy",
  "name": "Scarlet Monastery: Graveyard",
  "short": "SM Graveyard",
  "levels": "26–36",
  "zone": "Tirisfal Glades",
  "entrance": {
   "zone": "Tirisfal Glades",
   "x": "85.1",
   "y": "31.4",
   "note": ""
  },
  "travel": {
   "if": "Get to Southshore (the Menethil boat now stops there), then head north past the Horde town of Tarren Mill into the Western Plaguelands and west into Tirisfal Glades. The Monastery is in the northeast of the zone. It's deep in Horde land, so go with your group.",
   "sw": "Take the ship from Stormwind Harbor to Auberdine and the boat for Menethil to Southshore, then head north past the Horde town of Tarren Mill into the Western Plaguelands and west into Tirisfal Glades. The Monastery is in the northeast of the zone. It's deep in Horde land, so go with your group.",
   "org": "Take the zeppelin from Durotar to Tirisfal Glades, then ride east through Tirisfal to the Monastery at the zone's northeast edge.",
   "uc": "Close. From Undercity ride north to Brill, then east along the road through Tirisfal to the Monastery at the zone's northeast edge."
  },
  "reach": {
   "a": "far: boats to Southshore, then past Horde Tarren Mill into Horde Tirisfal",
   "h": "easy for Undead (a ride from Undercity); Orcs and Trolls take one zeppelin"
  },
  "bosses": [
   "Interrogator Vishas",
   "Bloodmage Thalnos"
  ],
  "forever": "Two of its best drops come from rares that aren't there every run: Azshir the Sleepless and the Fallen Champion.",
  "quests": [
   {
    "id": 1051,
    "name": "Vorrel's Revenge",
    "giver": "Vorrel Sengutz",
    "where": {
     "zone": "Inside Scarlet Monastery: Graveyard (tortured on a table)",
     "x": null,
     "y": null
    },
    "min": 25,
    "chain": "Starts inside the dungeon.",
    "task": "Get Vorrel's Wedding Ring from Nancy at a house on the northeast shore of Lordamere Lake in Alterac Mountains (about 31, 32), then bring it to Monika Sengutz in Tarren Mill, Hillsbrad.",
    "rewards": [
     "Grimsteel Cape",
     "Mantle of Woe",
     "Vorrel's Boots"
    ],
    "note": "Nancy is a level 33 elite with a level 34 elite grandfather; tough at the 30 cap. Reward names from wowtbc; Wowhead shows one only as item 7751.",
    "fac": "h"
   },
   {
    "id": 1113,
    "name": "Hearts of Zeal",
    "giver": "Master Apothecary Faranell",
    "where": {
     "zone": "Undercity (The Apothecarium)",
     "x": "48.8",
     "y": "69.3"
    },
    "min": 30,
    "chain": "After Going, Going, Guano! (Razorfen Kraul).",
    "task": "Collect 20 Hearts of Zeal from Scarlet Crusade mobs in the Monastery (they drop outside too).",
    "rewards": [],
    "note": "XP and reputation only.",
    "fac": "h"
   }
  ],
  "cap": 20
 },
 "dalaran": {
  "key": "dalaran",
  "name": "City of Dalaran",
  "short": "City of Dalaran",
  "levels": "28–33",
  "zone": "Alterac Mountains",
  "entrance": {
   "zone": "Alterac Mountains",
   "x": "19.4",
   "y": "85.6",
   "note": "Coordinates from one site; not confirmed yet."
  },
  "travel": {
   "if": "Get to Southshore (the Menethil boat now stops there), then head northwest along the road into the Alterac foothills to the ruins of Dalaran beside Lordamere Lake.",
   "sw": "Take the ship from Stormwind Harbor to Auberdine and the boat for Menethil to Southshore (or fly there), then head northwest along the road into the Alterac foothills to the ruins of Dalaran beside Lordamere Lake.",
   "org": "Take the zeppelin from Durotar to Tirisfal Glades, then as from Undercity.",
   "uc": "Go south through Silverpine into Hillsbrad and fly or ride to Tarren Mill (woweternity's Horde route), then head northwest into the Alterac foothills to the ruins of Dalaran beside Lordamere Lake.",
   "sky": "Skyborne also have a portal from Stormwind's Mage Tower to Dalaran's Sky Enclave, where they first arrived from Zephras Isle; whether it gets you to the dungeon entrance isn't confirmed."
  },
  "reach": {
   "a": "moderate: a boat or flight to Southshore, then a short ride",
   "h": "moderate: Tarren Mill, then a short ride"
  },
  "bosses": [
   "Arcane Anomaly",
   "Fel Ancient",
   "Mana Devourer",
   "Mana Elemental",
   "Unstable Sentinel",
   "Shade of the Archmage",
   "Lyn the Ignored",
   "Atrexis the Grave Knight",
   "Mana Wraith"
  ],
  "forever": "New in Forever and opens with the level 30 cap; the barrier around Dalaran has come down. Nine bosses and lots of spellcasters. No quests or loot published yet.",
  "quests": [],
  "cap": 30
 },
 "smlib": {
  "key": "smlib",
  "name": "Scarlet Monastery: Library",
  "short": "SM Library",
  "levels": "29–39",
  "zone": "Tirisfal Glades",
  "entrance": {
   "zone": "Tirisfal Glades",
   "x": "85.1",
   "y": "31.4",
   "note": ""
  },
  "travel": {
   "if": "Same courtyard as the Graveyard; the Library door is next to it.",
   "sw": "Same courtyard as the Graveyard; the Library door is next to it.",
   "org": "Same courtyard as the Graveyard; the Library door is next to it.",
   "uc": "Same courtyard as the Graveyard; the Library door is next to it."
  },
  "reach": {
   "a": "far: boats to Southshore, then past Horde Tarren Mill into Horde Tirisfal",
   "h": "easy for Undead (a ride from Undercity); Orcs and Trolls take one zeppelin"
  },
  "bosses": [
   "Houndmaster Loksey",
   "Arcanist Doan"
  ],
  "forever": "Horde quests: Compendium of the Fallen (not for Undead) and a Test of Lore step. Both factions: the mage-only Rituals of Power chain, which opens at 30.",
  "quests": [
   {
    "id": 1050,
    "name": "Mythology of the Titans",
    "giver": "Librarian Mae Paledust",
    "where": {
     "zone": "Ironforge (Hall of Explorers)",
     "x": "75.0",
     "y": "12.5"
    },
    "min": 28,
    "chain": "",
    "task": "Find the book Mythology of the Titans in the Library wing and bring it back.",
    "rewards": [
     "Explorers' League Commendation"
    ],
    "note": "",
    "fac": "a"
   },
   {
    "id": 1049,
    "name": "Compendium of the Fallen",
    "giver": "Sage Truthseeker",
    "where": {
     "zone": "Thunder Bluff",
     "x": "34.4",
     "y": "46.9"
    },
    "min": 28,
    "chain": "",
    "task": "Find the Compendium of the Fallen in the Library (a black book on the left shelf as you enter the Athenaeum) and bring it back.",
    "rewards": [
     "Omega Orb",
     "Vile Protector",
     "Forcestone Buckler"
    ],
    "note": "Not available to Undead.",
    "fac": "h"
   },
   {
    "id": 1160,
    "name": "Test of Lore",
    "giver": "Parqual Fintallas",
    "where": {
     "zone": "Undercity",
     "x": "57.8",
     "y": "65.4"
    },
    "min": 25,
    "chain": "Step 8 of a 10-quest chain that starts with Test of Faith (1149) in Thousand Needles: Test of Faith, Test of Endurance, Test of Strength, five Test of Lore steps, then Final Passage.",
    "task": "Find The Beginnings of the Undead Threat in the Library and return it to Parqual Fintallas.",
    "rewards": [
     "Dancing Flame",
     "Windstorm Hammer"
    ],
    "note": "Min 25 is from Wowhead's quest guide; the chain's earlier steps may need a higher level.",
    "fac": "h"
   },
   {
    "id": 1951,
    "name": "Rituals of Power",
    "giver": "Magus Tirth",
    "where": {
     "zone": "Thousand Needles (Shimmering Flats)",
     "x": "78.3",
     "y": "75.7"
    },
    "min": 30,
    "chain": "Mage only. A 6-quest chain that opens at level 30: Journey to the Marsh (1947, from a mage trainer; Wowhead names Stormwind for Alliance) to Tabetha in Dustwallow Marsh (46.0, 57.0), then Items of Power, Hidden Secrets, Get the Scoop, Rituals of Power, and Mage's Wand (1952).",
    "task": "Get the book Rituals of Power from the Library (left-hand shelf in the Athenaeum) and bring it to Tabetha in Dustwallow Marsh.",
    "rewards": [
     "Icefury Wand",
     "Nether Force Wand",
     "Ragefire Wand"
    ],
    "note": "The wands come from Mage's Wand, a level 40 quest; Wowhead comments suggest waiting until closer to 40 for the Dustwallow trips.",
    "fac": "both",
    "mage": true
   }
  ],
  "cap": 20
 }
};

const PLANS = {
 "20": {
  "a": {
   "steps": [
    {
     "key": "hot",
     "why": "A warm-up right under Ironforge. Important Heirlooms gives the Dwarven Tome, your off hand, and Old Ironforge Incursion gives Deepblaze, a good early wand."
    },
    {
     "key": "dm",
     "why": "Buzzer Blade, your main hand, drops from Sneed’s Shredder, along with Ogre Loincloth and Lavishly Jeweled Ring. Underground Assault gives the Sable Wand. Start The Defias Brotherhood at Sentinel Hill before your first run."
    },
    {
     "key": "wc",
     "why": "Sizzle Stick, your best wand, from Deviate Eradication, plus Serpent Gloves and the shard quest for Talbar Mantle. A long trip: take the boat from Menethil Harbor to Theramore."
    },
    {
     "key": "rol",
     "why": "Your robe, Leftover Abomination Skin, plus Tuskwrap Belt and Rotmender’s Leggings. It’s a long trek through Horde land, so go with your group."
    },
    {
     "key": "sfk",
     "opt": true,
     "why": "Mindthrust Bracers drop from the trash. They’re Bind on Equip, so check the Auction House first."
    },
    {
     "key": "bfd",
     "opt": true,
     "why": "Researching the Corruption gives Prelacy Cape, and the trash can drop Evocator’s Blade. Tuned a few levels above 20."
    }
   ],
   "skip": [
    {
     "key": "rfc",
     "why": "Its entrance is inside Orgrimmar."
    }
   ]
  },
  "h": {
   "steps": [
    {
     "key": "rfc",
     "why": "Right in Orgrimmar. Thrall’s Hidden Enemies chain gives the Staff of Orgrimmar, a good early staff, and The Power to Destroy... gives Ghastly Trousers. Undead take the zeppelin from Tirisfal."
    },
    {
     "key": "rol",
     "why": "Your big one. The Wrath of Rath’mael gives the Gnarled Necromancer’s Staff, your weapon, and The Baron drops Leftover Abomination Skin, your robe. Tuskwrap Belt, Rotmender’s Leggings and two quest pieces come from here too."
    },
    {
     "key": "wc",
     "why": "Sizzle Stick, your best wand, from Deviate Eradication, plus Serpent Gloves and the Crescent Staff from Leaders of the Fang."
    },
    {
     "key": "sfk",
     "opt": true,
     "why": "Mindthrust Bracers drop from the trash; check the Auction House first. Pick up The Book of Ur and Deathstalkers in Shadowfang now for later."
    },
    {
     "key": "bfd",
     "opt": true,
     "why": "Only if your group is ready: it’s tuned above 20. The trash can drop Evocator’s Blade and the Staff of the Blessed Seer."
    }
   ],
   "skip": [
    {
     "key": "hot",
     "why": "Its entrance is under Ironforge."
    },
    {
     "key": "dm",
     "why": "It’s deep in Alliance land, and there are no Horde quests."
    }
   ]
  }
 },
 "30": {
  "a": {
   "steps": [
    {
     "key": "stocks",
     "why": "Crime and Punishment gives Town Clerk’s Mittens, your gloves, and Targorr the Dread drops Dark Horde Band. Pick up the quest in Darkshire on the way."
    },
    {
     "key": "sfk",
     "why": "Belt of Arugal from the last boss, plus Mindthrust Bracers from the trash."
    },
    {
     "key": "bfd",
     "why": "Gaze Dreamer Pants and Blackfathom Villainy’s Gravestone Scepter both come from Twilight Lord Kelris. Ghamoo-ra’s Bind and the Tree Bark Jacket are here too."
    },
    {
     "key": "gnomer",
     "why": "Spidertank Oilrag, your bracers, plus Acidic Walkers and Hydrocane. Take Data Rescue for Repairman’s Cape and The Grand Betrayal for Civinad Robes."
    },
    {
     "key": "rfk",
     "why": "Swinetusk Shank, your weapon, from Agathelos the Raging, plus Death Speaker Mantle and Willix’s Snake Hoop. It’s the hardest dungeon at 30, so save it for last."
    },
    {
     "key": "smgy",
     "why": "Bloodmage Mantle, your shoulders, plus the Embalmed Shroud and Necrotic Wand when their rares are up."
    },
    {
     "key": "smlib",
     "opt": true,
     "why": "Only for Mythology of the Titans and its necklace. Tuned a little above 30."
    },
    {
     "key": "exsite",
     "opt": true,
     "why": "New at 30 and close to home. Nobody has published its loot yet, so it’s a gamble."
    }
   ],
   "skip": [
    {
     "key": "dalaran",
     "why": "New at 30, but tuned for 28 to 33 and nobody has published its loot yet."
    },
    {
     "key": "rfc",
     "why": "Its entrance is inside Orgrimmar."
    }
   ]
  },
  "h": {
   "steps": [
    {
     "key": "sfk",
     "why": "Close to home: Belt of Arugal from the last boss, Mindthrust Bracers from the trash, and cloth rewards from The Book of Ur and Deathstalkers in Shadowfang."
    },
    {
     "key": "bfd",
     "why": "Gaze Dreamer Pants and Blackfathom Villainy’s Gravestone Scepter both come from Twilight Lord Kelris. Ghamoo-ra’s Bind and the Tree Bark Jacket are here too."
    },
    {
     "key": "rfk",
     "why": "Swinetusk Shank, your weapon, from Agathelos the Raging, plus Death Speaker Mantle and Willix’s Snake Hoop. It’s the hardest dungeon at 30, so save it for late."
    },
    {
     "key": "smgy",
     "why": "Bloodmage Mantle, your shoulders, plus the Embalmed Shroud and Necrotic Wand when their rares are up."
    },
    {
     "key": "gnomer",
     "why": "Spidertank Oilrag, your bracers, plus Acidic Walkers and Hydrocane. Do Rig Wars and Chief Engineer Scooty first: Scooty’s transporter in Booty Bay takes you there."
    },
    {
     "key": "smlib",
     "opt": true,
     "why": "Compendium of the Fallen gives the Omega Orb, for Orcs and Trolls. Tuned a little above 30."
    }
   ],
   "skip": [
    {
     "key": "stocks",
     "why": "Its entrance is inside Stormwind."
    },
    {
     "key": "dm",
     "why": "It’s deep in Alliance land, and there are no Horde quests."
    },
    {
     "key": "exsite",
     "why": "It’s in the Alliance-held Wetlands, with no quests and no published loot."
    },
    {
     "key": "dalaran",
     "why": "New at 30, but nobody has published its loot yet."
    }
   ]
  }
 }
};

const SOURCES = [
 {
  "name": "Every dungeon quest in WoW Forever",
  "site": "Wowhead",
  "url": "https://www.wowhead.com/forever/guide/dungeons/every-dungeon-quest-location"
 },
 {
  "name": "Ruins of Lordaeron overview",
  "site": "Wowhead",
  "url": "https://www.wowhead.com/forever/guide/ruins-of-lordaeron-dungeon-overview-location-rewards"
 },
 {
  "name": "Hall of Thanes overview",
  "site": "Wowhead",
  "url": "https://www.wowhead.com/forever/guide/hall-of-thanes-dungeon-overview-location-rewards"
 },
 {
  "name": "Three new ship routes in Forever",
  "site": "Wowhead",
  "url": "https://www.wowhead.com/forever/news/three-new-ship-routes-debuting-in-forever-382891"
 },
 {
  "name": "Ruins of Lordaeron guide",
  "site": "Icy Veins",
  "url": "https://www.icy-veins.com/wow-forever/ruins-of-lordaeron-guide"
 },
 {
  "name": "Dungeon quests with levels and coordinates",
  "site": "wowhandbook",
  "url": "https://wowhandbook.com/zones/dungeons/ruins-of-lordaeron/"
 },
 {
  "name": "Excavation Site: Wetlands",
  "site": "wowhandbook",
  "url": "https://wowhandbook.com/zones/dungeons/excavation-site-wetlands/"
 },
 {
  "name": "Dungeon loot tables",
  "site": "wowtbc.gg",
  "url": "https://wowtbc.gg/warcraftforever/loot-tables/dungeons/"
 },
 {
  "name": "Dungeon guides",
  "site": "zockify",
  "url": "https://www.zockify.com/forever/dungeons/"
 },
 {
  "name": "Quest accept levels",
  "site": "wowforevertalent",
  "url": "https://wowforevertalent.com/quests/"
 },
 {
  "name": "City of Dalaran",
  "site": "WoW Eternity",
  "url": "https://woweternity.com/forever/dungeons/city-of-dalaran"
 },
 {
  "name": "Ships, zeppelins, portals and trams",
  "site": "Travelcraft",
  "url": "https://wow-travelcraft.com/guide.html"
 },
 {
  "name": "Alliance Skyborne leveling route",
  "site": "ForeverWisp",
  "url": "https://www.foreverwisp.com/guides/wow-forever-alliance-skyborne-leveling-guide"
 }
];

window.DUNGEON_DATA = { DUNGEONS: DUNGEONS, PLANS: PLANS, SOURCES: SOURCES };
})();
