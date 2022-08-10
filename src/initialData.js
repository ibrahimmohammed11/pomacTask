import { v4 as uuidv4 } from "uuid";

const initialData = [
  {
    id: uuidv4(),
    title: "Tasks",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn JavaScript",
        img: "https://miro.medium.com/max/1400/1*-2VDe74tjLJnng9k9g6Cqg.jpeg",
        desc:
          "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web.",
        assigned: [
          {
            firstName: "Mohammed",
            avatar:
              "https://icon-library.com/images/avatar-icon/avatar-icon-27.jpg",
          },
          {
            firstName: "Sara",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0-4Ry22Bx8q_n4CXoXIUp2qmIsNoxMOc3w&usqp=CAU",
          },
        ],
        date: "25/8/2022",
      },
      {
        id: uuidv4(),
        title: "Learn Git",
        desc:
          "Git is software for tracking changes in any set of files, usually used for coordinating work among",
        assigned: [
          {
            firstName: "Ahmed",
            avatar:
              "https://static.vecteezy.com/system/resources/thumbnails/009/280/313/small_2x/office-man-face-illustration-design-free-vector.jpg",
          },
          {
            firstName: "Sara",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0-4Ry22Bx8q_n4CXoXIUp2qmIsNoxMOc3w&usqp=CAU",
          },
        ],
        date: "20/8/2022",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "In progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn CSS",
        img: "https://www.wisdomgeek.com/wp-content/uploads/2021/10/css.png",
        desc:
          "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
        assigned: [
          {
            firstName: "Mohammed",
            avatar:
              "https://icon-library.com/images/avatar-icon/avatar-icon-27.jpg",
          },
          {
            firstName: "Sara",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0-4Ry22Bx8q_n4CXoXIUp2qmIsNoxMOc3w&usqp=CAU",
          },
        ],
        date: "20/8/2022",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Done",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn HTML",
        img:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220630132824/HTML-Full-Form.jpg",
        desc:
          "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. ",
        assigned: [
          {
            firstName: "Nagham",
            avatar:
              "https://iconape.com/wp-content/png_logo_vector/avatar-11.png",
          },
          {
            firstName: "Ibrahim",
            avatar:
              "https://iconape.com/wp-content/png_logo_vector/avatar-4.png",
          },
        ],
        date: "9/8/2022",
      },
    ],
  },
];

export let mainUsers = [
  {
    firstName: "Ahmed",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/009/280/313/small_2x/office-man-face-illustration-design-free-vector.jpg",
  },
  {
    firstName: "Ibrahim",
    avatar: "https://iconape.com/wp-content/png_logo_vector/avatar-4.png",
  },
  {
    firstName: "Mohammed",
    avatar: "https://icon-library.com/images/avatar-icon/avatar-icon-27.jpg",
  },
  {
    firstName: "Sara",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/002/285/517/non_2x/woman-icon-avatar-logo-design-vector.jpg",
  },
  {
    firstName: "Nagham",
    avatar: "https://iconape.com/wp-content/png_logo_vector/avatar-11.png",
  },
];

export const defaultUser = {
  firstName: "Ibrahim",
  secName: "Moh",
  role: "Admin",
  avatar: "https://iconape.com/wp-content/png_logo_vector/avatar-4.png",
};

export default initialData;
