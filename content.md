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

### How to Draw the ER Diagram

You can use an online tool like **Draw.io** or **Lucidchart** to create the diagram:

1. **Entities**: Create rectangles for User, InputFile, OutputFile, and Model.
2. **Attributes**: List attributes inside each rectangle, underlining the primary key (e.g., UserID) and marking foreign keys (e.g., UserID (FK)).
3. **Relationships**:
    - Draw a diamond or line labeled “Uploads” between User and InputFile, with 1:N cardinality (e.g., crow’s foot notation: one line from User, multiple lines to InputFile).
    - Draw a diamond or line labeled “Processes” between Model and InputFile, with 1:N cardinality.
    - Draw a diamond or line labeled “Produces” between InputFile and OutputFile, with 1:1 cardinality (single lines on both sides).
4. **Save/Export**: Export as PNG or PDF for your project report.

---
## DFD diagram 
### Context Diagram (Level 0 DFD)

- **System**: Gun & Weapon Detection System
- **External Entity**: User
- **Data Flows**:
    - User → System: Image/Video File
    - System → User: Annotated Image/Video

**Textual Representation**:


`[User] ---- Image/Video File ----> [Gun & Weapon Detection System] <---- Annotated Image/Video ----|`

### Level 1 DFD

- **External Entity**: User
- **Processes**:
    1. Upload File
    2. Process File with YOLO Model
    3. Display/Download Result
- **Data Stores**:
    - D1: Input Files
    - D2: Output Files
    - D3: YOLO Model
- **Data Flows**:
    - User → Upload File: Image/Video File
    - Upload File → D1: Store Input File
    - D1 → Process File: Input File
    - D3 → Process File: YOLO Model Weights
    - Process File → D2: Annotated Output File
    - D2 → Display/Download Result: Annotated Output File
    - Display/Download Result → User: Annotated Image/Video