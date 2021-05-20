import React from 'react';
import { FormCard } from '@todotrello/ui';
import { Box, Container } from '@material-ui/core';

const CreateCard: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="center">
        <FormCard />
      </Box>
    </Container>
  );
};

export default CreateCard;
