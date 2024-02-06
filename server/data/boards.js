const boards = [
  {
    id: 1,
    boardName: "Platform Launch",
    columns: [
      {
        id: 1,
        columnName: "Todo",
        tasks: [
          {
            id: 1,
            taskTitle: "Finalize UI/UX designs",
            taskDescription:
              "Complete the design adjustments based on the latest user feedback and prepare the final UI/UX assets for development.",
            subTasks: [
              {
                id: 1,
                subtaskTitle: "Integrate user feedback on dashboard design",
                completed: false,
              },
              {
                id: 2,
                subtaskTitle:
                  "Update color scheme to match new branding guidelines",
                completed: false,
              },
            ],
          },
          {
            id: 2,
            taskTitle: "Develop frontend and backend",
            taskDescription:
              "Implement the frontend and backend functionalities as per the finalized specifications.",
            subTasks: [
              {
                id: 3,
                subtaskTitle: "Set up authentication and user management",
                completed: true,
              },
              {
                id: 4,
                subtaskTitle: "Implement dashboard data visualization features",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        columnName: "In Progress",
        tasks: [], // Assuming no tasks here for demonstration purposes
      },
      {
        id: 3,
        columnName: "Completed",
        tasks: [], // Assuming no tasks here for demonstration purposes
      },
    ],
  },
  {
    id: 2,
    boardName: "Marketing Plan",
    columns: [
      {
        id: 4,
        columnName: "Todo",
        tasks: [
          {
            id: 3,
            taskTitle: "Social media campaign",
            taskDescription:
              "Launch a social media campaign to increase brand awareness and engagement prior to product launch.",
            subTasks: [
              {
                id: 5,
                subtaskTitle: "Create campaign content calendar",
                completed: false,
              },
              {
                id: 6,
                subtaskTitle: "Design promotional graphics and videos",
                completed: false,
              },
            ],
          },
          {
            id: 4,
            taskTitle: "Email marketing",
            taskDescription:
              "Design and send a series of email newsletters to our subscriber list to build anticipation for the launch.",
            subTasks: [
              {
                id: 7,
                subtaskTitle: "Segment email list for targeted messaging",
                completed: false,
              },
              {
                id: 8,
                subtaskTitle: "Draft email content for the pre-launch series",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: 5,
        columnName: "In Progress",
        tasks: [], // Assuming no tasks here for demonstration purposes
      },
      {
        id: 6,
        columnName: "Completed",
        tasks: [], // Assuming no tasks here for demonstration purposes
      },
    ],
  },
  {
    id: 3,
    boardName: "Road Map",
    columns: [
      {
        id: 7,
        columnName: "Todo",
        tasks: [
          {
            id: 5,
            taskTitle: "Q1-Q2 feature planning",
            taskDescription:
              "Outline the key features and updates planned for the first half of the year.",
            subTasks: [
              {
                id: 9,
                subtaskTitle: "Gather feature requests from customer feedback",
                completed: false,
              },
              {
                id: 10,
                subtaskTitle: "Prioritize features based on strategic goals",
                completed: false,
              },
            ],
          },
          {
            id: 6,
            taskTitle: "Research and development",
            taskDescription:
              "Initiate R&D projects for innovative features to be included in future releases.",
            subTasks: [
              {
                id: 11,
                subtaskTitle: "Explore AI integration possibilities",
                completed: false,
              },
              {
                id: 12,
                subtaskTitle:
                  "Conduct a feasibility study for blockchain-based features",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: 8,
        columnName: "In Progress",
        tasks: [], // Assuming no tasks here for demonstration purposes
      },
      {
        id: 9,
        columnName: "Completed",
        tasks: [], // Assuming no tasks here for demonstration purposes
      },
    ],
  },
];

export { boards };
