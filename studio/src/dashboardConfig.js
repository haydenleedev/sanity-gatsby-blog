export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f83f00e0335522cff11cd8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6obhfmph",
                  apiId: "1d362ab5-b0c1-4491-8fb5-5dac2ce389c4",
                },
                {
                  buildHookId: "60f83f003d354921975944b4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-qttc42ze",
                  apiId: "6e7423fb-f1b9-4ab6-a7ff-5651d37c92a8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/haydenleedev/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-qttc42ze.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
