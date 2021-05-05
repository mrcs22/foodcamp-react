const fakeHttpClient = {
  GET: (fakeUrl) => {
    const requestedData = fakeUrl.split("/")[1].replace(".com", "");

    return data[`${requestedData}`];
  },
};

const data = {
  desserts: [
    {
      image: "./img/waffle.jpg",
      title: "Waffle",
      description: "Waffle simples",
      price: " R$ 10,99",
    },
    {
      image: "./img/pie.jpg",
      title: "Torta",
      description: "Torta de morango",
      price: " R$ 15,00",
    },
    {
      image: "./img/chocolateCake.jpg",
      title: "Bolo",
      description: "Bolo de chocolate",
      price: " R$ 12,50",
    },
    {
      image: "./img/creamCake.jpg",
      title: "Pavê",
      description: "Pavê de cupuaçu",
      price: " R$ 14,99",
    },
  ],
  drinks: [
    {
      image: "./img/icedTea.jpg",
      title: "Chá gelado",
      description: "Copo 500ml",
      price: "R$ 05,50",
    },
    {
      image: "./img/juice.jpg",
      title: "Suco",
      description: "Copo 400ml",
      price: "R$ 08,50",
    },
    {
      image: "./img/soda.jpg",
      title: "Refrigerante",
      description: "Copo 350ml",
      price: "R$ 04,90",
    },
    {
      image: "./img/wine.jpg",
      title: "Vinho",
      description: "Taça 175ml",
      price: "R$ 10,90",
    },
  ],
};

export default fakeHttpClient;
