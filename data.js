/* =================================================================
   ADD A NEW EXPERIMENT
   Copy one object below, fill in your own values, and it will
   automatically appear on the hub page AND get its own full detail
   page automatically — no other file needs to change.

   videoId       — the part after "watch?v=" in your YouTube URL
                   (leave as "" to show a "coming soon" placeholder)
   difficulty    — "beginner", "intermediate", or "advanced"
   discipline    — "physics", "chemistry", "biology", or "engineering"
   materials     — array of strings (quick-view list shown on the hub card)
   safety        — short string for the hub card teaser, or "" to hide it

   learnMore     — powers the full detail page.
     image        — path to a photo of your setup ("" shows a placeholder)
     analysisIntro— a paragraph introducing the science, shown above the
                    annotated photo on the detail page
     hotspots     — array of { x, y, title, text }. x/y are percentages
                    (0-100) of the image's width/height — position the dot
                    over the part of the photo you're explaining.
     precautions  — array of strings: what to do/set up before starting
     dangers      — array of strings: what could realistically go wrong
     emergency    — array of strings: what to do if it does (be specific —
                    e.g. "Flush eyes with cool water for 15 minutes, then
                    call Poison Control")
     sourcing     — array of { item, where }: where to actually get each
                    material (store name/aisle, or "already at home")
================================================================= */
const experiments = [
  {
    number: "001",
    title: "Simple Electricity Contraption",
    videoId: "",
    difficulty: "beginner",
    discipline: "physics",
    duration: "6 min",
    filmed: "TBD",
    description: "Build a basic circuit from household materials and see how a battery, switch, and bulb work together to make electricity do something.",
    materials: ["9V battery", "Insulated copper wire", "Small light bulb + holder", "Electrical tape"],
    safety: "Adult supervision recommended when stripping wire ends.",
    learnMore: {
      image: "",
      analysisIntro: "This experiment builds the simplest possible closed circuit — a loop with no gaps for current to flow through. Every home appliance you own is a more complicated version of exactly this idea: a power source, a conductive path, and something that uses the electrical energy along the way.",
      hotspots: [
        { x: 22, y: 35, title: "Battery", text: "Chemical reactions inside the battery push electrons out of the negative terminal, creating a difference in electric potential — this is what drives current through the rest of the circuit." },
        { x: 50, y: 65, title: "Wire path", text: "Copper is used because its outer electrons move freely between atoms, making it a low-resistance path for current to flow. This is why copper (not plastic or wood) is chosen." },
        { x: 78, y: 30, title: "Bulb filament", text: "The thin filament inside the bulb resists the flow of current. That resistance converts electrical energy into heat and light — the same principle behind incandescent bulbs." }
      ],
      precautions: ["Set up on a dry, flat, non-conductive surface", "Have wire strippers or scissors ready before starting", "Keep the circuit disconnected until wiring is complete"],
      dangers: ["Bare wire ends can pinch or scratch skin", "A short circuit can make the wire or battery noticeably warm", "Small components are a choking hazard for young children"],
      emergency: ["If a wire feels hot: disconnect the battery immediately and let it cool before touching", "If skin contact with a warm wire causes redness: run cool water over the area for 10 minutes", "If a component is swallowed: call Poison Control or seek emergency care immediately"],
      sourcing: [
        { item: "9V battery", where: "Any grocery store, pharmacy, or hardware store — battery aisle" },
        { item: "Insulated copper wire", where: "Hardware store electrical aisle, or repurposed from an old phone charger cord" },
        { item: "Small light bulb + holder", where: "Hardware store (look for a 'mini lamp holder' kit) or a hobby electronics store" },
        { item: "Electrical tape", where: "Hardware store or often already in a household junk drawer" }
      ]
    }
  },
  {
    number: "002",
    title: "Baking Soda Volcano",
    videoId: "",
    difficulty: "beginner",
    discipline: "chemistry",
    duration: "8 min",
    filmed: "TBD",
    description: "A classic acid-base reaction rebuilt from scratch, with an explanation of exactly why it foams the way it does.",
    materials: ["Baking soda", "Vinegar", "Dish soap", "Food coloring", "Plastic bottle"],
    safety: "Do outdoors or over a tray — reaction is messy.",
    learnMore: {
      image: "",
      analysisIntro: "This is an acid-base reaction happening in real time. The dramatic foaming isn't the reaction itself — it's a side effect of one of the reaction's byproducts getting trapped, which is what actually makes this experiment worth filming instead of just describing.",
      hotspots: [
        { x: 30, y: 55, title: "Baking soda", text: "Baking soda (sodium bicarbonate) is a mild base. On its own it's stable, but it reacts quickly the moment it meets an acid." },
        { x: 65, y: 40, title: "Vinegar", text: "Vinegar is a dilute acetic acid. When it contacts the baking soda, the acid and base neutralize each other and release carbon dioxide gas as a byproduct." },
        { x: 50, y: 75, title: "The foam", text: "Dish soap traps the released CO2 gas as bubbles instead of letting it escape instantly, which is what turns a simple fizz into a thick, rising foam." }
      ],
      precautions: ["Do this outdoors or over a large tray — it overflows", "Wear old clothes or an apron", "Keep the mixture away from eyes while combining"],
      dangers: ["Vinegar can sting if it gets in eyes", "Overflow can stain fabric or wood surfaces", "Pressure can build briefly if using a capped container"],
      emergency: ["If vinegar gets in eyes: flush with cool running water for 15 minutes and seek medical advice if irritation continues", "If a capped container is used and pressure builds: step back and let it vent before opening"],
      sourcing: [
        { item: "Baking soda", where: "Any grocery store — baking aisle" },
        { item: "Vinegar", where: "Any grocery store — condiments or baking aisle" },
        { item: "Dish soap", where: "Already at home, or grocery store cleaning aisle" },
        { item: "Food coloring", where: "Grocery store baking aisle" },
        { item: "Plastic bottle", where: "Reuse an empty water or soda bottle" }
      ]
    }
  },
  {
    number: "003",
    title: "Homemade Compass",
    videoId: "",
    difficulty: "beginner",
    discipline: "physics",
    duration: "5 min",
    filmed: "TBD",
    description: "Magnetize a needle and float it to build a working compass, with a breakdown of why magnetic fields align it north.",
    materials: ["Sewing needle", "Magnet", "Small bowl of water", "Piece of cork or foam"],
    safety: "",
    learnMore: {
      image: "",
      analysisIntro: "A compass is really just a magnet that's free to rotate. This build strips the idea down to its simplest form so you can see the two things that actually matter: giving something magnetic, and giving it freedom of movement.",
      hotspots: [
        { x: 40, y: 30, title: "Magnetizing the needle", text: "Stroking the needle with a magnet in one direction aligns the microscopic magnetic domains inside the steel, temporarily turning the needle itself into a weak magnet." },
        { x: 60, y: 70, title: "Floating platform", text: "The cork keeps the needle floating freely on the water's surface with almost no friction, so it's free to rotate in response to magnetic force alone." },
        { x: 30, y: 60, title: "Alignment with north", text: "Earth's core generates its own magnetic field. The needle's magnetic domains rotate to align with that field, causing it to consistently point north-south." }
      ],
      precautions: ["Use a needle with adult supervision if a child is doing the stroking step", "Keep the magnet away from electronics, credit cards, or hard drives"],
      dangers: ["The needle tip is sharp", "Small parts (cork, needle) are a hazard for very young children"],
      emergency: ["If a needle prick breaks skin: clean the area and apply a bandage; seek care if bleeding doesn't stop"],
      sourcing: [
        { item: "Sewing needle", where: "Any household sewing kit, or a craft/fabric store" },
        { item: "Magnet", where: "Hardware store, craft store, or a strong fridge magnet from home" },
        { item: "Small bowl of water", where: "Already at home" },
        { item: "Piece of cork or foam", where: "Save a wine cork, or use a foam packaging scrap" }
      ]
    }
  },
  {
    number: "004",
    title: "Density Tower",
    videoId: "",
    difficulty: "intermediate",
    discipline: "chemistry",
    duration: "10 min",
    filmed: "TBD",
    description: "Layer liquids of different densities into a single glass without mixing, and explain the physics behind why they stay separated.",
    materials: ["Honey", "Corn syrup", "Dish soap", "Water", "Vegetable oil", "Rubbing alcohol", "Tall clear glass"],
    safety: "",
    learnMore: {
      image: "",
      analysisIntro: "Every liquid here is made of the same basic ingredients — water and organic molecules — but packed at different densities. Stacking them cleanly comes down to one rule: always pour the next-lightest liquid on top, slowly enough that it doesn't punch through the layer below.",
      hotspots: [
        { x: 50, y: 85, title: "Honey layer (bottom)", text: "Honey is the densest liquid used here, so it sinks below every other layer and forms the base of the tower." },
        { x: 50, y: 50, title: "Middle layers", text: "Each liquid is poured slowly over the back of a spoon to avoid disturbing the layer below. As long as each new liquid is less dense than the one beneath it, it will rest cleanly on top." },
        { x: 50, y: 15, title: "Alcohol layer (top)", text: "Rubbing alcohol is the least dense liquid in the stack, and it doesn't mix with the oil below it because the two have very different molecular structures (polar vs. nonpolar)." }
      ],
      precautions: ["Pour slowly over the back of a spoon, not directly into the glass", "Work on a surface that's fine to get sticky or wet", "Use a tall, narrow, clear glass for the clearest layers"],
      dangers: ["Rubbing alcohol is flammable — keep away from any open flame", "Rubbing alcohol fumes can irritate eyes in a poorly ventilated room"],
      emergency: ["If rubbing alcohol contacts eyes: flush with cool water for 15 minutes and seek medical attention", "If ingested accidentally: call Poison Control immediately"],
      sourcing: [
        { item: "Honey", where: "Already at home, or grocery store baking aisle" },
        { item: "Corn syrup", where: "Grocery store baking aisle" },
        { item: "Dish soap", where: "Already at home" },
        { item: "Vegetable oil", where: "Already at home, or grocery store" },
        { item: "Rubbing alcohol", where: "Pharmacy or grocery store — first aid aisle" },
        { item: "Tall clear glass", where: "Already at home" }
      ]
    }
  }
];

const disciplineLabels = {
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
  engineering: "Engineering"
};
