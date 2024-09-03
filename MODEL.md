## Annotation Object

| Field      | Data Type | Description                            |
|------------|-----------|----------------------------------------|
| _id        | ObjectId  | Unique identifier for the annotation   |
| label      | String    | Label associated with the annotation   |
| imageId    | ObjectId  | Reference to related Image             |
| maskData   | String    | RLE encoded (flattened binary mask) data |
| area       | Number    | Calculated area of the mask            |
| annotator  | String    | The user who created the annotation    |
| createdAt  | Date      | Creation timestamp of annotation       |

## Image Object

| Field      | Data Type | Description                            |
|------------|-----------|----------------------------------------|
| _id        | ObjectId  | Unique id for the image                |
| filename   | String    | Name of the image file                 |
| projectId  | ObjectId  | Reference to related Project           |

## Project Object

| Field      | Data Type | Description                            |
|------------|-----------|----------------------------------------|
| _id        | ObjectId  | Unique id for the project              |
| name       | String    | Name of the project                    |
| description| String    | Description of the project             |