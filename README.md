CineVault - Movie Library Application

 Project Overview  
CineVault is a full-stack Movie Library Application built using Spring Boot, MySQL, and Vite + React. It allows users to browse, search, and manage movies across different genres. Users can add movies to their wishlist, while admins have the ability to manage the movie database.  

 Instructions 

 1. Download and Setup the Project  
- Clone the repository using:  
  git clone <repository-url>
  cd CineVault
  
- The project contains two folders:  
  - backend/ (Spring Boot application)  
  - frontend/ (Vite + React application)  

 2. Backend Setup (Spring Boot)
- Open the backend folder in IntelliJ IDEA or Spring Tool Suite (STS).  
- Ensure MySQL is running and create the database: MovieLibrary.  
- Update application.properties with your MySQL credentials.  
- Install dependencies and run the backend:  

  mvn clean install
  mvn spring-boot:run
  
- The backend will be available at: http://localhost:8081/  

 3. Frontend Setup (Vite + React)
- Open the frontend folder in VS Code.  
- Install dependencies:  
 
  npm install
 
- Start the frontend:  
  
  npm run dev
  
- The application will run at: http://localhost:5173/  



 Database Tables  
The following tables need to be created in the MovieLibrary database:  

1. sci_fi_movies  
2. comedy_movies  
3. drama_movies  
4. thriller_movies  
5. action_movies  

Each table should have the following attributes:  

- id (Primary Key)  
- title  
- genre  
- release_year  
- duration  
- language  
- image_url  
- trailer  

---

 Running the Application
1. Start MySQL and ensure the database is created.  
2. Run Spring Boot Backend:  
  
   mvn spring-boot:run
   
3. Run Vite Frontend:  
  
   npm run dev
   
4. Open http://localhost:5173/ in the browser and explore CineVault! 🎬  


Result:
![image](https://github.com/user-attachments/assets/3127fa49-0f4a-4186-845e-6a51be3ee369)
![image](https://github.com/user-attachments/assets/ede88e2f-6c67-49ce-8c71-250b429b9d58)
![image](https://github.com/user-attachments/assets/23a14579-3dc9-45dc-937d-60c098aced94)
![image](https://github.com/user-attachments/assets/0a3c08c5-613e-40e8-8b9e-7a20febbf77e)
![image](https://github.com/user-attachments/assets/fc59f796-464c-44ba-9d86-1efcc7aa462c)
![image](https://github.com/user-attachments/assets/f13061b5-66e1-430a-a3cd-fbb4cd7710d3)
![image](https://github.com/user-attachments/assets/4a3db050-3c69-47a6-a009-ce64380300a3)




