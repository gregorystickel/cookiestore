const Sequelize = require("sequelize");
const { DATABASE_URL } = process.env;
const db = require("../util/database");
const { Products } = require("../util/models");

module.exports = {
  seed: (req, res) => {
    Products.bulkCreate([
      {
        id: 1,
        name: "Kiss Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/OhM0NbJSMKOWC5yd5KiQg9R74LA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/575833-a07e05e743004b5e8d5ab760ee6657ab.jpg",
        description:
          "Bite into the perfect blend of chocolate and cookie in every kiss cookie",
        price: 1.0,
        quantity: 100,
      },
      {
        id: 2,
        name: "Chocalate Chip",
        image_url:
          "https://www.allrecipes.com/thmb/pwmQLoLNqY-rTxTHgFrqx52KpSw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/best-chocolate-chip-cookies-f919b3d272cf4699b8aee73e138c19c2.jpg",
        description:
          "Deliciously chewy and packed with chocolate chips, our cookies are the ultimate indulgence",
        price: 1.0,
        quantity: 100,
      },
      {
        id: 3,
        name: "Gingersnaps",
        image_url:
          "https://www.allrecipes.com/thmb/oREjP44_YMbn2ugZoUVMymLzGeA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-1-2000-4053b8c86e0e4cc38bccc62cae35b3a0.jpg",
        description:
          "Bite into the perfect blend of spice and sweetness in every gingersnap cookie",
        price: 0.99,
        quantity: 100,
      },
      {
        id: 4,
        name: "Shortbread Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/8vHeasbjazkPSkWLKqjnTKJoRa4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1164242-6b161580962e4e9fa11f943da6e0354b.jpg",
        description:
          "Deliciously crumbly and packed with flavor, our shortbread cookies are the ultimate indulgence",
        price: 1.29,
        quantity: 100,
      },
      {
        id: 5,
        name: "Peanut Butter Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/c2br4Oz6tELgoVqGKT1AZ4TCO9M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5473886-2000-c77ffdc505354b3190fc05a1a96f1537.jpg",
        description:
          "Indulge in the rich, nutty flavor of peanut butter cookies.",
        price: 1.29,
        quantity: 100,
      },
      {
        id: 6,
        name: "Whoopie Pies",
        image_url:
          "https://www.allrecipes.com/thmb/pzSMwHFeHlNy4g3mCu1Uhb3XR94=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Whoopie-Pies-VII-c134d9295fc6454c80f8197ed73a614b.jpg",
        description:
          "These sandwich-style cookies are made with two soft, pillowy cookies and a marshmallow filling.",
        price: 0.79,
        quantity: 100,
      },
      {
        id: 7,
        name: "Sugar Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/1d_lwRAj82xwjJoJFI-r0pGKPME=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3592733-25d5a72f58ec43428328da9b4230d8ff.jpg",
        description:
          "The sugar cookie is like the vanilla ice cream of cookies—everyone likes it but few claim it as their favorite.",
        price: 1.29,
        quantity: 100,
      },
      {
        id: 8,
        name: "Molasses Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/AYoXUierS1dsew7aM_mQUJjscX4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Crackle-Top-Molasses-Cookies-29e8e90c2717436dbaf555bec9f0f4e8.jpg",
        description:
          "An offshoot of the popular holiday gingerbread cookies, molasses cookies are made with just as much ginger.",
        price: 1.1,
        quantity: 100,
      },
      {
        id: 9,
        name: "Kiss Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/OhM0NbJSMKOWC5yd5KiQg9R74LA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/575833-a07e05e743004b5e8d5ab760ee6657ab.jpg",
        description:
          "Bite into the perfect blend of chocolate and cookie in every kiss cookie",
        price: 1.0,
        quantity: 100,
      },
      {
        id: 10,
        name: "Biscotti",
        image_url:
          "https://www.allrecipes.com/thmb/3gHDwy0C-A5tIXK8dg9b5cONKTY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/114892-7010f15c0ef24b55b9ac43c1b8d3c702.jpg",
        description:
          "The origin of the word biscotti literally means twice-cooked/baked as biscotti is twice baked, resulting in its hard texture and long shelf life.",
        price: 1.0,
        quantity: 100,
      },
      {
        id: 11,
        name: "Butter Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/paa8uiJYJoodk23SThXrdPFLkZw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/974488-234b48cb79894363a0d686231772ff32.jpg",
        description:
          "Bite into the perfect blend of butter and sugar in every butter cookie",
        price: 1.15,
      },
      {
        id: 12,
        name: "Snowball Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/pnCdYBbeDnhzxEWTbdqA320lrBc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Snowball-Cookies-d78d897108794f2d9704a7c204dfc96a.jpg",
        description:
          "These melt-in-your-mouth cookies go by many names including Mexican wedding cakes, butterballs, and Russian tea cakes.",
        price: 1.35,
        quantity: 100,
      },
      {
        id: 13,
        name: "Drop Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/p8-KTcbr01pHYEDYg-u22VY02Hg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-chocolate-and-cranberry-cookies-6f988e37edab4bf1bdfac16ac7fed1ec.jpg",
        description:
          "A drop cookie is any cookie that's made by dropping spoonfuls of dough directly onto a baking sheet. This means lots of cookies can be drop cookies such as chocolate chip, oatmeal raisin, and more.",
        price: 0.99,
        quantity: 100,
      },
      {
        id: 14,
        name: "Thumbprint Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/oE_G4h9SxVVjaP9M7bf5kzeaT5I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1074378-160771f6e02a4dcab92d137e4ee02553.jpg",
        description:
          "These round, shortbread cookies are made by pressing your thumb into the dough to make a hole that can then be filled with a variety of jams. ",
        price: 0.99,
        quantity: 100,
      },
      {
        id: 15,
        name: "Pinwheel Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/xZZOt1oL1paxt18EmUlbXHj_kec=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Baklava-Pinwheel-Cookies-18fe7b52f6c349448733fdee85e8be24.jpg",
        description:
          "For cookies that stand out in a crowd, these hypnotizing pinwheels are the perfect choice. ",
        price: 1.45,
        quantity: 100,
      },
      {
        id: 16,
        name: "Wafers",
        image_url:
          "https://www.allrecipes.com/thmb/gbLLilTsdqWgIRom5HachF4SQPQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Vanilla-Wafer-Cookies-That-Are-Better-Than-Storebought-46dd6b373848494499a20fd80c57b455.jpg",
        description:
          "Satisfy your sweet cravings with our delicious wafer cookies.Bite into the perfect blend of butter and sugar in every wafe",
        price: 1.0,
        quantity: 100,
      },
      {
        id: 17,
        name: "Macaroons",
        image_url:
          "https://www.allrecipes.com/thmb/stjfDcUo3cN_RO8Q5f3mkY5VSKE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/coconut-macaroons-iii-ee3effc0039147539e7ca9d1ec303cb0.jpeg",
        description:
          "Macaron is a sandwiched, meringue-based cookie invented in France, a macaroon is coconut based.",
        price: 1.0,
        quantity: 100,
      },
      {
        id: 18,
        name: "Fortune Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/KLpUHDgszv7Q4d_8ZAFV7TjeBfk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6893087_homemade-fortune-cookies_photo-by-chef-john-9b0f1a40b85549fc9fe2b41b6ed98c3c.jpg",
        description:
          "For many folks in the U.S., these cookies are synonymous with Chinese take-out.",
        price: 1.09,
        quantity: 100,
      },
      {
        id: 19,
        name: "Crinkle Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/NfyeFXTDK2IDc27oD_Q5c9Km2wY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6686302-6ffc7c5ac49246899f01fd6e98387e8e.jpg",
        description:
          "Chocolate addicts love these fudgy crinkle cookies that are rolled in powdered sugar.",
        price: 1.19,
        quantity: 100,
      },
      {
        id: 20,
        name: "Icebox Cookies",
        image_url:
          "https://www.allrecipes.com/thmb/FjdpWvT6je1HL_-S-h_-eOedrM8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/967060-508b159a366c4fc6ba4dc9ea0dfe5bc3.jpg",
        description:
          "Icebox cookies are cookies that are made by forming the dough into a log, and chilling it in the refrigerator, hence the name. ",
        price: 1.45,
        quantity: 100,
      },
      {
        id: 21,
        name: "Cookie Monster Cookies",
        image_url:
          "https://savorthebest.com/wp-content/uploads/2022/09/blue-cookie-monster-cookies_2853-735x735.jpg",
        description:
          "Your Favorite Cookie",
        price: 2.45,
        quantity: 100,
      },
    ])

      .then(() => {
        console.log("DB seeded!");
        //res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};
