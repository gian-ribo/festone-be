base url: https://festone-be.herokuapp.com/

API:

1. This API insert a new comment.

   - Accept:

     - "name" is optional field to store the name of author;
     - "text" is required field to store comment.

   - Method: POST
   - Path: /api/comments
   - Header: Content-Type: application/json
   - Request:
     - "name": "string",
     - "text": "string"
   - Response:
     - id: integer

example:
POST: https://festone-be.herokuapp.com/api/comments

    Header: Content-Type: application/json
    Request:
    {
      "name": "Gico",
      "text": "La barba di gico"
    }
    Response:
    {
      "id": 15
    }

2. This API retrieve list of all comments.

   - Accept:

     - "name" is optional field to store the name of author;
     - "text" is required field to store comment.

   - Method: GET
   - Path: /api/comments
   - Response: array of
     - id: integer
     - name: string
     - text: string
     - createddate: timestamp

example:
GET: https://festone-be.herokuapp.com/api/comments

    [
      {
        "id": 4,
        "name": "Gianluca",
        "text": "Prova 1",
        "createddate": 1661344702921
      },
      {
        "id": 5,
        "name": "Gico",
        "text": "Prova 2",
        "createddate": 1661344714088
      }
    ]

3. This API retrieve list of all comments.

   - Accept:

     - "name" is optional field to store the name of author;
     - "text" is required field to store comment.

   - Method: GET
   - Path: /api/comments/:id
   - Path Parameters:
     - id: integer
   - Response:
     - id: integer
     - name: string
     - text: string
     - createddate: timestamp

example:
GET: https://festone-be.herokuapp.com/api/comments/4

    {
      "id": 4,
      "name": "Gianluca",
      "text": "Prova 1",
      "createddate": 1661344702921
    }
