import React from 'react';
import styled from 'styled-components';
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
import ToggleSwitch from '../../../../../../Components/Toggle/ToogleSwitch';

const fields = [
  { key: 'usb', icon: <FaUsb /> },
  { key: 'sd', icon: <FaSdCard /> },
  { key: 'cd', icon: <FaCompactDisc /> },
  { key: 'lockDevice', icon: <FaLock /> },
  { key: 'bluetooth', icon: <FaBluetooth /> },
  { key: 'printers', icon: <FaPrint /> },
  { key: 'shutdownDevice', icon: <FaPowerOff /> },
  { key: 'rebootDevice', icon: <FaRedo /> },
];

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CustomTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
  overflow: hidden;
  border-radius: 10px;

  th,
  td {
    padding: 12px 15px;
    border: none;
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

const SelectInput = styled.select`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Table = ({
  data,
  onToggleChange,
}: {
  data: Array<any>;
  onToggleChange: (rowIndex: number, field: string, value: boolean) => void;
}) => {
  return (
    <TableContainer>
      <CustomTable className="table table-responsive">
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            {fields.map((field) => (
              <th key={field.key}>
                <IconContainer>{field.icon}</IconContainer>
              </th>
            ))}
          </tr>
          <tr>
            <td></td>
            <td>
              <SelectInput />
            </td>
            {fields.map((field) => (
              <td key={field.key}>
                <ToggleSwitch />
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <StatusIcon
                  isActive={row.status === 'Active'}
                  style={{ fontSize: '10px' }}
                />
              </td>
              <td>
                <TableColWrapper>
                  <Avatar src={row.picture} />
                  <Name>{row.name}</Name>
                </TableColWrapper>
              </td>
              {fields.map((field) => (
                <td key={field.key}>
                  <ToggleSwitch
                    isOn={row[field.key] === true}
                    onToggle={(value) =>
                      onToggleChange(rowIndex, field.key, value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </CustomTable>
    </TableContainer>
  );
};

const TableColWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const Avatar = styled.img`
  width: 20px;
  background-color: #444242;
  border-radius: 8px;
`;

const Name = styled.div`
  color: #2f54eb;
  font-weight: 500;
  font-size: 14px;
`;
