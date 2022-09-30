const { faker } = require("@faker-js/faker");

async function seedVideosCollection() {
  const numberOfRecordsToCreate = 15;

  for (let i = 0; i < numberOfRecordsToCreate; i++) {
    await strapi.entityService.create("api::article.article", {
      data: {
        description: faker.lorem.sentence(),
        url: faker.internet.url(),
        meta: {
          title: faker.lorem.words(5),
        },
      },
    });
  }
}

module.exports = { seedVideosCollection };
