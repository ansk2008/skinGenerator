const pointSystem = {
  age: {
    youngAge: {
      oilCleanser: 0,
      foamCleanser: 1,
      gelCleanser: 0,
      exfoliator: 0,
      aha: 0,
      bha: 0,
      niacinamide: 0,
      retinoid: 0,
      vitaminC: 0,
      hyaluronic: 0,
      toner: 0,
      essence: 0,
      ampoule: 0,
      eyeCream: 1,
      sheetMask: 0,
      moisturizer: 1,
      spfLight: 1,
      spfHeavy: 0,
      nightMask: 0
    },

    middleAge: {
      oilCleanser: 0,
      foamCleanser: 1,
      gelCleanser: 0,
      exfoliator: 0,
      aha: 0,
      bha: 0,
      niacinamide: 0,
      retinoid: 1,
      vitaminC: 1,
      hyaluronic: 0,
      toner: 0,
      essence: 0,
      ampoule: 0,
      eyeCream: 1,
      sheetMask: 1,
      moisturizer: 1,
      spfLight: 0,
      spfHeavy: 1,
      nightMask: 0
    },

    oldAge: {
      oilCleanser: 0,
      foamCleanser: 1,
      gelCleanser: 0,
      exfoliator: 0,
      aha: 1,
      bha: 0,
      niacinamide: 1,
      retinoid: 2,
      vitaminC: 1,
      hyaluronic: 0,
      toner: 1,
      essence: 1,
      ampoule: 1,
      eyeCream: 1,
      sheetMask: 1,
      moisturizer: 1,
      spfLight: 0,
      spfHeavy: 1,
      nightMask: 0
    }
  },

  skinType: {
    dry: {
      oilCleanser: 0,
      foamCleanser: -1,
      gelCleanser: 1,
      exfoliator: -1,
      aha: 2,
      bha: 0,
      niacinamide: 0,
      retinoid: 0,
      vitaminC: 0,
      hyaluronic: 2,
      toner: 1,
      essence: 1,
      ampoule: 1,
      eyeCream: 1,
      sheetMask: 0,
      moisturizer: 1,
      spfLight: 0,
      spfHeavy: 2,
      nightMask: 1
    },

    normal: {
      oilCleanser: 0,
      foamCleanser: 0,
      gelCleanser: 0,
      exfoliator: 0,
      aha: 0,
      bha: 0,
      niacinamide: 0,
      retinoid: 0,
      vitaminC: 0,
      hyaluronic: 0,
      toner: 0,
      essence: 0,
      ampoule: 0,
      eyeCream: 0,
      sheetMask: 0,
      moisturizer: 0,
      spfLight: 1,
      spfHeavy: 0,
      nightMask: 0
    },

    oily: {
      oilCleanser: 2,
      foamCleanser: 1,
      gelCleanser: 0,
      exfoliator: 1,
      aha: 0,
      bha: 1,
      niacinamide: 0,
      retinoid: 0,
      vitaminC: 0,
      hyaluronic: 0,
      toner: 0,
      essence: 0,
      ampoule: 0,
      eyeCream: 0,
      sheetMask: 0,
      moisturizer: 0,
      spfLight: 1,
      spfHeavy: 0,
      nightMask: 0
    },

    combo: {
      oilCleanser: 1,
      foamCleanser: -1,
      gelCleanser: 1,
      exfoliator: 0,
      aha: 0,
      bha: 1,
      niacinamide: 0,
      retinoid: 0,
      vitaminC: 0,
      hyaluronic: 0,
      toner: 0,
      essence: 0,
      ampoule: 0,
      eyeCream: 0,
      sheetMask: 0,
      moisturizer: 0,
      spfLight: 1,
      spfHeavy: 0,
      nightMask: 0
    }
  },
  sensitivity: {
    lowSen: {
      oilCleanser: 0,
      foamCleanser: 0,
      gelCleanser: 0,
      exfoliator: 0,
      aha: 0,
      bha: 0,
      niacinamide: 0,
      retinoid: 0,
      vitaminC: 0,
      hyaluronic: 0,
      toner: 0,
      essence: 0,
      ampoule: 0,
      eyeCream: 0,
      sheetMask: 0,
      moisturizer: 0,
      spfLight: 0,
      spfHeavy: 0,
      nightMask: 0
    },

    medSen: {
      oilCleanser: 0,
      foamCleanser: 0,
      gelCleanser: 1,
      exfoliator: -2,
      aha: 0,
      bha: -1,
      niacinamide: 0,
      retinoid: -1,
      vitaminC: -2,
      hyaluronic: 0,
      toner: 0,
      essence: 1,
      ampoule: 0,
      eyeCream: 0,
      sheetMask: 0,
      moisturizer: 0,
      spfLight: 0,
      spfHeavy: 0,
      nightMask: 0
    },

    highSen: {
      oilCleanser: 0,
      foamCleanser: -1,
      gelCleanser: 2,
      exfoliator: -3,
      aha: -1,
      bha: -2,
      niacinamide: 1,
      retinoid: -2,
      vitaminC: -3,
      hyaluronic: 0,
      toner: 0,
      essence: 1,
      ampoule: 0,
      eyeCream: 0,
      sheetMask: 0,
      moisturizer: 0,
      spfLight: 0,
      spfHeavy: 0,
      nightMask: 0
    }
  }
};

const tools = {};

$(document).ready(function() {
  $("form").on("submit", function(event) {
    // event.preventDefault prevents form submit button from refreshing page automatically
    event.preventDefault();

    // clears routine, if a previous one existed

    $(".resultHeader").html("");
    $(".resultList").html("");

    // Save the users age range and skin type choices as variables
    const userAge = $('input[name="age"]:checked').val();
    const userSkinType = $('input[name="skinType"]:checked').val();
    const userSensitivity = $('input[name="sensitivity"]:checked').val();

    console.log(userSensitivity);

    // Create an array of final scores (for each category), and then tally scores based on answers

    // STANDALONE (COMPLETED)

    standaloneScore = [
      {
        category: "Oil Cleanser",
        score:
          pointSystem.age[userAge].oilCleanser +
          pointSystem.skinType[userSkinType].oilCleanser +
          pointSystem.sensitivity[userSensitivity].oilCleanser,
        order: 1
      },
      {
        category: "Physical Exfoliator",
        score:
          pointSystem.age[userAge].exfoliator +
          pointSystem.skinType[userSkinType].exfoliator +
          pointSystem.sensitivity[userSensitivity].exfoliator,
        order: 3
      },
      {
        category: "Toner",
        score:
          pointSystem.age[userAge].toner +
          pointSystem.skinType[userSkinType].toner +
          pointSystem.sensitivity[userSensitivity].toner,
        order: 4
      },
      {
        category: "Essence",
        score:
          pointSystem.age[userAge].essence +
          pointSystem.skinType[userSkinType].essence +
          pointSystem.sensitivity[userSensitivity].essence,
        order: 11
      },
      {
        category: "Moisturizing Serum",
        score:
          pointSystem.age[userAge].ampoule +
          pointSystem.skinType[userSkinType].ampoule +
          pointSystem.sensitivity[userSensitivity].ampoule,
        order: 12
      },
      {
        category: "Eye Cream",
        score:
          pointSystem.age[userAge].eyeCream +
          pointSystem.skinType[userSkinType].eyeCream +
          pointSystem.sensitivity[userSensitivity].eyeCream,
        order: 13
      },
      {
        category: "Sheet Mask",
        score:
          pointSystem.age[userAge].sheetMask +
          pointSystem.skinType[userSkinType].sheetMask +
          pointSystem.sensitivity[userSensitivity].sheetMask,
        order: 16
      },
      {
        category: "Moisturizer",
        score:
          pointSystem.age[userAge].moisturizer +
          pointSystem.skinType[userSkinType].moisturizer +
          pointSystem.sensitivity[userSensitivity].moisturizer,
        order: 14
      },
      {
        category: "Night Mask",
        score:
          pointSystem.age[userAge].nightMask +
          pointSystem.skinType[userSkinType].nightMask +
          pointSystem.sensitivity[userSensitivity].nightMask,
        order: 16
      }
    ];

    // Create a new array for standalone with only values more than 0

    const standaloneFinal = standaloneScore.filter(function(a) {
      return a.score > 0;
    });

    // CLEANSERS (COMPLETE)

    cleanserScore = [
      {
        category: "Foam Cleanser",
        score:
          pointSystem.age[userAge].foamCleanser +
          pointSystem.skinType[userSkinType].foamCleanser +
          pointSystem.sensitivity[userSensitivity].foamCleanser,
        order: 2
      },
      {
        category: "Gel Cleanser",
        score:
          pointSystem.age[userAge].gelCleanser +
          pointSystem.skinType[userSkinType].gelCleanser +
          pointSystem.sensitivity[userSensitivity].gelCleanser,
        order: 2
      }
    ];

    // Create a new array for the cleanser with the larger score

    const sortedCleanser = cleanserScore.sort(function(a, b) {
      return b.score - a.score;
    });

    const cleanserFinal = sortedCleanser.shift();

    // console.log(cleanserFinal);

    // ACTIVES (COMPLETED)

    activesScore = [
      {
        category: "AHA",
        score:
          pointSystem.age[userAge].aha +
          pointSystem.skinType[userSkinType].aha +
          pointSystem.sensitivity[userSensitivity].aha,
        order: 5
      },
      {
        category: "BHA",
        score:
          pointSystem.age[userAge].bha +
          pointSystem.skinType[userSkinType].bha +
          pointSystem.sensitivity[userSensitivity].bha,
        order: 6
      },
      {
        category: "Niacinamide",
        score:
          pointSystem.age[userAge].niacinamide +
          pointSystem.skinType[userSkinType].niacinamide +
          pointSystem.sensitivity[userSensitivity].niacinamide,
        order: 7
      },
      {
        category: "Retinoid",
        score:
          pointSystem.age[userAge].retinoid +
          pointSystem.skinType[userSkinType].retinoid +
          pointSystem.sensitivity[userSensitivity].retinoid,
        order: 8
      },
      {
        category: "Vitamin C",
        score:
          pointSystem.age[userAge].vitaminC +
          pointSystem.skinType[userSkinType].vitaminC +
          pointSystem.sensitivity[userSensitivity].vitaminC,
        order: 9
      },
      {
        category: "Hyaluronic Acid",
        score:
          pointSystem.age[userAge].hyaluronic +
          pointSystem.skinType[userSkinType].hyaluronic +
          pointSystem.sensitivity[userSensitivity].hyaluronic,
        order: 10
      }
    ];

    const activesAboveZero = activesScore.filter(function(a) {
      return a.score > 0;
    });

    // console.log(activesAboveZero);

    const sortedActives = activesAboveZero.sort(function(a, b) {
      return b.score - a.score;
    });

    // console.log(sortedActives);

    let activesFinal = [];

    if (sortedActives.length > 2) {
      for (i = 0; i < 2; i++) {
        activesFinal[i] = sortedActives.shift();
      }
    } else {
      activesFinal = sortedActives;
    }

    // console.log(activesFinal);

    // SPF (COMPLETED)

    spfScore = [
      {
        category: "SPF",
        score:
          pointSystem.age[userAge].spfLight +
          pointSystem.skinType[userSkinType].spfLight +
          pointSystem.sensitivity[userSensitivity].spfLight,
        order: 15
      },
      {
        category: "SPF",
        score:
          pointSystem.age[userAge].spfHeavy +
          pointSystem.skinType[userSkinType].spfHeavy +
          pointSystem.sensitivity[userSensitivity].spfHeavy,
        order: 15
      }
    ];

    // Pick the spf with the higher score

    const sortedSpf = spfScore.sort(function(a, b) {
      return b.score - a.score;
    });

    // console.log(sortedSpf);

    const spfFinal = sortedSpf.shift();

    // console.log(spfFinal);

    // MERGE ALL THE ARRAYS AND TO THEIR SCORE SO WE CAN SORT IN ORDER OF USE

    fullRoutine = standaloneFinal.concat(cleanserFinal, activesFinal, spfFinal);

    // console.log(fullRoutine);

    // sort by order of use

    const fullRoutineSorted = fullRoutine.sort(function(a, b) {
      return a.order - b.order;
    });

    console.log(fullRoutineSorted);

    // TURN ROUTINE INTO HTML & PRINT ON THE SITE

    $(".resultList").append(`<h2>Your Routine</h2>`);

    for (i = 0; i < fullRoutineSorted.length; i++) {
      $(".resultList").append(`<h3>${fullRoutineSorted[i].category}</h3>`);
    }

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#resultSection").offset().top
      },
      300
    );
  });
});
