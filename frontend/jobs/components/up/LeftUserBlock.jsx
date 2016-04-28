import React from 'react';
// import CompControls from './helpers/CompControls';

export default function Reminder(/* { content, handleClick } */) {
  return (
    <div className='left user-block'>
      <div>
        <div className='colt to-proccess current'>В процессе</div><div className='colt to-rejected'>Отклонены</div>
      </div>
      <div className='user-list proccess show'>
        <div className='all-check'>
          <div className='checkbox'>
            <input type='checkbox' name defaultValue={1} id='all-check' />
            <label htmlFor='all-check'>
              <svg className='square'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
              </svg>
              <svg className='checked'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
              </svg>
              Выделить все
            </label>
          </div>
          <div className='setting funnel tool-block'>
            <div className='tool-btn'>
              <svg>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#funnel' />
              </svg>
            </div>
            <div className='tool'>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Удалить
              </div>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Переместить на этап
              </div>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Пометить
              </div>
            </div>
          </div>
          <div className='action tool-block'>
            <div className='tool-btn'>
              Действия
              <svg className='up'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
              </svg>
              <svg className='down'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
              </svg>
            </div>
            <div className='tool'>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Удалить
              </div>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Переместить на этап
              </div>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
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
                  <input type='checkbox' name defaultValue={1} id='check-01' />
                  <label htmlFor='check-01'>
                    <svg className='square'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='img/pic.png' alt />
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
              <div className='user'>
                <div className='checkbox'>
                  <input type='checkbox' name defaultValue={1} id='check-02' />
                  <label htmlFor='check-02'>
                    <svg className='square'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='img/pic.png' alt />
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
                  <input type='checkbox' name defaultValue={1} id='check-03' />
                  <label htmlFor='check-03'>
                    <svg className='square'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='img/pic.png' alt />
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
                  <input type='checkbox' name defaultValue={1} id='check-04' />
                  <label htmlFor='check-04'>
                    <svg className='square'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='img/pic.png' alt />
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
              <div className='user'>
                <div className='checkbox'>
                  <input type='checkbox' name defaultValue={1} id='check-05' />
                  <label htmlFor='check-05'>
                    <svg className='square'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='img/pic.png' alt />
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
                  <input type='checkbox' name defaultValue={1} id='check-06' />
                  <label htmlFor='check-06'>
                    <svg className='square'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='img/pic.png' alt />
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
              <div className='user'>
                <div className='checkbox'>
                  <input type='checkbox' name defaultValue={1} id='check-07' />
                  <label htmlFor='check-07'>
                    <svg className='square'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='img/pic.png' alt />
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
      <div className='user-list rejected'>
        <div className='all-check'>
          <div className='checkbox'>
            <input type='checkbox' name defaultValue={1} id='all-check-rejected' />
            <label htmlFor='all-check-rejected'>
              <svg className='square'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
              </svg>
              <svg className='checked'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
              </svg>
              Выделить все
            </label>
          </div>
          <div className='setting funnel tool-block'>
            <div className='tool-btn'>
              <svg>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#funnel' />
              </svg>
            </div>
            <div className='tool'>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#bell' />
                </svg>
                Удалить
              </div>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#bell' />
                </svg>
                Переместить на этап
              </div>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#bell' />
                </svg>
                Пометить
              </div>
            </div>
          </div>
          <div className='action tool-block'>
            <div className='tool-btn'>
              Действия
              <svg className='up'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
              </svg>
              <svg className='down'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
              </svg>
            </div>
            <div className='tool'>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Удалить
              </div>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Переместить на этап
              </div>
              <div className='tool-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
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
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='img/pic.png' alt />
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
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#square' />
                    </svg>
                    <svg className='checked'>
                      <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#checked' />
                    </svg>
                  </label>
                </div>
                <img src='img/pic.png' alt />
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
