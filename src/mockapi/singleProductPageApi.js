import necklace from "../assets/images/dawn-necklace.png";

const product_details = {
  product: [
    {
      title: "A Quiet Dawn Necklace in Platinum",
      original_price: 1700,
      discount_price: 1530,
      offer: "10% OFF",
      discription:
        "We specialize in Pt950 and Pt/K18 men's chains, bracelets and kada's. We use your Diamonds to create your dream designs into to live piece. A PGI authorized manufacturer.",
      images: [necklace, necklace, necklace],
      delivery_date: "12/03/2023",
      breadcrumbs: [
        { link_name: "Home", path: "/" },
        { link_name: "Necklace",  },
        { link_name: "Type | Necklace Platinum" },
      ],
    },
  ],
  images: [
    {
      img: necklace,
    },
    {
      img: necklace,
    },
    {
      img: necklace,
    },
    {
      img: necklace,
    },
  ],
};

export default product_details;
