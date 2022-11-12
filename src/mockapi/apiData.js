import bracelet from "../assets/images/bracelet.png";
import bracelet_2 from "../assets/images/bracelet-2.png";
import chain from "../assets/images/chain.png";
import chain_1 from "../assets/images/chain-1.png";
import chain_2 from "../assets/images/chain-2.png";
import chain_3 from "../assets/images/chain-3.png";
import earing_1 from "../assets/images/earing-1.png";
import earing_2 from "../assets/images/earing-2.png";
import ring_1 from "../assets/images/ring-1.png";
import ring_2 from "../assets/images/ring-2.png";
import silverneckless from "../assets/images/silver-neckless.png";
import silverneckless_1 from "../assets/images/silver-neckless-2.png";
import silverneckless_2 from "../assets/images/silver-neckless-3.png";

const collection_data = {
  filters: [
    {
      title: "FOR WHOM",
      checkbox: ["MEN", "WOMEN", "KIDS"],
    },
    {
      title: "PRICE",
      checkbox: ["0-1000", "1000-5000", "5000-10,000", "10,000-20,000"],
    },
    {
      title: "PRODUCT TYPE",
      checkbox: ["Chain", "Neckless", "Bracelet", "Rings"],
    },
  ],
  category: "ALL COLLECTION",
  // category: "NECKLACE",

  category_details:
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  category_image: bracelet,
  products: [
    {
      product_id: "2202",
      image: bracelet,
      product_name: "product 1",
      price: 2000,
    },
    {
      product_id: "2203",
      image: chain,
      product_name: "product 2",
      price: 23000,
    },
    {
      product_id: "2204",
      image: bracelet,
      product_name: "product 3",
      price: 5700,
    },
    {
      product_id: "2205",
      image: chain,
      product_name: "product 4",
      price: 9000,
    },
    {
      product_id: "2206",
      image: bracelet,
      product_name: "product 5",
      price: 16000,
    },
    {
      product_id: "2102",
      image: chain,
      product_name: "product 1",
      price: 2000,
    },
    {
      product_id: "2303",
      image: bracelet,
      product_name: "product 2",
      price: 23000,
    },
    {
      product_id: "2404",
      image: chain,
      product_name: "product 3",
      price: 5700,
    },
    {
      product_id: "2505",
      image: bracelet,
      product_name: "product 4",
      price: 9000,
    },
    {
      product_id: "2606",
      image: chain,
      product_name: "product 5",
      price: 16000,
    },
    {
      product_id: "2702",
      image: bracelet,
      product_name: "product 1",
      price: 2000,
    },
    {
      product_id: "2803",
      image: chain,
      product_name: "product 2",
      price: 23000,
    },
    {
      product_id: "2904",
      image: bracelet,
      product_name: "product 3",
      price: 5700,
    },
    {
      product_id: "2215",
      image: chain,
      product_name: "product 4",
      price: 9000,
    },
    {
      product_id: "2226",
      image: bracelet,
      product_name: "product 5",
      price: 16000,
    },
  ],

  all_products: [
    {
      category: "ALL COLLECTIONS",
      id: "1001",
      category_details:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category_image: bracelet,
      products: [
        {
          product_id: "2202",
          image: bracelet,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2203",
          image: chain,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2204",
          image: bracelet,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2205",
          image: chain,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2206",
          image: bracelet,
          product_name: "product 5",
          price: 16000,
        },
        {
          product_id: "2102",
          image: chain,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2303",
          image: bracelet,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2404",
          image: chain,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2505",
          image: bracelet,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2606",
          image: chain,
          product_name: "product 5",
          price: 16000,
        },
        {
          product_id: "2702",
          image: bracelet,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2803",
          image: chain,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2904",
          image: bracelet,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2215",
          image: chain,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2226",
          image: bracelet,
          product_name: "product 5",
          price: 16000,
        },
      ],
    },
    {
      category: "NECKLACE",
      id: "1002",
      category_details:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category_image: bracelet,
      products: [
        {
          product_id: "2202",
          image: bracelet,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2203",
          image: chain,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2204",
          image: bracelet,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2205",
          image: chain,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2206",
          image: bracelet,
          product_name: "product 5",
          price: 16000,
        },
        {
          product_id: "2102",
          image: chain,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2303",
          image: bracelet,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2404",
          image: chain,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2505",
          image: bracelet,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2606",
          image: chain,
          product_name: "product 5",
          price: 16000,
        },
        {
          product_id: "2702",
          image: bracelet,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2803",
          image: chain,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2904",
          image: bracelet,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2215",
          image: chain,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2226",
          image: bracelet,
          product_name: "product 5",
          price: 16000,
        },
      ],
    },
    {
      category: "BRACELET",
      id: "1003",
      category_details:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category_image: bracelet,
      products: [
        {
          product_id: "2202",
          image: bracelet,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2203",
          image: chain,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2204",
          image: bracelet,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2205",
          image: chain,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2206",
          image: bracelet,
          product_name: "product 5",
          price: 16000,
        },
        {
          product_id: "2102",
          image: chain,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2303",
          image: bracelet,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2404",
          image: chain,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2505",
          image: bracelet,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2606",
          image: chain,
          product_name: "product 5",
          price: 16000,
        },
        {
          product_id: "2702",
          image: bracelet,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2803",
          image: chain,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2904",
          image: bracelet,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2215",
          image: chain,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2226",
          image: bracelet,
          product_name: "product 5",
          price: 16000,
        },
      ],
    },
    {
      category: "RINGS",
      id: "1004",
      category_details:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category_image: bracelet,
      products: [
        {
          product_id: "2202",
          image: bracelet,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2203",
          image: chain,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2204",
          image: bracelet,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2205",
          image: chain,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2206",
          image: bracelet,
          product_name: "product 5",
          price: 16000,
        },
        {
          product_id: "2102",
          image: chain,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2303",
          image: bracelet,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2404",
          image: chain,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2505",
          image: bracelet,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2606",
          image: chain,
          product_name: "product 5",
          price: 16000,
        },
        {
          product_id: "2702",
          image: bracelet,
          product_name: "product 1",
          price: 2000,
        },
        {
          product_id: "2803",
          image: chain,
          product_name: "product 2",
          price: 23000,
        },
        {
          product_id: "2904",
          image: bracelet,
          product_name: "product 3",
          price: 5700,
        },
        {
          product_id: "2215",
          image: chain,
          product_name: "product 4",
          price: 9000,
        },
        {
          product_id: "2226",
          image: bracelet,
          product_name: "product 5",
          price: 16000,
        },
      ],
    },
  ],
};

export default collection_data;
