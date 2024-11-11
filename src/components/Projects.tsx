import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='bg-[#1C1C24] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10'>
      <ProjectCard
        title='Rock Paper Scissors'
        description='An interactive Rock Paper Scissors game built with JavaScript, HTML, and CSS. Players can choose between rock, paper, or scissors, and the game displays results for each round, including player and computer choices, scores, and the total rounds played. The game features a restart button to reset scores and rounds, providing a seamless user experience.'
        demo='https://mihawke.github.io/rock_paper_scissors/'
        status='completed'
        github='https://github.com/mihawke/rock_paper_scissors'
        technologies='JavaScript | HTML | CSS'
      />
      <ProjectCard
        title='Tic Tac Toe Game'
        description='This project is a simple browser-based implementation of the classic Tic Tac Toe game. The project showcases fundamental concepts in web development, including event handling, DOM manipulation, and responsive design.'
        demo='https://mihawke.github.io/tic_tac_toe/'
        status='completed'
        github='https://github.com/mihawke/tic_tac_toe'
        technologies='JavaScript | HTML | CSS'
      />
      <ProjectCard
        title='Sketchpad'
        description='A creative sketchpad application allowing users to draw by hovering over a grid of squares. Users can customize their drawing experience by toggling between random colors and black for a unique artistic effect.'
        demo='https://mihawke.github.io/sketchpad/'
        status='completed'
        github='https://github.com/mihawke/sketchpad'
        technologies='JavaScript | HTML | CSS'
      />
      <ProjectCard
        title='Calculator'
        description='This project is a functional calculator built with JavaScript, HTML, and CSS. This project showcases essential programming concepts including event handling, operator management, and mathematical functions, making it a great tool for practicing JavaScript fundamentals.'
        demo='https://mihawke.github.io/calculator/'
        status='completed'
        github='https://github.com/mihawke/calculator'
        technologies='JavaScript | HTML | CSS'
      />
      <ProjectCard
        title='Admin Dashboard'
        description='This project showcases a simple yet functional admin dashboard layout designe. It features a clean and modern interface with organized sections for navigation, anouncements, and projects. This project highlights fundamental web design principles and serves as a template for future development.'
        demo='https://mihawke.github.io/admin_dashboard/'
        status='ongoing'
        github='https://github.com/mihawke/admin_dashboard'
        technologies='HTML | CSS'
      />
      <ProjectCard
        title='Library'
        description='The Library application, built with JavaScript, HTML, and CSS, allows users to manage and display their personal book collection. It features a dynamic user interface where users can add books with details like cover image, title, author, pages, and reading status. The app utilizes an object constructor for book creation and dynamically updates the book list in the DOM, showcasing fundamental JavaScript concepts.'
        demo='https://mihawke.github.io/library/'
        status='completed'
        github='https://github.com/mihawke/library'
        technologies='JavaScript | HTML | CSS'
      />
      <ProjectCard
        title='Sign Up Form'
        description='A user-friendly sign-up form that features real-time validation for password confirmation. When a user enters their password, they can verify that it matches the confirmation field. The form is built using JavaScript for interactive elements, along with HTML and CSS for structure and styling.'
        demo='https://mihawke.github.io/sign_up_form/'
        status='completed'
        github='https://github.com/mihawke/sign_up_form'
        technologies='JavaScript | HTML | CSS'
      />

      <ProjectCard
        title='Homepage'
        description='This project is a simple and clean homepage built using HTML and CSS. The homepage includes sections such as a header, main content area, and footer, providing a structured foundation for further development.'
        demo='https://mihawke.github.io/homepage/'
        status='completed'
        github='https://github.com/mihawke/homepage'
        technologies='HTML | CSS'
      />
      
      <ProjectCard
        title='Movie Tracker'
        description='Developed a movie search application using React, fetching data from the OMDB API. The application allows users to search for movies by title and displays the results dynamically. '
        demo='https://movie-tracker-tau.vercel.app/'
        status='completed'
        github='https://github.com/mihawke/MovieTracker'
        technologies='React | OMDB API'
      />
      <ProjectCard
        title='Memory Card Game'
        description='The Memory Card Game is a fun and interactive React application that challenges players to match car images. The game features a scoring system where players earn points for each successful match while trying to avoid selecting the same card twice. With a clean and responsive design, this project showcases key React concepts, including state management and component rendering.'
        demo='https://memory-card-navy-pi.vercel.app/'
        status='completed'
        github='https://github.com/mihawke/memory_card'
        technologies='React | CSS'
      />
      <ProjectCard
        title='React Recorder'
        description='This project is an Audio Recorder with Speech Recognition built in React, allowing users to record audio while transcribing speech into text in real-time using the Web Speech API. It enables playback of recorded audio and displays transcribed text as the user speaks.'
        demo='https://react-recorder-gules.vercel.app/'
        status='completed'
        github='https://github.com/mihawke/ReactRecorder'
        technologies='Node.js | HTML | CSS'
      />

{/* /////////////////////////////////// */}


      <ProjectCard
        title='Basic Node Website'
        description='This project is a simple web server built using Node.js, demonstrating fundamental concepts of server-side programming. The server serves static HTML pages, including an index page, an about page, and a contact page, utilizing the built-in HTTP module. It handles different content types based on the requested file extensions and serves a custom 404 page for not found errors.'
        demo=''
        status='completed'
        github='https://github.com/mihawke/basic_node_website'
        technologies='Node.js | HTML | CSS'
      />

      <ProjectCard
        title='Carousel'
        description='This project showcases an image carousel implemented using JavaScript, HTML, and CSS. The carousel allows users to navigate through a series of images smoothly, utilizing next and previous buttons for intuitive controls. Ideal for showcasing images, products, or any content that benefits from a visual slideshow format.'
        demo=''
        status='ongoing'
        github='https://github.com/mihawke/carousel'
        technologies='JavaScript | HTML | CSS'
      />
      <ProjectCard
        title='CV Application'
        description="This project is a dynamic CV application built with React and CSS. It provides an interactive interface for users to input and manage their personal, educational, and professional information. This project demonstrates core React concepts such as component composition, state management, and event handling."
        demo=''
        status='completed'
        github='https://github.com/mihawke/cv_application'
        technologies='React | CSS'
      />
      <ProjectCard
        title='Inventory Application'
        description='This Inventory Application, built with JavaScript, EJS, and CSS, allows users to manage products through a robust Express.js backend. It supports CRUD operations and filtering by category, all while interfacing with a PostgreSQL database. The application employs parameterized queries for secure data handling and uses EJS for dynamic front-end rendering, demonstrating full-stack development concepts.'
        demo=''
        status='ongoing'
        github='https://github.com/mihawke/inventory_application'
        technologies='JavaScript | EJS | CSS | PostgreSQL'
      />
      <ProjectCard
        title='Members Only'
        description='The Members Only application is a Node.js-based web platform that utilizes Express and EJS for rendering dynamic content. It features user authentication with Passport.js, allowing members to securely log in and access exclusive content. The app is connected to a PostgreSQL database for data storage, managing user information and session data effectively.'
        demo=''
        status='ongoing'
        github='https://github.com/mihawke/members_only'
        technologies='Node.js | EJS | CSS | MongoDB'
      />
      <ProjectCard
        title='Mini Message Board'
        description='The Mini Message Board is a simple web application built with Node.js and EJS, allowing users to post and view messages. This project highlights fundamental web development concepts, including server-side rendering and template engines.'
        demo=''
        status='completed'
        github='https://github.com/mihawke/mini_message_board'
        technologies='Node.js | EJS | CSS'
      />
      <ProjectCard
        title='Restaurant Page'
        description='A dynamic restaurant webpage built using JavaScript, HTML, and CSS, optimized with Webpack for efficient asset management. This project showcases a clean, responsive design, featuring a customizable menu and interactive elements. Leveraging HtmlWebpackPlugin, it generates an HTML file that incorporates all necessary scripts and styles, ensuring a smooth user experience.'
        demo=''
        status='completed'
        github='https://github.com/mihawke/restaurant_page'
        technologies='JavaScript | HTML | CSS | Webpack'
      />

      <ProjectCard
        title='Shopping Cart'
        description='A React-based shopping cart application that allows users to browse products from a fake store API. Users can view product details, add items to their cart, and maintain a shared cart state. The application features a clean and responsive design using CSS, making it easy to navigate and interact with products.'
        demo=''
        status='completed'
        github='https://github.com/mihawke/shopping_cart'
        technologies='React | CSS | API'
      />

      <ProjectCard
        title='Theme Park'
        description='Theme Park is a React-based project designed for testing various themes and switching between them seamlessly. It allows users to experience different visual styles and layouts, making it ideal for developers and designers looking to explore design options. The project utilizes Tailwind CSS for styling, ensuring a modern and responsive design approach.'
        demo=''
        status='ongoing'
        github='https://github.com/mihawke/theme_park'
        technologies='React | Tailwind CSS'
      />
      <ProjectCard
        title='Weather App'
        description='The Weather App provides real-time weather information for various locations, utilizing the Visual Crossing Weather API to fetch current weather conditions. Users can enter a location to receive up-to-date details, including temperature, weather condition, and time of the last update. The app features an intuitive interface and efficient loading, making it easy to stay informed about the weather.'
        demo=''
        status='completed'
        github='https://github.com/mihawke/weather_app'
        technologies='JavaScript | HTML | CSS | Webpack | API'
      />
      <ProjectCard
        title='Chat Application Interface'
        description='Creating a web-based WhatsApp clone using React for the frontend. Building responsive and intuitive user interfaces to replicate the WhatsApp experience seamlessly across devices.'
        demo=''
        status='ongoing'
        github='https://github.com/mihawke/ChatApplication'
        technologies='React | Tailwind CSS'
      />
      <ProjectCard
        title='React Designs'
        description='Continuously developing an ongoing project featuring a collection of landing page templates and designs built using React and Tailwind CSS, ensuring responsiveness across various devices.
Crafting visually appealing and user-friendly interfaces that showcase the versatility of Tailwind CSS for rapid prototyping and styling.'
        demo=''
        status='ongoing'
        github='https://github.com/mihawke/ReactDesign'
        technologies='React | Tailwind CSS'
      />
      <ProjectCard
        title='Saas Dashboard'
        description="Crafting a SaaS dashboard and its components using React with Tailwind CSS. 
Leveraging the flexibility and utility-first approach of Tailwind CSS to rapidly design and style dashboard elements. Implementing responsive layouts and components to ensure seamless user experiences across devices.
Integrating data visualization libraries and interactive elements to enhance the dashboard's functionality and user engagement. 
"
        demo=''
        status='ongoing'
        github='https://github.com/mihawke/ReactDash'
        technologies='React | Tailwind CSS'
      />
      <ProjectCard
        title='MERN Stack Todos Application '
        description='Designed and developed a MERN stack web application for task management, utilizing MongoDB, Express.js, React, and Node.js.
Developed server-side logic using Node.js and Express.js to handle API requests and interact with the MongoDB database.
'
        demo=''
        status='completed'
        github='https://github.com/mihawke/MERN-Todos'
        technologies='React | MongoDB | Express.js | Node.js'
      />
      <ProjectCard
        title='Form Builder'
        description='Developing a dynamic form builder application using React, allowing users to create customizable forms for various purposes.'
        demo=''
        status='ongoing'
        github='https://github.com/mihawke/FormBuilder'
        technologies='React | CSS'
      />
      <ProjectCard
        title='Expense Tracker'
        description='Developed an Expense Tracker application utilizing ReactJs and React Bootstrap components for enhanced UI/UX, optimizing user interaction and navigation within the application.'
        demo=''
        status='completed'
        github='https://github.com/mihawke/Expense-Tracker'
        technologies='React | React Bootstrap | CSS'
      />
      <ProjectCard
        title='To Do List'
        description='Developed a dynamic To Do List application that allows users to create, edit, and delete tasks efficiently. Implemented features such as task categorization, deadline setting, and completion tracking, enhancing user productivity. Utilized JavaScript for interactive functionality and Webpack for optimized asset bundling, ensuring fast load times and smooth performance.'
        demo=''
        status='completed'
        github='https://github.com/mihawke/to_do_list'
        technologies='JavaScript | HTML | CSS'
      />
    </div>
  );
};

export default Projects;
