## Running the Project

Run the project via:

```bash
docker-compose up --build
```

The server will start on http://localhost:3000

## Endpoints

/api/annotations  
    POST  
    Creates a new annotation  

/api/annotations/search  
    GET  
    Query with id, label, or annotator  
    Retrieves annotations by id, label, or annotator  

/api/annotations/rank  
    GET  
    Query with annotationId  
    Returns the rank of the specified annotation relative to others in the same image