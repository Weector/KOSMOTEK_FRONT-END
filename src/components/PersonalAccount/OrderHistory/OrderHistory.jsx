import React from 'react';
import { HistoryContainer, Text } from './OrderHistory.styled';

export function OrderHistory({ value }) {
  return (
    <HistoryContainer>
      <Text>Nie masz jeszcze żadnych zamówień</Text>
    </HistoryContainer>
  );
}
