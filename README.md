# BugBox

**BugBox** is an innovative educational platform dedicated to revolutionizing the way digital technology is taught in schools. Our mission is to simplify the digital technology curriculum for teachers while inspiring creativity, confidence, and courage in students through hands-on learning solutions. BugBox seamlessly integrates physical and digital teaching tools, allowing students to explore STEM concepts in an engaging and interactive manner. By fostering a learning environment where curiosity thrives and failure is seen as a stepping stone to discovery, BugBox aims to prepare students to tackle the challenges of the future.

## Prerequisites

To set up and run the BugBox project locally, you'll need the following tools installed on your system:

- **Node.js** (v14.x or higher): Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It’s required to run the development server and build scripts.
- **npm** (v6.x or higher) or **yarn** (v1.x or higher): These are package managers that help in managing the dependencies of the project.
- **Git**: Git is used for version control and allows you to clone the repository to your local machine.

## Repository Structure

The BugBox repository is organized as follows to ensure a clean and maintainable codebase:

- **src/components/**:

  - **Accordion**: A collapsible section used for organizing content into expandable panels. Ideal for FAQs or detailed information sections.
  - **Card**: A flexible container component used for displaying information in a structured and visually appealing manner. This component is highly reusable and can be customized through props to display different types of content such as reviews, educational tools, or resources.
  - **Comments**: A section dedicated to user feedback, allowing students and teachers to leave reviews and comments. This component is built upon the Card component to maintain consistency in design.
  - **Header**: The top section of the website, featuring the logo, navigation menu, and other key elements. It provides a consistent user experience across different pages.
  - **ImageList**: A grid or list of images showcasing educational tools, student projects, or other resources related to BugBox.
  - **Navbar**: A navigation bar that provides links to the primary sections of the website, such as Home, About, Contact, and Login pages.
  - **Organisations**: A dedicated section for displaying logos and information about organizations that are affiliated with or use BugBox.

- **src/pages/**:

  - **AboutPage**: Provides detailed information about BugBox, including its mission, history, and the story behind its creation.
  - **ContactPage**: Contains contact information and a form for users to reach out to the BugBox team with inquiries or support requests.
  - **LandingPage**: The main entry point of the website, designed to capture the attention of visitors and provide an overview of what BugBox offers. This page includes key elements like the hero section, introductory content, and calls to action.

- **public/**:

  - **index.html**: The main HTML template used by the React application.
  - **images/**: Contains static images used throughout the website, such as logos, icons, and educational tool images.
  - **favicon.ico**: The favicon displayed in the browser tab.

- **README.md**: This document, providing comprehensive instructions for setting up and understanding the BugBox project.

- **package.json**: Lists the project dependencies, scripts for running and building the project, and other metadata related to the project.

## Getting Started

To get the BugBox project up and running on your local machine, follow these steps:

1. **Clone the Repository:**

   Begin by cloning the BugBox repository from GitHub to your local machine:

   ```bash
   git clone https://github.com/your-username/bugbox.git
   ```

   Replace your-username with with the Github username.

### 2. Navigate to the Project Directory

After cloning the repository, navigate to the project directory using the `cd` command:

```bash
  cd bugbox
```

### 3. Install Project Dependencies

Using npm

```bash
npm install
```

using yarn

```bash
yarn install
```

## Contributing

Contributions are welcome! If you’d like to contribute to BugBox, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make the changes**.
4. **Commit your changes**:

```bash
  git commit -m 'Add new feature'
```

5. **Push to the branch**:

```bash
   git push origin feature-branch
```

6. **Open a Pull Request**

## Project Styling

To ensure readability, this project uses Tailwind and inline styles where tailwind classes are not adequate.
