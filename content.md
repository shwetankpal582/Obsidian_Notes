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

```

`[User] ---- Image/Video File ----> [Gun & Weapon Detection System] <---- Annotated Image/Video ----|`
```

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

### NOTES
- **Purpose**: Include the DFD in your report to illustrate the data flow from user input to model processing to output display. Explain how the YOLO model annotates files, which are then served via Flask.
- **Context Diagram**: Use the Level 0 diagram to introduce the system’s interaction with the user in your presentation.
- **Level 1 DFD**: Use the Level 1 diagram to detail the internal processes, emphasizing the role of file storage and model processing.
- **Presentation Tips**:
    - Highlight the simplicity of the flow: user uploads → model processes → results displayed.
    - Mention the YOLO model’s role in generating annotations, as seen in your test code (e.g., r.plot()).
    - Use clear inputs (e.g., images with knives/pistols) to show the annotated outputs in your demo.
- **Documentation**:
    - Include both DFDs in your report with captions explaining each process.
    - Note that the app uses file system storage (static/uploads/, static/outputs/) instead of a database, which simplifies the DFD.
- **Extensions**:
    - If you add a database (e.g., SQLite for file metadata), I can update the DFD to include it.
    - For a Level 2 DFD, we could break down the “Process File with YOLO Model” into sub-processes (e.g., frame extraction for videos), but Level 1 is likely sufficient.

If you need a specific tool format (e.g., Visio, Lucidchart), a simplified DFD, or help integrating the DFD into your project report, let me know! Also, if you want to revisit the FileNotFoundError for best.pt or add features to the app, I can assist further.


---
### Use Case Diagram Description

The diagram will show the User and YOLO Model as actors, with use cases inside a system boundary labeled “Gun & Weapon Detection System.” Arrows will indicate interactions, with include/extend relationships to clarify dependencies.

#### Actors

1. **User**: Interacts with the web interface to upload files and view/download results.
2. **YOLO Model**: External system component that processes files to detect knives and pistols.

#### Use Cases

1. **Upload Image**: User selects and uploads an image file.
2. **Upload Video**: User selects and uploads a video file.
3. **Process File**: YOLO model processes the file to generate annotations.
4. **View Annotated Image**: User sees the annotated image on the result page.
5. **Download Annotated Video**: User downloads the annotated video.
6. **Handle Error**: System displays error messages (e.g., invalid file format).

#### Relationships

- **Include**:
    - Upload Image → Process File: Uploading an image triggers processing.
    - Upload Video → Process File: Uploading a video triggers processing.
    - Process File → View Annotated Image: Processing an image leads to viewing.
    - Process File → Download Annotated Video: Processing a video leads to downloading.
- **Extend**:
    - Upload Image → Handle Error: If the image is invalid, an error is shown.
    - Upload Video → Handle Error: If the video is invalid, an error is shown.
- **Actor Interactions**:
    - User → Upload Image, Upload Video, View Annotated Image, Download Annotated Video, Handle Error.
    - YOLO Model → Process File.

### NOTES
- **Purpose**: Include the Use Case Diagram in your report to show user interactions and system functionality, complementing the ER and DFD diagrams. Explain how users upload files, the YOLO model processes them, and results are displayed/downloaded.
- **Presentation Tips**:
    - Use the diagram to walk through a user’s journey: uploading a file, seeing annotations, or downloading a video.
    - Highlight the YOLO model’s role as a secondary actor, emphasizing its pre-trained nature (mAP50: 0.915).
    - Demo the app alongside the diagram to connect theory to practice.
- **Documentation**:
    - Include the diagram with a caption explaining each use case and actor.
    - Note that the app is a web-based system using Flask, with no user authentication, keeping the User actor generic.
    - Reference the model path issue (best.pt) and how you resolved it (e.g., updating MODEL_PATH to C:\MPR\...).
- **Simplification**:
    - If the diagram feels complex, you can omit “Handle Error” or merge “View Annotated Image” and “Download Annotated Video” into a single “View Result” use case, but the current version is clear and detailed.
- **Extensions**:
    - If you add features (e.g., user authentication, batch processing), I can update the diagram to include new use cases like “Login” or “Process Multiple Files”.

If you need a specific tool format (e.g., StarUML, Lucidchart), a simplified diagram, or help integrating it into your report, let me know! Also, if you’re still facing issues with the FileNotFoundError for best.pt or want to enhance the app (e.g., video previews), I can assist further.