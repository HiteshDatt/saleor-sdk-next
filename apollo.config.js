module.exports = {
  client: {
    includes: ["src/**/*.ts"],
    name: "sdk",
    service: {
      url: "https://farzistoreapi.farziengineer.co/graphql/?source=website",
      name: "saleor",
    },
  },
};
