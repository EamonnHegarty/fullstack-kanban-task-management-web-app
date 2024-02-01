const boards = [
  {
    boardName: "Platform Launch",
    tasks: [
      {
        taskTitle: "Finalize UI/UX designs",
        taskDescription:
          "Complete the design adjustments based on the latest user feedback and prepare the final UI/UX assets for development.",
        status: "to do",
        subtasks: [
          {
            subtaskTitle: "Integrate user feedback on dashboard design",
            completed: false,
          },
          {
            subtaskTitle:
              "Update color scheme to match new branding guidelines",
            completed: false,
          },
        ],
      },
      {
        taskTitle: "Develop frontend and backend",
        taskDescription:
          "Implement the frontend and backend functionalities as per the finalized specifications.",
        status: "in progress",
        subtasks: [
          {
            subtaskTitle: "Set up authentication and user management",
            completed: true,
          },
          {
            subtaskTitle: "Implement dashboard data visualization features",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    boardName: "Marketing Plan",
    tasks: [
      {
        taskTitle: "Social media campaign",
        taskDescription:
          "Launch a social media campaign to increase brand awareness and engagement prior to product launch.",
        status: "to do",
        subtasks: [
          {
            subtaskTitle: "Create campaign content calendar",
            completed: false,
          },
          {
            subtaskTitle: "Design promotional graphics and videos",
            completed: false,
          },
        ],
      },
      {
        taskTitle: "Email marketing",
        taskDescription:
          "Design and send a series of email newsletters to our subscriber list to build anticipation for the launch.",
        status: "to do",
        subtasks: [
          {
            subtaskTitle: "Segment email list for targeted messaging",
            completed: false,
          },
          {
            subtaskTitle: "Draft email content for the pre-launch series",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    boardName: "Road Map",
    tasks: [
      {
        taskTitle: "Q1-Q2 feature planning",
        taskDescription:
          "Outline the key features and updates planned for the first half of the year.",
        status: "to do",
        subtasks: [
          {
            subtaskTitle: "Gather feature requests from customer feedback",
            completed: false,
          },
          {
            subtaskTitle: "Prioritize features based on strategic goals",
            completed: false,
          },
        ],
      },
      {
        taskTitle: "Research and development",
        taskDescription:
          "Initiate R&D projects for innovative features to be included in future releases.",
        status: "planned",
        subtasks: [
          {
            subtaskTitle: "Explore AI integration possibilities",
            completed: false,
          },
          {
            subtaskTitle:
              "Conduct a feasibility study for blockchain-based features",
            completed: false,
          },
        ],
      },
    ],
  },
];

export { boards };
