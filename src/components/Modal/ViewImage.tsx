import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Image src={imgUrl} alt="Imagem" maxHeight="600px" maxWidth="900px" />
        <ModalFooter bgColor="pGray.800" borderBottomRadius="2px">
          <a href={imgUrl} target="__blank">
            Abrir original
          </a>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
