'use client'

import { Anchor, Table } from '@mantine/core'

import type { Initiative } from './initiative'

export default async function Page() {
    try {
        let result = await fetch('http://localhost:8000/initiatives/');
        let data = await result.json()

        const items = data.map((initiatve: Initiative) => {
            return (
              <Table.Tr key={initiatve.title}>
                <Table.Td>
                  <Anchor href={initiatve.url}>
                    {initiatve.title}
                  </Anchor>
                </Table.Td>
              </Table.Tr>
            );
          });
        
          return (
            <Table.ScrollContainer minWidth={800}>
              <Table verticalSpacing="xs">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Title</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{items}</Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          );
    

    } catch (error) {
        let message = `Could not fetch: ${error}`
        return <p>{message}</p>
    }
}