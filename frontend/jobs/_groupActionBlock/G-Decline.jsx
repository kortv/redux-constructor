// Decline Group form /frontend/jobs/_groupActionBlock/G-Decline.jsx
import React from 'react';

export default function Decline({ applicants, groupSubmit }) {
  const groupNames = applicants && applicants.length ?
  applicants.map((obj, key) => (<div key={key} className='inv'>
    {obj.name}
  </div>)
  ) : (<div className='inv'>Выберите кандидатов из колонки, слево.</div>);
  return (
    <div className='comment wind'>
      <div className='comment-title'>
        Отклонить кандидатов
        <div onClick={groupSubmit} data-type='close-group' className='close'>
          Закрыть и вернуться
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
          </svg>
        </div>
      </div>
      <form onSubmit={groupSubmit}>
        <p>Кандидаты:</p>
        <div className='invite'>
          <div className='invite-list'>
            {groupNames}
          </div>
        </div>
        <div className='comform-item'>
          <input type='submit' value='Отклонить кандидатов' className='btn denied'
            style={{ padding: '0 20px' }}
          />
        </div>
      </form>
    </div>
  );
}
