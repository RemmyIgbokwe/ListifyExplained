## Navigation Folder

The `navigation` folder contains the configuration and setup for the navigation structure of the application. This folder includes the files for `BottomTab` and `StackNavigation`, which define the bottom tab navigation and stack navigation respectively. Together, these files manage the primary navigation flows within the app.

### Purpose

- **Organized Navigation**: Keeps the navigation setup modular and organized, making it easier to manage and extend.
- **Separation of Concerns**: Separates the logic for different types of navigation (bottom tab and stack) into distinct files, improving readability and maintainability.
- **Centralized Configuration**: Provides a central place to configure the navigation, making updates and changes more straightforward.

### Structure

The `navigation` folder typically includes:

- **BottomTab.js**: Defines the bottom tab navigator, including the tabs and their respective screens.
- **StackNavigation.js**: Defines the stack navigator, managing the stack of screens for a specific flow within the application.

### Example

Here’s an example of how the `navigation` folder might be structured:

```plaintext
navigation/
  ├── BottomTab.js
  ├── StackNavigation.js
```
