export default {
  widgets: [
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
                  buildHookId: '5f39432ed56b5bd3bdb42342',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-puj2c54d',
                  apiId: 'df1ab967-1b07-43c0-8bf3-4dba9a2adec2'
                },
                {
                  buildHookId: '5f39432ec3f45fc2c3e0dc90',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-av8ws2of',
                  apiId: 'f79d01a6-bd5a-4b01-92a3-c0c62f1f01df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pbuitvydas/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-av8ws2of.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
