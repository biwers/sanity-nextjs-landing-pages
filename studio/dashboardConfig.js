export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60edaf7116f6563fb1506b19',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f9o5x43v',
                  apiId: 'a4987144-384c-4bd7-87ba-72269865f7db'
                },
                {
                  buildHookId: '60edaf71a86e5761ed18cfbf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kfee3x21',
                  apiId: 'b51026ad-f5c4-45a0-93b2-dd9b02a14246'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/biwers/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kfee3x21.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
