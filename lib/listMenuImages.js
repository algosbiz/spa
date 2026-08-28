const listMenuImages = {
  "Aloe Vera Massage": "/images/listmenu/aloeveramassage.webp",
  "Aromatherapy Massage": "/images/listmenu/aromatherapymassage.webp",
  "Back Massage": "/images/listmenu/backmassage.webp",
  "Bali Moon Gold Facial": "/images/listmenu/balimoongoldfacial.webp",
  "Bali Moon Tea Tree Facial": "/images/listmenu/balimoonteatreefacial.webp",
  "Balinese Massage": "/images/listmenu/balinesemassage.webp",
  "Biokos Facial": "/images/listmenu/biokosfacial.webp",
  "Body Scrub": "/images/listmenu/bodyscrub.webp",
  "Cellulite Massage": "/images/listmenu/cellulitemassage.webp",
  "Coconut Oil Massage": "/images/listmenu/coconutoilmassage.webp",
  "Couple Massage": "/images/listmenu/couplemassage.webp",
  "Cream Bath": "/images/listmenu/creambath.webp",
  "Deep Tissue Massage": "/images/listmenu/deeptissuemassage.webp",
  "Ear Candle": "/images/listmenu/earcandle.webp",
  Eyelash: "/images/listmenu/eyelash.webp",
  "Foot Massage": "/images/listmenu/footmassage.webp",
  "Foot Reflexology": "/images/listmenu/footreflexology.webp",
  "Four Hand Massage": "/images/listmenu/fourhandmassage.webp",
  "Head Massage": "/images/listmenu/headmassage.webp",
  "Herbal Massage": "/images/listmenu/herbalmassage.webp",
  "Hot Stone Massage": "/images/listmenu/hotstonemassage.webp",
  "Lymphatic Massage": "/images/listmenu/lymphaticmassage%20.webp",
  "Manicure Pedicure": "/images/listmenu/manicurepedicure.webp",
  "Organic Warm Candle Oil Massage": "/images/listmenu/organicwarmcandle.webp",
  "Shiatsu Massage": "/images/listmenu/shiatsumassage.webp",
  "Sport Massage": "/images/listmenu/sportmassage.webp",
  "Thai Massage": "/images/listmenu/thaimassage.webp",
  "Traditional Massage": "/images/listmenu/traditionalmassage.webp",
  Waxing: "/images/listmenu/waxing.webp",
};

const treatmentImageAliases = {
  "Balinese Massage - Relaxing": "Balinese Massage",
  "Creambath & Hair Mask": "Cream Bath",
  "Four Hand Warm Candle": "Organic Warm Candle Oil Massage",
  "Hair Cream Bath": "Cream Bath",
  "Sports Massage": "Sport Massage",
  "Traditional Massage - Strong": "Traditional Massage",
  "Virgin Cold-Press Coconut Oil Massage": "Coconut Oil Massage",
  "Warm Stone Massage": "Hot Stone Massage",
};

export function getListMenuImage(treatmentName, fallback) {
  if (treatmentName.startsWith("Couple ")) {
    return listMenuImages["Couple Massage"];
  }

  const imageName = treatmentImageAliases[treatmentName] || treatmentName;
  return listMenuImages[imageName] || fallback;
}
