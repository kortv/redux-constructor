import React from 'react';

export default function LeftBlock(props) {
  return (
    <div className='left user-block'>
      <div>
        <div className='colt to-proccess current'>В процессе</div>
        <div className='colt to-rejected'>Отклонены</div>
      </div>
      <div className='user-list proccess show'>
        <div className='all-check'>
          <div className='checkbox'>
            <input type='checkbox' name defaultValue={1} id='all-check' />
            <label htmlFor='all-check'>
              <svg className='square'>
                <use xlinkHref='#square' />
              </svg>
              <svg className='checked'>
                <use xlinkHref='#checked' />
              </svg>
              Выделить все
            </label>
          </div>
          <div className='setting funnel tool-block'>
            <div className='tool-btn'>
              <svg>
                <use xlinkHref='#funnel' />
              </svg>
            </div>
            <div className='tool'>
              <div onClick={props.handleClick}
                data-id='1' data-type='group-filter' className='tool-link'
              >
                <svg>
                  <use xlinkHref='#pc' />
                </svg>
                Удалить
              </div>
              <div onClick={props.handleClick}
                data-id='2' data-type='group-filter' className='tool-link'
              >
                <svg>
                  <use xlinkHref='#pc' />
                </svg>
                Переместить на этап
              </div>
              <div onClick={props.handleClick}
                data-id='3' data-type='group-filter' className='tool-link'
              >
                <svg>
                  <use xlinkHref='#pc' />
                </svg>
                Пометить
              </div>
            </div>
          </div>
          <div className='action tool-block'>
            <div className='tool-btn'>
              Действия
              <svg className='up'>
                <use xlinkHref='#up' />
              </svg>
              <svg className='down'>
                <use xlinkHref='#down' />
              </svg>
            </div>
            <div className='tool'>
              <div onClick={props.handleClick}
                data-id='1' data-type='group-act' className='tool-link'
              >
                <svg>
                  <use xlinkHref='#pc' />
                </svg>
                Отклонить кандидатов
              </div>
              <div onClick={props.handleClick}
                data-id='2' data-type='group-act' className='tool-link'
              >
                <svg>
                  <use xlinkHref='#pc' />
                </svg>
                Переместить на этап
              </div>
              <div onClick={props.handleClick}
                data-id='3' data-type='group-act' className='tool-link'
              >
                <svg>
                  <use xlinkHref='#pc' />
                </svg>
                Отправить письмо
              </div>
            </div>
          </div>
        </div>

        {props.children}

      </div>
      <div className='user-list rejected'>
        <div className='all-check'>
          <div className='checkbox'>
            <input type='checkbox' name defaultValue={1} id='all-check-rejected' />
            <label htmlFor='all-check-rejected'>
              <svg className='square'>
                <use xlinkHref='#square' />
              </svg>
              <svg className='checked'>
                <use xlinkHref='#checked' />
              </svg>
              Выделить все
            </label>
          </div>
          <div className='setting funnel tool-block'>
            <div className='tool-btn'>
              <svg>
                <use xlinkHref='#funnel' />
              </svg>
            </div>
            <div className='tool'>
              <div className='tool-link'>
                <svg>
                  <use xlinkHref='#bell' />
                </svg>
                Удалить
              </div>
              <div className='tool-link'>
                <svg>
                  <use xlinkHref='#bell' />
                </svg>
                Переместить на этап
              </div>
              <div className='tool-link'>
                <svg>
                  <use xlinkHref='#bell' />
                </svg>
                Пометить
              </div>
            </div>
          </div>
          <div className='action tool-block'>
            <div className='tool-btn'>
              Действия
              <svg className='up'>
                <use xlinkHref='#up' />
              </svg>
              <svg className='down'>
                <use xlinkHref='#down' />
              </svg>
            </div>
            <div className='tool'>
              <div className='tool-link'>
                <svg>
                  <use xlinkHref='#pc' />
                </svg>
                Удалить
              </div>
              <div className='tool-link'>
                <svg>
                  <use xlinkHref='#pc' />
                </svg>
                Переместить на этап
              </div>
              <div className='tool-link'>
                <svg>
                  <use xlinkHref='#pc' />
                </svg>
                Пометить
              </div>
            </div>
          </div>
        </div>
        <div className='antiscroll-wrap'>
          <div className='antiscroll-inner'>
            <div className='users'>
              <div className='user'>
                <div className='checkbox'>
                  <input type='checkbox' name defaultValue={1} id='check-rejected-01' />
                  <label htmlFor='check-rejected-01'>
                    <svg className='square'>
                      <use xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='./../../../dummy/1.jpg' alt />
                <div className='user-name'>Prizov Alexandr</div>
                <div className='user-post'>Manager</div>
                <div className='user-time'>
                  <div className='tags'>
                    <a href>#классный</a>
                    <a href>#superman</a>
                    <a href>#nogo</a>
                  </div>
                  <p>From workable.com 6 days ago</p>
                </div>
              </div>
              <div className='user light'>
                <div className='checkbox'>
                  <input type='checkbox' name defaultValue={1} id='check-rejected-02' />
                  <label htmlFor='check-rejected-02'>
                    <svg className='square'>
                      <use xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='./../../../dummy/2.jpg' alt />
                <div className='user-name'>Prizov Alexandr</div>
                <div className='user-post'>Manager</div>
                <div className='user-time'>
                  <div className='tags'>
                    <a href>#классный</a>
                    <a href>#superman</a>
                    <a href>#nogo</a>
                  </div>
                  <p>From workable.com 6 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
