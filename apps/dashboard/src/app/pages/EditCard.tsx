import React from 'react';
import { FormCard } from '@todotrello/ui';
import { Box, Container } from '@material-ui/core';

const EditCard: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="center">
        <FormCard />
      </Box>
    </Container>
  );
};

export default EditCard;
