# Use a Java image
FROM openjdk:17-jdk

# Set the working directory
WORKDIR /app

# Copy the Spring Boot JAR file
COPY target/*.jar app.jar

# Expose the port Spring Boot runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
