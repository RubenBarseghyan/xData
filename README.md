# Pokemon Info - Next.js 14 Application

This is a **Pokemon Info** application built using **Next.js**, **React**, and **Chakra UI**. It allows users to search for Pokémon, view their details, and navigate between Pokémon pages. The project uses authentication, both **server-side** and **client-side** components, and the **Next.js App Router** for modern routing and data fetching.

## Features

- **Search Pokemon**: Users can search for their favorite Pokemon by name.
- **View Pokemon Details**: Detailed information on each Pokémon including stats and types.
- **Load More Pokemon**: Lazy loads more Pokemon data using a "Load More" button.
- **Authentication**: Protected routes with login authentication using **NextAuth.js**. Login credentials: 
  - **Username**: `xDataGroup`
  - **Password**: `xDataGroup`
- **Server and Client Components**: Utilizes Next.js **App Router** for server-side and client-side components.
- **Middleware for Authentication**: Ensures routes are protected by redirecting unauthorized users to the login page.
- **Server-Side Rendering (SSR)**: Uses SSR for fetching Pokemon data on the server side to optimize loading performance.
- **Redux for State Management**: Manages state using Redux for Pokemon data and search functionality.
- **Chakra UI for Styling**: Uses Chakra UI components for a responsive and accessible interface.
