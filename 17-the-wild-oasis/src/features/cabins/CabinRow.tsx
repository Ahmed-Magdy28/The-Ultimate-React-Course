import { useState } from 'react';
import styled from 'styled-components';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import type { CabinType } from '../../types';
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import SpinnerMini from '../../ui/SpinnerMini';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './hooks/useDeleteCabin';
import useCreateCabin from './hooks/useCreateCabin';

const TableRow = styled.div`
   display: grid;
   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
   column-gap: 2.4rem;
   align-items: center;
   padding: 1.4rem 2.4rem;

   &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-100);
   }
`;
const Img = styled.img`
   display: block;
   width: 6.4rem;
   aspect-ratio: 3 / 2;
   object-fit: cover;
   object-position: center;
   /* transform: scale(1.66666) translateX(-2px); */
   transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
   font-size: 1.6rem;
   font-weight: 600;
   color: var(--color-grey-600);
   font-family: 'Sono';
`;

const Price = styled.div`
   font-family: 'Sono';
   font-weight: 600;
`;

const Discount = styled.div`
   font-family: 'Sono';
   font-weight: 500;
   color: var(--color-green-700);
`;

export default function CabinRow({ cabin }: { cabin: CabinType }) {
   const [showform, setShowForm] = useState(false);
   const { isDeleting, deleteCabin } = useDeleteCabin();
   const { createCabin, isCreating } = useCreateCabin();
   const {
      id: cabinId,
      description,
      discount,
      image,
      maxCapacity,
      name,
      regularPrice,
   } = cabin;
   function handleDuplicate() {
      createCabin({
         cabin: {
            name: `Copy of ${name}`,
            description,
            discount,
            image,
            maxCapacity,
            regularPrice,
         },
      });
   }
   return (
      <>
         <TableRow role="row">
            <Img src={image as unknown as string} alt={`${name}CabinImage`} />

            <Cabin>{name}</Cabin>

            <div>Fits up to {maxCapacity} guests</div>

            <Price>{formatCurrency(regularPrice)}</Price>

            {discount ? (
               <Discount>{formatCurrency(discount)}</Discount>
            ) : (
               <span>&mdash</span>
            )}

            <div>
               <Button
                  $size="small"
                  disabled={isCreating}
                  onClick={handleDuplicate}
               >
                  <HiSquare2Stack />
               </Button>
               <Button
                  $size="small"
                  onClick={() => setShowForm((showForm) => !showForm)}
               >
                  <HiPencil />
               </Button>
               <Button
                  $size="small"
                  $variation="danger"
                  disabled={isDeleting}
                  onClick={() => deleteCabin(cabinId)}
               >
                  {isDeleting ? <SpinnerMini /> : <HiTrash />}
               </Button>
            </div>
         </TableRow>
         {showform && <CreateCabinForm cabinToEdit={cabin} />}
      </>
   );
}
