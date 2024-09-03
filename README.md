## Running the Project

Run the project via:

```bash
docker-compose up --build
```

The server will start on http://localhost:3000

## Endpoints

**/api/annotations**  
    POST
    ```json  
    {
        "label": "label",
        "imageId": *"66d5f20b3a8ddba443ee11c3"*, **You MUST use this imageId**
        "maskData": *"2x0,8x1,5x0"*, **Follow flattened RLE mask format**
        "annotator": "user"
    }
    ```
    Creates a new annotation  

**/api/annotations/search**  
    GET  
    Query with id, label, or annotator  
    Retrieves annotations by id, label, or annotator  

**/api/annotations/rank**  
    GET  
    Query with annotationId  
    Returns the rank of the specified annotation relative to others in the same image