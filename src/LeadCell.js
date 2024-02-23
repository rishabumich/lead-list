import React from 'react'
import {TableRow, TableCell, Table} from '@radix-ui/themes'

export default function LeadCell({lead}) {
  return (
    <>
    <Table.Row>
      <Table.RowHeaderCell>{lead.name}</Table.RowHeaderCell>
      <Table.Cell>{lead.email}</Table.Cell>
      <Table.Cell>{lead.phone}</Table.Cell>
      <Table.Cell>
        <input type='checkbox' checked={lead.contacted} />
      </Table.Cell>
    </Table.Row>
    </>
  )
}
