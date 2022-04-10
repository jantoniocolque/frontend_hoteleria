import React from "react";
import Searcher from './Searcher';

export default class SearchForm extends React.Component {
  render() {
    return (
      <Searcher handleSubmit={this.props.handleSubmit} handleRangeDates={this.props.handleRangeDates} />
    );
  }
}
export { SearchForm };