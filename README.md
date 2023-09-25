# Dynamic forms application
By Andres Camacho

## Description 

SPA Responsive web application developed using React, which parses a JSON file and presents each data point as a field within an information collection form.

## How to run

```shell
npm install
npm run
```

### Run with another JSON file

````shell
npm start -- --json=jsonFile.json
````

## How to test

```shell
npm test
```


## Simple JSON file structure example
```json
[
  [
    {
      "id": "firstName",
      "placeholder": "First Name",
      "required": true,
      "type": "text"
    },
    {
      "id": "lastName",
      "placeholder": "Last Name",
      "required": true,
      "type": "text"
    }
  ],
  {
    "id": "Email",
    "required": true,
    "type": "text"
  }
]
```


