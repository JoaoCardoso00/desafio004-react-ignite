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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imgUrl, setImgUrl] = useState<string>();

  function handleViewImage(imgUrl:string) {
    setImgUrl(imgUrl);
    onOpen();
  }


  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards.map((card, index) => {
          return (
            <Card
              data={card}
              viewImage={() => handleViewImage(card.url)}
              key={index}
            ></Card>
          );
        })}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl}  />
    </>
  );
}
