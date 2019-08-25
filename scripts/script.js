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
      spf: 2,
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
      spf: 2,
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
      spf: 2,
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
      spf: 0,
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
      spf: 1,
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
      spf: 1,
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
      spf: 1,
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
      spf: 0,
      nightMask: 0
    },

    medSen: {
      oilCleanser: 0,
      foamCleanser: 0,
      gelCleanser: 1,
      exfoliator: -2,
      aha: -1,
      bha: -1,
      niacinamide: 0,
      retinoid: 0,
      vitaminC: -2,
      hyaluronic: 0,
      toner: 0,
      essence: 1,
      ampoule: 0,
      eyeCream: 0,
      sheetMask: 0,
      moisturizer: 0,
      spf: 0,
      nightMask: 0
    },

    highSen: {
      oilCleanser: 1, //
      foamCleanser: -1, //
      gelCleanser: 2, //
      exfoliator: -3, //
      aha: -2, //
      bha: -2, //
      niacinamide: 1, //
      retinoid: -1, //
      vitaminC: -3, //
      hyaluronic: 0, //
      toner: 0, //
      essence: 1, //
      ampoule: 0, //
      eyeCream: 0, //
      sheetMask: 0, //
      moisturizer: 0, //
      spf: 0, //
      nightMask: -1 //
    }
  }
};

let standaloneScore = [
  {
    category: "oilCleanser",
    displayName: "Oil Cleanser",
    order: 1,
    description:
      "The first step of the double cleanse process. An oil cleanser prevents breakouts and excess oil by removing oil-based impurities such as sebum, SPF, and pollutants.",
    productReco: "Beauty Of Joseon Radiance Cleansing Balm",
    link:
      "https://www.yesstyle.com/en/beauty-of-joseon-cleansing-balm-80g-80g/info.html/pid.1065078966"
  },
  {
    category: "exfoliator",
    displayName: "Physical Exfoliator",
    order: 3,
    description:
      "Make use of small grains or non-smooth textures to removes dead skin cells and impurities. Can be irritating for those with sensitive skin.",
    productReco: "Dr. G Brightening Peeling Gel",
    link:
      "https://www.amazon.ca/Dr-G-Brightening-Peeling-Gel-Ounce/dp/B007TFW0B6"
  },
  {
    category: "toner",
    displayName: "Toner",
    order: 4,
    description:
      "Used immediately after cleansing, a toner is used to re-balance your skin’s pH, hydrate, and remove any remaining impurities.",
    productReco: "Acwell Licorice pH Balancing Cleansing Toner",
    link:
      "https://www.mikaela-beauty.com/products/acwell-licorice-ph-balancing-cleansing-toner"
  },
  {
    category: "essence",
    displayName: "Essence",
    order: 11,
    description:
      "A watery lotion (or very thin gel) packed with concentrated moisturizing, anti-aging, and complexion-evening ingredients.",
    productReco: "Missha Time Revolution",
    link:
      "https://sokoglam.com/products/missha-time-revolution-first-treatment-essence-intensive-moist"
  },
  {
    category: "ampoule",
    displayName: "Moisturizing Serum",
    order: 12,
    description:
      "Contains a higher concentration of active ingredients to help target a skin concern, in this case moisture levels.",
    productReco: "Pyunkang Yul Moisture Ampoule",
    link:
      "https://www.mikaela-beauty.com/products/pyunkang-yul-moisture-ampoule"
  },
  {
    category: "eyeCream",
    displayName: "Eye Cream",
    order: 13,
    description:
      "Fight fine lines around your eyes, and brighten their appearance over time. A must have for people of all ages.",
    productReco: "Benton Fermentation Eye Cream",
    link:
      "https://www.mikaela-beauty.com/products/benton-fermentation-eye-cream"
  },
  {
    category: "sheetMask",
    displayName: "Sheet Mask",
    order: 16,
    description:
      "One of the easiest ways to attain that glowing, dewy look. Sheet masks combine several active ingredients to provide a deep treatment for all types of skin concerns.",
    productReco: "A'PIEU Daily Sheet Mask with Green Tea",
    link: "https://sokoglam.com/products/apieu-daily-sheet-mask-green-tea"
  },
  {
    category: "moisturizer",
    displayName: "Moisturizer",
    order: 14,
    description:
      "Essential to maintaining your skin's natural moisture barrier and keeping your complexion supple, clear, and glowing.",
    productReco: "CosRX Advanced Snail 92 All in one Cream",
    link: "https://www.amazon.ca/Cosrx-advanced-snail-cream-100ml/dp/B01LEJ5MSK"
  },
  {
    category: "nightMask",
    displayName: "Sleeping Mask",
    order: 16,
    description:
      "Rejuvenate skin while you sleep so you wake up with a glowing, healthy complexion. Ideal for those with dry skin.",
    productReco: "Laneige Water Sleeping Mask",
    link:
      "https://www.amazon.ca/Laneige-Water-Sleeping-Ounce-U-SC-3829/dp/B00Y16CXS6"
  },
  {
    category: "spf",
    displayName: "SPF",
    order: 15,
    description:
      "Arguably the most important step for anti-aging, not to mention preventing skin cancer.",
    productReco: "Dr. G Brightening Peeling Gel",
    link:
      "https://www.amazon.ca/Dr-G-Brightening-Peeling-Gel-Ounce/dp/B007TFW0B6"
  }
];

let activesScore = [
  {
    category: "aha",
    displayName: "AHA",
    order: 5,
    description:
      "Works to break down the top layer that holds dead skin cells together, smoothing and refining the outermost layer of skin.",
    productReco: "The Ordinary Glycolic Acid 7% Toning Solution",
    link:
      "https://theordinary.com/product/rdn-glycolic-acid-7pct-toning-solution-240ml"
  },
  {
    category: "bha",
    displayName: "BHA",
    order: 6,
    description:
      "Works at a deeper level on the skin, getting further into the pores and attracting oil. Best applied after cleansing with a 20 mins waiting period until your next step.",
    productReco: "The Ordinary Salicylic Acid 2% Solution",
    link:
      "https://theordinary.com/product/rdn-salicylic-acid-2pct-solution-30ml"
  },
  {
    category: "niacinamide",
    displayName: "Niacinamide",
    order: 7,
    description:
      "Reduces the appearance of skin blemishes, balances visible sebum activity, and brightens skin tone.",
    productReco: "The Ordinary Niacinamide 10% + Zinc 1%",
    link: "https://theordinary.com/product/rdn-niacinamide-10pct-zinc-1pct-30ml"
  },
  {
    category: "retinoid",
    displayName: "Granactive Retinoid",
    order: 8,
    description:
      "Effective against multiple signs of aging without any of the irritation and drawbacks common with retinol. ",
    productReco: "Granactive Retinoid 2% in Squalane",
    link:
      "https://theordinary.com/product/rdn-granactive-retinoid-2pct-in-squalane-30ml"
  },
  {
    category: "vitaminC",
    displayName: "Ascorbic Acid",
    order: 9,
    description:
      "An effective antioxidant that brightens the skin tone and reduces signs of aging.",
    productReco: "Ascorbic Acid 8% + Alpha Arbutin 2%",
    link:
      "https://theordinary.com/product/rdn-ascorbic-acid-8pct-alpha-arbutin-2pct-30ml"
  },
  {
    category: "hyaluronic",
    displayName: "Hyaluronic Acid",
    order: 10,
    description:
      "A substance found naturally in our skin that holds water and helps keep it hydrated and plump.",
    productReco: "Hyaluronic Acid 2% + B5",
    link: "https://theordinary.com/product/rdn-hyaluronic-acid-2pct-b5-30ml"
  }
];

let cleanserScore = [
  {
    category: "foamCleanser",
    displayName: "Foaming Cleanser",
    order: 2,
    description:
      "A daily cleanser that excels with water-based debris such as sweat and dirt.",
    productReco: "Neogen Green Tea Real Fresh Foam Cleanser",
    link: "https://sokoglam.com/products/neogen-real-fresh-foaming-cleanser"
  },
  {
    category: "gelCleanser",
    displayName: "Gel Cleanser",
    order: 2,
    description:
      "A gentler daily cleanser that doesn’t strip your skin of its natural oils, especially for sensitive and dry skin.",
    productReco: "CosRX Good Morning Gel Cleanser",
    link:
      "https://www.amazon.ca/Cosrx-good-morning-cleanser-150ml/dp/B016NRXO06"
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
        }</h5><p>${
          finalResultArray[i].description
        }</p><p><span>Recommended: </span><a target="_blank" href="${
          finalResultArray[i].link
        }">${finalResultArray[i].productReco}</a></p></div></li>`
      );
    } else {
      $(".resultList").append(
        `<li><h4>${i + 1}.</h5><div class="resultTextRight"><h5>${
          finalResultArray[i].displayName
        }</h5><p>${
          finalResultArray[i].description
        }</p><p><span>Recommended: </span><a target="_blank" href="${
          finalResultArray[i].link
        }">${finalResultArray[i].productReco}</a></p></div></li>`
      );
    }
  }
};

{
  /* <p>
  <span>Recommended:</span>{" "}
  <a href="${finalResultArray[i].link}">
    ${finalResultArray[i].productReco}
  </a>
</p>; */
}

skinApp.formReset = () => {
  $("form").on("reset", function(event) {
    //remove html from results section

    $(".resultSectionSub").html(
      `<h4 class="resultHeadline"></h4><ul class="resultList"></ul><div class="buttonBox"></div>`
    );

    $(".formSectionFourSub").html(
      `<label for="submitBox" class="visuallyHidden">Click here to submit your answers.</label><input type="submit" value="Submit" id="submitBox" class="submitBox"/><h2 class="submitHeadline">Let's find the skin care products that make sense for you.</h2>`
    );

    //push to the top
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#formSectionOne").offset().top
      },
      300
    );
  });
};

skinApp.formSubmit = () => {
  $("form").on("submit", function(event) {
    // event.preventDefault prevents form submit button from refreshing page automatically
    event.preventDefault();

    // clears routine, if a previous one existed
    // $(".submitHeadline").html("");
    $(".resultHeadline").html("");
    $(".resultList").html("");
    $(".buttonBox").html("");

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

    // Create a new array for the cleanser with the larger score and select the first element

    const cleanserFinal = cleanserScore.sort(function(a, b) {
      return b.score - a.score;
    })[0];

    // ACTIVES (COMPLETED)

    skinApp.scoreCalculator(
      userAge,
      userSkinType,
      userSensitivity,
      activesScore
    );

    const sortedActives = activesScore
      .filter(function(a) {
        return a.score > 0;
      })
      .sort(function(a, b) {
        return b.score - a.score;
      });

    let activesFinal = [];

    // only use the 2 actives with the highest scores
    if (sortedActives.length > 2) {
      for (i = 0; i < 2; i++) {
        activesFinal[i] = sortedActives[i];
      }
    } else {
      activesFinal = sortedActives;
    }

    const fullRoutineSorted = standaloneFinal
      .concat(cleanserFinal, activesFinal)
      .sort(function(a, b) {
        return a.order - b.order;
      });

    // TURN ROUTINE INTO HTML & PRINT ON THE SITE

    $(".resultHeadline").html(`Your Routine`);

    skinApp.resultIterator(fullRoutineSorted);

    $(".buttonBox").html(
      `<label for="resetBox" class="visuallyHidden">Click here to reset your answers and start again.</label><input type="reset" value="Try Again?" id="resetBox" class="resetBox"/>`
    );

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#resultSection").offset().top
      },
      300
    );
  });
};

skinApp.scrollInit = () => {
  skinApp.scrollTool(".labelHeader", "#formSectionOne");
  skinApp.scrollTool(".labelSectionOne", "#formSectionTwo");
  skinApp.scrollTool(".labelSectionTwo", "#formSectionThree");
  skinApp.scrollTool(".labelSectionThree", "#formSectionFour");
};

skinApp.init = () => {
  skinApp.scrollInit();
  skinApp.formReset();
  skinApp.formSubmit();
};

$(document).ready(function() {
  skinApp.init();
});
