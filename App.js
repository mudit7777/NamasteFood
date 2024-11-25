import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Navbar
 * Body
 * - Search
 * - Restaurant Cards
 *   - Images
 *   - Name of Res, Rating, Cuisine, etc
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwv45iAbWWwD5glterGTBIO6Q6pnjukcFkGw&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "253981",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/15a408cf-7048-44be-8019-812cae513953_253981.JPG",
      locality: "V3S Mall",
      areaName: "Laxmi Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "24K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-25 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹3500",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/mcdonalds-v3s-mall-laxmi-nagar-rest253981",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10710",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/1c51f20f-0a65-4a31-8e9a-4191029b49c9_10710.jpg",
      locality: "2nd Phase",
      areaName: "Mayur Vihar",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Beverages"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "24K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-26 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/subway-2nd-phase-mayur-vihar-rest10710",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "866578",
      name: "The Bhojan-Pure Veg Delights",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/25/545c112a-74e8-43d5-b28a-80b78e508147_866578.jpg",
      locality: "Patparganj",
      areaName: "Mayur Vihar",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Street Food",
        "Bihari",
        "South Indian",
        "Biryani",
        "rolls",
        "Burger",
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "947",
      avgRatingString: "4.2",
      totalRatingsString: "332",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-26 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/the-bhojan-pure-veg-delights-patparganj-mayur-vihar-rest866578",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "572210",
      name: "The Dessert Heaven - Pastry, Brownie and Cakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/13/9a7c7a38-cf33-4aa2-b1e4-92275ba758bc_572210.jpg",
      locality: "Vinod nagar",
      areaName: "East Vinod nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.5,
      veg: true,
      parentId: "506176",
      avgRatingString: "4.5",
      totalRatingsString: "504",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-26 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/the-dessert-heaven-pastry-brownie-and-cakes-vinod-nagar-east-vinod-nagar-rest572210",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "574994",
      name: "Veg Daawat by Behrouz",
      cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
      locality: "Kondli",
      areaName: "Mayur Vihar Phase 3",
      costForTwo: "₹700 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "344904",
      avgRatingString: "4.3",
      totalRatingsString: "38",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/veg-daawat-by-behrouz-kondli-mayur-vihar-phase-3-rest574994",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "678834",
      name: "Barista Coffee",
      cloudinaryImageId: "b64bf721e12e7b3df82c832898999c51",
      locality: "Mayur Vihar Phase - 1",
      areaName: "Mayur Vihar Phase - 1",
      costForTwo: "₹600 for two",
      cuisines: [
        "Beverages",
        "Fast Food",
        "Snacks",
        "Biryani",
        "Pastas",
        "Desserts",
      ],
      avgRating: 4.5,
      parentId: "416281",
      avgRatingString: "4.5",
      totalRatingsString: "110",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-25 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.7",
          ratingCount: "16",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/barista-coffee-mayur-vihar-phase-1-rest678834",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "438435",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/16980219-5c82-4f0b-9505-a589b49821df_438435.jpg",
      locality: "Parsvnath Mall",
      areaName: "Mayur Vihar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "7.5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-26 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/burger-king-parsvnath-mall-mayur-vihar-rest438435",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "538609",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "East Vinod nagar",
      areaName: "Patparganj",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
      avgRating: 4.6,
      veg: true,
      parentId: "319582",
      avgRatingString: "4.6",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-25 23:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/great-indian-khichdi-by-eatfit-east-vinod-nagar-patparganj-rest538609",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "690601",
      name: "Ovenfresh Cakes And Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/661925c9-4e45-49bd-a9e2-fa59cfc2f203_690601.JPG",
      locality: "East Vinod Nagar",
      areaName: "Mayur Vihar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Bakery",
        "Desserts",
        "Beverages",
        "Ice Cream",
        "Sweets",
        "Juices",
        "Bengali",
        "Pizzas",
      ],
      avgRating: 4.3,
      parentId: "1372",
      avgRatingString: "4.3",
      totalRatingsString: "118",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-26 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/ovenfresh-cakes-and-desserts-east-vinod-nagar-mayur-vihar-rest690601",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "805985",
      name: "Bowl Soul",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/eea7a320-d0f2-4145-9ced-f87d56568b00_805985.JPG",
      locality: "SHAKARPUR",
      areaName: "NEHRU ENCLAVE",
      costForTwo: "₹250 for two",
      cuisines: [
        "Continental",
        "Chinese",
        "Oriental",
        "Asian",
        "Healthy Food",
        "Fast Food",
        "Indian",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "280646",
      avgRatingString: "4.1",
      totalRatingsString: "150",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-25 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹133",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/bowl-soul-shakarpur-nehru-enclave-rest805985",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "805986",
      name: "Edesia by Freshmenu",
      cloudinaryImageId: "334f94f17a371e3e525f714008c851ec",
      locality: "SHAKARPUR",
      areaName: "NEHRU ENCLAVE",
      costForTwo: "₹150 for two",
      cuisines: ["Desserts", "Bakery", "Fast Food"],
      avgRating: 3.1,
      parentId: "11246",
      avgRatingString: "3.1",
      totalRatingsString: "24",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-25 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/edesia-by-freshmenu-shakarpur-nehru-enclave-rest805986",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "263673",
      name: "Veg Meals by Lunchbox",
      cloudinaryImageId: "wax8oacccavpi2q9udrh",
      locality: "Kondli",
      areaName: "Mayur Vihar Phase 3",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
      avgRating: 4.1,
      veg: true,
      parentId: "21938",
      avgRatingString: "4.1",
      totalRatingsString: "220",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/veg-meals-by-lunchbox-kondli-mayur-vihar-phase-3-rest263673",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "566228",
      name: "Faasos Signature Wraps & Rolls",
      cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
      locality: "Kondli",
      areaName: "Mayur Vihar Phase 3",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "North Indian",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "340366",
      avgRatingString: "4.3",
      totalRatingsString: "77",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-25 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/faasos-signature-wraps-and-rolls-kondli-mayur-vihar-phase-3-rest566228",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "82120",
      name: "Blue Tokai Coffee Roasters",
      cloudinaryImageId: "1a0521375f07155eda2f1ed263206831",
      locality: "B Block",
      areaName: "Udhyog Marg",
      costForTwo: "₹600 for two",
      cuisines: ["Cafe", "Coffee", "Beverages"],
      avgRating: 4.7,
      parentId: "2682",
      avgRatingString: "4.7",
      totalRatingsString: "2.3K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-25 20:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-bbb0e5d8-6005-46fa-8cc9-a15e036bb6ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/blue-tokai-coffee-roasters-b-block-udhyog-marg-rest82120",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {
          // loop over all restaurants
          // for each restraunt we have to return a restaurant
          resList.map((restraunt) => (
            <RestaurantCard key={restraunt.info.id} resData={restraunt} />
          ))
        }
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;

  // optimize the code for resData
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating + "⭐"}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2024 Namaste Food. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms & Conditions</a>
          </li>
        </ul>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
