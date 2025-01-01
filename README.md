 Login and Signup React Native App

This project is a React Native application with two screens: Login and Signup. It implements basic user authentication features such as form validation, password strength checking, and a "Remember Me" functionality using AsyncStorage.

 1. How to Run the Project

 Prerequisites:
1. Node.js: Ensure you have Node.js installed. You can download it from [Node.js Official Website](https://nodejs.org/).
2. React Native CLI: Install React Native CLI globally using:
   ```bash
   npm install g reactnativecli
   ```
3. Android/iOS Emulator or a Physical Device.
4. Dependencies: Install all required dependencies by running:
   ```bash
   npm install
   ```

 Steps:
1. Clone this repository to your local machine:
   ```bash
   git clone <repositoryurl>
   ```
2. Navigate to the project directory:
   ```bash
   cd <projectfolder>
   ```
3. Start the Metro bundler:
   ```bash
   npm start
   ```
4. Run the app on an emulator or device:
    For Android:
     ```bash
     npm run android
     ```
    For iOS:
     ```bash
     npm run ios
     ```



 2. Design Choices Made

 (a) UI Design:
 The UI was designed with simplicity in mind, providing clear form inputs for email, password, and name fields.
 Buttons and error messages are styled to be intuitive and userfriendly.
 A "Remember Me" switch is included to enhance the login experience.

 (b) Validation:
 Form validation is implemented using Formik and Yup to ensure correct input formats:
   Email must follow a valid format.
   Password must be at least 6 characters long.
   The signup form includes a confirmation password field to ensure userprovided passwords match.

 (c) Password Strength Indicator:
 The Signup screen includes a password strength indicator that categorizes the entered password as Weak, Medium, or Strong based on its length.
 The indicator uses color coding (Red for Weak, Orange for Medium, Green for Strong) for better UX.

 (d) Navigation:
 Navigation is implemented using React Navigation with two screens:
  1. Login Screen: The default screen.
  2. Signup Screen: Accessible from the Login screen.

 (e) Data Persistence:
 The "Remember Me" functionality uses AsyncStorage to persist the user's email if selected. This allows users to skip entering their email on subsequent visits.



 3. Assumptions and Limitations

 Assumptions:
1. Mock User Authentication:
    A mock user object is used to validate credentials during login:
     ```javascript
     const mockUser = {
       email: 'user@example.com',
       password: 'password123',
     };
     ```
    Replace this with a real authentication API in a production environment.
2. Password Strength Check:
    The password strength checker evaluates passwords solely based on length, not complexity (e.g., special characters, numbers).

 Limitations:
1. No Backend Integration:
    This app does not include backend integration for user authentication. Add API endpoints for realworld usage.
2. No Tokenbased Authentication:
    The "Remember Me" feature only saves the email, not session tokens. Tokenbased authentication is recommended for secure logins.
3. Limited Error Handling:
    Error handling is basic and does not cover scenarios like network failures or serverside validation.
4. Platformspecific Testing:
    The app is designed for crossplatform use but has been primarily tested on Android. Minor adjustments may be needed for iOSspecific issues.

Screenshots

![WhatsApp Image 2025-01-01 at 17 26 15_2aaea267](https://github.com/user-attachments/assets/b9929f34-1cfe-4439-b769-1cd7ba1537eb)
![WhatsApp Image 2025-01-01 at 17 26 15_ef524d9b](https://github.com/user-attachments/assets/96b72e97-38a2-4362-9aa6-090bfe196c94)
