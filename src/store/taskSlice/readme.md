## Store Folder

The `store` folder contains the Redux store configuration and slice reducers for managing the application's state. This folder includes the `taskSlice` and `BottomSheetSlice` for handling specific parts of the state, as well as the `reduxStore` which sets up the Redux store.

### Purpose

- **State Management**: Provides a centralized and consistent state management solution for the application using Redux.
- **Modular Reducers**: Organizes state logic into slices, making it easier to manage and scale the state as the application grows.
- **Configuration**: Sets up the Redux store with middleware and combines the slice reducers.

### Structure

The structure of the `store` folder typically includes:

- **taskSlice.js**: Defines the state and reducers for tasks.
- **BottomSheetSlice.js**: Defines the state and reducers for managing the bottom sheet.
- **reduxStore.js**: Configures the Redux store, combining the slices and applying middleware.
