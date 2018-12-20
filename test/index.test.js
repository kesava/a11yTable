import a11ytable from "../src";

test("a11ytable", () => {
  const data = [
    { "name":"Larry Wall", "age":57, "link": "<a href='http://www.wall.org/~larry/'>www.wall.org/~larry/</a>" },
    { "name":"Bill Gates", "age":56, "link": "<a href='http://www.microsoft.com'>www.microsoft.com</a>" },
    { "name":"Daffy Duck", "age":75, "link": "" }
  ];
  const headers = { "name" : "User name", "age": "User age", "link": "Homepage" };

  const emptyTable = new a11ytable({});
  const table = new a11ytable({ headers, data, caption: 'This is a test Table' });

  const emptyTableString = `<table class='visually-hidden'>
  <caption></caption>
  <thead><tr></tr></thead>
  <tbody></tbody>
  <style>
      .visually-hidden {
          position: absolute !important;
          height: 1px; width: 1px;
          overflow: hidden;
          clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
          clip: rect(1px, 1px, 1px, 1px);
      }
  </style>
</table>`;

  const dataTable = `<table class='visually-hidden'>
  <caption>This is a test Table</caption>
  <thead><tr><th>User name</th><th>User age</th><th>Homepage</th></tr></thead>
  <tbody><tr><td scope="row">Larry Wall</td><td>57</td><td><a href='http://www.wall.org/~larry/'>www.wall.org/~larry/</a></td></tr><tr><td scope="row">Bill Gates</td><td>56</td><td><a href='http://www.microsoft.com'>www.microsoft.com</a></td></tr><tr><td scope="row">Daffy Duck</td><td>75</td><td></td></tr></tbody>
  <style>
      .visually-hidden {
          position: absolute !important;
          height: 1px; width: 1px;
          overflow: hidden;
          clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
          clip: rect(1px, 1px, 1px, 1px);
      }
  </style>
  </table>`;

  // expect(emptyTable.render()).toBe(emptyTableString);
  expect(table.render()).toBe(dataTable);
});
