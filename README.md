
# Vue.js Job Board Component

This Vue.js component represents a job board that fetches job data from an external API and displays it in a card-based layout. The jobs are loaded progressively as the user scrolls down the page.

## Table of Contents

-   [Overview](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#overview)
-   [Features](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#features)
-   [Installation](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#installation)
-   [Usage](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#usage)
-   [Component Structure](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#component-structure)
-   [Methods](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#methods)
-   [Event Handling](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#event-handling)
-   [Styling](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#styling)
-   [Dependencies](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#dependencies)
-   [Contributing](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#contributing)
-   [License](https://chat.openai.com/c/c4e9a572-34c6-412e-8838-12d153bbbe5f#license)

## Overview

The job board component fetches job data from the specified API endpoint (`https://web-scraping-jobs-production.up.railway.app/`) using Axios. It displays job details such as title, company, location, and creation date in a card layout. Additional job details can be viewed by clicking the "Learn More" button, which opens the job link in a new tab.

## Features

-   Progressive loading of jobs as the user scrolls down the page.
-   Display of job details in a card layout.
-   Responsive design for optimal viewing on different screen sizes.
-   Clickable "Learn More" button to access additional job details.

## Installation

Ensure that you have Vue.js installed. You can then include this component in your project by copying the provided code.

bashCopy code

`# Install dependencies
npm install axios` 

## Usage

Include the job board component in your Vue.js project and customize it as needed.

htmlCopy code

`<template>
  <!-- Include the job board component -->
  <JobBoardComponent />
</template>

<script> import JobBoardComponent from '@/components/JobBoardComponent.vue';

export default {
  components: {
    JobBoardComponent,
  },
}; </script>` 

## Component Structure

The component structure consists of a Vue.js template, script, and style sections. The template defines the layout of the job board, the script contains the component logic, and the style provides additional styling.

## Methods

-   `handleScroll`: Monitors the user's scroll position and loads additional jobs when reaching the bottom of the page.
-   `loadMore`: Increases the number of loaded items when called.
-   `formatCreatedAt`: Formats the job creation date.

## Event Handling

The component utilizes the `window` scroll event to trigger the loading of additional jobs when the user scrolls down.

## Styling

The component uses Vuetify for styling. You can customize the styles to match your project's design.

## Dependencies

-   [Vue.js](https://vuejs.org/)
-   [Axios](https://axios-http.com/)

## Contributing

Feel free to contribute to the development of this component. Fork the project, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/c/LICENSE) file for details.
