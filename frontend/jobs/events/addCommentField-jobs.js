import commentsFieldArr from './../../constants/commentsFieldArr.js';
import openMsgs from './openMsgs-jobs';

export default function addCommentField(idx) {
  if (idx === 4) {
    this.setState({
      commentFieldData: { idx: -1 },
    });
  } else {
    const initialData = {
      idx,
      type: commentsFieldArr[idx],
      body: '',
      from: '',
      to: '',
      applicant_id: this.state.applicant_id,
      job_id: this.state.job_id,
    };
    this.setState({
      commentFieldData: initialData,
    });
    openMsgs();
  }
}
