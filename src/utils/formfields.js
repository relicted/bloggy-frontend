import React from 'react';

export const renderInput = ({ input, label, type, meta, icon }) => (
  <div className={`field ${meta.error  && meta.touched ? 'error':''}`}>
    {meta.touched && meta.error && <small>{meta.error}</small>}
    <div className={`ui left ${icon ? 'icon':''} input`}>
      {icon ? <i className={`${icon} icon`} /> : null}
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
);


export const renderText = ({ input, label, type, meta, icon }) => (
  <div className={`field ${meta.error  && meta.touched ? 'error':''}`}>
    {meta.touched && meta.error && <small>{meta.error}</small>}
    <div className={`ui left ${icon ? 'icon':''} input`}>
      {icon ? <i className={`${icon} icon`} /> : null}
      <textarea {...input} placeholder={label} type={type} />
    </div>
  </div>
);
