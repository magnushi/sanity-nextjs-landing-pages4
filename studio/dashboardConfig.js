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
                  buildHookId: '5f3f6da80cca8f2188eb4447',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-4-studio-umbha1g7',
                  apiId: '7a72b3b2-1278-4ddb-9d41-5ab07c68b816'
                },
                {
                  buildHookId: '5f3f6da8ec5696188a0f74f2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-4-web',
                  apiId: '2f4da8d0-6e8c-4fcc-b299-a3a1949a0ee8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-nextjs-landing-pages4',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-4-web.netlify.app', category: 'apps'}
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
