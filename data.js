// ============================================================
// data.js — Hunger Zone Restaurant — Menu Data Source of Truth
// ============================================================

const MENU_DATA = {

  // ── FRENCH FRIES ──────────────────────────────────────────
  fries: {
    label: "French Fries",
    icon: "🍟",
    type: "sized", // Regular / Large
    sizeLabels: ["Regular", "Large"],
    items: [
      { name: "Tangy Fries",         prices: [80, 120],  desc: "Tangy seasoned crispy fries" },
      { name: "Garlic Fries",        prices: [90, 130],  desc: "Tossed in aromatic garlic butter" },
      { name: "Peri-Peri Fries",     prices: [90, 130],  desc: "Fiery peri-peri spice blend" },
      { name: "Creamy Loaded Fries", prices: [100, 140], desc: "Loaded with creamy sauce & toppings" },
      { name: "Afgani Loaded Fries", prices: [120, 150], desc: "Afghani-style creamy loaded fries" },
    ],
  },

  // ── BURGERS ───────────────────────────────────────────────
  burgers: {
    label: "Burgers",
    icon: "🍔",
    type: "single",
    items: [
      { name: "Aloo Burger",              price: 40,  desc: "Classic potato patty burger" },
      { name: "Creamy Burger",            price: 50,  desc: "Creamy sauce with fresh veggies" },
      { name: "Veg. Burger",              price: 50,  desc: "Fresh veggie patty & crispy lettuce" },
      { name: "Spicy Tikki Burger",       price: 60,  desc: "Spiced tikki with chilli sauce" },
      { name: "Tandoori Paneer Burger",   price: 70,  desc: "Marinated tandoori paneer patty" },
      { name: "Peri Peri Paneer Burger",  price: 70,  desc: "Paneer with fiery peri-peri kick" },
      { name: "Maharaja Burger",          price: 85,  desc: "Royal loaded burger with extra fillings" },
      { name: "Punjabi Tadka Burger",     price: 70,  desc: "Desi tadka twist in a burger" },
      { name: "Paneer King Burger",       price: 90,  desc: "Thick paneer slice, king-sized flavour" },
      { name: "Double Deck Burger",       price: 100, desc: "Double-patty stacked burger" },
    ],
  },

  // ── GRILLED SANDWICH ──────────────────────────────────────
  sandwiches: {
    label: "Grilled Sandwich",
    icon: "🥪",
    type: "single",
    items: [
      { name: "Veg. Sandwich (2pc)",              price: 70,  desc: "Classic grilled veg sandwich" },
      { name: "Creamy Corn Sandwich (2pc)",        price: 80,  desc: "Sweet corn with creamy filling" },
      { name: "Paneer Labalab Sandwich (2pc)",     price: 100, desc: "Loaded paneer & cheese grilled sandwich" },
      { name: "Mushroom Sandwich (2pc)",           price: 100, desc: "Grilled mushroom & cheese sandwich" },
    ],
  },

  // ── GREEN SALAD ───────────────────────────────────────────
  salad: {
    label: "Green Salad",
    icon: "🥗",
    type: "single",
    items: [
      { name: "Plain Green Salad",          price: 100, desc: "Fresh crisp greens & veggies" },
      { name: "Crispy Tikki Salad",         price: 120, desc: "Green salad with a crispy tikki" },
      { name: "Corn & Paneer Masala Salad", price: 140, desc: "Golden corn, paneer & masala dressing" },
    ],
  },

  // ── DESSERTS ──────────────────────────────────────────────
  desserts: {
    label: "Desserts",
    icon: "🍫",
    type: "single",
    items: [
      { name: "Chocolava Cake",       price: 70, desc: "Warm molten chocolate lava cake" },
      { name: "Nutty Chocolava Cake", price: 90, desc: "Chocolava with crunchy nut topping" },
    ],
  },

  // ── CHINESE RASOI ─────────────────────────────────────────
  chinese: {
    label: "Chinese Rasoi",
    icon: "🥡",
    type: "single",
    items: [
      { name: "Veg Maggi",           price: 90,  desc: "Classic spiced Maggi noodles" },
      { name: "Cheese Maggi",        price: 120, desc: "Maggi loaded with melted cheese" },
      { name: "Veg Noodles",         price: 90,  desc: "Stir-fried veg noodles" },
      { name: "Hakka Noodles",       price: 120, desc: "Indo-Chinese hakka noodles" },
      { name: "Chilli Noodles",      price: 120, desc: "Fiery chilli-tossed noodles" },
      { name: "Sezwan Noodles",      price: 130, desc: "Bold Sichuan-style noodles" },
      { name: "Veg Momos",           price: 80,  desc: "Steamed veg dumplings" },
      { name: "Paneer Momos",        price: 100, desc: "Steamed paneer-filled dumplings" },
      { name: "Spring Roll",         price: 120, desc: "Crispy fried veggie spring rolls" },
      { name: "Manchurian Dry",      price: 110, desc: "Crispy veg balls in dry manchurian sauce" },
      { name: "Manchurian Gravy",    price: 130, desc: "Veg balls in saucy manchurian gravy" },
      { name: "Chilli Potato",       price: 140, desc: "Crispy potato in Indo-Chinese chilli sauce" },
      { name: "Honey Chilli Potato", price: 150, desc: "Sweet & spicy honey chilli potato" },
    ],
  },

  // ── MILKSHAKES & COFFEE ───────────────────────────────────
  drinks: {
    label: "Shakes & Coffee",
    icon: "🥤",
    type: "flat",
    flatPrice: 79,
    items: [
      { name: "Hot Coffee",           desc: "Rich & aromatic hot coffee" },
      { name: "Cold Coffee",          desc: "Chilled refreshing cold coffee" },
      { name: "Caramel Cold Coffee",  desc: "Cold coffee with caramel drizzle" },
      { name: "Vanilla Shake",        desc: "Creamy classic vanilla milkshake" },
      { name: "Chocolate Shake",      desc: "Rich chocolate milkshake" },
      { name: "Strawberry Shake",     desc: "Fresh strawberry milkshake" },
      { name: "Oreo-Brownie Shake",   desc: "Oreo & brownie blended shake" },
      { name: "Kit Kat Shake",        desc: "Kit Kat crunch milkshake" },
      { name: "Butter Scotch Shake",  desc: "Smooth butterscotch milkshake" },
    ],
  },

  // ── MOJITOS ───────────────────────────────────────────────
  mojitos: {
    label: "Mojito",
    icon: "🍹",
    type: "flat",
    flatPrice: 69,
    items: [
      { name: "Virgin Mojito",              desc: "Classic fresh mint & lime mojito" },
      { name: "Masala Mojito",              desc: "Desi spiced masala mojito" },
      { name: "Watermelon Mojito",          desc: "Cool watermelon refresher" },
      { name: "Green Apple Mojito",         desc: "Tangy green apple cooler" },
      { name: "Kala Khatta Cooler Mojito",  desc: "Tangy kala khatta with mint" },
      { name: "Blue Berry Mojito",          desc: "Blueberry burst mojito" },
    ],
  },

  // ── SNACKS ────────────────────────────────────────────────
  snacks: {
    label: "Snacks",
    icon: "🌮",
    type: "single",
    items: [
      { name: "Zingy Parcel",             price: 40,  desc: "Light zingy snack parcel" },
      { name: "Zingy Parcel With Corn",   price: 45,  desc: "Zingy parcel with sweet corn" },
      { name: "Mexicana Taco",            price: 120, desc: "Mexican-spiced veggie taco" },
      { name: "Paneer Taco",              price: 140, desc: "Marinated paneer taco" },
      { name: "Spicy Calzone",            price: 120, desc: "Stuffed spicy calzone pocket" },
      { name: "Cheese Calzone",           price: 120, desc: "Cheese-filled calzone pocket" },
      { name: "Harissa Calzone",          price: 120, desc: "Harissa-spiced calzone" },
      { name: "Makhni Paneer Calzone",    price: 120, desc: "Paneer in makhni sauce calzone" },
    ],
  },

  // ── WRAPS & KATHI ROLLS ───────────────────────────────────
  wraps: {
    label: "Wraps & Kathi Roll",
    icon: "🌯",
    type: "single",
    items: [
      { name: "Mexican Aloo Tikki Wrap",    price: 100, desc: "Tikki with Mexican salsa in a wrap" },
      { name: "Corn Lover Wrap",            price: 100, desc: "Sweet corn & cheese wrap" },
      { name: "Tandoori Paneer Wrap",       price: 100, desc: "Tandoori marinated paneer wrap" },
      { name: "Mexican Veggie Kathi Roll",  price: 110, desc: "Crunchy veggie Mexican kathi roll" },
      { name: "Paneer Tikka Kathi Roll",    price: 110, desc: "Smoky paneer tikka kathi roll" },
      { name: "Mushroom Tikka Kathi Roll",  price: 110, desc: "Grilled mushroom kathi roll" },
    ],
  },

  // ── GARLIC BREAD ──────────────────────────────────────────
  garlicbread: {
    label: "Garlic Bread",
    icon: "🥖",
    type: "single",
    items: [
      { name: "Simple Garlic Bread",    price: 70,  desc: "Classic butter garlic bread" },
      { name: "Stuffed Garlic Bread",   price: 110, desc: "Cheese-stuffed garlic bread" },
      { name: "Cheese Burst Paneer GB", price: 120, desc: "Cheese burst with paneer filling" },
      { name: "Paneer Garlic Bread",    price: 110, desc: "Topped with seasoned paneer" },
      { name: "Cheese Garlic Bread",    price: 120, desc: "Loaded with melted cheese" },
    ],
  },

  // ── PENNE PASTA ───────────────────────────────────────────
  pasta: {
    label: "Penne Pasta",
    icon: "🍝",
    type: "flat",
    flatPrice: 120,
    items: [
      { name: "Mexican Red Pasta",   desc: "Penne in bold Mexican red sauce" },
      { name: "Creamy White Pasta",  desc: "Penne in smooth white cream sauce" },
      { name: "Mix Sauce Pasta",     desc: "Penne in a red & white mix sauce" },
      { name: "Tandoori Pasta",      desc: "Smoky tandoori-spiced penne" },
      { name: "Italian Pasta",       desc: "Classic Italian-style penne" },
    ],
  },

  // ── PIZZAS ────────────────────────────────────────────────
  pizzas: {
    label: "Pizza",
    icon: "🍕",
    type: "pizza",
    sizeLabels: ["Regular", "Medium", "Large"],
    groups: [
      {
        group: "Simply Veg.",
        prices: [110, 220, 350],
        items: [
          { name: "Cheese & Tomato",    desc: "Fresh tomato & mozzarella cheese" },
          { name: "Cheese & Onion",     desc: "Onion & mozzarella cheese" },
          { name: "Cheese & Capsicum",  desc: "Capsicum & mozzarella cheese" },
          { name: "Cheese & Corn",      desc: "Golden corn & mozzarella cheese" },
        ],
      },
      {
        group: "Veg. Special",
        prices: [170, 360, 510],
        items: [
          { name: "Peppy Paneer Special",     desc: "Marinated paneer, capsicum & red pepper", featured: true },
          { name: "Deluxe Veggie Delight",    desc: "Onion, capsicum, corn, mushroom & paneer" },
          { name: "Punjabi Tadka Pizza",      desc: "Baby corn, capsicum, jalapeno & red pepper" },
          { name: "Peri Peri Paneer Pizza",   desc: "Onion, paneer & golden corn with peri peri sauce" },
          { name: "Mexican Fiesta Special",   desc: "Red paprika, baby corn, grilled mushroom, onion, black olives, Mexican sauce inside" },
        ],
      },
      {
        group: "Stuffed Crust Special",
        prices: [210, 430, 550],
        items: [
          { name: "Stuffed Crust Masala Pizza", desc: "Capsicum, red pepper, onion, corn, paneer" },
          { name: "Paneer Labalab Pizza",        desc: "Capsicum, marinated large paneer & mozzarella cheese" },
          { name: "Kadai Paneer Pizza",          desc: "Onion, capsicum, red pepper & marinated paneer, special kadai gravy" },
        ],
      },
      {
        group: "Veg. Delight",
        prices: [170, 330, 450],
        items: [
          { name: "Double Cheese Margherita", desc: "Loaded with mozzarella cheese only" },
          { name: "Farm House Special",       desc: "Onion, capsicum, tomato & mushroom" },
          { name: "Mexican Green Wave",       desc: "Onion, capsicum, tomato & jalapeno with herbs" },
          { name: "Corn Exotica Pizza",       desc: "Onion, corn & fresh tomato" },
          { name: "Pasta Pizza",              desc: "Marinated pasta, capsicum, red pepper, golden corn" },
          { name: "Paneer Indiana",           desc: "Red pepper & marinated paneer, chipotle flavour" },
          { name: "Italian Mushroom Pizza",   desc: "Grilled mushroom, golden corn, jalapenos, mozzarella cheese & salsa flavour inside" },
        ],
      },
      {
        group: "Veg. Feast Pizza",
        prices: [250, 470, 610],
        items: [
          { name: "Veg. Extra-Vaganza Pizza", desc: "Onion, capsicum, tomato, mushroom, jalapeno, corn, olive & extra cheese", featured: true },
          { name: "Chef's Special Pizza",     desc: "Mushroom, jalapeno, corn, red pepper, capsicum & paneer" },
          { name: "Veg. Supreme Pizza",       desc: "Jalapeno, baby corn, capsicum, paneer, onion & black olive" },
          { name: "Hub Special Pizza",        desc: "Bulk veggies & extra cheese" },
        ],
      },
      {
        group: "Royal Veg. Special",
        prices: [200, 410, 550],
        items: [
          { name: "Chilli Paneer Pizza",    desc: "Onion, tomato, red pepper & marinated paneer with chilli garlic sauce" },
          { name: "Tandoori Paneer Pizza",  desc: "Onion, capsicum, fresh tomato & marinated paneer in tandoori sauce" },
          { name: "Makhni Gravy Pizza",     desc: "Onion, jalapeno, corn & marinated paneer with makhni sauce" },
        ],
      },
      {
        group: "Pizza Mania Special",
        singlePrice: 110,
        items: [
          { name: "Spicy Touch Pizza",    desc: "Red pepper, capsicum, tomato", featured: true },
          { name: "Loaded Pizza",         desc: "Mushroom, jalapeno & golden corn" },
          { name: "Tangy Corn Touch",     desc: "Sweetcorn, onion, red pepper" },
          { name: "Paneer Punch Special", desc: "Capsicum, paneer with makhani sauce" },
        ],
      },
      {
        group: "Pizza Mania Pie",
        comboInfo: {
          comboName: "Veg. Single Combo",
          comboPrice: 230,
          comboNote: "Single mini pizza — choose one topping",
          toppings: ["Onion", "Tomato", "Capsicum", "Golden Corn"],
          toppingPrice: 59,
        },
        items: [],
      },
    ],
    addons: [
      {
        name: "Stuffed Crust Base",
        desc: "Corners filled with two types of liquid cheese & mozzarella",
        prices: { Regular: 30, Medium: 60, Large: 90 },
      },
      {
        name: "Cheese Burst Base",
        desc: "Filled with creamy liquid cheese, covered with a thin tortilla layer",
        prices: { Regular: 70, Medium: 100, Large: 150 },
      },
      {
        name: "Extra Cheese",
        desc: "Loaded with an extra layer of 100% real gooey melted mozzarella cheese",
        prices: { Regular: 30, Medium: 55, Large: 65 },
      },
      {
        name: "Extra Toppings",
        desc: "Black olive, tomato, onion, paneer, capsicum, grilled mushroom, red pepper, pineapple, baby corn, jalapeno, etc.",
        prices: { Regular: 25, Medium: 35, Large: 55 },
      },
    ],
  },

};

// Category display order for tabs & filter strip
const CATEGORY_ORDER = [
  "pizzas",
  "burgers",
  "fries",
  "chinese",
  "snacks",
  "wraps",
  "sandwiches",
  "garlicbread",
  "pasta",
  "drinks",
  "mojitos",
  "desserts",
  "salad",
];

// Business constants
const BUSINESS = {
  name:        "Hunger Zone Restaurant",
  tagline:     "Big Hunger. Bigger Flavours.",
  address:     "Dhroli Road, Pillukhera",
  phone:       "81689 41853",
  phoneRaw:    "918168941853",
  whatsapp:    "88838 83788",
  whatsappRaw: "918883883788",
  instagram:   "https://www.instagram.com/hunger__zone_",
  mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Dhroli+Road+Pillukhera",
  delivery: {
    freeWithin: "5 KM",
    minOrder:   300,
  },
  offers: [
    {
      icon:     "🍕",
      title:    "Buy 1 Get 1 Free Pizza",
      subtitle: "Every Wednesday & Friday",
      desc:     "Order any pizza on Wed or Fri and get a second pizza of equal or lesser value absolutely free!",
      badge:    "WED & FRI",
    },
    {
      icon:     "🚚",
      title:    "Free Home Delivery",
      subtitle: "Within 5 KM radius",
      desc:     "Free delivery on all orders above ₹300 within a 5 KM radius. Order via WhatsApp for fastest service.",
      badge:    "MIN ₹300",
    },
    {
      icon:     "🍹",
      title:    "Mojito @ ₹69",
      subtitle: "6 refreshing flavours",
      desc:     "Beat the heat! Choose from Virgin, Masala, Watermelon, Green Apple, Kala Khatta or Blueberry Mojito.",
      badge:    "ONLY ₹69",
    },
    {
      icon:     "🎁",
      title:    "Medium Pizza + Free Side",
      subtitle: "Standing combo offer",
      desc:     "Buy any medium pizza and get one side item absolutely free. Upgrade your meal for nothing extra!",
      badge:    "COMBO",
    },
  ],
  reviews: [
    {
      name:   "Rahul Sharma",
      rating: 5,
      text:   "Best pizza in Pillukhera! The Peppy Paneer Special is \uD83D\uDD25 and the crust is perfectly soft. Super fast delivery too!",
      avatar: "RS",
    },
    {
      name:   "Priya Mehta",
      rating: 5,
      text:   "Ordered the Veg. Extra-Vaganza and the Honey Chilli Potato — both absolutely amazing. Great value for money!",
      avatar: "PM",
    },
    {
      name:   "Amit Kumar",
      rating: 5,
      text:   "The BOGO pizza deal on Wednesday is insane value. We order every week. Momos are also really good!",
      avatar: "AK",
    },
  ],
};
