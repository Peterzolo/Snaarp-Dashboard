import React from 'react';
import { Table } from './table/components/Table';

const data = [
  {
    status: 'Active',
    name: 'Device 1',
    usb: 'Yes',
    sd: 'No',
    cd: 'Yes',
    lockDevice: 'No',
    bluetooth: 'Yes',
    printers: 'No',
    shutdownDevice: 'No',
    rebootDevice: 'Yes',
  },
  {
    status: 'Inactive',
    name: 'Device 2',
    usb: 'No',
    sd: 'Yes',
    cd: 'No',
    lockDevice: 'Yes',
    bluetooth: 'No',
    printers: 'Yes',
    shutdownDevice: 'Yes',
    rebootDevice: 'No',
  },
];

export const TableWrapperComponent = () => {
  return (
    <div>
      <Table data={data} />
    </div>
  );
};
