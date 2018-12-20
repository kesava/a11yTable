// @flow

/**
 * This function takes header settings and data to generate a HTML table string.
 * @param obj Generic es6 destructuring params.
 * @returns An html table string.
 */

class a11yTable {
  constructor({ headers=[], data=[], caption='' }) {
      this.headers = headers;
      this.data = data;
      this.caption = caption;
      this.headerTags = '';
      this.rowTags = '';
  }

  setHeaders({ headers }) {
      this.headers = headers;
  }

  setData({ data }) {
      this.data = data;
  }

  render() {
      const convert2Pairs = object => {
          let temp = [];
          Object.keys(object).forEach(key => temp.push({key: key, title: object[key]}));
          return temp;
      };

      let headerPairs = convert2Pairs(this.headers);
      let headerKeys = Object.keys(this.headers);
      this.headerTags = headerPairs.map(pair => `<th>${ pair['title'] }</th>`);
      this.rowTags = this.data.map(rowData => {
          let cols = headerKeys.map((key, index) => (index === 0) ? `<td scope="row">${rowData[key]}</td>` : `<td>${rowData[key]}</td>`);
          return `<tr>${ cols.join('') }</tr>`
      });

      return `
          <table class='visually-hidden'>
              <caption>${ this.caption }</caption>
              <thead><tr>${ this.headerTags.join('') }</tr></thead>
              <tbody>${ this.rowTags.join('') }</tbody>
              <style>
                  .visually-hidden {
                      position: absolute !important;
                      height: 1px; width: 1px;
                      overflow: hidden;
                      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
                      clip: rect(1px, 1px, 1px, 1px);
                  }
              </style>
          </table>
      `;
  }

}

export default a11yTable;
