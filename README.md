# a11yTable
This is a simple accessible hidden table to supplant charts for voice readers.

## Usage
```js
const data = [
  { "name":"Larry Wall", "age":57, "link": "<a href='http://www.wall.org/~larry/'>www.wall.org/~larry/</a>" },
  { "name":"Bill Gates", "age":56, "link": "<a href='http://www.microsoft.com'>www.microsoft.com</a>" },
  { "name":"Daffy Duck", "age":75, "link": "" }
];

const headers = { "name" : "User name", "age": "User age", "link": "Homepage" };
const table = new a11yTable({ headers, data });

document.getElementById('chart-hidden-table').innerHTML = table.render();
```
