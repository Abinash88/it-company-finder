import React from 'react';

const TableLoading = () => {
  return (
    <div className='mt-8 w-[98%] mx-auto'>
      <div className='flex flex-col gap-4'>
        <div className='loading w-full h-10'></div>
        <div className='loading w-full h-12'></div>
      </div>
      <div className='loading w-full mt-5 h-[80vh]'></div>
    </div>
  );
};

export default TableLoading;
