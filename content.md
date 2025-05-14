## ER diagram content
### ER diagram description
#### Entities and Attributes

1. **User**
    - Attributes:
        - UserID (Primary Key, e.g., integer or UUID)
    - Note: Minimal attributes since no authentication.
2. **InputFile**
    - Attributes:
        - FileID (Primary Key, e.g., integer or UUID)
        - FileName (e.g., string, “image1.jpg”)
        - FileType (e.g., enum: “image”, “video”)
        - UploadTime (e.g., datetime)
        - FilePath (e.g., string, “static/uploads/image1.jpg”)
        - UserID (Foreign Key, links to User)
3. **OutputFile**
    - Attributes:
        - OutputID (Primary Key, e.g., integer or UUID)
        - OutputFileName (e.g., string, “processed_image1.jpg”)
        - FileType (e.g., enum: “image”, “video”)
        - ProcessTime (e.g., datetime)
        - OutputFilePath (e.g., string, “static/outputs/processed_image1.jpg”)
        - FileID (Foreign Key, links to InputFile)
4. **Model**
    - Attributes:
        - ModelID (Primary Key, e.g., integer)
        - ModelPath (e.g., string, “models/detect/train/weights/best.pt”)

#### Relationships

1. **Uploads** (User → InputFile)
    - A User can upload zero or more InputFiles.
    - An InputFile is uploaded by exactly one User.
    - Cardinality: 1:N (One-to-Many)
    - Representation: User --(Uploads)--> InputFile
2. **Processes** (Model → InputFile)
    - The Model processes zero or more InputFiles.
    - An InputFile is processed by exactly one Model.
    - Cardinality: 1:N (One-to-Many)
    - Representation: Model --(Processes)--> InputFile
3. **Produces** (InputFile → OutputFile)
    - An InputFile produces exactly one OutputFile.
    - An OutputFile is produced from exactly one InputFile.
    - Cardinality: 1:1 (One-to-One)
    - Representation: InputFile --(Produces)--> OutputFile

