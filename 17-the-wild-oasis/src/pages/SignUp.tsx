import styled from 'styled-components';
import SignupForm from '../features/authentication/SignupForm';
import Heading from '../ui/Heading';
import Table from '../ui/Table';
const FullPage = styled.div`
   height: 100vh;
   background-color: var(--color-grey-50);
   display: flex;
   align-items: center;
   justify-content: center;
`;
export default function SignUp() {
   return (
      <FullPage>
         <Table columns="1">
            <Table.Header>
               <Heading as="h1">Create a new user</Heading>
            </Table.Header>
            <Table.Row>
               <SignupForm />
            </Table.Row>
         </Table>
      </FullPage>
   );
}
