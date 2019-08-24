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
      oilCleanser: 1, //
      foamCleanser: -1, //
      gelCleanser: 2, //
      exfoliator: -3, //
      aha: -1, //
      bha: -2, //
      niacinamide: 1, //
      retinoid: -2, //
      vitaminC: -3, //
      hyaluronic: 0, //
      toner: 0, //
      essence: 1, //
      ampoule: 0, //
      eyeCream: 0, //
      sheetMask: 0, //
      moisturizer: 0, //
      spfLight: 0, //
      spfHeavy: 0, //
      nightMask: 0 //
    }
  }
};

let standaloneScore = [
  {
    category: "oilCleanser",
    displayName: "Oil Cleanser",
    order: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "exfoliator",
    displayName: "Physical Exfoliator",
    order: 3,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "toner",
    displayName: "Toner",
    order: 4,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "essence",
    displayName: "Essence",
    order: 11,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "ampoule",
    displayName: "Moisturizing Serum",
    order: 12,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "eyeCream",
    displayName: "Eye Cream",
    order: 13,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "sheetMask",
    displayName: "Sheet Mask",
    order: 16,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "moisturizer",
    displayName: "Moisturizer",
    order: 14,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "nightMask",
    displayName: "Night Mask",
    order: 16,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  }
];

let activesScore = [
  {
    category: "aha",
    displayName: "AHA",
    order: 5,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "bha",
    displayName: "BHA",
    order: 6,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "niacinamide",
    displayName: "Niacinamide",
    order: 7,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "retinoid",
    displayName: "Retinoid",
    order: 8,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "vitaminC",
    displayName: "Vitamin C",
    order: 9,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "hyaluronic",
    displayName: "Hyaluronic Acid",
    order: 10,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  }
];

let cleanserScore = [
  {
    category: "foamCleanser",
    displayName: "Foaming Cleanser",
    order: 2,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "gelCleanser",
    displayName: "Gel Cleanser",
    order: 2,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  }
];

spfScore = [
  {
    category: "spfLight",
    displayName: "SPF",
    order: 15,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  },
  {
    category: "spfHeavy",
    displayName: "SPF",
    order: 15,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis deserunt ad doloribus porro, molestiae exercitationem!"
  }
];

skinApp = {};

// button must be ".button"
// section must be "#section"
skinApp.scrollTool = (button, section) => {
  $(button).on("click", function() {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(section).offset().top
      },
      300
    );
  });
};

// put score array in to calculate the scores based on the user answers
skinApp.scoreCalculator = (
  ageAnswer,
  skinTypeAnswer,
  sensitivityAnswer,
  scoreArray
) => {
  for (i = 0; i < scoreArray.length; i++) {
    let categoryName = scoreArray[i].category;

    scoreArray[i].score =
      pointSystem.age[ageAnswer][categoryName] +
      pointSystem.skinType[skinTypeAnswer][categoryName] +
      pointSystem.sensitivity[sensitivityAnswer][categoryName];
  }
};

// put final results array in to add html to results section
skinApp.resultIterator = finalResultArray => {
  for (i = 0; i < finalResultArray.length; i++) {

    if (i < 9) {
      $(".resultList").append(
        `<li><h4>0${i + 1}.</h5><div class="resultTextRight"><h5>${
          finalResultArray[i].displayName
        }</h5><p>${finalResultArray[i].description}</p></div></li>`
      );
    } else {
      $(".resultList").append(
        `<li><h4>${i + 1}.</h5><div class="resultTextRight"><h5>${
          finalResultArray[i].displayName
        }</h5><p>${finalResultArray[i].description}</p></div></li>`
      );
    }
  }
};

$(document).ready(function() {
  //smooth scrolling
  skinApp.scrollTool(".labelSectionOne", "#formSectionTwo");
  skinApp.scrollTool(".labelSectionTwo", "#formSectionThree");
  skinApp.scrollTool(".labelSectionThree", "#formSectionFour");

  $("form").on("reset", function(event) {
    //remove html from results section
    $(".resultHeader").html("");
    $(".resultList").html("");
    $(".buttonBox").html("");

    //reset all arrays
    // const standaloneFinal = [];
    // const cleanserFinal = [];
    // const activesFinal = [];
    // const spfFinal = [];
    // const fullRoutine = [];
    // const fullRoutineSorted = [];

    //push to the top
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#formSectionOne").offset().top
      },
      300
    );
  });

  $("form").on("submit", function(event) {
    // event.preventDefault prevents form submit button from refreshing page automatically
    event.preventDefault();

    // clears routine, if a previous one existed
    $(".resultHeader").html("");
    $(".resultList").html("");
    $(".buttonBox").html("");

    //declare/reset all arrays
    // let standaloneFinal = [];
    // let cleanserFinal = [];
    // let sortedCleanser = [];
    // let activesAboveZero = [];
    // let sortedActives = [];
    // let activesFinal = [];
    // let sortedSpf = [];
    // let spfFinal = [];
    // let fullRoutine = [];
    // let fullRoutineSorted = [];

    // Save the users age range and skin type choices as variables
    const userAge = $('input[name="age"]:checked').val();
    const userSkinType = $('input[name="skinType"]:checked').val();
    const userSensitivity = $('input[name="sensitivity"]:checked').val();

    // Create an array of final scores (for each category), and then tally scores based on answers

    // STANDALONE (COMPLETED)

    skinApp.scoreCalculator(
      userAge,
      userSkinType,
      userSensitivity,
      standaloneScore
    );

    // Create a new array for standalone with only values more than 0

    const standaloneFinal = standaloneScore.filter(function(a) {
      return a.score > 0;
    });

    // CLEANSERS (COMPLETED)

    skinApp.scoreCalculator(
      userAge,
      userSkinType,
      userSensitivity,
      cleanserScore
    );

    // Create a new array for the cleanser with the larger score

    const sortedCleanser = cleanserScore.sort(function(a, b) {
      return b.score - a.score;
    });

    console.log(sortedCleanser);

    const cleanserFinal = sortedCleanser[0];

    // ACTIVES (COMPLETED)

    skinApp.scoreCalculator(
      userAge,
      userSkinType,
      userSensitivity,
      activesScore
    );

    // return all actives with a score greater than 0
    const activesAboveZero = activesScore.filter(function(a) {
      return a.score > 0;
    });

    // sort actives from highest to lower
    const sortedActives = activesAboveZero.sort(function(a, b) {
      return b.score - a.score;
    });

    console.log(sortedActives);

    let activesFinal = [];

    // only use the 2 actives with the highest scores
    if (sortedActives.length > 2) {
      for (i = 0; i < 2; i++) {
        activesFinal[i] = sortedActives[i];
      }
    } else {
      activesFinal = sortedActives;
    }

    console.log(activesFinal);

    // SPF (COMPLETE)

    skinApp.scoreCalculator(userAge, userSkinType, userSensitivity, spfScore);

    // Pick the spf with the higher score
    const sortedSpf = spfScore.sort(function(a, b) {
      return b.score - a.score;
    });

    const spfFinal = sortedSpf[0];

    // MERGE ALL THE ARRAYS AND TO THEIR SCORE SO WE CAN SORT IN ORDER OF USE

    const fullRoutine = standaloneFinal.concat(cleanserFinal, activesFinal, spfFinal);

    // Sort by order of use
    const fullRoutineSorted = fullRoutine.sort(function(a, b) {
      return a.order - b.order;
    });

    console.log(fullRoutineSorted);

    // TURN ROUTINE INTO HTML & PRINT ON THE SITE

    $(".resultHeader").html(`Your Routine`);

    skinApp.resultIterator(fullRoutineSorted);

    $(".resultSectionSub").append(
      `<div class="buttonBox"><label for="resetBox" class="visuallyHidden">Click here to reset your answers and start again.</label><input type="reset" value="Try Again?" id="resetBox" class="resetBox"/></div>`
    );

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#resultSection").offset().top
      },
      300
    );
  });
});
