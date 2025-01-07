import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaUsb,
  FaSdCard,
  FaCompactDisc,
  FaLock,
  FaBluetooth,
  FaPrint,
  FaPowerOff,
  FaRedo,
  FaCircle,
} from 'react-icons/fa';

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px 0;
  border-radius: 10px;
  background: #fff; /* Optional: Add a background color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for better appearance */
`;

const CustomTable = styled.table`
  width: 100%;
  border-collapse: separate; /* Enables spacing for border-radius effect */
  border-spacing: 0; /* Ensures no spacing between cells */
  text-align: left;
  overflow: hidden;
  border-radius: 10px;

  th,
  td {
    padding: 12px 15px;
    border: none; /* Removes borders */
  }

  th {
    background-color: #f4f4f4;
    font-weight: normal;
    font-size: 14px;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

const IconContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StatusIcon = styled(FaCircle)<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? 'green' : 'gray')};
  cursor: pointer;
`;

export const Table = ({ data }: { data: Array<any> }) => {
  return (
    <TableContainer>
      <CustomTable className="table table-responsive">
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>
              <IconContainer>
                <FaUsb /> USB
              </IconContainer>
            </th>
            <th>
              <IconContainer>
                <FaSdCard /> SD
              </IconContainer>
            </th>
            <th>
              <IconContainer>
                <FaCompactDisc /> CD/DVDs
              </IconContainer>
            </th>
            <th>
              <IconContainer>
                <FaLock /> Lock Device
              </IconContainer>
            </th>
            <th>
              <IconContainer>
                <FaBluetooth /> Bluetooth
              </IconContainer>
            </th>
            <th>
              <IconContainer>
                <FaPrint /> Printers
              </IconContainer>
            </th>
            <th>
              <IconContainer>
                <FaPowerOff /> Shutdown Device
              </IconContainer>
            </th>
            <th>
              <IconContainer>
                <FaRedo /> Reboot Device
              </IconContainer>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <StatusIcon isActive={row.status === 'active'} />
              </td>
              <td>{row.name}</td>
              <td>{row.usb}</td>
              <td>{row.sd}</td>
              <td>{row.cd}</td>
              <td>{row.lockDevice}</td>
              <td>{row.bluetooth}</td>
              <td>{row.printers}</td>
              <td>{row.shutdownDevice}</td>
              <td>{row.rebootDevice}</td>
            </tr>
          ))}
        </tbody>
      </CustomTable>
    </TableContainer>
  );
};
