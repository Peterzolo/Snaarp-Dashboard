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

  th:nth-child(2),
  td:nth-child(2) {
    width: 350px; /* Set a fixed width for the Name column */
    word-wrap: break-word; /* Ensure long text in the Name column wraps */
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
          <tr>
            <td></td>
            <td>
              <SelectInput />
            </td>
            <td>
              <ToggleSwitch />
            </td>
            <td>
              <ToggleSwitch />
            </td>
            <td>
              <ToggleSwitch />
            </td>
            <td>
              <ToggleSwitch />
            </td>
            <td>
              <ToggleSwitch />
            </td>
            <td>
              <ToggleSwitch />
            </td>
            <td>
              <ToggleSwitch />
            </td>
            <td>
              <ToggleSwitch />
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <StatusIcon isActive={row.status === 'Active'} />
              </td>
              <td>{row.name}</td>
              <td>
                <ToggleSwitch
                  isOn={row.usb === 'Yes'}
                  onToggle={(value) => onToggleChange(rowIndex, 'usb', value)}
                />
              </td>
              <td>
                <ToggleSwitch
                  isOn={row.sd === 'Yes'}
                  onToggle={(value) => onToggleChange(rowIndex, 'sd', value)}
                />
              </td>
              <td>
                <ToggleSwitch
                  isOn={row.cd === 'Yes'}
                  onToggle={(value) => onToggleChange(rowIndex, 'cd', value)}
                />
              </td>
              <td>
                <ToggleSwitch
                  isOn={row.lockDevice === 'Yes'}
                  onToggle={(value) =>
                    onToggleChange(rowIndex, 'lockDevice', value)
                  }
                />
              </td>
              <td>
                <ToggleSwitch
                  isOn={row.bluetooth === 'Yes'}
                  onToggle={(value) =>
                    onToggleChange(rowIndex, 'bluetooth', value)
                  }
                />
              </td>
              <td>
                <ToggleSwitch
                  isOn={row.printers === 'Yes'}
                  onToggle={(value) =>
                    onToggleChange(rowIndex, 'printers', value)
                  }
                />
              </td>
              <td>
                <ToggleSwitch
                  isOn={row.shutdownDevice === 'Yes'}
                  onToggle={(value) =>
                    onToggleChange(rowIndex, 'shutdownDevice', value)
                  }
                />
              </td>
              <td>
                <ToggleSwitch
                  isOn={row.rebootDevice === 'Yes'}
                  onToggle={(value) =>
                    onToggleChange(rowIndex, 'rebootDevice', value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </CustomTable>
    </TableContainer>
  );
};
