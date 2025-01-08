# Data-Structure
This is Data Structure and Algorithm repository in 2 languages(Java and C++)

Before Learning Data Structure:
- Learn basics of any programming language( `java` and `C++`) or any other which you like.
- Now just follow the following steps slowly and paitently.

> [!NOTE]
> - If yoconst prompt =
>     "Provide response as a valid JSON object only. Consider yourself as an experience Teacher."
>     + "\n Give me 10 objective Questions for form file uploaded:  " + text
>     + "\". Print each question in one line only. The Goal is to build a quistion bank that will be used for final exams. "
>     + "\n For Maths focus on numericals. "
>     + "\n For French consider it as a second language for Indian students being intorduced for the first time with French in class-6. "
>     + "\n Keep questions diffficulty and other aspects such that its relevant for students of given class."
>     + "\n Dont print any header or footer note."
>     + "\n Dont include any special chars/symbols like \" or \' in JSON response"
>     + "\n Genereate response similar to example JSON : " + JSON.stringify(*actual sample json*);

- This will make your experience good. 😊✌️

```dataviewjs


const folders = {
    'array': 0,
    'HashTable': 0,
    'LinkedList': 0,
    'Recursion': 0,
    'Sorting': 0,
    'SpaceAndTime': 0
};

// Get all files with #datastructure tag and count them by folder
dv.pages('#datastructure').forEach(page => {
    const folderPath = page.file.folder;
    // Get the last part of the folder path
    const folderName = folderPath.split('/').pop();
    if (folders.hasOwnProperty(folderName)) {
        folders[folderName]++;
    }
});

// Convert the data to the format needed for the chart
const chartData = {
    type: 'bar',
    data: {
        labels: Object.keys(folders),
        datasets: [{
            label: 'Number of Files',
            data: Object.values(folders),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
};

window.renderChart(chartData, this.container);
```
---
## Index
### Array
```dataview
table date as Date, Topics as Topic from "Data_Structure/array"
```

### Hash Table
```dataview
table date as Date, Topics as Topic from "Data_Structure/HashTable"
```
### Time Complexity
```dataview
table date as Date, Topics as Topic from "Data_Structure/SpaceAndTime"
```

### Recursion

```dataview
table date as Date, Topics as Topic from "Data_Structure/Recursion"
```
