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
                    "636efb55524c8f72cce084da",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-mp6evfki",
                  apiId: "5e218bc6-e5da-4098-ac0c-b2ddf7c98712",
                },
                {
                  buildHookId: "636efb55f5116b7458a0addc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-d2gsm2dp",
                  apiId: "13ebadd1-9164-47e3-8a1e-3b4aa4820fe2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/iryek219/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-d2gsm2dp.netlify.app",
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
