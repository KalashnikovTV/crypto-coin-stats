import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Container, Button, Stack } from 'react-bootstrap';
import { CoinsTable } from '../CoinsTable';
import { fetchCoins } from '../../services/services';
import { PAGE_LIMIT } from '../../constants/constants';

const App: FC = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useQuery(['coins', page], () => fetchCoins(page), { refetchOnWindowFocus: false, keepPreviousData: true });

  if (isLoading) {
    return <h2 style={{ textAlign: 'center' }}>Loading...</h2>
  }

  if (isError) {
    return <h2 style={{ textAlign: 'center' }}>Failed to get data...</h2>
  }

  return (
    <Container style={{ marginTop: 60 }}>
      <CoinsTable data={data} />

      <Stack direction="horizontal" gap={2}>
        <Button onClick={() => setPage((prev) => prev - PAGE_LIMIT)} disabled={!page}>Prev</Button>
        <Button onClick={() => setPage((prev) => prev + PAGE_LIMIT)}>Next</Button>
      </Stack>
    </Container>
  )
}

export default App;
