import React from 'react';
import { Table } from './table/components/Table';

const data = [
  {
    status: 'Active',
    picture: '/images/avatar1.png',
    name: 'Floyd Miles',
    usb: true,
    sd: false,
    cd: true,
    lockDevice: false,
    bluetooth: true,
    printers: false,
    shutdownDevice: false,
    rebootDevice: true,
  },
  {
    status: 'Inactive',
    picture: '/images/avatar1.png',
    name: 'Donald Richards',
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
//
