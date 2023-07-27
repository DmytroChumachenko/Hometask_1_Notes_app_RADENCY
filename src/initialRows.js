export const ROWS = [{
      main: 'Task',
      image: '../image/task.png',
      name: 'Shopping list',
      created: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
      category: 'Task',
      content: 'Tomatoes, bread',
      dates: '',
      icons: ['../image/edit.png', '../image/archive.png', '../image/delete.svg']
    },
    {
      main: 'Random Thought',
      image: '../image/thinking-male.png',
      name: 'theory of human',
      created: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
      category: 'Random Thought',
      content: 'the evolution of primates which was known all these years',
      dates: '',
      icons: ['../image/edit.png', '../image/archive.png', '../image/delete.svg']
    },
    {
      main: 'Idea',
      image: '../image/idea.png',
      name: 'New feature',
      created: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
      category: 'Idea',
      content: 'implement new idea',
      dates: '',
      icons: ['../image/edit.png', '../image/archive.png', '../image/delete.svg']
    }
  ]
