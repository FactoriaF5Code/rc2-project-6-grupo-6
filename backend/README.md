# Trooking API

This API implements the following methods

| Method | Path | Comments |
|------- | ----| ---------|
| GET | /api/hotels | returns the existing hotels |
| GET | /api/bookings | returns the existing bookings |
| POST | /api/bookings | allows to create a new booking. Example request body: `{ "hotelId": 2, "entryDay": "2024-05-01", "exitDay": "2024-05-03" }` |

It's recommended to launch the server (port 8080 by default) and then test the API using Postman or other similar tool.


## Setup and run

This project uses Java 17 or higher.

Use the maven wrapper to run the server:

```
./mvnw spring-boot:run
```

On windows, run: 

```
mvnw.cmd spring-boot:run
```

## Running the tests

In order to run the included tests, do: 

```
./mvnw test
```


### Troubleshooting

- When using Visual Studio Code, you may want to update your settings with the following static imports for Java:

```
//...
"java.completion.favoriteStaticMembers": [
        "org.junit.Assert.*",
        "org.junit.Assume.*",
        "org.junit.jupiter.api.Assertions.*",
        "org.junit.jupiter.api.Assumptions.*",
        "org.junit.jupiter.api.DynamicContainer.*",
        "org.junit.jupiter.api.DynamicTest.*",
        "org.hamcrest.MatcherAssert.*",
        "org.mockito.Mockito.*",
        "org.mockito.ArgumentMatchers.*",
        "org.mockito.Answers.*",
        // SpringBoot Stuff
        "org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*",
        "org.springframework.test.web.servlet.result.MockMvcResultMatchers.*"
    ]
//...
```
