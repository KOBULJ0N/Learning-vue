export const data = [
    { id: 1, data: '05.06.2022', sum1: '1.000.000', sum2: '2.000.000', sum3: '3.000.000'},
    { id: 1, data: '05.06.2022', sum1: '1.000.000', sum2: '2.000.000', sum3: '3.000.000'},
    { id: 1, data: '05.06.2022', sum1: '1.000.000', sum2: '2.000.000', sum3: '3.000.000'},
    { id: 1, data: '05.06.2022', sum1: '1.000.000', sum2: '2.000.000', sum3: '3.000.000'},
    { id: 1, data: '05.06.2022', sum1: '1.000.000', sum2: '2.000.000', sum3: '3.000.000'},
    { id: 1, data: '05.06.2022', sum1: '1.000.000', sum2: '2.000.000', sum3: '3.000.000'},
    { id: 1, data: '05.06.2022', sum1: '1.000.000', sum2: '2.000.000', sum3: '3.000.000'},
    { id: 1, data: '05.06.2022', sum1: '1.000.000', sum2: '2.000.000', sum3: '3.000.000'},
]

  export const dataSource = [
    {
      key: '1',
      data: '05.06.2022',
      sum1: '1.000.000 UZS',
      sum2: '2.000.000 UZS',
      sum3: '28.000.000 UZS',
    },
    {
      key: '2',
      data: '15.08.2022',
      sum1: '1.000.000 UZS',
      sum2: '2.300.000 UZS',
      sum3: '1.500.000 UZS',
    },
    {
      key: '3',
      data: '15.08.2022',
      sum1: '1.000.000 UZS',
      sum2: '1.000.000 UZS',
      sum3: '1.000.000 UZS',
    },
    {
      key: '4',
      data: '15.08.2022',
      sum1: '1.000.000 UZS',
      sum2: '1.000.000 UZS',
      sum3: '1.000.000 UZS',
    },
    {
      key: '5',
      data: '15.08.2022',
      sum1: '1.000.000 UZS',
      sum2: '1.000.000 UZS',
      sum3: '1.000.000 UZS',
    },
  ];
        
    export const columns = [
      {
        title: 'Data',
        dataIndex: 'data',
        key: '',
        sorter: {
          compare: (a, b) => a.chinese - b.chinese,
          multiple: 3,
        },
      },
      {
        title: 'Sum1',
        dataIndex: 'sum1',
        key: 'age',
      },
      {
        title: 'Sum main',
        dataIndex: 'sum2',
        key: 'age',
      },
      {
        title: 'Sum Final',
        dataIndex: 'sum3',
        key: 'age',
      },
    ];