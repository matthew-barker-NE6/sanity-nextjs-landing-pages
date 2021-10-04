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
                  buildHookId: '615ad6959826037176998e0e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-va21e7uj',
                  apiId: '80c5cfe9-259c-4afa-b208-5be444184196'
                },
                {
                  buildHookId: '615ad69620489c96c033e8d0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ij37yiqf',
                  apiId: '5757077d-7af0-417b-a44a-cd4de0d9611b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matthew-barker-NE6/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ij37yiqf.netlify.app', category: 'apps'}
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
