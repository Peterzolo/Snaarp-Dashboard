import React from 'react';
import { Table } from './table/components/Table';

const data = [
  {
    status: 'Active',
    name: 'Device 1',
    usb: true, // Replaced 'Yes' with true
    sd: false, // Replaced 'No' with false
    cd: true,
    lockDevice: false,
    bluetooth: true,
    printers: false,
    shutdownDevice: false,
    rebootDevice: true,
  },
  {
    status: 'Inactive',
    name: 'Device 2',
    usb: false,
    sd: true,
    cd: false,
    lockDevice: true,
    bluetooth: false,
    printers: true,
    shutdownDevice: true,
    rebootDevice: false,
  },
];

export const TableWrapperComponent = () => {
  return (
    <div>
      <Table
        data={data}
        onToggleChange={function (
          rowIndex: number,
          field: string,
          value: boolean,
        ): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};
