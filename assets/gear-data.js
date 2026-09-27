/* Mage Forever TL;DR: gear data shared by the gear guide, the dungeon planner and the party board.
   Item stats come from Wowhead's Forever database; see the gear guide's notes and sources. */
(() => {
"use strict";

const PROFS = [["tail", "Tailoring"], ["ench", "Enchanting"], ["eng", "Engineering"]];
const PROF_NAME = { tail: "Tailoring", ench: "Enchanting", eng: "Engineering" };

/* Item data: stats are Wowhead Forever tooltip values. w = [min, max, speed, dps] for weapons and wands.
   fac marks faction-only quest rewards ("a" or "h"); rc limits an item to some races.
   A quest or how given as { a, h } differs by faction. lvl is the level needed to wear it. */
const ITEMS = {
  /* head */
  silkycirc: { n: "Silky Circlet", id: 253951, q: "r", t: "Cloth", s: { sta: 10, frost: 11 }, src: { k: "tail", skill: 100 }, lvl: 20 },
  flamecirc: { n: "Flame Circlet", id: 253953, q: "r", t: "Cloth", s: { sta: 10, fire: 11 }, src: { k: "tail", skill: 100 }, lvl: 20 },
  pearlycirc: { n: "Pearly Circlet", id: 253957, q: "r", t: "Cloth", s: { sta: 10, arcane: 11 }, src: { k: "tail", skill: 100 }, lvl: 20 },
  shadowgog: { n: "Shadow Goggles", id: 4373, q: "u", t: "Cloth", s: { int: 5, spi: 6 }, src: { k: "eng", skill: 120 } },
  embalmed: { n: "Embalmed Shroud", id: 7691, q: "r", t: "Cloth", s: { sta: 7, spi: 12, heal: 24, dmg: 8 }, src: { k: "smgy", by: "the Fallen Champion", rare: true }, lvl: 30 },
  cowl: { n: "Enchanter's Cowl", id: 4322, q: "u", t: "Cloth", s: { int: 10, sp: 5 }, src: { k: "boe", by: "Tailors make it (Tailoring 130)" }, lvl: 28 },
  lakeshire: { n: "Lakeshire Firefighter's Headband", id: 281675, q: "u", t: "Cloth", s: { sta: 6, int: 8 }, src: { k: "unk", by: "new in Forever, probably from a Redridge quest" } },
  /* neck */
  pendant: { n: "Scholarly Pendant", id: 277203, q: "r", t: "Neck", s: { sta: 6, spi: 4 }, src: { k: "lib", quest: "Friend of the Library", books: 10 } },
  locket: { n: "Tarnished Locket", id: 279870, q: "r", t: "Neck", s: { sta: 5, spi: 4 }, src: { k: "rolq", quest: "Remember That I Love You", how: "A Blood-Stained Letter inside starts it, and it ends with Orphan Matron Nightingale in Stormwind" }, fac: "a" },
  collar: { n: "Sorcerer Collar", id: 273457, q: "r", t: "Neck", s: { int: 2, spi: 2 }, fx: ["4% less chance to be silenced"], src: { k: "sfk", by: "Rethilgore" }, lvl: 17 },
  explorers: { n: "Explorers' League Commendation", id: 7746, q: "r", t: "Neck", s: { sta: 9, spi: 9 }, src: { k: "smlibq", quest: "Mythology of the Titans", how: "Librarian Mae Paledust in Ironforge’s Hall of Explorers wants the book from the Scarlet Monastery Library. Pick it up from level 28" }, fac: "a" },
  packleader: { n: "Mark of the Pack Leader", id: 285331, q: "r", t: "Neck", s: { str: 5, int: 5 }, src: { k: "rare", by: "Humar the Pridelord, a rare lion in the Barrens", bop: true }, lvl: 20 },
  scorn: { n: "Scorn's Icy Choker", id: 23169, q: "r", t: "Neck", s: { sta: 5, int: 6, sp: 7 }, src: { k: "unk", by: "Scorn, a Scourge Invasion boss in Classic" }, lvl: 30 },
  /* shoulders */
  rws: { n: "Reinforced Woolen Shoulders", id: 4315, q: "u", t: "Cloth", s: { int: 4, sp: 5 }, src: { k: "boe", by: "Tailors make them" }, lvl: 19 },
  magemantle: { n: "Magician's Mantle", id: 12998, q: "r", t: "Cloth", s: { int: 9, sp: 5 }, src: { k: "boe", by: "A world drop with no fixed source" }, lvl: 20 },
  talbar: { n: "Talbar Mantle", id: 10657, q: "r", t: "Cloth", s: { sta: 3, int: 6, mp5: 2 }, src: { k: "wcq", quest: "In Nightmares", how: { a: "Mutanus the Devourer drops the Glowing Shard. Show it to Sputtervalve in Ratchet, then Falla Sagewind on the hill above the cave sends you to Mathrengyl Bearwalker in Darnassus", h: "Mutanus the Devourer drops the Glowing Shard. Show it to Sputtervalve in Ratchet, then Falla Sagewind on the hill above the cave sends you to Hamuul Runetotem in Thunder Bluff" } } },
  bloodmage: { n: "Bloodmage Mantle", id: 7684, q: "r", t: "Cloth", s: { int: 9, sp: 9, hp5: 9 }, src: { k: "smgy", by: "Bloodmage Thalnos" }, lvl: 30 },
  berylline: { n: "Berylline Pads", id: 4197, q: "r", t: "Cloth", s: { sta: 5, int: 10, sp: 6 }, src: { k: "rfkq", quest: { a: "The Crone of the Kraul", h: "A Vengeful Fate" }, how: { a: "Falfindel Waywarder in Thalanaar, Feralas, wants Charlga Razorflank’s medallion. Pick it up from level 29", h: "Auld Stonespire in Thunder Bluff wants Charlga Razorflank’s heart. Pick it up from level 29" } } },
  dsmantle: { n: "Death Speaker Mantle", id: 6685, q: "r", t: "Cloth", s: { int: 11, sp: 5 }, src: { k: "rfk", by: "Death Speaker Jargba" }, lvl: 27 },
  fairywing: { n: "Fairywing Mantle", id: 9536, q: "r", t: "Cloth", s: { sta: 2, int: 9, sp: 5 }, src: { k: "gnomerq", quest: "A Fine Mess", how: "Escort Kernobee out of Gnomeregan, then report to Scooty in Booty Bay" } },
  /* back */
  hwcloak: { n: "Heavy Woolen Cloak", id: 4311, q: "u", t: "Cloak", s: { spi: 4, sp: 4 }, src: { k: "boe", by: "Tailors make it" }, lvl: 16 },
  prelacy: { n: "Prelacy Cape", id: 7004, q: "r", t: "Cloak", s: { spi: 6, heal: 11, dmg: 4 }, src: { k: "bfdq", quest: "Researching the Corruption", how: "Gershala Nightwhisper in Auberdine wants 8 Corrupt Brain Stems from in and around Blackfathom Deeps" }, fac: "a" },
  feyscale: { n: "Feyscale Cloak", id: 6632, q: "r", t: "Cloak", s: { sta: 5, sp: 3 }, src: { k: "wc", by: "the Deviate Faerie Dragon", rare: true }, lvl: 16 },
  repaircape: { n: "Repairman's Cape", id: 9605, q: "r", t: "Cloak", s: { int: 4, spi: 7, heal: 9, dmg: 3 }, src: { k: "gnomerq", quest: "Data Rescue", how: "Master Mechanic Castpipe in Tinker Town, Ironforge, wants a Prismatic Punch Card made at the four punch-card machines inside" }, fac: "a" },
  thresher: { n: "Glowing Thresher Cape", id: 6901, q: "r", t: "Cloak", s: { spi: 8, heal: 6, dmg: 2 }, src: { k: "bfd", by: "Old Serra'kis" }, lvl: 24 },
  /* chest */
  abomskin: { n: "Leftover Abomination Skin", id: 271206, q: "r", t: "Cloth", s: { spi: 7, sp: 7 }, src: { k: "rol", by: "The Baron" }, lvl: 15 },
  manaweave: { n: "Manaweave Robe", id: 7509, q: "u", t: "Cloth", s: { int: 6 }, src: { k: "cq", quest: "Manaweave Robe", how: "The end of the level 15 mage quest chain from Jennea Cannon in Stormwind’s Wizard’s Sanctum" }, fac: "a" },
  spellfire: { n: "Lesser Spellfire Robes", id: 7510, q: "u", t: "Cloth", s: { int: 6 }, src: { k: "cq", quest: "Spellfire Robes", how: "The end of the level 15 mage quest chain from Anastasia Hartwell in Undercity’s Magic Quarter" }, fac: "h" },
  disgraced: { n: "Robes of the Disgraced Thane", id: 270261, q: "r", t: "Cloth", s: { int: 5, spi: 7 }, src: { k: "hot", by: "Durgen Dirgehammer" }, lvl: 13 },
  moccasin: { n: "Robe of the Moccasin", id: 6465, q: "r", t: "Cloth", s: { str: 3, spi: 10, heal: 9, dmg: 3 }, src: { k: "wc", by: "Lord Cobrahn" }, lvl: 17 },
  adjudicator: { n: "High Robe of the Adjudicator", id: 3461, q: "u", t: "Cloth", s: { int: 2, sp: 8 }, src: { k: "zqh", quest: "Assault on Fenris Isle", how: "High Executor Hadrec at the Sepulcher, Silverpine Forest, wants Thule Ravenclaw dead, a level 24 elite on Fenris Isle" }, fac: "h" },
  evocation: { n: "Robe of Evocation", id: 14150, q: "r", t: "Cloth", s: { sta: 4, int: 4, spi: 5 }, src: { k: "rfc", by: "Jergosh the Invoker" }, lvl: 13 },
  drozem: { n: "Dro'zem's Tunic", id: 277213, q: "r", t: "Cloth", s: { int: 9, sp: 10 }, src: { k: "rare", by: "Dro'zem the Blasphemous, a rare elite in Redridge (reported)", bop: true }, lvl: 20 },
  silkygown: { n: "Silky Gown", id: 253963, q: "r", t: "Cloth", s: { sta: 6, int: 7, spi: 4, frost: 13 }, src: { k: "tail", skill: 110 }, lvl: 22 },
  flamegown: { n: "Flame Gown", id: 253965, q: "r", t: "Cloth", s: { sta: 6, int: 7, spi: 4, fire: 13 }, src: { k: "tail", skill: 110 }, lvl: 22 },
  pearlygown: { n: "Pearly Gown", id: 253969, q: "r", t: "Cloth", s: { sta: 6, int: 7, spi: 4, arcane: 13 }, src: { k: "tail", skill: 110 }, lvl: 22 },
  civinad: { n: "Civinad Robes", id: 9623, q: "r", t: "Cloth", s: { sta: 7, spi: 12, heal: 25, dmg: 8 }, src: { k: "gnomerq", quest: { a: "The Grand Betrayal", h: "Rig Wars" }, how: { a: "High Tinker Mekkatorque in Tinker Town, Ironforge, wants Mekgineer Thermaplugg dead", h: "Nogg in Orgrimmar’s Valley of Honor wants the Rig Blueprints from Thermaplugg’s safe. Pick it up from level 25" } } },
  treebark: { n: "Tree Bark Jacket", id: 1486, q: "r", t: "Cloth", s: { sp: 12 }, fx: ["+60 bonus armor"], src: { k: "boe", by: "Drops from Blackfathom Deeps trash" }, lvl: 21 },
  dsrobes: { n: "Death Speaker Robes", id: 6682, q: "r", t: "Cloth", s: { sta: 4, int: 11, heal: 19, dmg: 6 }, src: { k: "rfk", by: "Death Speaker Jargba" }, lvl: 26 },
  /* wrist */
  mindthrust: { n: "Mindthrust Bracers", id: 1974, q: "r", t: "Cloth", s: { sta: 1, int: 5, mp5: 3 }, src: { k: "boe", by: "Drops from Shadowfang Keep trash" }, lvl: 17 },
  aetherwisp: { n: "Aetherwisp Bracers", id: 271096, q: "r", t: "Cloth", s: { sta: 3, sp: 3 }, src: { k: "hot", by: "Faldrim Anvilmar" }, lvl: 13 },
  tabitha: { n: "Tabitha's Cuffs", id: 251486, q: "r", t: "Cloth", s: { sta: 3, int: 6 }, src: { k: "rolq", quest: "A Frightened Request", how: "Tabitha Heartweaver at the Sepulcher, Silverpine Forest, wants to know what happened to Edward in the ruins" }, fac: "h" },
  featherbead: { n: "Featherbead Bracers", id: 15452, q: "r", t: "Cloth", s: { int: 5 }, src: { k: "rfcq", quest: "Returning the Lost Satchel", how: "Find Maur Grimtotem’s body inside and bring his satchel to Rahauro in Thunder Bluff" }, fac: "h" },
  oilrag: { n: "Spidertank Oilrag", id: 9448, q: "r", t: "Cloth", s: { sp: 8, mp5: 3 }, src: { k: "gnomer", by: "Electrocutioner 6000" }, lvl: 29 },
  /* hands */
  silkygloves: { n: "Silky Gloves", id: 253915, q: "r", t: "Cloth", s: { sta: 4, int: 3, frost: 7 }, src: { k: "tail", skill: 75 }, lvl: 15 },
  flamegloves: { n: "Flame Gloves", id: 253917, q: "r", t: "Cloth", s: { sta: 4, int: 3, fire: 7 }, src: { k: "tail", skill: 75 }, lvl: 15 },
  pearlygloves: { n: "Pearly Gloves", id: 253921, q: "r", t: "Cloth", s: { sta: 4, int: 3, arcane: 7 }, src: { k: "tail", skill: 75 }, lvl: 15 },
  serpgloves: { n: "Serpent Gloves", id: 5970, q: "r", t: "Cloth", s: { agi: 6, sp: 6 }, src: { k: "wc", by: "Lord Serpentis" }, lvl: 18 },
  tombgloves: { n: "Tomb Robber's Gloves", id: 280096, q: "r", t: "Cloth", s: { sta: 3, int: 6 }, src: { k: "hotq", quest: "Important Heirlooms", how: "Thom Filch on the bridge into Old Ironforge wants 8 Dwarven Heirlooms from inside" }, fac: "a" },
  blight: { n: "Blight Gloves", id: 279877, q: "r", t: "Cloth", s: { int: 7, spi: 5 }, fx: ["+3 Nature resistance"], src: { k: "rolq", quest: "The New Plague", how: "Theodore Griffs in Undercity’s Apothecarium wants a toxic strain from Witherfang" }, fac: "h" },
  apothecary: { n: "Apothecary Gloves", id: 10919, q: "u", t: "Cloth", s: { sp: 4 }, src: { k: "wcq", quest: "Serpentbloom", how: "Apothecary Zamah in the Pools of Vision under Thunder Bluff wants 10 Serpentbloom from inside" }, fac: "h" },
  townclerk: { n: "Town Clerk's Mittens", id: 270029, q: "r", t: "Cloth", s: { int: 11, sp: 4 }, src: { k: "stocksq", quest: "Crime and Punishment", how: "Councilman Millstipe in Darkshire, Duskwood, wants Dextren Ward’s hand" }, fac: "a" },
  jutebraid: { n: "Jutebraid Gloves", id: 10654, q: "u", t: "Cloth", s: { int: 5, sp: 6 }, src: { k: "zqh", quest: "Horde Presence", how: "Kadrak at Mor’shan Rampart sends you after Rynthariel the Keymaster, a level 29 elite in Stonetalon’s Talon Den" }, fac: "h" },
  tattered: { n: "Tattered Mittens", id: 270030, q: "r", t: "Cloth", s: { sta: 8, spi: 6, heal: 10, dmg: 3 }, src: { k: "sfkq", quest: "The Book of Ur", how: "Keeper Bel’dugur in Undercity’s Apothecarium wants the book from Fenrus the Devourer’s room" }, fac: "h" },
  hotshot: { n: "Hotshot Pilot's Gloves", id: 9491, q: "r", t: "Cloth", s: { agi: 4, sta: 5, int: 8, spi: 5 }, src: { k: "boe", by: "A very rare drop from Gnomeregan trash" }, lvl: 27 },
  /* waist */
  silkysash: { n: "Silky Sash", id: 253927, q: "r", t: "Cloth", s: { sta: 5, int: 4, frost: 7 }, src: { k: "tail", skill: 85 }, lvl: 17 },
  flamesash: { n: "Flame Sash", id: 253929, q: "r", t: "Cloth", s: { sta: 5, int: 4, fire: 7 }, src: { k: "tail", skill: 85 }, lvl: 17 },
  pearlysash: { n: "Pearly Sash", id: 253933, q: "r", t: "Cloth", s: { sta: 5, int: 4, arcane: 7 }, src: { k: "tail", skill: 85 }, lvl: 17 },
  tuskwrap: { n: "Tuskwrap Belt", id: 271210, q: "r", t: "Cloth", s: { sta: 5, int: 5 }, src: { k: "rol", by: "Bjork" }, lvl: 16 },
  slither: { n: "Slither Cord", id: 273089, q: "r", t: "Cloth", s: { mp5: 3 }, fx: ["Use: break free of roots (30 min cooldown)"], src: { k: "wc", by: "Lord Pythas" }, lvl: 17 },
  arugalbelt: { n: "Belt of Arugal", id: 6392, q: "r", t: "Cloth", s: { agi: 2, int: 3, spi: 5, sp: 9 }, src: { k: "sfk", by: "Archmage Arugal" }, lvl: 23 },
  ghamoora: { n: "Ghamoo-ra's Bind", id: 6908, q: "r", t: "Cloth", s: { sta: 7, sp: 7 }, src: { k: "bfd", by: "Ghamoo-ra" }, lvl: 22 },
  /* legs */
  ogre: { n: "Ogre Loincloth", id: 273289, q: "r", t: "Cloth", s: { str: 4, sta: 6, heal: 18, dmg: 6 }, src: { k: "dm", by: "Rhahk'Zor" }, lvl: 17 },
  rotlegs: { n: "Rotmender's Leggings", id: 271207, q: "r", t: "Cloth", s: { sta: 5, int: 8, spi: 5 }, src: { k: "rol", by: "The Abandoned, a hidden boss you summon at a statue" }, lvl: 17 },
  kilt: { n: "Colorful Kilt", id: 10048, q: "u", t: "Cloth", s: { spi: 5, sp: 4 }, src: { k: "boe", by: "Tailors make it" }, lvl: 14 },
  ghastly: { n: "Ghastly Trousers", id: 15449, q: "r", t: "Cloth", s: { sta: 4, int: 5, mp5: 2 }, src: { k: "rfcq", quest: "The Power to Destroy...", how: "Varimathras in Undercity wants two books that drop inside" }, fac: "h" },
  silkylegs: { n: "Silky Leggings", id: 253989, q: "r", t: "Cloth", s: { sta: 7, int: 7, spi: 5, frost: 14 }, src: { k: "tail", skill: 125 }, lvl: 25 },
  flamelegs: { n: "Flame Leggings", id: 253991, q: "r", t: "Cloth", s: { sta: 7, int: 7, spi: 5, fire: 14 }, src: { k: "tail", skill: 125 }, lvl: 25 },
  pearlylegs: { n: "Pearly Leggings", id: 253995, q: "r", t: "Cloth", s: { sta: 7, int: 7, spi: 5, arcane: 14 }, src: { k: "tail", skill: 125 }, lvl: 25 },
  gazedreamer: { n: "Gaze Dreamer Pants", id: 6903, q: "r", t: "Cloth", s: { spi: 9, sp: 12 }, src: { k: "bfd", by: "Twilight Lord Kelris" }, lvl: 23 },
  leech: { n: "Leech Pants", id: 6910, q: "r", t: "Cloth", s: { sta: 5, sp: 5, mp5: 5, hp5: 5 }, src: { k: "bfd", by: "Aku'mai" }, lvl: 24 },
  magistrate: { n: "Magistrate's Pantaloons", id: 270036, q: "r", t: "Cloth", s: { int: 14, sp: 5 }, src: { k: "unk", by: "a new quest reward; the quest isn’t known yet" } },
  abomlegs: { n: "Abomination Skin Leggings", id: 23173, q: "r", t: "Cloth", s: { sta: 7, int: 8, sp: 9 }, src: { k: "unk", by: "Sever, a Scourge Invasion boss in Classic" }, lvl: 20 },
  /* feet */
  spidersilk: { n: "Spidersilk Boots", id: 4320, q: "r", t: "Cloth", s: { sta: 4, int: 4, sp: 7 }, src: { k: "boe", by: "Tailors make them" }, lvl: 20 },
  silkyboots: { n: "Silky Boots", id: 253891, q: "r", t: "Cloth", s: { sta: 4, int: 3, frost: 6 }, src: { k: "tail", skill: 60 }, lvl: 12 },
  flameboots: { n: "Flame Boots", id: 253893, q: "r", t: "Cloth", s: { sta: 4, int: 3, fire: 6 }, src: { k: "tail", skill: 60 }, lvl: 12 },
  pearlyboots: { n: "Pearly Boots", id: 253897, q: "r", t: "Cloth", s: { sta: 4, int: 3, arcane: 6 }, src: { k: "tail", skill: 60 }, lvl: 12 },
  redwoolboots: { n: "Red Woolen Boots", id: 4313, q: "u", t: "Cloth", s: { spi: 5, sp: 4 }, src: { k: "boe", by: "Tailors make them" }, lvl: 15 },
  kimbra: { n: "Kimbra Boots", id: 6191, q: "u", t: "Cloth", s: { int: 4, spi: 3 }, src: { k: "zqa", quest: "WANTED: Chok'sul", how: "The poster is in Thelsamar, Loch Modan. Chok’sul is a level 22 elite ogre" }, fac: "a" },
  rottreads: { n: "Rotmender's Treads", id: 271214, q: "r", t: "Cloth", s: { sta: 7, int: 4, spi: 4 }, src: { k: "rol", by: "Rath'mael" }, lvl: 19 },
  acidic: { n: "Acidic Walkers", id: 9454, q: "r", t: "Cloth", s: { int: 8, spi: 4, sp: 4 }, fx: ["+5 Nature resistance"], src: { k: "gnomer", by: "Viscous Fallout" }, lvl: 27 },
  /* rings */
  mcr: { n: "Minor Channeling Ring", id: 1449, q: "u", t: "Ring", s: { int: 2, sp: 4 }, src: { k: "zqa", quest: "WANTED: Chok'sul", how: "The poster is in Thelsamar, Loch Modan. Chok’sul is a level 22 elite ogre, and the ring comes with every reward choice" }, fac: "a" },
  lavish: { n: "Lavishly Jeweled Ring", id: 1156, q: "r", t: "Ring", s: { agi: 2, int: 6 }, src: { k: "dm", by: "Gilnid" }, lvl: 17 },
  blackpearl: { n: "Black Pearl Ring", id: 6332, q: "r", t: "Ring", s: { sta: 2, int: 2, spi: 6 }, src: { k: "rare", by: "Lady Vespira, a rare naga in Darkshore" }, lvl: 19 },
  deepfathom: { n: "Deep Fathom Ring", id: 6463, q: "r", t: "Ring", s: { sta: 3, spi: 5 }, src: { k: "wc", by: "Mutanus the Devourer" }, lvl: 19 },
  forlorn: { n: "Ring of Forlorn Spirits", id: 2043, q: "u", t: "Ring", s: { sta: 2, sp: 8 }, src: { k: "zqa", quest: "The Legend of Stalvan", how: "The end of a long Duskwood chain that starts in Darkshire" }, fac: "a" },
  darkhorde: { n: "Dark Horde Band", id: 273806, q: "r", t: "Ring", s: { sta: 6, sp: 6 }, src: { k: "stocks", by: "Targorr the Dread" }, lvl: 21 },
  snakehoop: { n: "Snake Hoop", id: 6750, q: "r", t: "Ring", s: { int: 7, spi: 7 }, src: { k: "rfkq", quest: "Willix the Importer", how: "Willix starts it inside the dungeon; escort him out" } },
  lagnut: { n: "Electrocutioner Lagnut", id: 9447, q: "r", t: "Ring", s: { sta: 4, spi: 7, heal: 8, dmg: 2 }, src: { k: "gnomer", by: "Electrocutioner 6000" }, lvl: 29 },
  philanthropist: { n: "Philanthropist's Ring", id: 281635, q: "r", t: "Ring", s: { int: 6, sp: 10 }, src: { k: "lib", quest: "Greater Friend of the Library", books: 20 } },
  /* trinkets */
  recomb: { n: "Minor Recombobulator", id: 4381, q: "u", t: "Trinket", s: {}, fx: ["Use: restores 203–338 health and 96–160 mana and removes Polymorph (5 min cooldown, 10 charges)"], src: { k: "eng", skill: 140 } },
  spyglass: { n: "Lookie's Spyglass", id: 273298, q: "r", t: "Trinket", s: { spi: 1 }, src: { k: "dm", by: "Cookie" }, lvl: 18 },
  roogug: { n: "Roogug's Severed Head", id: 274152, q: "r", t: "Trinket", s: { spi: 6 }, fx: ["Use: horrifies and silences all swine within 15 yards for 5 sec (5 min cooldown)"], src: { k: "rfk", by: "Roogug" }, lvl: 25 },
  worgenbane: { n: "Worgenbane Talisman", id: 273643, q: "r", t: "Trinket", s: { mp5: 2 }, fx: ["Use: stuns a Worgen for 4 sec (5 min cooldown)"], src: { k: "sfk", by: "Commander Springvale" }, lvl: 21 },
  /* weapons */
  buzzer: { n: "Buzzer Blade", id: 2169, q: "r", t: "Dagger", w: [9, 18, "1.50", "9.0"], s: { sp: 22 }, src: { k: "dm", by: "Sneed's Shredder" }, lvl: 16 },
  evocator: { n: "Evocator's Blade", id: 2567, q: "r", t: "Dagger", w: [12, 23, "1.60", "10.9"], s: { int: 2, spi: 5, sp: 28 }, src: { k: "boe", by: "A very rare drop from Blackfathom Deeps trash" }, lvl: 20 },
  fang: { n: "Fang of Magmatus", id: 271095, q: "r", t: "Dagger", w: [9, 18, "1.70", "7.9"], s: { int: 4, sp: 18 }, src: { k: "hot", by: "Magmatus" }, lvl: 13 },
  searing: { n: "Searing Dagger", id: 273003, q: "r", t: "Dagger", w: [9, 17, "1.60", "8.1"], s: { sp: 18 }, fx: ["Your harmful spells sear the target for 2–4 Fire damage"], src: { k: "rfc", by: "Bazzalan" }, lvl: 13 },
  swinetusk: { n: "Swinetusk Shank", id: 6691, q: "r", t: "Dagger", w: [16, 30, "1.50", "15.3"], s: { sta: 6, spi: 4, sp: 40 }, src: { k: "rfk", by: "Agathelos the Raging" }, lvl: 30 },
  royaldagger: { n: "Royal Dagger", id: 281297, q: "u", t: "Dagger", w: [10, 19, "1.70", "8.5"], s: { int: 4, sp: 18 }, src: { k: "zqa", quest: "A Friend of the Family", how: "Lord Grayson Shadowbreaker in Stormwind’s Cathedral of Light. Pick it up from level 25" }, fac: "a" },
  toothpick: { n: "Quilboar Toothpick", id: 276888, q: "u", t: "Dagger", w: [10, 19, "1.80", "8.1"], s: { int: 2, spi: 2, sp: 16 }, src: { k: "zq", quest: "Chol'aruk the Ravener", how: "A level 21 elite quest in the Barrens; each faction has its own version" } },
  tome: { n: "Dwarven Tome", id: 279898, q: "r", t: "Off hand", s: { spi: 2, sp: 4 }, src: { k: "hotq", quest: "Important Heirlooms", how: "Thom Filch on the bridge into Old Ironforge wants 8 Dwarven Heirlooms from inside" }, fac: "a" },
  antipodean: { n: "Antipodean Rod", id: 2879, q: "r", t: "Off hand", s: { fire: 6, frost: 6 }, src: { k: "boe", by: "A world drop in Silverpine, Hillsbrad, Ashenvale, Darkshore, the Wetlands and dungeon trash" }, lvl: 17 },
  skum: { n: "Skum's Bucket", id: 273137, q: "r", t: "Off hand", s: { sta: 3, heal: 9, dmg: 2 }, fx: ["Use: restores 803 mana over 24 sec while seated (10 min cooldown)"], src: { k: "wc", by: "Skum" }, lvl: 17 },
  orbmystic: { n: "Orb of Mystic Insight", id: 249394, q: "r", t: "Off hand", s: { int: 6, sp: 7 }, src: { k: "ench", skill: 140 }, lvl: 25 },
  omega: { n: "Omega Orb", id: 7749, q: "r", t: "Off hand", s: { sp: 8, mp5: 3 }, src: { k: "smlibq", quest: "Compendium of the Fallen", how: "Sage Truthseeker in Thunder Bluff wants the book from the Scarlet Monastery Library. Pick it up from level 28; Undead can’t take it" }, fac: "h", rc: ["orc", "troll"] },
  mathystra: { n: "Mathystra Channeling Orb", id: 281291, q: "r", t: "Off hand", s: { sta: 3, int: 5 }, src: { k: "zqa", quest: "Baron Marinous", how: "A level 21 Darkshore quest" }, fac: "a" },
  vial: { n: "Expended Apothecary Vial", id: 281294, q: "u", t: "Off hand", s: { int: 3, spi: 3 }, src: { k: "zqh", quest: "Valuable Vantages", how: "Deathstalker Masoj in the Barrens; the work is in Hillsbrad. A level 25 quest" }, fac: "h" },
  ponderous: { n: "Ponderous Orb", id: 273052, q: "r", t: "Off hand", s: { sta: 5, int: 2, spi: 8 }, src: { k: "dalaran", by: "Shade of the Archmage" }, lvl: 30 },
  gnarled: { n: "Gnarled Necromancer's Staff", id: 251534, q: "r", t: "Staff", w: [34, 51, "2.80", "15.2"], s: { int: 10, sp: 26 }, fx: ["2% faster in Silverpine Forest and Hillsbrad Foothills"], src: { k: "rolq", quest: "The Wrath of Rath'mael", how: "Deathguard Kristof at the camp southeast of Brill, Tirisfal Glades, wants Rath’mael dead. Pick it up from level 15" }, fac: "h" },
  crescent: { n: "Crescent Staff", id: 6505, q: "r", t: "Staff", w: [35, 53, "2.90", "15.2"], s: { agi: 7, sta: 7, spi: 7, sp: 26 }, src: { k: "wcq", quest: "Leaders of the Fang", how: "Nara Wildmane in Thunder Bluff wants the gems of the four Fanglords inside" }, fac: "h" },
  coldspire: { n: "Coldspire Staff", id: 271215, q: "r", t: "Staff", w: [43, 66, "3.60", "15.1"], s: { sp: 26 }, src: { k: "rol", by: "Rath'mael" }, lvl: 19 },
  emberstone: { n: "Emberstone Staff", id: 5201, q: "r", t: "Staff", w: [34, 51, "3.00", "14.2"], s: { sta: 5, spi: 5, sp: 24 }, fx: ["+8 Fire resistance"], src: { k: "dm", by: "Captain Greenskin" }, lvl: 17 },
  orgstaff: { n: "Staff of Orgrimmar", id: 15444, q: "r", t: "Staff", w: [42, 64, "3.30", "16.1"], s: { int: 4, spi: 5, sp: 18, mp5: 2 }, src: { k: "rfcq", quest: "Hidden Enemies", how: "Thrall’s chain in Orgrimmar ends with Bazzalan and Jergosh the Invoker dead" }, fac: "h" },
  westfall: { n: "Staff of Westfall", id: 2042, q: "r", t: "Staff", w: [36, 55, "3.00", "15.2"], s: { int: 5, spi: 6, heal: 48, dmg: 16 }, src: { k: "dmq", quest: "The Defias Brotherhood", how: "The chain starts with Gryan Stoutmantle at Sentinel Hill and ends with Edwin VanCleef" }, fac: "a" },
  blessedseer: { n: "Staff of the Blessed Seer", id: 2271, q: "r", t: "Staff", w: [37, 57, "3.00", "15.7"], s: { sta: 9, spi: 10, sp: 28 }, src: { k: "boe", by: "A very rare drop from Blackfathom Deeps trash" }, lvl: 20 },
  glimmer: { n: "Glimmering Staff", id: 249392, q: "r", t: "Staff", w: [32, 49, "2.20", "18.4"], s: { sta: 11, int: 11, sp: 34 }, src: { k: "ench", skill: 140 }, lvl: 25 },
  hydrocane: { n: "Hydrocane", id: 9452, q: "r", t: "Staff", w: [44, 67, "2.80", "19.8"], s: { sp: 36 }, fx: ["+15 Frost resistance"], src: { k: "gnomer", by: "Viscous Fallout" }, lvl: 27 },
  sleepwalker: { n: "Rod of the Sleepwalker", id: 1155, q: "r", t: "Staff", w: [39, 60, "2.80", "17.7"], s: { spi: 11, sp: 32 }, src: { k: "bfd", by: "Twilight Lord Kelris" }, lvl: 24 },
  /* wands */
  sizzle: { n: "Sizzle Stick", id: 8071, q: "r", t: "Wand", w: [27, 52, "1.70", "23.2"], s: { sp: 4 }, fx: ["Fire damage"], src: { k: "wcq", quest: "Deviate Eradication", how: "Ebru, on top of the Wailing Caverns mound, wants 7 each of four kinds of deviate inside. Pick it up from level 15" } },
  firebelcher: { n: "Firebelcher", id: 5243, q: "r", t: "Wand", w: [27, 52, "1.70", "23.2"], s: {}, fx: ["Fire damage", "Chance on hit: 25–31 extra Fire damage"], src: { k: "wc", by: "the Deviate Faerie Dragon", rare: true }, lvl: 18 },
  cookie: { n: "Cookie's Stirring Rod", id: 5198, q: "r", t: "Wand", w: [20, 38, "1.30", "22.3"], s: { sp: 3 }, fx: ["Arcane damage"], src: { k: "dm", by: "Cookie" }, lvl: 17 },
  sable: { n: "Sable Wand", id: 7607, q: "r", t: "Wand", w: [28, 52, "1.80", "22.2"], s: { spi: 3, sp: 3 }, fx: ["Shadow damage"], src: { k: "dmq", quest: "Underground Assault", how: "Shoni the Shilent in Stormwind’s Dwarven District wants a part from Sneed’s Shredder" }, fac: "a" },
  deepblaze: { n: "Deepblaze", id: 279896, q: "r", t: "Wand", w: [22, 41, "1.70", "18.5"], s: {}, fx: ["Fire damage"], src: { k: "hotq", quest: "Old Ironforge Incursion", how: "Earthseer Farsen over Gol’Bolar Quarry, Dun Morogh, wants Durgen Dirgehammer’s head taken to King Magni" }, fac: "a" },
  magicwand: { n: "Greater Magic Wand", id: 11288, q: "u", t: "Wand", w: [22, 41, "1.80", "17.5"], s: { sp: 2 }, fx: ["Arcane damage"], src: { k: "boe", by: "Enchanters make it" }, lvl: 13 },
  duskwand: { n: "Dusk Wand", id: 5211, q: "c", t: "Wand", w: [21, 39, "1.70", "17.6"], s: {}, fx: ["Shadow damage"], src: { k: "vendor", by: "wand vendors in Stormwind, Ironforge, Orgrimmar and Undercity" }, lvl: 20 },
  necrotic: { n: "Necrotic Wand", id: 7708, q: "r", t: "Wand", w: [32, 61, "1.40", "33.2"], s: { heal: 9, dmg: 3 }, fx: ["Shadow damage"], src: { k: "smgy", by: "Azshir the Sleepless", rare: true }, lvl: 30 },
  mysticwand: { n: "Greater Mystic Wand", id: 217287, q: "u", t: "Wand", w: [40, 76, "2.00", "29.0"], s: { sp: 5 }, fx: ["Arcane damage"], src: { k: "boe", by: "Enchanters make it" }, lvl: 30 },
  gravestone: { n: "Gravestone Scepter", id: 7001, q: "r", t: "Wand", w: [30, 57, "1.50", "29.0"], s: { spi: 3 }, fx: ["Shadow damage"], src: { k: "bfdq", quest: "Blackfathom Villainy", how: { a: "Argent Guard Thaelrid inside wants Twilight Lord Kelris’s head, handed in at Darnassus", h: "Argent Guard Thaelrid inside wants Twilight Lord Kelris’s head, handed in at Thunder Bluff" } } },
  starfaller: { n: "Starfaller", id: 13063, q: "r", t: "Wand", w: [32, 60, "1.40", "32.9"], s: { int: 4, arcane: 6 }, fx: ["Arcane damage"], src: { k: "boe", by: "A world drop" }, lvl: 29 },
  thunderwood: { n: "Thunderwood", id: 13062, q: "r", t: "Wand", w: [36, 67, "1.90", "27.1"], s: { sp: 5 }, fx: ["Nature damage"], src: { k: "boe", by: "A world drop" }, lvl: 22 },
  pestilent: { n: "Pestilent Wand", id: 5347, q: "c", t: "Wand", w: [28, 53, "1.50", "27.0"], s: {}, fx: ["Nature damage"], src: { k: "vendor", by: "weapon vendors in Stormwind, Ironforge, Orgrimmar and Undercity" }, lvl: 30 },
  /* level 30 extras */
  ghostly: { n: "Ghostly Mantle", id: 3324, q: "r", t: "Cloth", s: { spi: 9, heal: 8, dmg: 2 }, src: { k: "sfkq", quest: "Deathstalkers in Shadowfang", how: "High Executor Hadrec at the Sepulcher wants his two deathstalkers found. Pick it up from level 18" }, fac: "h" },
  chestnut: { n: "Chestnut Mantle", id: 17695, q: "r", t: "Cloth", s: { sta: 4, sp: 7 }, src: { k: "bfdq", quest: "Allegiance to the Old Gods", how: "A Damp Note from inside goes to Je’neu Sancrea at Zoram’gar Outpost, who wants Lorgus Jett dead" }, fac: "h" }
};
/* ---------- best-in-slot lists ----------
   Each spec's slots are built for one faction ("a" Alliance, "h" Horde). An option like "flamecirc:tail"
   needs that profession. Items with an rc list are limited to those races. */
const SCHOOL = {
  arcane: { set: "pearly", School: "Arcane", setName: "Pearly" },
  fire: { set: "flame", School: "Fire", setName: "Flame" },
  frost: { set: "silky", School: "Frost", setName: "Silky" }
};

function slots20(sp, fac) {
  const S = SCHOOL[sp], set = S.set, Sch = S.School;
  const A = fac === "a";
  const L = [];
  L.push({ key: "head", label: "Head", opts: [set + "circ:tail", "shadowgog:eng"],
    none: "Without Tailoring or Engineering, no hat with stats is available at 20.",
    why: { [set + "circ"]: "11 " + Sch + " damage and 10 Stamina, far ahead of any other hat. Tailors only: Tailoring 100 and a 30-Favor pattern.", shadowgog: "Engineers only (Engineering 120 to wear): 5 Intellect and 6 Spirit." } });
  L.push({ key: "neck", label: "Neck", opts: ["pendant"],
    why: { pendant: "No necklace at 20 has spell power. This one adds Stamina and Spirit; the Necklace – Spell Power enchant (+6) does more." },
    alts: A ? [["locket", "About the same, from a Ruins of Lordaeron quest that ends in Stormwind."], ["collar", "2 Intellect and 2 Spirit, from Shadowfang Keep’s first boss."]]
      : [["collar", "2 Intellect and 2 Spirit, from Shadowfang Keep’s first boss."]] });
  L.push({ key: "shoulder", label: "Shoulders", opts: ["rws"],
    why: { rws: "5 spell power and 4 Intellect. Bind on Equip, so any tailor can make them for you." },
    alts: [["magemantle", "9 Intellect and 5 spell power, better if you find a pair: a Bind on Equip world drop, so watch the Auction House."],
      ["talbar", "6 Intellect and 2 mp5 from the Wailing Caverns shard quest, handed in at " + (A ? "Darnassus." : "Thunder Bluff.")]] });
  L.push({ key: "back", label: "Back", opts: ["hwcloak"],
    why: { hwcloak: "4 spell power and 4 Spirit, from any tailor." },
    alts: A ? [["prelacy", "A hair better, but its quest sends you into Blackfathom Deeps, tuned a few levels above 20."], ["feyscale", "3 spell power and 5 Stamina from a rare dragon in Wailing Caverns."]]
      : [["feyscale", "3 spell power and 5 Stamina from a rare dragon in Wailing Caverns."]] });
  L.push({ key: "chest", label: "Chest", opts: ["abomskin"],
    why: { abomskin: A ? "7 spell power and 7 Spirit from The Baron. The Ruins of Lordaeron are a long trek through Horde land, so go with your group." : "7 spell power and 7 Spirit from The Baron in the Ruins of Lordaeron." },
    alts: A ? [["manaweave", "6 Intellect from the level 15 mage quest, a fine stand-in."], ["disgraced", "5 Intellect and 7 Spirit from the Hall of Thanes’ last boss."], ["moccasin", "10 Spirit and 3 spell damage from Lord Cobrahn in Wailing Caverns."]]
      : [["spellfire", "6 Intellect from the level 15 mage quest, a fine stand-in."], ["adjudicator", "8 spell power and 2 Intellect, nearly as good, but Assault on Fenris Isle ends at a level 24 elite."], ["evocation", "Intellect, Spirit and Stamina from Jergosh the Invoker in Ragefire Chasm."]] });
  L.push({ key: "wrist", label: "Wrist", opts: ["mindthrust"],
    why: { mindthrust: "5 Intellect and 3 mp5. Bind on Equip from Shadowfang Keep’s trash, so check the Auction House." },
    alts: A ? [["aetherwisp", "3 spell power and 3 Stamina from the Hall of Thanes’ first boss."]]
      : [["tabitha", "6 Intellect from A Frightened Request at the Sepulcher."], ["featherbead", "5 Intellect from Ragefire Chasm’s lost satchel quest."]] });
  L.push({ key: "hands", label: "Hands", opts: [set + "gloves:tail", "serpgloves"],
    why: { [set + "gloves"]: "7 " + Sch + " damage plus Intellect and Stamina. Tailors only: Tailoring 75 and a 30-Favor pattern.", serpgloves: "6 spell power from Lord Serpentis in Wailing Caverns. The Agility does nothing for you." },
    alts: A ? [["tombgloves", "6 Intellect, but take the Dwarven Tome from that quest instead."]]
      : [["blight", "7 Intellect and 5 Spirit from The New Plague in Undercity."], ["apothecary", "4 spell power from Serpentbloom."]] });
  L.push({ key: "waist", label: "Waist", opts: [set + "sash:tail", "tuskwrap"],
    why: { [set + "sash"]: "7 " + Sch + " damage plus Intellect and Stamina. Tailors only: Tailoring 85 and a 30-Favor pattern.", tuskwrap: "5 Intellect and 5 Stamina from Bjork in the Ruins of Lordaeron, the best belt without Tailoring." },
    alts: [["slither", "3 mp5 and a way out of roots, from Lord Pythas in Wailing Caverns."]] });
  if (A) {
    L.push({ key: "legs", label: "Legs", opts: ["ogre"],
      why: { ogre: "6 spell damage and 6 Stamina from Rhahk’Zor, the Deadmines’ first boss." },
      alts: [["rotlegs", "Almost as good: 8 Intellect and 5 Spirit from the Ruins of Lordaeron’s hidden boss."], ["kilt", "4 spell power and 5 Spirit, from any tailor."]] });
  } else {
    L.push({ key: "legs", label: "Legs", opts: ["rotlegs"],
      why: { rotlegs: "8 Intellect and 5 Spirit from The Abandoned, the Ruins of Lordaeron’s hidden boss. Summon it at the statue." },
      alts: [["ghastly", "5 Intellect and 2 mp5 from The Power to Destroy... in Ragefire Chasm."], ["kilt", "4 spell power and 5 Spirit, from any tailor."], ["ogre", "A little better, but the Deadmines are deep in Alliance land."]] });
  }
  L.push({ key: "feet", label: "Feet", opts: ["spidersilk", set + "boots:tail"],
    why: { spidersilk: "7 spell power, 4 Intellect and 4 Stamina. Bind on Equip from tailors; needs level 20.", [set + "boots"]: "6 " + Sch + " damage and 3 Intellect. A little behind Spidersilk Boots, but you can wear them from 12." },
    alts: A ? [["redwoolboots", "4 spell power and 5 Spirit, cheap from any tailor."], ["kimbra", "4 Intellect and 3 Spirit from the Chok’sul quest."]]
      : [["rottreads", "Intellect, Spirit and Stamina from Rath’mael in the Ruins of Lordaeron."], ["redwoolboots", "4 spell power and 5 Spirit, cheap from any tailor."]] });
  if (A) {
    L.push({ key: "ring", label: "Ring", pair: true, opts: ["mcr", "lavish"],
      why: { mcr: "4 spell power and 2 Intellect. It comes with every WANTED: Chok’sul reward; Chok’sul is a level 22 elite, so bring a friend.", lavish: "6 Intellect from Gilnid in the Deadmines." },
      alts: [["blackpearl", "6 Spirit and 2 Intellect, Bind on Equip from a Darkshore rare."], ["deepfathom", "5 Spirit and 3 Stamina from Mutanus in Wailing Caverns."]] });
    L.push({ key: "trinket", label: "Trinket", pair: true, opts: ["recomb:eng", "spyglass"], none: "No other trinket at level 20 has stats.",
      why: { recomb: "Engineers only (Engineering 140): an emergency heal and mana top-up that also removes Polymorph.", spyglass: "Just 1 Spirit, but it beats an empty slot. Cookie drops it in the Deadmines." } });
    L.push({ key: "mh", label: "Main hand", opts: ["buzzer"],
      why: { buzzer: "22 spell power from Sneed’s Shredder in the Deadmines. It’s a dagger, so train Daggers first." },
      alts: [["evocator", "28 spell power if you find one: a very rare Bind on Equip drop from Blackfathom Deeps trash."], ["fang", "18 spell power and 4 Intellect from Magmatus in the Hall of Thanes."],
        ["coldspire", "Or skip the off hand: this staff from the Ruins of Lordaeron matches Buzzer Blade and the Dwarven Tome together."], ["emberstone", "Another staff that ties them, from Captain Greenskin in the Deadmines."]] });
    L.push({ key: "oh", label: "Off hand", opts: ["tome"],
      why: { tome: "4 spell power and 2 Spirit. Choose it from Important Heirlooms in the Hall of Thanes." },
      alts: (sp === "arcane" ? [] : [["antipodean", "6 " + Sch + " damage, a little better if you find one: a Bind on Equip world drop."]])
        .concat([["skum", "Weak stats, but its use effect refills 803 mana while you sit."]]) });
  } else {
    L.push({ key: "ring", label: "Ring", pair: true, opts: ["blackpearl", "deepfathom"],
      why: { blackpearl: "6 Spirit and 2 Intellect. Bind on Equip from a rare in Darkshore, so check the Auction House.", deepfathom: "5 Spirit and 3 Stamina from Mutanus, Wailing Caverns’ last boss." },
      alts: [["lavish", "6 Intellect from Gilnid, but the Deadmines are deep in Alliance land."]] });
    L.push({ key: "trinket", label: "Trinket", pair: true, opts: ["recomb:eng"], none: "No trinket a Horde mage can easily reach at 20 has stats.",
      why: { recomb: "Engineers only (Engineering 140): an emergency heal and mana top-up that also removes Polymorph." },
      alts: [["spyglass", "Just 1 Spirit, and Cookie is in the Deadmines, deep in Alliance land."]] });
    L.push({ key: "staff", label: "Staff", opts: ["gnarled"],
      why: { gnarled: "26 spell power and 10 Intellect from The Wrath of Rath’mael, a Ruins of Lordaeron quest from Deathguard Kristof near Brill." },
      alts: [["crescent", "26 spell power and 7 Spirit from Leaders of the Fang in Thunder Bluff."], ["coldspire", "26 spell power from Rath’mael himself."],
        ["orgstaff", "18 spell power and 2 mp5 from Thrall’s Ragefire Chasm chain, a good early staff."],
        ["searing", "Or a dagger: 18 spell power and a small Fire burn from Bazzalan in Ragefire Chasm, but no off hand at 20 closes the gap to a staff."]] });
  }
  L.push({ key: "wand", label: "Wand", opts: ["sizzle"],
    why: { sizzle: "The best wand you can count on at 20, from Deviate Eradication at Wailing Caverns. Both factions can take the quest." },
    alts: A ? [["sable", "Spirit and spell power from Underground Assault."], ["cookie", "From Cookie in the Deadmines."], ["deepblaze", "From the Hall of Thanes chain, a good early wand."]]
      : [["magicwand", "From any enchanter, until you have Sizzle Stick."], ["duskwand", "From wand vendors once you’re 20."], ["cookie", "A little faster, but the Deadmines are deep in Alliance land."]] });
  return L;
}

function slots30(sp, fac) {
  const S = SCHOOL[sp], set = S.set, Sch = S.School;
  const A = fac === "a";
  const L = [];
  L.push({ key: "head", label: "Head", opts: [set + "circ:tail", "embalmed", "cowl"],
    why: { [set + "circ"]: "11 " + Sch + " damage and 10 Stamina, still the best hat you can make. Where the Filigreed version’s pattern comes from isn’t confirmed yet.",
      embalmed: "8 spell damage, 12 Spirit and 7 Stamina: the best hat without Tailoring, if its rare is up when you run the Graveyard.",
      cowl: "10 Intellect and 5 spell power, and you can buy it: tailors make it." } });
  if (A) {
    L.push({ key: "neck", label: "Neck", opts: ["explorers"],
      why: { explorers: "No necklace at 30 has spell power. This one adds 9 Stamina and 9 Spirit. Its book is in the Scarlet Monastery Library, tuned a little above 30." },
      alts: [["pendant", "Your level 20 necklace, if you skip the Library."], ["packleader", "5 Intellect, from Humar the Pridelord, a rare lion in the Barrens with a long respawn."]] });
  } else {
    L.push({ key: "neck", label: "Neck", opts: ["pendant"],
      why: { pendant: "No necklace at 30 has spell power. Stamina and Spirit, for ten library books handed to Owen Thadd in Undercity." },
      alts: [["packleader", "5 Intellect, from Humar the Pridelord, a rare lion in the Barrens with a long respawn."], ["collar", "2 Intellect and 2 Spirit, from Shadowfang Keep’s first boss."]] });
  }
  L.push({ key: "shoulder", label: "Shoulders", opts: ["bloodmage"],
    why: { bloodmage: "9 spell power and 9 Intellect from Bloodmage Thalnos, the Graveyard’s last boss." },
    alts: [["berylline", "10 Intellect and 6 spell power from " + (A ? "The Crone of the Kraul" : "A Vengeful Fate") + ", for Razorfen Kraul’s last boss. It may need a level above 30 to wear."],
      ["dsmantle", "11 Intellect and 5 spell power from Death Speaker Jargba in Razorfen Kraul."], ["fairywing", "9 Intellect and 5 spell power from A Fine Mess in Gnomeregan."]] });
  if (A) {
    L.push({ key: "back", label: "Back", opts: ["repaircape"],
      why: { repaircape: "4 Intellect, 7 Spirit and 3 spell damage. Choose it from Data Rescue in Gnomeregan." },
      alts: [["prelacy", "Your level 20 cloak, almost as good."], ["hwcloak", "4 spell power and 4 Spirit from any tailor."]] });
  } else {
    L.push({ key: "back", label: "Back", opts: ["hwcloak"],
      why: { hwcloak: "4 spell power and 4 Spirit from any tailor. No Horde cloak at 30 beats it." },
      alts: [["thresher", "8 Spirit and 2 spell damage from Old Serra’kis in Blackfathom Deeps."]] });
  }
  L.push({ key: "chest", label: "Chest", opts: [set + "gown:tail", "civinad", "treebark"],
    why: { [set + "gown"]: "13 " + Sch + " damage plus Intellect, Spirit and Stamina, the best chest at 30. Tailors only: Tailoring 110 and a 30-Favor pattern.",
      civinad: "8 spell damage and 12 Spirit from " + (A ? "The Grand Betrayal: kill Mekgineer Thermaplugg in Gnomeregan." : "Rig Wars: bring Nogg the blueprints from Thermaplugg’s safe in Gnomeregan."),
      treebark: "12 spell power and extra armor. Bind on Equip from Blackfathom Deeps trash." },
    alts: [["dsrobes", "11 Intellect and 6 spell damage from Death Speaker Jargba in Razorfen Kraul."]] });
  L.push({ key: "wrist", label: "Wrist", opts: ["oilrag"],
    why: { oilrag: "8 spell power and 3 mp5 from Electrocutioner 6000 in Gnomeregan." },
    alts: A ? [["mindthrust", "Your level 20 bracers."]] : [["mindthrust", "Your level 20 bracers."], ["tabitha", "6 Intellect from A Frightened Request."]] });
  if (A) {
    L.push({ key: "hands", label: "Hands", opts: ["townclerk", set + "gloves:tail"],
      why: { townclerk: "11 Intellect and 4 spell power from Crime and Punishment, a Stockade quest you pick up in Darkshire.", [set + "gloves"]: "7 " + Sch + " damage plus Intellect and Stamina, a hair behind." },
      alts: [["hotshot", "8 Intellect, 5 Spirit and 5 Stamina: a very rare Bind on Equip drop in Gnomeregan."]] });
  } else {
    L.push({ key: "hands", label: "Hands", opts: [set + "gloves:tail", "jutebraid"],
      why: { [set + "gloves"]: "7 " + Sch + " damage plus Intellect and Stamina. Tailors only.", jutebraid: "5 Intellect and 6 spell power from Horde Presence, which ends at a level 29 elite in Stonetalon." },
      alts: [["serpgloves", "Your level 20 gloves: 6 spell power."], ["tattered", "Spirit and 3 spell damage from The Book of Ur."]] });
  }
  L.push({ key: "waist", label: "Waist", opts: ["arugalbelt", set + "sash:tail"],
    why: { arugalbelt: "9 spell power, 5 Spirit and 3 Intellect from Archmage Arugal, Shadowfang Keep’s last boss.", [set + "sash"]: "7 " + Sch + " damage plus Intellect and Stamina, a little behind." },
    alts: [["ghamoora", "7 spell power and 7 Stamina from Ghamoo-ra in Blackfathom Deeps."]] });
  L.push({ key: "legs", label: "Legs", opts: [set + "legs:tail", "gazedreamer"],
    why: { [set + "legs"]: "14 " + Sch + " damage plus Intellect, Spirit and Stamina, the biggest upgrade on this list. Tailors only: Tailoring 125 and a 30-Favor pattern.",
      gazedreamer: "12 spell power and 9 Spirit from Twilight Lord Kelris in Blackfathom Deeps." },
    alts: [["leech", "5 spell power and 5 mp5 from Aku’mai, same dungeon."]] });
  L.push({ key: "feet", label: "Feet", opts: ["spidersilk", "acidic"],
    why: { spidersilk: "Your level 20 boots are still about the best: 7 spell power.", acidic: "About equal: 8 Intellect, 4 spell power and 4 Spirit from Viscous Fallout in Gnomeregan." } });
  if (A) {
    L.push({ key: "ring", label: "Ring", pair: true, opts: ["forlorn", "darkhorde"],
      why: { forlorn: "8 spell power, at the end of Duskwood’s Stalvan story.", darkhorde: "6 spell power and 6 Stamina from Targorr the Dread, the Stockade’s first boss." },
      alts: [["philanthropist", "10 spell power and 6 Intellect, the best ring at 30, but Greater Friend of the Library needs 20 books and several sit in zones above 30."],
        ["snakehoop", "7 Intellect and 7 Spirit from Willix the Importer in Razorfen Kraul."], ["mcr", "Your level 20 ring."]] });
  } else {
    L.push({ key: "ring", label: "Ring", pair: true, opts: ["snakehoop", "lagnut"],
      why: { snakehoop: "7 Intellect and 7 Spirit from Willix the Importer, an escort inside Razorfen Kraul.", lagnut: "7 Spirit and 2 spell damage from Electrocutioner 6000 in Gnomeregan." },
      alts: [["philanthropist", "10 spell power and 6 Intellect, the best ring at 30, but Greater Friend of the Library needs 20 books and several sit in zones above 30."],
        ["blackpearl", "Your level 20 ring."]] });
  }
  L.push({ key: "trinket", label: "Trinket", pair: true, opts: ["recomb:eng", "roogug", "worgenbane"], none: "No trinket at 30 has spell power.",
    why: { recomb: "Engineers only (Engineering 140): an emergency heal and mana top-up that also removes Polymorph.", roogug: "Just 6 Spirit, but it beats an empty slot. Roogug drops it in Razorfen Kraul.", worgenbane: "Just 2 mp5, from Commander Springvale in Shadowfang Keep." } });
  L.push({ key: "mh", label: "Main hand", opts: ["swinetusk", "glimmer:ench"],
    why: { swinetusk: "40 spell power, far more than any other weapon at 30, from Agathelos the Raging in Razorfen Kraul. It’s a dagger, so train Daggers first.",
      glimmer: "Enchanters only: a staff with 34 spell power and 11 Intellect, if you’d rather skip the off hand. Swinetusk and an orb still win." },
    alts: [["evocator", "28 spell power, the best dagger until Swinetusk drops, if you find one."], [A ? "buzzer" : "searing", "Your level 20 dagger, until Swinetusk drops."],
      ["hydrocane", "Or a staff: 36 spell power from Viscous Fallout in Gnomeregan."], ["sleepwalker", "A staff with 32 spell power and 11 Spirit from Twilight Lord Kelris in Blackfathom Deeps."]] });
  const omega = ["omega", "8 spell power and 3 mp5 from Compendium of the Fallen, a Scarlet Monastery Library quest. Orcs and Trolls only, and it may need a level above 30."];
  if (A) {
    L.push({ key: "oh", label: "Off hand", opts: ["orbmystic:ench", "tome"],
      why: { orbmystic: "Enchanters only: 7 spell power and 6 Intellect.", tome: "Your level 20 off hand is still the best you can get without Enchanting." },
      alts: (sp === "arcane" ? [] : [["antipodean", "6 " + Sch + " damage: better than the tome if you find one on the Auction House."]])
        .concat([["mathystra", "5 Intellect and 3 Stamina from Baron Marinous in Darkshore."]]) });
  } else if (sp === "arcane") {
    L.push({ key: "oh", label: "Off hand", opts: ["orbmystic:ench", "vial"],
      why: { orbmystic: "Enchanters only: 7 spell power and 6 Intellect.", vial: "3 Intellect and 3 Spirit from Valuable Vantages, a Barrens quest." },
      alts: [omega, ["skum", "Weak stats, but its use effect refills 803 mana while you sit."]] });
  } else {
    L.push({ key: "oh", label: "Off hand", opts: ["orbmystic:ench", "antipodean"],
      why: { orbmystic: "Enchanters only: 7 spell power and 6 Intellect.", antipodean: "6 " + Sch + " damage. A Bind on Equip world drop, so check the Auction House." },
      alts: [omega, ["vial", "3 Intellect and 3 Spirit from Valuable Vantages, a Barrens quest."]] });
  }
  L.push({ key: "wand", label: "Wand", opts: ["necrotic", "mysticwand", "gravestone"],
    why: { necrotic: "The fastest wand at 30, if its rare is up when you run the Graveyard.",
      mysticwand: "5 spell power, and Bind on Equip, so any enchanter can make one.", gravestone: "From Blackfathom Villainy, a quest both factions can take." },
    alts: sp === "arcane"
      ? [["starfaller", "6 Arcane damage and 4 Intellect: the best wand for you if you find one on the Auction House."], ["pestilent", "From wand vendors in the capitals once you’re 30."]]
      : [["starfaller", "About as fast as the Necrotic Wand: a Bind on Equip world drop."], ["pestilent", "From wand vendors in the capitals once you’re 30."]] });
  return L;
}
const SRC = {
  hot: { chip: "Hall of Thanes", group: "hot" },
  hotq: { chip: "Hall of Thanes quest", group: "hot" },
  rfc: { chip: "Ragefire Chasm", group: "rfc" },
  rfcq: { chip: "Ragefire Chasm quest", group: "rfc" },
  dm: { chip: "Deadmines", group: "dm" },
  dmq: { chip: "Deadmines quest", group: "dm" },
  wc: { chip: "Wailing Caverns", group: "wc" },
  wcq: { chip: "Wailing Caverns quest", group: "wc" },
  rol: { chip: "Ruins of Lordaeron", group: "rol" },
  rolq: { chip: "Ruins of Lordaeron quest", group: "rol" },
  sfk: { chip: "Shadowfang Keep", group: "sfk" },
  sfkq: { chip: "Shadowfang Keep quest", group: "sfk" },
  bfd: { chip: "Blackfathom Deeps", group: "bfd" },
  bfdq: { chip: "Blackfathom Deeps quest", group: "bfd", stretch: 20 },
  stocks: { chip: "The Stockade", group: "stocks" },
  stocksq: { chip: "Stockade quest", group: "stocks" },
  gnomer: { chip: "Gnomeregan", group: "gnomer" },
  gnomerq: { chip: "Gnomeregan quest", group: "gnomer" },
  rfk: { chip: "Razorfen Kraul", group: "rfk" },
  rfkq: { chip: "Razorfen Kraul quest", group: "rfk" },
  smgy: { chip: "SM Graveyard", group: "smgy" },
  smlibq: { chip: "SM Library quest", group: "smlib" },
  dalaran: { chip: "City of Dalaran", group: "world" },
  zqa: { chip: "Quest", group: "world" },
  zqh: { chip: "Quest", group: "world" },
  zq: { chip: "Quest", group: "world" },
  cq: { chip: "Mage quest", group: "world" },
  lib: { chip: "Library quest", group: "world" },
  boe: { chip: "Auction House", group: "ah" },
  rare: { chip: "Rare spawn", group: "ah" },
  vendor: { chip: "Vendor", group: "ah" },
  unk: { chip: "Not confirmed", group: "world" },
  tail: { chip: "Tailoring", group: "craft", prof: true },
  ench: { chip: "Enchanting", group: "craft", prof: true },
  eng: { chip: "Engineering", group: "craft", prof: true }
};

/* Where each group of sources is. "where" can depend on the level (20 or 30) and the faction (a or h). */
const GROUPS = [
  { key: "hot", title: "Hall of Thanes", where: { a: "Old Ironforge, beneath the High Seat.", h: "Under Ironforge, so Horde can’t realistically get in." } },
  { key: "rfc", title: "Ragefire Chasm", where: { a: "Inside Orgrimmar, so Alliance can’t realistically get in.", h: "Orgrimmar’s Cleft of Shadow." } },
  { key: "dm", title: "Deadmines", where: { a: "Moonbrook, Westfall.", h: "Moonbrook, Westfall, deep in Alliance land." } },
  { key: "wc", title: "Wailing Caverns", where: { a: "The Barrens. Take the boat from Menethil Harbor to Theramore and run west.", h: "The Barrens, southwest of the Crossroads." } },
  { key: "rol", title: "Ruins of Lordaeron", where: { a: "Above Undercity. A long trek through Horde land; the Menethil boat now stops at Southshore.", h: "Right above Undercity. Orcs and Trolls take the zeppelin to Tirisfal." } },
  { key: "sfk", title: "Shadowfang Keep", where: {
    20: { a: "Silverpine Forest, in Horde land. Only the first bosses and the trash drop gear you can wear at 20.", h: "Silverpine Forest, south of the Sepulcher. Only the first bosses and the trash drop gear you can wear at 20." },
    30: { a: "Silverpine Forest, on the hill above Pyrewood Village. Horde land; the Menethil boat stops at Southshore.", h: "Silverpine Forest, on the hill above Pyrewood Village." } } },
  { key: "bfd", title: "Blackfathom Deeps", where: {
    20: { a: "Zoram Strand, Ashenvale. Tuned a few levels above 20.", h: "Zoram Strand, Ashenvale, by Zoram’gar Outpost. Tuned a few levels above 20." },
    30: { a: "Zoram Strand, Ashenvale. Sail from Stormwind Harbor or Menethil to Auberdine and run south.", h: "Zoram Strand, Ashenvale, by the Horde’s Zoram’gar Outpost." } } },
  { key: "stocks", title: "The Stockade", where: { a: "Stormwind’s Mage Quarter canal. Crime and Punishment starts in Darkshire, Duskwood.", h: "Inside Stormwind, so Horde can’t get in." } },
  { key: "gnomer", title: "Gnomeregan", where: { a: "Dun Morogh, west of Kharanos. Its quests start in Tinker Town, Ironforge.", h: "Dun Morogh. After Rig Wars, Scooty’s transporter in Booty Bay takes you there." } },
  { key: "rfk", title: "Razorfen Kraul", where: { a: "The far south of the Barrens. A long trip: boat to Theramore, then west and south.", h: "The far south of the Barrens, just north of the Great Lift." } },
  { key: "smgy", title: "Scarlet Monastery Graveyard", where: { a: "Northeast Tirisfal Glades, deep in Horde land. Travel with your group.", h: "Northeast Tirisfal Glades, a ride east of Brill." } },
  { key: "smlib", title: "Scarlet Monastery Library", where: "Same courtyard as the Graveyard, tuned a little above 30." },
  { key: "world", title: "Quests in the world", where: "" },
  { key: "ah", title: "Auction House", where: "Bind on Equip, so you can buy them or farm them." },
  { key: "craft", title: "Your professions", where: { a: "Patterns come from Three Corners, Redridge.", h: "Patterns come from the camp west of the Crossroads, the Barrens." } }
];

/* Rough value of one point of each stat, in spell power. School damage counts fully for its own spec. */
const WEIGHT = {
  arcane: { sp: 1, dmg: 1, arcane: 1, fire: 0.3, frost: 0.3, mp5: 0.8, int: 0.5, spi: 0.35, sta: 0.1 },
  fire: { sp: 1, dmg: 1, fire: 1, frost: 0.3, arcane: 0.3, mp5: 0.8, int: 0.5, spi: 0.3, sta: 0.1 },
  frost: { sp: 1, dmg: 1, frost: 1, fire: 0.3, arcane: 0.3, mp5: 0.8, int: 0.5, spi: 0.3, sta: 0.1 }
};

/* ---------- enchants and armor kits, per slot ----------
   Forever raised many Classic enchants, so these are Forever's own values (the same ones the Shaman site
   checked on Wowhead's Forever database in late September 2026). Skill levels are the Classic ones Wowhead still lists.
   An item holds one enchant or one kit, so each slot gets one pick, plus easier or stronger options.
   "how" can differ by faction: { a: Alliance text, h: Horde text }. */
const EN = {
  revelation: { name: "Weapon – Revelation", fx: "When a spell fails to crit, a chance your next spell crits", how: "Skill 140 and a 45-Favor formula from the Merchant’s Favor vendors. It’s a one-hand weapon enchant, so it goes on a staff too. Nobody has measured how often it triggers.", tag: "New in Forever" },
  int2hL: { name: "2H Weapon – Lesser Intellect", fx: "+5 Intellect", how: "Enchanter skill 100, from a vendor formula. Only fits a staff." },
  neckSp: { name: "Necklace – Spell Power", fx: "+6 spell power", how: "Skill 210 and a 120-Favor formula. Its materials are level 40+ and costly, so they may be scarce while the beta is capped.", tag: "New in Forever" },
  chestInt: { name: "Chest – Greater Intellect", fx: "+6 Intellect", how: "Skill 185. Forever turned the old mana enchants into Intellect." },
  bracerHealL: { name: "Bracer – Lesser Healing Power", fx: "+16 healing and +6 spell damage", how: "Skill 205. The spell damage is what counts for a mage. The formula is new in Forever and sold in Desolace.", tag: "New in Forever" },
  bracerIntL: { name: "Bracer – Lesser Intellect", fx: "+5 Intellect", how: "Skill 150. Forever gives it the same +5 as Bracer – Intellect (skill 210), which may get patched." },
  kitMysticM: { name: "Mystic Medium Armor Kit", fx: "+2 spell power and +16 armor", how: "Leatherworking 80. Leatherworking suppliers in the capitals sell the pattern, and kits trade, so anyone can buy one. Needs level 15.", tag: "Kit" },
  kitMysticH: { name: "Mystic Heavy Armor Kit", fx: "+4 spell power and +24 armor",
    how: { a: "Leatherworking 135, pattern from Saenorion in Darnassus. Kits trade. Needs level 30. Wowhead doesn’t show its numbers yet, so they come from one site.",
      h: "Leatherworking 135. The known pattern vendor is Saenorion in Darnassus, so look for kits on the Auction House. Needs level 30. Wowhead doesn’t show its numbers yet, so they come from one site." }, tag: "Kit" }
};
const NO_CLOAK = "No cloak enchant helps a caster at this level.";
const NO_HELD = "Off-hand items that aren’t shields can’t be enchanted.";
// For each slot: the pick, then [option, label, short note] entries, or a note when nothing is worth it.
// Arcane, Fire and Frost all want spell power, so they share one plan per level.
const MAGE_ENCH = {
  20: {
    mh: { pick: "revelation" },
    staff: { pick: "revelation", alts: [["int2hL", "Easier"]] },
    oh: { none: NO_HELD },
    neck: { pick: "neckSp" },
    back: { none: NO_CLOAK },
    chest: { pick: "chestInt", alts: [["kitMysticM", "Easier", "Nearly as good."]] },
    wrist: { pick: "bracerHealL", alts: [["bracerIntL", "Easier"]] },
    hands: { pick: "kitMysticM" },
    legs: { pick: "kitMysticM" },
    feet: { pick: "kitMysticM" }
  },
  30: {
    mh: { pick: "revelation" },
    staff: { pick: "revelation", alts: [["int2hL", "Easier"]] },
    oh: { none: NO_HELD },
    neck: { pick: "neckSp" },
    back: { none: NO_CLOAK },
    chest: { pick: "kitMysticH", alts: [["chestInt", "Or", "Close behind the kit."]] },
    wrist: { pick: "bracerHealL", alts: [["bracerIntL", "Easier"]] },
    hands: { pick: "kitMysticH" },
    legs: { pick: "kitMysticH" },
    feet: { pick: "kitMysticH" }
  }
};
const ENCH_PLAN = { 20: { arcane: MAGE_ENCH[20], fire: MAGE_ENCH[20], frost: MAGE_ENCH[20] }, 30: { arcane: MAGE_ENCH[30], fire: MAGE_ENCH[30], frost: MAGE_ENCH[30] } };
// Temporary weapon oils stack on top of any enchant.
const OIL = {
  20: "For a hard fight, Minor Wizard Oil adds 8 spell power for 30 minutes on top of any enchant. Enchanters make it from a vendor recipe.",
  30: "For a hard fight, Lesser Wizard Oil adds 16 spell power for 30 minutes on top of any enchant. Wizard Oils went back to their Classic values on Sept 24."
};

const W20 = (spi) => (sch) => [["Spell power", 1], [sch + " damage", 1], ["mp5", 0.8], ["Intellect", 0.5], ["Spirit", spi], ["Stamina", 0.1]];

const SPEC_META = {
  20: {
    arcane: { label: "Arcane", short: "Arcane", el: "arcane", use: "Wand leveling and dungeons", unit: "spell power",
      talents: [["Wand Specialization", "2/2", true], ["Arcane Focus", "3/5"], ["Arcane Subtlety", "2/2"], ["Arcane Concentration", "3/5"], ["Arcane Blast", "1/1", true]],
      blurb: ["Spell power comes first. Arcane damage gear counts fully for Arcane Blast, Arcane Missiles and Arcane Explosion; plain spell power counts for everything.",
        "Intellect matters a little more for you than for Fire or Frost, because each Arcane Blast stack makes the next one cost more. Wand Specialization makes a better wand worth chasing too."],
      weights: W20(0.3)("Arcane") },
    fire: { label: "Fire", short: "Fire", el: "fire", use: "Solo questing", unit: "spell power",
      talents: [["Improved Fireball", "5/5", true], ["Wake of Fire", "2/2", true], ["Ignite", "3/5"], ["Pyroblast", "1/1"]],
      blurb: ["Spell power comes first, and Fire damage gear counts for everything a Fire mage casts.",
        "Crit feeds Ignite now and Hot Streak at 25. Intellect and Spirit keep you casting between drinks."],
      weights: W20(0.3)("Fire") },
    frost: { label: "Frost", short: "Frost", el: "frost", use: "Safe solo leveling", unit: "spell power",
      talents: [["Elemental Precision", "5/5"], ["Frostbite", "3/3", true], ["Ice Shards", "2/5"], ["Ice Lance", "1/1", true]],
      blurb: ["Spell power comes first. Frost damage gear counts fully for Frostbolt, Ice Lance and Frost Nova.",
        "Intellect and Spirit mean fewer drinks. Your hit comes from Elemental Precision, so you don’t need it on gear."],
      weights: W20(0.3)("Frost") }
  },
  30: {
    arcane: { label: "Arcane", short: "Arcane", el: "arcane", use: "Burst damage", unit: "spell power",
      talents: [["Improved Channeling", "5/5"], ["Arcane Concentration", "5/5"], ["Arcane Impact", "3/3"], ["Arcane Meditation", "3/3", true], ["Missile Barrage", "1/1", true], ["Presence of Mind", "1/1"]],
      blurb: ["Arcane Meditation keeps half your mana regeneration going while you cast, so Spirit is worth more to you than to Fire or Frost.",
        "Spell power still comes first, and Intellect sets how many Arcane Blasts you can chain before Evocation or a drink."],
      weights: W20(0.4)("Arcane") },
    fire: { label: "Fire", short: "Fire", el: "fire", use: "Solo questing", unit: "spell power",
      talents: [["Improved Fireball", "5/5"], ["Ignite", "5/5", true], ["Burning Soul", "3/3"], ["Improved Scorch", "3/3"], ["Hot Streak", "1/1", true], ["Blast Wave", "1/1"]],
      blurb: ["Crit climbs to second place: Hot Streak needs crits, and Ignite adds 40% of every crit as a burn.",
        "Spell power still beats everything, and Fire damage gear counts fully."],
      weights: W20(0.3)("Fire") },
    frost: { label: "Frost", short: "Frost", el: "frost", use: "Safe solo leveling", unit: "spell power",
      talents: [["Improved Frostbolt", "5/5"], ["Ice Shards", "5/5"], ["Frostbite", "3/3"], ["Shatter", "3/3", true], ["Ice Block", "1/1"], ["Fingers of Frost", "1/2", true]],
      blurb: ["Spell power still comes first. Shatter already gives +50% crit against frozen targets, so crit on gear matters less than it does for Fire.",
        "Ice Block is your safety net, so Stamina counts for a little more when you solo."],
      weights: W20(0.3)("Frost") }
  }
};

function buildSpecs(lvl) {
  const out = {};
  Object.keys(SCHOOL).forEach((sp) => {
    const meta = SPEC_META[lvl][sp];
    out[sp] = Object.assign({}, meta, {
      slots: { a: lvl === 30 ? slots30(sp, "a") : slots20(sp, "a"), h: lvl === 30 ? slots30(sp, "h") : slots20(sp, "h") }
    });
  });
  return out;
}

/* Quest reward choices. fac: "a", "h" or "both". take applies to every spec. */
const QUEST_CHOICES20 = [
  { q: "Deviate Eradication", where: "Wailing Caverns · Ebru, on top of the cave mound", fac: "both", take: ["sizzle", "Your best wand."] },
  { q: "In Nightmares", where: "Wailing Caverns shard chain · Falla Sagewind above the cave", fac: "both", take: ["talbar", "The other reward is mail."] },
  { q: "Important Heirlooms", where: "Hall of Thanes · Thom Filch, Old Ironforge", fac: "a", take: ["tome", "Your off hand. The gloves lose to Serpent Gloves anyway."] },
  { q: "Old Ironforge Incursion", where: "Hall of Thanes · Earthseer Farsen, Dun Morogh", fac: "a", take: ["deepblaze", "A wand to carry you until Sizzle Stick. The others are a gun and a mace."] },
  { q: "The Defias Brotherhood", where: "Deadmines chain · Gryan Stoutmantle, Sentinel Hill", fac: "a", take: ["westfall", "A stand-in staff until you have Buzzer Blade and the Dwarven Tome."] },
  { q: "Underground Assault", where: "Deadmines · Shoni the Shilent, Stormwind", fac: "a", take: ["sable", "A wand. The other choices are mail and leather."] },
  { q: "WANTED: Chok'sul", where: "Loch Modan · poster in Thelsamar", fac: "a", take: ["kimbra", "Minor Channeling Ring comes with every choice, and the boots are the only cloth pick."] },
  { q: "Remember That I Love You", where: "Ruins of Lordaeron · a letter inside; ends in Stormwind", fac: "a", take: ["locket", "The only reward."] },
  { q: "Researching the Corruption", where: "Blackfathom Deeps · Gershala Nightwhisper, Auberdine", fac: "a", take: ["prelacy", "A hair better than Heavy Woolen Cloak."] },
  { q: "Abominable Creatures", where: "Ruins of Lordaeron · Captain Truman, inside", fac: "a", take: [null, "Either. Nothing here has caster stats."] },
  { q: "Hidden Enemies", where: "Ragefire Chasm · Thrall, Orgrimmar", fac: "h", take: ["orgstaff", "18 spell power and 2 mp5, more for you than the Kris."] },
  { q: "The Power to Destroy...", where: "Ragefire Chasm · Varimathras, Undercity", fac: "h", take: ["ghastly", "The only cloth choice."] },
  { q: "Returning the Lost Satchel", where: "Ragefire Chasm · Rahauro, Thunder Bluff", fac: "h", take: ["featherbead", "The only cloth choice."] },
  { q: "The Wrath of Rath'mael", where: "Ruins of Lordaeron · Deathguard Kristof, southeast of Brill", fac: "h", take: ["gnarled", "Your weapon. The other reward is an axe."] },
  { q: "A Frightened Request", where: "Ruins of Lordaeron · Tabitha Heartweaver, the Sepulcher", fac: "h", take: ["tabitha", "The other reward is an Agility dagger."] },
  { q: "The New Plague", where: "Ruins of Lordaeron · Theodore Griffs, Undercity", fac: "h", take: ["blight", "The other reward is a sword."] },
  { q: "Unending Torment", where: "Ruins of Lordaeron · The Baron’s head, to Master Apothecary Faranell", fac: "h", take: [null, "Either. Nothing here has caster stats."] },
  { q: "Leaders of the Fang", where: "Wailing Caverns · Nara Wildmane, Thunder Bluff", fac: "h", take: ["crescent", "A backup staff. The other two are melee weapons."] },
  { q: "Serpentbloom", where: "Wailing Caverns · Apothecary Zamah, Thunder Bluff", fac: "h", take: ["apothecary", "The others are leather and mail."] },
  { q: "Assault on Fenris Isle", where: "Silverpine Forest · High Executor Hadrec, the Sepulcher", fac: "h", take: ["adjudicator", "Nearly as good as Leftover Abomination Skin."] },
  { q: "Friend of the Library", where: "Ten library books · your faction’s librarian", fac: "both", take: ["pendant", "The other necklace is Agility."] }
];

const QUEST_CHOICES30 = [
  { q: "Blackfathom Villainy", where: "Blackfathom Deeps · Argent Guard Thaelrid, inside", fac: "both", take: ["gravestone", "A wand with no level limit. The others are a shield and armor."] },
  { q: "Willix the Importer", where: "Razorfen Kraul · starts inside", fac: "both", take: ["snakehoop", "The other rings are for melee."] },
  { q: "A Fine Mess", where: "Gnomeregan · Kernobee, inside; ends with Scooty in Booty Bay", fac: "both", take: ["fairywing", "The bracers are mail and leather."] },
  { q: "The Crone of the Kraul", where: "Razorfen Kraul · Falfindel Waywarder, Thalanaar", fac: "a", take: ["berylline", "The other choices are mail and a shield."] },
  { q: "The Grand Betrayal", where: "Gnomeregan · High Tinker Mekkatorque, Tinker Town", fac: "a", take: ["civinad", "The only cloth choice."] },
  { q: "Data Rescue", where: "Gnomeregan · Master Mechanic Castpipe, Tinker Town", fac: "a", take: ["repaircape", "Your cloak. The Pipehammer is a mace you can’t use."] },
  { q: "Crime and Punishment", where: "Stockade · Councilman Millstipe, Darkshire", fac: "a", take: ["townclerk", "Your gloves."] },
  { q: "The Legend of Stalvan", where: "Duskwood · a long chain from Darkshire", fac: "a", take: ["forlorn", "The other choice is an axe."] },
  { q: "Mythology of the Titans", where: "SM Library · Librarian Mae Paledust, Ironforge", fac: "a", take: ["explorers", "The only reward, and your necklace."] },
  { q: "A Friend of the Family", where: "Stormwind · Lord Grayson Shadowbreaker, Cathedral of Light", fac: "a", take: ["royaldagger", "The other reward is a lance."] },
  { q: "Baron Marinous", where: "Darkshore", fac: "a", take: ["mathystra", "The Spirit off hand is about the same."] },
  { q: "The Fury Runs Deep", where: "Stockade · Motley Garmason, Dun Modr", fac: "a", take: [null, "Either. Neither reward helps a mage."] },
  { q: "A Vengeful Fate", where: "Razorfen Kraul · Auld Stonespire, Thunder Bluff", fac: "h", take: ["berylline", "The other choices are mail and a shield."] },
  { q: "Rig Wars", where: "Gnomeregan · Nogg, Valley of Honor, Orgrimmar", fac: "h", take: ["civinad", "The only cloth choice."] },
  { q: "Compendium of the Fallen", where: "SM Library · Sage Truthseeker, Thunder Bluff (not for Undead)", fac: "h", take: ["omega", "The other two are shields."] },
  { q: "Horde Presence", where: "Stonetalon · Kadrak, Mor’shan Rampart", fac: "h", take: ["jutebraid", "The others aren’t cloth."] },
  { q: "The Book of Ur", where: "Shadowfang Keep · Keeper Bel’dugur, Undercity", fac: "h", take: ["tattered", "The only cloth choice."] },
  { q: "Deathstalkers in Shadowfang", where: "Shadowfang Keep · High Executor Hadrec, the Sepulcher", fac: "h", take: ["ghostly", "The only cloth choice, though Bloodmage Mantle replaces it."] },
  { q: "Allegiance to the Old Gods", where: "Blackfathom Deeps · a Damp Note, to Je’neu Sancrea", fac: "h", take: ["chestnut", "The ring is Strength and Agility."] },
  { q: "Valuable Vantages", where: "The Barrens · Deathstalker Masoj", fac: "h", take: ["vial", "The other reward is a sword."] },
  { q: "Chol'aruk the Ravener", where: "The Barrens · a level 21 elite", fac: "both", take: ["toothpick", "The rest are melee gear and a shield."] },
  { q: "Greater Friend of the Library", where: "Twenty library books · your faction’s librarian", fac: "both", take: ["philanthropist", "The other ring is for rogues."] }
];

const WILDCARDS20 = [
  { k: "evocator", note: "28 spell power, the best one-hander at 20. Bind on Equip from Blackfathom Deeps trash, but very rare." },
  { k: "blessedseer", note: "A staff with 28 spell power, from the same Blackfathom Deeps trash." },
  { k: "antipodean", note: "+6 Fire and +6 Frost damage. A world drop in Silverpine, Hillsbrad, Ashenvale, Darkshore, the Wetlands and dungeon trash." },
  { k: "magemantle", note: "9 Intellect and 5 spell power. A world drop with no fixed source." },
  { k: "firebelcher", note: "The Deviate Faerie Dragon, a rare in Wailing Caverns, drops it. Sizzle Stick’s speed plus a Fire damage proc." },
  { k: "drozem", note: "Would be the best chest at 20. Reported to drop from Dro’zem the Blasphemous, a rare elite in Redridge. Not confirmed." },
  { k: "packleader", note: "5 Intellect edges out Scholarly Pendant; the Strength is wasted. From Humar the Pridelord, a rare lion in the Barrens with a long respawn." },
  { k: "lakeshire", note: "8 Intellect and 6 Stamina, new in Forever. Its source isn’t known; probably a Redridge quest above 20." }
];
const WILDCARDS30 = [
  { k: "starfaller", note: "A wand with +6 Arcane damage, about as fast as the Necrotic Wand. A world drop." },
  { k: "thunderwood", note: "A good leveling wand with 5 spell power, from level 22. A world drop." },
  { k: "evocator", note: "28 spell power, the best dagger until Swinetusk Shank. Bind on Equip from Blackfathom Deeps trash." },
  { k: "hotshot", note: "8 Intellect, 5 Spirit and 5 Stamina. A very rare drop in Gnomeregan." },
  { k: "drozem", note: "10 spell power and 9 Intellect, better than any chest that drops at 30. Dro’zem the Blasphemous, a rare elite in Redridge, drops it." },
  { k: "magistrate", note: "14 Intellect and 5 spell power legs, new in Forever. Nobody knows where they come from yet." },
  { k: "scorn", note: "Would be the best necklace at 30, but it came from a Classic event boss that may not exist in Forever." },
  { k: "abomlegs", note: "Would rival Gaze Dreamer Pants. Same problem: its Classic source was an event boss." },
  { k: "ponderous", note: "A City of Dalaran off hand seen at the BlizzCon demo. Weak unless Wowhead is missing a line." }
];

const LEFT_OUT20 = [
  ["Filigreed gowns and leggings (Tailoring)", "They’d be the best tailored chest and legs at 20, but where their patterns come from isn’t confirmed yet. If you find one, it beats the picks above.", "Filigreed Silky, Flame and Pearly Gown and Leggings"],
  ["Novice Arcanist’s Sash (Tailoring)", "Its pattern hasn’t turned up in the beta yet.", "Novice Arcanist's Sash"],
  ["Plain Silky, Flame and Pearly gowns and leggings", "They need level 22 and 25.", "Silky Gown, Flame Leggings and the rest"],
  ["Blackfathom Villainy", "It ends at Twilight Lord Kelris, a level 27 boss.", "Gravestone Scepter"],
  ["Allegiance to the Old Gods, Isha Awak, Horde Presence (Horde)", "Level 26–29 quests you can pick up early.", "Chestnut Mantle, Branding Rod, Jutebraid Gloves"],
  ["Retrieval for Mauren (Alliance)", "A level 26 quest in Stonetalon, and its wand is slower than Sizzle Stick.", "Spellcrafter Wand"],
  ["Greater Friend of the Library", "It needs 20 books, and several sit in zones above 30.", "Philanthropist's Ring"],
  ["Morganth, Redridge", "Level 27 elite.", "Rose Mantle"],
  ["Arugal Must Die (Horde)", "Shadowfang Keep’s last boss is level 26, and the ring has no caster stats.", "Seal of Sylvanas"],
  ["Higher-level wands", "They need level 26 and 27.", "Lesser Mystic Wand, Wand of Eventide"],
  ["Enchanting’s orbs and staves", "They need level 25.", "Orb of Mystic Insight, Glimmering Staff"],
  ["Ragefire Chasm for Alliance, Hall of Thanes for Horde", "Each entrance is inside the other faction’s capital.", "Searing Dagger, Robe of Evocation, Fang of Magmatus, Dwarven Tome, Deepblaze"],
  ["Shadowfang Keep’s later bosses", "Their drops need level 21 or higher.", "Robes of Arugal, Belt of Arugal"],
  ["Other engineering goggles", "They have Stamina and Spirit but no Intellect, so Shadow Goggles win.", "Flying Tiger Goggles, Green Tinted Goggles"],
  ["Mail and leather quest rewards", "Mages wear cloth only.", "Quagmire Galoshes, Polar Gauntlets, Savannah Bracers"]
];
const LEFT_OUT30 = [
  ["Excavation Site and City of Dalaran", "Both open with the level 30 cap, but nobody has published their loot yet.", ""],
  ["Filigreed circlets (Tailoring)", "They’d beat the plain circlets, but where their patterns come from isn’t confirmed yet.", "Filigreed Silky, Flame and Pearly Circlet"],
  ["Scarlet Monastery Library and Armory bosses", "Their drops need level 31 or higher.", "Orb of the Forgotten Seer, Mantle of Doan, Hypnotic Blade"],
  ["Mage robe quests (Astral Knot and Nether-lace)", "Intellect, Spirit and Stamina but no spell power, so the robes above beat them. They’re on the checklist.", "Astral Knot Robe, Nether-lace Tunic"],
  ["Mage’s Wand (class quest)", "It opens at 30, but it’s a level 38–40 chain.", "Icefury Wand, Nether Force Wand, Ragefire Wand"],
  ["Shadow and Holy damage gear", "Mages have no Shadow or Holy spells.", "Witching Stave, Necrology Robes"],
  ["Healing tailoring set", "The Pristine pieces are mostly healing, which does nothing for a mage.", "Pristine Circlet, Gown, Leggings"],
  ["Items with no Forever data yet", "Wowhead Forever has no stats for them.", "Zealot's Robe, Mourning Shawl, Witch's Finger, Dancing Flame"],
  ["Higher enchanting wands", "They need more skill than a level 30 enchanter can reach.", "Twisted Nether Wand, Dreambough Wand"],
  ["Quests you can’t pick up at 30", "They need level 33 or higher.", "Vorrel's Revenge (Mantle of Woe), Test of Lore (Dancing Flame)"],
  ["Seal of Sylvanas (Arugal Must Die)", "Stamina and attack power only.", "Seal of Sylvanas"],
  ["Maces, shields and leather", "Mages can’t use them.", "Crested Scepter, Death Speaker Scepter, Moss Cinch"]
];

const SOURCES = [
  { name: "Mage best in slot and tailoring sets", site: "ForeverChanges", url: "https://foreverchanges.pro/bis/mage" },
  { name: "Merchant’s Favor vendors and prices", site: "ForeverChanges", url: "https://foreverchanges.pro/merchants-favor" },
  { name: "Merchant’s Favor camps", site: "wowhandbook", url: "https://wowhandbook.com/professions/merchants-favor/" },
  { name: "Level 20 Frost overview", site: "Wowhead", url: "https://www.wowhead.com/forever/guide/classes/mage/frost/level-20-dps-overview" },
  { name: "Every dungeon quest in WoW Forever", site: "Wowhead", url: "https://www.wowhead.com/forever/guide/dungeons/every-dungeon-quest-location" },
  { name: "New tailoring patterns", site: "Warcraft Tavern", url: "https://www.warcrafttavern.com/forever/news/new-tailoring-patterns-for-world-of-warcraft-forever/" },
  { name: "New enchanting formulas", site: "Warcraft Tavern", url: "https://www.warcrafttavern.com/forever/news/new-enchanting-formulas-for-world-of-warcraft-forever/" },
  { name: "Spell power and wands after the Sept 24 patch", site: "wofwforever", url: "https://wofwforever.com/en/guides/wow-forever-spell-power-scaling/" },
  { name: "Dungeon loot tables", site: "wowtbc.gg", url: "https://wowtbc.gg/warcraftforever/loot-tables/dungeons/" },
  { name: "Dungeon guides", site: "zockify", url: "https://www.zockify.com/forever/dungeons/" },
  { name: "Ragefire Chasm", site: "wowforevertalent", url: "https://wowforevertalent.com/dungeons/ragefire-chasm/" },
  { name: "Rares and their drops", site: "ForeverChanges", url: "https://foreverchanges.pro/rares" }
];

const STAT_ORDER = [["sta", "Sta"], ["int", "Int"], ["spi", "Spi"], ["str", "Str"], ["agi", "Agi"], ["sp", "spell power"], ["dmg", "spell damage"], ["heal", "healing"], ["arcane", "Arcane damage"], ["fire", "Fire damage"], ["frost", "Frost damage"], ["mp5", "mp5"], ["hp5", "hp5"], ["crit", "spell crit"], ["hit", "spell hit"]];

/* ---------- per-level text ---------- */
const LEVELS = {
  20: {
    lvl: 20, title: "Level 20 Mage BiS", points: 11,
    lede: "The best gear a mage can get at the beta’s level 20 cap, picked for your talent build and faction.",
    checklistName: "level 20 checklist",
    specs: buildSpecs(20), choices: QUEST_CHOICES20, wild: WILDCARDS20, left: LEFT_OUT20,
    none: "Nothing available at level 20.",
    gearIntro: "The best item for each slot that a level 20 {spec} mage can get right now, with fallbacks. Tick your professions to see what they unlock. Item names link to Wowhead.",
    whereIntro: "Your list for this build, grouped by where it comes from.",
    favor: { a: "Mivin Shadowweave at Three Corners, Redridge, sells the tailoring patterns for 30 Favor each. Buy your school’s circlet first (Tailoring 100), then the sash (85) and gloves (75). Alynsia, in the same camp, sells Weapon – Revelation for 45 Favor and Necklace – Spell Power for 120.",
      h: "Jim’bek at Durotar Supply and Logistics, the camp just west of the Crossroads, sells the tailoring patterns for 30 Favor each. Buy your school’s circlet first (Tailoring 100), then the sash (85) and gloves (75). Beneris, in the same camp, sells Weapon – Revelation for 45 Favor and Necklace – Spell Power for 120." },
    leftIntro: "These show up on other lists, but you can’t realistically get them at level 20 right now.",
    about: [
      "Stats and sources come from Wowhead’s Forever database and community loot tables, checked in late September 2026.",
      "Every item here needs level 20 or lower, and every quest can be picked up at 20 or lower.",
      "Sizzle Stick shows 27–52 damage on Wowhead’s Forever item page and ForeverChanges, but one Wowhead data feed shows 18–34. Check it in game.",
      "Since the Sept 24 patch, wands no longer get stronger from your spell power. A wand’s spell power only helps your spells.",
      "The stat values are this page’s own rough estimates, used to rank items. No guide publishes mage stat weights for these levels.",
      "The beta cap is due to rise to 30. Beta characters are wiped when the beta ends."
    ]
  },
  30: {
    lvl: 30, title: "Level 30 Mage BiS", points: 21,
    lede: "The best gear a mage can get at the beta’s level 30 cap, picked for your talent build and faction.",
    checklistName: "level 30 checklist",
    specs: buildSpecs(30), choices: QUEST_CHOICES30, wild: WILDCARDS30, left: LEFT_OUT30,
    none: "Nothing available at level 30.",
    gearIntro: "The best item for each slot that a level 30 {spec} mage can get, with fallbacks. Tick your professions to see what they unlock. Item names link to Wowhead.",
    whereIntro: "Your list for this build, grouped by where it comes from. The dungeon planner puts these runs in order.",
    favor: { a: "Tailors: buy the leggings pattern first (Tailoring 125), then the gown (110). Enchanters: Alynsia’s Orb of Mystic Insight formula (45 Favor) is your off hand.",
      h: "Tailors: buy the leggings pattern from Jim’bek first (Tailoring 125), then the gown (110). Enchanters: Beneris’s Orb of Mystic Insight formula (45 Favor) is your off hand." },
    leftIntro: "These show up on other lists, but you can’t realistically get them at level 30.",
    about: [
      "Stats and sources come from Wowhead’s Forever database and community loot tables, checked in late September 2026, before the cap went up. Expect a few changes once people run these dungeons.",
      "Every item here needs level 30 or lower, and every quest can be picked up at 30 or lower. Wowhead shows no level requirement for many quest rewards, so a few, like Berylline Pads and the Omega Orb, may need more than 30.",
      "Swinetusk Shank, Bloodmage Mantle and Civinad Robes come from bosses in the low to mid 30s, so bring a strong group.",
      "Since the Sept 24 patch, wands no longer get stronger from your spell power. A wand’s spell power only helps your spells.",
      "The stat values are this page’s own rough estimates, used to rank items. No guide publishes mage stat weights for these levels.",
      "The beta stays at 30 until it ends on October 21. Beta characters are wiped when it ends."
    ]
  }
};

/* ---------- shared logic ---------- */
function enchEntry(key, fac) {
  const e = EN[key];
  if (!e) return null;
  return Object.assign({}, e, { key: key, how: e.how && typeof e.how === "object" ? (e.how[fac] || e.how.a) : (e.how || "") });
}
// The enchant or kit for one slot: { pick, alts } or { none }, or null for slots nothing can go on.
function enchFor(lvl, specKey, slotKey, fac) {
  const plan = ((ENCH_PLAN[lvl] || ENCH_PLAN[20])[specKey] || {})[slotKey];
  if (!plan) return null;
  if (plan.none) return { none: plan.none };
  return {
    pick: enchEntry(plan.pick, fac),
    alts: (plan.alts || []).map((a) => Object.assign(enchEntry(a[0], fac), { label: a[1], note: a[2] || "" }))
  };
}
// The same picks as a shopping list: one entry per enchant, with the slots it goes on.
function enchGroups(lvl, specKey, fac) {
  const groups = [];
  const byKey = {};
  LEVELS[lvl].specs[specKey].slots[fac === "h" ? "h" : "a"].forEach((slot) => {
    const e = enchFor(lvl, specKey, slot.key, fac);
    if (!e || !e.pick) return;
    // Slots share an entry only when their options match too.
    const id = [e.pick.key].concat(e.alts.map((a) => a.key + ":" + a.label)).join("|");
    let g = byKey[id];
    if (!g) { g = byKey[id] = { pick: e.pick, alts: e.alts, slots: [], keys: [] }; groups.push(g); }
    g.slots.push(slot.label);
    g.keys.push(slot.key);
  });
  return groups;
}
function parseOpt(o) {
  const i = o.indexOf(":");
  return i < 0 ? { k: o, p: null } : { k: o.slice(0, i), p: o.slice(i + 1) };
}
function raceOK(k, race) {
  const it = ITEMS[k];
  return !it || !it.rc || !race || it.rc.indexOf(race) >= 0;
}
function isAvail(o, profs, race) { return (!o.p || profs.has(o.p)) && raceOK(o.k, race); }
// One row per gear slot (two for rings and trinkets): the pick, better options a profession would unlock, and fallbacks.
function computeRows(lvl, specKey, profs, fac, race) {
  const spec = LEVELS[lvl].specs[specKey];
  const slots = spec.slots[fac === "h" ? "h" : "a"];
  const rows = [];
  slots.forEach((slot) => {
    const opts = slot.opts.map(parseOpt);
    const avail = opts.filter((o) => isAvail(o, profs, race));
    const n = slot.pair ? 2 : 1;
    const picks = avail.slice(0, n).map((o) => o.k);
    let cut = opts.length;
    if (picks.length === n) cut = opts.findIndex((o) => o.k === picks[n - 1]);
    const ups = opts.slice(0, cut).filter((o) => o.p && !profs.has(o.p) && raceOK(o.k, race));
    const alts = [];
    avail.slice(n).forEach((o) => alts.push([o.k, (slot.why && slot.why[o.k]) || ""]));
    (slot.alts || []).forEach((a) => {
      if (picks.indexOf(a[0]) === -1 && !alts.some((x) => x[0] === a[0]) && raceOK(a[0], race)) alts.push(a);
    });
    for (let i = 0; i < n; i++) {
      rows.push({
        slot: slot,
        rid: "row-" + slot.key + (slot.pair ? "-" + (i + 1) : ""),
        label: slot.label + (slot.pair ? " " + (i + 1) : ""),
        item: picks[i] || null,
        ups: i === n - 1 ? ups : [],
        alts: i === n - 1 ? alts : []
      });
    }
  });
  return rows;
}
function whereText(g, lvl, fac) {
  let w = g.where;
  if (typeof w === "string") return w;
  if (w && (w[20] || w[30])) w = w[lvl] || w[20];
  if (typeof w === "string") return w;
  return (w && (w[fac] || w.a)) || "";
}
function choicesFor(lvl, fac, race) {
  return LEVELS[lvl].choices.filter((c) => (c.fac === "both" || c.fac === fac) && (!c.take[0] || raceOK(c.take[0], race)));
}

window.GEAR_DATA = {
  PROFS: PROFS, PROF_NAME: PROF_NAME, ITEMS: ITEMS, SRC: SRC, GROUPS: GROUPS, WEIGHT: WEIGHT, SOURCES: SOURCES, STAT_ORDER: STAT_ORDER, SCHOOL: SCHOOL,
  LEVELS: LEVELS, parseOpt: parseOpt, isAvail: isAvail, computeRows: computeRows, whereText: whereText, choicesFor: choicesFor, raceOK: raceOK,
  ENCH: EN, ENCH_PLAN: ENCH_PLAN, OIL: OIL, enchFor: enchFor, enchGroups: enchGroups
};
})();
