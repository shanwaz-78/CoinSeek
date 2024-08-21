import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
import { CryptoState } from '../cryptoContext';


export default function Transaction() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { transactionArray } = CryptoState()
    const a = 0

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const options = { maximumFractionDigits: 3 }

    return (
        <Paper sx={{ overflow: 'hidden' }} style={{ margin: '20px 50px' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow >
                            {['Date', 'CryptoCoin', 'quentity', 'ExchangeCurrency', 'Amount', 'time'].map((column,index) => (
                                <TableCell
                                    key={index}
                                    //   align={column.align}
                                    //   style={{ minWidth: column.minWidth }}
                                    style={{ backgroundColor: 'rgba(89, 89, 89, 0.3)' }}
                                >
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {Array.isArray(transactionArray) && transactionArray.map((t,index) => (
                            <>
                                <TableRow key={index}>
                                    <TableCell >{t?.date}</TableCell>
                                    <TableCell>{t?.SelectedCoin}</TableCell>
                                    <TableCell>{Intl.NumberFormat("en-US", options).format(t?.coinAmount)}</TableCell>
                                    <TableCell>{t?.selectedCurrency}</TableCell>
                                    <TableCell style={{ display: 'flex', alignItems: 'center' }}><img src={t?.paymentType === 'buy' ? '/up-arrow.png' : '/down-arrow.png'} alt="" width={40} /> {Intl.NumberFormat("en-US", options).format(t.currencyAmount)}</TableCell>
                                    <TableCell>{t?.time}</TableCell>

                                </TableRow>
                            </>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5,10, 25, 100]}
                component="div"
                count={transactionArray?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

