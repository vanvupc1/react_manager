import React from 'react'

export default function Table({theadData, tbodyData}) {
  return (
    <table class="table table-hover table-bordered js-copytextarea" cellpadding="0" cellspacing="0" border="0" id="sampleTable">
      <thead>
      <tr>
           {theadData.map(heading => {
             return <th key={heading}>{heading}</th>
           })}
         </tr>
      </thead>
      <tbody>
      {tbodyData.map((row, index) => {
               return <tr key={index}>
                   {theadData.map((key, index) => {
                        return <td key={row[key]}>{row[key]}</td>
                   })}
             </tr>;
           })}
      </tbody>
    </table>
  )
}
