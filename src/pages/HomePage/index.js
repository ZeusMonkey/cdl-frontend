import { useState } from 'react';
import cx from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

import iconEth from 'assets/images/logos/ethereum.png';
import iconYeld from 'assets/images/logos/yeld.png';
import iconDai from 'assets/images/logos/dai.png';
import iconTether from 'assets/images/logos/tether.png';
import iconUni from 'assets/images/logos/uniswap.png';

import Stats from './components/Stats';

import styles from './HomePage.module.scss';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Asset',
  },
  { id: 'cap', numeric: true, disablePadding: false, label: 'Market size' },
  { id: 'apy', numeric: true, disablePadding: false, label: 'APY' },
  { id: 'balance', numeric: true, disablePadding: false, label: 'Wallet' },
  { id: 'actions', numeric: false, disablePadding: false, label: '' },
];

function createData(logo, name, cap, apy, balance, sym) {
  return { logo, name, cap, apy, balance, sym };
}

const rows = [
  createData(iconEth, 'Ethereum', 195546326429, 0.11, 0, 'ETH'),
  createData(iconYeld, 'Yeld Finance', 1180160, 5.47, 2, 'YELD'),
  createData(iconDai, 'DAI', 1807006641, 9.99, 0, 'DAI'),
  createData(iconTether, 'Tether', 27793796432, 13.3, 1.4, 'USDT'),
  createData(iconUni, 'Uniswap', 6404931358, 0.22, 5, 'UNI'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const HomePage = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>

      <Stats />

      <div className={styles.tableHeader}>
        <h2>Markets</h2>
        <button type="button" className={styles.connectWallet}>
          Connect wallet
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table aria-label="simple table" classes={{ root: styles.table }}>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'right' : 'left'}
                    padding={headCell.disablePadding ? 'none' : 'default'}
                    sortDirection={orderBy === headCell.id ? order : false}
                    className={styles.tableHeaderCell}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={createSortHandler(headCell.id)}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map((row) => {
                return (
                  <TableRow key={row.name} classes={{ root: styles.tableRow }}>
                    <TableCell
                      component="th"
                      scope="row"
                      classes={{ root: cx(styles.tableCell, styles.firstCell) }}
                    >
                      <div className={styles.info}>
                        <img
                          src={row.logo}
                          className={styles.logo}
                          alt="logo"
                        />
                        <span>{row.name}</span>
                      </div>
                    </TableCell>
                    <TableCell
                      align="right"
                      classes={{ root: styles.tableCell }}
                    >
                      ${row.cap.toLocaleString()}
                    </TableCell>
                    <TableCell
                      align="right"
                      classes={{ root: styles.tableCell }}
                    >
                      {row.apy}%
                    </TableCell>
                    <TableCell
                      align="right"
                      classes={{ root: styles.tableCell }}
                    >
                      {row.balance}
                      {row.sym}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      classes={{ root: cx(styles.tableCell, styles.lastCell) }}
                      width={285}
                    >
                      <button type="button" className={styles.btnAddLiquidity}>
                        <FontAwesomeIcon icon={faPlus} color="#808080" />
                        <span>Add Liquidity</span>
                      </button>
                      <button type="button" className={styles.btnBorrow}>
                        <FontAwesomeIcon icon={faHandHoldingUsd} color="#fff" />
                        <span>Borrow</span>
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default HomePage;
