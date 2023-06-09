import { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import './design.css';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 0,
    borderSpacing: '10px',
  },
}));

const MyTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  // Mock data for the table rows
  const rows = [
    { week: 1, task: 'Task 1', score: 80, status: 'Completed' },
    { week: 2, task: 'Task 2', score: 75, status: 'Incomplete' },
    // Add mock data for remaining rows...
    // ...
    { week: 20, task: 'Task 20', score: 90, status: 'Null' },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const getStatusCellBackground = (status) => {
    if (status === 'Completed') {
      return '#C5E7B5';
    } else if (status === 'Incomplete') {
      return ' #FFF1A6';
    } else {
      return '#F5B9B1';
    }
  };

  return (
    <div>
      <Table className='custom-table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Week</StyledTableCell>
            <StyledTableCell>Task</StyledTableCell>
            <StyledTableCell>Score</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((row, index) => (
              <TableRow key={index} className='table-row'>
                <StyledTableCell>{row.week}</StyledTableCell>
                <StyledTableCell>{row.task}</StyledTableCell>
                <StyledTableCell>{row.score}</StyledTableCell>
                <StyledTableCell>
                  <p
                    className='status'
                    style={{
                      backgroundColor: getStatusCellBackground(row.status),
                    }}
                  >
                    {' '}
                    {row.status}
                  </p>
                </StyledTableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[8]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </div>
  );
};

export default MyTable;
