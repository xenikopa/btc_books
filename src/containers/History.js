import { connect } from 'react-redux'
import HistoryList from '../components/Sidebar/HistoryList';

const mapStateToProps = ({history}) => {
  return {
    historyList: history.history
  }
}

const History = connect(
  mapStateToProps, 
)(HistoryList)

export default History