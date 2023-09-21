import React from 'react';

const SelectOptions = ({
  reg,
  values,
  desc,
  err,
  placeholder
}: {
  reg: any;
  desc: string;
  err: string | undefined;
  placeholder: string;
}) => {
  return (
    <div className=''>
      <span className='flex gap-2 items-center'>
        <p className='min-w-max'>{desc}</p>
        <select
          {...reg}
          className={`w-full p-[10px] bg-white rounded-md  text-base border border-gray-600`}>
          <option value='' className='text-gray-700'>
            {placeholder}{' '}
          </option>
          {values.map((val, i) => (
            <option key={i} value={val}>
              {val}
            </option>
          ))}
        </select>
      </span>
      <span className='text-red-400 dark:text-red-300 text-xs'> {err}</span>
    </div>
  );
};

export default SelectOptions;
