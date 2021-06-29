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
                    "60db09e9684b69b191d93abc",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hd5miray",
                  apiId: "1f6ef286-d418-4f8e-859c-5d188803b43f",
                },
                {
                  buildHookId: "60db09e96fcc81b0806e29fc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-t5kh2jf1",
                  apiId: "f5a9a937-d206-4640-9e2e-f5f833437964",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/osaxon/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-t5kh2jf1.netlify.app",
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
