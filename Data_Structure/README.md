# Data-Structure
This is Data Structure and Algorithm repository in 2 languages(Java and C++)

Before Learning Data Structure:
- Learn basics of any programming language( `java` and `C++`) or any other which you like.
- Now just follow the following steps slowly and paitently.
- If you want a good experience for reading this repository then download [Obisidan.md](https://obsidian.md/) and open this repository as a vault( a folder).
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
