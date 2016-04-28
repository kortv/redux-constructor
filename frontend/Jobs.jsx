import React, { Component } from 'react';

import './jobs/SCSS/index.scss';
import setGroupAction from './jobs/events/setGroupAction-jobs';
import groupSubmit from './jobs/events/groupSubmit-jobs';
import isUserChecked from './jobs/events/isUserChecked-jobs';
import getUsers from './jobs/events/getUsers-jobs';
import getData from './jobs/events/getData-jobs';
import sendData from './jobs/events/sendData-jobs';
import del from './jobs/events/del-jobs';
import filter from './jobs/events/filter-jobs';
import addCommentField from './jobs/events/addCommentField-jobs';
import handleChange from './jobs/events/handleChange-jobs';
import handleSubmit from './jobs/events/handleSubmit-jobs';
import dateChange from './jobs/events/dateChange-jobs';
import handleClick from './jobs/events/handleClick-jobs';
import CommentsField from './jobs/CommentsField';
import JobsData from './jobs/JobsData';
import MenuTwo1 from './jobs/components/MenuTwo1';
import Block2 from './jobs/components/Block2';
import Alert3 from './jobs/components/Alert3';
import Block4 from './jobs/components/Block4';
import Block5 from './jobs/components/Block5';
import LeftBlock from './jobs/components/LeftBlock';
import UserList from './jobs/UserList';
import GroupActionBlock from './jobs/GroupActionBlock';

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.groupSubmit = groupSubmit.bind(this);
    this.setGroupAction = setGroupAction.bind(this);
    this.getData = getData.bind(this);
    this.getUsers = getUsers.bind(this);
    this.sendData = sendData.bind(this);
    this.del = del.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.groupSubmit = groupSubmit.bind(this);
    this.handleChange = handleChange.bind(this);
    this.dateChange = dateChange.bind(this);
    this.handleClick = handleClick.bind(this);
    this.filter = filter.bind(this);
    this.filter = filter.bind(this);
    this.isUserChecked = isUserChecked.bind(this);
    this.addCommentField = addCommentField.bind(this);
    this.state = {
      userData: [],
      applicantsData: [],
      commentFieldData: { idx: -1 },
      filter: sessionStorage.getItem('timelineFilter') || '',
      groupData: {},
    };
  }

  componentDidMount = () => {
    this.getData(/* pathToData '/1.json'*/);
    this.getUsers(/* pathToData'/frontend/JSON/job_id.json'*/);
  }


  render() {
    return (
      <div>
        <LeftBlock handleClick={ this.handleClick }>
          <UserList users={ this.state.applicantsData }
             userChecked={this.isUserChecked}
          />
        </LeftBlock>
        <div className='right-block'>
          <GroupActionBlock groupData={ this.state.groupData }
            groupSubmit={this.groupSubmit}
          />
          <div className={`right ${this.state.groupData.action_name ? 'hide' : ''}`}>
            <MenuTwo1 handleClick={ this.handleClick } />
            <Block2 />
            <Alert3 />
            <Block4 handleClick={ this.handleClick }>
              <div className='comments'>
                <CommentsField
                  data={ this.state.commentFieldData } handleSubmit={ this.handleSubmit }
                  dateChange={ this.dateChange } handleChange={ this.handleChange }
                />
                <JobsData klass='comm-list'
                  user={ this.state.userData } handleClick={ this.handleClick }
                />
              </div>
              <div className='btn next-event'>Показать события еще</div>
            </Block4>
            <Block5 />
            <div className='ago'>From workable.com 6 days ago</div>
          </div>
        </div>
      </div>
    );
  }
}