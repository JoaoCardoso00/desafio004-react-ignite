import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards.map((card, index) => {
          return (
            <Card
              data={card}
              viewImage={() => console.log('oi')}
              key={index}
            ></Card>
          );
        })}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
