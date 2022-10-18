module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        video: {
          field: "slug",
          references: "title",
        },
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
