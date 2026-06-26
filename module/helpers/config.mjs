export const MAID_RPG = {
    id: "maid-rpg-vtt",
    attributes: {
        athletics: "MAID_RPG.Attribute.Athletics",
        affection: "MAID_RPG.Attribute.Affection",
        skill: "MAID_RPG.Attribute.Skill",
        cunning: "MAID_RPG.Attribute.Cunning",
        luck: "MAID_RPG.Attribute.Luck",
        will: "MAID_RPG.Attribute.Will"
    },
    actorTypes: {
        maid: "MAID_RPG.Actor.Maid",
        butler: "MAID_RPG.Actor.Butler",
        master: "MAID_RPG.Actor.Master",
        npc: "MAID_RPG.Actor.Npc"
    },
    maidTypes: {
        lolita: "MAID_RPG.Maid.MaidType.Option1",
        sexy: "MAID_RPG.Maid.MaidType.Option2",
        pure: "MAID_RPG.Maid.MaidType.Option3",
        cool: "MAID_RPG.Maid.MaidType.Option4",
        boyish: "MAID_RPG.Maid.MaidType.Option5",
        heroine: "MAID_RPG.Maid.MaidType.Option6"
    },

    npcKinds: {
        ordinary: "MAID_RPG.Npc.KindOrdinary",
        veteran: "MAID_RPG.Npc.KindVeteran",
        enemy: "MAID_RPG.Npc.KindEnemy",
        boss: "MAID_RPG.Npc.KindBoss",
        superBoss: "MAID_RPG.Npc.KindSuperBoss",
        god: "MAID_RPG.Npc.KindGod"
    },
    maidTypeAttributeMods: {
        lolita: {luck: 1, athletics: -1},
        sexy: {cunning: 1, will: -1},
        pure: {affection: 1, cunning: -1},
        cool: {skill: 1, affection: -1},
        boyish: {athletics: 1, skill: -1},
        heroine: {will: 1, luck: -1}
    },

    masterTypes: {
        smallChild: "MAID_RPG.Master.MasterType.Option1",
        legitimateChild: "MAID_RPG.Master.MasterType.Option2",
        layman: "MAID_RPG.Master.MasterType.Option3",
        naturalBorn: "MAID_RPG.Master.MasterType.Option4",
        aristocrat: "MAID_RPG.Master.MasterType.Option5",
        recluse: "MAID_RPG.Master.MasterType.Option6"
    },
    butlerTypes: {
        shadow: "MAID_RPG.Butler.ButlerType.Option1",
        elite: "MAID_RPG.Butler.ButlerType.Option2",
        monster: "MAID_RPG.Butler.ButlerType.Option3",
        partner: "MAID_RPG.Butler.ButlerType.Option4",
        gothic: "MAID_RPG.Butler.ButlerType.Option5",
        veteran: "MAID_RPG.Butler.ButlerType.Option6"
    },
    butlerTypeAttributeMods: {
        shadow: {athletics: 1},
        elite: {cunning: 1},
        monster: {athletics: 1},
        partner: {affection: 1},
        gothic: {skill: 1},
        veteran: {any: 1}
    },
    specialQualities: {
        "11": "MAID_RPG.Maid.SpecialQuality.Option11",
        "12": "MAID_RPG.Maid.SpecialQuality.Option12",
        "13": "MAID_RPG.Maid.SpecialQuality.Option13",
        "14": "MAID_RPG.Maid.SpecialQuality.Option14",
        "15": "MAID_RPG.Maid.SpecialQuality.Option15",
        "16": "MAID_RPG.Maid.SpecialQuality.Option16",
        "21": "MAID_RPG.Maid.SpecialQuality.Option21",
        "22": "MAID_RPG.Maid.SpecialQuality.Option22",
        "23": "MAID_RPG.Maid.SpecialQuality.Option23",
        "24": "MAID_RPG.Maid.SpecialQuality.Option24",
        "25": "MAID_RPG.Maid.SpecialQuality.Option25",
        "26": "MAID_RPG.Maid.SpecialQuality.Option26",
        "31": "MAID_RPG.Maid.SpecialQuality.Option31",
        "32": "MAID_RPG.Maid.SpecialQuality.Option32",
        "33": "MAID_RPG.Maid.SpecialQuality.Option33",
        "34": "MAID_RPG.Maid.SpecialQuality.Option34",
        "35": "MAID_RPG.Maid.SpecialQuality.Option35",
        "36": "MAID_RPG.Maid.SpecialQuality.Option36",
        "41": "MAID_RPG.Maid.SpecialQuality.Option41",
        "42": "MAID_RPG.Maid.SpecialQuality.Option42",
        "43": "MAID_RPG.Maid.SpecialQuality.Option43",
        "44": "MAID_RPG.Maid.SpecialQuality.Option44",
        "45": "MAID_RPG.Maid.SpecialQuality.Option45",
        "46": "MAID_RPG.Maid.SpecialQuality.Option46",
        "51": "MAID_RPG.Maid.SpecialQuality.Option51",
        "52": "MAID_RPG.Maid.SpecialQuality.Option52",
        "53": "MAID_RPG.Maid.SpecialQuality.Option53",
        "54": "MAID_RPG.Maid.SpecialQuality.Option54",
        "55": "MAID_RPG.Maid.SpecialQuality.Option55",
        "56": "MAID_RPG.Maid.SpecialQuality.Option56",
        "61": "MAID_RPG.Maid.SpecialQuality.Option61",
        "62": "MAID_RPG.Maid.SpecialQuality.Option62",
        "63": "MAID_RPG.Maid.SpecialQuality.Option63",
        "64": "MAID_RPG.Maid.SpecialQuality.Option64",
        "65": "MAID_RPG.Maid.SpecialQuality.Option65",
        "66": "MAID_RPG.Maid.SpecialQuality.Option66"
    },
    butlerSpecialQualities: {
        "11": "MAID_RPG.Butler.SpecialQuality.Option11",
        "12": "MAID_RPG.Butler.SpecialQuality.Option12",
        "13": "MAID_RPG.Butler.SpecialQuality.Option13",
        "14": "MAID_RPG.Butler.SpecialQuality.Option14",
        "15": "MAID_RPG.Butler.SpecialQuality.Option15",
        "16": "MAID_RPG.Butler.SpecialQuality.Option16",
        "21": "MAID_RPG.Butler.SpecialQuality.Option21",
        "22": "MAID_RPG.Butler.SpecialQuality.Option22",
        "23": "MAID_RPG.Butler.SpecialQuality.Option23",
        "24": "MAID_RPG.Butler.SpecialQuality.Option24",
        "25": "MAID_RPG.Butler.SpecialQuality.Option25",
        "26": "MAID_RPG.Butler.SpecialQuality.Option26",
        "31": "MAID_RPG.Butler.SpecialQuality.Option31",
        "32": "MAID_RPG.Butler.SpecialQuality.Option32",
        "33": "MAID_RPG.Butler.SpecialQuality.Option33",
        "34": "MAID_RPG.Butler.SpecialQuality.Option34",
        "35": "MAID_RPG.Butler.SpecialQuality.Option35",
        "36": "MAID_RPG.Butler.SpecialQuality.Option36",
        "41": "MAID_RPG.Butler.SpecialQuality.Option41",
        "42": "MAID_RPG.Butler.SpecialQuality.Option42",
        "43": "MAID_RPG.Butler.SpecialQuality.Option43",
        "44": "MAID_RPG.Butler.SpecialQuality.Option44",
        "45": "MAID_RPG.Butler.SpecialQuality.Option45",
        "46": "MAID_RPG.Butler.SpecialQuality.Option46",
        "51": "MAID_RPG.Butler.SpecialQuality.Option51",
        "52": "MAID_RPG.Butler.SpecialQuality.Option52",
        "53": "MAID_RPG.Butler.SpecialQuality.Option53",
        "54": "MAID_RPG.Butler.SpecialQuality.Option54",
        "55": "MAID_RPG.Butler.SpecialQuality.Option55",
        "56": "MAID_RPG.Butler.SpecialQuality.Option56",
        "61": "MAID_RPG.Butler.SpecialQuality.Option61",
        "62": "MAID_RPG.Butler.SpecialQuality.Option62",
        "63": "MAID_RPG.Butler.SpecialQuality.Option63",
        "64": "MAID_RPG.Butler.SpecialQuality.Option64",
        "65": "MAID_RPG.Butler.SpecialQuality.Option65",
        "66": "MAID_RPG.Butler.SpecialQuality.Option66"
    },

    masterSpecialQualities: {
        "11": "MAID_RPG.Master.SpecialQuality.Option11",
        "12": "MAID_RPG.Master.SpecialQuality.Option12",
        "13": "MAID_RPG.Master.SpecialQuality.Option13",
        "14": "MAID_RPG.Master.SpecialQuality.Option14",
        "15": "MAID_RPG.Master.SpecialQuality.Option15",
        "16": "MAID_RPG.Master.SpecialQuality.Option16",
        "21": "MAID_RPG.Master.SpecialQuality.Option21",
        "22": "MAID_RPG.Master.SpecialQuality.Option22",
        "23": "MAID_RPG.Master.SpecialQuality.Option23",
        "24": "MAID_RPG.Master.SpecialQuality.Option24",
        "25": "MAID_RPG.Master.SpecialQuality.Option25",
        "26": "MAID_RPG.Master.SpecialQuality.Option26",
        "31": "MAID_RPG.Master.SpecialQuality.Option31",
        "32": "MAID_RPG.Master.SpecialQuality.Option32",
        "33": "MAID_RPG.Master.SpecialQuality.Option33",
        "34": "MAID_RPG.Master.SpecialQuality.Option34",
        "35": "MAID_RPG.Master.SpecialQuality.Option35",
        "36": "MAID_RPG.Master.SpecialQuality.Option36",
        "41": "MAID_RPG.Master.SpecialQuality.Option41",
        "42": "MAID_RPG.Master.SpecialQuality.Option42",
        "43": "MAID_RPG.Master.SpecialQuality.Option43",
        "44": "MAID_RPG.Master.SpecialQuality.Option44",
        "45": "MAID_RPG.Master.SpecialQuality.Option45",
        "46": "MAID_RPG.Master.SpecialQuality.Option46",
        "51": "MAID_RPG.Master.SpecialQuality.Option51",
        "52": "MAID_RPG.Master.SpecialQuality.Option52",
        "53": "MAID_RPG.Master.SpecialQuality.Option53",
        "54": "MAID_RPG.Master.SpecialQuality.Option54",
        "55": "MAID_RPG.Master.SpecialQuality.Option55",
        "56": "MAID_RPG.Master.SpecialQuality.Option56",
        "61": "MAID_RPG.Master.SpecialQuality.Option61",
        "62": "MAID_RPG.Master.SpecialQuality.Option62",
        "63": "MAID_RPG.Master.SpecialQuality.Option63",
        "64": "MAID_RPG.Master.SpecialQuality.Option64",
        "65": "MAID_RPG.Master.SpecialQuality.Option65",
        "66": "MAID_RPG.Master.SpecialQuality.Option66"
    },
    masterPowerSources: {
        none: "MAID_RPG.Master.PowerSource.Option2",
        fear: "MAID_RPG.Master.PowerSource.Option3",
        magicalPower: "MAID_RPG.Master.PowerSource.Option4",
        bloodTies: "MAID_RPG.Master.PowerSource.Option5",
        militaryMight: "MAID_RPG.Master.PowerSource.Option6",
        assets: "MAID_RPG.Master.PowerSource.Option7",
        politicalPower: "MAID_RPG.Master.PowerSource.Option8",
        mansion: "MAID_RPG.Master.PowerSource.Option9",
        talent: "MAID_RPG.Master.PowerSource.Option10",
        renown: "MAID_RPG.Master.PowerSource.Option11",
        popularity: "MAID_RPG.Master.PowerSource.Option12"
    },
    butlerRoots: {
        hatred: "MAID_RPG.Butler.Root.Option1",
        ambition: "MAID_RPG.Butler.Root.Option2",
        contract: "MAID_RPG.Butler.Root.Option3",
        affection: "MAID_RPG.Butler.Root.Option4",
        loyalty: "MAID_RPG.Butler.Root.Option5",
        family: "MAID_RPG.Butler.Root.Option6"
    },
    maidRoots: {
        "11-12": "MAID_RPG.Maid.Root.Option11-12",
        "13-14": "MAID_RPG.Maid.Root.Option13-14",
        "15-16": "MAID_RPG.Maid.Root.Option15-16",
        "21-22": "MAID_RPG.Maid.Root.Option21-22",
        "23-24": "MAID_RPG.Maid.Root.Option23-24",
        "25-26": "MAID_RPG.Maid.Root.Option25-26",
        "31-32": "MAID_RPG.Maid.Root.Option31-32",
        "33-34": "MAID_RPG.Maid.Root.Option33-34",
        "35-36": "MAID_RPG.Maid.Root.Option35-36",
        "41-42": "MAID_RPG.Maid.Root.Option41-42",
        "43-44": "MAID_RPG.Maid.Root.Option43-44",
        "45-46": "MAID_RPG.Maid.Root.Option45-46",
        "51-52": "MAID_RPG.Maid.Root.Option51-52",
        "53-54": "MAID_RPG.Maid.Root.Option53-54",
        "55-56": "MAID_RPG.Maid.Root.Option55-56",
        "61-62": "MAID_RPG.Maid.Root.Option61-62",
        "63-64": "MAID_RPG.Maid.Root.Option63-64",
        "65-66": "MAID_RPG.Maid.Root.Option65-66",
    },
    stressExplosions: {
        "11-12": "MAID_RPG.Maid.StressExplosion.Option11-12",
        "13-14": "MAID_RPG.Maid.StressExplosion.Option13-14",
        "15-16": "MAID_RPG.Maid.StressExplosion.Option15-16",
        "21-22": "MAID_RPG.Maid.StressExplosion.Option21-22",
        "23-24": "MAID_RPG.Maid.StressExplosion.Option23-24",
        "25-26": "MAID_RPG.Maid.StressExplosion.Option25-26",
        "31-32": "MAID_RPG.Maid.StressExplosion.Option31-32",
        "33-34": "MAID_RPG.Maid.StressExplosion.Option33-34",
        "35-36": "MAID_RPG.Maid.StressExplosion.Option35-36",
        "41-42": "MAID_RPG.Maid.StressExplosion.Option41-42",
        "43-44": "MAID_RPG.Maid.StressExplosion.Option43-44",
        "45-46": "MAID_RPG.Maid.StressExplosion.Option45-46",
        "51-52": "MAID_RPG.Maid.StressExplosion.Option51-52",
        "53-54": "MAID_RPG.Maid.StressExplosion.Option53-54",
        "55-56": "MAID_RPG.Maid.StressExplosion.Option55-56",
        "61-62": "MAID_RPG.Maid.StressExplosion.Option61-62",
        "63-64": "MAID_RPG.Maid.StressExplosion.Option63-64",
        "65-66": "MAID_RPG.Maid.StressExplosion.Option65-66",
    },
    maidPowers: [
        {
            label: "MAID_RPG.Maid.MaidPower.HighestAttribute.Athletics",
            options: {
                "athletics-1": "MAID_RPG.Maid.MaidPower.Athletics.Option1",
                "athletics-2": "MAID_RPG.Maid.MaidPower.Athletics.Option2",
                "athletics-3": "MAID_RPG.Maid.MaidPower.Athletics.Option3",
                "athletics-4": "MAID_RPG.Maid.MaidPower.Athletics.Option4",
                "athletics-5": "MAID_RPG.Maid.MaidPower.Athletics.Option5",
                "athletics-6": "MAID_RPG.Maid.MaidPower.Athletics.Option6"
            }
        },
        {
            label: "MAID_RPG.Maid.MaidPower.HighestAttribute.Affection",
            options: {
                "affection-1": "MAID_RPG.Maid.MaidPower.Affection.Option1",
                "affection-2": "MAID_RPG.Maid.MaidPower.Affection.Option2",
                "affection-3": "MAID_RPG.Maid.MaidPower.Affection.Option3",
                "affection-4": "MAID_RPG.Maid.MaidPower.Affection.Option4",
                "affection-5": "MAID_RPG.Maid.MaidPower.Affection.Option5",
                "affection-6": "MAID_RPG.Maid.MaidPower.Affection.Option6"
            }
        },
        {
            label: "MAID_RPG.Maid.MaidPower.HighestAttribute.Skill",
            options: {
                "skill-1": "MAID_RPG.Maid.MaidPower.Skill.Option1",
                "skill-2": "MAID_RPG.Maid.MaidPower.Skill.Option2",
                "skill-3": "MAID_RPG.Maid.MaidPower.Skill.Option3",
                "skill-4": "MAID_RPG.Maid.MaidPower.Skill.Option4",
                "skill-5": "MAID_RPG.Maid.MaidPower.Skill.Option5",
                "skill-6": "MAID_RPG.Maid.MaidPower.Skill.Option6"
            }
        },
        {
            label: "MAID_RPG.Maid.MaidPower.HighestAttribute.Cunning",
            options: {
                "cunning-1": "MAID_RPG.Maid.MaidPower.Cunning.Option1",
                "cunning-2": "MAID_RPG.Maid.MaidPower.Cunning.Option2",
                "cunning-3": "MAID_RPG.Maid.MaidPower.Cunning.Option3",
                "cunning-4": "MAID_RPG.Maid.MaidPower.Cunning.Option4",
                "cunning-5": "MAID_RPG.Maid.MaidPower.Cunning.Option5",
                "cunning-6": "MAID_RPG.Maid.MaidPower.Cunning.Option6"
            }
        },
        {
            label: "MAID_RPG.Maid.MaidPower.HighestAttribute.Luck",
            options: {
                "luck-1": "MAID_RPG.Maid.MaidPower.Luck.Option1",
                "luck-2": "MAID_RPG.Maid.MaidPower.Luck.Option2",
                "luck-3": "MAID_RPG.Maid.MaidPower.Luck.Option3",
                "luck-4": "MAID_RPG.Maid.MaidPower.Luck.Option4",
                "luck-5": "MAID_RPG.Maid.MaidPower.Luck.Option5",
                "luck-6": "MAID_RPG.Maid.MaidPower.Luck.Option6"
            }
        },
        {
            label: "MAID_RPG.Maid.MaidPower.HighestAttribute.Will",
            options: {
                "will-1": "MAID_RPG.Maid.MaidPower.Will.Option1",
                "will-2": "MAID_RPG.Maid.MaidPower.Will.Option2",
                "will-3": "MAID_RPG.Maid.MaidPower.Will.Option3",
                "will-4": "MAID_RPG.Maid.MaidPower.Will.Option4",
                "will-5": "MAID_RPG.Maid.MaidPower.Will.Option5",
                "will-6": "MAID_RPG.Maid.MaidPower.Will.Option6"
            }
        }
    ],
    butlerPowers: [
        {
            label: "MAID_RPG.Butler.ButlerPower.Type.Shadow",
            options: {
                "shadow-1": "MAID_RPG.Butler.ButlerPower.Shadow.Option1",
                "shadow-2": "MAID_RPG.Butler.ButlerPower.Shadow.Option2",
                "shadow-3": "MAID_RPG.Butler.ButlerPower.Shadow.Option3",
                "shadow-4": "MAID_RPG.Butler.ButlerPower.Shadow.Option4",
                "shadow-5": "MAID_RPG.Butler.ButlerPower.Shadow.Option5",
                "shadow-6": "MAID_RPG.Butler.ButlerPower.Shadow.Option6"
            }
        },
        {
            label: "MAID_RPG.Butler.ButlerPower.Type.Elite",
            options: {
                "elite-1": "MAID_RPG.Butler.ButlerPower.Elite.Option1",
                "elite-2": "MAID_RPG.Butler.ButlerPower.Elite.Option2",
                "elite-3": "MAID_RPG.Butler.ButlerPower.Elite.Option3",
                "elite-4": "MAID_RPG.Butler.ButlerPower.Elite.Option4",
                "elite-5": "MAID_RPG.Butler.ButlerPower.Elite.Option5",
                "elite-6": "MAID_RPG.Butler.ButlerPower.Elite.Option6"
            }
        },
        {
            label: "MAID_RPG.Butler.ButlerPower.Type.Monster",
            options: {
                "monster-1": "MAID_RPG.Butler.ButlerPower.Monster.Option1",
                "monster-2": "MAID_RPG.Butler.ButlerPower.Monster.Option2",
                "monster-3": "MAID_RPG.Butler.ButlerPower.Monster.Option3",
                "monster-4": "MAID_RPG.Butler.ButlerPower.Monster.Option4",
                "monster-5": "MAID_RPG.Butler.ButlerPower.Monster.Option5",
                "monster-6": "MAID_RPG.Butler.ButlerPower.Monster.Option6"
            }
        },
        {
            label: "MAID_RPG.Butler.ButlerPower.Type.Partner",
            options: {
                "partner-1": "MAID_RPG.Butler.ButlerPower.Partner.Option1",
                "partner-2": "MAID_RPG.Butler.ButlerPower.Partner.Option2",
                "partner-3": "MAID_RPG.Butler.ButlerPower.Partner.Option3",
                "partner-4": "MAID_RPG.Butler.ButlerPower.Partner.Option4",
                "partner-5": "MAID_RPG.Butler.ButlerPower.Partner.Option5",
                "partner-6": "MAID_RPG.Butler.ButlerPower.Partner.Option6"
            }
        },
        {
            label: "MAID_RPG.Butler.ButlerPower.Type.Gothic",
            options: {
                "gothic-1": "MAID_RPG.Butler.ButlerPower.Gothic.Option1",
                "gothic-2": "MAID_RPG.Butler.ButlerPower.Gothic.Option2",
                "gothic-3": "MAID_RPG.Butler.ButlerPower.Gothic.Option3",
                "gothic-4": "MAID_RPG.Butler.ButlerPower.Gothic.Option4",
                "gothic-5": "MAID_RPG.Butler.ButlerPower.Gothic.Option5",
                "gothic-6": "MAID_RPG.Butler.ButlerPower.Gothic.Option6"
            }
        },
        {
            label: "MAID_RPG.Butler.ButlerPower.Type.Veteran",
            options: {
                "veteran-1": "MAID_RPG.Butler.ButlerPower.Veteran.Option1",
                "veteran-2": "MAID_RPG.Butler.ButlerPower.Veteran.Option2",
                "veteran-3": "MAID_RPG.Butler.ButlerPower.Veteran.Option3",
                "veteran-4": "MAID_RPG.Butler.ButlerPower.Veteran.Option4",
                "veteran-5": "MAID_RPG.Butler.ButlerPower.Veteran.Option5",
                "veteran-6": "MAID_RPG.Butler.ButlerPower.Veteran.Option6"
            }
        }
    ],
    itemTypes: {
        uniform: "MAID_RPG.Item.Uniform",
        item: "MAID_RPG.Item.Item"
    }
};
